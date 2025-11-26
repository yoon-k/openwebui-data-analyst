"""Data processing utilities."""
import pandas as pd
import numpy as np
import io
import base64
from typing import Dict, List, Any, Optional, Tuple
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import seaborn as sns


class DataProcessor:
    """Handles data file processing and analysis."""

    def __init__(self):
        self.df: Optional[pd.DataFrame] = None
        self.filename: str = ""

    def load_csv(self, file_content: bytes, filename: str) -> Dict[str, Any]:
        """Load CSV file from bytes."""
        try:
            self.df = pd.read_csv(io.BytesIO(file_content))
            self.filename = filename
            return self.get_summary()
        except Exception as e:
            raise ValueError(f"Failed to parse CSV: {str(e)}")

    def load_excel(self, file_content: bytes, filename: str, sheet_name: str = None) -> Dict[str, Any]:
        """Load Excel file from bytes."""
        try:
            self.df = pd.read_excel(io.BytesIO(file_content), sheet_name=sheet_name or 0)
            self.filename = filename
            return self.get_summary()
        except Exception as e:
            raise ValueError(f"Failed to parse Excel: {str(e)}")

    def load_json(self, file_content: bytes, filename: str) -> Dict[str, Any]:
        """Load JSON file from bytes."""
        try:
            self.df = pd.read_json(io.BytesIO(file_content))
            self.filename = filename
            return self.get_summary()
        except Exception as e:
            raise ValueError(f"Failed to parse JSON: {str(e)}")

    def get_summary(self) -> Dict[str, Any]:
        """Get summary of loaded data."""
        if self.df is None:
            raise ValueError("No data loaded")

        column_info = []
        for col in self.df.columns:
            info = {
                "name": col,
                "dtype": str(self.df[col].dtype),
                "non_null_count": int(self.df[col].notna().sum()),
                "null_count": int(self.df[col].isna().sum()),
                "unique_count": int(self.df[col].nunique()),
                "sample_values": self.df[col].dropna().head(3).tolist()
            }
            column_info.append(info)

        numeric_cols = self.df.select_dtypes(include=[np.number]).columns.tolist()
        categorical_cols = self.df.select_dtypes(include=['object', 'category']).columns.tolist()

        return {
            "filename": self.filename,
            "rows": len(self.df),
            "columns": len(self.df.columns),
            "column_info": column_info,
            "memory_usage": f"{self.df.memory_usage(deep=True).sum() / 1024:.2f} KB",
            "numeric_columns": numeric_cols,
            "categorical_columns": categorical_cols
        }

    def get_statistics(self, columns: List[str] = None) -> Dict[str, Any]:
        """Get statistical summary of numeric columns."""
        if self.df is None:
            raise ValueError("No data loaded")

        if columns:
            df_subset = self.df[columns]
        else:
            df_subset = self.df.select_dtypes(include=[np.number])

        stats = df_subset.describe().to_dict()

        # Add additional statistics
        for col in df_subset.columns:
            if col in stats:
                stats[col]['median'] = float(df_subset[col].median())
                stats[col]['skew'] = float(df_subset[col].skew())
                stats[col]['kurtosis'] = float(df_subset[col].kurtosis())

        return stats

    def get_correlation(self, columns: List[str] = None) -> Dict[str, Any]:
        """Get correlation matrix."""
        if self.df is None:
            raise ValueError("No data loaded")

        if columns:
            df_subset = self.df[columns]
        else:
            df_subset = self.df.select_dtypes(include=[np.number])

        corr = df_subset.corr().to_dict()
        return corr

    def detect_outliers(self, column: str, method: str = "iqr") -> Dict[str, Any]:
        """Detect outliers in a column."""
        if self.df is None:
            raise ValueError("No data loaded")

        col_data = self.df[column].dropna()

        if method == "iqr":
            Q1 = col_data.quantile(0.25)
            Q3 = col_data.quantile(0.75)
            IQR = Q3 - Q1
            lower_bound = Q1 - 1.5 * IQR
            upper_bound = Q3 + 1.5 * IQR
            outliers = col_data[(col_data < lower_bound) | (col_data > upper_bound)]
        else:  # z-score
            z_scores = np.abs((col_data - col_data.mean()) / col_data.std())
            outliers = col_data[z_scores > 3]

        return {
            "column": column,
            "method": method,
            "total_values": len(col_data),
            "outlier_count": len(outliers),
            "outlier_percentage": f"{len(outliers) / len(col_data) * 100:.2f}%",
            "outlier_values": outliers.tolist()[:20]  # Limit to first 20
        }

    def query_data(self, query: str) -> pd.DataFrame:
        """Execute a pandas query on the data."""
        if self.df is None:
            raise ValueError("No data loaded")

        try:
            result = self.df.query(query)
            return result
        except Exception as e:
            raise ValueError(f"Invalid query: {str(e)}")

    def generate_chart(self, chart_type: str, x_column: str = None,
                       y_column: str = None, group_by: str = None,
                       title: str = None) -> str:
        """Generate chart and return as base64 image."""
        if self.df is None:
            raise ValueError("No data loaded")

        plt.figure(figsize=(10, 6))
        plt.style.use('seaborn-v0_8-darkgrid')

        if chart_type == "bar":
            if group_by:
                self.df.groupby(group_by)[y_column].mean().plot(kind='bar')
            else:
                self.df[y_column].value_counts().head(10).plot(kind='bar')

        elif chart_type == "line":
            if x_column and y_column:
                plt.plot(self.df[x_column], self.df[y_column])
            else:
                self.df[y_column].plot(kind='line')

        elif chart_type == "pie":
            self.df[x_column].value_counts().head(10).plot(kind='pie', autopct='%1.1f%%')

        elif chart_type == "scatter":
            plt.scatter(self.df[x_column], self.df[y_column], alpha=0.6)
            plt.xlabel(x_column)
            plt.ylabel(y_column)

        elif chart_type == "histogram":
            self.df[x_column].hist(bins=30, edgecolor='black')
            plt.xlabel(x_column)

        elif chart_type == "heatmap":
            numeric_df = self.df.select_dtypes(include=[np.number])
            sns.heatmap(numeric_df.corr(), annot=True, cmap='coolwarm', center=0)

        elif chart_type == "box":
            if group_by:
                self.df.boxplot(column=y_column, by=group_by)
            else:
                self.df[x_column].plot(kind='box')

        plt.title(title or f"{chart_type.capitalize()} Chart")
        plt.tight_layout()

        # Convert to base64
        buffer = io.BytesIO()
        plt.savefig(buffer, format='png', dpi=100, bbox_inches='tight')
        buffer.seek(0)
        image_base64 = base64.b64encode(buffer.getvalue()).decode('utf-8')
        plt.close()

        return f"data:image/png;base64,{image_base64}"

    def get_data_preview(self, rows: int = 10) -> List[Dict[str, Any]]:
        """Get preview of data as list of dicts."""
        if self.df is None:
            raise ValueError("No data loaded")

        return self.df.head(rows).to_dict(orient='records')

    def get_context_for_llm(self) -> str:
        """Generate context string for LLM queries."""
        if self.df is None:
            return "No data loaded"

        summary = self.get_summary()
        stats = self.get_statistics()

        context = f"""Dataset: {summary['filename']}
Rows: {summary['rows']}, Columns: {summary['columns']}

Columns:
"""
        for col in summary['column_info']:
            context += f"- {col['name']} ({col['dtype']}): {col['unique_count']} unique values, {col['null_count']} nulls\n"

        context += f"\nNumeric columns: {', '.join(summary['numeric_columns'])}"
        context += f"\nCategorical columns: {', '.join(summary['categorical_columns'])}"

        if stats:
            context += "\n\nStatistics Summary:\n"
            for col, col_stats in list(stats.items())[:5]:
                context += f"- {col}: mean={col_stats.get('mean', 'N/A'):.2f}, std={col_stats.get('std', 'N/A'):.2f}\n"

        return context


# Global instance
data_processor = DataProcessor()
