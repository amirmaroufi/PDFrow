// Translation system for Redact PDF page
function getTranslations(lang) {
    const translations = {
        'en': {
            // Navigation
            'nav_tools': 'Tools',
            'nav_features': 'Features',
            'nav_how_it_works': 'How It Works',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',

            // Page Header
            'page_title': 'Redact PDF',
            'page_description': 'Remove sensitive information from your PDFs - auto-detect or manually select areas to redact',

            // Features
            'feature_auto_detect': 'Auto-detect sensitive data',
            'feature_manual_selection': 'Manual selection mode',
            'feature_secure_private': '100% secure & private',
            'feature_fast_processing': 'Fast processing',
            'security_badge': 'Your files are processed locally in your browser. They never leave your device.',

            // Tool Section
            'privacy_badge': '100% client-side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',

            // URL Import
            'url_placeholder': 'Paste Dropbox or Google Drive link here...',
            'import_file_btn': 'Import File',
            'download_status': 'Downloading...',

            // Upload Area
            'upload_drop_text': 'Click to select or drag and drop your PDF file',
            'upload_file_info': 'PDF files • Max 50MB',

            // Redaction Tools
            'redaction_tools_title': 'Redaction Tools',
            'auto_detect_btn': 'Auto-Detect Sensitive Data',
            'manual_redact_btn': 'Manual Redaction',
            'clear_redactions_btn': 'Clear All Redactions',
            'apply_redactions_btn': 'Apply Redactions',

            // Download Section
            'download_success_title': 'PDF Successfully Redacted!',
            'download_success_message': 'Your sensitive information has been permanently removed.',
            'download_btn': 'Download Redacted PDF',
            'redact_another_btn': 'Redact Another PDF',

            // Footer
            'language': 'Language'
        },
        'es': {
            // Navigation
            'nav_tools': 'Herramientas',
            'nav_features': 'Características',
            'nav_how_it_works': 'Cómo Funciona',
            'nav_blog': 'Blog',
            'nav_faq': 'Preguntas Frecuentes',

            // Page Header
            'page_title': 'Redactar PDF',
            'page_description': 'Elimine información confidencial de sus PDF: detección automática o selección manual de áreas a redactar',

            // Features
            'feature_auto_detect': 'Detectar automáticamente datos sensibles',
            'feature_manual_selection': 'Modo de selección manual',
            'feature_secure_private': '100% seguro y privado',
            'feature_fast_processing': 'Procesamiento rápido',
            'security_badge': 'Sus archivos se procesan localmente en su navegador. Nunca salen de su dispositivo.',

            // Tool Section
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.',
            'upload_from_computer': 'Subir desde Computadora',
            'import_from_url': 'Importar desde URL',

            // URL Import
            'url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aquí...',
            'import_file_btn': 'Importar Archivo',
            'download_status': 'Descargando...',

            // Upload Area
            'upload_drop_text': 'Haga clic para seleccionar o arrastre y suelte su archivo PDF',
            'upload_file_info': 'Archivos PDF • Máximo 50MB',

            // Redaction Tools
            'redaction_tools_title': 'Herramientas de Redacción',
            'auto_detect_btn': 'Detectar Automáticamente Datos Sensibles',
            'manual_redact_btn': 'Redacción Manual',
            'clear_redactions_btn': 'Borrar Todas las Redacciones',
            'apply_redactions_btn': 'Aplicar Redacciones',

            // Download Section
            'download_success_title': '¡PDF Redactado con Éxito!',
            'download_success_message': 'Su información confidencial ha sido eliminada permanentemente.',
            'download_btn': 'Descargar PDF Redactado',
            'redact_another_btn': 'Redactar Otro PDF',

            // Footer
            'language': 'Idioma'
        },
        'fr': {
            // Navigation
            'nav_tools': 'Outils',
            'nav_features': 'Fonctionnalités',
            'nav_how_it_works': 'Comment Ça Marche',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',

            // Page Header
            'page_title': 'Caviarder PDF',
            'page_description': 'Supprimez les informations sensibles de vos PDF - détection automatique ou sélection manuelle des zones à caviarder',

            // Features
            'feature_auto_detect': 'Détection automatique des données sensibles',
            'feature_manual_selection': 'Mode de sélection manuelle',
            'feature_secure_private': '100% sécurisé et privé',
            'feature_fast_processing': 'Traitement rapide',
            'security_badge': 'Vos fichiers sont traités localement dans votre navigateur. Ils ne quittent jamais votre appareil.',

            // Tool Section
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.',
            'upload_from_computer': 'Télécharger depuis l\'Ordinateur',
            'import_from_url': 'Importer depuis l\'URL',

            // URL Import
            'url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...',
            'import_file_btn': 'Importer le Fichier',
            'download_status': 'Téléchargement...',

            // Upload Area
            'upload_drop_text': 'Cliquez pour sélectionner ou faites glisser et déposez votre fichier PDF',
            'upload_file_info': 'Fichiers PDF • Maximum 50 Mo',

            // Redaction Tools
            'redaction_tools_title': 'Outils de Caviardage',
            'auto_detect_btn': 'Détecter Automatiquement les Données Sensibles',
            'manual_redact_btn': 'Caviardage Manuel',
            'clear_redactions_btn': 'Effacer Tous les Caviardages',
            'apply_redactions_btn': 'Appliquer les Caviardages',

            // Download Section
            'download_success_title': 'PDF Caviardé avec Succès!',
            'download_success_message': 'Vos informations sensibles ont été définitivement supprimées.',
            'download_btn': 'Télécharger le PDF Caviardé',
            'redact_another_btn': 'Caviarder un Autre PDF',

            // Footer
            'language': 'Langue'
        },
        'de': {
            // Navigation
            'nav_tools': 'Werkzeuge',
            'nav_features': 'Funktionen',
            'nav_how_it_works': 'Wie Es Funktioniert',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',

            // Page Header
            'page_title': 'PDF Schwärzen',
            'page_description': 'Entfernen Sie vertrauliche Informationen aus Ihren PDFs - automatische Erkennung oder manuelle Auswahl der zu schwärzenden Bereiche',

            // Features
            'feature_auto_detect': 'Automatische Erkennung sensibler Daten',
            'feature_manual_selection': 'Manueller Auswahlmodus',
            'feature_secure_private': '100% sicher und privat',
            'feature_fast_processing': 'Schnelle Verarbeitung',
            'security_badge': 'Ihre Dateien werden lokal in Ihrem Browser verarbeitet. Sie verlassen niemals Ihr Gerät.',

            // Tool Section
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.',
            'upload_from_computer': 'Vom Computer Hochladen',
            'import_from_url': 'Von URL Importieren',

            // URL Import
            'url_placeholder': 'Dropbox- oder Google Drive-Link hier einfügen...',
            'import_file_btn': 'Datei Importieren',
            'download_status': 'Wird heruntergeladen...',

            // Upload Area
            'upload_drop_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Datei hierher',
            'upload_file_info': 'PDF-Dateien • Max. 50 MB',

            // Redaction Tools
            'redaction_tools_title': 'Schwärzungswerkzeuge',
            'auto_detect_btn': 'Sensible Daten Automatisch Erkennen',
            'manual_redact_btn': 'Manuelle Schwärzung',
            'clear_redactions_btn': 'Alle Schwärzungen Löschen',
            'apply_redactions_btn': 'Schwärzungen Anwenden',

            // Download Section
            'download_success_title': 'PDF Erfolgreich Geschwärzt!',
            'download_success_message': 'Ihre vertraulichen Informationen wurden dauerhaft entfernt.',
            'download_btn': 'Geschwärztes PDF Herunterladen',
            'redact_another_btn': 'Weiteres PDF Schwärzen',

            // Footer
            'language': 'Sprache'
        },
        'it': {
            // Navigation
            'nav_tools': 'Strumenti',
            'nav_features': 'Caratteristiche',
            'nav_how_it_works': 'Come Funziona',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',

            // Page Header
            'page_title': 'Oscura PDF',
            'page_description': 'Rimuovi informazioni sensibili dai tuoi PDF - rilevamento automatico o selezione manuale delle aree da oscurare',

            // Features
            'feature_auto_detect': 'Rilevamento automatico dati sensibili',
            'feature_manual_selection': 'Modalità selezione manuale',
            'feature_secure_private': '100% sicuro e privato',
            'feature_fast_processing': 'Elaborazione rapida',
            'security_badge': 'I tuoi file vengono elaborati localmente nel tuo browser. Non lasciano mai il tuo dispositivo.',

            // Tool Section
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.',
            'upload_from_computer': 'Carica da Computer',
            'import_from_url': 'Importa da URL',

            // URL Import
            'url_placeholder': 'Incolla il link Dropbox o Google Drive qui...',
            'import_file_btn': 'Importa File',
            'download_status': 'Download in corso...',

            // Upload Area
            'upload_drop_text': 'Fai clic per selezionare o trascina e rilascia il tuo file PDF',
            'upload_file_info': 'File PDF • Max 50 MB',

            // Redaction Tools
            'redaction_tools_title': 'Strumenti di Oscuramento',
            'auto_detect_btn': 'Rileva Automaticamente Dati Sensibili',
            'manual_redact_btn': 'Oscuramento Manuale',
            'clear_redactions_btn': 'Cancella Tutti gli Oscuramenti',
            'apply_redactions_btn': 'Applica Oscuramenti',

            // Download Section
            'download_success_title': 'PDF Oscurato con Successo!',
            'download_success_message': 'Le tue informazioni sensibili sono state rimosse permanentemente.',
            'download_btn': 'Scarica PDF Oscurato',
            'redact_another_btn': 'Oscura Altro PDF',

            // Footer
            'language': 'Lingua'
        },
        'tr': {
            // Navigation
            'nav_tools': 'Araçlar',
            'nav_features': 'Özellikler',
            'nav_how_it_works': 'Nasıl Çalışır',
            'nav_blog': 'Blog',
            'nav_faq': 'SSS',

            // Page Header
            'page_title': 'PDF Redaksiyonu',
            'page_description': 'PDF\'lerinizden hassas bilgileri kaldırın - otomatik algılama veya redakte edilecek alanları manuel seçim',

            // Features
            'feature_auto_detect': 'Hassas verileri otomatik algıla',
            'feature_manual_selection': 'Manuel seçim modu',
            'feature_secure_private': '%100 güvenli ve özel',
            'feature_fast_processing': 'Hızlı işleme',
            'security_badge': 'Dosyalarınız tarayıcınızda yerel olarak işlenir. Cihazınızdan asla ayrılmazlar.',

            // Tool Section
            'privacy_badge': '%100 istemci taraflı. Dosyalar cihazınızdan asla ayrılmaz.',
            'upload_from_computer': 'Bilgisayardan Yükle',
            'import_from_url': 'URL\'den İçe Aktar',

            // URL Import
            'url_placeholder': 'Dropbox veya Google Drive bağlantısını buraya yapıştırın...',
            'import_file_btn': 'Dosyayı İçe Aktar',
            'download_status': 'İndiriliyor...',

            // Upload Area
            'upload_drop_text': 'Seçmek için tıklayın veya PDF dosyanızı sürükleyip bırakın',
            'upload_file_info': 'PDF dosyaları • Maksimum 50MB',

            // Redaction Tools
            'redaction_tools_title': 'Redaksiyon Araçları',
            'auto_detect_btn': 'Hassas Verileri Otomatik Algıla',
            'manual_redact_btn': 'Manuel Redaksiyon',
            'clear_redactions_btn': 'Tüm Redaksiyonları Temizle',
            'apply_redactions_btn': 'Redaksiyonları Uygula',

            // Download Section
            'download_success_title': 'PDF Başarıyla Redakte Edildi!',
            'download_success_message': 'Hassas bilgileriniz kalıcı olarak kaldırıldı.',
            'download_btn': 'Redakte Edilmiş PDF\'i İndir',
            'redact_another_btn': 'Başka Bir PDF Redakte Et',

            // Footer
            'language': 'Dil'
        },
        'pt': {
            // Navigation
            'nav_tools': 'Ferramentas',
            'nav_features': 'Recursos',
            'nav_how_it_works': 'Como Funciona',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',

            // Page Header
            'page_title': 'Redigir PDF',
            'page_description': 'Remova informações confidenciais de seus PDFs - detecção automática ou seleção manual de áreas a redigir',

            // Features
            'feature_auto_detect': 'Detecção automática de dados sensíveis',
            'feature_manual_selection': 'Modo de seleção manual',
            'feature_secure_private': '100% seguro e privado',
            'feature_fast_processing': 'Processamento rápido',
            'security_badge': 'Seus arquivos são processados localmente em seu navegador. Eles nunca saem do seu dispositivo.',

            // Tool Section
            'privacy_badge': '100% do lado do cliente. Os arquivos nunca saem do seu dispositivo.',
            'upload_from_computer': 'Carregar do Computador',
            'import_from_url': 'Importar do URL',

            // URL Import
            'url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...',
            'import_file_btn': 'Importar Arquivo',
            'download_status': 'Baixando...',

            // Upload Area
            'upload_drop_text': 'Clique para selecionar ou arraste e solte seu arquivo PDF',
            'upload_file_info': 'Arquivos PDF • Máximo 50MB',

            // Redaction Tools
            'redaction_tools_title': 'Ferramentas de Redação',
            'auto_detect_btn': 'Detectar Automaticamente Dados Sensíveis',
            'manual_redact_btn': 'Redação Manual',
            'clear_redactions_btn': 'Limpar Todas as Redações',
            'apply_redactions_btn': 'Aplicar Redações',

            // Download Section
            'download_success_title': 'PDF Redigido com Sucesso!',
            'download_success_message': 'Suas informações confidenciais foram removidas permanentemente.',
            'download_btn': 'Baixar PDF Redigido',
            'redact_another_btn': 'Redigir Outro PDF',

            // Footer
            'language': 'Idioma'
        },
        'ru': {
            // Navigation
            'nav_tools': 'Инструменты',
            'nav_features': 'Возможности',
            'nav_how_it_works': 'Как Это Работает',
            'nav_blog': 'Блог',
            'nav_faq': 'FAQ',

            // Page Header
            'page_title': 'Редактировать PDF',
            'page_description': 'Удалите конфиденциальную информацию из ваших PDF - автоопределение или ручной выбор областей для редактирования',

            // Features
            'feature_auto_detect': 'Автоопределение конфиденциальных данных',
            'feature_manual_selection': 'Режим ручного выбора',
            'feature_secure_private': '100% безопасно и конфиденциально',
            'feature_fast_processing': 'Быстрая обработка',
            'security_badge': 'Ваши файлы обрабатываются локально в вашем браузере. Они никогда не покидают ваше устройство.',

            // Tool Section
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.',
            'upload_from_computer': 'Загрузить с Компьютера',
            'import_from_url': 'Импортировать из URL',

            // URL Import
            'url_placeholder': 'Вставьте ссылку Dropbox или Google Drive здесь...',
            'import_file_btn': 'Импортировать Файл',
            'download_status': 'Загрузка...',

            // Upload Area
            'upload_drop_text': 'Нажмите для выбора или перетащите PDF-файл',
            'upload_file_info': 'Файлы PDF • Максимум 50 МБ',

            // Redaction Tools
            'redaction_tools_title': 'Инструменты Редактирования',
            'auto_detect_btn': 'Автоопределение Конфиденциальных Данных',
            'manual_redact_btn': 'Ручное Редактирование',
            'clear_redactions_btn': 'Очистить Все Редактирования',
            'apply_redactions_btn': 'Применить Редактирования',

            // Download Section
            'download_success_title': 'PDF Успешно Отредактирован!',
            'download_success_message': 'Ваша конфиденциальная информация была удалена навсегда.',
            'download_btn': 'Скачать Отредактированный PDF',
            'redact_another_btn': 'Редактировать Другой PDF',

            // Footer
            'language': 'Язык'
        },
        'zh': {
            // Navigation
            'nav_tools': '工具',
            'nav_features': '功能',
            'nav_how_it_works': '工作原理',
            'nav_blog': '博客',
            'nav_faq': '常见问题',

            // Page Header
            'page_title': '编辑PDF',
            'page_description': '从PDF中删除敏感信息 - 自动检测或手动选择要编辑的区域',

            // Features
            'feature_auto_detect': '自动检测敏感数据',
            'feature_manual_selection': '手动选择模式',
            'feature_secure_private': '100%安全和私密',
            'feature_fast_processing': '快速处理',
            'security_badge': '您的文件在浏览器中本地处理。它们永远不会离开您的设备。',

            // Tool Section
            'privacy_badge': '100%客户端。文件永远不会离开您的设备。',
            'upload_from_computer': '从计算机上传',
            'import_from_url': '从URL导入',

            // URL Import
            'url_placeholder': '在此粘贴Dropbox或Google Drive链接...',
            'import_file_btn': '导入文件',
            'download_status': '下载中...',

            // Upload Area
            'upload_drop_text': '点击选择或拖放PDF文件',
            'upload_file_info': 'PDF文件 • 最大50MB',

            // Redaction Tools
            'redaction_tools_title': '编辑工具',
            'auto_detect_btn': '自动检测敏感数据',
            'manual_redact_btn': '手动编辑',
            'clear_redactions_btn': '清除所有编辑',
            'apply_redactions_btn': '应用编辑',

            // Download Section
            'download_success_title': 'PDF成功编辑！',
            'download_success_message': '您的敏感信息已被永久删除。',
            'download_btn': '下载编辑后的PDF',
            'redact_another_btn': '编辑另一个PDF',

            // Footer
            'language': '语言'
        },
        'ja': {
            // Navigation
            'nav_tools': 'ツール',
            'nav_features': '機能',
            'nav_how_it_works': '使い方',
            'nav_blog': 'ブログ',
            'nav_faq': 'よくある質問',

            // Page Header
            'page_title': 'PDF編集',
            'page_description': 'PDFから機密情報を削除 - 自動検出または編集する領域の手動選択',

            // Features
            'feature_auto_detect': '機密データの自動検出',
            'feature_manual_selection': '手動選択モード',
            'feature_secure_private': '100%安全でプライベート',
            'feature_fast_processing': '高速処理',
            'security_badge': 'ファイルはブラウザでローカルに処理されます。デバイスから離れることはありません。',

            // Tool Section
            'privacy_badge': '100%クライアント側。ファイルがデバイスから離れることはありません。',
            'upload_from_computer': 'コンピューターからアップロード',
            'import_from_url': 'URLからインポート',

            // URL Import
            'url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付けてください...',
            'import_file_btn': 'ファイルをインポート',
            'download_status': 'ダウンロード中...',

            // Upload Area
            'upload_drop_text': 'クリックして選択するか、PDFファイルをドラッグ&ドロップ',
            'upload_file_info': 'PDFファイル • 最大50MB',

            // Redaction Tools
            'redaction_tools_title': '編集ツール',
            'auto_detect_btn': '機密データを自動検出',
            'manual_redact_btn': '手動編集',
            'clear_redactions_btn': 'すべての編集をクリア',
            'apply_redactions_btn': '編集を適用',

            // Download Section
            'download_success_title': 'PDFが正常に編集されました！',
            'download_success_message': '機密情報が永久に削除されました。',
            'download_btn': '編集済みPDFをダウンロード',
            'redact_another_btn': '別のPDFを編集',

            // Footer
            'language': '言語'
        },
        'ar': {
            // Navigation
            'nav_tools': 'الأدوات',
            'nav_features': 'الميزات',
            'nav_how_it_works': 'كيف يعمل',
            'nav_blog': 'المدونة',
            'nav_faq': 'الأسئلة الشائعة',

            // Page Header
            'page_title': 'تحرير PDF',
            'page_description': 'قم بإزالة المعلومات الحساسة من ملفات PDF الخاصة بك - الكشف التلقائي أو التحديد اليدوي للمناطق المراد تحريرها',

            // Features
            'feature_auto_detect': 'الكشف التلقائي عن البيانات الحساسة',
            'feature_manual_selection': 'وضع التحديد اليدوي',
            'feature_secure_private': '100٪ آمن وخاص',
            'feature_fast_processing': 'معالجة سريعة',
            'security_badge': 'تتم معالجة ملفاتك محليًا في متصفحك. لا تغادر جهازك أبدًا.',

            // Tool Section
            'privacy_badge': '100٪ من جانب العميل. لا تغادر الملفات جهازك أبدًا.',
            'upload_from_computer': 'تحميل من الكمبيوتر',
            'import_from_url': 'استيراد من URL',

            // URL Import
            'url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...',
            'import_file_btn': 'استيراد الملف',
            'download_status': 'جاري التنزيل...',

            // Upload Area
            'upload_drop_text': 'انقر للتحديد أو اسحب وأفلت ملف PDF',
            'upload_file_info': 'ملفات PDF • حد أقصى 50 ميجابايت',

            // Redaction Tools
            'redaction_tools_title': 'أدوات التحرير',
            'auto_detect_btn': 'الكشف التلقائي عن البيانات الحساسة',
            'manual_redact_btn': 'التحرير اليدوي',
            'clear_redactions_btn': 'مسح جميع التحريرات',
            'apply_redactions_btn': 'تطبيق التحريرات',

            // Download Section
            'download_success_title': 'تم تحرير PDF بنجاح!',
            'download_success_message': 'تمت إزالة معلوماتك الحساسة بشكل دائم.',
            'download_btn': 'تنزيل PDF المحرر',
            'redact_another_btn': 'تحرير PDF آخر',

            // Footer
            'language': 'اللغة'
        },
        'hi': {
            // Navigation
            'nav_tools': 'उपकरण',
            'nav_features': 'विशेषताएँ',
            'nav_how_it_works': 'यह कैसे काम करता है',
            'nav_blog': 'ब्लॉग',
            'nav_faq': 'अक्सर पूछे जाने वाले प्रश्न',

            // Page Header
            'page_title': 'PDF संपादित करें',
            'page_description': 'अपने PDF से संवेदनशील जानकारी हटाएं - स्वत: पहचान या संपादित करने के लिए क्षेत्रों का मैनुअल चयन',

            // Features
            'feature_auto_detect': 'संवेदनशील डेटा स्वत: पहचानें',
            'feature_manual_selection': 'मैनुअल चयन मोड',
            'feature_secure_private': '100% सुरक्षित और निजी',
            'feature_fast_processing': 'तेज़ प्रसंस्करण',
            'security_badge': 'आपकी फ़ाइलें आपके ब्राउज़र में स्थानीय रूप से संसाधित की जाती हैं। वे कभी भी आपके डिवाइस को नहीं छोड़तीं।',

            // Tool Section
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी भी आपके डिवाइस को नहीं छोड़तीं।',
            'upload_from_computer': 'कंप्यूटर से अपलोड करें',
            'import_from_url': 'URL से आयात करें',

            // URL Import
            'url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...',
            'import_file_btn': 'फ़ाइल आयात करें',
            'download_status': 'डाउनलोड हो रहा है...',

            // Upload Area
            'upload_drop_text': 'चयन करने के लिए क्लिक करें या अपनी PDF फ़ाइल ड्रैग और ड्रॉप करें',
            'upload_file_info': 'PDF फ़ाइलें • अधिकतम 50MB',

            // Redaction Tools
            'redaction_tools_title': 'संपादन उपकरण',
            'auto_detect_btn': 'संवेदनशील डेटा स्वत: पहचानें',
            'manual_redact_btn': 'मैनुअल संपादन',
            'clear_redactions_btn': 'सभी संपादन साफ़ करें',
            'apply_redactions_btn': 'संपादन लागू करें',

            // Download Section
            'download_success_title': 'PDF सफलतापूर्वक संपादित!',
            'download_success_message': 'आपकी संवेदनशील जानकारी स्थायी रूप से हटा दी गई है।',
            'download_btn': 'संपादित PDF डाउनलोड करें',
            'redact_another_btn': 'एक और PDF संपादित करें',

            // Footer
            'language': 'भाषा'
        }
    };

    return translations[lang] || translations['en'];
}

// Load language function
function loadLanguage(langCode) {
    const translations = getTranslations(langCode);
    console.log('Loading language:', langCode);
    console.log('Translations object:', translations);

    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements with data-translate:', elements.length);

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', langCode);
}

// Language data for the dropdown
const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', name: 'Italiano', flag: '🇮🇹' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'pt', name: 'Português', flag: '🇵🇹' },
    { code: 'ru', name: 'Русский', flag: '🇷🇺' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
];

// Initialize translation system
function initializeTranslations() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageMenu = document.getElementById('languageMenu');
    const languageItems = document.querySelectorAll('.language-item');
    const currentFlag = document.getElementById('currentFlag');
    const currentLang = document.getElementById('currentLang');

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    loadLanguage(savedLang);

    const savedLangItem = document.querySelector(`.language-item[data-lang="${savedLang}"]`);
    if (savedLangItem) {
        currentFlag.textContent = savedLangItem.getAttribute('data-flag');
        currentLang.textContent = savedLangItem.querySelector('span:last-child').textContent;
    }

    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('open');
        });
    }

    languageItems.forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            const flag = this.getAttribute('data-flag');
            const langName = this.querySelector('span:last-child').textContent;

            currentFlag.textContent = flag;
            currentLang.textContent = langName;

            loadLanguage(lang);

            if (languageDropdown) {
                languageDropdown.classList.remove('open');
            }
        });
    });

    document.addEventListener('click', function() {
        if (languageDropdown) {
            languageDropdown.classList.remove('open');
        }
    });
}

// Check if DOM is already loaded, if so initialize immediately, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTranslations);
} else {
    // DOM is already loaded, initialize immediately
    initializeTranslations();
}
