"""Data models for data analyst."""
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from enum import Enum


class ChartType(str, Enum):
    """Types of charts."""
    BAR = "bar"
    LINE = "line"
    PIE = "pie"
    SCATTER = "scatter"
    HISTOGRAM = "histogram"
    HEATMAP = "heatmap"
    BOX = "box"


class AnalysisType(str, Enum):
    """Types of analysis."""
    SUMMARY = "summary"
    CORRELATION = "correlation"
    DISTRIBUTION = "distribution"
    TREND = "trend"
    OUTLIERS = "outliers"
    COMPARISON = "comparison"


class ColumnInfo(BaseModel):
    """Information about a data column."""
    name: str
    dtype: str
    non_null_count: int
    null_count: int
    unique_count: int
    sample_values: List[Any]


class DataSummary(BaseModel):
    """Summary of uploaded data."""
    filename: str
    rows: int
    columns: int
    column_info: List[ColumnInfo]
    memory_usage: str
    numeric_columns: List[str]
    categorical_columns: List[str]


class QueryRequest(BaseModel):
    """Request model for natural language query."""
    query: str = Field(..., description="Natural language query about the data")
    language: str = Field("en", description="UI language")


class ChartRequest(BaseModel):
    """Request model for chart generation."""
    chart_type: ChartType
    x_column: Optional[str] = None
    y_column: Optional[str] = None
    group_by: Optional[str] = None
    title: Optional[str] = None


class AnalysisRequest(BaseModel):
    """Request model for data analysis."""
    analysis_type: AnalysisType
    columns: List[str] = Field(default_factory=list)
    options: Dict[str, Any] = Field(default_factory=dict)


class ChatMessage(BaseModel):
    """Chat message model."""
    role: str
    content: str


class ChatRequest(BaseModel):
    """Request model for chat."""
    message: str
    language: str = "en"
    history: List[ChatMessage] = Field(default_factory=list)


class InsightResult(BaseModel):
    """Result of data insight generation."""
    title: str
    description: str
    key_findings: List[str]
    recommendations: List[str]
    chart_suggestions: List[Dict[str, Any]]
