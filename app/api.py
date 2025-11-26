"""Flask API for data analyst."""
import os
import asyncio
from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from dotenv import load_dotenv

from app.models import QueryRequest, ChartRequest, ChatRequest
from app.services import llm_service
from app.utils import data_processor

load_dotenv()

app = Flask(__name__, template_folder="../templates", static_folder="../static")
CORS(app)
app.config['MAX_CONTENT_LENGTH'] = int(os.getenv('MAX_UPLOAD_SIZE', 16 * 1024 * 1024))


def run_async(coro):
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    try:
        return loop.run_until_complete(coro)
    finally:
        loop.close()


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "healthy", "provider": os.getenv("LLM_PROVIDER", "openai")})


@app.route("/api/upload", methods=["POST"])
def upload_file():
    """Upload and process data file."""
    if 'file' not in request.files:
        return jsonify({"error": "No file provided"}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({"error": "No file selected"}), 400

    try:
        content = file.read()
        filename = file.filename.lower()

        if filename.endswith('.csv'):
            summary = data_processor.load_csv(content, file.filename)
        elif filename.endswith(('.xlsx', '.xls')):
            summary = data_processor.load_excel(content, file.filename)
        elif filename.endswith('.json'):
            summary = data_processor.load_json(content, file.filename)
        else:
            return jsonify({"error": "Unsupported file format. Use CSV, Excel, or JSON."}), 400

        return jsonify(summary)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/preview", methods=["GET"])
def get_preview():
    """Get data preview."""
    try:
        rows = request.args.get('rows', 10, type=int)
        preview = data_processor.get_data_preview(rows)
        return jsonify({"data": preview})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/statistics", methods=["GET"])
def get_statistics():
    """Get statistical summary."""
    try:
        columns = request.args.getlist('columns')
        stats = data_processor.get_statistics(columns if columns else None)
        return jsonify(stats)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/correlation", methods=["GET"])
def get_correlation():
    """Get correlation matrix."""
    try:
        columns = request.args.getlist('columns')
        corr = data_processor.get_correlation(columns if columns else None)
        return jsonify(corr)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/outliers/<column>", methods=["GET"])
def detect_outliers(column: str):
    """Detect outliers in a column."""
    try:
        method = request.args.get('method', 'iqr')
        result = data_processor.detect_outliers(column, method)
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/chart", methods=["POST"])
def generate_chart():
    """Generate a chart."""
    try:
        data = request.get_json()
        req = ChartRequest(**data)
        image = data_processor.generate_chart(
            req.chart_type.value, req.x_column, req.y_column, req.group_by, req.title
        )
        return jsonify({"image": image})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/query", methods=["POST"])
def query_data():
    """Natural language query on data."""
    try:
        data = request.get_json()
        req = QueryRequest(**data)
        context = data_processor.get_context_for_llm()
        result = run_async(llm_service.analyze_data(req.query, context, req.language))
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/insights", methods=["GET"])
def get_insights():
    """Generate automatic insights."""
    try:
        language = request.args.get('language', 'en')
        context = data_processor.get_context_for_llm()
        result = run_async(llm_service.generate_insights(context, language))
        return jsonify(result)
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/chat", methods=["POST"])
def chat():
    """Chat about data."""
    try:
        data = request.get_json()
        req = ChatRequest(**data)
        context = data_processor.get_context_for_llm()
        history = [{"role": m.role, "content": m.content} for m in req.history]
        response = run_async(llm_service.chat(req.message, context, history, req.language))
        return jsonify({"response": response})
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    port = int(os.getenv("PORT", 5000))
    debug = os.getenv("FLASK_DEBUG", "false").lower() == "true"
    app.run(host="0.0.0.0", port=port, debug=debug)
