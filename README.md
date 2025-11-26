# AI Data Analyst

> 📊 AI-powered data analysis with natural language queries and auto-visualization

**[Live Demo](https://yoon-k.github.io/openwebui-data-analyst/)** | [한국어](#한국어) | [日本語](#日本語)

---

## 📚 About This Project

> **🎓 Reference & Study Project**
>
> This project is created for **learning and reference purposes**. It's a "**Fullstack with AI**" collaboration project - not built by a traditional fullstack developer, but through partnership with AI assistance.
>
> Use this as a reference for:
> - Data processing with Pandas
> - Data visualization with Matplotlib/Seaborn
> - Natural language to SQL/code translation
> - File handling (CSV, Excel, JSON)
>
> 🚀 **Continuous Improvement**: This project is under active development with ongoing enhancements planned.

---

## Overview

AI Data Analyst combines the power of pandas, matplotlib, and Large Language Models to provide instant data insights. Upload any CSV, Excel, or JSON file and start asking questions in natural language.

## Features

- **📁 Multi-Format Support**: CSV, Excel (.xlsx/.xls), JSON
- **🔍 Natural Language Query**: Ask questions about your data
- **📈 Auto Visualization**: Bar, line, pie, scatter, histogram, heatmap, box plots
- **💡 AI Insights**: Automatic pattern detection and recommendations
- **📊 Statistical Analysis**: Correlation, outliers, distribution
- **💬 Interactive Chat**: Conversational data exploration

## Quick Start

```bash
git clone https://github.com/yoon-k/openwebui-data-analyst.git
cd openwebui-data-analyst
pip install -r requirements.txt
cp .env.example .env
python -m app.api
```

Or with Docker:

```bash
docker-compose up -d
```

## API Reference

### POST /api/upload
Upload data file (CSV, Excel, JSON)

### GET /api/preview
Get data preview

### GET /api/statistics
Get statistical summary

### POST /api/chart
Generate visualization

### POST /api/query
Natural language data query

### POST /api/chat
Interactive chat about data

## Technical Stack

- **Flask**: Web framework
- **Pandas**: Data processing
- **Matplotlib/Seaborn**: Visualization
- **OpenAI/Ollama/Anthropic**: LLM providers

---

## 한국어

AI 데이터 분석가는 pandas, matplotlib, 대규모 언어 모델을 결합하여 즉각적인 데이터 인사이트를 제공합니다.

### 주요 기능
- CSV, Excel, JSON 파일 지원
- 자연어로 데이터 질문
- 자동 차트 생성
- AI 기반 인사이트 및 패턴 감지

---

## 日本語

AIデータアナリストは、pandas、matplotlib、大規模言語モデルを組み合わせて、即座のデータインサイトを提供します。

### 主な機能
- CSV、Excel、JSONファイル対応
- 自然言語でデータに質問
- 自動チャート生成
- AIベースのインサイトとパターン検出

---

## 🔬 Technical Study Guide

### Key Technologies Explained

#### 1. Pandas DataFrame Operations
Pandas is the core library for data manipulation in Python.

```python
import pandas as pd

# Reading different file formats
df_csv = pd.read_csv('data.csv')
df_excel = pd.read_excel('data.xlsx')
df_json = pd.read_json('data.json')

# Basic operations
df.head(10)                    # First 10 rows
df.describe()                  # Statistical summary
df.info()                      # Data types and memory
df.groupby('category').mean()  # Group aggregation
```

**Key Pandas Concepts:**
- **DataFrame**: 2D labeled data structure
- **Series**: 1D labeled array
- **Index**: Row labels
- **dtype**: Data type of columns

#### 2. Matplotlib/Seaborn Visualization
Creating publication-quality visualizations.

```python
import matplotlib.pyplot as plt
import seaborn as sns
import io
import base64

def generate_chart(df, chart_type, x_col, y_col):
    fig, ax = plt.subplots(figsize=(10, 6))

    if chart_type == 'bar':
        sns.barplot(data=df, x=x_col, y=y_col, ax=ax)
    elif chart_type == 'line':
        sns.lineplot(data=df, x=x_col, y=y_col, ax=ax)
    elif chart_type == 'scatter':
        sns.scatterplot(data=df, x=x_col, y=y_col, ax=ax)
    elif chart_type == 'heatmap':
        sns.heatmap(df.corr(), annot=True, ax=ax)

    # Convert to base64 for web display
    buffer = io.BytesIO()
    plt.savefig(buffer, format='png', dpi=100, bbox_inches='tight')
    buffer.seek(0)
    return base64.b64encode(buffer.getvalue()).decode()
```

**Chart Types:**
- `bar`: Categorical comparisons
- `line`: Trends over time
- `scatter`: Relationship between variables
- `histogram`: Distribution
- `heatmap`: Correlation matrix

#### 3. Natural Language to Code Translation
Using LLMs to convert natural language queries to pandas code.

```python
async def query_to_pandas(query: str, df_info: str) -> str:
    system_prompt = f"""You are a data analyst. Convert the user's question
    into pandas code. The DataFrame 'df' has these columns:
    {df_info}

    Return only executable Python code."""

    response = await llm.generate(system_prompt, query)
    return extract_code(response)

# Execute safely
def safe_execute(code: str, df: pd.DataFrame) -> dict:
    local_vars = {'df': df, 'pd': pd, 'np': np}
    exec(code, {}, local_vars)
    return local_vars.get('result')
```

**Safety Considerations:**
- Sandbox execution environment
- Whitelist allowed operations
- Timeout for long-running queries
- Input validation

#### 4. File Upload Handling
Processing different file formats securely.

```python
from werkzeug.utils import secure_filename
import tempfile
import os

ALLOWED_EXTENSIONS = {'csv', 'xlsx', 'xls', 'json'}

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/api/upload', methods=['POST'])
def upload_file():
    file = request.files['file']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        ext = filename.rsplit('.', 1)[1].lower()

        with tempfile.NamedTemporaryFile(delete=False, suffix=f'.{ext}') as tmp:
            file.save(tmp.name)

            if ext == 'csv':
                df = pd.read_csv(tmp.name)
            elif ext in ('xlsx', 'xls'):
                df = pd.read_excel(tmp.name)
            elif ext == 'json':
                df = pd.read_json(tmp.name)

            os.unlink(tmp.name)  # Clean up
            return analyze_dataframe(df)
```

#### 5. Statistical Analysis
Automated statistical insights.

```python
def generate_statistics(df: pd.DataFrame) -> dict:
    stats = {
        'row_count': len(df),
        'column_count': len(df.columns),
        'memory_usage': df.memory_usage(deep=True).sum(),
        'missing_values': df.isnull().sum().to_dict(),
        'numeric_stats': df.describe().to_dict(),
        'correlations': df.select_dtypes(include=[np.number]).corr().to_dict(),
        'outliers': detect_outliers(df),
        'data_types': df.dtypes.astype(str).to_dict()
    }
    return stats

def detect_outliers(df, threshold=1.5):
    """Detect outliers using IQR method"""
    outliers = {}
    for col in df.select_dtypes(include=[np.number]):
        Q1, Q3 = df[col].quantile([0.25, 0.75])
        IQR = Q3 - Q1
        outlier_count = ((df[col] < Q1 - threshold*IQR) |
                        (df[col] > Q3 + threshold*IQR)).sum()
        if outlier_count > 0:
            outliers[col] = int(outlier_count)
    return outliers
```

### Learning Path Recommendations

1. **Beginner**: Start with pandas basics and CSV handling
2. **Intermediate**: Add visualization with matplotlib/seaborn
3. **Advanced**: Implement natural language query translation
4. **Expert**: Build automated insight generation and ML predictions

---

## License

MIT License

## Author

**yoon-k** - [GitHub Profile](https://github.com/yoon-k)

---

⭐ If this project helps you learn data analysis, please give it a star!
