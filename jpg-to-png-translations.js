// Translation system for jpg-to-png.html
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
            'breadcrumb_current': 'JPG to PNG Converter',
            'page_title': 'JPG to PNG Converter',
            'page_description': 'Convert JPG images to PNG format with transparency support. Maintain high quality while gaining the benefits of the PNG format. Perfect for graphics and web design.',
            'feature_lossless': 'Lossless Quality',
            'feature_transparency': 'Transparency Support',
            'feature_batch': 'Batch Convert',
            'feature_secure': '100% Secure',
            'security_badge': '100% Secure - Files processed locally',

            // Tool Section
            'section_title': 'JPG to PNG Converter',
            'section_subtitle': 'Convert your JPG images to PNG format with transparency support',
            'privacy_badge': '100% client-side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',
            'url_placeholder': 'Paste Dropbox or Google Drive link here...',
            'import_file_btn': 'Import File',
            'download_status': 'Downloading...',
            'supported_services': 'Supported Services:',
            'service_dropbox': 'Dropbox: Share link and paste here',
            'service_gdrive': 'Google Drive: Get shareable link (Anyone with the link can view)',
            'service_direct': 'Direct image URLs (JPG/JPEG format only)',
            'max_file_size': 'Maximum file size: 50MB',
            'drop_jpg_files': 'Drop JPG files here',
            'or_click_browse': 'or click to browse',
            'upload_subtext': 'JPG/JPEG files - Up to 10 files - Max 50MB total batch size',

            // Convert Section
            'convert_to_png': 'Convert to PNG',
            'hint_upload_files_first': 'Upload JPG files above to enable conversion',

            // Success State
            'success_title': 'Conversion completed!',
            'success_description': 'Your files are ready for download',
            'download_files': 'Download Files',
            'convert_another': 'Convert Another',

            // Why Choose Section
            'why_choose_title': 'Why Choose PDFrow JPG to PNG Converter?',
            'why_choose_subtitle': 'Fast, secure, and high-quality image conversion',
            'feature_lightning_fast_title': 'Lightning Fast',
            'feature_lightning_fast_desc': 'Convert JPG images to PNG in seconds with our optimized conversion engine',
            'feature_secure_title': '100% Secure',
            'feature_secure_desc': 'Your files are processed locally and automatically deleted after processing',
            'feature_transparency_title': 'Transparency Support',
            'feature_transparency_desc': 'PNG format supports transparency for professional graphics and web design',
            'feature_no_software_title': 'No Software Needed',
            'feature_no_software_desc': 'Works directly in your browser - no downloads or installations required',

            // How It Works Section
            'how_to_title': 'How to Convert JPG to PNG',
            'how_to_subtitle': 'Simple 3-step process to convert your images',
            'step1_title': 'Upload JPG',
            'step1_desc': 'Select or drag and drop your JPG files to get started',
            'step2_title': 'Convert',
            'step2_desc': 'Our tool automatically converts your JPG images to PNG format',
            'step3_title': 'Download',
            'step3_desc': 'Get your converted PNG images with transparency support',

            // Footer
            'language': 'Language',
            'footer_description': 'Your all-in-one PDF solution. Edit, convert, merge, and manage PDFs online for free.',
            'footer_tools': 'Tools',
            'footer_company': 'Company',
            'footer_resources': 'Resources',
            'footer_rights': 'All rights reserved.'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Caracteristicas', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesion', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesion',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Convertidor JPG a PNG', 'page_title': 'Convertidor JPG a PNG',
            'page_description': 'Convierte imagenes JPG a formato PNG con soporte de transparencia. Mantiene alta calidad mientras obtienes los beneficios del formato PNG. Perfecto para graficos y diseno web.',
            'feature_lossless': 'Calidad Sin Perdida', 'feature_transparency': 'Soporte de Transparencia', 'feature_batch': 'Conversion por Lotes', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Los archivos se procesan localmente',
            'section_title': 'Convertidor JPG a PNG', 'section_subtitle': 'Convierte tus imagenes JPG a formato PNG con soporte de transparencia',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.', 'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aqui...', 'import_file_btn': 'Importar Archivo', 'download_status': 'Descargando...',
            'supported_services': 'Servicios compatibles:', 'service_dropbox': 'Dropbox: Comparta el enlace y peguelo aqui', 'service_gdrive': 'Google Drive: Obtenga un enlace compartible (Cualquiera con el enlace puede ver)',
            'service_direct': 'URLs directas de imagenes (solo formato JPG/JPEG)', 'max_file_size': 'Tamano maximo de archivo: 50MB',
            'drop_jpg_files': 'Suelte archivos JPG aqui', 'or_click_browse': 'o haga clic para explorar', 'upload_subtext': 'Archivos JPG/JPEG - Hasta 10 archivos - Tamano maximo total del lote: 50MB',
            'convert_to_png': 'Convertir a PNG', 'hint_upload_files_first': 'Suba archivos JPG arriba para habilitar la conversion',
            'success_title': 'Conversion completada!', 'success_description': 'Sus archivos estan listos para descargar',
            'download_files': 'Descargar Archivos', 'convert_another': 'Convertir Otro',
            'why_choose_title': 'Por que elegir el convertidor JPG a PNG de PDFrow?', 'why_choose_subtitle': 'Conversion de imagenes rapida, segura y de alta calidad',
            'feature_lightning_fast_title': 'Ultra Rapido', 'feature_lightning_fast_desc': 'Convierte imagenes JPG a PNG en segundos con nuestro motor de conversion optimizado',
            'feature_secure_title': '100% Seguro', 'feature_secure_desc': 'Sus archivos se procesan localmente y se eliminan automaticamente despues del procesamiento',
            'feature_transparency_title': 'Soporte de Transparencia', 'feature_transparency_desc': 'El formato PNG admite transparencia para graficos profesionales y diseno web',
            'feature_no_software_title': 'No Se Necesita Software', 'feature_no_software_desc': 'Funciona directamente en su navegador: no se requieren descargas ni instalaciones',
            'how_to_title': 'Como Convertir JPG a PNG', 'how_to_subtitle': 'Proceso simple de 3 pasos para convertir sus imagenes',
            'step1_title': 'Subir JPG', 'step1_desc': 'Seleccione o arrastre y suelte sus archivos JPG para comenzar',
            'step2_title': 'Convertir', 'step2_desc': 'Nuestra herramienta convierte automaticamente sus imagenes JPG a formato PNG',
            'step3_title': 'Descargar', 'step3_desc': 'Obtenga sus imagenes PNG convertidas con soporte de transparencia',
            'language': 'Idioma', 'footer_description': 'Su solucion PDF todo en uno. Edite, convierta, combine y administre PDFs en linea gratis.', 'footer_tools': 'Herramientas', 'footer_company': 'Empresa', 'footer_resources': 'Recursos', 'footer_rights': 'Todos los derechos reservados.'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalites', 'nav_how_it_works': 'Comment Ca Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Deconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_current': 'Convertisseur JPG en PNG', 'page_title': 'Convertisseur JPG en PNG',
            'page_description': 'Convertissez des images JPG au format PNG avec support de la transparence. Maintenez une haute qualite tout en beneficiant des avantages du format PNG. Parfait pour les graphiques et le design web.',
            'feature_lossless': 'Qualite Sans Perte', 'feature_transparency': 'Support Transparence', 'feature_batch': 'Conversion par Lots', 'feature_secure': '100% Securise',
            'security_badge': '100% Securise - Les fichiers sont traites localement',
            'section_title': 'Convertisseur JPG en PNG', 'section_subtitle': 'Convertissez vos images JPG au format PNG avec support de la transparence',
            'privacy_badge': '100% cote client. Les fichiers ne quittent jamais votre appareil.', 'upload_from_computer': 'Telecharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...', 'import_file_btn': 'Importer le Fichier', 'download_status': 'Telechargement...',
            'supported_services': 'Services pris en charge:', 'service_dropbox': 'Dropbox: Partagez le lien et collez-le ici', 'service_gdrive': 'Google Drive: Obtenez un lien partageable (Toute personne disposant du lien peut voir)',
            'service_direct': 'URLs d\'images directes (format JPG/JPEG uniquement)', 'max_file_size': 'Taille maximale du fichier: 50MB',
            'drop_jpg_files': 'Deposez les fichiers JPG ici', 'or_click_browse': 'ou cliquez pour parcourir', 'upload_subtext': 'Fichiers JPG/JPEG - Jusqu\'a 10 fichiers - Taille maximale totale du lot: 50MB',
            'convert_to_png': 'Convertir en PNG', 'hint_upload_files_first': 'Telechargez des fichiers JPG ci-dessus pour activer la conversion',
            'success_title': 'Conversion terminee!', 'success_description': 'Vos fichiers sont prets au telechargement',
            'download_files': 'Telecharger les Fichiers', 'convert_another': 'Convertir un Autre',
            'why_choose_title': 'Pourquoi choisir le convertisseur JPG en PNG de PDFrow?', 'why_choose_subtitle': 'Conversion d\'images rapide, securisee et de haute qualite',
            'feature_lightning_fast_title': 'Ultra Rapide', 'feature_lightning_fast_desc': 'Convertissez des images JPG en PNG en quelques secondes avec notre moteur de conversion optimise',
            'feature_secure_title': '100% Securise', 'feature_secure_desc': 'Vos fichiers sont traites localement et automatiquement supprimes apres le traitement',
            'feature_transparency_title': 'Support Transparence', 'feature_transparency_desc': 'Le format PNG prend en charge la transparence pour les graphiques professionnels et le design web',
            'feature_no_software_title': 'Aucun Logiciel Requis', 'feature_no_software_desc': 'Fonctionne directement dans votre navigateur - aucun telechargement ni installation requis',
            'how_to_title': 'Comment Convertir JPG en PNG', 'how_to_subtitle': 'Processus simple en 3 etapes pour convertir vos images',
            'step1_title': 'Telecharger JPG', 'step1_desc': 'Selectionnez ou glissez-deposez vos fichiers JPG pour commencer',
            'step2_title': 'Convertir', 'step2_desc': 'Notre outil convertit automatiquement vos images JPG au format PNG',
            'step3_title': 'Telecharger', 'step3_desc': 'Obtenez vos images PNG converties avec support de la transparence',
            'language': 'Langue', 'footer_description': 'Votre solution PDF tout-en-un. Modifiez, convertissez, fusionnez et gerez des PDFs en ligne gratuitement.', 'footer_tools': 'Outils', 'footer_company': 'Societe', 'footer_resources': 'Ressources', 'footer_rights': 'Tous droits reserves.'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_current': 'JPG zu PNG Konverter', 'page_title': 'JPG zu PNG Konverter',
            'page_description': 'Konvertieren Sie JPG-Bilder in das PNG-Format mit Transparenzunterstutzung. Behalten Sie hohe Qualitat bei und profitieren Sie von den Vorteilen des PNG-Formats. Perfekt fur Grafiken und Webdesign.',
            'feature_lossless': 'Verlustfreie Qualitat', 'feature_transparency': 'Transparenz-Support', 'feature_batch': 'Stapelkonvertierung', 'feature_secure': '100% Sicher',
            'security_badge': '100% Sicher - Dateien werden lokal verarbeitet',
            'section_title': 'JPG zu PNG Konverter', 'section_subtitle': 'Konvertieren Sie Ihre JPG-Bilder in das PNG-Format mit Transparenzunterstutzung',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerat.', 'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'url_placeholder': 'Dropbox- oder Google Drive-Link hier einfugen...', 'import_file_btn': 'Datei Importieren', 'download_status': 'Herunterladen...',
            'supported_services': 'Unterstutzte Dienste:', 'service_dropbox': 'Dropbox: Link teilen und hier einfugen', 'service_gdrive': 'Google Drive: Teilbaren Link abrufen (Jeder mit dem Link kann ansehen)',
            'service_direct': 'Direkte Bild-URLs (nur JPG/JPEG-Format)', 'max_file_size': 'Maximale Dateigrosse: 50MB',
            'drop_jpg_files': 'JPG-Dateien hier ablegen', 'or_click_browse': 'oder klicken zum Durchsuchen', 'upload_subtext': 'JPG/JPEG-Dateien - Bis zu 10 Dateien - Maximale Gesamtgrosse: 50MB',
            'convert_to_png': 'In PNG Konvertieren', 'hint_upload_files_first': 'Laden Sie JPG-Dateien oben hoch, um die Konvertierung zu aktivieren',
            'success_title': 'Konvertierung abgeschlossen!', 'success_description': 'Ihre Dateien sind zum Download bereit',
            'download_files': 'Dateien Herunterladen', 'convert_another': 'Weitere Konvertieren',
            'why_choose_title': 'Warum den PDFrow JPG zu PNG Konverter wahlen?', 'why_choose_subtitle': 'Schnelle, sichere und qualitativ hochwertige Bildkonvertierung',
            'feature_lightning_fast_title': 'Blitzschnell', 'feature_lightning_fast_desc': 'Konvertieren Sie JPG-Bilder in Sekunden in PNG mit unserer optimierten Konvertierungs-Engine',
            'feature_secure_title': '100% Sicher', 'feature_secure_desc': 'Ihre Dateien werden lokal verarbeitet und nach der Verarbeitung automatisch geloscht',
            'feature_transparency_title': 'Transparenz-Support', 'feature_transparency_desc': 'Das PNG-Format unterstutzt Transparenz fur professionelle Grafiken und Webdesign',
            'feature_no_software_title': 'Keine Software Erforderlich', 'feature_no_software_desc': 'Funktioniert direkt in Ihrem Browser - keine Downloads oder Installationen erforderlich',
            'how_to_title': 'So Konvertieren Sie JPG zu PNG', 'how_to_subtitle': 'Einfacher 3-Schritte-Prozess zur Konvertierung Ihrer Bilder',
            'step1_title': 'JPG Hochladen', 'step1_desc': 'Wahlen Sie Ihre JPG-Dateien aus oder ziehen Sie sie per Drag & Drop, um zu beginnen',
            'step2_title': 'Konvertieren', 'step2_desc': 'Unser Tool konvertiert Ihre JPG-Bilder automatisch in das PNG-Format',
            'step3_title': 'Herunterladen', 'step3_desc': 'Erhalten Sie Ihre konvertierten PNG-Bilder mit Transparenzunterstutzung',
            'language': 'Sprache', 'footer_description': 'Ihre All-in-One-PDF-Losung. Bearbeiten, konvertieren, zusammenfuhren und verwalten Sie PDFs online kostenlos.', 'footer_tools': 'Werkzeuge', 'footer_company': 'Unternehmen', 'footer_resources': 'Ressourcen', 'footer_rights': 'Alle Rechte vorbehalten.'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_current': 'Convertitore JPG in PNG', 'page_title': 'Convertitore JPG in PNG',
            'page_description': 'Converti immagini JPG in formato PNG con supporto della trasparenza. Mantieni l\'alta qualita ottenendo i vantaggi del formato PNG. Perfetto per grafica e web design.',
            'feature_lossless': 'Qualita Senza Perdita', 'feature_transparency': 'Supporto Trasparenza', 'feature_batch': 'Conversione in Batch', 'feature_secure': '100% Sicuro',
            'security_badge': '100% Sicuro - File elaborati localmente',
            'section_title': 'Convertitore JPG in PNG', 'section_subtitle': 'Converti le tue immagini JPG in formato PNG con supporto della trasparenza',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.', 'upload_from_computer': 'Carica dal Computer', 'import_from_url': 'Importa da URL',
            'url_placeholder': 'Incolla il link di Dropbox o Google Drive qui...', 'import_file_btn': 'Importa File', 'download_status': 'Download in corso...',
            'supported_services': 'Servizi supportati:', 'service_dropbox': 'Dropbox: Condividi il link e incollalo qui', 'service_gdrive': 'Google Drive: Ottieni link condivisibile (Chiunque abbia il link puo vedere)',
            'service_direct': 'URL immagini dirette (solo formato JPG/JPEG)', 'max_file_size': 'Dimensione massima del file: 50MB',
            'drop_jpg_files': 'Trascina i file JPG qui', 'or_click_browse': 'o clicca per sfogliare', 'upload_subtext': 'File JPG/JPEG - Fino a 10 file - Dimensione totale massima: 50MB',
            'convert_to_png': 'Converti in PNG', 'hint_upload_files_first': 'Carica file JPG sopra per abilitare la conversione',
            'success_title': 'Conversione completata!', 'success_description': 'I tuoi file sono pronti per il download',
            'download_files': 'Scarica File', 'convert_another': 'Converti un Altro',
            'why_choose_title': 'Perche Scegliere il Convertitore JPG in PNG di PDFrow?', 'why_choose_subtitle': 'Conversione di immagini veloce, sicura e di alta qualita',
            'feature_lightning_fast_title': 'Fulmineo', 'feature_lightning_fast_desc': 'Converti immagini JPG in PNG in pochi secondi con il nostro motore di conversione ottimizzato',
            'feature_secure_title': '100% Sicuro', 'feature_secure_desc': 'I tuoi file vengono elaborati localmente e cancellati automaticamente dopo l\'elaborazione',
            'feature_transparency_title': 'Supporto Trasparenza', 'feature_transparency_desc': 'Il formato PNG supporta la trasparenza per grafica professionale e web design',
            'feature_no_software_title': 'Nessun Software Necessario', 'feature_no_software_desc': 'Funziona direttamente nel tuo browser - nessun download o installazione richiesta',
            'how_to_title': 'Come Convertire JPG in PNG', 'how_to_subtitle': 'Semplice processo in 3 passaggi per convertire le tue immagini',
            'step1_title': 'Carica JPG', 'step1_desc': 'Seleziona o trascina i tuoi file JPG per iniziare',
            'step2_title': 'Converti', 'step2_desc': 'Il nostro strumento converte automaticamente le tue immagini JPG in formato PNG',
            'step3_title': 'Scarica', 'step3_desc': 'Ottieni le tue immagini PNG convertite con supporto della trasparenza',
            'language': 'Lingua', 'footer_description': 'La tua soluzione PDF all-in-one. Modifica, converti, unisci e gestisci PDF online gratuitamente.', 'footer_tools': 'Strumenti', 'footer_company': 'Azienda', 'footer_resources': 'Risorse', 'footer_rights': 'Tutti i diritti riservati.'
        },
        'tr': {
            'nav_tools': 'Araclar', 'nav_features': 'Ozellikler', 'nav_how_it_works': 'Nasil Calisir', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giris Yap', 'btn_signup': 'Kayit Ol', 'btn_profile': 'Profil', 'btn_logout': 'Cikis Yap',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_current': 'JPG\'den PNG\'ye Donusturucu', 'page_title': 'JPG\'den PNG\'ye Donusturucu',
            'page_description': 'JPG gorsellerini seffaflik destegi ile PNG formatina donusturun. PNG formatinin avantajlarindan yararlanirken yuksek kaliteyi koruyun. Grafikler ve web tasarimi icin mukemmel.',
            'feature_lossless': 'Kayipsiz Kalite', 'feature_transparency': 'Seffaflik Destegi', 'feature_batch': 'Toplu Donusturme', 'feature_secure': '%100 Guvenli',
            'security_badge': '%100 Guvenli - Dosyalar yerel olarak islenir',
            'section_title': 'JPG\'den PNG\'ye Donusturucu', 'section_subtitle': 'JPG gorsellerinizi seffaflik destegi ile PNG formatina donusturun',
            'privacy_badge': '%100 istemci tarafi. Dosyalar asla cihazinizdan ayrilmaz.', 'upload_from_computer': 'Bilgisayardan Yukle', 'import_from_url': 'URL\'den Ice Aktar',
            'url_placeholder': 'Dropbox veya Google Drive baglantisinizi buraya yapistirin...', 'import_file_btn': 'Dosyayi Ice Aktar', 'download_status': 'Indiriliyor...',
            'supported_services': 'Desteklenen servisler:', 'service_dropbox': 'Dropbox: Baglantinizi paylasin ve buraya yapistirin', 'service_gdrive': 'Google Drive: Paylasilabilir baglanti alin (Baglantiya sahip herkes gorebilir)',
            'service_direct': 'Dogrudan gorsel URL\'leri (yalnizca JPG/JPEG formati)', 'max_file_size': 'Maksimum dosya boyutu: 50MB',
            'drop_jpg_files': 'JPG dosyalarini buraya birakin', 'or_click_browse': 'veya gozatmak icin tiklayin', 'upload_subtext': 'JPG/JPEG dosyalari - 10 dosyaya kadar - Maksimum toplam: 50MB',
            'convert_to_png': 'PNG\'ye Donustur', 'hint_upload_files_first': 'Donusturmeyi etkinlestirmek icin yukariya JPG dosyalari yukleyin',
            'success_title': 'Donusturme tamamlandi!', 'success_description': 'Dosyalariniz indirilmeye hazir',
            'download_files': 'Dosyalari Indir', 'convert_another': 'Baskasini Donustur',
            'why_choose_title': 'Neden PDFrow JPG\'den PNG\'ye Donusturucuyu Secmelisiniz?', 'why_choose_subtitle': 'Hizli, guvenli ve yuksek kaliteli gorsel donusturme',
            'feature_lightning_fast_title': 'Simsek Hizinda', 'feature_lightning_fast_desc': 'Optimize edilmis donusturme motorumuzla JPG gorsellerini saniyeler icinde PNG\'ye donusturun',
            'feature_secure_title': '%100 Guvenli', 'feature_secure_desc': 'Dosyalariniz yerel olarak islenir ve islemden sonra otomatik olarak silinir',
            'feature_transparency_title': 'Seffaflik Destegi', 'feature_transparency_desc': 'PNG formati profesyonel grafikler ve web tasarimi icin seffafligi destekler',
            'feature_no_software_title': 'Yazilim Gerekmez', 'feature_no_software_desc': 'Dogrudan tarayicinizda calisir - indirme veya kurulum gerektirmez',
            'how_to_title': 'JPG\'den PNG\'ye Nasil Donusturulur', 'how_to_subtitle': 'Gorsellerinizi donusturmek icin basit 3 adimli surec',
            'step1_title': 'JPG Yukle', 'step1_desc': 'Baslamak icin JPG dosyalarinizi secin veya surukleyip birakin',
            'step2_title': 'Donustur', 'step2_desc': 'Aracimiz JPG gorsellerinizi otomatik olarak PNG formatina donusturur',
            'step3_title': 'Indir', 'step3_desc': 'Donusturulmus PNG gorsellerinizi seffaflik destegi ile alin',
            'language': 'Dil', 'footer_description': 'Hepsi bir arada PDF cozumunuz. PDF\'leri ucretsiz olarak cevrimici duzenleyin, donusturun, birlestirin ve yonetin.', 'footer_tools': 'Araclar', 'footer_company': 'Sirket', 'footer_resources': 'Kaynaklar', 'footer_rights': 'Tum haklari saklidir.'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Conversor JPG para PNG', 'page_title': 'Conversor JPG para PNG',
            'page_description': 'Converta imagens JPG para o formato PNG com suporte a transparencia. Mantenha a alta qualidade enquanto aproveita os beneficios do formato PNG. Perfeito para graficos e web design.',
            'feature_lossless': 'Qualidade Sem Perda', 'feature_transparency': 'Suporte a Transparencia', 'feature_batch': 'Conversao em Lote', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Arquivos processados localmente',
            'section_title': 'Conversor JPG para PNG', 'section_subtitle': 'Converta suas imagens JPG para o formato PNG com suporte a transparencia',
            'privacy_badge': '100% no lado do cliente. Os arquivos nunca saem do seu dispositivo.', 'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...', 'import_file_btn': 'Importar Arquivo', 'download_status': 'Baixando...',
            'supported_services': 'Servicos suportados:', 'service_dropbox': 'Dropbox: Compartilhe o link e cole aqui', 'service_gdrive': 'Google Drive: Obtenha link compartilhavel (Qualquer pessoa com o link pode ver)',
            'service_direct': 'URLs de imagens diretas (somente formato JPG/JPEG)', 'max_file_size': 'Tamanho maximo do arquivo: 50MB',
            'drop_jpg_files': 'Solte arquivos JPG aqui', 'or_click_browse': 'ou clique para navegar', 'upload_subtext': 'Arquivos JPG/JPEG - Ate 10 arquivos - Tamanho maximo total: 50MB',
            'convert_to_png': 'Converter para PNG', 'hint_upload_files_first': 'Carregue arquivos JPG acima para ativar a conversao',
            'success_title': 'Conversao concluida!', 'success_description': 'Seus arquivos estao prontos para download',
            'download_files': 'Baixar Arquivos', 'convert_another': 'Converter Outro',
            'why_choose_title': 'Por que Escolher o Conversor JPG para PNG do PDFrow?', 'why_choose_subtitle': 'Conversao de imagens rapida, segura e de alta qualidade',
            'feature_lightning_fast_title': 'Super Rapido', 'feature_lightning_fast_desc': 'Converta imagens JPG para PNG em segundos com nosso mecanismo de conversao otimizado',
            'feature_secure_title': '100% Seguro', 'feature_secure_desc': 'Seus arquivos sao processados localmente e excluidos automaticamente apos o processamento',
            'feature_transparency_title': 'Suporte a Transparencia', 'feature_transparency_desc': 'O formato PNG suporta transparencia para graficos profissionais e web design',
            'feature_no_software_title': 'Nenhum Software Necessario', 'feature_no_software_desc': 'Funciona diretamente em seu navegador - sem downloads ou instalacoes necessarias',
            'how_to_title': 'Como Converter JPG para PNG', 'how_to_subtitle': 'Processo simples de 3 etapas para converter suas imagens',
            'step1_title': 'Carregar JPG', 'step1_desc': 'Selecione ou arraste e solte seus arquivos JPG para comecar',
            'step2_title': 'Converter', 'step2_desc': 'Nossa ferramenta converte automaticamente suas imagens JPG para o formato PNG',
            'step3_title': 'Baixar', 'step3_desc': 'Obtenha suas imagens PNG convertidas com suporte a transparencia',
            'language': 'Idioma', 'footer_description': 'Sua solucao PDF completa. Edite, converta, mescle e gerencie PDFs online gratuitamente.', 'footer_tools': 'Ferramentas', 'footer_company': 'Empresa', 'footer_resources': 'Recursos', 'footer_rights': 'Todos os direitos reservados.'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_current': 'Конвертер JPG в PNG', 'page_title': 'Конвертер JPG в PNG',
            'page_description': 'Конвертируйте изображения JPG в формат PNG с поддержкой прозрачности. Сохраняйте высокое качество, получая преимущества формата PNG. Идеально для графики и веб-дизайна.',
            'feature_lossless': 'Без Потери Качества', 'feature_transparency': 'Поддержка Прозрачности', 'feature_batch': 'Пакетный Конвертер', 'feature_secure': '100% Безопасно',
            'security_badge': '100% Безопасно - Файлы обрабатываются локально',
            'section_title': 'Конвертер JPG в PNG', 'section_subtitle': 'Конвертируйте ваши изображения JPG в формат PNG с поддержкой прозрачности',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.', 'upload_from_computer': 'Загрузить с компьютера', 'import_from_url': 'Импорт из URL',
            'url_placeholder': 'Вставьте ссылку Dropbox или Google Drive сюда...', 'import_file_btn': 'Импортировать Файл', 'download_status': 'Загрузка...',
            'supported_services': 'Поддерживаемые сервисы:', 'service_dropbox': 'Dropbox: Поделитесь ссылкой и вставьте здесь', 'service_gdrive': 'Google Drive: Получите общедоступную ссылку (Любой, у кого есть ссылка, может просматривать)',
            'service_direct': 'Прямые URL-адреса изображений (только формат JPG/JPEG)', 'max_file_size': 'Максимальный размер файла: 50MB',
            'drop_jpg_files': 'Перетащите файлы JPG сюда', 'or_click_browse': 'или нажмите для выбора', 'upload_subtext': 'Файлы JPG/JPEG - До 10 файлов - Максимальный общий размер: 50MB',
            'convert_to_png': 'Конвертировать в PNG', 'hint_upload_files_first': 'Загрузите файлы JPG выше, чтобы включить конвертацию',
            'success_title': 'Конвертация завершена!', 'success_description': 'Ваши файлы готовы к загрузке',
            'download_files': 'Скачать Файлы', 'convert_another': 'Конвертировать Другой',
            'why_choose_title': 'Почему выбрать конвертер JPG в PNG от PDFrow?', 'why_choose_subtitle': 'Быстрый, безопасный и высококачественный конвертер изображений',
            'feature_lightning_fast_title': 'Молниеносно Быстро', 'feature_lightning_fast_desc': 'Конвертируйте изображения JPG в PNG за секунды с нашим оптимизированным движком конвертации',
            'feature_secure_title': '100% Безопасно', 'feature_secure_desc': 'Ваши файлы обрабатываются локально и автоматически удаляются после обработки',
            'feature_transparency_title': 'Поддержка Прозрачности', 'feature_transparency_desc': 'Формат PNG поддерживает прозрачность для профессиональной графики и веб-дизайна',
            'feature_no_software_title': 'Без Программного Обеспечения', 'feature_no_software_desc': 'Работает прямо в вашем браузере - без загрузок или установок',
            'how_to_title': 'Как Конвертировать JPG в PNG', 'how_to_subtitle': 'Простой 3-шаговый процесс конвертации ваших изображений',
            'step1_title': 'Загрузить JPG', 'step1_desc': 'Выберите или перетащите файлы JPG, чтобы начать',
            'step2_title': 'Конвертировать', 'step2_desc': 'Наш инструмент автоматически конвертирует ваши изображения JPG в формат PNG',
            'step3_title': 'Скачать', 'step3_desc': 'Получите конвертированные PNG изображения с поддержкой прозрачности',
            'language': 'Язык', 'footer_description': 'Ваше универсальное PDF-решение. Редактируйте, конвертируйте, объединяйте и управляйте PDF онлайн бесплатно.', 'footer_tools': 'Инструменты', 'footer_company': 'Компания', 'footer_resources': 'Ресурсы', 'footer_rights': 'Все права защищены.'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_current': 'JPG转PNG转换器', 'page_title': 'JPG转PNG转换器',
            'page_description': '将JPG图片转换为PNG格式，支持透明度。在获得PNG格式优势的同时保持高质量。非常适合图形和网页设计。',
            'feature_lossless': '无损质量', 'feature_transparency': '支持透明度', 'feature_batch': '批量转换', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - 文件在本地处理',
            'section_title': 'JPG转PNG转换器', 'section_subtitle': '将您的JPG图片转换为PNG格式，支持透明度',
            'privacy_badge': '100%客户端处理。文件永远不会离开您的设备。', 'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'url_placeholder': '在此粘贴Dropbox或Google Drive链接...', 'import_file_btn': '导入文件', 'download_status': '下载中...',
            'supported_services': '支持的服务:', 'service_dropbox': 'Dropbox: 分享链接并粘贴到这里', 'service_gdrive': 'Google Drive: 获取可共享链接（任何拥有链接的人都可以查看）',
            'service_direct': '直接图片URL（仅JPG/JPEG格式）', 'max_file_size': '最大文件大小：50MB',
            'drop_jpg_files': '将JPG文件拖放到这里', 'or_click_browse': '或点击浏览', 'upload_subtext': 'JPG/JPEG文件 - 最多10个文件 - 最大总大小：50MB',
            'convert_to_png': '转换为PNG', 'hint_upload_files_first': '上传JPG文件以启用转换',
            'success_title': '转换完成！', 'success_description': '您的文件已准备好下载',
            'download_files': '下载文件', 'convert_another': '转换另一个',
            'why_choose_title': '为什么选择PDFrow JPG转PNG转换器？', 'why_choose_subtitle': '快速、安全和高质量的图片转换',
            'feature_lightning_fast_title': '闪电般快速', 'feature_lightning_fast_desc': '使用我们优化的转换引擎在几秒钟内将JPG图片转换为PNG',
            'feature_secure_title': '100%安全', 'feature_secure_desc': '您的文件在本地处理，处理后自动删除',
            'feature_transparency_title': '支持透明度', 'feature_transparency_desc': 'PNG格式支持透明度，适合专业图形和网页设计',
            'feature_no_software_title': '无需软件', 'feature_no_software_desc': '直接在浏览器中运行 - 无需下载或安装',
            'how_to_title': '如何将JPG转换为PNG', 'how_to_subtitle': '转换图片的简单3步流程',
            'step1_title': '上传JPG', 'step1_desc': '选择或拖放您的JPG文件开始',
            'step2_title': '转换', 'step2_desc': '我们的工具自动将您的JPG图片转换为PNG格式',
            'step3_title': '下载', 'step3_desc': '获取您转换的PNG图片，支持透明度',
            'language': '语言', 'footer_description': '您的一站式PDF解决方案。免费在线编辑、转换、合并和管理PDF。', 'footer_tools': '工具', 'footer_company': '公司', 'footer_resources': '资源', 'footer_rights': '版权所有。'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_current': 'JPGからPNGコンバーター', 'page_title': 'JPGからPNGコンバーター',
            'page_description': 'JPG画像を透明度サポート付きでPNG形式に変換します。PNG形式のメリットを得ながら、高品質を維持します。グラフィックスやWebデザインに最適です。',
            'feature_lossless': 'ロスレス品質', 'feature_transparency': '透明度サポート', 'feature_batch': 'バッチ変換', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - ファイルはローカルで処理されます',
            'section_title': 'JPGからPNGコンバーター', 'section_subtitle': 'JPG画像を透明度サポート付きでPNG形式に変換',
            'privacy_badge': '100%クライアント側。ファイルはデバイスから出ません。', 'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付け...', 'import_file_btn': 'ファイルをインポート', 'download_status': 'ダウンロード中...',
            'supported_services': 'サポートされているサービス:', 'service_dropbox': 'Dropbox: リンクを共有し、ここに貼り付け', 'service_gdrive': 'Google Drive: 共有可能なリンクを取得（リンクを持つ誰でも表示できます）',
            'service_direct': '直接画像URL（JPG/JPEG形式のみ）', 'max_file_size': '最大ファイルサイズ：50MB',
            'drop_jpg_files': 'JPGファイルをここにドロップ', 'or_click_browse': 'またはクリックして参照', 'upload_subtext': 'JPG/JPEGファイル - 最大10ファイル - 最大合計サイズ：50MB',
            'convert_to_png': 'PNGに変換', 'hint_upload_files_first': '変換を有効にするには上にJPGファイルをアップロードしてください',
            'success_title': '変換完了！', 'success_description': 'ファイルはダウンロード準備ができました',
            'download_files': 'ファイルをダウンロード', 'convert_another': '別を変換',
            'why_choose_title': 'なぜPDFrow JPGからPNGコンバーターを選ぶのか？', 'why_choose_subtitle': '高速、安全、高品質の画像変換',
            'feature_lightning_fast_title': '超高速', 'feature_lightning_fast_desc': '最適化された変換エンジンでJPG画像を秒でPNGに変換',
            'feature_secure_title': '100%安全', 'feature_secure_desc': 'ファイルはローカルで処理され、処理後に自動削除されます',
            'feature_transparency_title': '透明度サポート', 'feature_transparency_desc': 'PNG形式はプロフェッショナルグラフィックスとWebデザインのための透明度をサポート',
            'feature_no_software_title': 'ソフトウェア不要', 'feature_no_software_desc': 'ブラウザで直接動作 - ダウンロードやインストールは必要ありません',
            'how_to_title': 'JPGからPNGへの変換方法', 'how_to_subtitle': '画像を変換する簡単な3ステッププロセス',
            'step1_title': 'JPGをアップロード', 'step1_desc': 'JPGファイルを選択またはドラッグ＆ドロップして開始',
            'step2_title': '変換', 'step2_desc': '私たちのツールがJPG画像を自動でPNG形式に変換します',
            'step3_title': 'ダウンロード', 'step3_desc': '透明度サポートの変換されたPNG画像を取得',
            'language': '言語', 'footer_description': 'オールインワンPDFソリューション。PDFを無料でオンラインで編集、変換、合併、管理。', 'footer_tools': 'ツール', 'footer_company': '会社', 'footer_resources': 'リソース', 'footer_rights': '全著作権所有。'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'الميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_current': 'محول JPG إلى PNG', 'page_title': 'محول JPG إلى PNG',
            'page_description': 'حوّل صور JPG إلى صيغة PNG مع دعم الشفافية. حافظ على الجودة العالية أثناء الحصول على مزايا صيغة PNG. مثالي للرسوميات وتصميم الويب.',
            'feature_lossless': 'جودة بدون فقدان', 'feature_transparency': 'دعم الشفافية', 'feature_batch': 'تحويل بالدفعات', 'feature_secure': 'آمن 100%',
            'security_badge': 'آمن 100% - يتم معالجة الملفات محلياً',
            'section_title': 'محول JPG إلى PNG', 'section_subtitle': 'حوّل صور JPG إلى صيغة PNG مع دعم الشفافية',
            'privacy_badge': '100% من جانب العميل. لا تغادر الملفات جهازك أبداً.', 'upload_from_computer': 'التحميل من الحاسوب', 'import_from_url': 'الاستيراد من URL',
            'url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...', 'import_file_btn': 'استيراد الملف', 'download_status': 'جاري التنزيل...',
            'supported_services': 'الخدمات المدعومة:', 'service_dropbox': 'Dropbox: شارك الرابط والصقه هنا', 'service_gdrive': 'Google Drive: احصل على رابط قابل للمشاركة (يمكن لأي شخص لديه الرابط العرض)',
            'service_direct': 'روابط صور مباشرة (صيغة JPG/JPEG فقط)', 'max_file_size': 'الحد الأقصى لحجم الملف: 50 ميجابايت',
            'drop_jpg_files': 'أسقط ملفات JPG هنا', 'or_click_browse': 'أو انقر للتصفح', 'upload_subtext': 'ملفات JPG/JPEG - حتى 10 ملفات - الحد الأقصى للحجم الإجمالي: 50MB',
            'convert_to_png': 'تحويل إلى PNG', 'hint_upload_files_first': 'قم بتحميل ملفات JPG أعلاه لتفعيل التحويل',
            'success_title': 'اكتمل التحويل!', 'success_description': 'ملفاتك جاهزة للتنزيل',
            'download_files': 'تنزيل الملفات', 'convert_another': 'تحويل آخر',
            'why_choose_title': 'لماذا تختار محول JPG إلى PNG من PDFrow؟', 'why_choose_subtitle': 'تحويل صور سريع وآمن وعالي الجودة',
            'feature_lightning_fast_title': 'سريع كالبرق', 'feature_lightning_fast_desc': 'حوّل صور JPG إلى PNG في ثوانٍ باستخدام محرك التحويل المحسن لدينا',
            'feature_secure_title': 'آمن 100%', 'feature_secure_desc': 'يتم معالجة ملفاتك محلياً وحذفها تلقائياً بعد المعالجة',
            'feature_transparency_title': 'دعم الشفافية', 'feature_transparency_desc': 'يدعم صيغة PNG الشفافية للرسوميات المحترفة وتصميم الويب',
            'feature_no_software_title': 'لا يلزم برنامج', 'feature_no_software_desc': 'يعمل مباشرة في متصفحك - لا حاجة لتنزيلات أو تثبيتات',
            'how_to_title': 'كيف تحوّل JPG إلى PNG', 'how_to_subtitle': 'عملية بسيطة من 3 خطوات لتحويل صورك',
            'step1_title': 'تحميل JPG', 'step1_desc': 'حدد أو اسحب وأسقط ملفات JPG للبدء',
            'step2_title': 'تحويل', 'step2_desc': 'تقوم أداتنا بتحويل صور JPG تلقائياً إلى صيغة PNG',
            'step3_title': 'تنزيل', 'step3_desc': 'احصل على صور PNG المحولة مع دعم الشفافية',
            'language': 'اللغة', 'footer_description': 'حل PDF الشامل. حرر، حوّل، ادمج وأدر PDF عبر الإنترنت مجاناً.', 'footer_tools': 'الأدوات', 'footer_company': 'الشركة', 'footer_resources': 'الموارد', 'footer_rights': 'جميع الحقوق محفوظة.'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'सामान्य प्रश्न',
            'btn_login': 'लॉगिन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफाइल', 'btn_logout': 'लॉगआउट',
            'breadcrumb_home': 'होम', 'breadcrumb_current': 'JPG से PNG कनवर्टर', 'page_title': 'JPG से PNG कनवर्टर',
            'page_description': 'JPG चित्रों को पारदर्शिता सपोर्ट के साथ PNG फॉर्मेट में बदलें। PNG फॉर्मेट के लाभ प्राप्त करते हुए उच्च गुणवत्ता बनाए रखें। ग्राफिक्स और वेब डिज़ाइन के लिए परफेक्ट।',
            'feature_lossless': 'लॉसलेस गुणवत्ता', 'feature_transparency': 'पारदर्शिता सपोर्ट', 'feature_batch': 'बैच कन्वर्ट', 'feature_secure': '100% सुरक्षित',
            'security_badge': '100% सुरक्षित - फाइलें स्थानीय रूप से प्रोसेस होती हैं',
            'section_title': 'JPG से PNG कनवर्टर', 'section_subtitle': 'अपने JPG चित्रों को पारदर्शिता सपोर्ट के साथ PNG फॉर्मेट में बदलें',
            'privacy_badge': '100% क्लाइंट-साइड। फाइलें कभी आपके डिवाइस से नहीं जातीं।', 'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से इम्पोर्ट करें',
            'url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...', 'import_file_btn': 'फाइल इम्पोर्ट करें', 'download_status': 'डाउनलोड हो रहा है...',
            'supported_services': 'समर्थित सेवाएं:', 'service_dropbox': 'Dropbox: लिंक शेयर करें और यहां पेस्ट करें', 'service_gdrive': 'Google Drive: शेयर करने योग्य लिंक प्राप्त करें (लिंक वाला कोई भी देख सकता है)',
            'service_direct': 'डायरेक्ट इमेज URLs (सिर्फ JPG/JPEG फॉर्मेट)', 'max_file_size': 'अधिकतम फाइल साइज़: 50MB',
            'drop_jpg_files': 'JPG फाइलें यहां ड्रॉप करें', 'or_click_browse': 'या ब्राउज़ करने के लिए क्लिक करें', 'upload_subtext': 'JPG/JPEG फाइलें - 10 फाइलें तक - अधिकतम कुल साइज़: 50MB',
            'convert_to_png': 'PNG में कन्वर्ट करें', 'hint_upload_files_first': 'कन्वर्ज़न सक्षम करने के लिए ऊपर JPG फाइलें अपलोड करें',
            'success_title': 'कन्वर्ज़न पूरा हुआ!', 'success_description': 'आपकी फाइलें डाउनलोड के लिए तैयार हैं',
            'download_files': 'फाइलें डाउनलोड करें', 'convert_another': 'अन्य कन्वर्ट करें',
            'why_choose_title': 'PDFrow JPG से PNG कनवर्टर क्यों चुनें?', 'why_choose_subtitle': 'तेज़, सुरक्षित, और उच्च गुणवत्ता चित्र कन्वर्ज़न',
            'feature_lightning_fast_title': 'बिजली की तरह तेज़', 'feature_lightning_fast_desc': 'हमारे ऑप्टिमाइज़्ड कन्वर्ज़न इंजन के साथ सेकंडों में JPG चित्रों को PNG में बदलें',
            'feature_secure_title': '100% सुरक्षित', 'feature_secure_desc': 'आपकी फाइलें स्थानीय रूप से प्रोसेस होती हैं और प्रोसेसिंग के बाद स्वचालित रूप से डिलीट हो जाती हैं',
            'feature_transparency_title': 'पारदर्शिता सपोर्ट', 'feature_transparency_desc': 'PNG फॉर्मेट प्रोफेशनल ग्राफिक्स और वेब डिज़ाइन के लिए पारदर्शिता को सपोर्ट करता है',
            'feature_no_software_title': 'कोई सॉफ्टवेयर की ज़रूरत नहीं', 'feature_no_software_desc': 'सीधे आपके ब्राउज़र में काम करता है - कोई डाउनलोड या इंस्टॉलेशन की ज़रूरत नहीं',
            'how_to_title': 'JPG को PNG में कैसे कन्वर्ट करें', 'how_to_subtitle': 'अपने चित्रों को कन्वर्ट करने के लिए सरल 3-स्टेप प्रक्रिया',
            'step1_title': 'JPG अपलोड करें', 'step1_desc': 'शुरू करने के लिए अपनी JPG फाइलें सेलेक्ट या ड्रैग एंड ड्रॉप करें',
            'step2_title': 'कन्वर्ट करें', 'step2_desc': 'हमारा टूल स्वचालित रूप से आपके JPG चित्रों को PNG फॉर्मेट में बदलता है',
            'step3_title': 'डाउनलोड करें', 'step3_desc': 'पारदर्शिता सपोर्ट के साथ अपने कन्वर्टेड PNG चित्र प्राप्त करें',
            'language': 'भाषा', 'footer_description': 'आपका ऑल-इन-वन PDF समाधान। PDFs को मुफ्त में ऑनलाइन एडिट, कन्वर्ट, मर्ज और मैनेज करें।', 'footer_tools': 'उपकरण', 'footer_company': 'कंपनी', 'footer_resources': 'संसाधन', 'footer_rights': 'सर्वाधिकार सुरक्षित।'
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
