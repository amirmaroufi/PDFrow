// Translation system for add-page-numbers.html
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
            'breadcrumb_current': 'Add Page Numbers',
            'page_title': 'Add Page Numbers',
            'page_description': 'Professional page numbering for your PDF documents with custom positioning and styling options. Perfect for reports, documents, and presentations.',
            'feature_custom_position': 'Custom Position',
            'feature_multiple_formats': 'Multiple Formats',
            'feature_preview_pages': 'Preview Pages',
            'feature_secure': '100% Secure',
            'security_badge': '100% Secure - Files processed locally',

            // Tool Section
            'section_title': 'PDF Page Numbers Tool',
            'section_subtitle': 'Add professional page numbering with custom positioning and styling',
            'privacy_badge': '100% client‑side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',
            'url_placeholder': 'Paste Dropbox or Google Drive link here...',
            'import_file_btn': 'Import File',
            'download_status': 'Downloading...',
            'supported_services': 'Supported services:',
            'service_dropbox': 'Dropbox: Share link and paste here',
            'service_gdrive': 'Google Drive: Get shareable link (Anyone with the link can view)',
            'service_direct': 'Direct PDF URLs',
            'max_file_size': 'Maximum file size: 50MB',
            'upload_text': 'Click to select or drag and drop your PDF files',
            'upload_pdf_subtext': 'PDF files • Up to 10 files • Max 50MB total batch size',

            // Page Number Settings
            'settings_title': 'Page Number Settings',
            'label_position': 'Position:',
            'pos_bottom_center': 'Bottom Center',
            'pos_bottom_left': 'Bottom Left',
            'pos_bottom_right': 'Bottom Right',
            'pos_top_center': 'Top Center',
            'pos_top_left': 'Top Left',
            'pos_top_right': 'Top Right',
            'label_format': 'Format:',
            'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...',
            'format_III': 'I, II, III...',
            'format_abc': 'a, b, c...',
            'format_ABC': 'A, B, C...',
            'label_color': 'Text Color:',
            'color_black': 'Black',
            'color_gray': 'Gray',
            'color_blue': 'Blue',
            'color_red': 'Red',
            'color_green': 'Green',

            // File Navigation
            'previous_file': 'Previous File',
            'next_file': 'Next File',
            'file_count': 'File',
            'of': 'of',

            // Preview Section
            'preview_title': 'Preview with Page Numbers',
            'btn_previous': '← Previous',
            'btn_next': 'Next →',
            'page_info': 'Page',

            // Convert Section
            'add_page_numbers_btn': 'Add Page Numbers',
            'hint_upload_files_first': 'Upload a PDF file above to enable page numbering',

            // Success State
            'success_title': 'Page numbers added successfully!',
            'success_description': 'Your PDF with page numbers is ready for download',
            'download_pdf': 'Download PDF',
            'process_another': 'Process Another',
            'continue_title': 'Continue editing your PDF:',

            // Continue Tools
            'tool_merge': 'Merge PDF',
            'tool_split': 'Split PDF',
            'tool_compress': 'Compress',
            'tool_crop': 'Crop PDF',
            'tool_rotate': 'Rotate PDF',
            'tool_unlock': 'Unlock PDF',

            // Why Choose Section
            'why_choose_title': 'Why Choose PDFrow Page Numbers Tool?',
            'why_choose_subtitle': 'Professional, fast, and secure PDF page numbering',
            'feature_lightning_fast_title': 'Lightning Fast',
            'feature_lightning_fast_desc': 'Add page numbers to PDF files in seconds with our optimized processing engine',
            'feature_secure_title': '100% Secure',
            'feature_secure_desc': 'Your files are processed locally and automatically deleted after processing',
            'feature_custom_styling_title': 'Custom Styling',
            'feature_custom_styling_desc': 'Choose from multiple positioning options and number formats for professional results',
            'feature_no_software_title': 'No Software Needed',
            'feature_no_software_desc': 'Works directly in your browser - no downloads or installations required',

            // How It Works Section
            'how_to_title': 'How to Add Page Numbers to PDF',
            'how_to_subtitle': 'Simple 3-step process to add professional page numbering',
            'step1_title': 'Upload PDF',
            'step1_desc': 'Select or drag and drop your PDF file to get started',
            'step2_title': 'Choose Style',
            'step2_desc': 'Select position, format, and styling options for your page numbers',
            'step3_title': 'Download',
            'step3_desc': 'Get your PDF with professional page numbers instantly',

            // Footer
            'language': 'Language',
            'footer_description': 'Your all-in-one PDF solution. Edit, convert, merge, and manage PDFs online for free.',
            'footer_tools': 'Tools',
            'footer_company': 'Company',
            'footer_resources': 'Resources',
            'footer_rights': 'All rights reserved.'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Características', 'nav_how_it_works': 'Cómo Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesión', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesión',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Agregar Números de Página', 'page_title': 'Agregar Números de Página',
            'page_description': 'Numeración de páginas profesional para sus documentos PDF con opciones personalizadas de posicionamiento y estilo. Perfecto para informes, documentos y presentaciones.',
            'feature_custom_position': 'Posición Personalizada', 'feature_multiple_formats': 'Múltiples Formatos', 'feature_preview_pages': 'Vista Previa', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Los archivos se procesan localmente',
            'section_title': 'Herramienta de Números de Página PDF', 'section_subtitle': 'Agregue numeración de páginas profesional con posicionamiento y estilo personalizados',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.', 'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aquí...', 'import_file_btn': 'Importar Archivo', 'download_status': 'Descargando...',
            'supported_services': 'Servicios compatibles:', 'service_dropbox': 'Dropbox: Comparta el enlace y péguelo aquí', 'service_gdrive': 'Google Drive: Obtenga un enlace compartible (Cualquiera con el enlace puede ver)',
            'service_direct': 'URLs directas de PDF', 'max_file_size': 'Tamaño máximo de archivo: 50MB',
            'upload_text': 'Haga clic para seleccionar o arrastre y suelte sus archivos PDF', 'upload_pdf_subtext': 'Archivos PDF • Hasta 10 archivos • Tamaño máximo total del lote: 50MB',
            'settings_title': 'Configuración de Números de Página', 'label_position': 'Posición:', 'pos_bottom_center': 'Centro Inferior', 'pos_bottom_left': 'Inferior Izquierda', 'pos_bottom_right': 'Inferior Derecha',
            'pos_top_center': 'Centro Superior', 'pos_top_left': 'Superior Izquierda', 'pos_top_right': 'Superior Derecha', 'label_format': 'Formato:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'Color del Texto:',
            'color_black': 'Negro', 'color_gray': 'Gris', 'color_blue': 'Azul', 'color_red': 'Rojo', 'color_green': 'Verde',
            'previous_file': 'Archivo Anterior', 'next_file': 'Archivo Siguiente', 'file_count': 'Archivo', 'of': 'de',
            'preview_title': 'Vista Previa con Números de Página', 'btn_previous': '← Anterior', 'btn_next': 'Siguiente →', 'page_info': 'Página',
            'add_page_numbers_btn': 'Agregar Números de Página', 'hint_upload_files_first': 'Suba un archivo PDF arriba para habilitar la numeración de páginas',
            'success_title': '¡Números de página agregados con éxito!', 'success_description': 'Su PDF con números de página está listo para descargar',
            'download_pdf': 'Descargar PDF', 'process_another': 'Procesar Otro', 'continue_title': 'Continuar editando su PDF:',
            'tool_merge': 'Combinar PDF', 'tool_split': 'Dividir PDF', 'tool_compress': 'Comprimir', 'tool_crop': 'Recortar PDF', 'tool_rotate': 'Rotar PDF', 'tool_unlock': 'Desbloquear PDF',
            'why_choose_title': '¿Por qué elegir la herramienta de números de página PDFrow?', 'why_choose_subtitle': 'Numeración de páginas PDF profesional, rápida y segura',
            'feature_lightning_fast_title': 'Ultra Rápido', 'feature_lightning_fast_desc': 'Agregue números de página a archivos PDF en segundos con nuestro motor de procesamiento optimizado',
            'feature_secure_title': '100% Seguro', 'feature_secure_desc': 'Sus archivos se procesan localmente y se eliminan automáticamente después del procesamiento',
            'feature_custom_styling_title': 'Estilo Personalizado', 'feature_custom_styling_desc': 'Elija entre múltiples opciones de posicionamiento y formatos de números para resultados profesionales',
            'feature_no_software_title': 'No Se Necesita Software', 'feature_no_software_desc': 'Funciona directamente en su navegador: no se requieren descargas ni instalaciones',
            'how_to_title': 'Cómo Agregar Números de Página a PDF', 'how_to_subtitle': 'Proceso simple de 3 pasos para agregar numeración de páginas profesional',
            'step1_title': 'Subir PDF', 'step1_desc': 'Seleccione o arrastre y suelte su archivo PDF para comenzar',
            'step2_title': 'Elegir Estilo', 'step2_desc': 'Seleccione posición, formato y opciones de estilo para sus números de página',
            'step3_title': 'Descargar', 'step3_desc': 'Obtenga su PDF con números de página profesionales al instante',
            'language': 'Idioma', 'footer_description': 'Su solución PDF todo en uno. Edite, convierta, combine y administre PDFs en línea gratis.', 'footer_tools': 'Herramientas', 'footer_company': 'Empresa', 'footer_resources': 'Recursos', 'footer_rights': 'Todos los derechos reservados.'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Déconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_current': 'Ajouter des Numéros de Page', 'page_title': 'Ajouter des Numéros de Page',
            'page_description': 'Numérotation de pages professionnelle pour vos documents PDF avec des options de positionnement et de style personnalisées. Parfait pour les rapports, documents et présentations.',
            'feature_custom_position': 'Position Personnalisée', 'feature_multiple_formats': 'Formats Multiples', 'feature_preview_pages': 'Aperçu', 'feature_secure': '100% Sécurisé',
            'security_badge': '100% Sécurisé - Les fichiers sont traités localement',
            'section_title': 'Outil de Numérotation de Pages PDF', 'section_subtitle': 'Ajoutez une numérotation de pages professionnelle avec positionnement et style personnalisés',
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.', 'upload_from_computer': 'Télécharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...', 'import_file_btn': 'Importer le Fichier', 'download_status': 'Téléchargement...',
            'supported_services': 'Services pris en charge:', 'service_dropbox': 'Dropbox: Partagez le lien et collez-le ici', 'service_gdrive': 'Google Drive: Obtenez un lien partageable (Toute personne disposant du lien peut voir)',
            'service_direct': 'URLs PDF directes', 'max_file_size': 'Taille maximale du fichier: 50MB',
            'upload_text': 'Cliquez pour sélectionner ou glissez-déposez vos fichiers PDF', 'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 10 fichiers • Taille maximale totale du lot: 50MB',
            'settings_title': 'Paramètres de Numéros de Page', 'label_position': 'Position:', 'pos_bottom_center': 'Centre Bas', 'pos_bottom_left': 'Bas Gauche', 'pos_bottom_right': 'Bas Droit',
            'pos_top_center': 'Centre Haut', 'pos_top_left': 'Haut Gauche', 'pos_top_right': 'Haut Droit', 'label_format': 'Format:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'Couleur du Texte:',
            'color_black': 'Noir', 'color_gray': 'Gris', 'color_blue': 'Bleu', 'color_red': 'Rouge', 'color_green': 'Vert',
            'previous_file': 'Fichier Précédent', 'next_file': 'Fichier Suivant', 'file_count': 'Fichier', 'of': 'de',
            'preview_title': 'Aperçu avec Numéros de Page', 'btn_previous': '← Précédent', 'btn_next': 'Suivant →', 'page_info': 'Page',
            'add_page_numbers_btn': 'Ajouter des Numéros de Page', 'hint_upload_files_first': 'Téléchargez un fichier PDF ci-dessus pour activer la numérotation des pages',
            'success_title': 'Numéros de page ajoutés avec succès!', 'success_description': 'Votre PDF avec numéros de page est prêt au téléchargement',
            'download_pdf': 'Télécharger PDF', 'process_another': 'Traiter un Autre', 'continue_title': 'Continuer à modifier votre PDF:',
            'tool_merge': 'Fusionner PDF', 'tool_split': 'Diviser PDF', 'tool_compress': 'Compresser', 'tool_crop': 'Rogner PDF', 'tool_rotate': 'Pivoter PDF', 'tool_unlock': 'Déverrouiller PDF',
            'why_choose_title': 'Pourquoi choisir l\'outil de numérotation de pages PDFrow?', 'why_choose_subtitle': 'Numérotation de pages PDF professionnelle, rapide et sécurisée',
            'feature_lightning_fast_title': 'Ultra Rapide', 'feature_lightning_fast_desc': 'Ajoutez des numéros de page aux fichiers PDF en quelques secondes avec notre moteur de traitement optimisé',
            'feature_secure_title': '100% Sécurisé', 'feature_secure_desc': 'Vos fichiers sont traités localement et automatiquement supprimés après le traitement',
            'feature_custom_styling_title': 'Style Personnalisé', 'feature_custom_styling_desc': 'Choisissez parmi plusieurs options de positionnement et formats de numéros pour des résultats professionnels',
            'feature_no_software_title': 'Aucun Logiciel Requis', 'feature_no_software_desc': 'Fonctionne directement dans votre navigateur - aucun téléchargement ni installation requis',
            'how_to_title': 'Comment Ajouter des Numéros de Page au PDF', 'how_to_subtitle': 'Processus simple en 3 étapes pour ajouter une numérotation de pages professionnelle',
            'step1_title': 'Télécharger PDF', 'step1_desc': 'Sélectionnez ou glissez-déposez votre fichier PDF pour commencer',
            'step2_title': 'Choisir le Style', 'step2_desc': 'Sélectionnez la position, le format et les options de style pour vos numéros de page',
            'step3_title': 'Télécharger', 'step3_desc': 'Obtenez votre PDF avec des numéros de page professionnels instantanément',
            'language': 'Langue', 'footer_description': 'Votre solution PDF tout-en-un. Modifiez, convertissez, fusionnez et gérez des PDFs en ligne gratuitement.', 'footer_tools': 'Outils', 'footer_company': 'Société', 'footer_resources': 'Ressources', 'footer_rights': 'Tous droits réservés.'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_current': 'Seitenzahlen Hinzufügen', 'page_title': 'Seitenzahlen Hinzufügen',
            'page_description': 'Professionelle Seitennummerierung für Ihre PDF-Dokumente mit benutzerdefinierten Positionierungs- und Stiloptionen. Perfekt für Berichte, Dokumente und Präsentationen.',
            'feature_custom_position': 'Benutzerdefinierte Position', 'feature_multiple_formats': 'Mehrere Formate', 'feature_preview_pages': 'Vorschau', 'feature_secure': '100% Sicher',
            'security_badge': '100% Sicher - Dateien werden lokal verarbeitet',
            'section_title': 'PDF-Seitenzahlen-Tool', 'section_subtitle': 'Fügen Sie professionelle Seitennummerierung mit benutzerdefinierter Positionierung und Stil hinzu',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.', 'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'url_placeholder': 'Dropbox- oder Google Drive-Link hier einfügen...', 'import_file_btn': 'Datei Importieren', 'download_status': 'Herunterladen...',
            'supported_services': 'Unterstützte Dienste:', 'service_dropbox': 'Dropbox: Link teilen und hier einfügen', 'service_gdrive': 'Google Drive: Teilbaren Link abrufen (Jeder mit dem Link kann ansehen)',
            'service_direct': 'Direkte PDF-URLs', 'max_file_size': 'Maximale Dateigröße: 50MB',
            'upload_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Dateien hierher', 'upload_pdf_subtext': 'PDF-Dateien • Bis zu 10 Dateien • Maximale Gesamtgröße: 50MB',
            'settings_title': 'Seitenzahl-Einstellungen', 'label_position': 'Position:', 'pos_bottom_center': 'Unten Mitte', 'pos_bottom_left': 'Unten Links', 'pos_bottom_right': 'Unten Rechts',
            'pos_top_center': 'Oben Mitte', 'pos_top_left': 'Oben Links', 'pos_top_right': 'Oben Rechts', 'label_format': 'Format:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'Textfarbe:',
            'color_black': 'Schwarz', 'color_gray': 'Grau', 'color_blue': 'Blau', 'color_red': 'Rot', 'color_green': 'Grün',
            'previous_file': 'Vorherige Datei', 'next_file': 'Nächste Datei', 'file_count': 'Datei', 'of': 'von',
            'preview_title': 'Vorschau mit Seitenzahlen', 'btn_previous': '← Zurück', 'btn_next': 'Weiter →', 'page_info': 'Seite',
            'add_page_numbers_btn': 'Seitenzahlen Hinzufügen', 'hint_upload_files_first': 'Laden Sie oben eine PDF-Datei hoch, um die Seitennummerierung zu aktivieren',
            'success_title': 'Seitenzahlen erfolgreich hinzugefügt!', 'success_description': 'Ihr PDF mit Seitenzahlen ist zum Download bereit',
            'download_pdf': 'PDF Herunterladen', 'process_another': 'Weiteres Verarbeiten', 'continue_title': 'Bearbeiten Sie Ihr PDF weiter:',
            'tool_merge': 'PDF Zusammenführen', 'tool_split': 'PDF Teilen', 'tool_compress': 'Komprimieren', 'tool_crop': 'PDF Zuschneiden', 'tool_rotate': 'PDF Drehen', 'tool_unlock': 'PDF Entsperren',
            'why_choose_title': 'Warum PDFrow Seitenzahlen-Tool wählen?', 'why_choose_subtitle': 'Professionelle, schnelle und sichere PDF-Seitennummerierung',
            'feature_lightning_fast_title': 'Blitzschnell', 'feature_lightning_fast_desc': 'Fügen Sie PDF-Dateien in Sekunden Seitenzahlen hinzu mit unserer optimierten Verarbeitungs-Engine',
            'feature_secure_title': '100% Sicher', 'feature_secure_desc': 'Ihre Dateien werden lokal verarbeitet und nach der Verarbeitung automatisch gelöscht',
            'feature_custom_styling_title': 'Benutzerdefiniertes Styling', 'feature_custom_styling_desc': 'Wählen Sie aus mehreren Positionierungsoptionen und Zahlenformaten für professionelle Ergebnisse',
            'feature_no_software_title': 'Keine Software Erforderlich', 'feature_no_software_desc': 'Funktioniert direkt in Ihrem Browser - keine Downloads oder Installationen erforderlich',
            'how_to_title': 'So Fügen Sie Seitenzahlen zu PDF Hinzu', 'how_to_subtitle': 'Einfacher 3-Schritte-Prozess zum Hinzufügen professioneller Seitennummerierung',
            'step1_title': 'PDF Hochladen', 'step1_desc': 'Wählen Sie Ihre PDF-Datei aus oder ziehen Sie sie per Drag & Drop, um zu beginnen',
            'step2_title': 'Stil Wählen', 'step2_desc': 'Wählen Sie Position, Format und Stiloptionen für Ihre Seitenzahlen',
            'step3_title': 'Herunterladen', 'step3_desc': 'Erhalten Sie Ihr PDF mit professionellen Seitenzahlen sofort',
            'language': 'Sprache', 'footer_description': 'Ihre All-in-One-PDF-Lösung. Bearbeiten, konvertieren, zusammenführen und verwalten Sie PDFs online kostenlos.', 'footer_tools': 'Werkzeuge', 'footer_company': 'Unternehmen', 'footer_resources': 'Ressourcen', 'footer_rights': 'Alle Rechte vorbehalten.'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_current': 'Aggiungi Numeri di Pagina', 'page_title': 'Aggiungi Numeri di Pagina',
            'page_description': 'Numerazione delle pagine professionale per i tuoi documenti PDF con opzioni di posizionamento e stile personalizzate. Perfetto per report, documenti e presentazioni.',
            'feature_custom_position': 'Posizione Personalizzata', 'feature_multiple_formats': 'Formati Multipli', 'feature_preview_pages': 'Anteprima', 'feature_secure': '100% Sicuro',
            'security_badge': '100% Sicuro - File elaborati localmente',
            'section_title': 'Strumento Numeri di Pagina PDF', 'section_subtitle': 'Aggiungi numerazione delle pagine professionale con posizionamento e stile personalizzati',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.', 'upload_from_computer': 'Carica dal Computer', 'import_from_url': 'Importa da URL',
            'url_placeholder': 'Incolla il link di Dropbox o Google Drive qui...', 'import_file_btn': 'Importa File', 'download_status': 'Download in corso...',
            'supported_services': 'Servizi supportati:', 'service_dropbox': 'Dropbox: Condividi il link e incollalo qui', 'service_gdrive': 'Google Drive: Ottieni link condivisibile (Chiunque abbia il link può vedere)',
            'service_direct': 'URL PDF diretti', 'max_file_size': 'Dimensione massima del file: 50MB',
            'upload_text': 'Clicca per selezionare o trascina i tuoi file PDF', 'upload_pdf_subtext': 'File PDF • Fino a 10 file • Dimensione totale massima: 50MB',
            'settings_title': 'Impostazioni Numeri di Pagina', 'label_position': 'Posizione:', 'pos_bottom_center': 'Centro Inferiore', 'pos_bottom_left': 'Inferiore Sinistra', 'pos_bottom_right': 'Inferiore Destra',
            'pos_top_center': 'Centro Superiore', 'pos_top_left': 'Superiore Sinistra', 'pos_top_right': 'Superiore Destra', 'label_format': 'Formato:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'Colore Testo:',
            'color_black': 'Nero', 'color_gray': 'Grigio', 'color_blue': 'Blu', 'color_red': 'Rosso', 'color_green': 'Verde',
            'previous_file': 'File Precedente', 'next_file': 'File Successivo', 'file_count': 'File', 'of': 'di',
            'preview_title': 'Anteprima con Numeri di Pagina', 'btn_previous': '← Precedente', 'btn_next': 'Successivo →', 'page_info': 'Pagina',
            'add_page_numbers_btn': 'Aggiungi Numeri di Pagina', 'hint_upload_files_first': 'Carica un file PDF sopra per abilitare la numerazione delle pagine',
            'success_title': 'Numeri di pagina aggiunti con successo!', 'success_description': 'Il tuo PDF con numeri di pagina è pronto per il download',
            'download_pdf': 'Scarica PDF', 'process_another': 'Elabora un Altro', 'continue_title': 'Continua a modificare il tuo PDF:',
            'tool_merge': 'Unisci PDF', 'tool_split': 'Dividi PDF', 'tool_compress': 'Comprimi', 'tool_crop': 'Ritaglia PDF', 'tool_rotate': 'Ruota PDF', 'tool_unlock': 'Sblocca PDF',
            'why_choose_title': 'Perché Scegliere lo Strumento Numeri di Pagina PDFrow?', 'why_choose_subtitle': 'Numerazione delle pagine PDF professionale, veloce e sicura',
            'feature_lightning_fast_title': 'Fulmineo', 'feature_lightning_fast_desc': 'Aggiungi numeri di pagina ai file PDF in pochi secondi con il nostro motore di elaborazione ottimizzato',
            'feature_secure_title': '100% Sicuro', 'feature_secure_desc': 'I tuoi file vengono elaborati localmente e cancellati automaticamente dopo l\'elaborazione',
            'feature_custom_styling_title': 'Stile Personalizzato', 'feature_custom_styling_desc': 'Scegli tra più opzioni di posizionamento e formati numerici per risultati professionali',
            'feature_no_software_title': 'Nessun Software Necessario', 'feature_no_software_desc': 'Funziona direttamente nel tuo browser - nessun download o installazione richiesta',
            'how_to_title': 'Come Aggiungere Numeri di Pagina al PDF', 'how_to_subtitle': 'Semplice processo in 3 passaggi per aggiungere numerazione professionale delle pagine',
            'step1_title': 'Carica PDF', 'step1_desc': 'Seleziona o trascina il tuo file PDF per iniziare',
            'step2_title': 'Scegli Stile', 'step2_desc': 'Seleziona posizione, formato e opzioni di stile per i tuoi numeri di pagina',
            'step3_title': 'Scarica', 'step3_desc': 'Ottieni il tuo PDF con numeri di pagina professionali istantaneamente',
            'language': 'Lingua', 'footer_description': 'La tua soluzione PDF all-in-one. Modifica, converti, unisci e gestisci PDF online gratuitamente.', 'footer_tools': 'Strumenti', 'footer_company': 'Azienda', 'footer_resources': 'Risorse', 'footer_rights': 'Tutti i diritti riservati.'
        },
        'tr': {
            'nav_tools': 'Araçlar', 'nav_features': 'Özellikler', 'nav_how_it_works': 'Nasıl Çalışır', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giriş Yap', 'btn_signup': 'Kayıt Ol', 'btn_profile': 'Profil', 'btn_logout': 'Çıkış Yap',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_current': 'Sayfa Numaraları Ekle', 'page_title': 'Sayfa Numaraları Ekle',
            'page_description': 'Özel konumlandırma ve stil seçenekleriyle PDF belgeleriniz için profesyonel sayfa numaralandırma. Raporlar, belgeler ve sunumlar için mükemmel.',
            'feature_custom_position': 'Özel Konum', 'feature_multiple_formats': 'Çoklu Formatlar', 'feature_preview_pages': 'Önizleme', 'feature_secure': '%100 Güvenli',
            'security_badge': '%100 Güvenli - Dosyalar yerel olarak işlenir',
            'section_title': 'PDF Sayfa Numaraları Aracı', 'section_subtitle': 'Özel konumlandırma ve stil ile profesyonel sayfa numaralandırma ekleyin',
            'privacy_badge': '%100 istemci tarafı. Dosyalar asla cihazınızdan ayrılmaz.', 'upload_from_computer': 'Bilgisayardan Yükle', 'import_from_url': 'URL\'den İçe Aktar',
            'url_placeholder': 'Dropbox veya Google Drive bağlantısını buraya yapıştırın...', 'import_file_btn': 'Dosyayı İçe Aktar', 'download_status': 'İndiriliyor...',
            'supported_services': 'Desteklenen servisler:', 'service_dropbox': 'Dropbox: Bağlantıyı paylaşın ve buraya yapıştırın', 'service_gdrive': 'Google Drive: Paylaşılabilir bağlantı alın (Bağlantıya sahip herkes görebilir)',
            'service_direct': 'Doğrudan PDF URL\'leri', 'max_file_size': 'Maksimum dosya boyutu: 50MB',
            'upload_text': 'PDF dosyalarınızı seçmek için tıklayın veya sürükleyip bırakın', 'upload_pdf_subtext': 'PDF dosyaları • 10 dosyaya kadar • Maksimum toplam: 50MB',
            'settings_title': 'Sayfa Numarası Ayarları', 'label_position': 'Konum:', 'pos_bottom_center': 'Alt Orta', 'pos_bottom_left': 'Alt Sol', 'pos_bottom_right': 'Alt Sağ',
            'pos_top_center': 'Üst Orta', 'pos_top_left': 'Üst Sol', 'pos_top_right': 'Üst Sağ', 'label_format': 'Format:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'Metin Rengi:',
            'color_black': 'Siyah', 'color_gray': 'Gri', 'color_blue': 'Mavi', 'color_red': 'Kırmızı', 'color_green': 'Yeşil',
            'previous_file': 'Önceki Dosya', 'next_file': 'Sonraki Dosya', 'file_count': 'Dosya', 'of': 'of',
            'preview_title': 'Sayfa Numaralarıyla Önizleme', 'btn_previous': '← Önceki', 'btn_next': 'Sonraki →', 'page_info': 'Sayfa',
            'add_page_numbers_btn': 'Sayfa Numaraları Ekle', 'hint_upload_files_first': 'Sayfa numaralandırmayı etkinleştirmek için yukarıya bir PDF dosyası yükleyin',
            'success_title': 'Sayfa numaraları başarıyla eklendi!', 'success_description': 'Sayfa numaralı PDF\'niz indirmeye hazır',
            'download_pdf': 'PDF İndir', 'process_another': 'Başka Birini İşle', 'continue_title': 'PDF\'nizi düzenlemeye devam edin:',
            'tool_merge': 'PDF Birleştir', 'tool_split': 'PDF Böl', 'tool_compress': 'Sıkıştır', 'tool_crop': 'PDF Kırp', 'tool_rotate': 'PDF Döndür', 'tool_unlock': 'PDF Kilidi Aç',
            'why_choose_title': 'Neden PDFrow Sayfa Numaraları Aracını Seçmelisiniz?', 'why_choose_subtitle': 'Profesyonel, hızlı ve güvenli PDF sayfa numaralandırma',
            'feature_lightning_fast_title': 'Şimşek Hızında', 'feature_lightning_fast_desc': 'Optimize edilmiş işleme motorumuzla PDF dosyalarına saniyeler içinde sayfa numaraları ekleyin',
            'feature_secure_title': '%100 Güvenli', 'feature_secure_desc': 'Dosyalarınız yerel olarak işlenir ve işlemden sonra otomatik olarak silinir',
            'feature_custom_styling_title': 'Özel Stil', 'feature_custom_styling_desc': 'Profesyonel sonuçlar için birden fazla konumlandırma seçeneği ve numara formatından seçim yapın',
            'feature_no_software_title': 'Yazılım Gerekmez', 'feature_no_software_desc': 'Doğrudan tarayıcınızda çalışır - indirme veya kurulum gerektirmez',
            'how_to_title': 'PDF\'ye Sayfa Numaraları Nasıl Eklenir', 'how_to_subtitle': 'Profesyonel sayfa numaralandırma eklemek için basit 3 adımlı süreç',
            'step1_title': 'PDF Yükle', 'step1_desc': 'Başlamak için PDF dosyanızı seçin veya sürükleyip bırakın',
            'step2_title': 'Stil Seç', 'step2_desc': 'Sayfa numaralarınız için konum, format ve stil seçeneklerini seçin',
            'step3_title': 'İndir', 'step3_desc': 'Profesyonel sayfa numaralarına sahip PDF\'nizi anında alın',
            'language': 'Dil', 'footer_description': 'Hepsi bir arada PDF çözümünüz. PDF\'leri ücretsiz olarak çevrimiçi düzenleyin, dönüştürün, birleştirin ve yönetin.', 'footer_tools': 'Araçlar', 'footer_company': 'Şirket', 'footer_resources': 'Kaynaklar', 'footer_rights': 'Tüm hakları saklıdır.'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Início', 'breadcrumb_current': 'Adicionar Números de Página', 'page_title': 'Adicionar Números de Página',
            'page_description': 'Numeração de páginas profissional para seus documentos PDF com opções personalizadas de posicionamento e estilo. Perfeito para relatórios, documentos e apresentações.',
            'feature_custom_position': 'Posição Personalizada', 'feature_multiple_formats': 'Múltiplos Formatos', 'feature_preview_pages': 'Visualização', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Arquivos processados localmente',
            'section_title': 'Ferramenta de Números de Página PDF', 'section_subtitle': 'Adicione numeração de páginas profissional com posicionamento e estilo personalizados',
            'privacy_badge': '100% no lado do cliente. Os arquivos nunca saem do seu dispositivo.', 'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...', 'import_file_btn': 'Importar Arquivo', 'download_status': 'Baixando...',
            'supported_services': 'Serviços suportados:', 'service_dropbox': 'Dropbox: Compartilhe o link e cole aqui', 'service_gdrive': 'Google Drive: Obtenha link compartilhável (Qualquer pessoa com o link pode ver)',
            'service_direct': 'URLs PDF diretas', 'max_file_size': 'Tamanho máximo do arquivo: 50MB',
            'upload_text': 'Clique para selecionar ou arraste e solte seus arquivos PDF', 'upload_pdf_subtext': 'Arquivos PDF • Até 10 arquivos • Tamanho máximo total: 50MB',
            'settings_title': 'Configurações de Números de Página', 'label_position': 'Posição:', 'pos_bottom_center': 'Centro Inferior', 'pos_bottom_left': 'Inferior Esquerda', 'pos_bottom_right': 'Inferior Direita',
            'pos_top_center': 'Centro Superior', 'pos_top_left': 'Superior Esquerda', 'pos_top_right': 'Superior Direita', 'label_format': 'Formato:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'Cor do Texto:',
            'color_black': 'Preto', 'color_gray': 'Cinza', 'color_blue': 'Azul', 'color_red': 'Vermelho', 'color_green': 'Verde',
            'previous_file': 'Arquivo Anterior', 'next_file': 'Próximo Arquivo', 'file_count': 'Arquivo', 'of': 'de',
            'preview_title': 'Visualização com Números de Página', 'btn_previous': '← Anterior', 'btn_next': 'Próximo →', 'page_info': 'Página',
            'add_page_numbers_btn': 'Adicionar Números de Página', 'hint_upload_files_first': 'Carregue um arquivo PDF acima para ativar a numeração de páginas',
            'success_title': 'Números de página adicionados com sucesso!', 'success_description': 'Seu PDF com números de página está pronto para download',
            'download_pdf': 'Baixar PDF', 'process_another': 'Processar Outro', 'continue_title': 'Continue editando seu PDF:',
            'tool_merge': 'Mesclar PDF', 'tool_split': 'Dividir PDF', 'tool_compress': 'Compactar', 'tool_crop': 'Recortar PDF', 'tool_rotate': 'Girar PDF', 'tool_unlock': 'Desbloquear PDF',
            'why_choose_title': 'Por que Escolher a Ferramenta de Números de Página PDFrow?', 'why_choose_subtitle': 'Numeração de páginas PDF profissional, rápida e segura',
            'feature_lightning_fast_title': 'Super Rápido', 'feature_lightning_fast_desc': 'Adicione números de página a arquivos PDF em segundos com nosso mecanismo de processamento otimizado',
            'feature_secure_title': '100% Seguro', 'feature_secure_desc': 'Seus arquivos são processados localmente e excluídos automaticamente após o processamento',
            'feature_custom_styling_title': 'Estilo Personalizado', 'feature_custom_styling_desc': 'Escolha entre múltiplas opções de posicionamento e formatos de número para resultados profissionais',
            'feature_no_software_title': 'Nenhum Software Necessário', 'feature_no_software_desc': 'Funciona diretamente em seu navegador - sem downloads ou instalações necessárias',
            'how_to_title': 'Como Adicionar Números de Página ao PDF', 'how_to_subtitle': 'Processo simples de 3 etapas para adicionar numeração profissional de páginas',
            'step1_title': 'Carregar PDF', 'step1_desc': 'Selecione ou arraste e solte seu arquivo PDF para começar',
            'step2_title': 'Escolher Estilo', 'step2_desc': 'Selecione posição, formato e opções de estilo para seus números de página',
            'step3_title': 'Baixar', 'step3_desc': 'Obtenha seu PDF com números de página profissionais instantaneamente',
            'language': 'Idioma', 'footer_description': 'Sua solução PDF completa. Edite, converta, mescle e gerencie PDFs online gratuitamente.', 'footer_tools': 'Ferramentas', 'footer_company': 'Empresa', 'footer_resources': 'Recursos', 'footer_rights': 'Todos os direitos reservados.'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_current': 'Добавить Номера Страниц', 'page_title': 'Добавить Номера Страниц',
            'page_description': 'Профессиональная нумерация страниц для ваших PDF-документов с пользовательскими параметрами позиционирования и стиля. Идеально для отчетов, документов и презентаций.',
            'feature_custom_position': 'Пользовательская Позиция', 'feature_multiple_formats': 'Множество Форматов', 'feature_preview_pages': 'Предпросмотр', 'feature_secure': '100% Безопасно',
            'security_badge': '100% Безопасно - Файлы обрабатываются локально',
            'section_title': 'Инструмент Нумерации Страниц PDF', 'section_subtitle': 'Добавьте профессиональную нумерацию страниц с пользовательским позиционированием и стилем',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.', 'upload_from_computer': 'Загрузить с компьютера', 'import_from_url': 'Импорт из URL',
            'url_placeholder': 'Вставьте ссылку Dropbox или Google Drive сюда...', 'import_file_btn': 'Импортировать Файл', 'download_status': 'Загрузка...',
            'supported_services': 'Поддерживаемые сервисы:', 'service_dropbox': 'Dropbox: Поделитесь ссылкой и вставьте здесь', 'service_gdrive': 'Google Drive: Получите общедоступную ссылку (Любой, у кого есть ссылка, может просматривать)',
            'service_direct': 'Прямые URL-адреса PDF', 'max_file_size': 'Максимальный размер файла: 50MB',
            'upload_text': 'Нажмите, чтобы выбрать, или перетащите PDF-файлы', 'upload_pdf_subtext': 'PDF файлы • До 10 файлов • Максимальный общий размер: 50MB',
            'settings_title': 'Настройки Номеров Страниц', 'label_position': 'Позиция:', 'pos_bottom_center': 'Снизу По Центру', 'pos_bottom_left': 'Снизу Слева', 'pos_bottom_right': 'Снизу Справа',
            'pos_top_center': 'Сверху По Центру', 'pos_top_left': 'Сверху Слева', 'pos_top_right': 'Сверху Справа', 'label_format': 'Формат:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'Цвет Текста:',
            'color_black': 'Черный', 'color_gray': 'Серый', 'color_blue': 'Синий', 'color_red': 'Красный', 'color_green': 'Зеленый',
            'previous_file': 'Предыдущий Файл', 'next_file': 'Следующий Файл', 'file_count': 'Файл', 'of': 'из',
            'preview_title': 'Предпросмотр с Номерами Страниц', 'btn_previous': '← Предыдущая', 'btn_next': 'Следующая →', 'page_info': 'Страница',
            'add_page_numbers_btn': 'Добавить Номера Страниц', 'hint_upload_files_first': 'Загрузите файл PDF выше, чтобы включить нумерацию страниц',
            'success_title': 'Номера страниц успешно добавлены!', 'success_description': 'Ваш PDF с номерами страниц готов к загрузке',
            'download_pdf': 'Скачать PDF', 'process_another': 'Обработать Другой', 'continue_title': 'Продолжить редактирование PDF:',
            'tool_merge': 'Объединить PDF', 'tool_split': 'Разделить PDF', 'tool_compress': 'Сжать', 'tool_crop': 'Обрезать PDF', 'tool_rotate': 'Повернуть PDF', 'tool_unlock': 'Разблокировать PDF',
            'why_choose_title': 'Почему Выбирают Инструмент Номеров Страниц PDFrow?', 'why_choose_subtitle': 'Профессиональная, быстрая и безопасная нумерация страниц PDF',
            'feature_lightning_fast_title': 'Молниеносно Быстро', 'feature_lightning_fast_desc': 'Добавляйте номера страниц в PDF-файлы за секунды с помощью нашего оптимизированного движка обработки',
            'feature_secure_title': '100% Безопасно', 'feature_secure_desc': 'Ваши файлы обрабатываются локально и автоматически удаляются после обработки',
            'feature_custom_styling_title': 'Пользовательский Стиль', 'feature_custom_styling_desc': 'Выбирайте из нескольких вариантов позиционирования и форматов номеров для профессиональных результатов',
            'feature_no_software_title': 'Без Программного Обеспечения', 'feature_no_software_desc': 'Работает прямо в вашем браузере - без загрузок или установок',
            'how_to_title': 'Как Добавить Номера Страниц в PDF', 'how_to_subtitle': 'Простой 3-шаговый процесс добавления профессиональной нумерации страниц',
            'step1_title': 'Загрузить PDF', 'step1_desc': 'Выберите или перетащите PDF-файл, чтобы начать',
            'step2_title': 'Выбрать Стиль', 'step2_desc': 'Выберите позицию, формат и параметры стиля для номеров страниц',
            'step3_title': 'Скачать', 'step3_desc': 'Получите свой PDF с профессиональными номерами страниц мгновенно',
            'language': 'Язык', 'footer_description': 'Ваше универсальное PDF-решение. Редактируйте, конвертируйте, объединяйте и управляйте PDF онлайн бесплатно.', 'footer_tools': 'Инструменты', 'footer_company': 'Компания', 'footer_resources': 'Ресурсы', 'footer_rights': 'Все права защищены.'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_current': '添加页码', 'page_title': '添加页码',
            'page_description': '为您的PDF文档添加专业的页码，具有自定义定位和样式选项。非常适合报告、文档和演示文稿。',
            'feature_custom_position': '自定义位置', 'feature_multiple_formats': '多种格式', 'feature_preview_pages': '预览', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - 文件在本地处理',
            'section_title': 'PDF页码工具', 'section_subtitle': '添加具有自定义定位和样式的专业页码',
            'privacy_badge': '100%客户端处理。文件永远不会离开您的设备。', 'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'url_placeholder': '在此粘贴Dropbox或Google Drive链接...', 'import_file_btn': '导入文件', 'download_status': '下载中...',
            'supported_services': '支持的服务:', 'service_dropbox': 'Dropbox: 分享链接并粘贴到这里', 'service_gdrive': 'Google Drive: 获取可共享链接（任何拥有链接的人都可以查看）',
            'service_direct': '直接PDF URL', 'max_file_size': '最大文件大小：50MB',
            'upload_text': '点击选择或拖放您的PDF文件', 'upload_pdf_subtext': 'PDF文件 • 最多10个文件 • 最大总大小：50MB',
            'settings_title': '页码设置', 'label_position': '位置:', 'pos_bottom_center': '底部居中', 'pos_bottom_left': '底部左侧', 'pos_bottom_right': '底部右侧',
            'pos_top_center': '顶部居中', 'pos_top_left': '顶部左侧', 'pos_top_right': '顶部右侧', 'label_format': '格式:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': '文字颜色:',
            'color_black': '黑色', 'color_gray': '灰色', 'color_blue': '蓝色', 'color_red': '红色', 'color_green': '绿色',
            'previous_file': '上一个文件', 'next_file': '下一个文件', 'file_count': '文件', 'of': '/共',
            'preview_title': '带页码的预览', 'btn_previous': '← 上一页', 'btn_next': '下一页 →', 'page_info': '页',
            'add_page_numbers_btn': '添加页码', 'hint_upload_files_first': '在上方上传PDF文件以启用页码',
            'success_title': '页码添加成功！', 'success_description': '您的带页码的PDF已准备好下载',
            'download_pdf': '下载PDF', 'process_another': '处理另一个', 'continue_title': '继续编辑您的PDF:',
            'tool_merge': '合并PDF', 'tool_split': '拆分PDF', 'tool_compress': '压缩', 'tool_crop': '裁剪PDF', 'tool_rotate': '旋转PDF', 'tool_unlock': '解锁PDF',
            'why_choose_title': '为什么选择PDFrow页码工具？', 'why_choose_subtitle': '专业、快速、安全的PDF页码',
            'feature_lightning_fast_title': '闪电般快速', 'feature_lightning_fast_desc': '使用我们优化的处理引擎在几秒钟内为PDF文件添加页码',
            'feature_secure_title': '100%安全', 'feature_secure_desc': '您的文件在本地处理，处理后自动删除',
            'feature_custom_styling_title': '自定义样式', 'feature_custom_styling_desc': '从多个定位选项和数字格式中选择以获得专业结果',
            'feature_no_software_title': '无需软件', 'feature_no_software_desc': '直接在浏览器中工作 - 无需下载或安装',
            'how_to_title': '如何为PDF添加页码', 'how_to_subtitle': '添加专业页码的简单3步流程',
            'step1_title': '上传PDF', 'step1_desc': '选择或拖放您的PDF文件开始',
            'step2_title': '选择样式', 'step2_desc': '为您的页码选择位置、格式和样式选项',
            'step3_title': '下载', 'step3_desc': '立即获取带有专业页码的PDF',
            'language': '语言', 'footer_description': '您的一体化PDF解决方案。免费在线编辑、转换、合并和管理PDF。', 'footer_tools': '工具', 'footer_company': '公司', 'footer_resources': '资源', 'footer_rights': '版权所有。'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_current': 'ページ番号を追加', 'page_title': 'ページ番号を追加',
            'page_description': 'カスタムの配置とスタイルオプションを使用して、PDF文書にプロフェッショナルなページ番号を付けます。レポート、ドキュメント、プレゼンテーションに最適です。',
            'feature_custom_position': 'カスタム位置', 'feature_multiple_formats': '複数のフォーマット', 'feature_preview_pages': 'プレビュー', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - ファイルはローカルで処理されます',
            'section_title': 'PDFページ番号ツール', 'section_subtitle': 'カスタムの配置とスタイルでプロフェッショナルなページ番号を追加',
            'privacy_badge': '100%クライアント側処理。ファイルがデバイスから離れることはありません。', 'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付けてください...', 'import_file_btn': 'ファイルをインポート', 'download_status': 'ダウンロード中...',
            'supported_services': 'サポートされているサービス:', 'service_dropbox': 'Dropbox: リンクを共有してここに貼り付けます', 'service_gdrive': 'Google Drive: 共有可能なリンクを取得（リンクを持っている人は誰でも表示できます）',
            'service_direct': '直接PDF URL', 'max_file_size': '最大ファイルサイズ：50MB',
            'upload_text': 'クリックして選択するか、PDFファイルをドラッグ＆ドロップ', 'upload_pdf_subtext': 'PDFファイル • 最大10ファイル • 最大合計サイズ：50MB',
            'settings_title': 'ページ番号設定', 'label_position': '位置:', 'pos_bottom_center': '下部中央', 'pos_bottom_left': '下部左', 'pos_bottom_right': '下部右',
            'pos_top_center': '上部中央', 'pos_top_left': '上部左', 'pos_top_right': '上部右', 'label_format': 'フォーマット:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'テキスト色:',
            'color_black': '黒', 'color_gray': 'グレー', 'color_blue': '青', 'color_red': '赤', 'color_green': '緑',
            'previous_file': '前のファイル', 'next_file': '次のファイル', 'file_count': 'ファイル', 'of': '/全',
            'preview_title': 'ページ番号付きプレビュー', 'btn_previous': '← 前へ', 'btn_next': '次へ →', 'page_info': 'ページ',
            'add_page_numbers_btn': 'ページ番号を追加', 'hint_upload_files_first': '上にPDFファイルをアップロードしてページ番号を有効にします',
            'success_title': 'ページ番号が正常に追加されました！', 'success_description': 'ページ番号付きのPDFがダウンロード可能です',
            'download_pdf': 'PDFをダウンロード', 'process_another': '別のを処理', 'continue_title': 'PDFの編集を続ける:',
            'tool_merge': 'PDF結合', 'tool_split': 'PDF分割', 'tool_compress': '圧縮', 'tool_crop': 'PDFトリミング', 'tool_rotate': 'PDF回転', 'tool_unlock': 'PDFロック解除',
            'why_choose_title': 'なぜPDFrowページ番号ツールを選ぶのか？', 'why_choose_subtitle': 'プロフェッショナル、高速、安全なPDFページ番号付け',
            'feature_lightning_fast_title': '超高速', 'feature_lightning_fast_desc': '最適化された処理エンジンで数秒でPDFファイルにページ番号を追加',
            'feature_secure_title': '100%安全', 'feature_secure_desc': 'ファイルはローカルで処理され、処理後に自動的に削除されます',
            'feature_custom_styling_title': 'カスタムスタイル', 'feature_custom_styling_desc': '複数の配置オプションと数値フォーマットから選択してプロフェッショナルな結果を実現',
            'feature_no_software_title': 'ソフトウェア不要', 'feature_no_software_desc': 'ブラウザで直接動作 - ダウンロードやインストールは不要',
            'how_to_title': 'PDFにページ番号を追加する方法', 'how_to_subtitle': 'プロフェッショナルなページ番号を追加するシンプルな3ステッププロセス',
            'step1_title': 'PDFをアップロード', 'step1_desc': 'PDFファイルを選択またはドラッグ＆ドロップして開始',
            'step2_title': 'スタイルを選択', 'step2_desc': 'ページ番号の位置、フォーマット、スタイルオプションを選択',
            'step3_title': 'ダウンロード', 'step3_desc': 'プロフェッショナルなページ番号付きのPDFを即座に取得',
            'language': '言語', 'footer_description': 'オールインワンPDFソリューション。PDFを無料でオンライン編集、変換、結合、管理できます。', 'footer_tools': 'ツール', 'footer_company': '会社', 'footer_resources': 'リソース', 'footer_rights': '全著作権所有。'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'المميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_current': 'إضافة أرقام الصفحات', 'page_title': 'إضافة أرقام الصفحات',
            'page_description': 'ترقيم صفحات احترافي لمستندات PDF الخاصة بك مع خيارات تحديد الموضع والتصميم المخصصة. مثالي للتقارير والمستندات والعروض التقديمية.',
            'feature_custom_position': 'موضع مخصص', 'feature_multiple_formats': 'تنسيقات متعددة', 'feature_preview_pages': 'معاينة', 'feature_secure': 'آمن 100%',
            'security_badge': 'آمن 100% - تتم معالجة الملفات محلياً',
            'section_title': 'أداة أرقام صفحات PDF', 'section_subtitle': 'أضف ترقيم صفحات احترافي مع تحديد الموضع والتصميم المخصصين',
            'privacy_badge': '100% من جانب العميل. لا تغادر الملفات جهازك أبداً.', 'upload_from_computer': 'التحميل من الكمبيوتر', 'import_from_url': 'استيراد من URL',
            'url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...', 'import_file_btn': 'استيراد الملف', 'download_status': 'جاري التنزيل...',
            'supported_services': 'الخدمات المدعومة:', 'service_dropbox': 'Dropbox: شارك الرابط والصقه هنا', 'service_gdrive': 'Google Drive: احصل على رابط قابل للمشاركة (يمكن لأي شخص لديه الرابط عرضه)',
            'service_direct': 'روابط PDF المباشرة', 'max_file_size': 'الحد الأقصى لحجم الملف: 50 ميجابايت',
            'upload_text': 'انقر للتحديد أو اسحب وأفلت ملفات PDF الخاصة بك', 'upload_pdf_subtext': 'ملفات PDF • حتى 10 ملفات • الحد الأقصى للحجم الإجمالي: 50 ميجابايت',
            'settings_title': 'إعدادات أرقام الصفحات', 'label_position': 'الموضع:', 'pos_bottom_center': 'أسفل الوسط', 'pos_bottom_left': 'أسفل اليسار', 'pos_bottom_right': 'أسفل اليمين',
            'pos_top_center': 'أعلى الوسط', 'pos_top_left': 'أعلى اليسار', 'pos_top_right': 'أعلى اليمين', 'label_format': 'التنسيق:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'لون النص:',
            'color_black': 'أسود', 'color_gray': 'رمادي', 'color_blue': 'أزرق', 'color_red': 'أحمر', 'color_green': 'أخضر',
            'previous_file': 'الملف السابق', 'next_file': 'الملف التالي', 'file_count': 'ملف', 'of': 'من',
            'preview_title': 'معاينة مع أرقام الصفحات', 'btn_previous': '← السابق', 'btn_next': 'التالي ←', 'page_info': 'صفحة',
            'add_page_numbers_btn': 'إضافة أرقام الصفحات', 'hint_upload_files_first': 'قم بتحميل ملف PDF أعلاه لتمكين ترقيم الصفحات',
            'success_title': 'تمت إضافة أرقام الصفحات بنجاح!', 'success_description': 'ملف PDF الخاص بك مع أرقام الصفحات جاهز للتنزيل',
            'download_pdf': 'تنزيل PDF', 'process_another': 'معالجة آخر', 'continue_title': 'متابعة تحرير PDF الخاص بك:',
            'tool_merge': 'دمج PDF', 'tool_split': 'تقسيم PDF', 'tool_compress': 'ضغط', 'tool_crop': 'اقتصاص PDF', 'tool_rotate': 'تدوير PDF', 'tool_unlock': 'إلغاء قفل PDF',
            'why_choose_title': 'لماذا تختار أداة أرقام صفحات PDFrow؟', 'why_choose_subtitle': 'ترقيم صفحات PDF احترافي وسريع وآمن',
            'feature_lightning_fast_title': 'سريع كالبرق', 'feature_lightning_fast_desc': 'أضف أرقام الصفحات إلى ملفات PDF في ثوانٍ باستخدام محرك المعالجة المُحسَّن لدينا',
            'feature_secure_title': 'آمن 100%', 'feature_secure_desc': 'تتم معالجة ملفاتك محلياً وحذفها تلقائياً بعد المعالجة',
            'feature_custom_styling_title': 'تصميم مخصص', 'feature_custom_styling_desc': 'اختر من بين خيارات تحديد الموضع وتنسيقات الأرقام المتعددة للحصول على نتائج احترافية',
            'feature_no_software_title': 'لا يلزم برنامج', 'feature_no_software_desc': 'يعمل مباشرة في متصفحك - لا حاجة لتنزيلات أو تثبيتات',
            'how_to_title': 'كيفية إضافة أرقام الصفحات إلى PDF', 'how_to_subtitle': 'عملية بسيطة من 3 خطوات لإضافة ترقيم صفحات احترافي',
            'step1_title': 'تحميل PDF', 'step1_desc': 'حدد أو اسحب وأفلت ملف PDF الخاص بك للبدء',
            'step2_title': 'اختر النمط', 'step2_desc': 'حدد الموضع والتنسيق وخيارات النمط لأرقام صفحاتك',
            'step3_title': 'تنزيل', 'step3_desc': 'احصل على PDF الخاص بك مع أرقام صفحات احترافية على الفور',
            'language': 'اللغة', 'footer_description': 'حل PDF الشامل الخاص بك. قم بتحرير وتحويل ودمج وإدارة ملفات PDF عبر الإنترنت مجاناً.', 'footer_tools': 'الأدوات', 'footer_company': 'الشركة', 'footer_resources': 'الموارد', 'footer_rights': 'جميع الحقوق محفوظة.'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'FAQ',
            'btn_login': 'लॉग इन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफ़ाइल', 'btn_logout': 'लॉग आउट',
            'breadcrumb_home': 'होम', 'breadcrumb_current': 'पृष्ठ संख्या जोड़ें', 'page_title': 'पृष्ठ संख्या जोड़ें',
            'page_description': 'कस्टम स्थिति और स्टाइलिंग विकल्पों के साथ अपने PDF दस्तावेज़ों के लिए पेशेवर पृष्ठ क्रमांकन। रिपोर्ट, दस्तावेज़ और प्रस्तुतियों के लिए बिल्कुल सही।',
            'feature_custom_position': 'कस्टम स्थिति', 'feature_multiple_formats': 'एकाधिक प्रारूप', 'feature_preview_pages': 'पूर्वावलोकन', 'feature_secure': '100% सुरक्षित',
            'security_badge': '100% सुरक्षित - फ़ाइलें स्थानीय रूप से संसाधित',
            'section_title': 'PDF पृष्ठ संख्या उपकरण', 'section_subtitle': 'कस्टम स्थिति और स्टाइल के साथ पेशेवर पृष्ठ क्रमांकन जोड़ें',
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी आपके डिवाइस को नहीं छोड़तीं।', 'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से आयात करें',
            'url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...', 'import_file_btn': 'फ़ाइल आयात करें', 'download_status': 'डाउनलोड हो रहा है...',
            'supported_services': 'समर्थित सेवाएं:', 'service_dropbox': 'Dropbox: लिंक साझा करें और यहां पेस्ट करें', 'service_gdrive': 'Google Drive: साझा करने योग्य लिंक प्राप्त करें (लिंक वाला कोई भी देख सकता है)',
            'service_direct': 'प्रत्यक्ष PDF URLs', 'max_file_size': 'अधिकतम फ़ाइल आकार: 50MB',
            'upload_text': 'अपनी PDF फ़ाइलों का चयन करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें', 'upload_pdf_subtext': 'PDF फ़ाइलें • 10 फ़ाइलों तक • अधिकतम कुल आकार: 50MB',
            'settings_title': 'पृष्ठ संख्या सेटिंग्स', 'label_position': 'स्थिति:', 'pos_bottom_center': 'नीचे केंद्र', 'pos_bottom_left': 'नीचे बाएं', 'pos_bottom_right': 'नीचे दाएं',
            'pos_top_center': 'ऊपर केंद्र', 'pos_top_left': 'ऊपर बाएं', 'pos_top_right': 'ऊपर दाएं', 'label_format': 'प्रारूप:', 'format_123': '1, 2, 3...',
            'format_iii': 'i, ii, iii...', 'format_III': 'I, II, III...', 'format_abc': 'a, b, c...', 'format_ABC': 'A, B, C...', 'label_color': 'टेक्स्ट रंग:',
            'color_black': 'काला', 'color_gray': 'ग्रे', 'color_blue': 'नीला', 'color_red': 'लाल', 'color_green': 'हरा',
            'previous_file': 'पिछली फ़ाइल', 'next_file': 'अगली फ़ाइल', 'file_count': 'फ़ाइल', 'of': 'में से',
            'preview_title': 'पृष्ठ संख्या के साथ पूर्वावलोकन', 'btn_previous': '← पिछला', 'btn_next': 'अगला →', 'page_info': 'पृष्ठ',
            'add_page_numbers_btn': 'पृष्ठ संख्या जोड़ें', 'hint_upload_files_first': 'पृष्ठ क्रमांकन सक्षम करने के लिए ऊपर PDF फ़ाइल अपलोड करें',
            'success_title': 'पृष्ठ संख्या सफलतापूर्वक जोड़ी गई!', 'success_description': 'पृष्ठ संख्या वाली आपकी PDF डाउनलोड के लिए तैयार है',
            'download_pdf': 'PDF डाउनलोड करें', 'process_another': 'दूसरा प्रोसेस करें', 'continue_title': 'अपनी PDF संपादित करना जारी रखें:',
            'tool_merge': 'PDF मर्ज करें', 'tool_split': 'PDF विभाजित करें', 'tool_compress': 'संपीड़ित करें', 'tool_crop': 'PDF क्रॉप करें', 'tool_rotate': 'PDF घुमाएं', 'tool_unlock': 'PDF अनलॉक करें',
            'why_choose_title': 'PDFrow पृष्ठ संख्या उपकरण क्यों चुनें?', 'why_choose_subtitle': 'पेशेवर, तेज़ और सुरक्षित PDF पृष्ठ क्रमांकन',
            'feature_lightning_fast_title': 'बिजली की तेज़', 'feature_lightning_fast_desc': 'हमारे अनुकूलित प्रोसेसिंग इंजन के साथ सेकंड में PDF फ़ाइलों में पृष्ठ संख्या जोड़ें',
            'feature_secure_title': '100% सुरक्षित', 'feature_secure_desc': 'आपकी फ़ाइलें स्थानीय रूप से संसाधित होती हैं और प्रसंस्करण के बाद स्वचालित रूप से हटा दी जाती हैं',
            'feature_custom_styling_title': 'कस्टम स्टाइलिंग', 'feature_custom_styling_desc': 'पेशेवर परिणामों के लिए कई स्थिति विकल्पों और संख्या प्रारूपों में से चुनें',
            'feature_no_software_title': 'कोई सॉफ़्टवेयर आवश्यक नहीं', 'feature_no_software_desc': 'सीधे आपके ब्राउज़र में काम करता है - कोई डाउनलोड या इंस्टॉलेशन आवश्यक नहीं',
            'how_to_title': 'PDF में पृष्ठ संख्या कैसे जोड़ें', 'how_to_subtitle': 'पेशेवर पृष्ठ क्रमांकन जोड़ने के लिए सरल 3-चरणीय प्रक्रिया',
            'step1_title': 'PDF अपलोड करें', 'step1_desc': 'शुरू करने के लिए अपनी PDF फ़ाइल का चयन करें या ड्रैग और ड्रॉप करें',
            'step2_title': 'स्टाइल चुनें', 'step2_desc': 'अपने पृष्ठ संख्याओं के लिए स्थिति, प्रारूप और स्टाइलिंग विकल्प चुनें',
            'step3_title': 'डाउनलोड करें', 'step3_desc': 'पेशेवर पृष्ठ संख्या के साथ अपनी PDF तुरंत प्राप्त करें',
            'language': 'भाषा', 'footer_description': 'आपका ऑल-इन-वन PDF समाधान। PDF को मुफ्त में ऑनलाइन संपादित, परिवर्तित, मर्ज और प्रबंधित करें।', 'footer_tools': 'उपकरण', 'footer_company': 'कंपनी', 'footer_resources': 'संसाधन', 'footer_rights': 'सर्वाधिकार सुरक्षित।'
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
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[key];
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
