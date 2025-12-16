// Translation system for organize-pdf.html
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
            'breadcrumb_organize': 'PDF Organizer',
            'organize_pdf_title': 'Organize PDF',
            'organize_pdf_description': 'Sort, add and delete PDF pages with our intuitive drag and drop organizer. Drag and drop the page thumbnails and sort them in our PDF organizer.',
            'drag_drop': 'Drag & Drop',
            'sort_pages': 'Sort Pages',
            'delete_pages': 'Delete Pages',
            'secure_100': '100% Secure',
            'security_badge_organize': '100% Secure - Files processed locally',

            // Tool Section
            'pdf_organizer_title': 'PDF Page Organizer Tool',
            'pdf_organizer_subtitle': 'Organize your PDF pages with drag and drop functionality',
            'privacy_badge': '100% client‑side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',
            'upload_text': 'Click to select or drag and drop your PDF files',
            'upload_pdf_subtext': 'PDF files • Up to 10 files • Max 50MB total batch size',

            // Organizer Controls
            'organize_title': 'Organize Pages',
            'organize_instructions': 'Drag and drop page thumbnails to rearrange them',
            'select_all': 'Select All',
            'deselect_all': 'Deselect All',
            'delete_selected': 'Delete Selected',
            'rotate_selected': 'Rotate Selected',
            'pages_selected': 'pages selected',

            // Buttons
            'organize_pdf_btn': 'Organize PDF',
            'hint_upload_files_first': 'Upload a PDF file above to start organizing',
            'download_pdf': 'Download PDF',
            'process_another': 'Process Another',

            // Success Messages
            'processing_completed': 'Processing completed!',
            'pdf_ready': 'Your PDF is ready for download',
            'continue_to': 'Continue to...',
            'merge_pdf': 'Merge PDF',
            'split_pdf': 'Split PDF',
            'rotate_pdf': 'Rotate PDF',
            'compress_pdf': 'Compress PDF',

            // URL Import
            'paste_url_placeholder': 'Paste Dropbox or Google Drive link here...',
            'import_file': 'Import File',
            'downloading': 'Downloading...',
            'supported_sources': 'Supported sources:',
            'dropbox_hint': 'Dropbox shared links',
            'gdrive_hint': 'Google Drive shared files',
            'direct_url_hint': 'Direct file URLs',

            // Footer
            'language': 'Language',
            'footer_description': 'Your all-in-one PDF solution. Edit, convert, merge, and manage PDFs online for free.',
            'footer_rights': 'All rights reserved.',

            // Why Choose Section
            'why_choose_title': 'Why Choose PDFrow PDF Organizer?',
            'why_choose_subtitle': 'Professional PDF organization with ease and precision',
            'feature_drag_drop': 'Drag & Drop',
            'feature_drag_drop_desc': 'Easily rearrange PDF pages with intuitive drag and drop functionality',
            'feature_sort_pages': 'Sort Pages',
            'feature_sort_pages_desc': 'Organize pages in any order you need with visual thumbnails',
            'feature_secure': '100% Secure',
            'feature_secure_desc': 'Your files are processed locally and automatically deleted after processing',
            'feature_lightning_fast': 'Lightning Fast',
            'feature_lightning_fast_desc': 'Organize PDF pages instantly with our optimized processing engine',
            'feature_realtime': 'Real-time Preview',
            'feature_realtime_desc': 'See page thumbnails in real-time as you organize your PDF documents',
            'feature_no_software': 'No Software Needed',
            'feature_no_software_desc': 'Works directly in your browser - no downloads or installations required',

            // How to Organize Section
            'how_to_organize_title': 'How to Organize PDF Pages',
            'how_to_organize_subtitle': 'Simple 3-step process to organize PDF documents',
            'step1_title': 'Upload PDF File',
            'step1_desc': 'Select or drag and drop your PDF file to start. Preview all pages as thumbnails.',
            'step1_feature1': '• Supports up to 50MB files',
            'step1_feature2': '• Instant page preview',
            'step1_feature3': '• Multiple file support',
            'step2_title': 'Organize Pages',
            'step2_desc': 'Drag and drop page thumbnails to reorder them. Delete unwanted pages or rotate individual pages.',
            'step2_feature1': '• <strong>Drag & Drop:</strong> Reorder pages easily',
            'step2_feature2': '• <strong>Delete:</strong> Remove unwanted pages',
            'step2_feature3': '• <strong>Rotate:</strong> Fix page orientation',
            'step3_title': 'Download Organized PDF',
            'step3_desc': 'Process your PDF and download the organized version instantly. Your formatting and quality are preserved.',
            'step3_feature1': '• Instant processing',
            'step3_feature2': '• Quality preserved',
            'step3_feature3': '• Same format output'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Características', 'nav_how_it_works': 'Cómo Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesión', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesión',
            'breadcrumb_home': 'Inicio', 'breadcrumb_organize': 'Organizador de PDF', 'organize_pdf_title': 'Organizar PDF',
            'organize_pdf_description': 'Ordene, agregue y elimine páginas PDF con nuestro organizador intuitivo de arrastrar y soltar. Arrastre y suelte las miniaturas de páginas y ordénelas en nuestro organizador de PDF.',
            'drag_drop': 'Arrastrar y Soltar', 'sort_pages': 'Ordenar Páginas', 'delete_pages': 'Eliminar Páginas', 'secure_100': '100% Seguro',
            'security_badge_organize': '100% Seguro - Los archivos se procesan localmente',
            'pdf_organizer_title': 'Herramienta Organizadora de Páginas PDF', 'pdf_organizer_subtitle': 'Organice sus páginas PDF con funcionalidad de arrastrar y soltar',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.', 'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'upload_text': 'Haga clic para seleccionar o arrastre y suelte sus archivos PDF', 'upload_pdf_subtext': 'Archivos PDF • Hasta 10 archivos • Tamaño máximo total: 50MB',
            'organize_title': 'Organizar Páginas', 'organize_instructions': 'Arrastre y suelte las miniaturas de páginas para reorganizarlas',
            'select_all': 'Seleccionar Todo', 'deselect_all': 'Deseleccionar Todo', 'delete_selected': 'Eliminar Seleccionados', 'rotate_selected': 'Rotar Seleccionados',
            'pages_selected': 'páginas seleccionadas',
            'organize_pdf_btn': 'Organizar PDF', 'hint_upload_files_first': 'Suba un archivo PDF arriba para comenzar a organizar',
            'download_pdf': 'Descargar PDF', 'process_another': 'Procesar Otro',
            'processing_completed': '¡Procesamiento completado!', 'pdf_ready': 'Su PDF está listo para descargar', 'continue_to': 'Continuar a...',
            'merge_pdf': 'Combinar PDF', 'split_pdf': 'Dividir PDF', 'rotate_pdf': 'Rotar PDF', 'compress_pdf': 'Comprimir PDF',
            'paste_url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aquí...', 'import_file': 'Importar Archivo', 'downloading': 'Descargando...',
            'supported_sources': 'Fuentes admitidas:', 'dropbox_hint': 'Enlaces compartidos de Dropbox', 'gdrive_hint': 'Archivos compartidos de Google Drive', 'direct_url_hint': 'URLs de archivo directo',
            'language': 'Idioma', 'footer_description': 'Su solución PDF todo en uno. Edite, convierta, combine y administre PDFs en línea gratis.', 'footer_rights': 'Todos los derechos reservados.',
            'why_choose_title': '¿Por qué elegir PDFrow PDF Organizer?', 'why_choose_subtitle': 'Organización de PDF profesional con facilidad y precisión',
            'feature_drag_drop': 'Arrastrar y Soltar', 'feature_drag_drop_desc': 'Reorganice fácilmente las páginas PDF con funcionalidad intuitiva de arrastrar y soltar',
            'feature_sort_pages': 'Ordenar Páginas', 'feature_sort_pages_desc': 'Organice las páginas en cualquier orden que necesite con miniaturas visuales',
            'feature_secure': '100% Seguro', 'feature_secure_desc': 'Sus archivos se procesan localmente y se eliminan automáticamente después del procesamiento',
            'feature_lightning_fast': 'Ultra Rápido', 'feature_lightning_fast_desc': 'Organice páginas PDF instantáneamente con nuestro motor de procesamiento optimizado',
            'feature_realtime': 'Vista Previa en Tiempo Real', 'feature_realtime_desc': 'Vea miniaturas de páginas en tiempo real mientras organiza sus documentos PDF',
            'feature_no_software': 'No Necesita Software', 'feature_no_software_desc': 'Funciona directamente en su navegador - no se requieren descargas ni instalaciones',
            'how_to_organize_title': 'Cómo Organizar Páginas PDF', 'how_to_organize_subtitle': 'Proceso simple de 3 pasos para organizar documentos PDF',
            'step1_title': 'Subir Archivo PDF', 'step1_desc': 'Seleccione o arrastre y suelte su archivo PDF para comenzar. Previsualice todas las páginas como miniaturas.',
            'step1_feature1': '• Soporta archivos de hasta 50MB', 'step1_feature2': '• Vista previa instantánea de página', 'step1_feature3': '• Soporte de múltiples archivos',
            'step2_title': 'Organizar Páginas', 'step2_desc': 'Arrastre y suelte las miniaturas de páginas para reordenarlas. Elimine páginas no deseadas o rote páginas individuales.',
            'step2_feature1': '• <strong>Arrastrar y Soltar:</strong> Reordene páginas fácilmente', 'step2_feature2': '• <strong>Eliminar:</strong> Quite páginas no deseadas', 'step2_feature3': '• <strong>Rotar:</strong> Corrija la orientación de la página',
            'step3_title': 'Descargar PDF Organizado', 'step3_desc': 'Procese su PDF y descargue la versión organizada instantáneamente. Su formato y calidad se conservan.',
            'step3_feature1': '• Procesamiento instantáneo', 'step3_feature2': '• Calidad preservada', 'step3_feature3': '• Salida en el mismo formato'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Déconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_organize': 'Organisateur PDF', 'organize_pdf_title': 'Organiser PDF',
            'organize_pdf_description': 'Triez, ajoutez et supprimez des pages PDF avec notre organisateur intuitif glisser-déposer. Glissez-déposez les vignettes de pages et triez-les dans notre organisateur PDF.',
            'drag_drop': 'Glisser-Déposer', 'sort_pages': 'Trier les Pages', 'delete_pages': 'Supprimer les Pages', 'secure_100': '100% Sécurisé',
            'security_badge_organize': '100% Sécurisé - Les fichiers sont traités localement',
            'pdf_organizer_title': 'Outil d\'Organisation de Pages PDF', 'pdf_organizer_subtitle': 'Organisez vos pages PDF avec la fonctionnalité glisser-déposer',
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.', 'upload_from_computer': 'Télécharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'upload_text': 'Cliquez pour sélectionner ou glissez-déposez vos fichiers PDF', 'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 10 fichiers • Taille maximale totale: 50MB',
            'organize_title': 'Organiser les Pages', 'organize_instructions': 'Glissez-déposez les vignettes de pages pour les réorganiser',
            'select_all': 'Tout Sélectionner', 'deselect_all': 'Tout Désélectionner', 'delete_selected': 'Supprimer Sélectionnés', 'rotate_selected': 'Pivoter Sélectionnés',
            'pages_selected': 'pages sélectionnées',
            'organize_pdf_btn': 'Organiser PDF', 'hint_upload_files_first': 'Téléchargez un fichier PDF ci-dessus pour commencer à organiser',
            'download_pdf': 'Télécharger PDF', 'process_another': 'Traiter un Autre',
            'processing_completed': 'Traitement terminé!', 'pdf_ready': 'Votre PDF est prêt à être téléchargé', 'continue_to': 'Continuer vers...',
            'merge_pdf': 'Fusionner PDF', 'split_pdf': 'Diviser PDF', 'rotate_pdf': 'Pivoter PDF', 'compress_pdf': 'Compresser PDF',
            'paste_url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...', 'import_file': 'Importer Fichier', 'downloading': 'Téléchargement...',
            'supported_sources': 'Sources prises en charge:', 'dropbox_hint': 'Liens partagés Dropbox', 'gdrive_hint': 'Fichiers partagés Google Drive', 'direct_url_hint': 'URLs de fichiers directs',
            'language': 'Langue', 'footer_description': 'Votre solution PDF tout-en-un. Modifiez, convertissez, fusionnez et gérez des PDFs en ligne gratuitement.', 'footer_rights': 'Tous droits réservés.',
            'why_choose_title': 'Pourquoi Choisir PDFrow PDF Organizer?', 'why_choose_subtitle': 'Organisation PDF professionnelle avec facilité et précision',
            'feature_drag_drop': 'Glisser-Déposer', 'feature_drag_drop_desc': 'Réorganisez facilement les pages PDF avec la fonctionnalité intuitive glisser-déposer',
            'feature_sort_pages': 'Trier les Pages', 'feature_sort_pages_desc': 'Organisez les pages dans n\'importe quel ordre dont vous avez besoin avec des vignettes visuelles',
            'feature_secure': '100% Sécurisé', 'feature_secure_desc': 'Vos fichiers sont traités localement et automatiquement supprimés après le traitement',
            'feature_lightning_fast': 'Ultra Rapide', 'feature_lightning_fast_desc': 'Organisez les pages PDF instantanément avec notre moteur de traitement optimisé',
            'feature_realtime': 'Aperçu en Temps Réel', 'feature_realtime_desc': 'Voyez les vignettes des pages en temps réel pendant que vous organisez vos documents PDF',
            'feature_no_software': 'Aucun Logiciel Nécessaire', 'feature_no_software_desc': 'Fonctionne directement dans votre navigateur - aucun téléchargement ni installation requis',
            'how_to_organize_title': 'Comment Organiser les Pages PDF', 'how_to_organize_subtitle': 'Processus simple en 3 étapes pour organiser des documents PDF',
            'step1_title': 'Télécharger Fichier PDF', 'step1_desc': 'Sélectionnez ou glissez-déposez votre fichier PDF pour commencer. Prévisualisez toutes les pages sous forme de vignettes.',
            'step1_feature1': '• Prend en charge les fichiers jusqu\'à 50MB', 'step1_feature2': '• Aperçu de page instantané', 'step1_feature3': '• Prise en charge de plusieurs fichiers',
            'step2_title': 'Organiser les Pages', 'step2_desc': 'Glissez-déposez les vignettes de pages pour les réorganiser. Supprimez les pages indésirables ou pivotez les pages individuelles.',
            'step2_feature1': '• <strong>Glisser-Déposer:</strong> Réorganisez facilement les pages', 'step2_feature2': '• <strong>Supprimer:</strong> Supprimez les pages indésirables', 'step2_feature3': '• <strong>Pivoter:</strong> Corrigez l\'orientation de la page',
            'step3_title': 'Télécharger PDF Organisé', 'step3_desc': 'Traitez votre PDF et téléchargez la version organisée instantanément. Votre formatage et qualité sont préservés.',
            'step3_feature1': '• Traitement instantané', 'step3_feature2': '• Qualité préservée', 'step3_feature3': '• Sortie au même format'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_organize': 'PDF-Organizer', 'organize_pdf_title': 'PDF Organisieren',
            'organize_pdf_description': 'Sortieren, fügen Sie hinzu und löschen Sie PDF-Seiten mit unserem intuitiven Drag-and-Drop-Organizer. Ziehen Sie die Seitenminiaturen und sortieren Sie sie in unserem PDF-Organizer.',
            'drag_drop': 'Drag & Drop', 'sort_pages': 'Seiten Sortieren', 'delete_pages': 'Seiten Löschen', 'secure_100': '100% Sicher',
            'security_badge_organize': '100% Sicher - Dateien werden lokal verarbeitet',
            'pdf_organizer_title': 'PDF-Seitenorganizer-Tool', 'pdf_organizer_subtitle': 'Organisieren Sie Ihre PDF-Seiten mit Drag-and-Drop-Funktionalität',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.', 'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'upload_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Dateien hierher', 'upload_pdf_subtext': 'PDF-Dateien • Bis zu 10 Dateien • Maximale Gesamtgröße: 50MB',
            'organize_title': 'Seiten Organisieren', 'organize_instructions': 'Ziehen und ablegen Sie Seitenminiaturen, um sie neu anzuordnen',
            'select_all': 'Alles Auswählen', 'deselect_all': 'Alle Abwählen', 'delete_selected': 'Ausgewählte Löschen', 'rotate_selected': 'Ausgewählte Drehen',
            'pages_selected': 'Seiten ausgewählt',
            'organize_pdf_btn': 'PDF Organisieren', 'hint_upload_files_first': 'Laden Sie oben eine PDF-Datei hoch, um mit dem Organisieren zu beginnen',
            'download_pdf': 'PDF Herunterladen', 'process_another': 'Weitere Verarbeiten',
            'processing_completed': 'Verarbeitung abgeschlossen!', 'pdf_ready': 'Ihr PDF ist zum Download bereit', 'continue_to': 'Weiter zu...',
            'merge_pdf': 'PDF Zusammenführen', 'split_pdf': 'PDF Teilen', 'rotate_pdf': 'PDF Drehen', 'compress_pdf': 'PDF Komprimieren',
            'paste_url_placeholder': 'Dropbox- oder Google Drive-Link hier einfügen...', 'import_file': 'Datei Importieren', 'downloading': 'Herunterladen...',
            'supported_sources': 'Unterstützte Quellen:', 'dropbox_hint': 'Dropbox freigegebene Links', 'gdrive_hint': 'Google Drive freigegebene Dateien', 'direct_url_hint': 'Direkte Datei-URLs',
            'language': 'Sprache', 'footer_description': 'Ihre All-in-One-PDF-Lösung. Bearbeiten, konvertieren, zusammenführen und verwalten Sie PDFs online kostenlos.', 'footer_rights': 'Alle Rechte vorbehalten.',
            'why_choose_title': 'Warum PDFrow PDF Organizer wählen?', 'why_choose_subtitle': 'Professionelle PDF-Organisation mit Leichtigkeit und Präzision',
            'feature_drag_drop': 'Drag & Drop', 'feature_drag_drop_desc': 'Organisieren Sie PDF-Seiten einfach mit intuitiver Drag-and-Drop-Funktionalität',
            'feature_sort_pages': 'Seiten Sortieren', 'feature_sort_pages_desc': 'Organisieren Sie Seiten in beliebiger Reihenfolge mit visuellen Miniaturansichten',
            'feature_secure': '100% Sicher', 'feature_secure_desc': 'Ihre Dateien werden lokal verarbeitet und nach der Verarbeitung automatisch gelöscht',
            'feature_lightning_fast': 'Blitzschnell', 'feature_lightning_fast_desc': 'Organisieren Sie PDF-Seiten sofort mit unserer optimierten Verarbeitungs-Engine',
            'feature_realtime': 'Echtzeit-Vorschau', 'feature_realtime_desc': 'Sehen Sie Seitenminiaturen in Echtzeit, während Sie Ihre PDF-Dokumente organisieren',
            'feature_no_software': 'Keine Software Erforderlich', 'feature_no_software_desc': 'Funktioniert direkt in Ihrem Browser - keine Downloads oder Installationen erforderlich',
            'how_to_organize_title': 'Wie man PDF-Seiten Organisiert', 'how_to_organize_subtitle': 'Einfacher 3-Schritte-Prozess zum Organisieren von PDF-Dokumenten',
            'step1_title': 'PDF-Datei Hochladen', 'step1_desc': 'Wählen Sie Ihre PDF-Datei aus oder ziehen Sie sie per Drag & Drop, um zu beginnen. Sehen Sie sich alle Seiten als Miniaturansichten in der Vorschau an.',
            'step1_feature1': '• Unterstützt Dateien bis zu 50MB', 'step1_feature2': '• Sofortige Seitenvorschau', 'step1_feature3': '• Unterstützung mehrerer Dateien',
            'step2_title': 'Seiten Organisieren', 'step2_desc': 'Ziehen Sie Seitenminiaturen per Drag & Drop, um sie neu anzuordnen. Löschen Sie unerwünschte Seiten oder drehen Sie einzelne Seiten.',
            'step2_feature1': '• <strong>Drag & Drop:</strong> Seiten einfach neu anordnen', 'step2_feature2': '• <strong>Löschen:</strong> Unerwünschte Seiten entfernen', 'step2_feature3': '• <strong>Drehen:</strong> Seitenausrichtung korrigieren',
            'step3_title': 'Organisiertes PDF Herunterladen', 'step3_desc': 'Verarbeiten Sie Ihr PDF und laden Sie die organisierte Version sofort herunter. Ihre Formatierung und Qualität bleiben erhalten.',
            'step3_feature1': '• Sofortige Verarbeitung', 'step3_feature2': '• Qualität erhalten', 'step3_feature3': '• Ausgabe im gleichen Format'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_organize': 'Organizzatore PDF', 'organize_pdf_title': 'Organizza PDF',
            'organize_pdf_description': 'Ordina, aggiungi ed elimina pagine PDF con il nostro organizzatore intuitivo drag and drop. Trascina e rilascia le miniature delle pagine e ordinale nel nostro organizzatore PDF.',
            'drag_drop': 'Trascina e Rilascia', 'sort_pages': 'Ordina Pagine', 'delete_pages': 'Elimina Pagine', 'secure_100': '100% Sicuro',
            'security_badge_organize': '100% Sicuro - File elaborati localmente',
            'pdf_organizer_title': 'Strumento di Organizzazione Pagine PDF', 'pdf_organizer_subtitle': 'Organizza le tue pagine PDF con la funzionalità drag and drop',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.', 'upload_from_computer': 'Carica dal Computer', 'import_from_url': 'Importa da URL',
            'upload_text': 'Clicca per selezionare o trascina i tuoi file PDF', 'upload_pdf_subtext': 'File PDF • Fino a 10 file • Dimensione totale massima: 50MB',
            'organize_title': 'Organizza Pagine', 'organize_instructions': 'Trascina e rilascia le miniature delle pagine per riorganizzarle',
            'select_all': 'Seleziona Tutto', 'deselect_all': 'Deseleziona Tutto', 'delete_selected': 'Elimina Selezionati', 'rotate_selected': 'Ruota Selezionati',
            'pages_selected': 'pagine selezionate',
            'organize_pdf_btn': 'Organizza PDF', 'hint_upload_files_first': 'Carica un file PDF sopra per iniziare a organizzare',
            'download_pdf': 'Scarica PDF', 'process_another': 'Elabora un Altro',
            'processing_completed': 'Elaborazione completata!', 'pdf_ready': 'Il tuo PDF è pronto per il download', 'continue_to': 'Continua a...',
            'merge_pdf': 'Unisci PDF', 'split_pdf': 'Dividi PDF', 'rotate_pdf': 'Ruota PDF', 'compress_pdf': 'Comprimi PDF',
            'paste_url_placeholder': 'Incolla il link Dropbox o Google Drive qui...', 'import_file': 'Importa File', 'downloading': 'Download...',
            'supported_sources': 'Fonti supportate:', 'dropbox_hint': 'Link condivisi Dropbox', 'gdrive_hint': 'File condivisi Google Drive', 'direct_url_hint': 'URL di file diretti',
            'language': 'Lingua', 'footer_description': 'La tua soluzione PDF all-in-one. Modifica, converti, unisci e gestisci PDF online gratuitamente.', 'footer_rights': 'Tutti i diritti riservati.',
            'why_choose_title': 'Perché Scegliere PDFrow PDF Organizer?', 'why_choose_subtitle': 'Organizzazione PDF professionale con facilità e precisione',
            'feature_drag_drop': 'Trascina e Rilascia', 'feature_drag_drop_desc': 'Riorganizza facilmente le pagine PDF con la funzionalità intuitiva drag and drop',
            'feature_sort_pages': 'Ordina Pagine', 'feature_sort_pages_desc': 'Organizza le pagine in qualsiasi ordine di cui hai bisogno con miniature visive',
            'feature_secure': '100% Sicuro', 'feature_secure_desc': 'I tuoi file vengono elaborati localmente e cancellati automaticamente dopo l\'elaborazione',
            'feature_lightning_fast': 'Fulmineo', 'feature_lightning_fast_desc': 'Organizza le pagine PDF istantaneamente con il nostro motore di elaborazione ottimizzato',
            'feature_realtime': 'Anteprima in Tempo Reale', 'feature_realtime_desc': 'Visualizza le miniature delle pagine in tempo reale mentre organizzi i tuoi documenti PDF',
            'feature_no_software': 'Nessun Software Necessario', 'feature_no_software_desc': 'Funziona direttamente nel tuo browser - nessun download o installazione richiesti',
            'how_to_organize_title': 'Come Organizzare Pagine PDF', 'how_to_organize_subtitle': 'Semplice processo in 3 passaggi per organizzare documenti PDF',
            'step1_title': 'Carica File PDF', 'step1_desc': 'Seleziona o trascina il tuo file PDF per iniziare. Visualizza in anteprima tutte le pagine come miniature.',
            'step1_feature1': '• Supporta file fino a 50MB', 'step1_feature2': '• Anteprima pagina istantanea', 'step1_feature3': '• Supporto file multipli',
            'step2_title': 'Organizza Pagine', 'step2_desc': 'Trascina e rilascia le miniature delle pagine per riordinarle. Elimina le pagine indesiderate o ruota le pagine singole.',
            'step2_feature1': '• <strong>Trascina e Rilascia:</strong> Riordina facilmente le pagine', 'step2_feature2': '• <strong>Elimina:</strong> Rimuovi pagine indesiderate', 'step2_feature3': '• <strong>Ruota:</strong> Correggi l\'orientamento della pagina',
            'step3_title': 'Scarica PDF Organizzato', 'step3_desc': 'Elabora il tuo PDF e scarica la versione organizzata istantaneamente. La formattazione e la qualità sono preservate.',
            'step3_feature1': '• Elaborazione istantanea', 'step3_feature2': '• Qualità preservata', 'step3_feature3': '• Output nello stesso formato'
        },
        'tr': {
            'nav_tools': 'Araçlar', 'nav_features': 'Özellikler', 'nav_how_it_works': 'Nasıl Çalışır', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giriş Yap', 'btn_signup': 'Kayıt Ol', 'btn_profile': 'Profil', 'btn_logout': 'Çıkış Yap',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_organize': 'PDF Düzenleyici', 'organize_pdf_title': 'PDF Düzenle',
            'organize_pdf_description': 'Sezgisel sürükle ve bırak düzenleyicimizle PDF sayfalarını sıralayın, ekleyin ve silin. Sayfa küçük resimlerini sürükleyip bırakın ve PDF düzenleyicimizde sıralayın.',
            'drag_drop': 'Sürükle ve Bırak', 'sort_pages': 'Sayfaları Sırala', 'delete_pages': 'Sayfaları Sil', 'secure_100': '%100 Güvenli',
            'security_badge_organize': '%100 Güvenli - Dosyalar yerel olarak işlenir',
            'pdf_organizer_title': 'PDF Sayfa Düzenleyici Aracı', 'pdf_organizer_subtitle': 'PDF sayfalarınızı sürükle ve bırak işleviyle düzenleyin',
            'privacy_badge': '%100 istemci tarafı. Dosyalar asla cihazınızdan ayrılmaz.', 'upload_from_computer': 'Bilgisayardan Yükle', 'import_from_url': 'URL\'den İçe Aktar',
            'upload_text': 'PDF dosyalarınızı seçmek için tıklayın veya sürükleyip bırakın', 'upload_pdf_subtext': 'PDF dosyaları • 10 dosyaya kadar • Maksimum toplam: 50MB',
            'organize_title': 'Sayfaları Düzenle', 'organize_instructions': 'Sayfa küçük resimlerini yeniden düzenlemek için sürükleyip bırakın',
            'select_all': 'Tümünü Seç', 'deselect_all': 'Tümünün Seçimini Kaldır', 'delete_selected': 'Seçilenleri Sil', 'rotate_selected': 'Seçilenleri Döndür',
            'pages_selected': 'sayfa seçildi',
            'organize_pdf_btn': 'PDF\'yi Düzenle', 'hint_upload_files_first': 'Düzenlemeye başlamak için yukarıya bir PDF dosyası yükleyin',
            'download_pdf': 'PDF\'yi İndir', 'process_another': 'Başka Bir Dosya İşle',
            'processing_completed': 'İşlem tamamlandı!', 'pdf_ready': 'PDF\'niz indirmeye hazır', 'continue_to': 'Devam et...',
            'merge_pdf': 'PDF Birleştir', 'split_pdf': 'PDF Böl', 'rotate_pdf': 'PDF Döndür', 'compress_pdf': 'PDF Sıkıştır',
            'paste_url_placeholder': 'Dropbox veya Google Drive bağlantısını buraya yapıştırın...', 'import_file': 'Dosyayı İçe Aktar', 'downloading': 'İndiriliyor...',
            'supported_sources': 'Desteklenen kaynaklar:', 'dropbox_hint': 'Dropbox paylaşılan bağlantılar', 'gdrive_hint': 'Google Drive paylaşılan dosyalar', 'direct_url_hint': 'Doğrudan dosya URL\'leri',
            'language': 'Dil', 'footer_description': 'Hepsi bir arada PDF çözümünüz. PDF\'leri ücretsiz olarak çevrimiçi düzenleyin, dönüştürün, birleştirin ve yönetin.', 'footer_rights': 'Tüm hakları saklıdır.',
            'why_choose_title': 'Neden PDFrow PDF Organizer\'ı Seçmelisiniz?', 'why_choose_subtitle': 'Kolaylık ve hassasiyetle profesyonel PDF düzenleme',
            'feature_drag_drop': 'Sürükle ve Bırak', 'feature_drag_drop_desc': 'Sezgisel sürükle ve bırak işleviyle PDF sayfalarını kolayca yeniden düzenleyin',
            'feature_sort_pages': 'Sayfaları Sırala', 'feature_sort_pages_desc': 'Görsel küçük resimlerle sayfaları istediğiniz sırada düzenleyin',
            'feature_secure': '%100 Güvenli', 'feature_secure_desc': 'Dosyalarınız yerel olarak işlenir ve işlemden sonra otomatik olarak silinir',
            'feature_lightning_fast': 'Şimşek Hızında', 'feature_lightning_fast_desc': 'Optimize edilmiş işleme motorumuzla PDF sayfalarını anında düzenleyin',
            'feature_realtime': 'Gerçek Zamanlı Önizleme', 'feature_realtime_desc': 'PDF belgelerinizi düzenlerken sayfa küçük resimlerini gerçek zamanlı olarak görün',
            'feature_no_software': 'Yazılım Gerekmez', 'feature_no_software_desc': 'Doğrudan tarayıcınızda çalışır - indirme veya kurulum gerekmez',
            'how_to_organize_title': 'PDF Sayfaları Nasıl Düzenlenir', 'how_to_organize_subtitle': 'PDF belgelerini düzenlemek için basit 3 adımlı süreç',
            'step1_title': 'PDF Dosyası Yükle', 'step1_desc': 'Başlamak için PDF dosyanızı seçin veya sürükleyip bırakın. Tüm sayfaları küçük resim olarak önizleyin.',
            'step1_feature1': '• 50MB\'a kadar dosyaları destekler', 'step1_feature2': '• Anında sayfa önizlemesi', 'step1_feature3': '• Çoklu dosya desteği',
            'step2_title': 'Sayfaları Düzenle', 'step2_desc': 'Sayfa küçük resimlerini yeniden sıralamak için sürükleyip bırakın. İstenmeyen sayfaları silin veya tek sayfaları döndürün.',
            'step2_feature1': '• <strong>Sürükle ve Bırak:</strong> Sayfaları kolayca yeniden sıralayın', 'step2_feature2': '• <strong>Sil:</strong> İstenmeyen sayfaları kaldırın', 'step2_feature3': '• <strong>Döndür:</strong> Sayfa yönünü düzeltin',
            'step3_title': 'Düzenlenmiş PDF\'yi İndir', 'step3_desc': 'PDF\'nizi işleyin ve düzenlenmiş sürümü anında indirin. Biçimlendirmeniz ve kaliteniz korunur.',
            'step3_feature1': '• Anında işleme', 'step3_feature2': '• Kalite korunur', 'step3_feature3': '• Aynı format çıktısı'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Início', 'breadcrumb_organize': 'Organizador de PDF', 'organize_pdf_title': 'Organizar PDF',
            'organize_pdf_description': 'Classifique, adicione e exclua páginas PDF com nosso organizador intuitivo de arrastar e soltar. Arraste e solte as miniaturas de páginas e classifique-as em nosso organizador de PDF.',
            'drag_drop': 'Arrastar e Soltar', 'sort_pages': 'Classificar Páginas', 'delete_pages': 'Excluir Páginas', 'secure_100': '100% Seguro',
            'security_badge_organize': '100% Seguro - Arquivos processados localmente',
            'pdf_organizer_title': 'Ferramenta de Organização de Páginas PDF', 'pdf_organizer_subtitle': 'Organize suas páginas PDF com funcionalidade de arrastar e soltar',
            'privacy_badge': '100% no lado do cliente. Os arquivos nunca saem do seu dispositivo.', 'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'upload_text': 'Clique para selecionar ou arraste e solte seus arquivos PDF', 'upload_pdf_subtext': 'Arquivos PDF • Até 10 arquivos • Tamanho máximo total: 50MB',
            'organize_title': 'Organizar Páginas', 'organize_instructions': 'Arraste e solte miniaturas de páginas para reorganizá-las',
            'select_all': 'Selecionar Tudo', 'deselect_all': 'Desselecionar Tudo', 'delete_selected': 'Excluir Selecionados', 'rotate_selected': 'Girar Selecionados',
            'pages_selected': 'páginas selecionadas',
            'organize_pdf_btn': 'Organizar PDF', 'hint_upload_files_first': 'Carregue um arquivo PDF acima para começar a organizar',
            'download_pdf': 'Baixar PDF', 'process_another': 'Processar Outro',
            'processing_completed': 'Processamento concluído!', 'pdf_ready': 'Seu PDF está pronto para download', 'continue_to': 'Continuar para...',
            'merge_pdf': 'Mesclar PDF', 'split_pdf': 'Dividir PDF', 'rotate_pdf': 'Girar PDF', 'compress_pdf': 'Comprimir PDF',
            'paste_url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...', 'import_file': 'Importar Arquivo', 'downloading': 'Baixando...',
            'supported_sources': 'Fontes suportadas:', 'dropbox_hint': 'Links compartilhados do Dropbox', 'gdrive_hint': 'Arquivos compartilhados do Google Drive', 'direct_url_hint': 'URLs de arquivo direto',
            'language': 'Idioma', 'footer_description': 'Sua solução PDF completa. Edite, converta, mescle e gerencie PDFs online gratuitamente.', 'footer_rights': 'Todos os direitos reservados.',
            'why_choose_title': 'Por que Escolher PDFrow PDF Organizer?', 'why_choose_subtitle': 'Organização de PDF profissional com facilidade e precisão',
            'feature_drag_drop': 'Arrastar e Soltar', 'feature_drag_drop_desc': 'Reorganize facilmente as páginas PDF com funcionalidade intuitiva de arrastar e soltar',
            'feature_sort_pages': 'Classificar Páginas', 'feature_sort_pages_desc': 'Organize as páginas em qualquer ordem que você precise com miniaturas visuais',
            'feature_secure': '100% Seguro', 'feature_secure_desc': 'Seus arquivos são processados localmente e excluídos automaticamente após o processamento',
            'feature_lightning_fast': 'Super Rápido', 'feature_lightning_fast_desc': 'Organize páginas PDF instantaneamente com nosso mecanismo de processamento otimizado',
            'feature_realtime': 'Visualização em Tempo Real', 'feature_realtime_desc': 'Veja miniaturas de páginas em tempo real enquanto organiza seus documentos PDF',
            'feature_no_software': 'Nenhum Software Necessário', 'feature_no_software_desc': 'Funciona diretamente no seu navegador - sem downloads ou instalações necessárias',
            'how_to_organize_title': 'Como Organizar Páginas PDF', 'how_to_organize_subtitle': 'Processo simples de 3 etapas para organizar documentos PDF',
            'step1_title': 'Carregar Arquivo PDF', 'step1_desc': 'Selecione ou arraste e solte seu arquivo PDF para começar. Visualize todas as páginas como miniaturas.',
            'step1_feature1': '• Suporta arquivos de até 50MB', 'step1_feature2': '• Visualização de página instantânea', 'step1_feature3': '• Suporte a vários arquivos',
            'step2_title': 'Organizar Páginas', 'step2_desc': 'Arraste e solte miniaturas de páginas para reordená-las. Exclua páginas indesejadas ou gire páginas individuais.',
            'step2_feature1': '• <strong>Arrastar e Soltar:</strong> Reordene páginas facilmente', 'step2_feature2': '• <strong>Excluir:</strong> Remova páginas indesejadas', 'step2_feature3': '• <strong>Girar:</strong> Corrija a orientação da página',
            'step3_title': 'Baixar PDF Organizado', 'step3_desc': 'Processe seu PDF e baixe a versão organizada instantaneamente. Sua formatação e qualidade são preservadas.',
            'step3_feature1': '• Processamento instantâneo', 'step3_feature2': '• Qualidade preservada', 'step3_feature3': '• Saída no mesmo formato'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_organize': 'Организатор PDF', 'organize_pdf_title': 'Организовать PDF',
            'organize_pdf_description': 'Сортируйте, добавляйте и удаляйте страницы PDF с помощью нашего интуитивного организатора с перетаскиванием. Перетаскивайте миниатюры страниц и сортируйте их в нашем организаторе PDF.',
            'drag_drop': 'Перетаскивание', 'sort_pages': 'Сортировать Страницы', 'delete_pages': 'Удалить Страницы', 'secure_100': '100% Безопасно',
            'security_badge_organize': '100% Безопасно - Файлы обрабатываются локально',
            'pdf_organizer_title': 'Инструмент организации страниц PDF', 'pdf_organizer_subtitle': 'Организуйте свои страницы PDF с помощью функции перетаскивания',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.', 'upload_from_computer': 'Загрузить с компьютера', 'import_from_url': 'Импорт из URL',
            'upload_text': 'Нажмите, чтобы выбрать, или перетащите PDF-файлы', 'upload_pdf_subtext': 'PDF файлы • До 10 файлов • Максимальный общий размер: 50MB',
            'organize_title': 'Организовать Страницы', 'organize_instructions': 'Перетащите миниатюры страниц, чтобы изменить их порядок',
            'select_all': 'Выбрать Все', 'deselect_all': 'Снять Выделение', 'delete_selected': 'Удалить Выбранные', 'rotate_selected': 'Повернуть Выбранные',
            'pages_selected': 'страниц выбрано',
            'organize_pdf_btn': 'Организовать PDF', 'hint_upload_files_first': 'Загрузите PDF-файл выше, чтобы начать организацию',
            'download_pdf': 'Скачать PDF', 'process_another': 'Обработать Другой',
            'processing_completed': 'Обработка завершена!', 'pdf_ready': 'Ваш PDF готов к загрузке', 'continue_to': 'Продолжить к...',
            'merge_pdf': 'Объединить PDF', 'split_pdf': 'Разделить PDF', 'rotate_pdf': 'Повернуть PDF', 'compress_pdf': 'Сжать PDF',
            'paste_url_placeholder': 'Вставьте ссылку Dropbox или Google Drive сюда...', 'import_file': 'Импортировать Файл', 'downloading': 'Загрузка...',
            'supported_sources': 'Поддерживаемые источники:', 'dropbox_hint': 'Общие ссылки Dropbox', 'gdrive_hint': 'Общие файлы Google Drive', 'direct_url_hint': 'Прямые URL файлов',
            'language': 'Язык', 'footer_description': 'Ваше универсальное PDF-решение. Редактируйте, конвертируйте, объединяйте и управляйте PDF онлайн бесплатно.', 'footer_rights': 'Все права защищены.',
            'why_choose_title': 'Почему Выбирают PDFrow PDF Organizer?', 'why_choose_subtitle': 'Профессиональная организация PDF с легкостью и точностью',
            'feature_drag_drop': 'Перетаскивание', 'feature_drag_drop_desc': 'Легко переупорядочивайте страницы PDF с помощью интуитивной функции перетаскивания',
            'feature_sort_pages': 'Сортировать Страницы', 'feature_sort_pages_desc': 'Организуйте страницы в любом нужном вам порядке с визуальными миниатюрами',
            'feature_secure': '100% Безопасно', 'feature_secure_desc': 'Ваши файлы обрабатываются локально и автоматически удаляются после обработки',
            'feature_lightning_fast': 'Молниеносно Быстро', 'feature_lightning_fast_desc': 'Организуйте страницы PDF мгновенно с помощью нашего оптимизированного движка обработки',
            'feature_realtime': 'Просмотр в Реальном Времени', 'feature_realtime_desc': 'Просматривайте миниатюры страниц в реальном времени при организации PDF-документов',
            'feature_no_software': 'Программное Обеспечение Не Требуется', 'feature_no_software_desc': 'Работает прямо в вашем браузере - не требуется загрузок или установок',
            'how_to_organize_title': 'Как Организовать Страницы PDF', 'how_to_organize_subtitle': 'Простой процесс из 3 шагов для организации PDF-документов',
            'step1_title': 'Загрузить PDF-файл', 'step1_desc': 'Выберите или перетащите PDF-файл, чтобы начать. Просмотрите все страницы в виде миниатюр.',
            'step1_feature1': '• Поддержка файлов до 50MB', 'step1_feature2': '• Мгновенный просмотр страниц', 'step1_feature3': '• Поддержка нескольких файлов',
            'step2_title': 'Организовать Страницы', 'step2_desc': 'Перетащите миниатюры страниц, чтобы изменить их порядок. Удалите ненужные страницы или поверните отдельные страницы.',
            'step2_feature1': '• <strong>Перетаскивание:</strong> Легко переупорядочить страницы', 'step2_feature2': '• <strong>Удалить:</strong> Убрать ненужные страницы', 'step2_feature3': '• <strong>Повернуть:</strong> Исправить ориентацию страницы',
            'step3_title': 'Скачать Организованный PDF', 'step3_desc': 'Обработайте свой PDF и загрузите организованную версию мгновенно. Ваше форматирование и качество сохраняются.',
            'step3_feature1': '• Мгновенная обработка', 'step3_feature2': '• Качество сохранено', 'step3_feature3': '• Вывод в том же формате'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_organize': 'PDF整理器', 'organize_pdf_title': '整理PDF',
            'organize_pdf_description': '使用我们直观的拖放整理器对PDF页面进行排序、添加和删除。拖放页面缩略图并在我们的PDF整理器中对它们进行排序。',
            'drag_drop': '拖放', 'sort_pages': '排序页面', 'delete_pages': '删除页面', 'secure_100': '100%安全',
            'security_badge_organize': '100%安全 - 文件在本地处理',
            'pdf_organizer_title': 'PDF页面整理工具', 'pdf_organizer_subtitle': '使用拖放功能整理您的PDF页面',
            'privacy_badge': '100%客户端处理。文件永远不会离开您的设备。', 'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'upload_text': '点击选择或拖放您的PDF文件', 'upload_pdf_subtext': 'PDF文件 • 最多10个文件 • 最大总大小：50MB',
            'organize_title': '整理页面', 'organize_instructions': '拖放页面缩略图以重新排列它们',
            'select_all': '全选', 'deselect_all': '取消全选', 'delete_selected': '删除已选', 'rotate_selected': '旋转已选',
            'pages_selected': '页已选择',
            'organize_pdf_btn': '整理PDF', 'hint_upload_files_first': '在上方上传PDF文件以开始整理',
            'download_pdf': '下载PDF', 'process_another': '处理另一个',
            'processing_completed': '处理完成！', 'pdf_ready': '您的PDF已准备好下载', 'continue_to': '继续到...',
            'merge_pdf': '合并PDF', 'split_pdf': '拆分PDF', 'rotate_pdf': '旋转PDF', 'compress_pdf': '压缩PDF',
            'paste_url_placeholder': '在此粘贴Dropbox或Google Drive链接...', 'import_file': '导入文件', 'downloading': '下载中...',
            'supported_sources': '支持的来源：', 'dropbox_hint': 'Dropbox共享链接', 'gdrive_hint': 'Google Drive共享文件', 'direct_url_hint': '直接文件URL',
            'language': '语言', 'footer_description': '您的一体化PDF解决方案。免费在线编辑、转换、合并和管理PDF。', 'footer_rights': '版权所有。',
            'why_choose_title': '为什么选择PDFrow PDF整理器？', 'why_choose_subtitle': '轻松精确的专业PDF整理',
            'feature_drag_drop': '拖放', 'feature_drag_drop_desc': '使用直观的拖放功能轻松重新排列PDF页面',
            'feature_sort_pages': '排序页面', 'feature_sort_pages_desc': '使用可视缩略图按您需要的任何顺序整理页面',
            'feature_secure': '100%安全', 'feature_secure_desc': '您的文件在本地处理，处理后自动删除',
            'feature_lightning_fast': '闪电般快速', 'feature_lightning_fast_desc': '使用我们优化的处理引擎即时整理PDF页面',
            'feature_realtime': '实时预览', 'feature_realtime_desc': '在整理PDF文档时实时查看页面缩略图',
            'feature_no_software': '无需软件', 'feature_no_software_desc': '直接在浏览器中工作 - 无需下载或安装',
            'how_to_organize_title': '如何整理PDF页面', 'how_to_organize_subtitle': '整理PDF文档的简单3步流程',
            'step1_title': '上传PDF文件', 'step1_desc': '选择或拖放您的PDF文件开始。以缩略图形式预览所有页面。',
            'step1_feature1': '• 支持最大50MB文件', 'step1_feature2': '• 即时页面预览', 'step1_feature3': '• 多文件支持',
            'step2_title': '整理页面', 'step2_desc': '拖放页面缩略图以重新排序它们。删除不需要的页面或旋转单个页面。',
            'step2_feature1': '• <strong>拖放：</strong>轻松重新排序页面', 'step2_feature2': '• <strong>删除：</strong>删除不需要的页面', 'step2_feature3': '• <strong>旋转：</strong>修正页面方向',
            'step3_title': '下载整理的PDF', 'step3_desc': '处理您的PDF并立即下载整理版本。保留您的格式和质量。',
            'step3_feature1': '• 即时处理', 'step3_feature2': '• 质量保留', 'step3_feature3': '• 相同格式输出'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_organize': 'PDFオーガナイザー', 'organize_pdf_title': 'PDFを整理',
            'organize_pdf_description': '直感的なドラッグアンドドロップオーガナイザーでPDFページを並べ替え、追加、削除します。ページのサムネイルをドラッグアンドドロップして、PDFオーガナイザーで並べ替えます。',
            'drag_drop': 'ドラッグ＆ドロップ', 'sort_pages': 'ページを並べ替え', 'delete_pages': 'ページを削除', 'secure_100': '100%安全',
            'security_badge_organize': '100%安全 - ファイルはローカルで処理されます',
            'pdf_organizer_title': 'PDFページオーガナイザーツール', 'pdf_organizer_subtitle': 'ドラッグアンドドロップ機能でPDFページを整理',
            'privacy_badge': '100%クライアント側処理。ファイルがデバイスから離れることはありません。', 'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'upload_text': 'クリックして選択するか、PDFファイルをドラッグ＆ドロップ', 'upload_pdf_subtext': 'PDFファイル • 最大10ファイル • 最大合計サイズ：50MB',
            'organize_title': 'ページを整理', 'organize_instructions': 'ページのサムネイルをドラッグアンドドロップして再配置します',
            'select_all': 'すべて選択', 'deselect_all': 'すべて選択解除', 'delete_selected': '選択を削除', 'rotate_selected': '選択を回転',
            'pages_selected': 'ページが選択されました',
            'organize_pdf_btn': 'PDFを整理', 'hint_upload_files_first': '整理を開始するには、上記にPDFファイルをアップロードしてください',
            'download_pdf': 'PDFをダウンロード', 'process_another': '別のものを処理',
            'processing_completed': '処理完了！', 'pdf_ready': 'PDFのダウンロード準備ができました', 'continue_to': '続行...',
            'merge_pdf': 'PDFを結合', 'split_pdf': 'PDFを分割', 'rotate_pdf': 'PDFを回転', 'compress_pdf': 'PDFを圧縮',
            'paste_url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付けます...', 'import_file': 'ファイルをインポート', 'downloading': 'ダウンロード中...',
            'supported_sources': 'サポートされているソース：', 'dropbox_hint': 'Dropbox共有リンク', 'gdrive_hint': 'Google Drive共有ファイル', 'direct_url_hint': '直接ファイルURL',
            'language': '言語', 'footer_description': 'オールインワンPDFソリューション。PDFを無料でオンライン編集、変換、結合、管理できます。', 'footer_rights': '全著作権所有。',
            'why_choose_title': 'なぜPDFrow PDF Organizerを選ぶのか？', 'why_choose_subtitle': '簡単で正確なプロフェッショナルPDF整理',
            'feature_drag_drop': 'ドラッグ＆ドロップ', 'feature_drag_drop_desc': '直感的なドラッグアンドドロップ機能でPDFページを簡単に再配置',
            'feature_sort_pages': 'ページを並べ替え', 'feature_sort_pages_desc': 'ビジュアルサムネイルで必要な順序でページを整理',
            'feature_secure': '100%安全', 'feature_secure_desc': 'ファイルはローカルで処理され、処理後に自動的に削除されます',
            'feature_lightning_fast': '超高速', 'feature_lightning_fast_desc': '最適化された処理エンジンでPDFページを即座に整理',
            'feature_realtime': 'リアルタイムプレビュー', 'feature_realtime_desc': 'PDF文書を整理しながらリアルタイムでページのサムネイルを表示',
            'feature_no_software': 'ソフトウェア不要', 'feature_no_software_desc': 'ブラウザで直接動作 - ダウンロードやインストール不要',
            'how_to_organize_title': 'PDFページの整理方法', 'how_to_organize_subtitle': 'PDF文書を整理するシンプルな3ステッププロセス',
            'step1_title': 'PDFファイルをアップロード', 'step1_desc': 'PDFファイルを選択またはドラッグ＆ドロップして開始。すべてのページをサムネイルとしてプレビュー。',
            'step1_feature1': '• 最大50MBのファイルをサポート', 'step1_feature2': '• 即座のページプレビュー', 'step1_feature3': '• 複数ファイルのサポート',
            'step2_title': 'ページを整理', 'step2_desc': 'ページのサムネイルをドラッグアンドドロップして並べ替えます。不要なページを削除するか、個別のページを回転します。',
            'step2_feature1': '• <strong>ドラッグ＆ドロップ：</strong>ページを簡単に並べ替え', 'step2_feature2': '• <strong>削除：</strong>不要なページを削除', 'step2_feature3': '• <strong>回転：</strong>ページの向きを修正',
            'step3_title': '整理されたPDFをダウンロード', 'step3_desc': 'PDFを処理し、整理されたバージョンを即座にダウンロード。形式と品質が保持されます。',
            'step3_feature1': '• 即座の処理', 'step3_feature2': '• 品質保持', 'step3_feature3': '• 同じ形式の出力'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'المميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_organize': 'منظم PDF', 'organize_pdf_title': 'تنظيم PDF',
            'organize_pdf_description': 'قم بفرز وإضافة وحذف صفحات PDF باستخدام منظمنا البديهي بالسحب والإفلات. اسحب وأفلت صور مصغرة للصفحات ورتبها في منظم PDF الخاص بنا.',
            'drag_drop': 'السحب والإفلات', 'sort_pages': 'فرز الصفحات', 'delete_pages': 'حذف الصفحات', 'secure_100': 'آمن 100%',
            'security_badge_organize': 'آمن 100% - تتم معالجة الملفات محلياً',
            'pdf_organizer_title': 'أداة تنظيم صفحات PDF', 'pdf_organizer_subtitle': 'نظم صفحات PDF الخاصة بك مع وظيفة السحب والإفلات',
            'privacy_badge': '100% من جانب العميل. لا تغادر الملفات جهازك أبداً.', 'upload_from_computer': 'التحميل من الكمبيوتر', 'import_from_url': 'استيراد من URL',
            'upload_text': 'انقر للتحديد أو اسحب وأفلت ملفات PDF الخاصة بك', 'upload_pdf_subtext': 'ملفات PDF • حتى 10 ملفات • الحد الأقصى للحجم الإجمالي: 50 ميجابايت',
            'organize_title': 'تنظيم الصفحات', 'organize_instructions': 'اسحب وأفلت الصور المصغرة للصفحات لإعادة ترتيبها',
            'select_all': 'تحديد الكل', 'deselect_all': 'إلغاء تحديد الكل', 'delete_selected': 'حذف المحدد', 'rotate_selected': 'تدوير المحدد',
            'pages_selected': 'صفحات محددة',
            'organize_pdf_btn': 'تنظيم PDF', 'hint_upload_files_first': 'قم بتحميل ملف PDF أعلاه لبدء التنظيم',
            'download_pdf': 'تنزيل PDF', 'process_another': 'معالجة آخر',
            'processing_completed': 'اكتملت المعالجة!', 'pdf_ready': 'ملف PDF الخاص بك جاهز للتنزيل', 'continue_to': 'المتابعة إلى...',
            'merge_pdf': 'دمج PDF', 'split_pdf': 'تقسيم PDF', 'rotate_pdf': 'تدوير PDF', 'compress_pdf': 'ضغط PDF',
            'paste_url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...', 'import_file': 'استيراد ملف', 'downloading': 'جاري التنزيل...',
            'supported_sources': 'المصادر المدعومة:', 'dropbox_hint': 'روابط Dropbox المشتركة', 'gdrive_hint': 'ملفات Google Drive المشتركة', 'direct_url_hint': 'عناوين URL المباشرة للملفات',
            'language': 'اللغة', 'footer_description': 'حل PDF الشامل الخاص بك. قم بتحرير وتحويل ودمج وإدارة ملفات PDF عبر الإنترنت مجاناً.', 'footer_rights': 'جميع الحقوق محفوظة.',
            'why_choose_title': 'لماذا تختار PDFrow PDF Organizer؟', 'why_choose_subtitle': 'تنظيم PDF احترافي بسهولة ودقة',
            'feature_drag_drop': 'السحب والإفلات', 'feature_drag_drop_desc': 'أعد ترتيب صفحات PDF بسهولة باستخدام وظيفة السحب والإفلات البديهية',
            'feature_sort_pages': 'فرز الصفحات', 'feature_sort_pages_desc': 'نظم الصفحات بأي ترتيب تحتاجه مع الصور المصغرة المرئية',
            'feature_secure': 'آمن 100%', 'feature_secure_desc': 'تتم معالجة ملفاتك محلياً وحذفها تلقائياً بعد المعالجة',
            'feature_lightning_fast': 'سريع كالبرق', 'feature_lightning_fast_desc': 'نظم صفحات PDF على الفور باستخدام محرك المعالجة المُحسَّن لدينا',
            'feature_realtime': 'معاينة في الوقت الفعلي', 'feature_realtime_desc': 'شاهد الصور المصغرة للصفحات في الوقت الفعلي أثناء تنظيم مستندات PDF الخاصة بك',
            'feature_no_software': 'لا حاجة لبرنامج', 'feature_no_software_desc': 'يعمل مباشرة في متصفحك - لا حاجة للتنزيلات أو التثبيتات',
            'how_to_organize_title': 'كيفية تنظيم صفحات PDF', 'how_to_organize_subtitle': 'عملية بسيطة من 3 خطوات لتنظيم مستندات PDF',
            'step1_title': 'تحميل ملف PDF', 'step1_desc': 'حدد أو اسحب وأفلت ملف PDF الخاص بك للبدء. عاين جميع الصفحات كصور مصغرة.',
            'step1_feature1': '• يدعم الملفات حتى 50 ميجابايت', 'step1_feature2': '• معاينة صفحة فورية', 'step1_feature3': '• دعم ملفات متعددة',
            'step2_title': 'تنظيم الصفحات', 'step2_desc': 'اسحب وأفلت الصور المصغرة للصفحات لإعادة ترتيبها. احذف الصفحات غير المرغوب فيها أو قم بتدوير صفحات فردية.',
            'step2_feature1': '• <strong>السحب والإفلات:</strong> إعادة ترتيب الصفحات بسهولة', 'step2_feature2': '• <strong>حذف:</strong> إزالة الصفحات غير المرغوب فيها', 'step2_feature3': '• <strong>تدوير:</strong> تصحيح اتجاه الصفحة',
            'step3_title': 'تنزيل PDF المنظم', 'step3_desc': 'عالج ملف PDF الخاص بك وقم بتنزيل النسخة المنظمة على الفور. يتم الحفاظ على التنسيق والجودة.',
            'step3_feature1': '• معالجة فورية', 'step3_feature2': '• الجودة محفوظة', 'step3_feature3': '• إخراج بنفس التنسيق'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'FAQ',
            'btn_login': 'लॉग इन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफ़ाइल', 'btn_logout': 'लॉग आउट',
            'breadcrumb_home': 'होम', 'breadcrumb_organize': 'PDF आयोजक', 'organize_pdf_title': 'PDF व्यवस्थित करें',
            'organize_pdf_description': 'हमारे सहज ड्रैग एंड ड्रॉप आयोजक के साथ PDF पृष्ठों को क्रमबद्ध करें, जोड़ें और हटाएं। पृष्ठ थंबनेल को ड्रैग और ड्रॉप करें और उन्हें हमारे PDF आयोजक में क्रमबद्ध करें।',
            'drag_drop': 'ड्रैग और ड्रॉप', 'sort_pages': 'पृष्ठों को क्रमबद्ध करें', 'delete_pages': 'पृष्ठ हटाएं', 'secure_100': '100% सुरक्षित',
            'security_badge_organize': '100% सुरक्षित - फ़ाइलें स्थानीय रूप से संसाधित',
            'pdf_organizer_title': 'PDF पेज आयोजक उपकरण', 'pdf_organizer_subtitle': 'ड्रैग एंड ड्रॉप कार्यक्षमता के साथ अपने PDF पृष्ठों को व्यवस्थित करें',
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी आपके डिवाइस को नहीं छोड़तीं।', 'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से आयात करें',
            'upload_text': 'अपनी PDF फ़ाइलों का चयन करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें', 'upload_pdf_subtext': 'PDF फ़ाइलें • 10 फ़ाइलों तक • अधिकतम कुल आकार: 50MB',
            'organize_title': 'पृष्ठ व्यवस्थित करें', 'organize_instructions': 'पृष्ठ थंबनेल को पुनर्व्यवस्थित करने के लिए ड्रैग और ड्रॉप करें',
            'select_all': 'सभी चुनें', 'deselect_all': 'सभी का चयन रद्द करें', 'delete_selected': 'चयनित हटाएं', 'rotate_selected': 'चयनित घुमाएं',
            'pages_selected': 'पृष्ठ चयनित',
            'organize_pdf_btn': 'PDF व्यवस्थित करें', 'hint_upload_files_first': 'व्यवस्थित करना शुरू करने के लिए ऊपर एक PDF फ़ाइल अपलोड करें',
            'download_pdf': 'PDF डाउनलोड करें', 'process_another': 'दूसरा प्रोसेस करें',
            'processing_completed': 'प्रसंस्करण पूर्ण!', 'pdf_ready': 'आपकी PDF डाउनलोड के लिए तैयार है', 'continue_to': 'जारी रखें...',
            'merge_pdf': 'PDF मर्ज करें', 'split_pdf': 'PDF विभाजित करें', 'rotate_pdf': 'PDF घुमाएं', 'compress_pdf': 'PDF संपीड़ित करें',
            'paste_url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...', 'import_file': 'फ़ाइल आयात करें', 'downloading': 'डाउनलोड हो रहा है...',
            'supported_sources': 'समर्थित स्रोत:', 'dropbox_hint': 'Dropbox साझा लिंक', 'gdrive_hint': 'Google Drive साझा फ़ाइलें', 'direct_url_hint': 'सीधे फ़ाइल URLs',
            'language': 'भाषा', 'footer_description': 'आपका ऑल-इन-वन PDF समाधान। PDF को मुफ्त में ऑनलाइन संपादित, परिवर्तित, मर्ज और प्रबंधित करें।', 'footer_rights': 'सर्वाधिकार सुरक्षित।',
            'why_choose_title': 'PDFrow PDF Organizer को क्यों चुनें?', 'why_choose_subtitle': 'आसानी और सटीकता के साथ पेशेवर PDF संगठन',
            'feature_drag_drop': 'ड्रैग और ड्रॉप', 'feature_drag_drop_desc': 'सहज ड्रैग एंड ड्रॉप कार्यक्षमता के साथ PDF पृष्ठों को आसानी से पुनर्व्यवस्थित करें',
            'feature_sort_pages': 'पृष्ठों को क्रमबद्ध करें', 'feature_sort_pages_desc': 'विज़ुअल थंबनेल के साथ किसी भी क्रम में पृष्ठों को व्यवस्थित करें',
            'feature_secure': '100% सुरक्षित', 'feature_secure_desc': 'आपकी फ़ाइलें स्थानीय रूप से संसाधित होती हैं और प्रसंस्करण के बाद स्वचालित रूप से हटा दी जाती हैं',
            'feature_lightning_fast': 'बिजली की तेज़', 'feature_lightning_fast_desc': 'हमारे अनुकूलित प्रोसेसिंग इंजन के साथ तुरंत PDF पृष्ठों को व्यवस्थित करें',
            'feature_realtime': 'रीयल-टाइम पूर्वावलोकन', 'feature_realtime_desc': 'अपने PDF दस्तावेज़ों को व्यवस्थित करते समय रीयल-टाइम में पृष्ठ थंबनेल देखें',
            'feature_no_software': 'कोई सॉफ़्टवेयर की आवश्यकता नहीं', 'feature_no_software_desc': 'सीधे आपके ब्राउज़र में काम करता है - कोई डाउनलोड या इंस्टॉलेशन की आवश्यकता नहीं',
            'how_to_organize_title': 'PDF पृष्ठों को कैसे व्यवस्थित करें', 'how_to_organize_subtitle': 'PDF दस्तावेज़ों को व्यवस्थित करने के लिए सरल 3-चरणीय प्रक्रिया',
            'step1_title': 'PDF फ़ाइल अपलोड करें', 'step1_desc': 'शुरू करने के लिए अपनी PDF फ़ाइल का चयन करें या ड्रैग और ड्रॉप करें। सभी पृष्ठों को थंबनेल के रूप में पूर्वावलोकन करें।',
            'step1_feature1': '• 50MB तक की फ़ाइलों का समर्थन करता है', 'step1_feature2': '• तत्काल पृष्ठ पूर्वावलोकन', 'step1_feature3': '• एकाधिक फ़ाइल समर्थन',
            'step2_title': 'पृष्ठ व्यवस्थित करें', 'step2_desc': 'पृष्ठ थंबनेल को पुनः क्रमबद्ध करने के लिए ड्रैग और ड्रॉप करें। अवांछित पृष्ठों को हटाएं या व्यक्तिगत पृष्ठों को घुमाएं।',
            'step2_feature1': '• <strong>ड्रैग और ड्रॉप:</strong> पृष्ठों को आसानी से पुनः क्रमबद्ध करें', 'step2_feature2': '• <strong>हटाएं:</strong> अवांछित पृष्ठों को हटाएं', 'step2_feature3': '• <strong>घुमाएं:</strong> पृष्ठ अभिविन्यास ठीक करें',
            'step3_title': 'व्यवस्थित PDF डाउनलोड करें', 'step3_desc': 'अपनी PDF को प्रोसेस करें और व्यवस्थित संस्करण को तुरंत डाउनलोड करें। आपका स्वरूपण और गुणवत्ता संरक्षित है।',
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
