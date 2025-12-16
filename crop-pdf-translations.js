// Translation system for crop-pdf.html
function getTranslations(langCode) {
    const allTranslations = {
        'en': {
            // Navigation
            'nav_tools': 'Tools',
            'nav_features': 'Features',
            'nav_how_it_works': 'How It Works',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',

            // Auth Buttons
            'btn_login': 'Login',
            'btn_signup': 'Sign Up',
            'btn_profile': 'Profile',
            'btn_logout': 'Logout',

            // Page Header & Breadcrumb
            'breadcrumb_home': 'Home',
            'breadcrumb_crop': 'Crop PDF',
            'crop_pdf_title': 'Crop PDF Online',
            'crop_pdf_description': 'Cut and crop PDF pages with precision. Remove unwanted sections, adjust borders, and create custom-sized PDFs exactly how you need them.',
            'custom_crop': 'Custom Crop',
            'live_preview': 'Live Preview',
            'precise_control': 'Precise Control',
            'secure_100': '100% Secure',
            'security_badge_crop': '100% Secure - Files processed locally',

            // Tool Section
            'pdf_cutting_title': 'PDF Cutting Tool',
            'pdf_cutting_subtitle': 'Cut and crop PDF pages with precision and preview your changes in real-time',
            'privacy_badge': '100% client‑side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',
            'upload_text': 'Click to select or drag and drop your PDF files',
            'upload_pdf_subtext': 'PDF files • Up to 10 files • Max 50MB total batch size',
            'upload_crop_text': 'Click to select or drag and drop your PDF file',
            'upload_crop_subtext': 'PDF files • Up to 10MB per file • Single file only',

            // Footer
            'language': 'Language',
            'footer_description': 'Your all-in-one PDF solution. Edit, convert, merge, and manage PDFs online for free.',
            'footer_rights': 'All rights reserved.',

            // Why Choose Section
            'why_choose_title': 'Why Choose PDFrow PDF Cropper?',
            'why_choose_subtitle': 'Professional PDF cropping with precision and ease',
            'feature_precision_cropping': 'Precision Cropping',
            'feature_precision_cropping_desc': 'Crop PDF pages with pixel-perfect accuracy using our intuitive cropping interface',
            'feature_live_preview': 'Live Preview',
            'feature_live_preview_desc': 'See exactly what you\'re cropping with real-time preview and instant feedback',
            'feature_secure': '100% Secure',
            'feature_secure_desc': 'Your files are processed locally and automatically deleted after processing',
            'feature_lightning_fast': 'Lightning Fast',
            'feature_lightning_fast_desc': 'Crop PDF pages instantly with our optimized processing engine',

            // How to Crop Section
            'how_to_crop_title': 'How to Crop PDF Pages',
            'how_to_crop_subtitle': 'Simple 3-step process to crop and cut PDF documents',
            'step1_title': 'Upload PDF File',
            'step1_desc': 'Select or drag and drop your PDF file to start. Preview each page and navigate through your document easily.',
            'step1_feature1': '• Supports up to 50MB files',
            'step1_feature2': '• Instant PDF preview',
            'step1_feature3': '• Page-by-page navigation',
            'step2_title': 'Select Crop Area',
            'step2_desc': 'Use the interactive cropping tool to select the exact area you want to keep. Drag handles to resize and fine-tune your selection.',
            'step2_feature1': '• <strong>Visual:</strong> Drag and drop cropping',
            'step2_feature2': '• <strong>Precise:</strong> Enter exact coordinates',
            'step2_feature3': '• <strong>Presets:</strong> Common size templates',
            'step3_title': 'Download Cropped PDF',
            'step3_desc': 'Process your PDF and download the cut version instantly. Your original formatting and quality are preserved.',
            'step3_feature1': '• Instant processing',
            'step3_feature2': '• Quality preserved',
            'step3_feature3': '• Same format output'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Características', 'nav_how_it_works': 'Cómo Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesión', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesión',
            'breadcrumb_home': 'Inicio', 'breadcrumb_crop': 'Recortar PDF', 'crop_pdf_title': 'Recortar PDF en Línea',
            'crop_pdf_description': 'Corte y recorte páginas PDF con precisión. Elimine secciones no deseadas, ajuste bordes y cree PDFs de tamaño personalizado exactamente como los necesita.',
            'custom_crop': 'Recorte Personalizado', 'live_preview': 'Vista Previa en Vivo', 'precise_control': 'Control Preciso', 'secure_100': '100% Seguro',
            'security_badge_crop': '100% Seguro - Los archivos se procesan localmente',
            'pdf_cutting_title': 'Herramienta de Corte de PDF', 'pdf_cutting_subtitle': 'Corte y recorte páginas PDF con precisión y previsualice sus cambios en tiempo real',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.', 'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'upload_text': 'Haga clic para seleccionar o arrastre y suelte sus archivos PDF', 'upload_pdf_subtext': 'Archivos PDF • Hasta 10 archivos • Tamaño máximo total del lote: 50MB',
            'upload_crop_text': 'Haga clic para seleccionar o arrastre y suelte su archivo PDF', 'upload_crop_subtext': 'Archivos PDF • Hasta 10MB por archivo • Solo un archivo',
            'language': 'Idioma', 'footer_description': 'Su solución PDF todo en uno. Edite, convierta, combine y administre PDFs en línea gratis.', 'footer_rights': 'Todos los derechos reservados.',
            'why_choose_title': '¿Por qué elegir PDFrow PDF Cropper?', 'why_choose_subtitle': 'Recorte de PDF profesional con precisión y facilidad',
            'feature_precision_cropping': 'Recorte Preciso', 'feature_precision_cropping_desc': 'Recorte páginas PDF con precisión perfecta usando nuestra interfaz de recorte intuitiva',
            'feature_live_preview': 'Vista Previa en Vivo', 'feature_live_preview_desc': 'Vea exactamente lo que está recortando con vista previa en tiempo real y retroalimentación instantánea',
            'feature_secure': '100% Seguro', 'feature_secure_desc': 'Sus archivos se procesan localmente y se eliminan automáticamente después del procesamiento',
            'feature_lightning_fast': 'Ultra Rápido', 'feature_lightning_fast_desc': 'Recorte páginas PDF instantáneamente con nuestro motor de procesamiento optimizado',
            'how_to_crop_title': 'Cómo Recortar Páginas PDF', 'how_to_crop_subtitle': 'Proceso simple de 3 pasos para recortar y cortar documentos PDF',
            'step1_title': 'Subir Archivo PDF', 'step1_desc': 'Seleccione o arrastre y suelte su archivo PDF para comenzar. Previsualice cada página y navegue por su documento fácilmente.',
            'step1_feature1': '• Soporta archivos de hasta 50MB', 'step1_feature2': '• Vista previa instantánea del PDF', 'step1_feature3': '• Navegación página por página',
            'step2_title': 'Seleccionar Área de Recorte', 'step2_desc': 'Use la herramienta de recorte interactiva para seleccionar el área exacta que desea conservar. Arrastre los controladores para cambiar el tamaño y ajustar su selección.',
            'step2_feature1': '• <strong>Visual:</strong> Recorte arrastrando y soltando', 'step2_feature2': '• <strong>Preciso:</strong> Ingrese coordenadas exactas', 'step2_feature3': '• <strong>Preajustes:</strong> Plantillas de tamaños comunes',
            'step3_title': 'Descargar PDF Recortado', 'step3_desc': 'Procese su PDF y descargue la versión recortada instantáneamente. Su formato y calidad originales se conservan.',
            'step3_feature1': '• Procesamiento instantáneo', 'step3_feature2': '• Calidad preservada', 'step3_feature3': '• Salida en el mismo formato'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Déconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_crop': 'Rogner PDF', 'crop_pdf_title': 'Rogner PDF en Ligne',
            'crop_pdf_description': 'Coupez et rognez des pages PDF avec précision. Supprimez les sections indésirables, ajustez les bordures et créez des PDF de taille personnalisée exactement comme vous en avez besoin.',
            'custom_crop': 'Rognage Personnalisé', 'live_preview': 'Aperçu en Direct', 'precise_control': 'Contrôle Précis', 'secure_100': '100% Sécurisé',
            'security_badge_crop': '100% Sécurisé - Les fichiers sont traités localement',
            'pdf_cutting_title': 'Outil de Découpe PDF', 'pdf_cutting_subtitle': 'Coupez et rognez des pages PDF avec précision et prévisualisez vos modifications en temps réel',
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.', 'upload_from_computer': 'Télécharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'upload_text': 'Cliquez pour sélectionner ou glissez-déposez vos fichiers PDF', 'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 10 fichiers • Taille maximale totale du lot: 50MB',
            'upload_crop_text': 'Cliquez pour sélectionner ou glissez-déposez votre fichier PDF', 'upload_crop_subtext': 'Fichiers PDF • Jusqu\'à 10MB par fichier • Un seul fichier',
            'language': 'Langue', 'footer_description': 'Votre solution PDF tout-en-un. Modifiez, convertissez, fusionnez et gérez des PDFs en ligne gratuitement.', 'footer_rights': 'Tous droits réservés.',
            'why_choose_title': 'Pourquoi Choisir PDFrow PDF Cropper?', 'why_choose_subtitle': 'Rognage PDF professionnel avec précision et facilité',
            'feature_precision_cropping': 'Rognage Précis', 'feature_precision_cropping_desc': 'Rognez des pages PDF avec une précision au pixel près grâce à notre interface de rognage intuitive',
            'feature_live_preview': 'Aperçu en Direct', 'feature_live_preview_desc': 'Voyez exactement ce que vous rognez avec un aperçu en temps réel et des commentaires instantanés',
            'feature_secure': '100% Sécurisé', 'feature_secure_desc': 'Vos fichiers sont traités localement et automatiquement supprimés après le traitement',
            'feature_lightning_fast': 'Ultra Rapide', 'feature_lightning_fast_desc': 'Rognez des pages PDF instantanément avec notre moteur de traitement optimisé',
            'how_to_crop_title': 'Comment Rogner des Pages PDF', 'how_to_crop_subtitle': 'Processus simple en 3 étapes pour rogner et couper des documents PDF',
            'step1_title': 'Télécharger Fichier PDF', 'step1_desc': 'Sélectionnez ou glissez-déposez votre fichier PDF pour commencer. Prévisualisez chaque page et naviguez facilement dans votre document.',
            'step1_feature1': '• Prend en charge les fichiers jusqu\'à 50MB', 'step1_feature2': '• Aperçu PDF instantané', 'step1_feature3': '• Navigation page par page',
            'step2_title': 'Sélectionner Zone de Rognage', 'step2_desc': 'Utilisez l\'outil de rognage interactif pour sélectionner la zone exacte que vous souhaitez conserver. Faites glisser les poignées pour redimensionner et affiner votre sélection.',
            'step2_feature1': '• <strong>Visuel:</strong> Rognage par glisser-déposer', 'step2_feature2': '• <strong>Précis:</strong> Entrez les coordonnées exactes', 'step2_feature3': '• <strong>Préréglages:</strong> Modèles de tailles courantes',
            'step3_title': 'Télécharger PDF Rogné', 'step3_desc': 'Traitez votre PDF et téléchargez la version rognée instantanément. Votre formatage et qualité d\'origine sont préservés.',
            'step3_feature1': '• Traitement instantané', 'step3_feature2': '• Qualité préservée', 'step3_feature3': '• Sortie au même format'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_crop': 'PDF Zuschneiden', 'crop_pdf_title': 'PDF Online Zuschneiden',
            'crop_pdf_description': 'Schneiden und beschneiden Sie PDF-Seiten mit Präzision. Entfernen Sie unerwünschte Abschnitte, passen Sie Ränder an und erstellen Sie maßgeschneiderte PDFs genau nach Ihren Wünschen.',
            'custom_crop': 'Benutzerdefinierter Zuschnitt', 'live_preview': 'Live-Vorschau', 'precise_control': 'Präzise Kontrolle', 'secure_100': '100% Sicher',
            'security_badge_crop': '100% Sicher - Dateien werden lokal verarbeitet',
            'pdf_cutting_title': 'PDF-Schneidewerkzeug', 'pdf_cutting_subtitle': 'Schneiden und beschneiden Sie PDF-Seiten mit Präzision und sehen Sie Ihre Änderungen in Echtzeit',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.', 'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'upload_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Dateien hierher', 'upload_pdf_subtext': 'PDF-Dateien • Bis zu 10 Dateien • Maximale Gesamtgröße: 50MB',
            'upload_crop_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Datei hierher', 'upload_crop_subtext': 'PDF-Dateien • Bis zu 10MB pro Datei • Nur eine Datei',
            'language': 'Sprache', 'footer_description': 'Ihre All-in-One-PDF-Lösung. Bearbeiten, konvertieren, zusammenführen und verwalten Sie PDFs online kostenlos.', 'footer_rights': 'Alle Rechte vorbehalten.',
            'why_choose_title': 'Warum PDFrow PDF Cropper wählen?', 'why_choose_subtitle': 'Professionelles PDF-Zuschneiden mit Präzision und Leichtigkeit',
            'feature_precision_cropping': 'Präzises Zuschneiden', 'feature_precision_cropping_desc': 'Schneiden Sie PDF-Seiten mit pixelgenauer Präzision mit unserer intuitiven Zuschnitt-Oberfläche',
            'feature_live_preview': 'Live-Vorschau', 'feature_live_preview_desc': 'Sehen Sie genau, was Sie zuschneiden, mit Echtzeit-Vorschau und sofortigem Feedback',
            'feature_secure': '100% Sicher', 'feature_secure_desc': 'Ihre Dateien werden lokal verarbeitet und nach der Verarbeitung automatisch gelöscht',
            'feature_lightning_fast': 'Blitzschnell', 'feature_lightning_fast_desc': 'Schneiden Sie PDF-Seiten sofort mit unserer optimierten Verarbeitungs-Engine',
            'how_to_crop_title': 'Wie man PDF-Seiten Zuschneidet', 'how_to_crop_subtitle': 'Einfacher 3-Schritte-Prozess zum Zuschneiden und Schneiden von PDF-Dokumenten',
            'step1_title': 'PDF-Datei Hochladen', 'step1_desc': 'Wählen Sie Ihre PDF-Datei aus oder ziehen Sie sie per Drag & Drop, um zu beginnen. Sehen Sie sich jede Seite in der Vorschau an und navigieren Sie einfach durch Ihr Dokument.',
            'step1_feature1': '• Unterstützt Dateien bis zu 50MB', 'step1_feature2': '• Sofortige PDF-Vorschau', 'step1_feature3': '• Seite-für-Seite-Navigation',
            'step2_title': 'Zuschnittbereich Auswählen', 'step2_desc': 'Verwenden Sie das interaktive Zuschnitt-Tool, um den genauen Bereich auszuwählen, den Sie behalten möchten. Ziehen Sie die Griffe, um die Größe zu ändern und Ihre Auswahl feinzustellen.',
            'step2_feature1': '• <strong>Visuell:</strong> Drag & Drop-Zuschnitt', 'step2_feature2': '• <strong>Präzise:</strong> Genaue Koordinaten eingeben', 'step2_feature3': '• <strong>Vorlagen:</strong> Gängige Größenvorlagen',
            'step3_title': 'Zugeschnittenes PDF Herunterladen', 'step3_desc': 'Verarbeiten Sie Ihr PDF und laden Sie die zugeschnittene Version sofort herunter. Ihre ursprüngliche Formatierung und Qualität bleiben erhalten.',
            'step3_feature1': '• Sofortige Verarbeitung', 'step3_feature2': '• Qualität erhalten', 'step3_feature3': '• Ausgabe im gleichen Format'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_crop': 'Ritaglia PDF', 'crop_pdf_title': 'Ritaglia PDF Online',
            'crop_pdf_description': 'Taglia e ritaglia pagine PDF con precisione. Rimuovi sezioni indesiderate, regola i bordi e crea PDF di dimensioni personalizzate esattamente come ne hai bisogno.',
            'custom_crop': 'Ritaglio Personalizzato', 'live_preview': 'Anteprima Live', 'precise_control': 'Controllo Preciso', 'secure_100': '100% Sicuro',
            'security_badge_crop': '100% Sicuro - File elaborati localmente',
            'pdf_cutting_title': 'Strumento di Taglio PDF', 'pdf_cutting_subtitle': 'Taglia e ritaglia pagine PDF con precisione e visualizza le modifiche in tempo reale',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.', 'upload_from_computer': 'Carica dal Computer', 'import_from_url': 'Importa da URL',
            'upload_text': 'Clicca per selezionare o trascina i tuoi file PDF', 'upload_pdf_subtext': 'File PDF • Fino a 10 file • Dimensione totale massima: 50MB',
            'upload_crop_text': 'Clicca per selezionare o trascina il tuo file PDF', 'upload_crop_subtext': 'File PDF • Fino a 10MB per file • Solo un file',
            'language': 'Lingua', 'footer_description': 'La tua soluzione PDF all-in-one. Modifica, converti, unisci e gestisci PDF online gratuitamente.', 'footer_rights': 'Tutti i diritti riservati.',
            'why_choose_title': 'Perché Scegliere PDFrow PDF Cropper?', 'why_choose_subtitle': 'Ritaglio PDF professionale con precisione e facilità',
            'feature_precision_cropping': 'Ritaglio Preciso', 'feature_precision_cropping_desc': 'Ritaglia pagine PDF con precisione perfetta usando la nostra interfaccia di ritaglio intuitiva',
            'feature_live_preview': 'Anteprima Live', 'feature_live_preview_desc': 'Vedi esattamente cosa stai ritagliando con anteprima in tempo reale e feedback istantaneo',
            'feature_secure': '100% Sicuro', 'feature_secure_desc': 'I tuoi file vengono elaborati localmente e cancellati automaticamente dopo l\'elaborazione',
            'feature_lightning_fast': 'Fulmineo', 'feature_lightning_fast_desc': 'Ritaglia pagine PDF istantaneamente con il nostro motore di elaborazione ottimizzato',
            'how_to_crop_title': 'Come Ritagliare Pagine PDF', 'how_to_crop_subtitle': 'Semplice processo in 3 passaggi per ritagliare e tagliare documenti PDF',
            'step1_title': 'Carica File PDF', 'step1_desc': 'Seleziona o trascina il tuo file PDF per iniziare. Visualizza in anteprima ogni pagina e naviga facilmente nel tuo documento.',
            'step1_feature1': '• Supporta file fino a 50MB', 'step1_feature2': '• Anteprima PDF istantanea', 'step1_feature3': '• Navigazione pagina per pagina',
            'step2_title': 'Seleziona Area di Ritaglio', 'step2_desc': 'Usa lo strumento di ritaglio interattivo per selezionare l\'area esatta che vuoi mantenere. Trascina le maniglie per ridimensionare e affinare la tua selezione.',
            'step2_feature1': '• <strong>Visuale:</strong> Ritaglio trascina e rilascia', 'step2_feature2': '• <strong>Preciso:</strong> Inserisci coordinate esatte', 'step2_feature3': '• <strong>Preimpostazioni:</strong> Modelli di dimensioni comuni',
            'step3_title': 'Scarica PDF Ritagliato', 'step3_desc': 'Elabora il tuo PDF e scarica la versione ritagliata istantaneamente. La formattazione e la qualità originali sono preservate.',
            'step3_feature1': '• Elaborazione istantanea', 'step3_feature2': '• Qualità preservata', 'step3_feature3': '• Output nello stesso formato'
        },
        'tr': {
            'nav_tools': 'Araçlar', 'nav_features': 'Özellikler', 'nav_how_it_works': 'Nasıl Çalışır', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giriş Yap', 'btn_signup': 'Kayıt Ol', 'btn_profile': 'Profil', 'btn_logout': 'Çıkış Yap',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_crop': 'PDF Kırp', 'crop_pdf_title': 'PDF\'yi Online Kırp',
            'crop_pdf_description': 'PDF sayfalarını hassasiyetle kesin ve kırpın. İstenmeyen bölümleri kaldırın, kenarlıkları ayarlayın ve tam ihtiyacınız olan özel boyutlu PDF\'ler oluşturun.',
            'custom_crop': 'Özel Kırpma', 'live_preview': 'Canlı Önizleme', 'precise_control': 'Hassas Kontrol', 'secure_100': '%100 Güvenli',
            'security_badge_crop': '%100 Güvenli - Dosyalar yerel olarak işlenir',
            'pdf_cutting_title': 'PDF Kesme Aracı', 'pdf_cutting_subtitle': 'PDF sayfalarını hassasiyetle kesin ve kırpın ve değişikliklerinizi gerçek zamanlı olarak önizleyin',
            'privacy_badge': '%100 istemci tarafı. Dosyalar asla cihazınızdan ayrılmaz.', 'upload_from_computer': 'Bilgisayardan Yükle', 'import_from_url': 'URL\'den İçe Aktar',
            'upload_text': 'PDF dosyalarınızı seçmek için tıklayın veya sürükleyip bırakın', 'upload_pdf_subtext': 'PDF dosyaları • 10 dosyaya kadar • Maksimum toplam: 50MB',
            'upload_crop_text': 'PDF dosyanızı seçmek için tıklayın veya sürükleyip bırakın', 'upload_crop_subtext': 'PDF dosyaları • Dosya başına 10MB\'a kadar • Sadece tek dosya',
            'language': 'Dil', 'footer_description': 'Hepsi bir arada PDF çözümünüz. PDF\'leri ücretsiz olarak çevrimiçi düzenleyin, dönüştürün, birleştirin ve yönetin.', 'footer_rights': 'Tüm hakları saklıdır.',
            'why_choose_title': 'Neden PDFrow PDF Cropper\'ı Seçmelisiniz?', 'why_choose_subtitle': 'Hassasiyet ve kolaylıkla profesyonel PDF kırpma',
            'feature_precision_cropping': 'Hassas Kırpma', 'feature_precision_cropping_desc': 'Sezgisel kırpma arayüzümüzü kullanarak PDF sayfalarını piksel mükemmel doğrulukla kırpın',
            'feature_live_preview': 'Canlı Önizleme', 'feature_live_preview_desc': 'Gerçek zamanlı önizleme ve anında geri bildirimle tam olarak neyi kırptığınızı görün',
            'feature_secure': '%100 Güvenli', 'feature_secure_desc': 'Dosyalarınız yerel olarak işlenir ve işlemden sonra otomatik olarak silinir',
            'feature_lightning_fast': 'Şimşek Hızında', 'feature_lightning_fast_desc': 'Optimize edilmiş işleme motorumuzla PDF sayfalarını anında kırpın',
            'how_to_crop_title': 'PDF Sayfaları Nasıl Kırpılır', 'how_to_crop_subtitle': 'PDF belgelerini kırpmak ve kesmek için basit 3 adımlı süreç',
            'step1_title': 'PDF Dosyası Yükle', 'step1_desc': 'Başlamak için PDF dosyanızı seçin veya sürükleyip bırakın. Her sayfayı önizleyin ve belgenizde kolayca gezinin.',
            'step1_feature1': '• 50MB\'a kadar dosyaları destekler', 'step1_feature2': '• Anında PDF önizlemesi', 'step1_feature3': '• Sayfa sayfa gezinme',
            'step2_title': 'Kırpma Alanını Seç', 'step2_desc': 'Tutmak istediğiniz tam alanı seçmek için etkileşimli kırpma aracını kullanın. Seçiminizi yeniden boyutlandırmak ve ince ayar yapmak için tutamaçları sürükleyin.',
            'step2_feature1': '• <strong>Görsel:</strong> Sürükle ve bırak kırpma', 'step2_feature2': '• <strong>Hassas:</strong> Tam koordinatları girin', 'step2_feature3': '• <strong>Ön Ayarlar:</strong> Yaygın boyut şablonları',
            'step3_title': 'Kırpılmış PDF\'yi İndir', 'step3_desc': 'PDF\'nizi işleyin ve kırpılmış sürümü anında indirin. Orijinal biçimlendirmeniz ve kaliteniz korunur.',
            'step3_feature1': '• Anında işleme', 'step3_feature2': '• Kalite korunur', 'step3_feature3': '• Aynı format çıktısı'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Início', 'breadcrumb_crop': 'Recortar PDF', 'crop_pdf_title': 'Recortar PDF Online',
            'crop_pdf_description': 'Corte e recorte páginas PDF com precisão. Remova seções indesejadas, ajuste bordas e crie PDFs de tamanho personalizado exatamente como você precisa.',
            'custom_crop': 'Recorte Personalizado', 'live_preview': 'Visualização Ao Vivo', 'precise_control': 'Controle Preciso', 'secure_100': '100% Seguro',
            'security_badge_crop': '100% Seguro - Arquivos processados localmente',
            'pdf_cutting_title': 'Ferramenta de Corte de PDF', 'pdf_cutting_subtitle': 'Corte e recorte páginas PDF com precisão e visualize suas alterações em tempo real',
            'privacy_badge': '100% no lado do cliente. Os arquivos nunca saem do seu dispositivo.', 'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'upload_text': 'Clique para selecionar ou arraste e solte seus arquivos PDF', 'upload_pdf_subtext': 'Arquivos PDF • Até 10 arquivos • Tamanho máximo total: 50MB',
            'upload_crop_text': 'Clique para selecionar ou arraste e solte seu arquivo PDF', 'upload_crop_subtext': 'Arquivos PDF • Até 10MB por arquivo • Apenas um arquivo',
            'language': 'Idioma', 'footer_description': 'Sua solução PDF completa. Edite, converta, mescle e gerencie PDFs online gratuitamente.', 'footer_rights': 'Todos os direitos reservados.',
            'why_choose_title': 'Por que Escolher PDFrow PDF Cropper?', 'why_choose_subtitle': 'Recorte de PDF profissional com precisão e facilidade',
            'feature_precision_cropping': 'Recorte Preciso', 'feature_precision_cropping_desc': 'Recorte páginas PDF com precisão perfeita usando nossa interface de recorte intuitiva',
            'feature_live_preview': 'Visualização Ao Vivo', 'feature_live_preview_desc': 'Veja exatamente o que você está recortando com visualização em tempo real e feedback instantâneo',
            'feature_secure': '100% Seguro', 'feature_secure_desc': 'Seus arquivos são processados localmente e excluídos automaticamente após o processamento',
            'feature_lightning_fast': 'Super Rápido', 'feature_lightning_fast_desc': 'Recorte páginas PDF instantaneamente com nosso mecanismo de processamento otimizado',
            'how_to_crop_title': 'Como Recortar Páginas PDF', 'how_to_crop_subtitle': 'Processo simples de 3 etapas para recortar e cortar documentos PDF',
            'step1_title': 'Carregar Arquivo PDF', 'step1_desc': 'Selecione ou arraste e solte seu arquivo PDF para começar. Visualize cada página e navegue facilmente pelo seu documento.',
            'step1_feature1': '• Suporta arquivos de até 50MB', 'step1_feature2': '• Visualização instantânea de PDF', 'step1_feature3': '• Navegação página por página',
            'step2_title': 'Selecionar Área de Recorte', 'step2_desc': 'Use a ferramenta de recorte interativa para selecionar a área exata que deseja manter. Arraste as alças para redimensionar e ajustar sua seleção.',
            'step2_feature1': '• <strong>Visual:</strong> Recorte arrastar e soltar', 'step2_feature2': '• <strong>Preciso:</strong> Insira coordenadas exatas', 'step2_feature3': '• <strong>Predefinições:</strong> Modelos de tamanhos comuns',
            'step3_title': 'Baixar PDF Recortado', 'step3_desc': 'Processe seu PDF e baixe a versão recortada instantaneamente. Sua formatação e qualidade originais são preservadas.',
            'step3_feature1': '• Processamento instantâneo', 'step3_feature2': '• Qualidade preservada', 'step3_feature3': '• Saída no mesmo formato'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_crop': 'Обрезать PDF', 'crop_pdf_title': 'Обрезать PDF онлайн',
            'crop_pdf_description': 'Обрезайте и вырезайте страницы PDF с точностью. Удаляйте ненужные разделы, настраивайте границы и создавайте PDF нужного размера именно так, как вам нужно.',
            'custom_crop': 'Пользовательская обрезка', 'live_preview': 'Предпросмотр в реальном времени', 'precise_control': 'Точный контроль', 'secure_100': '100% Безопасно',
            'security_badge_crop': '100% Безопасно - Файлы обрабатываются локально',
            'pdf_cutting_title': 'Инструмент обрезки PDF', 'pdf_cutting_subtitle': 'Обрезайте и вырезайте страницы PDF с точностью и просматривайте изменения в реальном времени',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.', 'upload_from_computer': 'Загрузить с компьютера', 'import_from_url': 'Импорт из URL',
            'upload_text': 'Нажмите, чтобы выбрать, или перетащите PDF-файлы', 'upload_pdf_subtext': 'PDF файлы • До 10 файлов • Максимальный общий размер: 50MB',
            'upload_crop_text': 'Нажмите, чтобы выбрать, или перетащите PDF-файл', 'upload_crop_subtext': 'PDF файлы • До 10MB на файл • Только один файл',
            'language': 'Язык', 'footer_description': 'Ваше универсальное PDF-решение. Редактируйте, конвертируйте, объединяйте и управляйте PDF онлайн бесплатно.', 'footer_rights': 'Все права защищены.',
            'why_choose_title': 'Почему Выбирают PDFrow PDF Cropper?', 'why_choose_subtitle': 'Профессиональная обрезка PDF с точностью и легкостью',
            'feature_precision_cropping': 'Точная обрезка', 'feature_precision_cropping_desc': 'Обрезайте страницы PDF с идеальной точностью, используя наш интуитивный интерфейс обрезки',
            'feature_live_preview': 'Предпросмотр в реальном времени', 'feature_live_preview_desc': 'Видите именно то, что вы обрезаете, с предпросмотром в реальном времени и мгновенной обратной связью',
            'feature_secure': '100% Безопасно', 'feature_secure_desc': 'Ваши файлы обрабатываются локально и автоматически удаляются после обработки',
            'feature_lightning_fast': 'Молниеносно Быстро', 'feature_lightning_fast_desc': 'Обрезайте страницы PDF мгновенно с помощью нашего оптимизированного движка обработки',
            'how_to_crop_title': 'Как Обрезать Страницы PDF', 'how_to_crop_subtitle': 'Простой процесс из 3 шагов для обрезки и вырезания PDF-документов',
            'step1_title': 'Загрузить PDF-файл', 'step1_desc': 'Выберите или перетащите PDF-файл, чтобы начать. Просматривайте каждую страницу и легко перемещайтесь по документу.',
            'step1_feature1': '• Поддержка файлов до 50MB', 'step1_feature2': '• Мгновенный предпросмотр PDF', 'step1_feature3': '• Навигация страница за страницей',
            'step2_title': 'Выбрать Область Обрезки', 'step2_desc': 'Используйте интерактивный инструмент обрезки, чтобы выбрать точную область, которую вы хотите сохранить. Перетаскивайте ручки для изменения размера и настройки выбора.',
            'step2_feature1': '• <strong>Визуальная:</strong> Обрезка перетаскиванием', 'step2_feature2': '• <strong>Точная:</strong> Введите точные координаты', 'step2_feature3': '• <strong>Шаблоны:</strong> Общие шаблоны размеров',
            'step3_title': 'Скачать Обрезанный PDF', 'step3_desc': 'Обработайте свой PDF и загрузите обрезанную версию мгновенно. Ваше исходное форматирование и качество сохраняются.',
            'step3_feature1': '• Мгновенная обработка', 'step3_feature2': '• Качество сохранено', 'step3_feature3': '• Вывод в том же формате'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_crop': '裁剪PDF', 'crop_pdf_title': '在线裁剪PDF',
            'crop_pdf_description': '精确裁剪和剪切PDF页面。删除不需要的部分，调整边框，创建您所需的自定义大小PDF。',
            'custom_crop': '自定义裁剪', 'live_preview': '实时预览', 'precise_control': '精确控制', 'secure_100': '100%安全',
            'security_badge_crop': '100%安全 - 文件在本地处理',
            'pdf_cutting_title': 'PDF裁剪工具', 'pdf_cutting_subtitle': '精确裁剪和剪切PDF页面，实时预览您的更改',
            'privacy_badge': '100%客户端处理。文件永远不会离开您的设备。', 'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'upload_text': '点击选择或拖放您的PDF文件', 'upload_pdf_subtext': 'PDF文件 • 最多10个文件 • 最大总大小：50MB',
            'upload_crop_text': '点击选择或拖放您的PDF文件', 'upload_crop_subtext': 'PDF文件 • 每个文件最大10MB • 仅单个文件',
            'language': '语言', 'footer_description': '您的一体化PDF解决方案。免费在线编辑、转换、合并和管理PDF。', 'footer_rights': '版权所有。',
            'why_choose_title': '为什么选择PDFrow PDF裁剪器？', 'why_choose_subtitle': '精确且简单的专业PDF裁剪',
            'feature_precision_cropping': '精确裁剪', 'feature_precision_cropping_desc': '使用我们直观的裁剪界面以像素完美的精度裁剪PDF页面',
            'feature_live_preview': '实时预览', 'feature_live_preview_desc': '通过实时预览和即时反馈准确查看您正在裁剪的内容',
            'feature_secure': '100%安全', 'feature_secure_desc': '您的文件在本地处理，处理后自动删除',
            'feature_lightning_fast': '闪电般快速', 'feature_lightning_fast_desc': '使用我们优化的处理引擎即时裁剪PDF页面',
            'how_to_crop_title': '如何裁剪PDF页面', 'how_to_crop_subtitle': '裁剪和剪切PDF文档的简单3步流程',
            'step1_title': '上传PDF文件', 'step1_desc': '选择或拖放您的PDF文件开始。预览每一页并轻松浏览您的文档。',
            'step1_feature1': '• 支持最大50MB文件', 'step1_feature2': '• 即时PDF预览', 'step1_feature3': '• 逐页导航',
            'step2_title': '选择裁剪区域', 'step2_desc': '使用交互式裁剪工具选择您想要保留的确切区域。拖动手柄调整大小并微调您的选择。',
            'step2_feature1': '• <strong>可视化：</strong>拖放裁剪', 'step2_feature2': '• <strong>精确：</strong>输入精确坐标', 'step2_feature3': '• <strong>预设：</strong>常见尺寸模板',
            'step3_title': '下载裁剪的PDF', 'step3_desc': '处理您的PDF并立即下载裁剪版本。保留原始格式和质量。',
            'step3_feature1': '• 即时处理', 'step3_feature2': '• 质量保留', 'step3_feature3': '• 相同格式输出'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_crop': 'PDFトリミング', 'crop_pdf_title': 'オンラインでPDFをトリミング',
            'crop_pdf_description': 'PDFページを正確にカットおよびトリミング。不要なセクションを削除し、境界線を調整し、必要に応じてカスタムサイズのPDFを作成します。',
            'custom_crop': 'カスタムトリミング', 'live_preview': 'ライブプレビュー', 'precise_control': '正確な制御', 'secure_100': '100%安全',
            'security_badge_crop': '100%安全 - ファイルはローカルで処理されます',
            'pdf_cutting_title': 'PDFカットツール', 'pdf_cutting_subtitle': 'PDFページを正確にカットおよびトリミングし、変更をリアルタイムでプレビュー',
            'privacy_badge': '100%クライアント側処理。ファイルがデバイスから離れることはありません。', 'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'upload_text': 'クリックして選択するか、PDFファイルをドラッグ＆ドロップ', 'upload_pdf_subtext': 'PDFファイル • 最大10ファイル • 最大合計サイズ：50MB',
            'upload_crop_text': 'クリックして選択するか、PDFファイルをドラッグ＆ドロップ', 'upload_crop_subtext': 'PDFファイル • ファイルあたり最大10MB • 単一ファイルのみ',
            'language': '言語', 'footer_description': 'オールインワンPDFソリューション。PDFを無料でオンライン編集、変換、結合、管理できます。', 'footer_rights': '全著作権所有。',
            'why_choose_title': 'なぜPDFrow PDF Cropperを選ぶのか？', 'why_choose_subtitle': '正確で簡単なプロフェッショナルPDFトリミング',
            'feature_precision_cropping': '精密トリミング', 'feature_precision_cropping_desc': '直感的なトリミングインターフェースを使用してピクセル完璧な精度でPDFページをトリミング',
            'feature_live_preview': 'ライブプレビュー', 'feature_live_preview_desc': 'リアルタイムプレビューと即座のフィードバックで、トリミング内容を正確に確認',
            'feature_secure': '100%安全', 'feature_secure_desc': 'ファイルはローカルで処理され、処理後に自動的に削除されます',
            'feature_lightning_fast': '超高速', 'feature_lightning_fast_desc': '最適化された処理エンジンでPDFページを即座にトリミング',
            'how_to_crop_title': 'PDFページのトリミング方法', 'how_to_crop_subtitle': 'PDF文書をトリミングおよびカットするシンプルな3ステッププロセス',
            'step1_title': 'PDFファイルをアップロード', 'step1_desc': 'PDFファイルを選択またはドラッグ＆ドロップして開始。各ページをプレビューし、ドキュメントを簡単にナビゲート。',
            'step1_feature1': '• 最大50MBのファイルをサポート', 'step1_feature2': '• 即座のPDFプレビュー', 'step1_feature3': '• ページごとのナビゲーション',
            'step2_title': 'トリミング領域を選択', 'step2_desc': 'インタラクティブなトリミングツールを使用して、保持したい正確な領域を選択。ハンドルをドラッグしてサイズを変更し、選択を微調整。',
            'step2_feature1': '• <strong>ビジュアル：</strong>ドラッグ＆ドロップトリミング', 'step2_feature2': '• <strong>正確：</strong>正確な座標を入力', 'step2_feature3': '• <strong>プリセット：</strong>一般的なサイズテンプレート',
            'step3_title': 'トリミングされたPDFをダウンロード', 'step3_desc': 'PDFを処理し、トリミングされたバージョンを即座にダウンロード。元の形式と品質が保持されます。',
            'step3_feature1': '• 即座の処理', 'step3_feature2': '• 品質保持', 'step3_feature3': '• 同じ形式の出力'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'المميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_crop': 'اقتصاص PDF', 'crop_pdf_title': 'اقتصاص PDF عبر الإنترنت',
            'crop_pdf_description': 'قص واقتصاص صفحات PDF بدقة. أزل الأقسام غير المرغوب فيها، واضبط الحدود، وأنشئ ملفات PDF بحجم مخصص تماماً كما تحتاج.',
            'custom_crop': 'اقتصاص مخصص', 'live_preview': 'معاينة حية', 'precise_control': 'تحكم دقيق', 'secure_100': 'آمن 100%',
            'security_badge_crop': 'آمن 100% - تتم معالجة الملفات محلياً',
            'pdf_cutting_title': 'أداة قص PDF', 'pdf_cutting_subtitle': 'قص واقتصاص صفحات PDF بدقة وعاين تغييراتك في الوقت الفعلي',
            'privacy_badge': '100% من جانب العميل. لا تغادر الملفات جهازك أبداً.', 'upload_from_computer': 'التحميل من الكمبيوتر', 'import_from_url': 'استيراد من URL',
            'upload_text': 'انقر للتحديد أو اسحب وأفلت ملفات PDF الخاصة بك', 'upload_pdf_subtext': 'ملفات PDF • حتى 10 ملفات • الحد الأقصى للحجم الإجمالي: 50 ميجابايت',
            'upload_crop_text': 'انقر للتحديد أو اسحب وأفلت ملف PDF الخاص بك', 'upload_crop_subtext': 'ملفات PDF • حتى 10 ميجابايت لكل ملف • ملف واحد فقط',
            'language': 'اللغة', 'footer_description': 'حل PDF الشامل الخاص بك. قم بتحرير وتحويل ودمج وإدارة ملفات PDF عبر الإنترنت مجاناً.', 'footer_rights': 'جميع الحقوق محفوظة.',
            'why_choose_title': 'لماذا تختار PDFrow PDF Cropper؟', 'why_choose_subtitle': 'اقتصاص PDF احترافي بدقة وسهولة',
            'feature_precision_cropping': 'اقتصاص دقيق', 'feature_precision_cropping_desc': 'اقتص صفحات PDF بدقة مثالية باستخدام واجهة الاقتصاص البديهية الخاصة بنا',
            'feature_live_preview': 'معاينة حية', 'feature_live_preview_desc': 'شاهد بالضبط ما تقتصه مع المعاينة في الوقت الفعلي والتعليقات الفورية',
            'feature_secure': 'آمن 100%', 'feature_secure_desc': 'تتم معالجة ملفاتك محلياً وحذفها تلقائياً بعد المعالجة',
            'feature_lightning_fast': 'سريع كالبرق', 'feature_lightning_fast_desc': 'اقتص صفحات PDF على الفور باستخدام محرك المعالجة المُحسَّن لدينا',
            'how_to_crop_title': 'كيفية اقتصاص صفحات PDF', 'how_to_crop_subtitle': 'عملية بسيطة من 3 خطوات لاقتصاص وقص مستندات PDF',
            'step1_title': 'تحميل ملف PDF', 'step1_desc': 'حدد أو اسحب وأفلت ملف PDF الخاص بك للبدء. عاين كل صفحة وتنقل عبر مستندك بسهولة.',
            'step1_feature1': '• يدعم الملفات حتى 50 ميجابايت', 'step1_feature2': '• معاينة PDF فورية', 'step1_feature3': '• التنقل صفحة بصفحة',
            'step2_title': 'حدد منطقة الاقتصاص', 'step2_desc': 'استخدم أداة الاقتصاص التفاعلية لتحديد المنطقة الدقيقة التي تريد الاحتفاظ بها. اسحب المقابض لتغيير الحجم وضبط اختيارك.',
            'step2_feature1': '• <strong>مرئي:</strong> اقتصاص بالسحب والإفلات', 'step2_feature2': '• <strong>دقيق:</strong> أدخل الإحداثيات الدقيقة', 'step2_feature3': '• <strong>الإعدادات المسبقة:</strong> قوالب الأحجام الشائعة',
            'step3_title': 'تنزيل PDF المقتص', 'step3_desc': 'عالج ملف PDF الخاص بك وقم بتنزيل النسخة المقتصة على الفور. يتم الحفاظ على التنسيق والجودة الأصلية.',
            'step3_feature1': '• معالجة فورية', 'step3_feature2': '• الجودة محفوظة', 'step3_feature3': '• إخراج بنفس التنسيق'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'FAQ',
            'btn_login': 'लॉग इन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफ़ाइल', 'btn_logout': 'लॉग आउट',
            'breadcrumb_home': 'होम', 'breadcrumb_crop': 'PDF क्रॉप करें', 'crop_pdf_title': 'ऑनलाइन PDF क्रॉप करें',
            'crop_pdf_description': 'सटीकता से PDF पृष्ठों को काटें और क्रॉप करें। अवांछित अनुभागों को हटाएं, बॉर्डर समायोजित करें, और अपनी आवश्यकता के अनुसार कस्टम-आकार के PDF बनाएं।',
            'custom_crop': 'कस्टम क्रॉप', 'live_preview': 'लाइव पूर्वावलोकन', 'precise_control': 'सटीक नियंत्रण', 'secure_100': '100% सुरक्षित',
            'security_badge_crop': '100% सुरक्षित - फ़ाइलें स्थानीय रूप से संसाधित',
            'pdf_cutting_title': 'PDF काटने का टूल', 'pdf_cutting_subtitle': 'सटीकता से PDF पृष्ठों को काटें और क्रॉप करें और अपने परिवर्तनों को वास्तविक समय में पूर्वावलोकन करें',
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी आपके डिवाइस को नहीं छोड़तीं।', 'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से आयात करें',
            'upload_text': 'अपनी PDF फ़ाइलों का चयन करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें', 'upload_pdf_subtext': 'PDF फ़ाइलें • 10 फ़ाइलों तक • अधिकतम कुल आकार: 50MB',
            'upload_crop_text': 'अपनी PDF फ़ाइल का चयन करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें', 'upload_crop_subtext': 'PDF फ़ाइलें • फ़ाइल के प्रति 10MB तक • केवल एक फ़ाइल',
            'language': 'भाषा', 'footer_description': 'आपका ऑल-इन-वन PDF समाधान। PDF को मुफ्त में ऑनलाइन संपादित, परिवर्तित, मर्ज और प्रबंधित करें।', 'footer_rights': 'सर्वाधिकार सुरक्षित।',
            'why_choose_title': 'PDFrow PDF Cropper को क्यों चुनें?', 'why_choose_subtitle': 'सटीकता और आसानी से पेशेवर PDF क्रॉपिंग',
            'feature_precision_cropping': 'सटीक क्रॉपिंग', 'feature_precision_cropping_desc': 'हमारे सहज क्रॉपिंग इंटरफ़ेस का उपयोग करके पिक्सेल-परफेक्ट सटीकता के साथ PDF पृष्ठों को क्रॉप करें',
            'feature_live_preview': 'लाइव पूर्वावलोकन', 'feature_live_preview_desc': 'रीयल-टाइम पूर्वावलोकन और तत्काल फीडबैक के साथ देखें कि आप क्या क्रॉप कर रहे हैं',
            'feature_secure': '100% सुरक्षित', 'feature_secure_desc': 'आपकी फ़ाइलें स्थानीय रूप से संसाधित होती हैं और प्रसंस्करण के बाद स्वचालित रूप से हटा दी जाती हैं',
            'feature_lightning_fast': 'बिजली की तेज़', 'feature_lightning_fast_desc': 'हमारे अनुकूलित प्रोसेसिंग इंजन के साथ तुरंत PDF पृष्ठों को क्रॉप करें',
            'how_to_crop_title': 'PDF पृष्ठों को कैसे क्रॉप करें', 'how_to_crop_subtitle': 'PDF दस्तावेज़ों को क्रॉप और काटने के लिए सरल 3-चरणीय प्रक्रिया',
            'step1_title': 'PDF फ़ाइल अपलोड करें', 'step1_desc': 'शुरू करने के लिए अपनी PDF फ़ाइल का चयन करें या ड्रैग और ड्रॉप करें। प्रत्येक पृष्ठ का पूर्वावलोकन करें और अपने दस्तावेज़ में आसानी से नेविगेट करें।',
            'step1_feature1': '• 50MB तक की फ़ाइलों का समर्थन करता है', 'step1_feature2': '• तत्काल PDF पूर्वावलोकन', 'step1_feature3': '• पृष्ठ-दर-पृष्ठ नेविगेशन',
            'step2_title': 'क्रॉप क्षेत्र चुनें', 'step2_desc': 'उस सटीक क्षेत्र का चयन करने के लिए इंटरैक्टिव क्रॉपिंग टूल का उपयोग करें जिसे आप रखना चाहते हैं। आकार बदलने और अपने चयन को ठीक करने के लिए हैंडल खींचें।',
            'step2_feature1': '• <strong>विज़ुअल:</strong> ड्रैग और ड्रॉप क्रॉपिंग', 'step2_feature2': '• <strong>सटीक:</strong> सटीक निर्देशांक दर्ज करें', 'step2_feature3': '• <strong>प्रीसेट:</strong> सामान्य आकार टेम्पलेट',
            'step3_title': 'क्रॉप किया गया PDF डाउनलोड करें', 'step3_desc': 'अपनी PDF को प्रोसेस करें और क्रॉप किए गए संस्करण को तुरंत डाउनलोड करें। आपका मूल स्वरूपण और गुणवत्ता संरक्षित है।',
            'step3_feature1': '• तत्काल प्रसंस्करण', 'step3_feature2': '• गुणवत्ता संरक्षित', 'step3_feature3': '• समान प्रारूप आउटपुट'
        }
    };

    return allTranslations[langCode] || allTranslations['en'];
}

function loadLanguage(langCode) {
    const translations = getTranslations(langCode);

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            // Handle different element types
            if (element.tagName === 'INPUT' && element.type !== 'submit' && element.type !== 'button') {
                element.placeholder = translations[key];
            } else {
                // Preserve HTML formatting for elements with <strong> tags
                if (translations[key].includes('<strong>')) {
                    element.innerHTML = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', langCode);
}

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
    const languageMenu = document.getElementById('languageMenu');
    const languageItems = document.querySelectorAll('.language-item');
    const currentFlag = document.getElementById('currentFlag');
    const currentLang = document.getElementById('currentLang');

    // Load saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    loadLanguage(savedLang);

    // Update current language display
    const savedLangItem = document.querySelector(`.language-item[data-lang="${savedLang}"]`);
    if (savedLangItem) {
        currentFlag.textContent = savedLangItem.getAttribute('data-flag');
        currentLang.textContent = savedLangItem.querySelector('span:last-child').textContent;
    }

    // Toggle language menu
    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageMenu.classList.toggle('active');
        });
    }

    // Handle language selection
    languageItems.forEach(item => {
        item.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            const flag = this.getAttribute('data-flag');
            const langName = this.querySelector('span:last-child').textContent;

            // Update display
            currentFlag.textContent = flag;
            currentLang.textContent = langName;

            // Load translations
            loadLanguage(lang);

            // Close menu
            languageMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function() {
        languageMenu.classList.remove('active');
    });
});
