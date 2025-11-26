const i18n = {
    en: {
        title: "AI Data Analyst",
        subtitle: "Upload data and get instant AI-powered insights",
        uploadPanel: "DATA SOURCE",
        uploadTitle: "Drop your file here",
        uploadSubtitle: "CSV, Excel, or JSON (max 16MB)",
        columns: "Columns",
        resultsPanel: "ANALYSIS",
        tabData: "Data",
        tabChart: "Chart",
        tabInsights: "Insights",
        tabChat: "Chat",
        rows: "Rows",
        cols: "Columns",
        memory: "Memory",
        chartType: "Chart Type",
        xAxis: "X Axis",
        yAxis: "Y Axis",
        groupBy: "Group By",
        generateChart: "Generate Chart",
        queryPlaceholder: "Ask anything about your data...",
        analyze: "Analyze",
        chatPlaceholder: "Chat about your data...",
        send: "Send",
        noData: "No Data Loaded",
        noDataDesc: "Upload a CSV, Excel, or JSON file to get started",
        generating: "Generating...",
        analyzing: "Analyzing...",
        bar: "Bar Chart", line: "Line Chart", pie: "Pie Chart", scatter: "Scatter Plot",
        histogram: "Histogram", heatmap: "Heatmap", box: "Box Plot",
        welcome: "Hello! I'm your AI data analyst. Upload a dataset and I'll help you:\n\n• Explore and understand your data\n• Generate visualizations\n• Find patterns and insights\n• Answer questions about your data",
        keyFindings: "Key Findings", recommendations: "Recommendations", anomalies: "Anomalies"
    },
    ko: {
        title: "AI 데이터 분석가",
        subtitle: "데이터를 업로드하고 AI 기반 인사이트를 즉시 받아보세요",
        uploadPanel: "데이터 소스",
        uploadTitle: "파일을 여기에 놓으세요",
        uploadSubtitle: "CSV, Excel, 또는 JSON (최대 16MB)",
        columns: "컬럼",
        resultsPanel: "분석",
        tabData: "데이터",
        tabChart: "차트",
        tabInsights: "인사이트",
        tabChat: "채팅",
        rows: "행",
        cols: "열",
        memory: "메모리",
        chartType: "차트 유형",
        xAxis: "X축",
        yAxis: "Y축",
        groupBy: "그룹",
        generateChart: "차트 생성",
        queryPlaceholder: "데이터에 대해 무엇이든 질문하세요...",
        analyze: "분석",
        chatPlaceholder: "데이터에 대해 대화하세요...",
        send: "전송",
        noData: "데이터 없음",
        noDataDesc: "CSV, Excel, 또는 JSON 파일을 업로드하세요",
        generating: "생성 중...",
        analyzing: "분석 중...",
        bar: "막대 차트", line: "선 차트", pie: "파이 차트", scatter: "산점도",
        histogram: "히스토그램", heatmap: "히트맵", box: "박스 플롯",
        welcome: "안녕하세요! AI 데이터 분석가입니다. 데이터셋을 업로드하면 다음을 도와드립니다:\n\n• 데이터 탐색 및 이해\n• 시각화 생성\n• 패턴 및 인사이트 발견\n• 데이터에 대한 질문 답변",
        keyFindings: "주요 발견", recommendations: "권장 사항", anomalies: "이상치"
    },
    ja: {
        title: "AIデータアナリスト",
        subtitle: "データをアップロードしてAI搭載のインサイトを即座に取得",
        uploadPanel: "データソース",
        uploadTitle: "ファイルをここにドロップ",
        uploadSubtitle: "CSV、Excel、またはJSON（最大16MB）",
        columns: "カラム",
        resultsPanel: "分析",
        tabData: "データ",
        tabChart: "チャート",
        tabInsights: "インサイト",
        tabChat: "チャット",
        rows: "行",
        cols: "列",
        memory: "メモリ",
        chartType: "チャートタイプ",
        xAxis: "X軸",
        yAxis: "Y軸",
        groupBy: "グループ",
        generateChart: "チャート生成",
        queryPlaceholder: "データについて何でも質問...",
        analyze: "分析",
        chatPlaceholder: "データについてチャット...",
        send: "送信",
        noData: "データなし",
        noDataDesc: "CSV、Excel、またはJSONファイルをアップロードしてください",
        generating: "生成中...",
        analyzing: "分析中...",
        bar: "棒グラフ", line: "折れ線グラフ", pie: "円グラフ", scatter: "散布図",
        histogram: "ヒストグラム", heatmap: "ヒートマップ", box: "箱ひげ図",
        welcome: "こんにちは！AIデータアナリストです。データセットをアップロードすると以下をお手伝いします：\n\n• データの探索と理解\n• 可視化の生成\n• パターンとインサイトの発見\n• データに関する質問への回答",
        keyFindings: "主な発見", recommendations: "推奨事項", anomalies: "異常値"
    }
};

let currentLang = 'en';
let currentTab = 'data';
let dataSummary = null;
let chartImage = null;
let insights = null;
let chatHistory = [];

document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    setupUploadZone();
    addWelcomeMessage();
});

function setLanguage(lang) {
    currentLang = lang;
    const t = i18n[lang];
    document.getElementById('title').textContent = t.title;
    document.getElementById('subtitle').textContent = t.subtitle;
    document.getElementById('uploadPanelTitle').textContent = t.uploadPanel;
    document.getElementById('uploadTitle').textContent = t.uploadTitle;
    document.getElementById('uploadSubtitle').textContent = t.uploadSubtitle;
    document.getElementById('columnsTitle').textContent = t.columns;
    document.getElementById('resultsPanelTitle').textContent = t.resultsPanel;
    document.getElementById('tabData').textContent = t.tabData;
    document.getElementById('tabChart').textContent = t.tabChart;
    document.getElementById('tabInsights').textContent = t.tabInsights;
    document.getElementById('tabChat').textContent = t.tabChat;
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
    updateResults();
}

function setupUploadZone() {
    const zone = document.getElementById('uploadZone');
    const input = document.getElementById('fileInput');
    zone.addEventListener('click', () => input.click());
    zone.addEventListener('dragover', e => { e.preventDefault(); zone.classList.add('dragover'); });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', e => { e.preventDefault(); zone.classList.remove('dragover'); if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]); });
    input.addEventListener('change', e => { if (e.target.files.length) handleFile(e.target.files[0]); });
}

async function handleFile(file) {
    const t = i18n[currentLang];
    const formData = new FormData();
    formData.append('file', file);
    document.getElementById('fileInfo').innerHTML = `<div class="loading"><div class="spinner"></div>Loading...</div>`;
    try {
        const response = await fetch('/api/upload', { method: 'POST', body: formData });
        if (!response.ok) throw new Error('Upload failed');
        dataSummary = await response.json();
        renderFileInfo();
        renderColumnList();
        updateResults();
    } catch (error) {
        document.getElementById('fileInfo').innerHTML = `<div class="empty-state"><p>${error.message}</p></div>`;
    }
}

function renderFileInfo() {
    if (!dataSummary) return;
    const t = i18n[currentLang];
    document.getElementById('fileInfo').innerHTML = `
        <div class="file-info">
            <div class="file-name">📄 ${dataSummary.filename}</div>
            <div class="file-meta">${dataSummary.rows} ${t.rows} • ${dataSummary.columns} ${t.cols} • ${dataSummary.memory_usage}</div>
        </div>`;
}

function renderColumnList() {
    if (!dataSummary) return;
    const list = document.getElementById('columnList');
    list.innerHTML = dataSummary.column_info.map(col => `
        <div class="column-item">
            <span class="column-name">${col.name}</span>
            <span class="column-type">${col.dtype}</span>
        </div>`).join('');
}

function showTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
    updateResults();
}

function updateResults() {
    const container = document.getElementById('resultsContainer');
    const t = i18n[currentLang];
    if (!dataSummary) {
        container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📊</div><h3>${t.noData}</h3><p>${t.noDataDesc}</p></div>`;
        return;
    }
    if (currentTab === 'data') renderDataTab(container, t);
    else if (currentTab === 'chart') renderChartTab(container, t);
    else if (currentTab === 'insights') renderInsightsTab(container, t);
    else if (currentTab === 'chat') renderChatTab(container, t);
}

async function renderDataTab(container, t) {
    container.innerHTML = `<div class="loading"><div class="spinner"></div>Loading...</div>`;
    try {
        const response = await fetch('/api/preview?rows=20');
        const data = await response.json();
        if (data.data && data.data.length > 0) {
            const cols = Object.keys(data.data[0]);
            container.innerHTML = `
                <div style="overflow-x:auto;">
                    <table class="data-table">
                        <thead><tr>${cols.map(c => `<th>${c}</th>`).join('')}</tr></thead>
                        <tbody>${data.data.map(row => `<tr>${cols.map(c => `<td>${row[c] ?? ''}</td>`).join('')}</tr>`).join('')}</tbody>
                    </table>
                </div>`;
        }
    } catch (error) {
        container.innerHTML = `<div class="empty-state"><p>Error loading data</p></div>`;
    }
}

function renderChartTab(container, t) {
    const numCols = dataSummary.numeric_columns || [];
    const catCols = dataSummary.categorical_columns || [];
    const allCols = [...numCols, ...catCols];
    container.innerHTML = `
        <div class="chart-options">
            <div class="chart-option"><label>${t.chartType}</label><select id="chartType">
                <option value="bar">${t.bar}</option><option value="line">${t.line}</option><option value="pie">${t.pie}</option>
                <option value="scatter">${t.scatter}</option><option value="histogram">${t.histogram}</option>
                <option value="heatmap">${t.heatmap}</option><option value="box">${t.box}</option>
            </select></div>
            <div class="chart-option"><label>${t.xAxis}</label><select id="xColumn"><option value="">-</option>${allCols.map(c => `<option value="${c}">${c}</option>`).join('')}</select></div>
            <div class="chart-option"><label>${t.yAxis}</label><select id="yColumn"><option value="">-</option>${numCols.map(c => `<option value="${c}">${c}</option>`).join('')}</select></div>
            <div class="chart-option"><label>${t.groupBy}</label><select id="groupBy"><option value="">-</option>${catCols.map(c => `<option value="${c}">${c}</option>`).join('')}</select></div>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-bottom:1rem;" onclick="generateChart()">${t.generateChart}</button>
        <div id="chartContainer" class="chart-container">${chartImage ? `<img src="${chartImage}" alt="Chart">` : ''}</div>`;
}

async function generateChart() {
    const t = i18n[currentLang];
    const container = document.getElementById('chartContainer');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>${t.generating}</div>`;
    try {
        const response = await fetch('/api/chart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chart_type: document.getElementById('chartType').value,
                x_column: document.getElementById('xColumn').value || null,
                y_column: document.getElementById('yColumn').value || null,
                group_by: document.getElementById('groupBy').value || null
            })
        });
        const data = await response.json();
        if (data.image) {
            chartImage = data.image;
            container.innerHTML = `<img src="${chartImage}" alt="Chart">`;
        } else {
            container.innerHTML = `<div class="empty-state"><p>${data.error || 'Failed to generate chart'}</p></div>`;
        }
    } catch (error) {
        container.innerHTML = `<div class="empty-state"><p>Error generating chart</p></div>`;
    }
}

async function renderInsightsTab(container, t) {
    container.innerHTML = `
        <div style="margin-bottom:1rem;">
            <input type="text" id="queryInput" class="query-input" placeholder="${t.queryPlaceholder}" onkeypress="if(event.key==='Enter')analyzeQuery()">
        </div>
        <button class="btn btn-primary" style="width:100%;margin-bottom:1rem;" onclick="analyzeQuery()">${t.analyze}</button>
        <div id="insightsContainer">${insights ? renderInsightsContent(insights, t) : ''}</div>`;
}

async function analyzeQuery() {
    const t = i18n[currentLang];
    const query = document.getElementById('queryInput').value;
    if (!query) return;
    const container = document.getElementById('insightsContainer');
    container.innerHTML = `<div class="loading"><div class="spinner"></div>${t.analyzing}</div>`;
    try {
        const response = await fetch('/api/query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, language: currentLang })
        });
        insights = await response.json();
        container.innerHTML = renderInsightsContent(insights, t);
    } catch (error) {
        container.innerHTML = `<div class="empty-state"><p>Error analyzing data</p></div>`;
    }
}

function renderInsightsContent(data, t) {
    return `
        <div class="insight-card">
            <div class="insight-title">💡 Answer</div>
            <p>${data.answer || ''}</p>
        </div>
        ${data.insights?.length ? `<div class="insight-card"><div class="insight-title">${t.keyFindings}</div><ul class="insight-list">${data.insights.map(i => `<li>${i}</li>`).join('')}</ul></div>` : ''}
        ${data.suggested_charts?.length ? `<div class="insight-card"><div class="insight-title">📊 Suggested Charts</div><ul class="insight-list">${data.suggested_charts.map(c => `<li>${c.type}: ${c.description || ''}</li>`).join('')}</ul></div>` : ''}`;
}

function renderChatTab(container, t) {
    container.innerHTML = `
        <div id="chatMessages" class="chat-messages"></div>
        <div class="chat-input-container">
            <input type="text" id="chatInput" class="query-input" placeholder="${t.chatPlaceholder}" onkeypress="if(event.key==='Enter')sendChatMessage()">
            <button class="btn btn-primary" onclick="sendChatMessage()">${t.send}</button>
        </div>`;
    renderChatMessages();
}

function addWelcomeMessage() {
    chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }];
}

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    if (!message) return;
    input.value = '';
    chatHistory.push({ role: 'user', content: message });
    renderChatMessages();
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message, language: currentLang, history: chatHistory.slice(-10) })
        });
        const data = await response.json();
        chatHistory.push({ role: 'assistant', content: data.response });
        renderChatMessages();
    } catch (error) {
        chatHistory.push({ role: 'assistant', content: 'Error occurred. Please try again.' });
        renderChatMessages();
    }
}

function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;
    container.innerHTML = chatHistory.map(m => `<div class="message ${m.role}">${m.content.replace(/\n/g, '<br>')}</div>`).join('');
    container.scrollTop = container.scrollHeight;
}
