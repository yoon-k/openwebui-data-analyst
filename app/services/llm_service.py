"""LLM service for data analyst."""
import os
import json
import aiohttp
from typing import Optional, List, Dict, Any
from abc import ABC, abstractmethod


class LLMProvider(ABC):
    @abstractmethod
    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        pass

    @abstractmethod
    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        pass


class OpenAIProvider(LLMProvider):
    def __init__(self):
        self.api_key = os.getenv("OPENAI_API_KEY", "")
        self.model = os.getenv("OPENAI_MODEL", "gpt-4-turbo-preview")
        self.base_url = "https://api.openai.com/v1"

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        messages = []
        if system_prompt:
            messages.append({"role": "system", "content": system_prompt})
        messages.append({"role": "user", "content": prompt})
        return await self.chat(messages)

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        if system_prompt and (not messages or messages[0].get("role") != "system"):
            messages = [{"role": "system", "content": system_prompt}] + messages

        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/chat/completions",
                headers={"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json"},
                json={"model": self.model, "messages": messages, "temperature": 0.3, "max_tokens": 4096}
            ) as response:
                if response.status != 200:
                    raise Exception(f"OpenAI API error: {await response.text()}")
                data = await response.json()
                return data["choices"][0]["message"]["content"]


class OllamaProvider(LLMProvider):
    def __init__(self):
        self.base_url = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
        self.model = os.getenv("OLLAMA_MODEL", "llama2:13b")

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        full_prompt = f"{system_prompt}\n\n{prompt}" if system_prompt else prompt
        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/api/generate",
                json={"model": self.model, "prompt": full_prompt, "stream": False}
            ) as response:
                if response.status != 200:
                    raise Exception(f"Ollama API error: {await response.text()}")
                data = await response.json()
                return data["response"]

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        if system_prompt:
            messages = [{"role": "system", "content": system_prompt}] + messages
        async with aiohttp.ClientSession() as session:
            async with session.post(
                f"{self.base_url}/api/chat",
                json={"model": self.model, "messages": messages, "stream": False}
            ) as response:
                if response.status != 200:
                    raise Exception(f"Ollama API error: {await response.text()}")
                data = await response.json()
                return data["message"]["content"]


class AnthropicProvider(LLMProvider):
    def __init__(self):
        self.api_key = os.getenv("ANTHROPIC_API_KEY", "")
        self.model = os.getenv("ANTHROPIC_MODEL", "claude-3-sonnet-20240229")
        self.base_url = "https://api.anthropic.com/v1"

    async def generate(self, prompt: str, system_prompt: str = "") -> str:
        return await self.chat([{"role": "user", "content": prompt}], system_prompt)

    async def chat(self, messages: List[Dict[str, str]], system_prompt: str = "") -> str:
        filtered = [m for m in messages if m.get("role") != "system"]
        async with aiohttp.ClientSession() as session:
            payload = {"model": self.model, "max_tokens": 4096, "messages": filtered}
            if system_prompt:
                payload["system"] = system_prompt
            async with session.post(
                f"{self.base_url}/messages",
                headers={"x-api-key": self.api_key, "anthropic-version": "2023-06-01", "Content-Type": "application/json"},
                json=payload
            ) as response:
                if response.status != 200:
                    raise Exception(f"Anthropic API error: {await response.text()}")
                data = await response.json()
                return data["content"][0]["text"]


class LLMService:
    _instance = None
    _provider: Optional[LLMProvider] = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

    def __init__(self):
        if self._provider is None:
            provider_name = os.getenv("LLM_PROVIDER", "openai").lower()
            if provider_name == "ollama":
                self._provider = OllamaProvider()
            elif provider_name == "anthropic":
                self._provider = AnthropicProvider()
            else:
                self._provider = OpenAIProvider()

    async def analyze_data(self, query: str, data_context: str, ui_language: str = "en") -> Dict[str, Any]:
        """Analyze data based on natural language query."""
        system_prompt = self._get_analysis_system_prompt(ui_language)
        prompt = f"""Data Context:
{data_context}

User Query: {query}

Analyze the data and provide insights. Return JSON:
{{
    "answer": "Direct answer to the query",
    "insights": ["Key insight 1", "Key insight 2"],
    "suggested_charts": [
        {{"type": "bar|line|pie|scatter", "x": "column_name", "y": "column_name", "description": "Why this chart"}}
    ],
    "pandas_query": "Optional pandas query string if applicable"
}}"""

        response = await self._provider.generate(prompt, system_prompt)
        return self._parse_json_response(response)

    async def generate_insights(self, data_context: str, ui_language: str = "en") -> Dict[str, Any]:
        """Generate automatic insights from data."""
        system_prompt = self._get_insight_system_prompt(ui_language)
        prompt = f"""Data Context:
{data_context}

Analyze this dataset and provide comprehensive insights. Return JSON:
{{
    "title": "Insight title",
    "summary": "Brief overview",
    "key_findings": ["Finding 1", "Finding 2", "Finding 3"],
    "anomalies": ["Any unusual patterns or outliers"],
    "recommendations": ["Action recommendation 1", "Action recommendation 2"],
    "best_visualizations": [
        {{"type": "chart_type", "columns": ["col1", "col2"], "reason": "Why this visualization"}}
    ]
}}"""

        response = await self._provider.generate(prompt, system_prompt)
        return self._parse_json_response(response)

    async def chat(self, message: str, data_context: str, history: List[Dict] = None, ui_language: str = "en") -> str:
        """Chat about data."""
        system_prompt = self._get_chat_system_prompt(ui_language, data_context)
        messages = history or []
        messages.append({"role": "user", "content": message})
        return await self._provider.chat(messages, system_prompt)

    def _get_analysis_system_prompt(self, lang: str) -> str:
        lang_inst = {"en": "Respond in English.", "ko": "한국어로 응답해주세요.", "ja": "日本語で応答してください."}
        return f"""You are an expert data analyst. Analyze data and provide actionable insights.
{lang_inst.get(lang, lang_inst['en'])}
Return ONLY valid JSON."""

    def _get_insight_system_prompt(self, lang: str) -> str:
        lang_inst = {"en": "Respond in English.", "ko": "한국어로 응답해주세요.", "ja": "日本語で応答してください."}
        return f"""You are an expert data scientist. Generate comprehensive data insights.
{lang_inst.get(lang, lang_inst['en'])}
Return ONLY valid JSON."""

    def _get_chat_system_prompt(self, lang: str, data_context: str) -> str:
        lang_inst = {"en": "Respond in English.", "ko": "한국어로 응답해주세요.", "ja": "日本語で応答してください."}
        return f"""You are a helpful data analyst assistant.

Data Context:
{data_context}

Help users understand their data. Be concise and actionable.
{lang_inst.get(lang, lang_inst['en'])}"""

    def _parse_json_response(self, response: str) -> Dict[str, Any]:
        try:
            response = response.strip()
            if response.startswith("```"):
                lines = response.split("\n")
                response = "\n".join(lines[1:-1] if lines[-1] == "```" else lines[1:])
            return json.loads(response)
        except json.JSONDecodeError:
            return {"answer": response, "insights": [], "suggested_charts": []}


llm_service = LLMService()
