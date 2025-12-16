// Complete Translation system for protect-pdf.html - ALL 12 LANGUAGES
function getTranslations(langCode) {
    const allTranslations = {
        'en': {
            // Navigation
            'nav_tools': 'Tools',
            'nav_features': 'Features',
            'nav_how_it_works': 'How It Works',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',
            'btn_login': 'Login',
            'btn_signup': 'Sign Up',
            'btn_profile': 'Profile',
            'btn_logout': 'Logout',

            // Page Header
            'breadcrumb_home': 'Home',
            'breadcrumb_current': 'Protect PDF',
            'page_title': 'Protect PDF Online',
            'page_description': 'Secure your PDF documents with password protection. Add encryption to keep your files safe and private.',
            'feature_strong_encryption': 'Strong Encryption',
            'feature_secure_processing': 'Secure Processing',
            'feature_fast_protection': 'Fast Protection',
            'feature_privacy_protected': 'Privacy Protected',
            'security_badge': '100% Secure - Files processed securely',

            // Tool Section
            'section_title': 'PDF Protection Tool',
            'section_subtitle': 'Add password protection to your PDF documents',
            'privacy_badge': '100% secure. Files processed safely.',
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
            'upload_pdf_subtext': 'PDF files • Up to 50MB per file',

            // Why Choose
            'why_choose_title': 'Why Use Our PDF Protector',
            'why_choose_subtitle': 'Powerful features to secure your PDF documents',
            'feature_password_title': 'Strong Password Protection',
            'feature_password_desc': 'Add secure password encryption to your PDF files to prevent unauthorized access.',
            'feature_fast_title': 'Fast Processing',
            'feature_fast_desc': 'Protect your PDF files quickly with our optimized processing engine. No long waiting times.',
            'feature_security_title': 'Complete Security',
            'feature_security_desc': 'Your documents remain secure throughout the process. Files are encrypted and protected.',
            'feature_privacy_title': 'Privacy Guaranteed',
            'feature_privacy_desc': 'Your files are processed securely. We never store or access your documents.',

            // How It Works
            'how_to_title': 'How to Protect PDF Files',
            'how_to_subtitle': 'Simple steps to add password protection',
            'step1_title': 'Upload PDF',
            'step1_desc': 'Select your PDF file or drag and drop it into the upload area.',
            'step2_title': 'Set Password',
            'step2_desc': 'Enter a strong password to protect your PDF document.',
            'step3_title': 'Protect & Download',
            'step3_desc': 'Click protect and download your password-protected PDF file.',

            // FAQ
            'faq_title': 'Frequently Asked Questions',
            'faq_subtitle': 'Everything you need to know about protecting PDF files',
            'faq1_question': 'How secure is the password protection?',
            'faq1_answer': 'We use industry-standard encryption methods to protect your PDFs. The password protection is secure and only someone with the correct password can open the file.',
            'faq2_question': 'Can I protect multiple PDFs at once?',
            'faq2_answer': 'Currently, you can protect one PDF file at a time for optimal security and control.',
            'faq3_question': 'What happens to my files after protection?',
            'faq3_answer': 'Your files are processed locally in your browser and are never uploaded to our servers. Once protected, your original file remains unchanged.',
            'faq4_question': 'Can I remove password protection later?',
            'faq4_answer': 'Yes, if you know the password, you can use our Unlock PDF tool to remove the password protection.',

            // Footer
            'language': 'Language',
            'footer_description': 'Your all-in-one PDF solution. Edit, convert, merge, and manage PDFs online for free.',
            'footer_tools_title': 'Tools',
            'footer_pdf_compressor': 'Compress PDF',
            'footer_pdf_merger': 'Merge PDF',
            'footer_support_title': 'Support',
            'footer_faq': 'FAQ',
            'footer_how_it_works': 'How It Works',
            'footer_contact': 'Contact',
            'footer_terms': 'Terms & Conditions',
            'footer_privacy': 'Privacy Policy',
            'footer_copyright': '© 2025 PDFrow. All rights reserved. Made with ❤️ for document processing.'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Características', 'nav_how_it_works': 'Cómo Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesión', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesión',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Proteger PDF', 'page_title': 'Proteger PDF en Línea',
            'page_description': 'Proteja sus documentos PDF con protección por contraseña. Agregue cifrado para mantener sus archivos seguros y privados.',
            'feature_strong_encryption': 'Cifrado Fuerte', 'feature_secure_processing': 'Procesamiento Seguro', 'feature_fast_protection': 'Protección Rápida', 'feature_privacy_protected': 'Privacidad Protegida',
            'security_badge': '100% Seguro - Archivos procesados de forma segura',
            'section_title': 'Herramienta de Protección PDF', 'section_subtitle': 'Agregue protección por contraseña a sus documentos PDF',
            'privacy_badge': '100% seguro. Archivos procesados de forma segura.', 'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aquí...', 'import_file_btn': 'Importar Archivo', 'download_status': 'Descargando...',
            'supported_services': 'Servicios compatibles:', 'service_dropbox': 'Dropbox: Comparta el enlace y péguelo aquí', 'service_gdrive': 'Google Drive: Obtenga un enlace compartible',
            'service_direct': 'URLs directas de PDF', 'max_file_size': 'Tamaño máximo: 50MB',
            'upload_text': 'Haga clic para seleccionar o arrastre archivos PDF', 'upload_pdf_subtext': 'Archivos PDF • Hasta 50MB por archivo',
            'why_choose_title': 'Por qué usar nuestro protector PDF', 'why_choose_subtitle': 'Potentes funciones para proteger sus documentos PDF',
            'feature_password_title': 'Protección por Contraseña Fuerte', 'feature_password_desc': 'Agregue cifrado seguro para evitar acceso no autorizado.',
            'feature_fast_title': 'Procesamiento Rápido', 'feature_fast_desc': 'Proteja archivos rápidamente sin largos tiempos de espera.',
            'feature_security_title': 'Seguridad Completa', 'feature_security_desc': 'Sus documentos permanecen seguros. Los archivos están cifrados y protegidos.',
            'feature_privacy_title': 'Privacidad Garantizada', 'feature_privacy_desc': 'Nunca almacenamos ni accedemos a sus documentos.',
            'how_to_title': 'Cómo Proteger Archivos PDF', 'how_to_subtitle': 'Pasos simples para agregar protección',
            'step1_title': 'Subir PDF', 'step1_desc': 'Seleccione o arrastre su archivo PDF.',
            'step2_title': 'Establecer Contraseña', 'step2_desc': 'Ingrese una contraseña segura.',
            'step3_title': 'Proteger y Descargar', 'step3_desc': 'Descargue su PDF protegido.',
            'faq_title': 'Preguntas Frecuentes', 'faq_subtitle': 'Todo sobre protección de archivos PDF',
            'faq1_question': '¿Qué tan segura es la protección?', 'faq1_answer': 'Usamos métodos de cifrado estándar. Solo quien tenga la contraseña puede abrir el archivo.',
            'faq2_question': '¿Puedo proteger varios PDF?', 'faq2_answer': 'Actualmente, puede proteger un PDF a la vez para seguridad óptima.',
            'faq3_question': '¿Qué pasa con mis archivos?', 'faq3_answer': 'Se procesan localmente en su navegador y nunca se cargan en nuestros servidores.',
            'faq4_question': '¿Puedo eliminar la protección?', 'faq4_answer': 'Sí, si conoce la contraseña, use nuestra herramienta Desbloquear PDF.',
            'language': 'Idioma', 'footer_description': 'Su solución PDF completa. Gratis en línea.',
            'footer_tools_title': 'Herramientas', 'footer_pdf_compressor': 'Comprimir PDF', 'footer_pdf_merger': 'Combinar PDF',
            'footer_support_title': 'Soporte', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Cómo Funciona', 'footer_contact': 'Contacto',
            'footer_terms': 'Términos', 'footer_privacy': 'Privacidad',
            'footer_copyright': '© 2025 PDFrow. Todos los derechos reservados. Hecho con ❤️'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Déconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_current': 'Protéger PDF', 'page_title': 'Protéger PDF en Ligne',
            'page_description': 'Sécurisez vos PDF avec protection par mot de passe. Ajoutez un cryptage pour garder vos fichiers sûrs.',
            'feature_strong_encryption': 'Cryptage Fort', 'feature_secure_processing': 'Traitement Sécurisé', 'feature_fast_protection': 'Protection Rapide', 'feature_privacy_protected': 'Confidentialité Protégée',
            'security_badge': '100% Sécurisé - Fichiers traités en sécurité',
            'section_title': 'Outil de Protection PDF', 'section_subtitle': 'Ajoutez une protection par mot de passe',
            'privacy_badge': '100% sécurisé. Fichiers traités en sûreté.', 'upload_from_computer': 'Télécharger depuis PC', 'import_from_url': 'Importer depuis URL',
            'url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...', 'import_file_btn': 'Importer Fichier', 'download_status': 'Téléchargement...',
            'supported_services': 'Services pris en charge:', 'service_dropbox': 'Dropbox: Partagez le lien ici', 'service_gdrive': 'Google Drive: Obtenez un lien partageable',
            'service_direct': 'URLs PDF directes', 'max_file_size': 'Taille maximale: 50MB',
            'upload_text': 'Cliquez pour sélectionner ou glissez des fichiers PDF', 'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 50MB',
            'why_choose_title': 'Pourquoi utiliser notre protecteur PDF', 'why_choose_subtitle': 'Fonctionnalités puissantes pour sécuriser vos PDF',
            'feature_password_title': 'Protection par Mot de Passe Forte', 'feature_password_desc': 'Ajoutez un cryptage sécurisé pour empêcher l\'accès non autorisé.',
            'feature_fast_title': 'Traitement Rapide', 'feature_fast_desc': 'Protégez vos fichiers rapidement sans longs temps d\'attente.',
            'feature_security_title': 'Sécurité Complète', 'feature_security_desc': 'Vos documents restent sécurisés. Les fichiers sont cryptés.',
            'feature_privacy_title': 'Confidentialité Garantie', 'feature_privacy_desc': 'Nous ne stockons jamais vos documents.',
            'how_to_title': 'Comment Protéger les Fichiers PDF', 'how_to_subtitle': 'Étapes simples pour ajouter protection',
            'step1_title': 'Télécharger PDF', 'step1_desc': 'Sélectionnez ou glissez votre fichier PDF.',
            'step2_title': 'Définir Mot de Passe', 'step2_desc': 'Entrez un mot de passe fort.',
            'step3_title': 'Protéger et Télécharger', 'step3_desc': 'Téléchargez votre PDF protégé.',
            'faq_title': 'Questions Fréquentes', 'faq_subtitle': 'Tout sur la protection des fichiers PDF',
            'faq1_question': 'Quelle est la sécurité de la protection?', 'faq1_answer': 'Nous utilisons des méthodes de cryptage standard. Seule une personne avec le mot de passe peut ouvrir le fichier.',
            'faq2_question': 'Puis-je protéger plusieurs PDF?', 'faq2_answer': 'Actuellement, un PDF à la fois pour sécurité optimale.',
            'faq3_question': 'Qu\'advient-il de mes fichiers?', 'faq3_answer': 'Ils sont traités localement dans votre navigateur et jamais téléchargés sur nos serveurs.',
            'faq4_question': 'Puis-je supprimer la protection?', 'faq4_answer': 'Oui, si vous connaissez le mot de passe, utilisez notre outil Déverrouiller PDF.',
            'language': 'Langue', 'footer_description': 'Votre solution PDF complète. Gratuit en ligne.',
            'footer_tools_title': 'Outils', 'footer_pdf_compressor': 'Compresser PDF', 'footer_pdf_merger': 'Fusionner PDF',
            'footer_support_title': 'Support', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Comment Ça Marche', 'footer_contact': 'Contact',
            'footer_terms': 'Conditions', 'footer_privacy': 'Confidentialité',
            'footer_copyright': '© 2025 PDFrow. Tous droits réservés. Fait avec ❤️'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_current': 'PDF Schützen', 'page_title': 'PDF Online Schützen',
            'page_description': 'Sichern Sie Ihre PDF-Dokumente mit Passwortschutz. Fügen Sie Verschlüsselung hinzu.',
            'feature_strong_encryption': 'Starke Verschlüsselung', 'feature_secure_processing': 'Sichere Verarbeitung', 'feature_fast_protection': 'Schneller Schutz', 'feature_privacy_protected': 'Datenschutz Geschützt',
            'security_badge': '100% Sicher - Dateien sicher verarbeitet',
            'section_title': 'PDF-Schutz-Tool', 'section_subtitle': 'Passwortschutz zu Ihren PDFs hinzufügen',
            'privacy_badge': '100% sicher. Dateien sicher verarbeitet.', 'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'url_placeholder': 'Dropbox- oder Google Drive-Link hier einfügen...', 'import_file_btn': 'Datei Importieren', 'download_status': 'Herunterladen...',
            'supported_services': 'Unterstützte Dienste:', 'service_dropbox': 'Dropbox: Link teilen und hier einfügen', 'service_gdrive': 'Google Drive: Teilbaren Link abrufen',
            'service_direct': 'Direkte PDF-URLs', 'max_file_size': 'Maximale Größe: 50MB',
            'upload_text': 'Klicken Sie oder ziehen Sie PDF-Dateien', 'upload_pdf_subtext': 'PDF-Dateien • Bis zu 50MB',
            'why_choose_title': 'Warum unseren PDF-Schutz verwenden', 'why_choose_subtitle': 'Leistungsstarke Funktionen zum Schutz Ihrer PDFs',
            'feature_password_title': 'Starker Passwortschutz', 'feature_password_desc': 'Fügen Sie sichere Verschlüsselung hinzu, um unbefugten Zugriff zu verhindern.',
            'feature_fast_title': 'Schnelle Verarbeitung', 'feature_fast_desc': 'Schützen Sie Dateien schnell ohne lange Wartezeiten.',
            'feature_security_title': 'Vollständige Sicherheit', 'feature_security_desc': 'Ihre Dokumente bleiben sicher. Dateien sind verschlüsselt.',
            'feature_privacy_title': 'Datenschutz Garantiert', 'feature_privacy_desc': 'Wir speichern niemals Ihre Dokumente.',
            'how_to_title': 'So Schützen Sie PDF-Dateien', 'how_to_subtitle': 'Einfache Schritte zum Hinzufügen von Schutz',
            'step1_title': 'PDF Hochladen', 'step1_desc': 'Wählen oder ziehen Sie Ihre PDF-Datei.',
            'step2_title': 'Passwort Festlegen', 'step2_desc': 'Geben Sie ein starkes Passwort ein.',
            'step3_title': 'Schützen und Herunterladen', 'step3_desc': 'Laden Sie Ihr geschütztes PDF herunter.',
            'faq_title': 'Häufig Gestellte Fragen', 'faq_subtitle': 'Alles über PDF-Schutz',
            'faq1_question': 'Wie sicher ist der Passwortschutz?', 'faq1_answer': 'Wir verwenden Standardverschlüsselung. Nur jemand mit dem Passwort kann die Datei öffnen.',
            'faq2_question': 'Kann ich mehrere PDFs schützen?', 'faq2_answer': 'Derzeit ein PDF auf einmal für optimale Sicherheit.',
            'faq3_question': 'Was passiert mit meinen Dateien?', 'faq3_answer': 'Sie werden lokal in Ihrem Browser verarbeitet und niemals auf unsere Server hochgeladen.',
            'faq4_question': 'Kann ich den Schutz entfernen?', 'faq4_answer': 'Ja, wenn Sie das Passwort kennen, verwenden Sie unser PDF Entsperren-Tool.',
            'language': 'Sprache', 'footer_description': 'Ihre komplette PDF-Lösung. Kostenlos online.',
            'footer_tools_title': 'Werkzeuge', 'footer_pdf_compressor': 'PDF Komprimieren', 'footer_pdf_merger': 'PDF Zusammenführen',
            'footer_support_title': 'Support', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Wie es Funktioniert', 'footer_contact': 'Kontakt',
            'footer_terms': 'Bedingungen', 'footer_privacy': 'Datenschutz',
            'footer_copyright': '© 2025 PDFrow. Alle Rechte vorbehalten. Mit ❤️ gemacht'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_current': 'Proteggi PDF', 'page_title': 'Proteggi PDF Online',
            'page_description': 'Proteggi i tuoi PDF con protezione password. Aggiungi crittografia per sicurezza.',
            'feature_strong_encryption': 'Crittografia Forte', 'feature_secure_processing': 'Elaborazione Sicura', 'feature_fast_protection': 'Protezione Veloce', 'feature_privacy_protected': 'Privacy Protetta',
            'security_badge': '100% Sicuro - File elaborati in sicurezza',
            'section_title': 'Strumento Protezione PDF', 'section_subtitle': 'Aggiungi protezione password ai tuoi PDF',
            'privacy_badge': '100% sicuro. File elaborati in sicurezza.', 'upload_from_computer': 'Carica da Computer', 'import_from_url': 'Importa da URL',
            'url_placeholder': 'Incolla il link Dropbox o Google Drive qui...', 'import_file_btn': 'Importa File', 'download_status': 'Download...',
            'supported_services': 'Servizi supportati:', 'service_dropbox': 'Dropbox: Condividi link e incolla qui', 'service_gdrive': 'Google Drive: Ottieni link condivisibile',
            'service_direct': 'URL PDF diretti', 'max_file_size': 'Dimensione massima: 50MB',
            'upload_text': 'Clicca o trascina file PDF', 'upload_pdf_subtext': 'File PDF • Fino a 50MB',
            'why_choose_title': 'Perché usare il nostro protettore PDF', 'why_choose_subtitle': 'Funzioni potenti per proteggere i tuoi PDF',
            'feature_password_title': 'Protezione Password Forte', 'feature_password_desc': 'Aggiungi crittografia sicura per impedire accesso non autorizzato.',
            'feature_fast_title': 'Elaborazione Veloce', 'feature_fast_desc': 'Proteggi i file rapidamente senza lunghe attese.',
            'feature_security_title': 'Sicurezza Completa', 'feature_security_desc': 'I tuoi documenti rimangono sicuri. I file sono crittografati.',
            'feature_privacy_title': 'Privacy Garantita', 'feature_privacy_desc': 'Non memorizziamo mai i tuoi documenti.',
            'how_to_title': 'Come Proteggere File PDF', 'how_to_subtitle': 'Passi semplici per aggiungere protezione',
            'step1_title': 'Carica PDF', 'step1_desc': 'Seleziona o trascina il tuo file PDF.',
            'step2_title': 'Imposta Password', 'step2_desc': 'Inserisci una password forte.',
            'step3_title': 'Proteggi e Scarica', 'step3_desc': 'Scarica il tuo PDF protetto.',
            'faq_title': 'Domande Frequenti', 'faq_subtitle': 'Tutto sulla protezione file PDF',
            'faq1_question': 'Quanto è sicura la protezione?', 'faq1_answer': 'Usiamo crittografia standard. Solo chi ha la password può aprire il file.',
            'faq2_question': 'Posso proteggere più PDF?', 'faq2_answer': 'Attualmente, un PDF alla volta per sicurezza ottimale.',
            'faq3_question': 'Cosa succede ai miei file?', 'faq3_answer': 'Sono elaborati localmente nel tuo browser e mai caricati sui nostri server.',
            'faq4_question': 'Posso rimuovere la protezione?', 'faq4_answer': 'Sì, se conosci la password, usa il nostro strumento Sblocca PDF.',
            'language': 'Lingua', 'footer_description': 'La tua soluzione PDF completa. Gratis online.',
            'footer_tools_title': 'Strumenti', 'footer_pdf_compressor': 'Comprimi PDF', 'footer_pdf_merger': 'Unisci PDF',
            'footer_support_title': 'Supporto', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Come Funziona', 'footer_contact': 'Contatto',
            'footer_terms': 'Termini', 'footer_privacy': 'Privacy',
            'footer_copyright': '© 2025 PDFrow. Tutti i diritti riservati. Fatto con ❤️'
        },
        'tr': {
            'nav_tools': 'Araçlar', 'nav_features': 'Özellikler', 'nav_how_it_works': 'Nasıl Çalışır', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giriş Yap', 'btn_signup': 'Kayıt Ol', 'btn_profile': 'Profil', 'btn_logout': 'Çıkış',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_current': 'PDF Koru', 'page_title': 'PDF\'yi Çevrimiçi Koruyun',
            'page_description': 'PDF belgelerinizi şifre korumasıyla güvence altına alın. Şifreleme ekleyin.',
            'feature_strong_encryption': 'Güçlü Şifreleme', 'feature_secure_processing': 'Güvenli İşleme', 'feature_fast_protection': 'Hızlı Koruma', 'feature_privacy_protected': 'Gizlilik Korumalı',
            'security_badge': '%100 Güvenli - Dosyalar güvenle işlenir',
            'section_title': 'PDF Koruma Aracı', 'section_subtitle': 'PDF\'lerinize şifre koruması ekleyin',
            'privacy_badge': '%100 güvenli. Dosyalar güvenle işlenir.', 'upload_from_computer': 'Bilgisayardan Yükle', 'import_from_url': 'URL\'den İçe Aktar',
            'url_placeholder': 'Dropbox veya Google Drive bağlantısını buraya yapıştırın...', 'import_file_btn': 'Dosyayı İçe Aktar', 'download_status': 'İndiriliyor...',
            'supported_services': 'Desteklenen servisler:', 'service_dropbox': 'Dropbox: Bağlantıyı paylaşın ve buraya yapıştırın', 'service_gdrive': 'Google Drive: Paylaşılabilir bağlantı alın',
            'service_direct': 'Doğrudan PDF URL\'leri', 'max_file_size': 'Maksimum boyut: 50MB',
            'upload_text': 'PDF dosyalarını seçmek için tıklayın veya sürükleyin', 'upload_pdf_subtext': 'PDF dosyaları • 50MB\'a kadar',
            'why_choose_title': 'Neden PDF Koruyucumuzu Kullanmalısınız', 'why_choose_subtitle': 'PDF\'lerinizi korumak için güçlü özellikler',
            'feature_password_title': 'Güçlü Şifre Koruması', 'feature_password_desc': 'Yetkisiz erişimi önlemek için güvenli şifreleme ekleyin.',
            'feature_fast_title': 'Hızlı İşleme', 'feature_fast_desc': 'Uzun bekleme süreleri olmadan dosyaları hızlıca koruyun.',
            'feature_security_title': 'Tam Güvenlik', 'feature_security_desc': 'Belgeleriniz güvende kalır. Dosyalar şifrelenir.',
            'feature_privacy_title': 'Gizlilik Garantili', 'feature_privacy_desc': 'Belgelerinizi asla saklamayız.',
            'how_to_title': 'PDF Dosyalarını Nasıl Korursunuz', 'how_to_subtitle': 'Koruma eklemek için basit adımlar',
            'step1_title': 'PDF Yükle', 'step1_desc': 'PDF dosyanızı seçin veya sürükleyin.',
            'step2_title': 'Şifre Belirle', 'step2_desc': 'Güçlü bir şifre girin.',
            'step3_title': 'Koruyun ve İndirin', 'step3_desc': 'Korumalı PDF\'nizi indirin.',
            'faq_title': 'Sık Sorulan Sorular', 'faq_subtitle': 'PDF koruma hakkında her şey',
            'faq1_question': 'Şifre koruması ne kadar güvenli?', 'faq1_answer': 'Standart şifreleme kullanıyoruz. Sadece şifreye sahip olan dosyayı açabilir.',
            'faq2_question': 'Birden fazla PDF koruyabilir miyim?', 'faq2_answer': 'Şu anda optimal güvenlik için bir PDF\'yi aynı anda koruyabilirsiniz.',
            'faq3_question': 'Dosyalarıma ne olur?', 'faq3_answer': 'Tarayıcınızda yerel olarak işlenir ve sunucularımıza asla yüklenmez.',
            'faq4_question': 'Korumayı kaldırabilir miyim?', 'faq4_answer': 'Evet, şifreyi biliyorsanız, PDF Kilit Aç aracımızı kullanın.',
            'language': 'Dil', 'footer_description': 'Eksiksiz PDF çözümünüz. Çevrimiçi ücretsiz.',
            'footer_tools_title': 'Araçlar', 'footer_pdf_compressor': 'PDF Sıkıştır', 'footer_pdf_merger': 'PDF Birleştir',
            'footer_support_title': 'Destek', 'footer_faq': 'SSS', 'footer_how_it_works': 'Nasıl Çalışır', 'footer_contact': 'İletişim',
            'footer_terms': 'Şartlar', 'footer_privacy': 'Gizlilik',
            'footer_copyright': '© 2025 PDFrow. Tüm hakları saklıdır. ❤️ ile yapıldı'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Início', 'breadcrumb_current': 'Proteger PDF', 'page_title': 'Proteger PDF Online',
            'page_description': 'Proteja seus PDFs com proteção por senha. Adicione criptografia para segurança.',
            'feature_strong_encryption': 'Criptografia Forte', 'feature_secure_processing': 'Processamento Seguro', 'feature_fast_protection': 'Proteção Rápida', 'feature_privacy_protected': 'Privacidade Protegida',
            'security_badge': '100% Seguro - Arquivos processados com segurança',
            'section_title': 'Ferramenta de Proteção PDF', 'section_subtitle': 'Adicione proteção por senha aos seus PDFs',
            'privacy_badge': '100% seguro. Arquivos processados com segurança.', 'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...', 'import_file_btn': 'Importar Arquivo', 'download_status': 'Baixando...',
            'supported_services': 'Serviços suportados:', 'service_dropbox': 'Dropbox: Compartilhe o link e cole aqui', 'service_gdrive': 'Google Drive: Obtenha link compartilhável',
            'service_direct': 'URLs PDF diretas', 'max_file_size': 'Tamanho máximo: 50MB',
            'upload_text': 'Clique ou arraste arquivos PDF', 'upload_pdf_subtext': 'Arquivos PDF • Até 50MB',
            'why_choose_title': 'Por que usar nosso protetor PDF', 'why_choose_subtitle': 'Recursos poderosos para proteger seus PDFs',
            'feature_password_title': 'Proteção por Senha Forte', 'feature_password_desc': 'Adicione criptografia segura para impedir acesso não autorizado.',
            'feature_fast_title': 'Processamento Rápido', 'feature_fast_desc': 'Proteja arquivos rapidamente sem longas esperas.',
            'feature_security_title': 'Segurança Completa', 'feature_security_desc': 'Seus documentos permanecem seguros. Os arquivos são criptografados.',
            'feature_privacy_title': 'Privacidade Garantida', 'feature_privacy_desc': 'Nunca armazenamos seus documentos.',
            'how_to_title': 'Como Proteger Arquivos PDF', 'how_to_subtitle': 'Passos simples para adicionar proteção',
            'step1_title': 'Carregar PDF', 'step1_desc': 'Selecione ou arraste seu arquivo PDF.',
            'step2_title': 'Definir Senha', 'step2_desc': 'Digite uma senha forte.',
            'step3_title': 'Proteger e Baixar', 'step3_desc': 'Baixe seu PDF protegido.',
            'faq_title': 'Perguntas Frequentes', 'faq_subtitle': 'Tudo sobre proteção de arquivos PDF',
            'faq1_question': 'Quão segura é a proteção?', 'faq1_answer': 'Usamos criptografia padrão. Apenas quem tem a senha pode abrir o arquivo.',
            'faq2_question': 'Posso proteger vários PDFs?', 'faq2_answer': 'Atualmente, um PDF por vez para segurança ideal.',
            'faq3_question': 'O que acontece com meus arquivos?', 'faq3_answer': 'São processados localmente no seu navegador e nunca enviados para nossos servidores.',
            'faq4_question': 'Posso remover a proteção?', 'faq4_answer': 'Sim, se souber a senha, use nossa ferramenta Desbloquear PDF.',
            'language': 'Idioma', 'footer_description': 'Sua solução PDF completa. Grátis online.',
            'footer_tools_title': 'Ferramentas', 'footer_pdf_compressor': 'Compactar PDF', 'footer_pdf_merger': 'Mesclar PDF',
            'footer_support_title': 'Suporte', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Como Funciona', 'footer_contact': 'Contato',
            'footer_terms': 'Termos', 'footer_privacy': 'Privacidade',
            'footer_copyright': '© 2025 PDFrow. Todos os direitos reservados. Feito com ❤️'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_current': 'Защитить PDF', 'page_title': 'Защитить PDF Онлайн',
            'page_description': 'Защитите свои PDF паролем. Добавьте шифрование для безопасности.',
            'feature_strong_encryption': 'Сильное Шифрование', 'feature_secure_processing': 'Безопасная Обработка', 'feature_fast_protection': 'Быстрая Защита', 'feature_privacy_protected': 'Конфиденциальность Защищена',
            'security_badge': '100% Безопасно - Файлы обработаны надежно',
            'section_title': 'Инструмент Защиты PDF', 'section_subtitle': 'Добавьте защиту паролем к вашим PDF',
            'privacy_badge': '100% безопасно. Файлы обработаны надежно.', 'upload_from_computer': 'Загрузить с Компьютера', 'import_from_url': 'Импорт из URL',
            'url_placeholder': 'Вставьте ссылку Dropbox или Google Drive сюда...', 'import_file_btn': 'Импортировать Файл', 'download_status': 'Загрузка...',
            'supported_services': 'Поддерживаемые сервисы:', 'service_dropbox': 'Dropbox: Поделитесь ссылкой и вставьте здесь', 'service_gdrive': 'Google Drive: Получите общедоступную ссылку',
            'service_direct': 'Прямые URL PDF', 'max_file_size': 'Максимальный размер: 50MB',
            'upload_text': 'Нажмите или перетащите файлы PDF', 'upload_pdf_subtext': 'PDF файлы • До 50MB',
            'why_choose_title': 'Почему выбирают наш защитник PDF', 'why_choose_subtitle': 'Мощные функции для защиты ваших PDF',
            'feature_password_title': 'Сильная Защита Паролем', 'feature_password_desc': 'Добавьте безопасное шифрование, чтобы предотвратить несанкционированный доступ.',
            'feature_fast_title': 'Быстрая Обработка', 'feature_fast_desc': 'Защитите файлы быстро без долгого ожидания.',
            'feature_security_title': 'Полная Безопасность', 'feature_security_desc': 'Ваши документы остаются в безопасности. Файлы зашифрованы.',
            'feature_privacy_title': 'Гарантия Конфиденциальности', 'feature_privacy_desc': 'Мы никогда не храним ваши документы.',
            'how_to_title': 'Как Защитить Файлы PDF', 'how_to_subtitle': 'Простые шаги для добавления защиты',
            'step1_title': 'Загрузить PDF', 'step1_desc': 'Выберите или перетащите ваш файл PDF.',
            'step2_title': 'Установить Пароль', 'step2_desc': 'Введите надежный пароль.',
            'step3_title': 'Защитить и Скачать', 'step3_desc': 'Скачайте ваш защищенный PDF.',
            'faq_title': 'Часто Задаваемые Вопросы', 'faq_subtitle': 'Все о защите файлов PDF',
            'faq1_question': 'Насколько безопасна защита?', 'faq1_answer': 'Мы используем стандартное шифрование. Только тот, у кого есть пароль, может открыть файл.',
            'faq2_question': 'Могу ли я защитить несколько PDF?', 'faq2_answer': 'В настоящее время один PDF за раз для оптимальной безопасности.',
            'faq3_question': 'Что происходит с моими файлами?', 'faq3_answer': 'Они обрабатываются локально в вашем браузере и никогда не загружаются на наши серверы.',
            'faq4_question': 'Могу ли я снять защиту?', 'faq4_answer': 'Да, если вы знаете пароль, используйте наш инструмент Разблокировать PDF.',
            'language': 'Язык', 'footer_description': 'Ваше полное PDF-решение. Бесплатно онлайн.',
            'footer_tools_title': 'Инструменты', 'footer_pdf_compressor': 'Сжать PDF', 'footer_pdf_merger': 'Объединить PDF',
            'footer_support_title': 'Поддержка', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Как это работает', 'footer_contact': 'Контакты',
            'footer_terms': 'Условия', 'footer_privacy': 'Конфиденциальность',
            'footer_copyright': '© 2025 PDFrow. Все права защищены. Сделано с ❤️'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_current': '保护PDF', 'page_title': '在线保护PDF',
            'page_description': '使用密码保护保护您的PDF。添加加密以确保安全。',
            'feature_strong_encryption': '强加密', 'feature_secure_processing': '安全处理', 'feature_fast_protection': '快速保护', 'feature_privacy_protected': '隐私保护',
            'security_badge': '100%安全 - 文件安全处理',
            'section_title': 'PDF保护工具', 'section_subtitle': '为您的PDF添加密码保护',
            'privacy_badge': '100%安全。文件安全处理。', 'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'url_placeholder': '在此粘贴Dropbox或Google Drive链接...', 'import_file_btn': '导入文件', 'download_status': '下载中...',
            'supported_services': '支持的服务:', 'service_dropbox': 'Dropbox: 分享链接并粘贴到这里', 'service_gdrive': 'Google Drive: 获取可共享链接',
            'service_direct': '直接PDF URL', 'max_file_size': '最大大小：50MB',
            'upload_text': '点击或拖动PDF文件', 'upload_pdf_subtext': 'PDF文件 • 最大50MB',
            'why_choose_title': '为什么使用我们的PDF保护器', 'why_choose_subtitle': '强大功能保护您的PDF',
            'feature_password_title': '强密码保护', 'feature_password_desc': '添加安全加密以防止未经授权的访问。',
            'feature_fast_title': '快速处理', 'feature_fast_desc': '快速保护文件，无需长时间等待。',
            'feature_security_title': '完全安全', 'feature_security_desc': '您的文档保持安全。文件已加密。',
            'feature_privacy_title': '隐私保证', 'feature_privacy_desc': '我们从不存储您的文档。',
            'how_to_title': '如何保护PDF文件', 'how_to_subtitle': '添加保护的简单步骤',
            'step1_title': '上传PDF', 'step1_desc': '选择或拖动您的PDF文件。',
            'step2_title': '设置密码', 'step2_desc': '输入强密码。',
            'step3_title': '保护和下载', 'step3_desc': '下载您受保护的PDF。',
            'faq_title': '常见问题', 'faq_subtitle': '关于PDF保护的一切',
            'faq1_question': '密码保护有多安全？', 'faq1_answer': '我们使用标准加密。只有拥有密码的人才能打开文件。',
            'faq2_question': '我可以保护多个PDF吗？', 'faq2_answer': '目前，为了最佳安全性，一次只能保护一个PDF。',
            'faq3_question': '我的文件会怎样？', 'faq3_answer': '它们在您的浏览器中本地处理，从不上传到我们的服务器。',
            'faq4_question': '我可以删除保护吗？', 'faq4_answer': '是的，如果您知道密码，请使用我们的解锁PDF工具。',
            'language': '语言', 'footer_description': '您的完整PDF解决方案。免费在线。',
            'footer_tools_title': '工具', 'footer_pdf_compressor': '压缩PDF', 'footer_pdf_merger': '合并PDF',
            'footer_support_title': '支持', 'footer_faq': '常见问题', 'footer_how_it_works': '如何运作', 'footer_contact': '联系',
            'footer_terms': '条款', 'footer_privacy': '隐私',
            'footer_copyright': '© 2025 PDFrow. 版权所有。用❤️制作'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_current': 'PDF保護', 'page_title': 'PDFをオンラインで保護',
            'page_description': 'パスワード保護でPDFを保護します。暗号化を追加してセキュリティを確保。',
            'feature_strong_encryption': '強力な暗号化', 'feature_secure_processing': '安全な処理', 'feature_fast_protection': '高速保護', 'feature_privacy_protected': 'プライバシー保護',
            'security_badge': '100%安全 - ファイルは安全に処理されます',
            'section_title': 'PDF保護ツール', 'section_subtitle': 'PDFにパスワード保護を追加',
            'privacy_badge': '100%安全。ファイルは安全に処理されます。', 'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付けてください...', 'import_file_btn': 'ファイルをインポート', 'download_status': 'ダウンロード中...',
            'supported_services': 'サポートされているサービス:', 'service_dropbox': 'Dropbox: リンクを共有してここに貼り付けます', 'service_gdrive': 'Google Drive: 共有可能なリンクを取得',
            'service_direct': '直接PDF URL', 'max_file_size': '最大サイズ：50MB',
            'upload_text': 'クリックまたはPDFファイルをドラッグ', 'upload_pdf_subtext': 'PDFファイル • 最大50MB',
            'why_choose_title': 'なぜPDF保護ツールを使用するのか', 'why_choose_subtitle': 'PDFを保護する強力な機能',
            'feature_password_title': '強力なパスワード保護', 'feature_password_desc': '不正アクセスを防ぐための安全な暗号化を追加します。',
            'feature_fast_title': '高速処理', 'feature_fast_desc': '長い待ち時間なしでファイルを素早く保護します。',
            'feature_security_title': '完全なセキュリティ', 'feature_security_desc': 'ドキュメントは安全に保たれます。ファイルは暗号化されます。',
            'feature_privacy_title': 'プライバシー保証', 'feature_privacy_desc': 'ドキュメントを保存することはありません。',
            'how_to_title': 'PDFファイルの保護方法', 'how_to_subtitle': '保護を追加する簡単な手順',
            'step1_title': 'PDFをアップロード', 'step1_desc': 'PDFファイルを選択またはドラッグします。',
            'step2_title': 'パスワードを設定', 'step2_desc': '強力なパスワードを入力します。',
            'step3_title': '保護してダウンロード', 'step3_desc': '保護されたPDFをダウンロードします。',
            'faq_title': 'よくある質問', 'faq_subtitle': 'PDFファイル保護に関するすべて',
            'faq1_question': 'パスワード保護はどの程度安全ですか？', 'faq1_answer': '標準の暗号化を使用しています。パスワードを持っている人だけがファイルを開くことができます。',
            'faq2_question': '複数のPDFを保護できますか？', 'faq2_answer': '現在、最適なセキュリティのために一度に1つのPDFを保護できます。',
            'faq3_question': 'ファイルはどうなりますか？', 'faq3_answer': 'ブラウザでローカルに処理され、サーバーにアップロードされることはありません。',
            'faq4_question': '保護を削除できますか？', 'faq4_answer': 'はい、パスワードがわかれば、PDF ロック解除ツールを使用してください。',
            'language': '言語', 'footer_description': '完全なPDFソリューション。無料オンライン。',
            'footer_tools_title': 'ツール', 'footer_pdf_compressor': 'PDF圧縮', 'footer_pdf_merger': 'PDF結合',
            'footer_support_title': 'サポート', 'footer_faq': 'よくある質問', 'footer_how_it_works': '使い方', 'footer_contact': 'お問い合わせ',
            'footer_terms': '利用規約', 'footer_privacy': 'プライバシー',
            'footer_copyright': '© 2025 PDFrow. 全著作権所有。❤️で作られました'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'المميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_current': 'حماية PDF', 'page_title': 'حماية PDF عبر الإنترنت',
            'page_description': 'احمِ مستندات PDF بحماية كلمة مرور. أضف التشفير للأمان.',
            'feature_strong_encryption': 'تشفير قوي', 'feature_secure_processing': 'معالجة آمنة', 'feature_fast_protection': 'حماية سريعة', 'feature_privacy_protected': 'الخصوصية محمية',
            'security_badge': 'آمن 100% - تتم معالجة الملفات بأمان',
            'section_title': 'أداة حماية PDF', 'section_subtitle': 'أضف حماية كلمة مرور إلى ملفات PDF',
            'privacy_badge': 'آمن 100%. تتم معالجة الملفات بأمان.', 'upload_from_computer': 'التحميل من الكمبيوتر', 'import_from_url': 'استيراد من URL',
            'url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...', 'import_file_btn': 'استيراد الملف', 'download_status': 'جاري التنزيل...',
            'supported_services': 'الخدمات المدعومة:', 'service_dropbox': 'Dropbox: شارك الرابط والصقه هنا', 'service_gdrive': 'Google Drive: احصل على رابط قابل للمشاركة',
            'service_direct': 'روابط PDF مباشرة', 'max_file_size': 'الحد الأقصى: 50 ميجابايت',
            'upload_text': 'انقر أو اسحب ملفات PDF', 'upload_pdf_subtext': 'ملفات PDF • حتى 50 ميجابايت',
            'why_choose_title': 'لماذا تستخدم حامي PDF لدينا', 'why_choose_subtitle': 'ميزات قوية لحماية ملفات PDF',
            'feature_password_title': 'حماية كلمة مرور قوية', 'feature_password_desc': 'أضف تشفيرًا آمنًا لمنع الوصول غير المصرح به.',
            'feature_fast_title': 'معالجة سريعة', 'feature_fast_desc': 'احمِ الملفات بسرعة بدون انتظار طويل.',
            'feature_security_title': 'أمان كامل', 'feature_security_desc': 'تبقى مستنداتك آمنة. الملفات مشفرة.',
            'feature_privacy_title': 'ضمان الخصوصية', 'feature_privacy_desc': 'لا نقوم بتخزين مستنداتك أبدًا.',
            'how_to_title': 'كيفية حماية ملفات PDF', 'how_to_subtitle': 'خطوات بسيطة لإضافة الحماية',
            'step1_title': 'تحميل PDF', 'step1_desc': 'حدد أو اسحب ملف PDF الخاص بك.',
            'step2_title': 'تعيين كلمة مرور', 'step2_desc': 'أدخل كلمة مرور قوية.',
            'step3_title': 'حماية وتنزيل', 'step3_desc': 'قم بتنزيل PDF المحمي.',
            'faq_title': 'الأسئلة الشائعة', 'faq_subtitle': 'كل شيء عن حماية ملفات PDF',
            'faq1_question': 'ما مدى أمان الحماية؟', 'faq1_answer': 'نستخدم التشفير القياسي. فقط من لديه كلمة المرور يمكنه فتح الملف.',
            'faq2_question': 'هل يمكنني حماية عدة ملفات PDF؟', 'faq2_answer': 'حاليًا، ملف PDF واحد في كل مرة للأمان الأمثل.',
            'faq3_question': 'ماذا يحدث لملفاتي؟', 'faq3_answer': 'تتم معالجتها محليًا في متصفحك ولا يتم تحميلها على خوادمنا أبدًا.',
            'faq4_question': 'هل يمكنني إزالة الحماية؟', 'faq4_answer': 'نعم، إذا كنت تعرف كلمة المرور، استخدم أداة فتح PDF الخاصة بنا.',
            'language': 'اللغة', 'footer_description': 'حل PDF الكامل الخاص بك. مجاني عبر الإنترنت.',
            'footer_tools_title': 'الأدوات', 'footer_pdf_compressor': 'ضغط PDF', 'footer_pdf_merger': 'دمج PDF',
            'footer_support_title': 'الدعم', 'footer_faq': 'الأسئلة الشائعة', 'footer_how_it_works': 'كيف يعمل', 'footer_contact': 'اتصل بنا',
            'footer_terms': 'الشروط', 'footer_privacy': 'الخصوصية',
            'footer_copyright': '© 2025 PDFrow. جميع الحقوق محفوظة. صُنع بـ ❤️'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'FAQ',
            'btn_login': 'लॉग इन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफ़ाइल', 'btn_logout': 'लॉग आउट',
            'breadcrumb_home': 'होम', 'breadcrumb_current': 'PDF सुरक्षित करें', 'page_title': 'PDF ऑनलाइन सुरक्षित करें',
            'page_description': 'पासवर्ड सुरक्षा के साथ अपने PDF को सुरक्षित करें। सुरक्षा के लिए एन्क्रिप्शन जोड़ें।',
            'feature_strong_encryption': 'मजबूत एन्क्रिप्शन', 'feature_secure_processing': 'सुरक्षित प्रोसेसिंग', 'feature_fast_protection': 'तेज़ सुरक्षा', 'feature_privacy_protected': 'गोपनीयता सुरक्षित',
            'security_badge': '100% सुरक्षित - फ़ाइलें सुरक्षित रूप से संसाधित',
            'section_title': 'PDF सुरक्षा उपकरण', 'section_subtitle': 'अपने PDF में पासवर्ड सुरक्षा जोड़ें',
            'privacy_badge': '100% सुरक्षित। फ़ाइलें सुरक्षित रूप से संसाधित।', 'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से आयात करें',
            'url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...', 'import_file_btn': 'फ़ाइल आयात करें', 'download_status': 'डाउनलोड हो रहा है...',
            'supported_services': 'समर्थित सेवाएं:', 'service_dropbox': 'Dropbox: लिंक साझा करें और यहां पेस्ट करें', 'service_gdrive': 'Google Drive: साझा करने योग्य लिंक प्राप्त करें',
            'service_direct': 'प्रत्यक्ष PDF URLs', 'max_file_size': 'अधिकतम आकार: 50MB',
            'upload_text': 'क्लिक करें या PDF फ़ाइलें खींचें', 'upload_pdf_subtext': 'PDF फ़ाइलें • 50MB तक',
            'why_choose_title': 'हमारे PDF रक्षक का उपयोग क्यों करें', 'why_choose_subtitle': 'आपके PDF को सुरक्षित करने की शक्तिशाली सुविधाएँ',
            'feature_password_title': 'मजबूत पासवर्ड सुरक्षा', 'feature_password_desc': 'अनधिकृत पहुंच को रोकने के लिए सुरक्षित एन्क्रिप्शन जोड़ें।',
            'feature_fast_title': 'तेज़ प्रोसेसिंग', 'feature_fast_desc': 'लंबी प्रतीक्षा के बिना फ़ाइलों को जल्दी सुरक्षित करें।',
            'feature_security_title': 'पूर्ण सुरक्षा', 'feature_security_desc': 'आपके दस्तावेज़ सुरक्षित रहते हैं। फ़ाइलें एन्क्रिप्टेड हैं।',
            'feature_privacy_title': 'गोपनीयता की गारंटी', 'feature_privacy_desc': 'हम कभी भी आपके दस्तावेज़ संग्रहीत नहीं करते।',
            'how_to_title': 'PDF फ़ाइलों को कैसे सुरक्षित करें', 'how_to_subtitle': 'सुरक्षा जोड़ने के लिए सरल कदम',
            'step1_title': 'PDF अपलोड करें', 'step1_desc': 'अपनी PDF फ़ाइल चुनें या खींचें।',
            'step2_title': 'पासवर्ड सेट करें', 'step2_desc': 'एक मजबूत पासवर्ड दर्ज करें।',
            'step3_title': 'सुरक्षित करें और डाउनलोड करें', 'step3_desc': 'अपनी सुरक्षित PDF डाउनलोड करें।',
            'faq_title': 'अक्सर पूछे जाने वाले प्रश्न', 'faq_subtitle': 'PDF फ़ाइल सुरक्षा के बारे में सब कुछ',
            'faq1_question': 'सुरक्षा कितनी सुरक्षित है?', 'faq1_answer': 'हम मानक एन्क्रिप्शन का उपयोग करते हैं। केवल पासवर्ड वाला व्यक्ति फ़ाइल खोल सकता है।',
            'faq2_question': 'क्या मैं कई PDF सुरक्षित कर सकता हूं?', 'faq2_answer': 'वर्तमान में, इष्टतम सुरक्षा के लिए एक समय में एक PDF।',
            'faq3_question': 'मेरी फ़ाइलों का क्या होता है?', 'faq3_answer': 'वे आपके ब्राउज़र में स्थानीय रूप से संसाधित होती हैं और कभी भी हमारे सर्वर पर अपलोड नहीं होती हैं।',
            'faq4_question': 'क्या मैं सुरक्षा हटा सकता हूं?', 'faq4_answer': 'हां, यदि आप पासवर्ड जानते हैं, तो हमारे PDF अनलॉक टूल का उपयोग करें।',
            'language': 'भाषा', 'footer_description': 'आपका पूर्ण PDF समाधान। मुफ्त ऑनलाइन।',
            'footer_tools_title': 'उपकरण', 'footer_pdf_compressor': 'PDF संपीड़ित करें', 'footer_pdf_merger': 'PDF मर्ज करें',
            'footer_support_title': 'समर्थन', 'footer_faq': 'FAQ', 'footer_how_it_works': 'यह कैसे काम करता है', 'footer_contact': 'संपर्क करें',
            'footer_terms': 'नियम', 'footer_privacy': 'गोपनीयता',
            'footer_copyright': '© 2025 PDFrow. सर्वाधिकार सुरक्षित। ❤️ से बनाया गया'
        }
    };

    return allTranslations[langCode] || allTranslations['en'];
}

function loadLanguage(langCode) {
    const translations = getTranslations(langCode);
    console.log('Loading language:', langCode);

    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements with data-translate:', elements.length);

    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            if (element.tagName === 'INPUT' && element.type !== 'submit' && element.type !== 'button') {
                element.placeholder = translations[key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[key];
            } else {
                if (translations[key].includes('<strong>')) {
                    element.innerHTML = translations[key];
                } else {
                    element.textContent = translations[key];
                }
            }
        }
    });

    localStorage.setItem('preferredLanguage', langCode);
    console.log('Language preference saved:', langCode);
}

// Language switcher functionality
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
