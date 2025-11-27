// AI Data Analyst - Production JavaScript
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
        tabStats: "Statistics",
        tabInsights: "Insights",
        tabChat: "Chat",
        tabHistory: "History",
        rows: "Rows",
        cols: "Columns",
        memory: "Memory",
        chartType: "Chart Type",
        xAxis: "X Axis",
        yAxis: "Y Axis",
        groupBy: "Group By",
        colorBy: "Color By",
        generateChart: "Generate Chart",
        exportChart: "Export",
        queryPlaceholder: "Ask anything about your data...",
        analyze: "Analyze",
        chatPlaceholder: "Chat about your data...",
        send: "Send",
        noData: "No Data Loaded",
        noDataDesc: "Upload a CSV, Excel, or JSON file to get started",
        generating: "Generating...",
        analyzing: "Analyzing...",
        loading: "Loading...",
        bar: "Bar Chart",
        line: "Line Chart",
        pie: "Pie Chart",
        scatter: "Scatter Plot",
        histogram: "Histogram",
        heatmap: "Heatmap",
        box: "Box Plot",
        area: "Area Chart",
        donut: "Donut Chart",
        radar: "Radar Chart",
        welcome: "Hello! I'm your AI data analyst. Upload a dataset and I'll help you:\n\n• Explore and understand your data\n• Generate visualizations\n• Find patterns and insights\n• Answer questions about your data",
        keyFindings: "Key Findings",
        recommendations: "Recommendations",
        anomalies: "Anomalies",
        statistics: "Statistics",
        mean: "Mean",
        median: "Median",
        stdDev: "Std Dev",
        min: "Min",
        max: "Max",
        unique: "Unique",
        missing: "Missing",
        correlation: "Correlation",
        distribution: "Distribution",
        summary: "Summary",
        dataTypes: "Data Types",
        numeric: "Numeric",
        categorical: "Categorical",
        datetime: "DateTime",
        copy: "Copy",
        download: "Download",
        clear: "Clear",
        refresh: "Refresh",
        export: "Export",
        noHistory: "No History",
        noHistoryDesc: "Your analysis history will appear here",
        clearHistory: "Clear History",
        view: "View",
        delete: "Delete",
        saveAnalysis: "Save Analysis",
        savedSuccessfully: "Saved successfully!",
        errorOccurred: "An error occurred",
        fileLoaded: "File loaded successfully",
        chartGenerated: "Chart generated",
        analysisComplete: "Analysis complete"
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
        tabStats: "통계",
        tabInsights: "인사이트",
        tabChat: "채팅",
        tabHistory: "히스토리",
        rows: "행",
        cols: "열",
        memory: "메모리",
        chartType: "차트 유형",
        xAxis: "X축",
        yAxis: "Y축",
        groupBy: "그룹",
        colorBy: "색상 기준",
        generateChart: "차트 생성",
        exportChart: "내보내기",
        queryPlaceholder: "데이터에 대해 무엇이든 질문하세요...",
        analyze: "분석",
        chatPlaceholder: "데이터에 대해 대화하세요...",
        send: "전송",
        noData: "데이터 없음",
        noDataDesc: "CSV, Excel, 또는 JSON 파일을 업로드하세요",
        generating: "생성 중...",
        analyzing: "분석 중...",
        loading: "로딩 중...",
        bar: "막대 차트",
        line: "선 차트",
        pie: "파이 차트",
        scatter: "산점도",
        histogram: "히스토그램",
        heatmap: "히트맵",
        box: "박스 플롯",
        area: "영역 차트",
        donut: "도넛 차트",
        radar: "레이더 차트",
        welcome: "안녕하세요! AI 데이터 분석가입니다. 데이터셋을 업로드하면 다음을 도와드립니다:\n\n• 데이터 탐색 및 이해\n• 시각화 생성\n• 패턴 및 인사이트 발견\n• 데이터에 대한 질문 답변",
        keyFindings: "주요 발견",
        recommendations: "권장 사항",
        anomalies: "이상치",
        statistics: "통계",
        mean: "평균",
        median: "중앙값",
        stdDev: "표준편차",
        min: "최소",
        max: "최대",
        unique: "고유값",
        missing: "결측치",
        correlation: "상관관계",
        distribution: "분포",
        summary: "요약",
        dataTypes: "데이터 유형",
        numeric: "숫자형",
        categorical: "범주형",
        datetime: "날짜시간",
        copy: "복사",
        download: "다운로드",
        clear: "지우기",
        refresh: "새로고침",
        export: "내보내기",
        noHistory: "히스토리 없음",
        noHistoryDesc: "분석 히스토리가 여기에 표시됩니다",
        clearHistory: "히스토리 삭제",
        view: "보기",
        delete: "삭제",
        saveAnalysis: "분석 저장",
        savedSuccessfully: "저장되었습니다!",
        errorOccurred: "오류가 발생했습니다",
        fileLoaded: "파일이 로드되었습니다",
        chartGenerated: "차트가 생성되었습니다",
        analysisComplete: "분석이 완료되었습니다"
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
        tabStats: "統計",
        tabInsights: "インサイト",
        tabChat: "チャット",
        tabHistory: "履歴",
        rows: "行",
        cols: "列",
        memory: "メモリ",
        chartType: "チャートタイプ",
        xAxis: "X軸",
        yAxis: "Y軸",
        groupBy: "グループ",
        colorBy: "色分け",
        generateChart: "チャート生成",
        exportChart: "エクスポート",
        queryPlaceholder: "データについて何でも質問...",
        analyze: "分析",
        chatPlaceholder: "データについてチャット...",
        send: "送信",
        noData: "データなし",
        noDataDesc: "CSV、Excel、またはJSONファイルをアップロードしてください",
        generating: "生成中...",
        analyzing: "分析中...",
        loading: "読み込み中...",
        bar: "棒グラフ",
        line: "折れ線グラフ",
        pie: "円グラフ",
        scatter: "散布図",
        histogram: "ヒストグラム",
        heatmap: "ヒートマップ",
        box: "箱ひげ図",
        area: "面グラフ",
        donut: "ドーナツチャート",
        radar: "レーダーチャート",
        welcome: "こんにちは！AIデータアナリストです。データセットをアップロードすると以下をお手伝いします：\n\n• データの探索と理解\n• 可視化の生成\n• パターンとインサイトの発見\n• データに関する質問への回答",
        keyFindings: "主な発見",
        recommendations: "推奨事項",
        anomalies: "異常値",
        statistics: "統計",
        mean: "平均",
        median: "中央値",
        stdDev: "標準偏差",
        min: "最小",
        max: "最大",
        unique: "ユニーク",
        missing: "欠損",
        correlation: "相関",
        distribution: "分布",
        summary: "要約",
        dataTypes: "データ型",
        numeric: "数値",
        categorical: "カテゴリ",
        datetime: "日時",
        copy: "コピー",
        download: "ダウンロード",
        clear: "クリア",
        refresh: "更新",
        export: "エクスポート",
        noHistory: "履歴なし",
        noHistoryDesc: "分析履歴がここに表示されます",
        clearHistory: "履歴をクリア",
        view: "表示",
        delete: "削除",
        saveAnalysis: "分析を保存",
        savedSuccessfully: "保存しました！",
        errorOccurred: "エラーが発生しました",
        fileLoaded: "ファイルが読み込まれました",
        chartGenerated: "チャートが生成されました",
        analysisComplete: "分析が完了しました"
    },
    zh: {
        title: "AI数据分析师",
        subtitle: "上传数据，获取即时AI驱动的洞察",
        uploadPanel: "数据源",
        uploadTitle: "将文件拖放到这里",
        uploadSubtitle: "CSV、Excel或JSON（最大16MB）",
        columns: "列",
        resultsPanel: "分析",
        tabData: "数据",
        tabChart: "图表",
        tabStats: "统计",
        tabInsights: "洞察",
        tabChat: "聊天",
        tabHistory: "历史",
        rows: "行",
        cols: "列",
        memory: "内存",
        chartType: "图表类型",
        xAxis: "X轴",
        yAxis: "Y轴",
        groupBy: "分组",
        colorBy: "颜色",
        generateChart: "生成图表",
        exportChart: "导出",
        queryPlaceholder: "关于数据随便问...",
        analyze: "分析",
        chatPlaceholder: "与数据对话...",
        send: "发送",
        noData: "无数据",
        noDataDesc: "请上传CSV、Excel或JSON文件",
        generating: "生成中...",
        analyzing: "分析中...",
        loading: "加载中...",
        bar: "柱状图",
        line: "折线图",
        pie: "饼图",
        scatter: "散点图",
        histogram: "直方图",
        heatmap: "热力图",
        box: "箱线图",
        area: "面积图",
        donut: "环形图",
        radar: "雷达图",
        welcome: "您好！我是AI数据分析师。上传数据集后，我将帮助您：\n\n• 探索和理解您的数据\n• 生成可视化\n• 发现模式和洞察\n• 回答关于数据的问题",
        keyFindings: "主要发现",
        recommendations: "建议",
        anomalies: "异常",
        statistics: "统计",
        mean: "均值",
        median: "中位数",
        stdDev: "标准差",
        min: "最小",
        max: "最大",
        unique: "唯一",
        missing: "缺失",
        correlation: "相关性",
        distribution: "分布",
        summary: "摘要",
        dataTypes: "数据类型",
        numeric: "数值",
        categorical: "分类",
        datetime: "日期时间",
        copy: "复制",
        download: "下载",
        clear: "清除",
        refresh: "刷新",
        export: "导出",
        noHistory: "无历史",
        noHistoryDesc: "分析历史将显示在这里",
        clearHistory: "清除历史",
        view: "查看",
        delete: "删除",
        saveAnalysis: "保存分析",
        savedSuccessfully: "保存成功！",
        errorOccurred: "发生错误",
        fileLoaded: "文件加载成功",
        chartGenerated: "图表已生成",
        analysisComplete: "分析完成"
    },
    es: {
        title: "Analista de Datos IA",
        subtitle: "Sube datos y obtén insights instantáneos con IA",
        uploadPanel: "FUENTE DE DATOS",
        uploadTitle: "Arrastra tu archivo aquí",
        uploadSubtitle: "CSV, Excel o JSON (máx 16MB)",
        columns: "Columnas",
        resultsPanel: "ANÁLISIS",
        tabData: "Datos",
        tabChart: "Gráfico",
        tabStats: "Estadísticas",
        tabInsights: "Insights",
        tabChat: "Chat",
        tabHistory: "Historial",
        rows: "Filas",
        cols: "Columnas",
        memory: "Memoria",
        chartType: "Tipo de Gráfico",
        xAxis: "Eje X",
        yAxis: "Eje Y",
        groupBy: "Agrupar por",
        colorBy: "Color por",
        generateChart: "Generar Gráfico",
        exportChart: "Exportar",
        queryPlaceholder: "Pregunta sobre tus datos...",
        analyze: "Analizar",
        chatPlaceholder: "Chatea sobre tus datos...",
        send: "Enviar",
        noData: "Sin Datos",
        noDataDesc: "Sube un archivo CSV, Excel o JSON para comenzar",
        generating: "Generando...",
        analyzing: "Analizando...",
        loading: "Cargando...",
        bar: "Gráfico de Barras",
        line: "Gráfico de Líneas",
        pie: "Gráfico Circular",
        scatter: "Dispersión",
        histogram: "Histograma",
        heatmap: "Mapa de Calor",
        box: "Diagrama de Caja",
        area: "Gráfico de Área",
        donut: "Gráfico de Dona",
        radar: "Gráfico Radar",
        welcome: "¡Hola! Soy tu analista de datos IA. Sube un dataset y te ayudaré a:\n\n• Explorar y entender tus datos\n• Generar visualizaciones\n• Encontrar patrones e insights\n• Responder preguntas sobre tus datos",
        keyFindings: "Hallazgos Clave",
        recommendations: "Recomendaciones",
        anomalies: "Anomalías",
        statistics: "Estadísticas",
        mean: "Media",
        median: "Mediana",
        stdDev: "Desv. Est.",
        min: "Mín",
        max: "Máx",
        unique: "Únicos",
        missing: "Faltantes",
        correlation: "Correlación",
        distribution: "Distribución",
        summary: "Resumen",
        dataTypes: "Tipos de Datos",
        numeric: "Numérico",
        categorical: "Categórico",
        datetime: "FechaHora",
        copy: "Copiar",
        download: "Descargar",
        clear: "Limpiar",
        refresh: "Actualizar",
        export: "Exportar",
        noHistory: "Sin Historial",
        noHistoryDesc: "Tu historial de análisis aparecerá aquí",
        clearHistory: "Limpiar Historial",
        view: "Ver",
        delete: "Eliminar",
        saveAnalysis: "Guardar Análisis",
        savedSuccessfully: "¡Guardado!",
        errorOccurred: "Ocurrió un error",
        fileLoaded: "Archivo cargado",
        chartGenerated: "Gráfico generado",
        analysisComplete: "Análisis completo"
    },
    fr: {
        title: "Analyste de Données IA",
        subtitle: "Téléchargez des données et obtenez des insights instantanés",
        uploadPanel: "SOURCE DE DONNÉES",
        uploadTitle: "Déposez votre fichier ici",
        uploadSubtitle: "CSV, Excel ou JSON (max 16MB)",
        columns: "Colonnes",
        resultsPanel: "ANALYSE",
        tabData: "Données",
        tabChart: "Graphique",
        tabStats: "Statistiques",
        tabInsights: "Insights",
        tabChat: "Chat",
        tabHistory: "Historique",
        rows: "Lignes",
        cols: "Colonnes",
        memory: "Mémoire",
        chartType: "Type de Graphique",
        xAxis: "Axe X",
        yAxis: "Axe Y",
        groupBy: "Grouper par",
        colorBy: "Couleur par",
        generateChart: "Générer Graphique",
        exportChart: "Exporter",
        queryPlaceholder: "Posez une question sur vos données...",
        analyze: "Analyser",
        chatPlaceholder: "Discutez de vos données...",
        send: "Envoyer",
        noData: "Pas de Données",
        noDataDesc: "Téléchargez un fichier CSV, Excel ou JSON",
        generating: "Génération...",
        analyzing: "Analyse...",
        loading: "Chargement...",
        bar: "Graphique à Barres",
        line: "Graphique Linéaire",
        pie: "Graphique Circulaire",
        scatter: "Nuage de Points",
        histogram: "Histogramme",
        heatmap: "Carte Thermique",
        box: "Boîte à Moustaches",
        area: "Graphique en Aires",
        donut: "Graphique en Anneau",
        radar: "Graphique Radar",
        welcome: "Bonjour ! Je suis votre analyste de données IA. Téléchargez un dataset et je vous aiderai à :\n\n• Explorer et comprendre vos données\n• Générer des visualisations\n• Trouver des patterns et insights\n• Répondre à vos questions",
        keyFindings: "Découvertes Clés",
        recommendations: "Recommandations",
        anomalies: "Anomalies",
        statistics: "Statistiques",
        mean: "Moyenne",
        median: "Médiane",
        stdDev: "Écart-type",
        min: "Min",
        max: "Max",
        unique: "Uniques",
        missing: "Manquants",
        correlation: "Corrélation",
        distribution: "Distribution",
        summary: "Résumé",
        dataTypes: "Types de Données",
        numeric: "Numérique",
        categorical: "Catégorique",
        datetime: "DateTime",
        copy: "Copier",
        download: "Télécharger",
        clear: "Effacer",
        refresh: "Actualiser",
        export: "Exporter",
        noHistory: "Pas d'Historique",
        noHistoryDesc: "Votre historique d'analyse apparaîtra ici",
        clearHistory: "Effacer l'Historique",
        view: "Voir",
        delete: "Supprimer",
        saveAnalysis: "Sauvegarder",
        savedSuccessfully: "Sauvegardé !",
        errorOccurred: "Une erreur s'est produite",
        fileLoaded: "Fichier chargé",
        chartGenerated: "Graphique généré",
        analysisComplete: "Analyse terminée"
    },
    de: {
        title: "KI-Datenanalyst",
        subtitle: "Laden Sie Daten hoch und erhalten Sie sofortige KI-Einblicke",
        uploadPanel: "DATENQUELLE",
        uploadTitle: "Datei hier ablegen",
        uploadSubtitle: "CSV, Excel oder JSON (max 16MB)",
        columns: "Spalten",
        resultsPanel: "ANALYSE",
        tabData: "Daten",
        tabChart: "Diagramm",
        tabStats: "Statistiken",
        tabInsights: "Einblicke",
        tabChat: "Chat",
        tabHistory: "Verlauf",
        rows: "Zeilen",
        cols: "Spalten",
        memory: "Speicher",
        chartType: "Diagrammtyp",
        xAxis: "X-Achse",
        yAxis: "Y-Achse",
        groupBy: "Gruppieren",
        colorBy: "Farbe nach",
        generateChart: "Diagramm erstellen",
        exportChart: "Exportieren",
        queryPlaceholder: "Fragen Sie etwas über Ihre Daten...",
        analyze: "Analysieren",
        chatPlaceholder: "Chatten Sie über Ihre Daten...",
        send: "Senden",
        noData: "Keine Daten",
        noDataDesc: "Laden Sie eine CSV-, Excel- oder JSON-Datei hoch",
        generating: "Generieren...",
        analyzing: "Analysieren...",
        loading: "Laden...",
        bar: "Balkendiagramm",
        line: "Liniendiagramm",
        pie: "Kreisdiagramm",
        scatter: "Streudiagramm",
        histogram: "Histogramm",
        heatmap: "Heatmap",
        box: "Boxplot",
        area: "Flächendiagramm",
        donut: "Ringdiagramm",
        radar: "Radardiagramm",
        welcome: "Hallo! Ich bin Ihr KI-Datenanalyst. Laden Sie einen Datensatz hoch und ich helfe Ihnen:\n\n• Daten erkunden und verstehen\n• Visualisierungen erstellen\n• Muster und Einblicke finden\n• Fragen zu Ihren Daten beantworten",
        keyFindings: "Wichtige Erkenntnisse",
        recommendations: "Empfehlungen",
        anomalies: "Anomalien",
        statistics: "Statistiken",
        mean: "Mittelwert",
        median: "Median",
        stdDev: "Standardabw.",
        min: "Min",
        max: "Max",
        unique: "Einzigartig",
        missing: "Fehlend",
        correlation: "Korrelation",
        distribution: "Verteilung",
        summary: "Zusammenfassung",
        dataTypes: "Datentypen",
        numeric: "Numerisch",
        categorical: "Kategorisch",
        datetime: "DatumZeit",
        copy: "Kopieren",
        download: "Herunterladen",
        clear: "Löschen",
        refresh: "Aktualisieren",
        export: "Exportieren",
        noHistory: "Kein Verlauf",
        noHistoryDesc: "Ihr Analyseverlauf erscheint hier",
        clearHistory: "Verlauf löschen",
        view: "Ansehen",
        delete: "Löschen",
        saveAnalysis: "Speichern",
        savedSuccessfully: "Gespeichert!",
        errorOccurred: "Ein Fehler ist aufgetreten",
        fileLoaded: "Datei geladen",
        chartGenerated: "Diagramm erstellt",
        analysisComplete: "Analyse abgeschlossen"
    }
};

// State management
let currentLang = 'en';
let currentTab = 'data';
let dataSummary = null;
let chartImage = null;
let insights = null;
let chatHistory = [];
let analysisHistory = JSON.parse(localStorage.getItem('data_analyst_history') || '[]');

// Chart types with icons
const chartTypes = [
    { id: 'bar', icon: '📊' },
    { id: 'line', icon: '📈' },
    { id: 'pie', icon: '🥧' },
    { id: 'scatter', icon: '⭐' },
    { id: 'histogram', icon: '📉' },
    { id: 'heatmap', icon: '🔥' },
    { id: 'box', icon: '📦' },
    { id: 'area', icon: '🏔️' },
    { id: 'donut', icon: '🍩' },
    { id: 'radar', icon: '🕸️' }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setLanguage('en');
    setupUploadZone();
    addWelcomeMessage();
});

// Translation helper
function t(key) {
    return i18n[currentLang][key] || key;
}

// Language switcher
function setLanguage(lang) {
    currentLang = lang;

    // Update header elements
    document.getElementById('title').textContent = t('title');
    document.getElementById('subtitle').textContent = t('subtitle');
    document.getElementById('uploadPanelTitle').textContent = t('uploadPanel');
    document.getElementById('uploadTitle').textContent = t('uploadTitle');
    document.getElementById('uploadSubtitle').textContent = t('uploadSubtitle');
    document.getElementById('columnsTitle').textContent = t('columns');
    document.getElementById('resultsPanelTitle').textContent = t('resultsPanel');

    // Update tabs
    document.getElementById('tabData').textContent = t('tabData');
    document.getElementById('tabChart').textContent = t('tabChart');
    document.getElementById('tabStats').textContent = t('tabStats');
    document.getElementById('tabInsights').textContent = t('tabInsights');
    document.getElementById('tabChat').textContent = t('tabChat');
    document.getElementById('tabHistory').textContent = t('tabHistory');

    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-render current tab
    renderFileInfo();
    updateResults();
}

// File upload setup
function setupUploadZone() {
    const zone = document.getElementById('uploadZone');
    const input = document.getElementById('fileInput');

    zone.addEventListener('click', () => input.click());

    zone.addEventListener('dragover', e => {
        e.preventDefault();
        zone.classList.add('dragover');
    });

    zone.addEventListener('dragleave', () => {
        zone.classList.remove('dragover');
    });

    zone.addEventListener('drop', e => {
        e.preventDefault();
        zone.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            handleFile(e.dataTransfer.files[0]);
        }
    });

    input.addEventListener('change', e => {
        if (e.target.files.length) {
            handleFile(e.target.files[0]);
        }
    });
}

// Handle file upload
async function handleFile(file) {
    const formData = new FormData();
    formData.append('file', file);

    document.getElementById('fileInfo').innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <span>${t('loading')}</span>
        </div>
    `;

    try {
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });

        if (!response.ok) throw new Error('Upload failed');

        dataSummary = await response.json();
        renderFileInfo();
        renderColumnList();
        updateResults();
        showNotification(t('fileLoaded'), 'success');

        // Save to history
        saveToHistory('upload', file.name, dataSummary);
    } catch (error) {
        document.getElementById('fileInfo').innerHTML = `
            <div class="empty-state">
                <p>${error.message}</p>
            </div>
        `;
        showNotification(t('errorOccurred'), 'error');
    }
}

// Render file info
function renderFileInfo() {
    if (!dataSummary) return;

    document.getElementById('fileInfo').innerHTML = `
        <div class="file-info">
            <div class="file-name">📄 ${dataSummary.filename}</div>
            <div class="file-meta">
                <span class="file-meta-item">${dataSummary.rows} ${t('rows')}</span>
                <span class="file-meta-item">${dataSummary.columns} ${t('cols')}</span>
                <span class="file-meta-item">${dataSummary.memory_usage}</span>
            </div>
            <div class="file-actions">
                <button class="btn btn-sm btn-outline" onclick="refreshData()">
                    🔄 ${t('refresh')}
                </button>
                <button class="btn btn-sm btn-outline" onclick="downloadData()">
                    📥 ${t('download')}
                </button>
            </div>
        </div>
    `;
}

// Render column list
function renderColumnList() {
    if (!dataSummary) return;

    const list = document.getElementById('columnList');
    list.innerHTML = dataSummary.column_info.map(col => `
        <div class="column-item">
            <div class="column-info">
                <span class="column-name">${col.name}</span>
                <span class="column-type">${getTypeIcon(col.dtype)} ${col.dtype}</span>
            </div>
            <div class="column-stats">
                ${col.non_null ? `<span>${col.non_null} ${t('rows')}</span>` : ''}
            </div>
        </div>
    `).join('');
}

// Get type icon
function getTypeIcon(dtype) {
    if (dtype.includes('int') || dtype.includes('float')) return '🔢';
    if (dtype.includes('object') || dtype.includes('str')) return '📝';
    if (dtype.includes('date') || dtype.includes('time')) return '📅';
    if (dtype.includes('bool')) return '✓';
    return '📌';
}

// Tab switching
function showTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab').forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    updateResults();
}

// Update results based on current tab
function updateResults() {
    const container = document.getElementById('resultsContainer');

    if (!dataSummary && currentTab !== 'history') {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📊</div>
                <h3>${t('noData')}</h3>
                <p>${t('noDataDesc')}</p>
            </div>
        `;
        return;
    }

    switch (currentTab) {
        case 'data': renderDataTab(container); break;
        case 'chart': renderChartTab(container); break;
        case 'stats': renderStatsTab(container); break;
        case 'insights': renderInsightsTab(container); break;
        case 'chat': renderChatTab(container); break;
        case 'history': renderHistoryTab(container); break;
    }
}

// Render Data Tab
async function renderDataTab(container) {
    container.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <span>${t('loading')}</span>
        </div>
    `;

    try {
        const response = await fetch('/api/preview?rows=50');
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const cols = Object.keys(data.data[0]);
            container.innerHTML = `
                <div class="table-toolbar">
                    <div class="table-info">${t('rows')}: ${data.data.length} / ${dataSummary.rows}</div>
                    <div class="table-actions">
                        <button class="btn btn-sm btn-outline" onclick="exportTable('csv')">CSV</button>
                        <button class="btn btn-sm btn-outline" onclick="exportTable('json')">JSON</button>
                    </div>
                </div>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>${cols.map(c => `<th><span class="th-content">${c}</span></th>`).join('')}</tr>
                        </thead>
                        <tbody>
                            ${data.data.map(row => `
                                <tr>${cols.map(c => `<td>${formatCellValue(row[c])}</td>`).join('')}</tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            `;
        }
    } catch (error) {
        container.innerHTML = `<div class="empty-state"><p>Error loading data</p></div>`;
    }
}

// Format cell value
function formatCellValue(value) {
    if (value === null || value === undefined) return '<span class="null-value">null</span>';
    if (typeof value === 'number') {
        return Number.isInteger(value) ? value : value.toFixed(2);
    }
    if (typeof value === 'string' && value.length > 50) {
        return value.substring(0, 50) + '...';
    }
    return value;
}

// Render Chart Tab
function renderChartTab(container) {
    const numCols = dataSummary?.numeric_columns || [];
    const catCols = dataSummary?.categorical_columns || [];
    const allCols = [...numCols, ...catCols];

    container.innerHTML = `
        <div class="chart-builder">
            <div class="chart-type-selector">
                <label class="form-label">${t('chartType')}</label>
                <div class="chart-type-grid">
                    ${chartTypes.map(ct => `
                        <button class="chart-type-btn ${ct.id === 'bar' ? 'active' : ''}"
                                data-type="${ct.id}" onclick="selectChartType('${ct.id}')">
                            <span class="chart-type-icon">${ct.icon}</span>
                            <span class="chart-type-name">${t(ct.id)}</span>
                        </button>
                    `).join('')}
                </div>
            </div>

            <div class="chart-options">
                <div class="chart-option">
                    <label class="form-label">${t('xAxis')}</label>
                    <select id="xColumn" class="form-select">
                        <option value="">- Select -</option>
                        ${allCols.map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                </div>
                <div class="chart-option">
                    <label class="form-label">${t('yAxis')}</label>
                    <select id="yColumn" class="form-select">
                        <option value="">- Select -</option>
                        ${numCols.map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                </div>
                <div class="chart-option">
                    <label class="form-label">${t('groupBy')}</label>
                    <select id="groupBy" class="form-select">
                        <option value="">- None -</option>
                        ${catCols.map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                </div>
                <div class="chart-option">
                    <label class="form-label">${t('colorBy')}</label>
                    <select id="colorBy" class="form-select">
                        <option value="">- None -</option>
                        ${catCols.map(c => `<option value="${c}">${c}</option>`).join('')}
                    </select>
                </div>
            </div>

            <div class="chart-actions">
                <button class="btn btn-primary" onclick="generateChart()">
                    📊 ${t('generateChart')}
                </button>
                ${chartImage ? `
                    <button class="btn btn-secondary" onclick="exportChart()">
                        📥 ${t('exportChart')}
                    </button>
                ` : ''}
            </div>
        </div>

        <div id="chartContainer" class="chart-container">
            ${chartImage ? `<img src="${chartImage}" alt="Chart">` : `
                <div class="empty-state">
                    <div class="empty-state-icon">📈</div>
                    <p>Configure options and generate a chart</p>
                </div>
            `}
        </div>
    `;
}

// Select chart type
function selectChartType(type) {
    document.querySelectorAll('.chart-type-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.type === type);
    });
}

// Generate chart
async function generateChart() {
    const container = document.getElementById('chartContainer');
    const chartType = document.querySelector('.chart-type-btn.active')?.dataset.type || 'bar';

    container.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <span>${t('generating')}</span>
        </div>
    `;

    try {
        const response = await fetch('/api/chart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chart_type: chartType,
                x_column: document.getElementById('xColumn')?.value || null,
                y_column: document.getElementById('yColumn')?.value || null,
                group_by: document.getElementById('groupBy')?.value || null,
                color_by: document.getElementById('colorBy')?.value || null
            })
        });

        const data = await response.json();

        if (data.image) {
            chartImage = data.image;
            container.innerHTML = `
                <div class="chart-result">
                    <img src="${chartImage}" alt="Chart">
                </div>
            `;
            showNotification(t('chartGenerated'), 'success');
            saveToHistory('chart', chartType, { chartType, image: chartImage });
        } else {
            container.innerHTML = `
                <div class="empty-state">
                    <p>${data.error || 'Failed to generate chart'}</p>
                </div>
            `;
        }
    } catch (error) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Error generating chart</p>
            </div>
        `;
        showNotification(t('errorOccurred'), 'error');
    }
}

// Export chart
function exportChart() {
    if (!chartImage) return;

    const link = document.createElement('a');
    link.href = chartImage;
    link.download = 'chart.png';
    link.click();
}

// Render Statistics Tab
function renderStatsTab(container) {
    if (!dataSummary) return;

    const numCols = dataSummary.numeric_columns || [];
    const catCols = dataSummary.categorical_columns || [];

    container.innerHTML = `
        <div class="stats-overview">
            <div class="stats-header">
                <h3>${t('summary')}</h3>
            </div>

            <div class="stats-summary-grid">
                <div class="stat-card">
                    <div class="stat-icon">📊</div>
                    <div class="stat-value">${dataSummary.rows}</div>
                    <div class="stat-label">${t('rows')}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📋</div>
                    <div class="stat-value">${dataSummary.columns}</div>
                    <div class="stat-label">${t('cols')}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">🔢</div>
                    <div class="stat-value">${numCols.length}</div>
                    <div class="stat-label">${t('numeric')}</div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon">📝</div>
                    <div class="stat-value">${catCols.length}</div>
                    <div class="stat-label">${t('categorical')}</div>
                </div>
            </div>
        </div>

        ${numCols.length > 0 ? `
            <div class="stats-section">
                <h4>${t('numeric')} ${t('statistics')}</h4>
                <div class="stats-table-wrapper">
                    <table class="stats-table">
                        <thead>
                            <tr>
                                <th>Column</th>
                                <th>${t('mean')}</th>
                                <th>${t('median')}</th>
                                <th>${t('stdDev')}</th>
                                <th>${t('min')}</th>
                                <th>${t('max')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${dataSummary.column_info
                                .filter(c => numCols.includes(c.name))
                                .map(col => `
                                    <tr>
                                        <td><strong>${col.name}</strong></td>
                                        <td>${col.mean?.toFixed(2) || '-'}</td>
                                        <td>${col.median?.toFixed(2) || '-'}</td>
                                        <td>${col.std?.toFixed(2) || '-'}</td>
                                        <td>${col.min?.toFixed(2) || '-'}</td>
                                        <td>${col.max?.toFixed(2) || '-'}</td>
                                    </tr>
                                `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        ` : ''}

        ${catCols.length > 0 ? `
            <div class="stats-section">
                <h4>${t('categorical')} ${t('statistics')}</h4>
                <div class="categorical-stats">
                    ${dataSummary.column_info
                        .filter(c => catCols.includes(c.name))
                        .map(col => `
                            <div class="cat-stat-card">
                                <div class="cat-stat-header">
                                    <span class="cat-stat-name">${col.name}</span>
                                    <span class="cat-stat-unique">${col.unique || '-'} ${t('unique')}</span>
                                </div>
                                ${col.top_values ? `
                                    <div class="cat-stat-values">
                                        ${col.top_values.slice(0, 5).map(v => `
                                            <span class="cat-value">${v}</span>
                                        `).join('')}
                                    </div>
                                ` : ''}
                            </div>
                        `).join('')}
                </div>
            </div>
        ` : ''}
    `;
}

// Render Insights Tab
function renderInsightsTab(container) {
    container.innerHTML = `
        <div class="insights-query">
            <div class="query-input-wrapper">
                <input type="text" id="queryInput" class="form-input"
                       placeholder="${t('queryPlaceholder')}"
                       onkeypress="if(event.key==='Enter')analyzeQuery()">
                <button class="btn btn-primary" onclick="analyzeQuery()">
                    🔍 ${t('analyze')}
                </button>
            </div>
            <div class="quick-queries">
                <span class="quick-query" onclick="setQuery('What are the main trends?')">📈 Trends</span>
                <span class="quick-query" onclick="setQuery('Show me outliers')">🎯 Outliers</span>
                <span class="quick-query" onclick="setQuery('Summarize this data')">📋 Summary</span>
                <span class="quick-query" onclick="setQuery('Find correlations')">🔗 Correlations</span>
            </div>
        </div>
        <div id="insightsContainer">
            ${insights ? renderInsightsContent(insights) : `
                <div class="empty-state">
                    <div class="empty-state-icon">💡</div>
                    <p>Ask a question about your data to get AI-powered insights</p>
                </div>
            `}
        </div>
    `;
}

// Set query
function setQuery(query) {
    document.getElementById('queryInput').value = query;
    analyzeQuery();
}

// Analyze query
async function analyzeQuery() {
    const query = document.getElementById('queryInput')?.value;
    if (!query) return;

    const container = document.getElementById('insightsContainer');
    container.innerHTML = `
        <div class="loading">
            <div class="spinner"></div>
            <span>${t('analyzing')}</span>
        </div>
    `;

    try {
        const response = await fetch('/api/query', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, language: currentLang })
        });

        insights = await response.json();
        container.innerHTML = renderInsightsContent(insights);
        showNotification(t('analysisComplete'), 'success');
        saveToHistory('insight', query, insights);
    } catch (error) {
        container.innerHTML = `
            <div class="empty-state">
                <p>Error analyzing data</p>
            </div>
        `;
        showNotification(t('errorOccurred'), 'error');
    }
}

// Render insights content
function renderInsightsContent(data) {
    return `
        <div class="insights-result">
            <div class="insight-card primary">
                <div class="insight-header">
                    <span class="insight-icon">💡</span>
                    <span class="insight-title">Answer</span>
                </div>
                <div class="insight-content">${data.answer || ''}</div>
            </div>

            ${data.insights?.length ? `
                <div class="insight-card">
                    <div class="insight-header">
                        <span class="insight-icon">🔍</span>
                        <span class="insight-title">${t('keyFindings')}</span>
                    </div>
                    <ul class="insight-list">
                        ${data.insights.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${data.recommendations?.length ? `
                <div class="insight-card">
                    <div class="insight-header">
                        <span class="insight-icon">💡</span>
                        <span class="insight-title">${t('recommendations')}</span>
                    </div>
                    <ul class="insight-list">
                        ${data.recommendations.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            ` : ''}

            ${data.suggested_charts?.length ? `
                <div class="insight-card">
                    <div class="insight-header">
                        <span class="insight-icon">📊</span>
                        <span class="insight-title">Suggested Charts</span>
                    </div>
                    <div class="suggested-charts">
                        ${data.suggested_charts.map(c => `
                            <button class="btn btn-outline btn-sm" onclick="generateSuggestedChart('${c.type}', '${c.x || ''}', '${c.y || ''}')">
                                ${c.type}: ${c.description || ''}
                            </button>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// Render Chat Tab
function renderChatTab(container) {
    container.innerHTML = `
        <div class="chat-container">
            <div id="chatMessages" class="chat-messages"></div>
            <div class="chat-input-container">
                <input type="text" id="chatInput" class="form-input"
                       placeholder="${t('chatPlaceholder')}"
                       onkeypress="if(event.key==='Enter')sendChatMessage()">
                <button class="btn btn-primary" onclick="sendChatMessage()">
                    ${t('send')}
                </button>
            </div>
        </div>
    `;
    renderChatMessages();
}

// Add welcome message
function addWelcomeMessage() {
    chatHistory = [{ role: 'assistant', content: i18n[currentLang].welcome }];
}

// Send chat message
async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input?.value?.trim();
    if (!message) return;

    input.value = '';
    chatHistory.push({ role: 'user', content: message });
    renderChatMessages();

    // Add typing indicator
    chatHistory.push({ role: 'assistant', content: '...', typing: true });
    renderChatMessages();

    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                message,
                language: currentLang,
                history: chatHistory.filter(m => !m.typing).slice(-10)
            })
        });

        const data = await response.json();

        // Remove typing indicator and add response
        chatHistory = chatHistory.filter(m => !m.typing);
        chatHistory.push({ role: 'assistant', content: data.response });
        renderChatMessages();
    } catch (error) {
        chatHistory = chatHistory.filter(m => !m.typing);
        chatHistory.push({ role: 'assistant', content: 'Error occurred. Please try again.' });
        renderChatMessages();
    }
}

// Render chat messages
function renderChatMessages() {
    const container = document.getElementById('chatMessages');
    if (!container) return;

    container.innerHTML = chatHistory.map(m => `
        <div class="message ${m.role} ${m.typing ? 'typing' : ''}">
            ${m.typing ? '<span class="typing-dots"><span></span><span></span><span></span></span>' : m.content.replace(/\n/g, '<br>')}
        </div>
    `).join('');

    container.scrollTop = container.scrollHeight;
}

// Render History Tab
function renderHistoryTab(container) {
    if (analysisHistory.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📜</div>
                <h3>${t('noHistory')}</h3>
                <p>${t('noHistoryDesc')}</p>
            </div>
        `;
        return;
    }

    container.innerHTML = `
        <div class="history-header">
            <h3>${t('tabHistory')}</h3>
            <button class="btn btn-secondary btn-sm" onclick="clearHistory()">
                ${t('clearHistory')}
            </button>
        </div>
        <div class="history-list">
            ${analysisHistory.map((item, index) => `
                <div class="history-item" onclick="viewHistoryItem(${index})">
                    <div class="history-item-header">
                        <span class="history-type ${item.type}">${getHistoryTypeIcon(item.type)} ${item.type}</span>
                        <span class="history-date">${new Date(item.timestamp).toLocaleString()}</span>
                    </div>
                    <div class="history-title">${item.title}</div>
                    <div class="history-preview">${item.preview || ''}</div>
                    <div class="history-actions">
                        <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); viewHistoryItem(${index})">
                            ${t('view')}
                        </button>
                        <button class="btn btn-sm btn-ghost" onclick="event.stopPropagation(); deleteHistoryItem(${index})">
                            ${t('delete')}
                        </button>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Get history type icon
function getHistoryTypeIcon(type) {
    const icons = {
        upload: '📁',
        chart: '📊',
        insight: '💡',
        query: '🔍'
    };
    return icons[type] || '📌';
}

// Save to history
function saveToHistory(type, title, data) {
    analysisHistory.unshift({
        type,
        title,
        data,
        preview: typeof data === 'string' ? data.substring(0, 100) : JSON.stringify(data).substring(0, 100),
        timestamp: new Date().toISOString()
    });

    if (analysisHistory.length > 50) {
        analysisHistory = analysisHistory.slice(0, 50);
    }

    localStorage.setItem('data_analyst_history', JSON.stringify(analysisHistory));
}

// View history item
function viewHistoryItem(index) {
    const item = analysisHistory[index];
    if (!item) return;

    // Navigate to appropriate tab based on type
    if (item.type === 'chart' && item.data.image) {
        chartImage = item.data.image;
        showTab('chart');
    } else if (item.type === 'insight') {
        insights = item.data;
        showTab('insights');
    }
}

// Delete history item
function deleteHistoryItem(index) {
    analysisHistory.splice(index, 1);
    localStorage.setItem('data_analyst_history', JSON.stringify(analysisHistory));
    renderHistoryTab(document.getElementById('resultsContainer'));
}

// Clear history
function clearHistory() {
    analysisHistory = [];
    localStorage.removeItem('data_analyst_history');
    renderHistoryTab(document.getElementById('resultsContainer'));
}

// Notification system
function showNotification(message, type = 'success') {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
        <span class="notification-message">${message}</span>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 3000);
}

// Utility functions
function refreshData() {
    if (dataSummary) {
        updateResults();
    }
}

function downloadData() {
    // Implement data download
    showNotification('Download started', 'info');
}

function exportTable(format) {
    showNotification(`Exporting as ${format.toUpperCase()}...`, 'info');
}

function generateSuggestedChart(type, x, y) {
    showTab('chart');
    setTimeout(() => {
        const typeBtn = document.querySelector(`.chart-type-btn[data-type="${type}"]`);
        if (typeBtn) typeBtn.click();
        if (x) document.getElementById('xColumn').value = x;
        if (y) document.getElementById('yColumn').value = y;
    }, 100);
}
