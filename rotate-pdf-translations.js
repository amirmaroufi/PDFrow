// Translation system for rotate-pdf.html
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
            'breadcrumb_rotate': 'PDF Rotator',
            'rotate_pdf_title': 'PDF Rotator',
            'rotate_pdf_description': 'Rotate PDF pages with precision. Turn individual pages or entire documents by 90°, 180°, 270°, or custom angles to correct orientation instantly.',
            'quick_rotation': 'Quick Rotation',
            'live_preview': 'Live Preview',
            'instant_rotation': 'Instant Rotation',
            'secure_100': '100% Secure',
            'security_badge_rotate': '100% Secure - Files processed locally',

            // Tool Section
            'pdf_rotation_title': 'PDF Rotation Tool',
            'pdf_rotation_subtitle': 'Rotate PDF pages with precision and preview your changes in real-time',
            'privacy_badge': '100% client‑side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',
            'upload_text': 'Click to select or drag and drop your PDF files',
            'upload_pdf_subtext': 'PDF files • Up to 10 files • Max 50MB total batch size',

            // Preview Section
            'pdf_preview': 'PDF Preview',
            'previous_file': 'Previous File',
            'next_file': 'Next File',
            'file_text': 'File',
            'of_text': 'of',
            'previous_page': 'Previous Page',
            'next_page': 'Next Page',
            'page_text': 'Page',

            // Rotation Controls
            'rotation_settings': 'Rotation Settings',
            'rotation_settings_desc': 'Choose how to rotate your PDF pages',
            'quick_rotation_title': 'Quick Rotation',
            'rotate_90_right': '90° Right',
            'rotate_180_flip': '180° Flip',
            'rotate_90_left': '90° Left',
            'rotating_90_clockwise': 'Rotating 90° clockwise',
            'rotating_180': 'Rotating 180°',
            'rotating_90_counter': 'Rotating 90° counter-clockwise',

            // Buttons
            'rotate_pdf_btn': 'Rotate PDF',
            'hint_upload_files_first': 'Upload a PDF file above to enable rotation',
            'download_pdf': 'Download PDF',
            'process_another': 'Process Another',

            // Success Messages
            'processing_completed': 'Processing completed!',
            'pdf_ready': 'Your PDF is ready for download',
            'continue_to': 'Continue to...',
            'merge_pdf': 'Merge PDF',
            'split_pdf': 'Split PDF',
            'compress_pdf': 'Compress PDF',

            // URL Import
            'paste_url_placeholder': 'Paste Dropbox or Google Drive link here...',
            'import_file': 'Import File',
            'downloading': 'Downloading...',
            'supported_services': 'Supported Services:',
            'dropbox_hint': 'Dropbox: Share link and paste here',
            'gdrive_hint': 'Google Drive: Get shareable link (Anyone with the link can view)',
            'direct_url_hint': 'Direct file URLs (supported format only)',
            'max_size_hint': 'Maximum file size: 50MB',

            // Footer
            'language': 'Language',
            'footer_description': 'Your all-in-one PDF solution. Edit, convert, merge, and manage PDFs online for free.',
            'footer_rights': 'All rights reserved.',

            // Why Choose Section
            'why_choose_title': 'Why Choose PDFrow PDF Rotator?',
            'why_choose_subtitle': 'Professional PDF rotation with precision and ease',
            'feature_quick_rotation': 'Quick Rotation',
            'feature_quick_rotation_desc': 'Rotate PDF pages by 90°, 180°, or 270° with a single click',
            'feature_live_preview': 'Live Preview',
            'feature_live_preview_desc': 'See exactly how your pages will look with real-time preview',
            'feature_secure': '100% Secure',
            'feature_secure_desc': 'Your files are processed locally and automatically deleted after processing',
            'feature_lightning_fast': 'Lightning Fast',
            'feature_lightning_fast_desc': 'Rotate PDF pages instantly with our optimized processing engine',

            // How to Rotate Section
            'how_to_rotate_title': 'How to Rotate PDF Pages',
            'how_to_rotate_subtitle': 'Simple 3-step process to rotate PDF documents',
            'step1_title': 'Upload PDF File',
            'step1_desc': 'Select or drag and drop your PDF file to start. Preview each page and navigate through your document easily.',
            'step1_feature1': '• Supports up to 50MB files',
            'step1_feature2': '• Instant PDF preview',
            'step1_feature3': '• Page-by-page navigation',
            'step2_title': 'Choose Rotation Angle',
            'step2_desc': 'Select the rotation angle for your PDF pages. Choose from 90°, 180°, or 270° rotation options.',
            'step2_feature1': '• <strong>Quick:</strong> Preset rotation angles',
            'step2_feature2': '• <strong>Preview:</strong> See changes in real-time',
            'step2_feature3': '• <strong>Flexible:</strong> Rotate all or specific pages',
            'step3_title': 'Download Rotated PDF',
            'step3_desc': 'Process your PDF and download the rotated version instantly. Your original formatting and quality are preserved.',
            'step3_feature1': '• Instant processing',
            'step3_feature2': '• Quality preserved',
            'step3_feature3': '• Same format output'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Características', 'nav_how_it_works': 'Cómo Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesión', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesión',
            'breadcrumb_home': 'Inicio', 'breadcrumb_rotate': 'Rotar PDF', 'rotate_pdf_title': 'Rotar PDF',
            'rotate_pdf_description': 'Rote páginas PDF con precisión. Gire páginas individuales o documentos completos en 90°, 180°, 270° o ángulos personalizados para corregir la orientación instantáneamente.',
            'quick_rotation': 'Rotación Rápida', 'live_preview': 'Vista Previa en Vivo', 'instant_rotation': 'Rotación Instantánea', 'secure_100': '100% Seguro',
            'security_badge_rotate': '100% Seguro - Los archivos se procesan localmente',
            'pdf_rotation_title': 'Herramienta de Rotación de PDF', 'pdf_rotation_subtitle': 'Rote páginas PDF con precisión y previsualice sus cambios en tiempo real',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.', 'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'upload_text': 'Haga clic para seleccionar o arrastre y suelte sus archivos PDF', 'upload_pdf_subtext': 'Archivos PDF • Hasta 10 archivos • Tamaño máximo total: 50MB',
            'pdf_preview': 'Vista Previa de PDF', 'previous_file': 'Archivo Anterior', 'next_file': 'Archivo Siguiente', 'file_text': 'Archivo', 'of_text': 'de',
            'previous_page': 'Página Anterior', 'next_page': 'Página Siguiente', 'page_text': 'Página',
            'rotation_settings': 'Configuración de Rotación', 'rotation_settings_desc': 'Elija cómo rotar sus páginas PDF', 'quick_rotation_title': 'Rotación Rápida',
            'rotate_90_right': '90° Derecha', 'rotate_180_flip': '180° Voltear', 'rotate_90_left': '90° Izquierda',
            'rotating_90_clockwise': 'Rotando 90° en sentido horario', 'rotating_180': 'Rotando 180°', 'rotating_90_counter': 'Rotando 90° en sentido antihorario',
            'rotate_pdf_btn': 'Rotar PDF', 'hint_upload_files_first': 'Suba un archivo PDF arriba para habilitar la rotación',
            'download_pdf': 'Descargar PDF', 'process_another': 'Procesar Otro',
            'processing_completed': '¡Procesamiento completado!', 'pdf_ready': 'Su PDF está listo para descargar', 'continue_to': 'Continuar a...',
            'merge_pdf': 'Combinar PDF', 'split_pdf': 'Dividir PDF', 'compress_pdf': 'Comprimir PDF',
            'paste_url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aquí...', 'import_file': 'Importar Archivo', 'downloading': 'Descargando...',
            'supported_services': 'Servicios Admitidos:', 'dropbox_hint': 'Dropbox: Comparta el enlace y péguelo aquí',
            'gdrive_hint': 'Google Drive: Obtenga el enlace para compartir (Cualquiera con el enlace puede ver)', 'direct_url_hint': 'URLs de archivo directo (solo formato compatible)',
            'max_size_hint': 'Tamaño máximo de archivo: 50MB',
            'language': 'Idioma', 'footer_description': 'Su solución PDF todo en uno. Edite, convierta, combine y administre PDFs en línea gratis.', 'footer_rights': 'Todos los derechos reservados.',
            'why_choose_title': '¿Por qué elegir PDFrow PDF Rotator?', 'why_choose_subtitle': 'Rotación de PDF profesional con precisión y facilidad',
            'feature_quick_rotation': 'Rotación Rápida', 'feature_quick_rotation_desc': 'Rote páginas PDF en 90°, 180° o 270° con un solo clic',
            'feature_live_preview': 'Vista Previa en Vivo', 'feature_live_preview_desc': 'Vea exactamente cómo se verán sus páginas con vista previa en tiempo real',
            'feature_secure': '100% Seguro', 'feature_secure_desc': 'Sus archivos se procesan localmente y se eliminan automáticamente después del procesamiento',
            'feature_lightning_fast': 'Ultra Rápido', 'feature_lightning_fast_desc': 'Rote páginas PDF instantáneamente con nuestro motor de procesamiento optimizado',
            'how_to_rotate_title': 'Cómo Rotar Páginas PDF', 'how_to_rotate_subtitle': 'Proceso simple de 3 pasos para rotar documentos PDF',
            'step1_title': 'Subir Archivo PDF', 'step1_desc': 'Seleccione o arrastre y suelte su archivo PDF para comenzar. Previsualice cada página y navegue por su documento fácilmente.',
            'step1_feature1': '• Soporta archivos de hasta 50MB', 'step1_feature2': '• Vista previa instantánea del PDF', 'step1_feature3': '• Navegación página por página',
            'step2_title': 'Elegir Ángulo de Rotación', 'step2_desc': 'Seleccione el ángulo de rotación para sus páginas PDF. Elija entre opciones de rotación de 90°, 180° o 270°.',
            'step2_feature1': '• <strong>Rápido:</strong> Ángulos de rotación preestablecidos', 'step2_feature2': '• <strong>Vista Previa:</strong> Vea cambios en tiempo real', 'step2_feature3': '• <strong>Flexible:</strong> Rote todas o páginas específicas',
            'step3_title': 'Descargar PDF Rotado', 'step3_desc': 'Procese su PDF y descargue la versión rotada instantáneamente. Su formato y calidad originales se conservan.',
            'step3_feature1': '• Procesamiento instantáneo', 'step3_feature2': '• Calidad preservada', 'step3_feature3': '• Salida en el mismo formato'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Déconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_rotate': 'Pivoter PDF', 'rotate_pdf_title': 'Pivoter PDF',
            'rotate_pdf_description': 'Pivotez les pages PDF avec précision. Tournez des pages individuelles ou des documents entiers de 90°, 180°, 270° ou des angles personnalisés pour corriger l\'orientation instantanément.',
            'quick_rotation': 'Rotation Rapide', 'live_preview': 'Aperçu en Direct', 'instant_rotation': 'Rotation Instantanée', 'secure_100': '100% Sécurisé',
            'security_badge_rotate': '100% Sécurisé - Les fichiers sont traités localement',
            'pdf_rotation_title': 'Outil de Rotation PDF', 'pdf_rotation_subtitle': 'Pivotez les pages PDF avec précision et prévisualisez vos modifications en temps réel',
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.', 'upload_from_computer': 'Télécharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'upload_text': 'Cliquez pour sélectionner ou glissez-déposez vos fichiers PDF', 'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 10 fichiers • Taille maximale totale: 50MB',
            'pdf_preview': 'Aperçu PDF', 'previous_file': 'Fichier Précédent', 'next_file': 'Fichier Suivant', 'file_text': 'Fichier', 'of_text': 'de',
            'previous_page': 'Page Précédente', 'next_page': 'Page Suivante', 'page_text': 'Page',
            'rotation_settings': 'Paramètres de Rotation', 'rotation_settings_desc': 'Choisissez comment pivoter vos pages PDF', 'quick_rotation_title': 'Rotation Rapide',
            'rotate_90_right': '90° Droite', 'rotate_180_flip': '180° Retourner', 'rotate_90_left': '90° Gauche',
            'rotating_90_clockwise': 'Rotation de 90° dans le sens horaire', 'rotating_180': 'Rotation de 180°', 'rotating_90_counter': 'Rotation de 90° dans le sens antihoraire',
            'rotate_pdf_btn': 'Pivoter PDF', 'hint_upload_files_first': 'Téléchargez un fichier PDF ci-dessus pour activer la rotation',
            'download_pdf': 'Télécharger PDF', 'process_another': 'Traiter un Autre',
            'processing_completed': 'Traitement terminé!', 'pdf_ready': 'Votre PDF est prêt à être téléchargé', 'continue_to': 'Continuer vers...',
            'merge_pdf': 'Fusionner PDF', 'split_pdf': 'Diviser PDF', 'compress_pdf': 'Compresser PDF',
            'paste_url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...', 'import_file': 'Importer Fichier', 'downloading': 'Téléchargement...',
            'supported_services': 'Services Pris en Charge:', 'dropbox_hint': 'Dropbox: Partagez le lien et collez-le ici',
            'gdrive_hint': 'Google Drive: Obtenez le lien partageable (Toute personne disposant du lien peut voir)', 'direct_url_hint': 'URLs de fichiers directs (format pris en charge uniquement)',
            'max_size_hint': 'Taille maximale du fichier: 50MB',
            'language': 'Langue', 'footer_description': 'Votre solution PDF tout-en-un. Modifiez, convertissez, fusionnez et gérez des PDFs en ligne gratuitement.', 'footer_rights': 'Tous droits réservés.',
            'why_choose_title': 'Pourquoi Choisir PDFrow PDF Rotator?', 'why_choose_subtitle': 'Rotation PDF professionnelle avec précision et facilité',
            'feature_quick_rotation': 'Rotation Rapide', 'feature_quick_rotation_desc': 'Pivotez les pages PDF de 90°, 180° ou 270° en un seul clic',
            'feature_live_preview': 'Aperçu en Direct', 'feature_live_preview_desc': 'Voyez exactement à quoi ressembleront vos pages avec un aperçu en temps réel',
            'feature_secure': '100% Sécurisé', 'feature_secure_desc': 'Vos fichiers sont traités localement et automatiquement supprimés après le traitement',
            'feature_lightning_fast': 'Ultra Rapide', 'feature_lightning_fast_desc': 'Pivotez les pages PDF instantanément avec notre moteur de traitement optimisé',
            'how_to_rotate_title': 'Comment Pivoter des Pages PDF', 'how_to_rotate_subtitle': 'Processus simple en 3 étapes pour pivoter des documents PDF',
            'step1_title': 'Télécharger Fichier PDF', 'step1_desc': 'Sélectionnez ou glissez-déposez votre fichier PDF pour commencer. Prévisualisez chaque page et naviguez facilement dans votre document.',
            'step1_feature1': '• Prend en charge les fichiers jusqu\'à 50MB', 'step1_feature2': '• Aperçu PDF instantané', 'step1_feature3': '• Navigation page par page',
            'step2_title': 'Choisir l\'Angle de Rotation', 'step2_desc': 'Sélectionnez l\'angle de rotation pour vos pages PDF. Choisissez parmi les options de rotation de 90°, 180° ou 270°.',
            'step2_feature1': '• <strong>Rapide:</strong> Angles de rotation prédéfinis', 'step2_feature2': '• <strong>Aperçu:</strong> Voir les changements en temps réel', 'step2_feature3': '• <strong>Flexible:</strong> Pivoter toutes les pages ou des pages spécifiques',
            'step3_title': 'Télécharger PDF Pivoté', 'step3_desc': 'Traitez votre PDF et téléchargez la version pivotée instantanément. Votre formatage et qualité d\'origine sont préservés.',
            'step3_feature1': '• Traitement instantané', 'step3_feature2': '• Qualité préservée', 'step3_feature3': '• Sortie au même format'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_rotate': 'PDF Drehen', 'rotate_pdf_title': 'PDF Drehen',
            'rotate_pdf_description': 'Drehen Sie PDF-Seiten mit Präzision. Drehen Sie einzelne Seiten oder ganze Dokumente um 90°, 180°, 270° oder benutzerdefinierte Winkel, um die Ausrichtung sofort zu korrigieren.',
            'quick_rotation': 'Schnelle Drehung', 'live_preview': 'Live-Vorschau', 'instant_rotation': 'Sofortige Drehung', 'secure_100': '100% Sicher',
            'security_badge_rotate': '100% Sicher - Dateien werden lokal verarbeitet',
            'pdf_rotation_title': 'PDF-Drehwerkzeug', 'pdf_rotation_subtitle': 'Drehen Sie PDF-Seiten mit Präzision und sehen Sie Ihre Änderungen in Echtzeit',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.', 'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'upload_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Dateien hierher', 'upload_pdf_subtext': 'PDF-Dateien • Bis zu 10 Dateien • Maximale Gesamtgröße: 50MB',
            'pdf_preview': 'PDF-Vorschau', 'previous_file': 'Vorherige Datei', 'next_file': 'Nächste Datei', 'file_text': 'Datei', 'of_text': 'von',
            'previous_page': 'Vorherige Seite', 'next_page': 'Nächste Seite', 'page_text': 'Seite',
            'rotation_settings': 'Dreheinstellungen', 'rotation_settings_desc': 'Wählen Sie, wie Sie Ihre PDF-Seiten drehen möchten', 'quick_rotation_title': 'Schnelle Drehung',
            'rotate_90_right': '90° Rechts', 'rotate_180_flip': '180° Umdrehen', 'rotate_90_left': '90° Links',
            'rotating_90_clockwise': '90° im Uhrzeigersinn drehen', 'rotating_180': '180° drehen', 'rotating_90_counter': '90° gegen den Uhrzeigersinn drehen',
            'rotate_pdf_btn': 'PDF Drehen', 'hint_upload_files_first': 'Laden Sie oben eine PDF-Datei hoch, um die Drehung zu aktivieren',
            'download_pdf': 'PDF Herunterladen', 'process_another': 'Weitere Verarbeiten',
            'processing_completed': 'Verarbeitung abgeschlossen!', 'pdf_ready': 'Ihr PDF ist zum Download bereit', 'continue_to': 'Weiter zu...',
            'merge_pdf': 'PDF Zusammenführen', 'split_pdf': 'PDF Teilen', 'compress_pdf': 'PDF Komprimieren',
            'paste_url_placeholder': 'Dropbox- oder Google Drive-Link hier einfügen...', 'import_file': 'Datei Importieren', 'downloading': 'Herunterladen...',
            'supported_services': 'Unterstützte Dienste:', 'dropbox_hint': 'Dropbox: Link teilen und hier einfügen',
            'gdrive_hint': 'Google Drive: Teilbaren Link abrufen (Jeder mit dem Link kann anzeigen)', 'direct_url_hint': 'Direkte Datei-URLs (nur unterstütztes Format)',
            'max_size_hint': 'Maximale Dateigröße: 50MB',
            'language': 'Sprache', 'footer_description': 'Ihre All-in-One-PDF-Lösung. Bearbeiten, konvertieren, zusammenführen und verwalten Sie PDFs online kostenlos.', 'footer_rights': 'Alle Rechte vorbehalten.',
            'why_choose_title': 'Warum PDFrow PDF Rotator wählen?', 'why_choose_subtitle': 'Professionelles PDF-Drehen mit Präzision und Leichtigkeit',
            'feature_quick_rotation': 'Schnelle Drehung', 'feature_quick_rotation_desc': 'Drehen Sie PDF-Seiten mit einem einzigen Klick um 90°, 180° oder 270°',
            'feature_live_preview': 'Live-Vorschau', 'feature_live_preview_desc': 'Sehen Sie genau, wie Ihre Seiten mit Echtzeit-Vorschau aussehen werden',
            'feature_secure': '100% Sicher', 'feature_secure_desc': 'Ihre Dateien werden lokal verarbeitet und nach der Verarbeitung automatisch gelöscht',
            'feature_lightning_fast': 'Blitzschnell', 'feature_lightning_fast_desc': 'Drehen Sie PDF-Seiten sofort mit unserer optimierten Verarbeitungs-Engine',
            'how_to_rotate_title': 'Wie man PDF-Seiten Dreht', 'how_to_rotate_subtitle': 'Einfacher 3-Schritte-Prozess zum Drehen von PDF-Dokumenten',
            'step1_title': 'PDF-Datei Hochladen', 'step1_desc': 'Wählen Sie Ihre PDF-Datei aus oder ziehen Sie sie per Drag & Drop, um zu beginnen. Sehen Sie sich jede Seite in der Vorschau an und navigieren Sie einfach durch Ihr Dokument.',
            'step1_feature1': '• Unterstützt Dateien bis zu 50MB', 'step1_feature2': '• Sofortige PDF-Vorschau', 'step1_feature3': '• Seite-für-Seite-Navigation',
            'step2_title': 'Drehwinkel Wählen', 'step2_desc': 'Wählen Sie den Drehwinkel für Ihre PDF-Seiten. Wählen Sie aus Drehoptionen von 90°, 180° oder 270°.',
            'step2_feature1': '• <strong>Schnell:</strong> Voreingestellte Drehwinkel', 'step2_feature2': '• <strong>Vorschau:</strong> Änderungen in Echtzeit sehen', 'step2_feature3': '• <strong>Flexibel:</strong> Alle oder bestimmte Seiten drehen',
            'step3_title': 'Gedrehtes PDF Herunterladen', 'step3_desc': 'Verarbeiten Sie Ihr PDF und laden Sie die gedrehte Version sofort herunter. Ihre ursprüngliche Formatierung und Qualität bleiben erhalten.',
            'step3_feature1': '• Sofortige Verarbeitung', 'step3_feature2': '• Qualität erhalten', 'step3_feature3': '• Ausgabe im gleichen Format'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_rotate': 'Ruota PDF', 'rotate_pdf_title': 'Ruota PDF',
            'rotate_pdf_description': 'Ruota le pagine PDF con precisione. Gira singole pagine o documenti completi di 90°, 180°, 270° o angoli personalizzati per correggere l\'orientamento istantaneamente.',
            'quick_rotation': 'Rotazione Rapida', 'live_preview': 'Anteprima Live', 'instant_rotation': 'Rotazione Istantanea', 'secure_100': '100% Sicuro',
            'security_badge_rotate': '100% Sicuro - File elaborati localmente',
            'pdf_rotation_title': 'Strumento di Rotazione PDF', 'pdf_rotation_subtitle': 'Ruota le pagine PDF con precisione e visualizza le modifiche in tempo reale',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.', 'upload_from_computer': 'Carica dal Computer', 'import_from_url': 'Importa da URL',
            'upload_text': 'Clicca per selezionare o trascina i tuoi file PDF', 'upload_pdf_subtext': 'File PDF • Fino a 10 file • Dimensione totale massima: 50MB',
            'pdf_preview': 'Anteprima PDF', 'previous_file': 'File Precedente', 'next_file': 'File Successivo', 'file_text': 'File', 'of_text': 'di',
            'previous_page': 'Pagina Precedente', 'next_page': 'Pagina Successiva', 'page_text': 'Pagina',
            'rotation_settings': 'Impostazioni di Rotazione', 'rotation_settings_desc': 'Scegli come ruotare le tue pagine PDF', 'quick_rotation_title': 'Rotazione Rapida',
            'rotate_90_right': '90° Destra', 'rotate_180_flip': '180° Capovolgi', 'rotate_90_left': '90° Sinistra',
            'rotating_90_clockwise': 'Rotazione di 90° in senso orario', 'rotating_180': 'Rotazione di 180°', 'rotating_90_counter': 'Rotazione di 90° in senso antiorario',
            'rotate_pdf_btn': 'Ruota PDF', 'hint_upload_files_first': 'Carica un file PDF sopra per abilitare la rotazione',
            'download_pdf': 'Scarica PDF', 'process_another': 'Elabora un Altro',
            'processing_completed': 'Elaborazione completata!', 'pdf_ready': 'Il tuo PDF è pronto per il download', 'continue_to': 'Continua a...',
            'merge_pdf': 'Unisci PDF', 'split_pdf': 'Dividi PDF', 'compress_pdf': 'Comprimi PDF',
            'paste_url_placeholder': 'Incolla il link Dropbox o Google Drive qui...', 'import_file': 'Importa File', 'downloading': 'Download...',
            'supported_services': 'Servizi Supportati:', 'dropbox_hint': 'Dropbox: Condividi il link e incollalo qui',
            'gdrive_hint': 'Google Drive: Ottieni il link condivisibile (Chiunque con il link può visualizzare)', 'direct_url_hint': 'URL di file diretti (solo formato supportato)',
            'max_size_hint': 'Dimensione massima del file: 50MB',
            'language': 'Lingua', 'footer_description': 'La tua soluzione PDF all-in-one. Modifica, converti, unisci e gestisci PDF online gratuitamente.', 'footer_rights': 'Tutti i diritti riservati.',
            'why_choose_title': 'Perché Scegliere PDFrow PDF Rotator?', 'why_choose_subtitle': 'Rotazione PDF professionale con precisione e facilità',
            'feature_quick_rotation': 'Rotazione Rapida', 'feature_quick_rotation_desc': 'Ruota le pagine PDF di 90°, 180° o 270° con un solo clic',
            'feature_live_preview': 'Anteprima Live', 'feature_live_preview_desc': 'Vedi esattamente come appariranno le tue pagine con anteprima in tempo reale',
            'feature_secure': '100% Sicuro', 'feature_secure_desc': 'I tuoi file vengono elaborati localmente e cancellati automaticamente dopo l\'elaborazione',
            'feature_lightning_fast': 'Fulmineo', 'feature_lightning_fast_desc': 'Ruota le pagine PDF istantaneamente con il nostro motore di elaborazione ottimizzato',
            'how_to_rotate_title': 'Come Ruotare Pagine PDF', 'how_to_rotate_subtitle': 'Semplice processo in 3 passaggi per ruotare documenti PDF',
            'step1_title': 'Carica File PDF', 'step1_desc': 'Seleziona o trascina il tuo file PDF per iniziare. Visualizza in anteprima ogni pagina e naviga facilmente nel tuo documento.',
            'step1_feature1': '• Supporta file fino a 50MB', 'step1_feature2': '• Anteprima PDF istantanea', 'step1_feature3': '• Navigazione pagina per pagina',
            'step2_title': 'Scegli Angolo di Rotazione', 'step2_desc': 'Seleziona l\'angolo di rotazione per le tue pagine PDF. Scegli tra opzioni di rotazione di 90°, 180° o 270°.',
            'step2_feature1': '• <strong>Rapido:</strong> Angoli di rotazione preimpostati', 'step2_feature2': '• <strong>Anteprima:</strong> Vedi le modifiche in tempo reale', 'step2_feature3': '• <strong>Flessibile:</strong> Ruota tutte o pagine specifiche',
            'step3_title': 'Scarica PDF Ruotato', 'step3_desc': 'Elabora il tuo PDF e scarica la versione ruotata istantaneamente. La formattazione e la qualità originali sono preservate.',
            'step3_feature1': '• Elaborazione istantanea', 'step3_feature2': '• Qualità preservata', 'step3_feature3': '• Output nello stesso formato'
        },
        'tr': {
            'nav_tools': 'Araçlar', 'nav_features': 'Özellikler', 'nav_how_it_works': 'Nasıl Çalışır', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giriş Yap', 'btn_signup': 'Kayıt Ol', 'btn_profile': 'Profil', 'btn_logout': 'Çıkış Yap',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_rotate': 'PDF Döndür', 'rotate_pdf_title': 'PDF Döndür',
            'rotate_pdf_description': 'PDF sayfalarını hassasiyetle döndürün. Tek tek sayfaları veya tüm belgeleri 90°, 180°, 270° veya özel açılarla döndürerek yönü anında düzeltin.',
            'quick_rotation': 'Hızlı Döndürme', 'live_preview': 'Canlı Önizleme', 'instant_rotation': 'Anında Döndürme', 'secure_100': '%100 Güvenli',
            'security_badge_rotate': '%100 Güvenli - Dosyalar yerel olarak işlenir',
            'pdf_rotation_title': 'PDF Döndürme Aracı', 'pdf_rotation_subtitle': 'PDF sayfalarını hassasiyetle döndürün ve değişikliklerinizi gerçek zamanlı olarak önizleyin',
            'privacy_badge': '%100 istemci tarafı. Dosyalar asla cihazınızdan ayrılmaz.', 'upload_from_computer': 'Bilgisayardan Yükle', 'import_from_url': 'URL\'den İçe Aktar',
            'upload_text': 'PDF dosyalarınızı seçmek için tıklayın veya sürükleyip bırakın', 'upload_pdf_subtext': 'PDF dosyaları • 10 dosyaya kadar • Maksimum toplam: 50MB',
            'pdf_preview': 'PDF Önizleme', 'previous_file': 'Önceki Dosya', 'next_file': 'Sonraki Dosya', 'file_text': 'Dosya', 'of_text': '/',
            'previous_page': 'Önceki Sayfa', 'next_page': 'Sonraki Sayfa', 'page_text': 'Sayfa',
            'rotation_settings': 'Döndürme Ayarları', 'rotation_settings_desc': 'PDF sayfalarınızı nasıl döndüreceğinizi seçin', 'quick_rotation_title': 'Hızlı Döndürme',
            'rotate_90_right': '90° Sağa', 'rotate_180_flip': '180° Çevir', 'rotate_90_left': '90° Sola',
            'rotating_90_clockwise': '90° saat yönünde döndürme', 'rotating_180': '180° döndürme', 'rotating_90_counter': '90° saat yönünün tersine döndürme',
            'rotate_pdf_btn': 'PDF\'yi Döndür', 'hint_upload_files_first': 'Döndürmeyi etkinleştirmek için yukarıya bir PDF dosyası yükleyin',
            'download_pdf': 'PDF\'yi İndir', 'process_another': 'Başka Bir Dosya İşle',
            'processing_completed': 'İşlem tamamlandı!', 'pdf_ready': 'PDF\'niz indirmeye hazır', 'continue_to': 'Devam et...',
            'merge_pdf': 'PDF Birleştir', 'split_pdf': 'PDF Böl', 'compress_pdf': 'PDF Sıkıştır',
            'paste_url_placeholder': 'Dropbox veya Google Drive bağlantısını buraya yapıştırın...', 'import_file': 'Dosyayı İçe Aktar', 'downloading': 'İndiriliyor...',
            'supported_services': 'Desteklenen Hizmetler:', 'dropbox_hint': 'Dropbox: Bağlantıyı paylaşın ve buraya yapıştırın',
            'gdrive_hint': 'Google Drive: Paylaşılabilir bağlantı alın (Bağlantıya sahip olan herkes görüntüleyebilir)', 'direct_url_hint': 'Doğrudan dosya URL\'leri (yalnızca desteklenen format)',
            'max_size_hint': 'Maksimum dosya boyutu: 50MB',
            'language': 'Dil', 'footer_description': 'Hepsi bir arada PDF çözümünüz. PDF\'leri ücretsiz olarak çevrimiçi düzenleyin, dönüştürün, birleştirin ve yönetin.', 'footer_rights': 'Tüm hakları saklıdır.',
            'why_choose_title': 'Neden PDFrow PDF Rotator\'ı Seçmelisiniz?', 'why_choose_subtitle': 'Hassasiyet ve kolaylıkla profesyonel PDF döndürme',
            'feature_quick_rotation': 'Hızlı Döndürme', 'feature_quick_rotation_desc': 'PDF sayfalarını tek tıklamayla 90°, 180° veya 270° döndürün',
            'feature_live_preview': 'Canlı Önizleme', 'feature_live_preview_desc': 'Sayfalarınızın gerçek zamanlı önizleme ile nasıl görüneceğini tam olarak görün',
            'feature_secure': '%100 Güvenli', 'feature_secure_desc': 'Dosyalarınız yerel olarak işlenir ve işlemden sonra otomatik olarak silinir',
            'feature_lightning_fast': 'Şimşek Hızında', 'feature_lightning_fast_desc': 'Optimize edilmiş işleme motorumuzla PDF sayfalarını anında döndürün',
            'how_to_rotate_title': 'PDF Sayfaları Nasıl Döndürülür', 'how_to_rotate_subtitle': 'PDF belgelerini döndürmek için basit 3 adımlı süreç',
            'step1_title': 'PDF Dosyası Yükle', 'step1_desc': 'Başlamak için PDF dosyanızı seçin veya sürükleyip bırakın. Her sayfayı önizleyin ve belgenizde kolayca gezinin.',
            'step1_feature1': '• 50MB\'a kadar dosyaları destekler', 'step1_feature2': '• Anında PDF önizlemesi', 'step1_feature3': '• Sayfa sayfa gezinme',
            'step2_title': 'Döndürme Açısını Seçin', 'step2_desc': 'PDF sayfalarınız için döndürme açısını seçin. 90°, 180° veya 270° döndürme seçeneklerinden birini seçin.',
            'step2_feature1': '• <strong>Hızlı:</strong> Önceden ayarlanmış döndürme açıları', 'step2_feature2': '• <strong>Önizleme:</strong> Değişiklikleri gerçek zamanlı görün', 'step2_feature3': '• <strong>Esnek:</strong> Tüm sayfaları veya belirli sayfaları döndürün',
            'step3_title': 'Döndürülmüş PDF\'yi İndir', 'step3_desc': 'PDF\'nizi işleyin ve döndürülmüş sürümü anında indirin. Orijinal biçimlendirmeniz ve kaliteniz korunur.',
            'step3_feature1': '• Anında işleme', 'step3_feature2': '• Kalite korunur', 'step3_feature3': '• Aynı format çıktısı'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Início', 'breadcrumb_rotate': 'Girar PDF', 'rotate_pdf_title': 'Girar PDF',
            'rotate_pdf_description': 'Gire páginas PDF com precisão. Vire páginas individuais ou documentos inteiros em 90°, 180°, 270° ou ângulos personalizados para corrigir a orientação instantaneamente.',
            'quick_rotation': 'Rotação Rápida', 'live_preview': 'Visualização Ao Vivo', 'instant_rotation': 'Rotação Instantânea', 'secure_100': '100% Seguro',
            'security_badge_rotate': '100% Seguro - Arquivos processados localmente',
            'pdf_rotation_title': 'Ferramenta de Rotação de PDF', 'pdf_rotation_subtitle': 'Gire páginas PDF com precisão e visualize suas alterações em tempo real',
            'privacy_badge': '100% no lado do cliente. Os arquivos nunca saem do seu dispositivo.', 'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'upload_text': 'Clique para selecionar ou arraste e solte seus arquivos PDF', 'upload_pdf_subtext': 'Arquivos PDF • Até 10 arquivos • Tamanho máximo total: 50MB',
            'pdf_preview': 'Visualização de PDF', 'previous_file': 'Arquivo Anterior', 'next_file': 'Próximo Arquivo', 'file_text': 'Arquivo', 'of_text': 'de',
            'previous_page': 'Página Anterior', 'next_page': 'Próxima Página', 'page_text': 'Página',
            'rotation_settings': 'Configurações de Rotação', 'rotation_settings_desc': 'Escolha como girar suas páginas PDF', 'quick_rotation_title': 'Rotação Rápida',
            'rotate_90_right': '90° Direita', 'rotate_180_flip': '180° Virar', 'rotate_90_left': '90° Esquerda',
            'rotating_90_clockwise': 'Girando 90° no sentido horário', 'rotating_180': 'Girando 180°', 'rotating_90_counter': 'Girando 90° no sentido anti-horário',
            'rotate_pdf_btn': 'Girar PDF', 'hint_upload_files_first': 'Carregue um arquivo PDF acima para habilitar a rotação',
            'download_pdf': 'Baixar PDF', 'process_another': 'Processar Outro',
            'processing_completed': 'Processamento concluído!', 'pdf_ready': 'Seu PDF está pronto para download', 'continue_to': 'Continuar para...',
            'merge_pdf': 'Mesclar PDF', 'split_pdf': 'Dividir PDF', 'compress_pdf': 'Comprimir PDF',
            'paste_url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...', 'import_file': 'Importar Arquivo', 'downloading': 'Baixando...',
            'supported_services': 'Serviços Suportados:', 'dropbox_hint': 'Dropbox: Compartilhe o link e cole aqui',
            'gdrive_hint': 'Google Drive: Obtenha o link compartilhável (Qualquer pessoa com o link pode visualizar)', 'direct_url_hint': 'URLs de arquivo direto (apenas formato suportado)',
            'max_size_hint': 'Tamanho máximo do arquivo: 50MB',
            'language': 'Idioma', 'footer_description': 'Sua solução PDF completa. Edite, converta, mescle e gerencie PDFs online gratuitamente.', 'footer_rights': 'Todos os direitos reservados.',
            'why_choose_title': 'Por que Escolher PDFrow PDF Rotator?', 'why_choose_subtitle': 'Rotação de PDF profissional com precisão e facilidade',
            'feature_quick_rotation': 'Rotação Rápida', 'feature_quick_rotation_desc': 'Gire páginas PDF em 90°, 180° ou 270° com um único clique',
            'feature_live_preview': 'Visualização Ao Vivo', 'feature_live_preview_desc': 'Veja exatamente como suas páginas ficarão com visualização em tempo real',
            'feature_secure': '100% Seguro', 'feature_secure_desc': 'Seus arquivos são processados localmente e excluídos automaticamente após o processamento',
            'feature_lightning_fast': 'Super Rápido', 'feature_lightning_fast_desc': 'Gire páginas PDF instantaneamente com nosso mecanismo de processamento otimizado',
            'how_to_rotate_title': 'Como Girar Páginas PDF', 'how_to_rotate_subtitle': 'Processo simples de 3 etapas para girar documentos PDF',
            'step1_title': 'Carregar Arquivo PDF', 'step1_desc': 'Selecione ou arraste e solte seu arquivo PDF para começar. Visualize cada página e navegue facilmente pelo seu documento.',
            'step1_feature1': '• Suporta arquivos de até 50MB', 'step1_feature2': '• Visualização instantânea de PDF', 'step1_feature3': '• Navegação página por página',
            'step2_title': 'Escolher Ângulo de Rotação', 'step2_desc': 'Selecione o ângulo de rotação para suas páginas PDF. Escolha entre opções de rotação de 90°, 180° ou 270°.',
            'step2_feature1': '• <strong>Rápido:</strong> Ângulos de rotação predefinidos', 'step2_feature2': '• <strong>Visualização:</strong> Veja alterações em tempo real', 'step2_feature3': '• <strong>Flexível:</strong> Gire todas ou páginas específicas',
            'step3_title': 'Baixar PDF Girado', 'step3_desc': 'Processe seu PDF e baixe a versão girada instantaneamente. Sua formatação e qualidade originais são preservadas.',
            'step3_feature1': '• Processamento instantâneo', 'step3_feature2': '• Qualidade preservada', 'step3_feature3': '• Saída no mesmo formato'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_rotate': 'Повернуть PDF', 'rotate_pdf_title': 'Повернуть PDF',
            'rotate_pdf_description': 'Поворачивайте страницы PDF с точностью. Поворачивайте отдельные страницы или целые документы на 90°, 180°, 270° или на пользовательские углы для мгновенной коррекции ориентации.',
            'quick_rotation': 'Быстрый поворот', 'live_preview': 'Предпросмотр в реальном времени', 'instant_rotation': 'Мгновенный поворот', 'secure_100': '100% Безопасно',
            'security_badge_rotate': '100% Безопасно - Файлы обрабатываются локально',
            'pdf_rotation_title': 'Инструмент поворота PDF', 'pdf_rotation_subtitle': 'Поворачивайте страницы PDF с точностью и просматривайте изменения в реальном времени',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.', 'upload_from_computer': 'Загрузить с компьютера', 'import_from_url': 'Импорт из URL',
            'upload_text': 'Нажмите, чтобы выбрать, или перетащите PDF-файлы', 'upload_pdf_subtext': 'PDF файлы • До 10 файлов • Максимальный общий размер: 50MB',
            'pdf_preview': 'Предпросмотр PDF', 'previous_file': 'Предыдущий Файл', 'next_file': 'Следующий Файл', 'file_text': 'Файл', 'of_text': 'из',
            'previous_page': 'Предыдущая Страница', 'next_page': 'Следующая Страница', 'page_text': 'Страница',
            'rotation_settings': 'Настройки Поворота', 'rotation_settings_desc': 'Выберите, как повернуть ваши страницы PDF', 'quick_rotation_title': 'Быстрый Поворот',
            'rotate_90_right': '90° Вправо', 'rotate_180_flip': '180° Перевернуть', 'rotate_90_left': '90° Влево',
            'rotating_90_clockwise': 'Поворот на 90° по часовой стрелке', 'rotating_180': 'Поворот на 180°', 'rotating_90_counter': 'Поворот на 90° против часовой стрелки',
            'rotate_pdf_btn': 'Повернуть PDF', 'hint_upload_files_first': 'Загрузите PDF-файл выше, чтобы включить поворот',
            'download_pdf': 'Скачать PDF', 'process_another': 'Обработать Другой',
            'processing_completed': 'Обработка завершена!', 'pdf_ready': 'Ваш PDF готов к загрузке', 'continue_to': 'Продолжить к...',
            'merge_pdf': 'Объединить PDF', 'split_pdf': 'Разделить PDF', 'compress_pdf': 'Сжать PDF',
            'paste_url_placeholder': 'Вставьте ссылку Dropbox или Google Drive сюда...', 'import_file': 'Импортировать Файл', 'downloading': 'Загрузка...',
            'supported_services': 'Поддерживаемые Сервисы:', 'dropbox_hint': 'Dropbox: Поделитесь ссылкой и вставьте здесь',
            'gdrive_hint': 'Google Drive: Получите ссылку для общего доступа (Любой, у кого есть ссылка, может просматривать)', 'direct_url_hint': 'Прямые URL файлов (только поддерживаемый формат)',
            'max_size_hint': 'Максимальный размер файла: 50MB',
            'language': 'Язык', 'footer_description': 'Ваше универсальное PDF-решение. Редактируйте, конвертируйте, объединяйте и управляйте PDF онлайн бесплатно.', 'footer_rights': 'Все права защищены.',
            'why_choose_title': 'Почему Выбирают PDFrow PDF Rotator?', 'why_choose_subtitle': 'Профессиональный поворот PDF с точностью и легкостью',
            'feature_quick_rotation': 'Быстрый Поворот', 'feature_quick_rotation_desc': 'Поворачивайте страницы PDF на 90°, 180° или 270° одним щелчком',
            'feature_live_preview': 'Предпросмотр в реальном времени', 'feature_live_preview_desc': 'Видите точно, как будут выглядеть ваши страницы с предпросмотром в реальном времени',
            'feature_secure': '100% Безопасно', 'feature_secure_desc': 'Ваши файлы обрабатываются локально и автоматически удаляются после обработки',
            'feature_lightning_fast': 'Молниеносно Быстро', 'feature_lightning_fast_desc': 'Поворачивайте страницы PDF мгновенно с помощью нашего оптимизированного движка обработки',
            'how_to_rotate_title': 'Как Повернуть Страницы PDF', 'how_to_rotate_subtitle': 'Простой процесс из 3 шагов для поворота PDF-документов',
            'step1_title': 'Загрузить PDF-файл', 'step1_desc': 'Выберите или перетащите PDF-файл, чтобы начать. Просматривайте каждую страницу и легко перемещайтесь по документу.',
            'step1_feature1': '• Поддержка файлов до 50MB', 'step1_feature2': '• Мгновенный предпросмотр PDF', 'step1_feature3': '• Навигация страница за страницей',
            'step2_title': 'Выбрать Угол Поворота', 'step2_desc': 'Выберите угол поворота для ваших страниц PDF. Выберите из вариантов поворота 90°, 180° или 270°.',
            'step2_feature1': '• <strong>Быстро:</strong> Предустановленные углы поворота', 'step2_feature2': '• <strong>Предпросмотр:</strong> Видеть изменения в реальном времени', 'step2_feature3': '• <strong>Гибко:</strong> Поворачивайте все или определенные страницы',
            'step3_title': 'Скачать Повернутый PDF', 'step3_desc': 'Обработайте свой PDF и загрузите повернутую версию мгновенно. Ваше исходное форматирование и качество сохраняются.',
            'step3_feature1': '• Мгновенная обработка', 'step3_feature2': '• Качество сохранено', 'step3_feature3': '• Вывод в том же формате'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_rotate': '旋转PDF', 'rotate_pdf_title': '旋转PDF',
            'rotate_pdf_description': '精确旋转PDF页面。将单个页面或整个文档旋转90°、180°、270°或自定义角度，即可立即纠正方向。',
            'quick_rotation': '快速旋转', 'live_preview': '实时预览', 'instant_rotation': '即时旋转', 'secure_100': '100%安全',
            'security_badge_rotate': '100%安全 - 文件在本地处理',
            'pdf_rotation_title': 'PDF旋转工具', 'pdf_rotation_subtitle': '精确旋转PDF页面，实时预览您的更改',
            'privacy_badge': '100%客户端处理。文件永远不会离开您的设备。', 'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'upload_text': '点击选择或拖放您的PDF文件', 'upload_pdf_subtext': 'PDF文件 • 最多10个文件 • 最大总大小：50MB',
            'pdf_preview': 'PDF预览', 'previous_file': '上一个文件', 'next_file': '下一个文件', 'file_text': '文件', 'of_text': '/',
            'previous_page': '上一页', 'next_page': '下一页', 'page_text': '页',
            'rotation_settings': '旋转设置', 'rotation_settings_desc': '选择如何旋转您的PDF页面', 'quick_rotation_title': '快速旋转',
            'rotate_90_right': '90°右转', 'rotate_180_flip': '180°翻转', 'rotate_90_left': '90°左转',
            'rotating_90_clockwise': '顺时针旋转90°', 'rotating_180': '旋转180°', 'rotating_90_counter': '逆时针旋转90°',
            'rotate_pdf_btn': '旋转PDF', 'hint_upload_files_first': '在上方上传PDF文件以启用旋转',
            'download_pdf': '下载PDF', 'process_another': '处理另一个',
            'processing_completed': '处理完成！', 'pdf_ready': '您的PDF已准备好下载', 'continue_to': '继续到...',
            'merge_pdf': '合并PDF', 'split_pdf': '拆分PDF', 'compress_pdf': '压缩PDF',
            'paste_url_placeholder': '在此粘贴Dropbox或Google Drive链接...', 'import_file': '导入文件', 'downloading': '下载中...',
            'supported_services': '支持的服务：', 'dropbox_hint': 'Dropbox：分享链接并粘贴到这里',
            'gdrive_hint': 'Google Drive：获取可共享链接（拥有链接的任何人都可以查看）', 'direct_url_hint': '直接文件URL（仅支持的格式）',
            'max_size_hint': '最大文件大小：50MB',
            'language': '语言', 'footer_description': '您的一体化PDF解决方案。免费在线编辑、转换、合并和管理PDF。', 'footer_rights': '版权所有。',
            'why_choose_title': '为什么选择PDFrow PDF Rotator？', 'why_choose_subtitle': '精确且简单的专业PDF旋转',
            'feature_quick_rotation': '快速旋转', 'feature_quick_rotation_desc': '只需单击即可将PDF页面旋转90°、180°或270°',
            'feature_live_preview': '实时预览', 'feature_live_preview_desc': '通过实时预览准确查看您的页面外观',
            'feature_secure': '100%安全', 'feature_secure_desc': '您的文件在本地处理，处理后自动删除',
            'feature_lightning_fast': '闪电般快速', 'feature_lightning_fast_desc': '使用我们优化的处理引擎即时旋转PDF页面',
            'how_to_rotate_title': '如何旋转PDF页面', 'how_to_rotate_subtitle': '旋转PDF文档的简单3步流程',
            'step1_title': '上传PDF文件', 'step1_desc': '选择或拖放您的PDF文件开始。预览每一页并轻松浏览您的文档。',
            'step1_feature1': '• 支持最大50MB文件', 'step1_feature2': '• 即时PDF预览', 'step1_feature3': '• 逐页导航',
            'step2_title': '选择旋转角度', 'step2_desc': '为您的PDF页面选择旋转角度。从90°、180°或270°旋转选项中选择。',
            'step2_feature1': '• <strong>快速：</strong>预设旋转角度', 'step2_feature2': '• <strong>预览：</strong>实时查看更改', 'step2_feature3': '• <strong>灵活：</strong>旋转全部或特定页面',
            'step3_title': '下载旋转的PDF', 'step3_desc': '处理您的PDF并立即下载旋转版本。保留原始格式和质量。',
            'step3_feature1': '• 即时处理', 'step3_feature2': '• 质量保留', 'step3_feature3': '• 相同格式输出'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_rotate': 'PDF回転', 'rotate_pdf_title': 'PDF回転',
            'rotate_pdf_description': 'PDFページを正確に回転。個別のページまたはドキュメント全体を90°、180°、270°またはカスタム角度で回転して、向きを即座に修正します。',
            'quick_rotation': '高速回転', 'live_preview': 'ライブプレビュー', 'instant_rotation': '即座の回転', 'secure_100': '100%安全',
            'security_badge_rotate': '100%安全 - ファイルはローカルで処理されます',
            'pdf_rotation_title': 'PDF回転ツール', 'pdf_rotation_subtitle': 'PDFページを正確に回転し、変更をリアルタイムでプレビュー',
            'privacy_badge': '100%クライアント側処理。ファイルがデバイスから離れることはありません。', 'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'upload_text': 'クリックして選択するか、PDFファイルをドラッグ＆ドロップ', 'upload_pdf_subtext': 'PDFファイル • 最大10ファイル • 最大合計サイズ：50MB',
            'pdf_preview': 'PDFプレビュー', 'previous_file': '前のファイル', 'next_file': '次のファイル', 'file_text': 'ファイル', 'of_text': '/',
            'previous_page': '前のページ', 'next_page': '次のページ', 'page_text': 'ページ',
            'rotation_settings': '回転設定', 'rotation_settings_desc': 'PDFページの回転方法を選択', 'quick_rotation_title': '高速回転',
            'rotate_90_right': '90°右', 'rotate_180_flip': '180°反転', 'rotate_90_left': '90°左',
            'rotating_90_clockwise': '時計回りに90°回転', 'rotating_180': '180°回転', 'rotating_90_counter': '反時計回りに90°回転',
            'rotate_pdf_btn': 'PDFを回転', 'hint_upload_files_first': '回転を有効にするには、上記にPDFファイルをアップロードしてください',
            'download_pdf': 'PDFをダウンロード', 'process_another': '別のものを処理',
            'processing_completed': '処理完了！', 'pdf_ready': 'PDFのダウンロード準備ができました', 'continue_to': '続行...',
            'merge_pdf': 'PDFを結合', 'split_pdf': 'PDFを分割', 'compress_pdf': 'PDFを圧縮',
            'paste_url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付けます...', 'import_file': 'ファイルをインポート', 'downloading': 'ダウンロード中...',
            'supported_services': 'サポートされているサービス：', 'dropbox_hint': 'Dropbox：リンクを共有してここに貼り付けます',
            'gdrive_hint': 'Google Drive：共有可能なリンクを取得（リンクを持っている人は誰でも表示できます）', 'direct_url_hint': '直接ファイルURL（サポートされている形式のみ）',
            'max_size_hint': '最大ファイルサイズ：50MB',
            'language': '言語', 'footer_description': 'オールインワンPDFソリューション。PDFを無料でオンライン編集、変換、結合、管理できます。', 'footer_rights': '全著作権所有。',
            'why_choose_title': 'なぜPDFrow PDF Rotatorを選ぶのか？', 'why_choose_subtitle': '正確で簡単なプロフェッショナルPDF回転',
            'feature_quick_rotation': '高速回転', 'feature_quick_rotation_desc': 'ワンクリックでPDFページを90°、180°、または270°回転',
            'feature_live_preview': 'ライブプレビュー', 'feature_live_preview_desc': 'リアルタイムプレビューでページの外観を正確に確認',
            'feature_secure': '100%安全', 'feature_secure_desc': 'ファイルはローカルで処理され、処理後に自動的に削除されます',
            'feature_lightning_fast': '超高速', 'feature_lightning_fast_desc': '最適化された処理エンジンでPDFページを即座に回転',
            'how_to_rotate_title': 'PDFページの回転方法', 'how_to_rotate_subtitle': 'PDF文書を回転するシンプルな3ステッププロセス',
            'step1_title': 'PDFファイルをアップロード', 'step1_desc': 'PDFファイルを選択またはドラッグ＆ドロップして開始。各ページをプレビューし、ドキュメントを簡単にナビゲート。',
            'step1_feature1': '• 最大50MBのファイルをサポート', 'step1_feature2': '• 即座のPDFプレビュー', 'step1_feature3': '• ページごとのナビゲーション',
            'step2_title': '回転角度を選択', 'step2_desc': 'PDFページの回転角度を選択。90°、180°、または270°の回転オプションから選択。',
            'step2_feature1': '• <strong>高速：</strong>プリセット回転角度', 'step2_feature2': '• <strong>プレビュー：</strong>リアルタイムで変更を確認', 'step2_feature3': '• <strong>柔軟：</strong>すべてまたは特定のページを回転',
            'step3_title': '回転したPDFをダウンロード', 'step3_desc': 'PDFを処理し、回転したバージョンを即座にダウンロード。元の形式と品質が保持されます。',
            'step3_feature1': '• 即座の処理', 'step3_feature2': '• 品質保持', 'step3_feature3': '• 同じ形式の出力'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'المميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_rotate': 'تدوير PDF', 'rotate_pdf_title': 'تدوير PDF',
            'rotate_pdf_description': 'قم بتدوير صفحات PDF بدقة. قم بتدوير صفحات فردية أو مستندات كاملة بمقدار 90° أو 180° أو 270° أو زوايا مخصصة لتصحيح الاتجاه فوراً.',
            'quick_rotation': 'تدوير سريع', 'live_preview': 'معاينة حية', 'instant_rotation': 'تدوير فوري', 'secure_100': 'آمن 100%',
            'security_badge_rotate': 'آمن 100% - تتم معالجة الملفات محلياً',
            'pdf_rotation_title': 'أداة تدوير PDF', 'pdf_rotation_subtitle': 'قم بتدوير صفحات PDF بدقة وعاين تغييراتك في الوقت الفعلي',
            'privacy_badge': '100% من جانب العميل. لا تغادر الملفات جهازك أبداً.', 'upload_from_computer': 'التحميل من الكمبيوتر', 'import_from_url': 'استيراد من URL',
            'upload_text': 'انقر للتحديد أو اسحب وأفلت ملفات PDF الخاصة بك', 'upload_pdf_subtext': 'ملفات PDF • حتى 10 ملفات • الحد الأقصى للحجم الإجمالي: 50 ميجابايت',
            'pdf_preview': 'معاينة PDF', 'previous_file': 'الملف السابق', 'next_file': 'الملف التالي', 'file_text': 'ملف', 'of_text': 'من',
            'previous_page': 'الصفحة السابقة', 'next_page': 'الصفحة التالية', 'page_text': 'صفحة',
            'rotation_settings': 'إعدادات التدوير', 'rotation_settings_desc': 'اختر كيفية تدوير صفحات PDF الخاصة بك', 'quick_rotation_title': 'تدوير سريع',
            'rotate_90_right': '90° يمين', 'rotate_180_flip': '180° قلب', 'rotate_90_left': '90° يسار',
            'rotating_90_clockwise': 'التدوير 90° في اتجاه عقارب الساعة', 'rotating_180': 'التدوير 180°', 'rotating_90_counter': 'التدوير 90° عكس عقارب الساعة',
            'rotate_pdf_btn': 'تدوير PDF', 'hint_upload_files_first': 'قم بتحميل ملف PDF أعلاه لتمكين التدوير',
            'download_pdf': 'تنزيل PDF', 'process_another': 'معالجة آخر',
            'processing_completed': 'اكتملت المعالجة!', 'pdf_ready': 'ملف PDF الخاص بك جاهز للتنزيل', 'continue_to': 'المتابعة إلى...',
            'merge_pdf': 'دمج PDF', 'split_pdf': 'تقسيم PDF', 'compress_pdf': 'ضغط PDF',
            'paste_url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...', 'import_file': 'استيراد ملف', 'downloading': 'جاري التنزيل...',
            'supported_services': 'الخدمات المدعومة:', 'dropbox_hint': 'Dropbox: شارك الرابط والصقه هنا',
            'gdrive_hint': 'Google Drive: احصل على رابط قابل للمشاركة (يمكن لأي شخص لديه الرابط العرض)', 'direct_url_hint': 'عناوين URL المباشرة للملفات (التنسيق المدعوم فقط)',
            'max_size_hint': 'الحد الأقصى لحجم الملف: 50 ميجابايت',
            'language': 'اللغة', 'footer_description': 'حل PDF الشامل الخاص بك. قم بتحرير وتحويل ودمج وإدارة ملفات PDF عبر الإنترنت مجاناً.', 'footer_rights': 'جميع الحقوق محفوظة.',
            'why_choose_title': 'لماذا تختار PDFrow PDF Rotator؟', 'why_choose_subtitle': 'تدوير PDF احترافي بدقة وسهولة',
            'feature_quick_rotation': 'تدوير سريع', 'feature_quick_rotation_desc': 'قم بتدوير صفحات PDF بمقدار 90° أو 180° أو 270° بنقرة واحدة',
            'feature_live_preview': 'معاينة حية', 'feature_live_preview_desc': 'شاهد بالضبط كيف ستبدو صفحاتك مع المعاينة في الوقت الفعلي',
            'feature_secure': 'آمن 100%', 'feature_secure_desc': 'تتم معالجة ملفاتك محلياً وحذفها تلقائياً بعد المعالجة',
            'feature_lightning_fast': 'سريع كالبرق', 'feature_lightning_fast_desc': 'قم بتدوير صفحات PDF على الفور باستخدام محرك المعالجة المُحسَّن لدينا',
            'how_to_rotate_title': 'كيفية تدوير صفحات PDF', 'how_to_rotate_subtitle': 'عملية بسيطة من 3 خطوات لتدوير مستندات PDF',
            'step1_title': 'تحميل ملف PDF', 'step1_desc': 'حدد أو اسحب وأفلت ملف PDF الخاص بك للبدء. عاين كل صفحة وتنقل عبر مستندك بسهولة.',
            'step1_feature1': '• يدعم الملفات حتى 50 ميجابايت', 'step1_feature2': '• معاينة PDF فورية', 'step1_feature3': '• التنقل صفحة بصفحة',
            'step2_title': 'اختر زاوية التدوير', 'step2_desc': 'حدد زاوية التدوير لصفحات PDF الخاصة بك. اختر من بين خيارات التدوير 90° أو 180° أو 270°.',
            'step2_feature1': '• <strong>سريع:</strong> زوايا تدوير مسبقة الضبط', 'step2_feature2': '• <strong>معاينة:</strong> رؤية التغييرات في الوقت الفعلي', 'step2_feature3': '• <strong>مرن:</strong> تدوير كل الصفحات أو صفحات محددة',
            'step3_title': 'تنزيل PDF المُدار', 'step3_desc': 'عالج ملف PDF الخاص بك وقم بتنزيل النسخة المُدارة على الفور. يتم الحفاظ على التنسيق والجودة الأصلية.',
            'step3_feature1': '• معالجة فورية', 'step3_feature2': '• الجودة محفوظة', 'step3_feature3': '• إخراج بنفس التنسيق'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'FAQ',
            'btn_login': 'लॉग इन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफ़ाइल', 'btn_logout': 'लॉग आउट',
            'breadcrumb_home': 'होम', 'breadcrumb_rotate': 'PDF घुमाएं', 'rotate_pdf_title': 'PDF घुमाएं',
            'rotate_pdf_description': 'सटीकता से PDF पृष्ठों को घुमाएं। व्यक्तिगत पृष्ठों या पूरे दस्तावेज़ों को 90°, 180°, 270° या कस्टम कोणों से घुमाएं ताकि तुरंत अभिविन्यास सही हो सके।',
            'quick_rotation': 'त्वरित घुमाव', 'live_preview': 'लाइव पूर्वावलोकन', 'instant_rotation': 'तत्काल घुमाव', 'secure_100': '100% सुरक्षित',
            'security_badge_rotate': '100% सुरक्षित - फ़ाइलें स्थानीय रूप से संसाधित',
            'pdf_rotation_title': 'PDF घुमाव टूल', 'pdf_rotation_subtitle': 'सटीकता से PDF पृष्ठों को घुमाएं और अपने परिवर्तनों को वास्तविक समय में पूर्वावलोकन करें',
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी आपके डिवाइस को नहीं छोड़तीं।', 'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से आयात करें',
            'upload_text': 'अपनी PDF फ़ाइलों का चयन करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें', 'upload_pdf_subtext': 'PDF फ़ाइलें • 10 फ़ाइलों तक • अधिकतम कुल आकार: 50MB',
            'pdf_preview': 'PDF पूर्वावलोकन', 'previous_file': 'पिछली फ़ाइल', 'next_file': 'अगली फ़ाइल', 'file_text': 'फ़ाइल', 'of_text': 'में से',
            'previous_page': 'पिछला पृष्ठ', 'next_page': 'अगला पृष्ठ', 'page_text': 'पृष्ठ',
            'rotation_settings': 'घुमाव सेटिंग्स', 'rotation_settings_desc': 'अपने PDF पृष्ठों को कैसे घुमाना है चुनें', 'quick_rotation_title': 'त्वरित घुमाव',
            'rotate_90_right': '90° दाएं', 'rotate_180_flip': '180° पलटें', 'rotate_90_left': '90° बाएं',
            'rotating_90_clockwise': '90° दक्षिणावर्त घुमाना', 'rotating_180': '180° घुमाना', 'rotating_90_counter': '90° वामावर्त घुमाना',
            'rotate_pdf_btn': 'PDF घुमाएं', 'hint_upload_files_first': 'घुमाव सक्षम करने के लिए ऊपर एक PDF फ़ाइल अपलोड करें',
            'download_pdf': 'PDF डाउनलोड करें', 'process_another': 'दूसरा प्रोसेस करें',
            'processing_completed': 'प्रसंस्करण पूर्ण!', 'pdf_ready': 'आपकी PDF डाउनलोड के लिए तैयार है', 'continue_to': 'जारी रखें...',
            'merge_pdf': 'PDF मर्ज करें', 'split_pdf': 'PDF विभाजित करें', 'compress_pdf': 'PDF संपीड़ित करें',
            'paste_url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...', 'import_file': 'फ़ाइल आयात करें', 'downloading': 'डाउनलोड हो रहा है...',
            'supported_services': 'समर्थित सेवाएं:', 'dropbox_hint': 'Dropbox: लिंक शेयर करें और यहां पेस्ट करें',
            'gdrive_hint': 'Google Drive: शेयर करने योग्य लिंक प्राप्त करें (लिंक वाला कोई भी देख सकता है)', 'direct_url_hint': 'सीधे फ़ाइल URLs (केवल समर्थित प्रारूप)',
            'max_size_hint': 'अधिकतम फ़ाइल आकार: 50MB',
            'language': 'भाषा', 'footer_description': 'आपका ऑल-इन-वन PDF समाधान। PDF को मुफ्त में ऑनलाइन संपादित, परिवर्तित, मर्ज और प्रबंधित करें।', 'footer_rights': 'सर्वाधिकार सुरक्षित।',
            'why_choose_title': 'PDFrow PDF Rotator को क्यों चुनें?', 'why_choose_subtitle': 'सटीकता और आसानी से पेशेवर PDF घुमाव',
            'feature_quick_rotation': 'त्वरित घुमाव', 'feature_quick_rotation_desc': 'एक क्लिक से PDF पृष्ठों को 90°, 180° या 270° घुमाएं',
            'feature_live_preview': 'लाइव पूर्वावलोकन', 'feature_live_preview_desc': 'रीयल-टाइम पूर्वावलोकन के साथ देखें कि आपके पृष्ठ कैसे दिखेंगे',
            'feature_secure': '100% सुरक्षित', 'feature_secure_desc': 'आपकी फ़ाइलें स्थानीय रूप से संसाधित होती हैं और प्रसंस्करण के बाद स्वचालित रूप से हटा दी जाती हैं',
            'feature_lightning_fast': 'बिजली की तेज़', 'feature_lightning_fast_desc': 'हमारे अनुकूलित प्रोसेसिंग इंजन के साथ तुरंत PDF पृष्ठों को घुमाएं',
            'how_to_rotate_title': 'PDF पृष्ठों को कैसे घुमाएं', 'how_to_rotate_subtitle': 'PDF दस्तावेज़ों को घुमाने के लिए सरल 3-चरणीय प्रक्रिया',
            'step1_title': 'PDF फ़ाइल अपलोड करें', 'step1_desc': 'शुरू करने के लिए अपनी PDF फ़ाइल का चयन करें या ड्रैग और ड्रॉप करें। प्रत्येक पृष्ठ का पूर्वावलोकन करें और अपने दस्तावेज़ में आसानी से नेविगेट करें।',
            'step1_feature1': '• 50MB तक की फ़ाइलों का समर्थन करता है', 'step1_feature2': '• तत्काल PDF पूर्वावलोकन', 'step1_feature3': '• पृष्ठ-दर-पृष्ठ नेविगेशन',
            'step2_title': 'घुमाव कोण चुनें', 'step2_desc': 'अपने PDF पृष्ठों के लिए घुमाव कोण चुनें। 90°, 180° या 270° घुमाव विकल्पों में से चुनें।',
            'step2_feature1': '• <strong>त्वरित:</strong> पूर्व निर्धारित घुमाव कोण', 'step2_feature2': '• <strong>पूर्वावलोकन:</strong> वास्तविक समय में परिवर्तन देखें', 'step2_feature3': '• <strong>लचीला:</strong> सभी या विशिष्ट पृष्ठों को घुमाएं',
            'step3_title': 'घुमाई गई PDF डाउनलोड करें', 'step3_desc': 'अपनी PDF को प्रोसेस करें और घुमाए गए संस्करण को तुरंत डाउनलोड करें। आपका मूल स्वरूपण और गुणवत्ता संरक्षित है।',
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
