# AI Data Analyst

> 📊 AI-powered data analysis with natural language queries and auto-visualization

**[Live Demo](https://yoon-k.github.io/openwebui-data-analyst/)** | [한국어](#한국어) | [日本語](#日本語)

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

## License

MIT License
