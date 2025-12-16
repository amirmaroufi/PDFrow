// Translation system for sign-pdf.html
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
            'breadcrumb_current': 'Sign PDF',
            'page_title': 'Sign PDF Online',
            'page_description': 'Add professional digital signatures to your PDF documents with ease. Draw, type, or upload signatures securely and for free.',
            'feature_draw_signature': 'Draw Signature',
            'feature_type_signature': 'Type Signature',
            'feature_upload_signature': 'Upload Image',
            'feature_secure': '100% Secure',
            'security_badge': '100% Secure - Files processed locally',

            // Tool Section
            'section_title': 'PDF Signature Tool',
            'section_subtitle': 'Sign your PDFs with professional digital signatures',
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
            'upload_area_pdf': 'Upload PDF to Sign',
            'upload_text': 'Click to select or drag and drop your PDF files',
            'upload_pdf_subtext': 'PDF files • Up to 50MB per file • Multiple files supported',

            // Signature Tools
            'start_signing_btn': 'Start Signing',
            'hint_upload_pdf_first': 'Upload a PDF file above to start signing',
            'workspace_title': 'Sign Your PDF',
            'tab_draw': 'Draw',
            'tab_type': 'Type',
            'tab_upload': 'Upload',
            'btn_add_signature': 'Add Signature',
            'btn_clear': 'Clear',
            'btn_save_sign': 'Save & Sign',
            'btn_download': 'Download PDF',
            'signature_color': 'Signature Color:',
            'signature_font': 'Signature Font:',
            'type_your_signature': 'Type your signature here...',
            'upload_signature_image': 'Upload Signature Image',
            'supported_formats': 'PNG, JPG, or GIF • Max 5MB',

            // Preview Section
            'preview_title': 'Document Preview',
            'btn_previous': '← Previous',
            'btn_next': 'Next →',
            'page_info': 'Page',
            'of': 'of',

            // Success State
            'success_title': 'PDF signed successfully!',
            'success_description': 'Your signed PDF is ready for download',
            'download_pdf': 'Download Signed PDF',
            'process_another': 'Sign Another PDF',
            'continue_title': 'Continue editing your PDF:',

            // Continue Tools
            'tool_merge': 'Merge PDF',
            'tool_split': 'Split PDF',
            'tool_compress': 'Compress',
            'tool_crop': 'Crop PDF',
            'tool_rotate': 'Rotate PDF',
            'tool_unlock': 'Unlock PDF',

            // Why Choose Section
            'why_choose_title': 'Why Choose PDFrow PDF Signature Tool?',
            'why_choose_subtitle': 'Professional, fast, and secure PDF signing',
            'feature_lightning_fast_title': 'Lightning Fast',
            'feature_lightning_fast_desc': 'Sign PDF documents in seconds with our optimized processing engine',
            'feature_secure_title': '100% Secure',
            'feature_secure_desc': 'Your files are processed locally and automatically deleted after processing',
            'feature_multiple_options_title': 'Multiple Options',
            'feature_multiple_options_desc': 'Draw, type, or upload your signature with customizable styling',
            'feature_no_software_title': 'No Software Needed',
            'feature_no_software_desc': 'Works directly in your browser - no downloads or installations required',

            // How It Works Section
            'how_to_title': 'How to Sign PDF Documents',
            'how_to_subtitle': 'Simple 3-step process to add your signature',
            'step1_title': 'Upload PDF',
            'step1_desc': 'Select or drag and drop your PDF file to get started',
            'step2_title': 'Add Signature',
            'step2_desc': 'Draw, type, or upload your signature and position it on the document',
            'step3_title': 'Download',
            'step3_desc': 'Get your professionally signed PDF instantly',

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
            'footer_copyright': '© 2025 PDFrow. All rights reserved. Made with ❤️ for document processing.',

            // Support Modal
            'support_title': 'Support PDFrow ❤️',
            'support_subtitle': 'Help us keep PDFrow free and improve our services',
            'support_message': 'Your support helps us:',
            'support_point_1': 'Keep servers running and fast',
            'support_point_2': 'Add new features regularly',
            'support_point_3': 'Maintain high security standards',
            'support_point_4': 'Provide excellent user experience',
            'support_share_title': 'Share PDFrow',
            'support_share_desc': 'Tell your friends about PDFrow',
            'share_twitter': 'Twitter',
            'share_facebook': 'Facebook',
            'support_donation_title': 'Make a Donation',
            'support_donation_desc': 'Support our mission with a contribution',
            'donate_paypal': 'PayPal',
            'support_thanks': 'Thank you for your support! 🙏',

            // Auth Modal
            'login_title': 'Welcome Back',
            'login_subtitle': 'Sign in to access your PDFrow account',
            'label_email': 'Email',
            'label_password': 'Password',
            'btn_sign_in': 'Sign In',
            'auth_or': 'or',
            'btn_continue_google': 'Continue with Google',
            'link_forgot_password': 'Forgot password?',
            'auth_no_account': "Don't have an account?",
            'link_sign_up': 'Sign up',
            'signup_title': 'Create Account',
            'signup_subtitle': 'Join PDFrow and unlock premium features',
            'label_name': 'Full Name',
            'checkbox_agree_terms': 'I agree to the',
            'btn_create_account': 'Create Account',
            'auth_have_account': 'Already have an account?',
            'link_sign_in': 'Sign in',
            'contact_title': 'Contact Us',
            'contact_subtitle': "We'd love to hear from you",
            'label_subject': 'Subject',
            'label_message': 'Message',
            'btn_send_message': 'Send Message',
            'contact_success': 'Thank you! Your message has been sent successfully.',
            'contact_error': 'Sorry, there was an error sending your message. Please try again.'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Características', 'nav_how_it_works': 'Cómo Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesión', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesión',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Firmar PDF', 'page_title': 'Firmar PDF en Línea',
            'page_description': 'Agregue firmas digitales profesionales a sus documentos PDF con facilidad. Dibuje, escriba o cargue firmas de forma segura y gratuita.',
            'feature_draw_signature': 'Dibujar Firma', 'feature_type_signature': 'Escribir Firma', 'feature_upload_signature': 'Cargar Imagen', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Los archivos se procesan localmente',
            'section_title': 'Herramienta de Firma PDF', 'section_subtitle': 'Firme sus PDFs con firmas digitales profesionales',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.', 'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aquí...', 'import_file_btn': 'Importar Archivo', 'download_status': 'Descargando...',
            'supported_services': 'Servicios compatibles:', 'service_dropbox': 'Dropbox: Comparta el enlace y péguelo aquí', 'service_gdrive': 'Google Drive: Obtenga un enlace compartible (Cualquiera con el enlace puede ver)',
            'service_direct': 'URLs directas de PDF', 'max_file_size': 'Tamaño máximo de archivo: 50MB',
            'upload_area_pdf': 'Subir PDF para Firmar', 'upload_text': 'Haga clic para seleccionar o arrastre y suelte sus archivos PDF', 'upload_pdf_subtext': 'Archivos PDF • Hasta 50MB por archivo • Múltiples archivos compatibles',
            'start_signing_btn': 'Comenzar a Firmar', 'hint_upload_pdf_first': 'Suba un archivo PDF arriba para comenzar a firmar',
            'workspace_title': 'Firme su PDF', 'tab_draw': 'Dibujar', 'tab_type': 'Escribir', 'tab_upload': 'Cargar',
            'btn_add_signature': 'Agregar Firma', 'btn_clear': 'Limpiar', 'btn_save_sign': 'Guardar y Firmar', 'btn_download': 'Descargar PDF',
            'signature_color': 'Color de Firma:', 'signature_font': 'Fuente de Firma:', 'type_your_signature': 'Escriba su firma aquí...', 'upload_signature_image': 'Cargar Imagen de Firma', 'supported_formats': 'PNG, JPG o GIF • Máx 5MB',
            'preview_title': 'Vista Previa del Documento', 'btn_previous': '← Anterior', 'btn_next': 'Siguiente →', 'page_info': 'Página', 'of': 'de',
            'success_title': '¡PDF firmado con éxito!', 'success_description': 'Su PDF firmado está listo para descargar',
            'download_pdf': 'Descargar PDF Firmado', 'process_another': 'Firmar Otro PDF', 'continue_title': 'Continuar editando su PDF:',
            'tool_merge': 'Combinar PDF', 'tool_split': 'Dividir PDF', 'tool_compress': 'Comprimir', 'tool_crop': 'Recortar PDF', 'tool_rotate': 'Rotar PDF', 'tool_unlock': 'Desbloquear PDF',
            'why_choose_title': '¿Por qué elegir la herramienta de firma PDF de PDFrow?', 'why_choose_subtitle': 'Firma de PDF profesional, rápida y segura',
            'feature_lightning_fast_title': 'Ultra Rápido', 'feature_lightning_fast_desc': 'Firme documentos PDF en segundos con nuestro motor de procesamiento optimizado',
            'feature_secure_title': '100% Seguro', 'feature_secure_desc': 'Sus archivos se procesan localmente y se eliminan automáticamente después del procesamiento',
            'feature_multiple_options_title': 'Múltiples Opciones', 'feature_multiple_options_desc': 'Dibuje, escriba o cargue su firma con estilo personalizable',
            'feature_no_software_title': 'No Se Necesita Software', 'feature_no_software_desc': 'Funciona directamente en su navegador: no se requieren descargas ni instalaciones',
            'how_to_title': 'Cómo Firmar Documentos PDF', 'how_to_subtitle': 'Proceso simple de 3 pasos para agregar su firma',
            'step1_title': 'Subir PDF', 'step1_desc': 'Seleccione o arrastre y suelte su archivo PDF para comenzar',
            'step2_title': 'Agregar Firma', 'step2_desc': 'Dibuje, escriba o cargue su firma y colóquela en el documento',
            'step3_title': 'Descargar', 'step3_desc': 'Obtenga su PDF firmado profesionalmente al instante',
            'language': 'Idioma', 'footer_description': 'Su solución PDF todo en uno. Edite, convierta, combine y administre PDFs en línea gratis.',
            'footer_tools_title': 'Herramientas', 'footer_pdf_compressor': 'Comprimir PDF', 'footer_pdf_merger': 'Combinar PDF',
            'footer_support_title': 'Soporte', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Cómo Funciona', 'footer_contact': 'Contacto', 'footer_terms': 'Términos y Condiciones', 'footer_privacy': 'Política de Privacidad',
            'footer_copyright': '© 2025 PDFrow. Todos los derechos reservados. Hecho con ❤️ para procesamiento de documentos.',
            'support_title': 'Apoyar a PDFrow ❤️', 'support_subtitle': 'Ayúdenos a mantener PDFrow gratis y mejorar nuestros servicios',
            'support_message': 'Su apoyo nos ayuda a:', 'support_point_1': 'Mantener los servidores funcionando y rápidos', 'support_point_2': 'Agregar nuevas funciones regularmente',
            'support_point_3': 'Mantener altos estándares de seguridad', 'support_point_4': 'Proporcionar excelente experiencia de usuario',
            'support_share_title': 'Compartir PDFrow', 'support_share_desc': 'Cuéntale a tus amigos sobre PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Hacer una Donación', 'support_donation_desc': 'Apoye nuestra misión con una contribución', 'donate_paypal': 'PayPal', 'support_thanks': '¡Gracias por su apoyo! 🙏',
            'login_title': 'Bienvenido de Nuevo', 'login_subtitle': 'Inicie sesión para acceder a su cuenta de PDFrow',
            'label_email': 'Correo Electrónico', 'label_password': 'Contraseña', 'btn_sign_in': 'Iniciar Sesión', 'auth_or': 'o',
            'btn_continue_google': 'Continuar con Google', 'link_forgot_password': '¿Olvidó su contraseña?', 'auth_no_account': '¿No tiene una cuenta?',
            'link_sign_up': 'Registrarse', 'signup_title': 'Crear Cuenta', 'signup_subtitle': 'Únase a PDFrow y desbloquee funciones premium', 'label_name': 'Nombre Completo',
            'checkbox_agree_terms': 'Acepto los', 'btn_create_account': 'Crear Cuenta', 'auth_have_account': '¿Ya tiene una cuenta?', 'link_sign_in': 'Iniciar sesión',
            'contact_title': 'Contáctenos', 'contact_subtitle': 'Nos encantaría saber de usted', 'label_subject': 'Asunto', 'label_message': 'Mensaje',
            'btn_send_message': 'Enviar Mensaje', 'contact_success': '¡Gracias! Su mensaje ha sido enviado con éxito.', 'contact_error': 'Lo sentimos, hubo un error al enviar su mensaje. Por favor, inténtelo de nuevo.'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Déconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_current': 'Signer PDF', 'page_title': 'Signer PDF en Ligne',
            'page_description': 'Ajoutez des signatures numériques professionnelles à vos documents PDF en toute simplicité. Dessinez, tapez ou téléchargez des signatures en toute sécurité et gratuitement.',
            'feature_draw_signature': 'Dessiner Signature', 'feature_type_signature': 'Taper Signature', 'feature_upload_signature': 'Télécharger Image', 'feature_secure': '100% Sécurisé',
            'security_badge': '100% Sécurisé - Les fichiers sont traités localement',
            'section_title': 'Outil de Signature PDF', 'section_subtitle': 'Signez vos PDFs avec des signatures numériques professionnelles',
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.', 'upload_from_computer': 'Télécharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...', 'import_file_btn': 'Importer le Fichier', 'download_status': 'Téléchargement...',
            'supported_services': 'Services pris en charge:', 'service_dropbox': 'Dropbox: Partagez le lien et collez-le ici', 'service_gdrive': 'Google Drive: Obtenez un lien partageable (Toute personne disposant du lien peut voir)',
            'service_direct': 'URLs PDF directes', 'max_file_size': 'Taille maximale du fichier: 50MB',
            'upload_area_pdf': 'Télécharger PDF à Signer', 'upload_text': 'Cliquez pour sélectionner ou glissez-déposez vos fichiers PDF', 'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 50MB par fichier • Plusieurs fichiers pris en charge',
            'start_signing_btn': 'Commencer à Signer', 'hint_upload_pdf_first': 'Téléchargez un fichier PDF ci-dessus pour commencer à signer',
            'workspace_title': 'Signez votre PDF', 'tab_draw': 'Dessiner', 'tab_type': 'Taper', 'tab_upload': 'Télécharger',
            'btn_add_signature': 'Ajouter Signature', 'btn_clear': 'Effacer', 'btn_save_sign': 'Sauvegarder et Signer', 'btn_download': 'Télécharger PDF',
            'signature_color': 'Couleur de Signature:', 'signature_font': 'Police de Signature:', 'type_your_signature': 'Tapez votre signature ici...', 'upload_signature_image': 'Télécharger Image de Signature', 'supported_formats': 'PNG, JPG ou GIF • Max 5MB',
            'preview_title': 'Aperçu du Document', 'btn_previous': '← Précédent', 'btn_next': 'Suivant →', 'page_info': 'Page', 'of': 'de',
            'success_title': 'PDF signé avec succès!', 'success_description': 'Votre PDF signé est prêt au téléchargement',
            'download_pdf': 'Télécharger PDF Signé', 'process_another': 'Signer un Autre PDF', 'continue_title': 'Continuer à modifier votre PDF:',
            'tool_merge': 'Fusionner PDF', 'tool_split': 'Diviser PDF', 'tool_compress': 'Compresser', 'tool_crop': 'Rogner PDF', 'tool_rotate': 'Pivoter PDF', 'tool_unlock': 'Déverrouiller PDF',
            'why_choose_title': 'Pourquoi choisir l\'outil de signature PDF PDFrow?', 'why_choose_subtitle': 'Signature PDF professionnelle, rapide et sécurisée',
            'feature_lightning_fast_title': 'Ultra Rapide', 'feature_lightning_fast_desc': 'Signez des documents PDF en quelques secondes avec notre moteur de traitement optimisé',
            'feature_secure_title': '100% Sécurisé', 'feature_secure_desc': 'Vos fichiers sont traités localement et automatiquement supprimés après le traitement',
            'feature_multiple_options_title': 'Options Multiples', 'feature_multiple_options_desc': 'Dessinez, tapez ou téléchargez votre signature avec un style personnalisable',
            'feature_no_software_title': 'Aucun Logiciel Requis', 'feature_no_software_desc': 'Fonctionne directement dans votre navigateur - aucun téléchargement ni installation requis',
            'how_to_title': 'Comment Signer des Documents PDF', 'how_to_subtitle': 'Processus simple en 3 étapes pour ajouter votre signature',
            'step1_title': 'Télécharger PDF', 'step1_desc': 'Sélectionnez ou glissez-déposez votre fichier PDF pour commencer',
            'step2_title': 'Ajouter Signature', 'step2_desc': 'Dessinez, tapez ou téléchargez votre signature et positionnez-la sur le document',
            'step3_title': 'Télécharger', 'step3_desc': 'Obtenez votre PDF signé professionnellement instantanément',
            'language': 'Langue', 'footer_description': 'Votre solution PDF tout-en-un. Modifiez, convertissez, fusionnez et gérez des PDFs en ligne gratuitement.',
            'footer_tools_title': 'Outils', 'footer_pdf_compressor': 'Compresser PDF', 'footer_pdf_merger': 'Fusionner PDF',
            'footer_support_title': 'Support', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Comment Ça Marche', 'footer_contact': 'Contact', 'footer_terms': 'Conditions Générales', 'footer_privacy': 'Politique de Confidentialité',
            'footer_copyright': '© 2025 PDFrow. Tous droits réservés. Fait avec ❤️ pour le traitement de documents.',
            'support_title': 'Soutenir PDFrow ❤️', 'support_subtitle': 'Aidez-nous à garder PDFrow gratuit et à améliorer nos services',
            'support_message': 'Votre soutien nous aide à:', 'support_point_1': 'Maintenir les serveurs en fonctionnement et rapides', 'support_point_2': 'Ajouter régulièrement de nouvelles fonctionnalités',
            'support_point_3': 'Maintenir des normes de sécurité élevées', 'support_point_4': 'Fournir une excellente expérience utilisateur',
            'support_share_title': 'Partager PDFrow', 'support_share_desc': 'Parlez de PDFrow à vos amis', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Faire un Don', 'support_donation_desc': 'Soutenez notre mission avec une contribution', 'donate_paypal': 'PayPal', 'support_thanks': 'Merci pour votre soutien! 🙏',
            'login_title': 'Bienvenue', 'login_subtitle': 'Connectez-vous pour accéder à votre compte PDFrow',
            'label_email': 'E-mail', 'label_password': 'Mot de passe', 'btn_sign_in': 'Se Connecter', 'auth_or': 'ou',
            'btn_continue_google': 'Continuer avec Google', 'link_forgot_password': 'Mot de passe oublié?', 'auth_no_account': 'Vous n\'avez pas de compte?',
            'link_sign_up': 'S\'inscrire', 'signup_title': 'Créer un Compte', 'signup_subtitle': 'Rejoignez PDFrow et débloquez des fonctionnalités premium', 'label_name': 'Nom Complet',
            'checkbox_agree_terms': 'J\'accepte les', 'btn_create_account': 'Créer un Compte', 'auth_have_account': 'Vous avez déjà un compte?', 'link_sign_in': 'Se connecter',
            'contact_title': 'Contactez-nous', 'contact_subtitle': 'Nous serions ravis de vous entendre', 'label_subject': 'Sujet', 'label_message': 'Message',
            'btn_send_message': 'Envoyer le Message', 'contact_success': 'Merci! Votre message a été envoyé avec succès.', 'contact_error': 'Désolé, une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_current': 'PDF Signieren', 'page_title': 'PDF Online Signieren',
            'page_description': 'Fügen Sie Ihren PDF-Dokumenten ganz einfach professionelle digitale Signaturen hinzu. Zeichnen, tippen oder laden Sie Signaturen sicher und kostenlos hoch.',
            'feature_draw_signature': 'Signatur Zeichnen', 'feature_type_signature': 'Signatur Tippen', 'feature_upload_signature': 'Bild Hochladen', 'feature_secure': '100% Sicher',
            'security_badge': '100% Sicher - Dateien werden lokal verarbeitet',
            'section_title': 'PDF-Signatur-Tool', 'section_subtitle': 'Signieren Sie Ihre PDFs mit professionellen digitalen Signaturen',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.', 'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'url_placeholder': 'Dropbox- oder Google Drive-Link hier einfügen...', 'import_file_btn': 'Datei Importieren', 'download_status': 'Herunterladen...',
            'supported_services': 'Unterstützte Dienste:', 'service_dropbox': 'Dropbox: Link teilen und hier einfügen', 'service_gdrive': 'Google Drive: Teilbaren Link abrufen (Jeder mit dem Link kann ansehen)',
            'service_direct': 'Direkte PDF-URLs', 'max_file_size': 'Maximale Dateigröße: 50MB',
            'upload_area_pdf': 'PDF zum Signieren Hochladen', 'upload_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Dateien hierher', 'upload_pdf_subtext': 'PDF-Dateien • Bis zu 50MB pro Datei • Mehrere Dateien unterstützt',
            'start_signing_btn': 'Signieren Beginnen', 'hint_upload_pdf_first': 'Laden Sie oben eine PDF-Datei hoch, um mit dem Signieren zu beginnen',
            'workspace_title': 'Signieren Sie Ihr PDF', 'tab_draw': 'Zeichnen', 'tab_type': 'Tippen', 'tab_upload': 'Hochladen',
            'btn_add_signature': 'Signatur Hinzufügen', 'btn_clear': 'Löschen', 'btn_save_sign': 'Speichern und Signieren', 'btn_download': 'PDF Herunterladen',
            'signature_color': 'Signaturfarbe:', 'signature_font': 'Signaturschrift:', 'type_your_signature': 'Geben Sie Ihre Signatur hier ein...', 'upload_signature_image': 'Signaturbild Hochladen', 'supported_formats': 'PNG, JPG oder GIF • Max 5MB',
            'preview_title': 'Dokumentvorschau', 'btn_previous': '← Zurück', 'btn_next': 'Weiter →', 'page_info': 'Seite', 'of': 'von',
            'success_title': 'PDF erfolgreich signiert!', 'success_description': 'Ihr signiertes PDF ist zum Download bereit',
            'download_pdf': 'Signiertes PDF Herunterladen', 'process_another': 'Weiteres PDF Signieren', 'continue_title': 'Bearbeiten Sie Ihr PDF weiter:',
            'tool_merge': 'PDF Zusammenführen', 'tool_split': 'PDF Teilen', 'tool_compress': 'Komprimieren', 'tool_crop': 'PDF Zuschneiden', 'tool_rotate': 'PDF Drehen', 'tool_unlock': 'PDF Entsperren',
            'why_choose_title': 'Warum PDFrow PDF-Signatur-Tool wählen?', 'why_choose_subtitle': 'Professionelle, schnelle und sichere PDF-Signatur',
            'feature_lightning_fast_title': 'Blitzschnell', 'feature_lightning_fast_desc': 'Signieren Sie PDF-Dokumente in Sekunden mit unserer optimierten Verarbeitungs-Engine',
            'feature_secure_title': '100% Sicher', 'feature_secure_desc': 'Ihre Dateien werden lokal verarbeitet und nach der Verarbeitung automatisch gelöscht',
            'feature_multiple_options_title': 'Mehrere Optionen', 'feature_multiple_options_desc': 'Zeichnen, tippen oder laden Sie Ihre Signatur mit anpassbarem Stil hoch',
            'feature_no_software_title': 'Keine Software Erforderlich', 'feature_no_software_desc': 'Funktioniert direkt in Ihrem Browser - keine Downloads oder Installationen erforderlich',
            'how_to_title': 'So Signieren Sie PDF-Dokumente', 'how_to_subtitle': 'Einfacher 3-Schritte-Prozess zum Hinzufügen Ihrer Signatur',
            'step1_title': 'PDF Hochladen', 'step1_desc': 'Wählen Sie Ihre PDF-Datei aus oder ziehen Sie sie per Drag & Drop, um zu beginnen',
            'step2_title': 'Signatur Hinzufügen', 'step2_desc': 'Zeichnen, tippen oder laden Sie Ihre Signatur hoch und positionieren Sie sie im Dokument',
            'step3_title': 'Herunterladen', 'step3_desc': 'Erhalten Sie Ihr professionell signiertes PDF sofort',
            'language': 'Sprache', 'footer_description': 'Ihre All-in-One-PDF-Lösung. Bearbeiten, konvertieren, zusammenführen und verwalten Sie PDFs online kostenlos.',
            'footer_tools_title': 'Werkzeuge', 'footer_pdf_compressor': 'PDF Komprimieren', 'footer_pdf_merger': 'PDF Zusammenführen',
            'footer_support_title': 'Support', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Wie es Funktioniert', 'footer_contact': 'Kontakt', 'footer_terms': 'Geschäftsbedingungen', 'footer_privacy': 'Datenschutzrichtlinie',
            'footer_copyright': '© 2025 PDFrow. Alle Rechte vorbehalten. Mit ❤️ für Dokumentenverarbeitung gemacht.',
            'support_title': 'PDFrow Unterstützen ❤️', 'support_subtitle': 'Helfen Sie uns, PDFrow kostenlos zu halten und unsere Dienste zu verbessern',
            'support_message': 'Ihre Unterstützung hilft uns:', 'support_point_1': 'Server am Laufen und schnell halten', 'support_point_2': 'Regelmäßig neue Funktionen hinzufügen',
            'support_point_3': 'Hohe Sicherheitsstandards aufrechterhalten', 'support_point_4': 'Hervorragende Benutzererfahrung bieten',
            'support_share_title': 'PDFrow Teilen', 'support_share_desc': 'Erzählen Sie Ihren Freunden von PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Spenden', 'support_donation_desc': 'Unterstützen Sie unsere Mission mit einem Beitrag', 'donate_paypal': 'PayPal', 'support_thanks': 'Vielen Dank für Ihre Unterstützung! 🙏',
            'login_title': 'Willkommen Zurück', 'login_subtitle': 'Melden Sie sich an, um auf Ihr PDFrow-Konto zuzugreifen',
            'label_email': 'E-Mail', 'label_password': 'Passwort', 'btn_sign_in': 'Anmelden', 'auth_or': 'oder',
            'btn_continue_google': 'Mit Google fortfahren', 'link_forgot_password': 'Passwort vergessen?', 'auth_no_account': 'Haben Sie kein Konto?',
            'link_sign_up': 'Registrieren', 'signup_title': 'Konto Erstellen', 'signup_subtitle': 'Treten Sie PDFrow bei und schalten Sie Premium-Funktionen frei', 'label_name': 'Vollständiger Name',
            'checkbox_agree_terms': 'Ich stimme den', 'btn_create_account': 'Konto Erstellen', 'auth_have_account': 'Haben Sie bereits ein Konto?', 'link_sign_in': 'Anmelden',
            'contact_title': 'Kontaktieren Sie Uns', 'contact_subtitle': 'Wir würden gerne von Ihnen hören', 'label_subject': 'Betreff', 'label_message': 'Nachricht',
            'btn_send_message': 'Nachricht Senden', 'contact_success': 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.', 'contact_error': 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_current': 'Firmare PDF', 'page_title': 'Firmare PDF Online',
            'page_description': 'Aggiungi firme digitali professionali ai tuoi documenti PDF con facilità. Disegna, digita o carica firme in modo sicuro e gratuito.',
            'feature_draw_signature': 'Disegna Firma', 'feature_type_signature': 'Digita Firma', 'feature_upload_signature': 'Carica Immagine', 'feature_secure': '100% Sicuro',
            'security_badge': '100% Sicuro - File elaborati localmente',
            'section_title': 'Strumento Firma PDF', 'section_subtitle': 'Firma i tuoi PDF con firme digitali professionali',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.', 'upload_from_computer': 'Carica dal Computer', 'import_from_url': 'Importa da URL',
            'url_placeholder': 'Incolla il link di Dropbox o Google Drive qui...', 'import_file_btn': 'Importa File', 'download_status': 'Download in corso...',
            'supported_services': 'Servizi supportati:', 'service_dropbox': 'Dropbox: Condividi il link e incollalo qui', 'service_gdrive': 'Google Drive: Ottieni link condivisibile (Chiunque abbia il link può vedere)',
            'service_direct': 'URL PDF diretti', 'max_file_size': 'Dimensione massima del file: 50MB',
            'upload_area_pdf': 'Carica PDF da Firmare', 'upload_text': 'Clicca per selezionare o trascina i tuoi file PDF', 'upload_pdf_subtext': 'File PDF • Fino a 50MB per file • File multipli supportati',
            'start_signing_btn': 'Inizia a Firmare', 'hint_upload_pdf_first': 'Carica un file PDF sopra per iniziare a firmare',
            'workspace_title': 'Firma il tuo PDF', 'tab_draw': 'Disegna', 'tab_type': 'Digita', 'tab_upload': 'Carica',
            'btn_add_signature': 'Aggiungi Firma', 'btn_clear': 'Cancella', 'btn_save_sign': 'Salva e Firma', 'btn_download': 'Scarica PDF',
            'signature_color': 'Colore Firma:', 'signature_font': 'Font Firma:', 'type_your_signature': 'Digita la tua firma qui...', 'upload_signature_image': 'Carica Immagine Firma', 'supported_formats': 'PNG, JPG o GIF • Max 5MB',
            'preview_title': 'Anteprima Documento', 'btn_previous': '← Precedente', 'btn_next': 'Successivo →', 'page_info': 'Pagina', 'of': 'di',
            'success_title': 'PDF firmato con successo!', 'success_description': 'Il tuo PDF firmato è pronto per il download',
            'download_pdf': 'Scarica PDF Firmato', 'process_another': 'Firma un Altro PDF', 'continue_title': 'Continua a modificare il tuo PDF:',
            'tool_merge': 'Unisci PDF', 'tool_split': 'Dividi PDF', 'tool_compress': 'Comprimi', 'tool_crop': 'Ritaglia PDF', 'tool_rotate': 'Ruota PDF', 'tool_unlock': 'Sblocca PDF',
            'why_choose_title': 'Perché Scegliere lo Strumento Firma PDF PDFrow?', 'why_choose_subtitle': 'Firma PDF professionale, veloce e sicura',
            'feature_lightning_fast_title': 'Fulmineo', 'feature_lightning_fast_desc': 'Firma documenti PDF in pochi secondi con il nostro motore di elaborazione ottimizzato',
            'feature_secure_title': '100% Sicuro', 'feature_secure_desc': 'I tuoi file vengono elaborati localmente e cancellati automaticamente dopo l\'elaborazione',
            'feature_multiple_options_title': 'Opzioni Multiple', 'feature_multiple_options_desc': 'Disegna, digita o carica la tua firma con stile personalizzabile',
            'feature_no_software_title': 'Nessun Software Necessario', 'feature_no_software_desc': 'Funziona direttamente nel tuo browser - nessun download o installazione richiesta',
            'how_to_title': 'Come Firmare Documenti PDF', 'how_to_subtitle': 'Semplice processo in 3 passaggi per aggiungere la tua firma',
            'step1_title': 'Carica PDF', 'step1_desc': 'Seleziona o trascina il tuo file PDF per iniziare',
            'step2_title': 'Aggiungi Firma', 'step2_desc': 'Disegna, digita o carica la tua firma e posizionala sul documento',
            'step3_title': 'Scarica', 'step3_desc': 'Ottieni il tuo PDF firmato professionalmente istantaneamente',
            'language': 'Lingua', 'footer_description': 'La tua soluzione PDF all-in-one. Modifica, converti, unisci e gestisci PDF online gratuitamente.',
            'footer_tools_title': 'Strumenti', 'footer_pdf_compressor': 'Comprimi PDF', 'footer_pdf_merger': 'Unisci PDF',
            'footer_support_title': 'Supporto', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Come Funziona', 'footer_contact': 'Contatto', 'footer_terms': 'Termini e Condizioni', 'footer_privacy': 'Politica sulla Privacy',
            'footer_copyright': '© 2025 PDFrow. Tutti i diritti riservati. Fatto con ❤️ per l\'elaborazione di documenti.',
            'support_title': 'Supporta PDFrow ❤️', 'support_subtitle': 'Aiutaci a mantenere PDFrow gratuito e a migliorare i nostri servizi',
            'support_message': 'Il tuo supporto ci aiuta a:', 'support_point_1': 'Mantenere i server in funzione e veloci', 'support_point_2': 'Aggiungere regolarmente nuove funzionalità',
            'support_point_3': 'Mantenere alti standard di sicurezza', 'support_point_4': 'Fornire un\'eccellente esperienza utente',
            'support_share_title': 'Condividi PDFrow', 'support_share_desc': 'Parla di PDFrow ai tuoi amici', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Fai una Donazione', 'support_donation_desc': 'Sostieni la nostra missione con un contributo', 'donate_paypal': 'PayPal', 'support_thanks': 'Grazie per il tuo supporto! 🙏',
            'login_title': 'Bentornato', 'login_subtitle': 'Accedi per accedere al tuo account PDFrow',
            'label_email': 'Email', 'label_password': 'Password', 'btn_sign_in': 'Accedi', 'auth_or': 'oppure',
            'btn_continue_google': 'Continua con Google', 'link_forgot_password': 'Password dimenticata?', 'auth_no_account': 'Non hai un account?',
            'link_sign_up': 'Registrati', 'signup_title': 'Crea Account', 'signup_subtitle': 'Unisciti a PDFrow e sblocca funzionalità premium', 'label_name': 'Nome Completo',
            'checkbox_agree_terms': 'Accetto i', 'btn_create_account': 'Crea Account', 'auth_have_account': 'Hai già un account?', 'link_sign_in': 'Accedi',
            'contact_title': 'Contattaci', 'contact_subtitle': 'Ci piacerebbe sentirti', 'label_subject': 'Oggetto', 'label_message': 'Messaggio',
            'btn_send_message': 'Invia Messaggio', 'contact_success': 'Grazie! Il tuo messaggio è stato inviato con successo.', 'contact_error': 'Spiacenti, si è verificato un errore durante l\'invio del messaggio. Per favore riprova.'
        },
        'tr': {
            'nav_tools': 'Araçlar', 'nav_features': 'Özellikler', 'nav_how_it_works': 'Nasıl Çalışır', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giriş Yap', 'btn_signup': 'Kayıt Ol', 'btn_profile': 'Profil', 'btn_logout': 'Çıkış Yap',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_current': 'PDF İmzala', 'page_title': 'PDF\'yi Çevrimiçi İmzala',
            'page_description': 'PDF belgelerinize kolaylıkla profesyonel dijital imzalar ekleyin. İmzaları güvenli ve ücretsiz olarak çizin, yazın veya yükleyin.',
            'feature_draw_signature': 'İmza Çiz', 'feature_type_signature': 'İmza Yaz', 'feature_upload_signature': 'Resim Yükle', 'feature_secure': '%100 Güvenli',
            'security_badge': '%100 Güvenli - Dosyalar yerel olarak işlenir',
            'section_title': 'PDF İmza Aracı', 'section_subtitle': 'PDF\'lerinizi profesyonel dijital imzalarla imzalayın',
            'privacy_badge': '%100 istemci tarafı. Dosyalar asla cihazınızdan ayrılmaz.', 'upload_from_computer': 'Bilgisayardan Yükle', 'import_from_url': 'URL\'den İçe Aktar',
            'url_placeholder': 'Dropbox veya Google Drive bağlantısını buraya yapıştırın...', 'import_file_btn': 'Dosyayı İçe Aktar', 'download_status': 'İndiriliyor...',
            'supported_services': 'Desteklenen servisler:', 'service_dropbox': 'Dropbox: Bağlantıyı paylaşın ve buraya yapıştırın', 'service_gdrive': 'Google Drive: Paylaşılabilir bağlantı alın (Bağlantıya sahip herkes görebilir)',
            'service_direct': 'Doğrudan PDF URL\'leri', 'max_file_size': 'Maksimum dosya boyutu: 50MB',
            'upload_area_pdf': 'İmzalanacak PDF Yükle', 'upload_text': 'PDF dosyalarınızı seçmek için tıklayın veya sürükleyip bırakın', 'upload_pdf_subtext': 'PDF dosyaları • Dosya başına 50MB\'a kadar • Birden fazla dosya desteklenir',
            'start_signing_btn': 'İmzalamaya Başla', 'hint_upload_pdf_first': 'İmzalamaya başlamak için yukarıya bir PDF dosyası yükleyin',
            'workspace_title': 'PDF\'nizi İmzalayın', 'tab_draw': 'Çiz', 'tab_type': 'Yaz', 'tab_upload': 'Yükle',
            'btn_add_signature': 'İmza Ekle', 'btn_clear': 'Temizle', 'btn_save_sign': 'Kaydet ve İmzala', 'btn_download': 'PDF İndir',
            'signature_color': 'İmza Rengi:', 'signature_font': 'İmza Yazı Tipi:', 'type_your_signature': 'İmzanızı buraya yazın...', 'upload_signature_image': 'İmza Resmi Yükle', 'supported_formats': 'PNG, JPG veya GIF • Maks 5MB',
            'preview_title': 'Belge Önizlemesi', 'btn_previous': '← Önceki', 'btn_next': 'Sonraki →', 'page_info': 'Sayfa', 'of': 'of',
            'success_title': 'PDF başarıyla imzalandı!', 'success_description': 'İmzalı PDF\'niz indirmeye hazır',
            'download_pdf': 'İmzalı PDF\'yi İndir', 'process_another': 'Başka PDF İmzala', 'continue_title': 'PDF\'nizi düzenlemeye devam edin:',
            'tool_merge': 'PDF Birleştir', 'tool_split': 'PDF Böl', 'tool_compress': 'Sıkıştır', 'tool_crop': 'PDF Kırp', 'tool_rotate': 'PDF Döndür', 'tool_unlock': 'PDF Kilidi Aç',
            'why_choose_title': 'Neden PDFrow PDF İmza Aracını Seçmelisiniz?', 'why_choose_subtitle': 'Profesyonel, hızlı ve güvenli PDF imzalama',
            'feature_lightning_fast_title': 'Şimşek Hızında', 'feature_lightning_fast_desc': 'Optimize edilmiş işleme motorumuzla PDF belgelerini saniyeler içinde imzalayın',
            'feature_secure_title': '%100 Güvenli', 'feature_secure_desc': 'Dosyalarınız yerel olarak işlenir ve işlemden sonra otomatik olarak silinir',
            'feature_multiple_options_title': 'Çoklu Seçenekler', 'feature_multiple_options_desc': 'İmzanızı özelleştirilebilir stil ile çizin, yazın veya yükleyin',
            'feature_no_software_title': 'Yazılım Gerekmez', 'feature_no_software_desc': 'Doğrudan tarayıcınızda çalışır - indirme veya kurulum gerektirmez',
            'how_to_title': 'PDF Belgeleri Nasıl İmzalanır', 'how_to_subtitle': 'İmzanızı eklemek için basit 3 adımlı süreç',
            'step1_title': 'PDF Yükle', 'step1_desc': 'Başlamak için PDF dosyanızı seçin veya sürükleyip bırakın',
            'step2_title': 'İmza Ekle', 'step2_desc': 'İmzanızı çizin, yazın veya yükleyin ve belgede konumlandırın',
            'step3_title': 'İndir', 'step3_desc': 'Profesyonel olarak imzalanmış PDF\'nizi anında alın',
            'language': 'Dil', 'footer_description': 'Hepsi bir arada PDF çözümünüz. PDF\'leri ücretsiz olarak çevrimiçi düzenleyin, dönüştürün, birleştirin ve yönetin.',
            'footer_tools_title': 'Araçlar', 'footer_pdf_compressor': 'PDF Sıkıştır', 'footer_pdf_merger': 'PDF Birleştir',
            'footer_support_title': 'Destek', 'footer_faq': 'SSS', 'footer_how_it_works': 'Nasıl Çalışır', 'footer_contact': 'İletişim', 'footer_terms': 'Şartlar ve Koşullar', 'footer_privacy': 'Gizlilik Politikası',
            'footer_copyright': '© 2025 PDFrow. Tüm hakları saklıdır. Belge işleme için ❤️ ile yapıldı.',
            'support_title': 'PDFrow\'u Destekleyin ❤️', 'support_subtitle': 'PDFrow\'u ücretsiz tutmamıza ve hizmetlerimizi geliştirmemize yardımcı olun',
            'support_message': 'Desteğiniz bize yardımcı olur:', 'support_point_1': 'Sunucuları çalışır ve hızlı tut', 'support_point_2': 'Düzenli olarak yeni özellikler ekle',
            'support_point_3': 'Yüksek güvenlik standartlarını koru', 'support_point_4': 'Mükemmel kullanıcı deneyimi sağla',
            'support_share_title': 'PDFrow\'u Paylaş', 'support_share_desc': 'Arkadaşlarınıza PDFrow\'dan bahsedin', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Bağış Yap', 'support_donation_desc': 'Misyonumuzu bir katkıyla destekleyin', 'donate_paypal': 'PayPal', 'support_thanks': 'Desteğiniz için teşekkür ederiz! 🙏',
            'login_title': 'Tekrar Hoş Geldiniz', 'login_subtitle': 'PDFrow hesabınıza erişmek için giriş yapın',
            'label_email': 'E-posta', 'label_password': 'Şifre', 'btn_sign_in': 'Giriş Yap', 'auth_or': 'veya',
            'btn_continue_google': 'Google ile Devam Et', 'link_forgot_password': 'Şifrenizi mi unuttunuz?', 'auth_no_account': 'Hesabınız yok mu?',
            'link_sign_up': 'Kayıt Ol', 'signup_title': 'Hesap Oluştur', 'signup_subtitle': 'PDFrow\'a katılın ve premium özelliklerin kilidini açın', 'label_name': 'Tam Ad',
            'checkbox_agree_terms': 'Kabul ediyorum', 'btn_create_account': 'Hesap Oluştur', 'auth_have_account': 'Zaten bir hesabınız var mı?', 'link_sign_in': 'Giriş yap',
            'contact_title': 'Bizimle İletişime Geçin', 'contact_subtitle': 'Sizden haber almak isteriz', 'label_subject': 'Konu', 'label_message': 'Mesaj',
            'btn_send_message': 'Mesaj Gönder', 'contact_success': 'Teşekkürler! Mesajınız başarıyla gönderildi.', 'contact_error': 'Üzgünüz, mesajınızı gönderirken bir hata oluştu. Lütfen tekrar deneyin.'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Início', 'breadcrumb_current': 'Assinar PDF', 'page_title': 'Assinar PDF Online',
            'page_description': 'Adicione assinaturas digitais profissionais aos seus documentos PDF com facilidade. Desenhe, digite ou carregue assinaturas com segurança e gratuitamente.',
            'feature_draw_signature': 'Desenhar Assinatura', 'feature_type_signature': 'Digitar Assinatura', 'feature_upload_signature': 'Carregar Imagem', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Arquivos processados localmente',
            'section_title': 'Ferramenta de Assinatura PDF', 'section_subtitle': 'Assine seus PDFs com assinaturas digitais profissionais',
            'privacy_badge': '100% no lado do cliente. Os arquivos nunca saem do seu dispositivo.', 'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...', 'import_file_btn': 'Importar Arquivo', 'download_status': 'Baixando...',
            'supported_services': 'Serviços suportados:', 'service_dropbox': 'Dropbox: Compartilhe o link e cole aqui', 'service_gdrive': 'Google Drive: Obtenha link compartilhável (Qualquer pessoa com o link pode ver)',
            'service_direct': 'URLs PDF diretas', 'max_file_size': 'Tamanho máximo do arquivo: 50MB',
            'upload_area_pdf': 'Carregar PDF para Assinar', 'upload_text': 'Clique para selecionar ou arraste e solte seus arquivos PDF', 'upload_pdf_subtext': 'Arquivos PDF • Até 50MB por arquivo • Vários arquivos suportados',
            'start_signing_btn': 'Começar a Assinar', 'hint_upload_pdf_first': 'Carregue um arquivo PDF acima para começar a assinar',
            'workspace_title': 'Assine seu PDF', 'tab_draw': 'Desenhar', 'tab_type': 'Digitar', 'tab_upload': 'Carregar',
            'btn_add_signature': 'Adicionar Assinatura', 'btn_clear': 'Limpar', 'btn_save_sign': 'Salvar e Assinar', 'btn_download': 'Baixar PDF',
            'signature_color': 'Cor da Assinatura:', 'signature_font': 'Fonte da Assinatura:', 'type_your_signature': 'Digite sua assinatura aqui...', 'upload_signature_image': 'Carregar Imagem da Assinatura', 'supported_formats': 'PNG, JPG ou GIF • Máx 5MB',
            'preview_title': 'Visualização do Documento', 'btn_previous': '← Anterior', 'btn_next': 'Próximo →', 'page_info': 'Página', 'of': 'de',
            'success_title': 'PDF assinado com sucesso!', 'success_description': 'Seu PDF assinado está pronto para download',
            'download_pdf': 'Baixar PDF Assinado', 'process_another': 'Assinar Outro PDF', 'continue_title': 'Continue editando seu PDF:',
            'tool_merge': 'Mesclar PDF', 'tool_split': 'Dividir PDF', 'tool_compress': 'Compactar', 'tool_crop': 'Recortar PDF', 'tool_rotate': 'Girar PDF', 'tool_unlock': 'Desbloquear PDF',
            'why_choose_title': 'Por que Escolher a Ferramenta de Assinatura PDF PDFrow?', 'why_choose_subtitle': 'Assinatura PDF profissional, rápida e segura',
            'feature_lightning_fast_title': 'Super Rápido', 'feature_lightning_fast_desc': 'Assine documentos PDF em segundos com nosso mecanismo de processamento otimizado',
            'feature_secure_title': '100% Seguro', 'feature_secure_desc': 'Seus arquivos são processados localmente e excluídos automaticamente após o processamento',
            'feature_multiple_options_title': 'Múltiplas Opções', 'feature_multiple_options_desc': 'Desenhe, digite ou carregue sua assinatura com estilo personalizável',
            'feature_no_software_title': 'Nenhum Software Necessário', 'feature_no_software_desc': 'Funciona diretamente em seu navegador - sem downloads ou instalações necessárias',
            'how_to_title': 'Como Assinar Documentos PDF', 'how_to_subtitle': 'Processo simples de 3 etapas para adicionar sua assinatura',
            'step1_title': 'Carregar PDF', 'step1_desc': 'Selecione ou arraste e solte seu arquivo PDF para começar',
            'step2_title': 'Adicionar Assinatura', 'step2_desc': 'Desenhe, digite ou carregue sua assinatura e posicione-a no documento',
            'step3_title': 'Baixar', 'step3_desc': 'Obtenha seu PDF assinado profissionalmente instantaneamente',
            'language': 'Idioma', 'footer_description': 'Sua solução PDF completa. Edite, converta, mescle e gerencie PDFs online gratuitamente.',
            'footer_tools_title': 'Ferramentas', 'footer_pdf_compressor': 'Compactar PDF', 'footer_pdf_merger': 'Mesclar PDF',
            'footer_support_title': 'Suporte', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Como Funciona', 'footer_contact': 'Contato', 'footer_terms': 'Termos e Condições', 'footer_privacy': 'Política de Privacidade',
            'footer_copyright': '© 2025 PDFrow. Todos os direitos reservados. Feito com ❤️ para processamento de documentos.',
            'support_title': 'Apoiar PDFrow ❤️', 'support_subtitle': 'Ajude-nos a manter o PDFrow gratuito e melhorar nossos serviços',
            'support_message': 'Seu apoio nos ajuda a:', 'support_point_1': 'Manter os servidores funcionando e rápidos', 'support_point_2': 'Adicionar novos recursos regularmente',
            'support_point_3': 'Manter altos padrões de segurança', 'support_point_4': 'Fornecer excelente experiência do usuário',
            'support_share_title': 'Compartilhar PDFrow', 'support_share_desc': 'Conte aos seus amigos sobre PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Fazer uma Doação', 'support_donation_desc': 'Apoie nossa missão com uma contribuição', 'donate_paypal': 'PayPal', 'support_thanks': 'Obrigado pelo seu apoio! 🙏',
            'login_title': 'Bem-vindo de Volta', 'login_subtitle': 'Entre para acessar sua conta PDFrow',
            'label_email': 'Email', 'label_password': 'Senha', 'btn_sign_in': 'Entrar', 'auth_or': 'ou',
            'btn_continue_google': 'Continuar com Google', 'link_forgot_password': 'Esqueceu a senha?', 'auth_no_account': 'Não tem uma conta?',
            'link_sign_up': 'Cadastrar', 'signup_title': 'Criar Conta', 'signup_subtitle': 'Junte-se ao PDFrow e desbloqueie recursos premium', 'label_name': 'Nome Completo',
            'checkbox_agree_terms': 'Eu concordo com os', 'btn_create_account': 'Criar Conta', 'auth_have_account': 'Já tem uma conta?', 'link_sign_in': 'Entrar',
            'contact_title': 'Fale Conosco', 'contact_subtitle': 'Adoraríamos ouvir de você', 'label_subject': 'Assunto', 'label_message': 'Mensagem',
            'btn_send_message': 'Enviar Mensagem', 'contact_success': 'Obrigado! Sua mensagem foi enviada com sucesso.', 'contact_error': 'Desculpe, ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_current': 'Подписать PDF', 'page_title': 'Подписать PDF Онлайн',
            'page_description': 'Легко добавляйте профессиональные цифровые подписи в свои PDF-документы. Рисуйте, вводите или загружайте подписи безопасно и бесплатно.',
            'feature_draw_signature': 'Нарисовать Подпись', 'feature_type_signature': 'Ввести Подпись', 'feature_upload_signature': 'Загрузить Изображение', 'feature_secure': '100% Безопасно',
            'security_badge': '100% Безопасно - Файлы обрабатываются локально',
            'section_title': 'Инструмент Подписи PDF', 'section_subtitle': 'Подписывайте свои PDF с профессиональными цифровыми подписями',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.', 'upload_from_computer': 'Загрузить с компьютера', 'import_from_url': 'Импорт из URL',
            'url_placeholder': 'Вставьте ссылку Dropbox или Google Drive сюда...', 'import_file_btn': 'Импортировать Файл', 'download_status': 'Загрузка...',
            'supported_services': 'Поддерживаемые сервисы:', 'service_dropbox': 'Dropbox: Поделитесь ссылкой и вставьте здесь', 'service_gdrive': 'Google Drive: Получите общедоступную ссылку (Любой, у кого есть ссылка, может просматривать)',
            'service_direct': 'Прямые URL-адреса PDF', 'max_file_size': 'Максимальный размер файла: 50MB',
            'upload_area_pdf': 'Загрузить PDF для Подписи', 'upload_text': 'Нажмите, чтобы выбрать, или перетащите PDF-файлы', 'upload_pdf_subtext': 'PDF файлы • До 50MB на файл • Поддержка нескольких файлов',
            'start_signing_btn': 'Начать Подписание', 'hint_upload_pdf_first': 'Загрузите файл PDF выше, чтобы начать подписание',
            'workspace_title': 'Подпишите ваш PDF', 'tab_draw': 'Нарисовать', 'tab_type': 'Ввести', 'tab_upload': 'Загрузить',
            'btn_add_signature': 'Добавить Подпись', 'btn_clear': 'Очистить', 'btn_save_sign': 'Сохранить и Подписать', 'btn_download': 'Скачать PDF',
            'signature_color': 'Цвет Подписи:', 'signature_font': 'Шрифт Подписи:', 'type_your_signature': 'Введите вашу подпись здесь...', 'upload_signature_image': 'Загрузить Изображение Подписи', 'supported_formats': 'PNG, JPG или GIF • Макс 5MB',
            'preview_title': 'Предпросмотр Документа', 'btn_previous': '← Предыдущая', 'btn_next': 'Следующая →', 'page_info': 'Страница', 'of': 'из',
            'success_title': 'PDF успешно подписан!', 'success_description': 'Ваш подписанный PDF готов к загрузке',
            'download_pdf': 'Скачать Подписанный PDF', 'process_another': 'Подписать Другой PDF', 'continue_title': 'Продолжить редактирование PDF:',
            'tool_merge': 'Объединить PDF', 'tool_split': 'Разделить PDF', 'tool_compress': 'Сжать', 'tool_crop': 'Обрезать PDF', 'tool_rotate': 'Повернуть PDF', 'tool_unlock': 'Разблокировать PDF',
            'why_choose_title': 'Почему Выбирают Инструмент Подписи PDF PDFrow?', 'why_choose_subtitle': 'Профессиональная, быстрая и безопасная подпись PDF',
            'feature_lightning_fast_title': 'Молниеносно Быстро', 'feature_lightning_fast_desc': 'Подписывайте PDF-документы за секунды с помощью нашего оптимизированного движка обработки',
            'feature_secure_title': '100% Безопасно', 'feature_secure_desc': 'Ваши файлы обрабатываются локально и автоматически удаляются после обработки',
            'feature_multiple_options_title': 'Множество Опций', 'feature_multiple_options_desc': 'Рисуйте, вводите или загружайте свою подпись с настраиваемым стилем',
            'feature_no_software_title': 'Без Программного Обеспечения', 'feature_no_software_desc': 'Работает прямо в вашем браузере - без загрузок или установок',
            'how_to_title': 'Как Подписать PDF Документы', 'how_to_subtitle': 'Простой 3-шаговый процесс добавления вашей подписи',
            'step1_title': 'Загрузить PDF', 'step1_desc': 'Выберите или перетащите PDF-файл, чтобы начать',
            'step2_title': 'Добавить Подпись', 'step2_desc': 'Нарисуйте, введите или загрузите свою подпись и разместите ее в документе',
            'step3_title': 'Скачать', 'step3_desc': 'Получите свой профессионально подписанный PDF мгновенно',
            'language': 'Язык', 'footer_description': 'Ваше универсальное PDF-решение. Редактируйте, конвертируйте, объединяйте и управляйте PDF онлайн бесплатно.',
            'footer_tools_title': 'Инструменты', 'footer_pdf_compressor': 'Сжать PDF', 'footer_pdf_merger': 'Объединить PDF',
            'footer_support_title': 'Поддержка', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Как это работает', 'footer_contact': 'Контакты', 'footer_terms': 'Условия использования', 'footer_privacy': 'Политика конфиденциальности',
            'footer_copyright': '© 2025 PDFrow. Все права защищены. Сделано с ❤️ для обработки документов.',
            'support_title': 'Поддержите PDFrow ❤️', 'support_subtitle': 'Помогите нам сохранить PDFrow бесплатным и улучшить наши услуги',
            'support_message': 'Ваша поддержка помогает нам:', 'support_point_1': 'Поддерживать работу серверов и их скорость', 'support_point_2': 'Регулярно добавлять новые функции',
            'support_point_3': 'Поддерживать высокие стандарты безопасности', 'support_point_4': 'Обеспечивать отличный пользовательский опыт',
            'support_share_title': 'Поделиться PDFrow', 'support_share_desc': 'Расскажите своим друзьям о PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Сделать Пожертвование', 'support_donation_desc': 'Поддержите нашу миссию вкладом', 'donate_paypal': 'PayPal', 'support_thanks': 'Спасибо за вашу поддержку! 🙏',
            'login_title': 'С Возвращением', 'login_subtitle': 'Войдите, чтобы получить доступ к вашей учетной записи PDFrow',
            'label_email': 'Email', 'label_password': 'Пароль', 'btn_sign_in': 'Войти', 'auth_or': 'или',
            'btn_continue_google': 'Продолжить с Google', 'link_forgot_password': 'Забыли пароль?', 'auth_no_account': 'Нет аккаунта?',
            'link_sign_up': 'Зарегистрироваться', 'signup_title': 'Создать Аккаунт', 'signup_subtitle': 'Присоединяйтесь к PDFrow и разблокируйте премиум функции', 'label_name': 'Полное Имя',
            'checkbox_agree_terms': 'Я согласен с', 'btn_create_account': 'Создать Аккаунт', 'auth_have_account': 'Уже есть аккаунт?', 'link_sign_in': 'Войти',
            'contact_title': 'Связаться с Нами', 'contact_subtitle': 'Мы будем рады услышать от вас', 'label_subject': 'Тема', 'label_message': 'Сообщение',
            'btn_send_message': 'Отправить Сообщение', 'contact_success': 'Спасибо! Ваше сообщение успешно отправлено.', 'contact_error': 'Извините, произошла ошибка при отправке сообщения. Пожалуйста, попробуйте снова.'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_current': '签署PDF', 'page_title': '在线签署PDF',
            'page_description': '轻松为您的PDF文档添加专业的数字签名。安全免费地绘制、输入或上传签名。',
            'feature_draw_signature': '绘制签名', 'feature_type_signature': '输入签名', 'feature_upload_signature': '上传图片', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - 文件在本地处理',
            'section_title': 'PDF签名工具', 'section_subtitle': '使用专业的数字签名签署您的PDF',
            'privacy_badge': '100%客户端处理。文件永远不会离开您的设备。', 'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'url_placeholder': '在此粘贴Dropbox或Google Drive链接...', 'import_file_btn': '导入文件', 'download_status': '下载中...',
            'supported_services': '支持的服务:', 'service_dropbox': 'Dropbox: 分享链接并粘贴到这里', 'service_gdrive': 'Google Drive: 获取可共享链接（任何拥有链接的人都可以查看）',
            'service_direct': '直接PDF URL', 'max_file_size': '最大文件大小：50MB',
            'upload_area_pdf': '上传PDF以签署', 'upload_text': '点击选择或拖放您的PDF文件', 'upload_pdf_subtext': 'PDF文件 • 每个文件最大50MB • 支持多个文件',
            'start_signing_btn': '开始签署', 'hint_upload_pdf_first': '在上方上传PDF文件以开始签署',
            'workspace_title': '签署您的PDF', 'tab_draw': '绘制', 'tab_type': '输入', 'tab_upload': '上传',
            'btn_add_signature': '添加签名', 'btn_clear': '清除', 'btn_save_sign': '保存并签署', 'btn_download': '下载PDF',
            'signature_color': '签名颜色:', 'signature_font': '签名字体:', 'type_your_signature': '在此输入您的签名...', 'upload_signature_image': '上传签名图片', 'supported_formats': 'PNG, JPG 或 GIF • 最大5MB',
            'preview_title': '文档预览', 'btn_previous': '← 上一页', 'btn_next': '下一页 →', 'page_info': '页', 'of': '/共',
            'success_title': 'PDF签署成功！', 'success_description': '您的已签署PDF已准备好下载',
            'download_pdf': '下载已签署PDF', 'process_another': '签署另一个PDF', 'continue_title': '继续编辑您的PDF:',
            'tool_merge': '合并PDF', 'tool_split': '拆分PDF', 'tool_compress': '压缩', 'tool_crop': '裁剪PDF', 'tool_rotate': '旋转PDF', 'tool_unlock': '解锁PDF',
            'why_choose_title': '为什么选择PDFrow PDF签名工具？', 'why_choose_subtitle': '专业、快速、安全的PDF签名',
            'feature_lightning_fast_title': '闪电般快速', 'feature_lightning_fast_desc': '使用我们优化的处理引擎在几秒钟内签署PDF文档',
            'feature_secure_title': '100%安全', 'feature_secure_desc': '您的文件在本地处理，处理后自动删除',
            'feature_multiple_options_title': '多种选项', 'feature_multiple_options_desc': '使用可自定义的样式绘制、输入或上传您的签名',
            'feature_no_software_title': '无需软件', 'feature_no_software_desc': '直接在浏览器中工作 - 无需下载或安装',
            'how_to_title': '如何签署PDF文档', 'how_to_subtitle': '添加签名的简单3步流程',
            'step1_title': '上传PDF', 'step1_desc': '选择或拖放您的PDF文件开始',
            'step2_title': '添加签名', 'step2_desc': '绘制、输入或上传您的签名并将其放置在文档上',
            'step3_title': '下载', 'step3_desc': '立即获取专业签署的PDF',
            'language': '语言', 'footer_description': '您的一体化PDF解决方案。免费在线编辑、转换、合并和管理PDF。',
            'footer_tools_title': '工具', 'footer_pdf_compressor': '压缩PDF', 'footer_pdf_merger': '合并PDF',
            'footer_support_title': '支持', 'footer_faq': '常见问题', 'footer_how_it_works': '如何运作', 'footer_contact': '联系', 'footer_terms': '条款和条件', 'footer_privacy': '隐私政策',
            'footer_copyright': '© 2025 PDFrow. 版权所有。用❤️制作用于文档处理。',
            'support_title': '支持PDFrow ❤️', 'support_subtitle': '帮助我们保持PDFrow免费并改进我们的服务',
            'support_message': '您的支持帮助我们:', 'support_point_1': '保持服务器运行和快速', 'support_point_2': '定期添加新功能',
            'support_point_3': '维持高安全标准', 'support_point_4': '提供出色的用户体验',
            'support_share_title': '分享PDFrow', 'support_share_desc': '告诉您的朋友关于PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': '捐赠', 'support_donation_desc': '通过捐助支持我们的使命', 'donate_paypal': 'PayPal', 'support_thanks': '感谢您的支持！🙏',
            'login_title': '欢迎回来', 'login_subtitle': '登录以访问您的PDFrow帐户',
            'label_email': '电子邮件', 'label_password': '密码', 'btn_sign_in': '登录', 'auth_or': '或',
            'btn_continue_google': '使用Google继续', 'link_forgot_password': '忘记密码？', 'auth_no_account': '没有帐户？',
            'link_sign_up': '注册', 'signup_title': '创建帐户', 'signup_subtitle': '加入PDFrow并解锁高级功能', 'label_name': '全名',
            'checkbox_agree_terms': '我同意', 'btn_create_account': '创建帐户', 'auth_have_account': '已有帐户？', 'link_sign_in': '登录',
            'contact_title': '联系我们', 'contact_subtitle': '我们很乐意听到您的声音', 'label_subject': '主题', 'label_message': '消息',
            'btn_send_message': '发送消息', 'contact_success': '谢谢！您的消息已成功发送。', 'contact_error': '抱歉，发送消息时出错。请重试。'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_current': 'PDF署名', 'page_title': 'PDFにオンライン署名',
            'page_description': 'PDF文書にプロフェッショナルなデジタル署名を簡単に追加。署名を描画、入力、またはアップロードして安全かつ無料で使用できます。',
            'feature_draw_signature': '署名を描く', 'feature_type_signature': '署名を入力', 'feature_upload_signature': '画像をアップロード', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - ファイルはローカルで処理されます',
            'section_title': 'PDF署名ツール', 'section_subtitle': 'プロフェッショナルなデジタル署名でPDFに署名',
            'privacy_badge': '100%クライアント側処理。ファイルがデバイスから離れることはありません。', 'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付けてください...', 'import_file_btn': 'ファイルをインポート', 'download_status': 'ダウンロード中...',
            'supported_services': 'サポートされているサービス:', 'service_dropbox': 'Dropbox: リンクを共有してここに貼り付けます', 'service_gdrive': 'Google Drive: 共有可能なリンクを取得（リンクを持っている人は誰でも表示できます）',
            'service_direct': '直接PDF URL', 'max_file_size': '最大ファイルサイズ：50MB',
            'upload_area_pdf': '署名するPDFをアップロード', 'upload_text': 'クリックして選択するか、PDFファイルをドラッグ＆ドロップ', 'upload_pdf_subtext': 'PDFファイル • ファイルあたり最大50MB • 複数ファイル対応',
            'start_signing_btn': '署名を開始', 'hint_upload_pdf_first': '上にPDFファイルをアップロードして署名を開始',
            'workspace_title': 'PDFに署名', 'tab_draw': '描く', 'tab_type': '入力', 'tab_upload': 'アップロード',
            'btn_add_signature': '署名を追加', 'btn_clear': 'クリア', 'btn_save_sign': '保存して署名', 'btn_download': 'PDFをダウンロード',
            'signature_color': '署名の色:', 'signature_font': '署名フォント:', 'type_your_signature': 'ここに署名を入力...', 'upload_signature_image': '署名画像をアップロード', 'supported_formats': 'PNG, JPG, または GIF • 最大5MB',
            'preview_title': 'ドキュメントプレビュー', 'btn_previous': '← 前へ', 'btn_next': '次へ →', 'page_info': 'ページ', 'of': '/全',
            'success_title': 'PDF署名成功！', 'success_description': '署名済みPDFがダウンロード可能です',
            'download_pdf': '署名済みPDFをダウンロード', 'process_another': '別のPDFに署名', 'continue_title': 'PDFの編集を続ける:',
            'tool_merge': 'PDF結合', 'tool_split': 'PDF分割', 'tool_compress': '圧縮', 'tool_crop': 'PDFトリミング', 'tool_rotate': 'PDF回転', 'tool_unlock': 'PDFロック解除',
            'why_choose_title': 'なぜPDFrow PDF署名ツールを選ぶのか？', 'why_choose_subtitle': 'プロフェッショナル、高速、安全なPDF署名',
            'feature_lightning_fast_title': '超高速', 'feature_lightning_fast_desc': '最適化された処理エンジンで数秒でPDF文書に署名',
            'feature_secure_title': '100%安全', 'feature_secure_desc': 'ファイルはローカルで処理され、処理後に自動的に削除されます',
            'feature_multiple_options_title': '複数のオプション', 'feature_multiple_options_desc': 'カスタマイズ可能なスタイルで署名を描画、入力、またはアップロード',
            'feature_no_software_title': 'ソフトウェア不要', 'feature_no_software_desc': 'ブラウザで直接動作 - ダウンロードやインストールは不要',
            'how_to_title': 'PDF文書に署名する方法', 'how_to_subtitle': '署名を追加するシンプルな3ステッププロセス',
            'step1_title': 'PDFをアップロード', 'step1_desc': 'PDFファイルを選択またはドラッグ＆ドロップして開始',
            'step2_title': '署名を追加', 'step2_desc': '署名を描画、入力、またはアップロードして文書に配置',
            'step3_title': 'ダウンロード', 'step3_desc': 'プロフェッショナルに署名されたPDFを即座に取得',
            'language': '言語', 'footer_description': 'オールインワンPDFソリューション。PDFを無料でオンライン編集、変換、結合、管理できます。',
            'footer_tools_title': 'ツール', 'footer_pdf_compressor': 'PDF圧縮', 'footer_pdf_merger': 'PDF結合',
            'footer_support_title': 'サポート', 'footer_faq': 'よくある質問', 'footer_how_it_works': '使い方', 'footer_contact': 'お問い合わせ', 'footer_terms': '利用規約', 'footer_privacy': 'プライバシーポリシー',
            'footer_copyright': '© 2025 PDFrow. 全著作権所有。ドキュメント処理のために❤️で作られました。',
            'support_title': 'PDFrowをサポート ❤️', 'support_subtitle': 'PDFrowを無料で維持し、サービスを改善するのを手伝ってください',
            'support_message': 'あなたのサポートは私たちを助けます:', 'support_point_1': 'サーバーを稼働させ、高速に保つ', 'support_point_2': '定期的に新機能を追加',
            'support_point_3': '高いセキュリティ基準を維持', 'support_point_4': '優れたユーザー体験を提供',
            'support_share_title': 'PDFrowを共有', 'support_share_desc': '友達にPDFrowのことを教える', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': '寄付する', 'support_donation_desc': '貢献で私たちの使命をサポート', 'donate_paypal': 'PayPal', 'support_thanks': 'サポートありがとうございます！🙏',
            'login_title': 'お帰りなさい', 'login_subtitle': 'PDFrowアカウントにアクセスするためにサインイン',
            'label_email': 'メール', 'label_password': 'パスワード', 'btn_sign_in': 'サインイン', 'auth_or': 'または',
            'btn_continue_google': 'Googleで続ける', 'link_forgot_password': 'パスワードを忘れましたか？', 'auth_no_account': 'アカウントをお持ちではありませんか？',
            'link_sign_up': '登録', 'signup_title': 'アカウント作成', 'signup_subtitle': 'PDFrowに参加してプレミアム機能をアンロック', 'label_name': '氏名',
            'checkbox_agree_terms': '同意します', 'btn_create_account': 'アカウント作成', 'auth_have_account': '既にアカウントをお持ちですか？', 'link_sign_in': 'サインイン',
            'contact_title': 'お問い合わせ', 'contact_subtitle': 'ご連絡をお待ちしております', 'label_subject': '件名', 'label_message': 'メッセージ',
            'btn_send_message': 'メッセージを送信', 'contact_success': 'ありがとうございます！メッセージは正常に送信されました。', 'contact_error': '申し訳ございません、メッセージの送信中にエラーが発生しました。もう一度お試しください。'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'المميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_current': 'توقيع PDF', 'page_title': 'توقيع PDF عبر الإنترنت',
            'page_description': 'أضف توقيعات رقمية احترافية إلى مستندات PDF الخاصة بك بسهولة. ارسم أو اكتب أو قم بتحميل التوقيعات بشكل آمن ومجاني.',
            'feature_draw_signature': 'رسم التوقيع', 'feature_type_signature': 'كتابة التوقيع', 'feature_upload_signature': 'تحميل صورة', 'feature_secure': 'آمن 100%',
            'security_badge': 'آمن 100% - تتم معالجة الملفات محلياً',
            'section_title': 'أداة توقيع PDF', 'section_subtitle': 'وقع ملفات PDF الخاصة بك بتوقيعات رقمية احترافية',
            'privacy_badge': '100% من جانب العميل. لا تغادر الملفات جهازك أبداً.', 'upload_from_computer': 'التحميل من الكمبيوتر', 'import_from_url': 'استيراد من URL',
            'url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...', 'import_file_btn': 'استيراد الملف', 'download_status': 'جاري التنزيل...',
            'supported_services': 'الخدمات المدعومة:', 'service_dropbox': 'Dropbox: شارك الرابط والصقه هنا', 'service_gdrive': 'Google Drive: احصل على رابط قابل للمشاركة (يمكن لأي شخص لديه الرابط عرضه)',
            'service_direct': 'روابط PDF المباشرة', 'max_file_size': 'الحد الأقصى لحجم الملف: 50 ميجابايت',
            'upload_area_pdf': 'تحميل PDF للتوقيع', 'upload_text': 'انقر للتحديد أو اسحب وأفلت ملفات PDF الخاصة بك', 'upload_pdf_subtext': 'ملفات PDF • حتى 50 ميجابايت لكل ملف • دعم ملفات متعددة',
            'start_signing_btn': 'بدء التوقيع', 'hint_upload_pdf_first': 'قم بتحميل ملف PDF أعلاه لبدء التوقيع',
            'workspace_title': 'وقع PDF الخاص بك', 'tab_draw': 'رسم', 'tab_type': 'كتابة', 'tab_upload': 'تحميل',
            'btn_add_signature': 'إضافة التوقيع', 'btn_clear': 'مسح', 'btn_save_sign': 'حفظ وتوقيع', 'btn_download': 'تنزيل PDF',
            'signature_color': 'لون التوقيع:', 'signature_font': 'خط التوقيع:', 'type_your_signature': 'اكتب توقيعك هنا...', 'upload_signature_image': 'تحميل صورة التوقيع', 'supported_formats': 'PNG أو JPG أو GIF • بحد أقصى 5 ميجابايت',
            'preview_title': 'معاينة المستند', 'btn_previous': '← السابق', 'btn_next': 'التالي →', 'page_info': 'صفحة', 'of': 'من',
            'success_title': 'تم توقيع PDF بنجاح!', 'success_description': 'ملف PDF الموقع جاهز للتنزيل',
            'download_pdf': 'تنزيل PDF الموقع', 'process_another': 'توقيع PDF آخر', 'continue_title': 'متابعة تحرير PDF الخاص بك:',
            'tool_merge': 'دمج PDF', 'tool_split': 'تقسيم PDF', 'tool_compress': 'ضغط', 'tool_crop': 'اقتصاص PDF', 'tool_rotate': 'تدوير PDF', 'tool_unlock': 'إلغاء قفل PDF',
            'why_choose_title': 'لماذا تختار أداة توقيع PDF من PDFrow؟', 'why_choose_subtitle': 'توقيع PDF احترافي وسريع وآمن',
            'feature_lightning_fast_title': 'سريع كالبرق', 'feature_lightning_fast_desc': 'وقع مستندات PDF في ثوانٍ باستخدام محرك المعالجة المُحسَّن لدينا',
            'feature_secure_title': 'آمن 100%', 'feature_secure_desc': 'تتم معالجة ملفاتك محلياً وحذفها تلقائياً بعد المعالجة',
            'feature_multiple_options_title': 'خيارات متعددة', 'feature_multiple_options_desc': 'ارسم أو اكتب أو قم بتحميل توقيعك بأسلوب قابل للتخصيص',
            'feature_no_software_title': 'لا يلزم برنامج', 'feature_no_software_desc': 'يعمل مباشرة في متصفحك - لا حاجة لتنزيلات أو تثبيتات',
            'how_to_title': 'كيفية توقيع مستندات PDF', 'how_to_subtitle': 'عملية بسيطة من 3 خطوات لإضافة توقيعك',
            'step1_title': 'تحميل PDF', 'step1_desc': 'حدد أو اسحب وأفلت ملف PDF الخاص بك للبدء',
            'step2_title': 'إضافة التوقيع', 'step2_desc': 'ارسم أو اكتب أو قم بتحميل توقيعك وضعه على المستند',
            'step3_title': 'تنزيل', 'step3_desc': 'احصل على PDF الموقع بشكل احترافي على الفور',
            'language': 'اللغة', 'footer_description': 'حل PDF الشامل الخاص بك. قم بتحرير وتحويل ودمج وإدارة ملفات PDF عبر الإنترنت مجاناً.',
            'footer_tools_title': 'الأدوات', 'footer_pdf_compressor': 'ضغط PDF', 'footer_pdf_merger': 'دمج PDF',
            'footer_support_title': 'الدعم', 'footer_faq': 'الأسئلة الشائعة', 'footer_how_it_works': 'كيف يعمل', 'footer_contact': 'اتصل بنا', 'footer_terms': 'الشروط والأحكام', 'footer_privacy': 'سياسة الخصوصية',
            'footer_copyright': '© 2025 PDFrow. جميع الحقوق محفوظة. صُنع بـ ❤️ لمعالجة المستندات.',
            'support_title': 'دعم PDFrow ❤️', 'support_subtitle': 'ساعدنا في الحفاظ على PDFrow مجانياً وتحسين خدماتنا',
            'support_message': 'دعمك يساعدنا على:', 'support_point_1': 'الحفاظ على تشغيل الخوادم وسرعتها', 'support_point_2': 'إضافة ميزات جديدة بانتظام',
            'support_point_3': 'الحفاظ على معايير أمان عالية', 'support_point_4': 'توفير تجربة مستخدم ممتازة',
            'support_share_title': 'شارك PDFrow', 'support_share_desc': 'أخبر أصدقاءك عن PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'تبرع', 'support_donation_desc': 'ادعم مهمتنا بمساهمة', 'donate_paypal': 'PayPal', 'support_thanks': 'شكراً لدعمك! 🙏',
            'login_title': 'مرحباً بعودتك', 'login_subtitle': 'قم بتسجيل الدخول للوصول إلى حساب PDFrow الخاص بك',
            'label_email': 'البريد الإلكتروني', 'label_password': 'كلمة المرور', 'btn_sign_in': 'تسجيل الدخول', 'auth_or': 'أو',
            'btn_continue_google': 'متابعة مع Google', 'link_forgot_password': 'هل نسيت كلمة المرور؟', 'auth_no_account': 'ليس لديك حساب؟',
            'link_sign_up': 'التسجيل', 'signup_title': 'إنشاء حساب', 'signup_subtitle': 'انضم إلى PDFrow وافتح الميزات المميزة', 'label_name': 'الاسم الكامل',
            'checkbox_agree_terms': 'أوافق على', 'btn_create_account': 'إنشاء حساب', 'auth_have_account': 'هل لديك حساب بالفعل؟', 'link_sign_in': 'تسجيل الدخول',
            'contact_title': 'اتصل بنا', 'contact_subtitle': 'نحب أن نسمع منك', 'label_subject': 'الموضوع', 'label_message': 'الرسالة',
            'btn_send_message': 'إرسال الرسالة', 'contact_success': 'شكراً لك! تم إرسال رسالتك بنجاح.', 'contact_error': 'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'FAQ',
            'btn_login': 'लॉग इन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफ़ाइल', 'btn_logout': 'लॉग आउट',
            'breadcrumb_home': 'होम', 'breadcrumb_current': 'PDF हस्ताक्षर', 'page_title': 'PDF ऑनलाइन हस्ताक्षर करें',
            'page_description': 'अपने PDF दस्तावेज़ों में आसानी से पेशेवर डिजिटल हस्ताक्षर जोड़ें। हस्ताक्षरों को सुरक्षित और मुफ्त में ड्रा, टाइप या अपलोड करें।',
            'feature_draw_signature': 'हस्ताक्षर ड्रा करें', 'feature_type_signature': 'हस्ताक्षर टाइप करें', 'feature_upload_signature': 'छवि अपलोड करें', 'feature_secure': '100% सुरक्षित',
            'security_badge': '100% सुरक्षित - फ़ाइलें स्थानीय रूप से संसाधित',
            'section_title': 'PDF हस्ताक्षर उपकरण', 'section_subtitle': 'पेशेवर डिजिटल हस्ताक्षरों के साथ अपने PDF पर हस्ताक्षर करें',
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी आपके डिवाइस को नहीं छोड़तीं।', 'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से आयात करें',
            'url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...', 'import_file_btn': 'फ़ाइल आयात करें', 'download_status': 'डाउनलोड हो रहा है...',
            'supported_services': 'समर्थित सेवाएं:', 'service_dropbox': 'Dropbox: लिंक साझा करें और यहां पेस्ट करें', 'service_gdrive': 'Google Drive: साझा करने योग्य लिंक प्राप्त करें (लिंक वाला कोई भी देख सकता है)',
            'service_direct': 'प्रत्यक्ष PDF URLs', 'max_file_size': 'अधिकतम फ़ाइल आकार: 50MB',
            'upload_area_pdf': 'हस्ताक्षर के लिए PDF अपलोड करें', 'upload_text': 'अपनी PDF फ़ाइलों का चयन करने के लिए क्लिक करें या ड्रैग और ड्रॉप करें', 'upload_pdf_subtext': 'PDF फ़ाइलें • प्रति फ़ाइल 50MB तक • एकाधिक फ़ाइलें समर्थित',
            'start_signing_btn': 'हस्ताक्षर शुरू करें', 'hint_upload_pdf_first': 'हस्ताक्षर शुरू करने के लिए ऊपर PDF फ़ाइल अपलोड करें',
            'workspace_title': 'अपनी PDF पर हस्ताक्षर करें', 'tab_draw': 'ड्रा करें', 'tab_type': 'टाइप करें', 'tab_upload': 'अपलोड करें',
            'btn_add_signature': 'हस्ताक्षर जोड़ें', 'btn_clear': 'साफ़ करें', 'btn_save_sign': 'सहेजें और हस्ताक्षर करें', 'btn_download': 'PDF डाउनलोड करें',
            'signature_color': 'हस्ताक्षर रंग:', 'signature_font': 'हस्ताक्षर फ़ॉन्ट:', 'type_your_signature': 'अपना हस्ताक्षर यहां टाइप करें...', 'upload_signature_image': 'हस्ताक्षर छवि अपलोड करें', 'supported_formats': 'PNG, JPG, या GIF • अधिकतम 5MB',
            'preview_title': 'दस्तावेज़ पूर्वावलोकन', 'btn_previous': '← पिछला', 'btn_next': 'अगला →', 'page_info': 'पृष्ठ', 'of': 'में से',
            'success_title': 'PDF सफलतापूर्वक हस्ताक्षरित!', 'success_description': 'आपका हस्ताक्षरित PDF डाउनलोड के लिए तैयार है',
            'download_pdf': 'हस्ताक्षरित PDF डाउनलोड करें', 'process_another': 'दूसरा PDF हस्ताक्षर करें', 'continue_title': 'अपनी PDF संपादित करना जारी रखें:',
            'tool_merge': 'PDF मर्ज करें', 'tool_split': 'PDF विभाजित करें', 'tool_compress': 'संपीड़ित करें', 'tool_crop': 'PDF क्रॉप करें', 'tool_rotate': 'PDF घुमाएं', 'tool_unlock': 'PDF अनलॉक करें',
            'why_choose_title': 'PDFrow PDF हस्ताक्षर उपकरण क्यों चुनें?', 'why_choose_subtitle': 'पेशेवर, तेज़ और सुरक्षित PDF हस्ताक्षर',
            'feature_lightning_fast_title': 'बिजली की तेज़', 'feature_lightning_fast_desc': 'हमारे अनुकूलित प्रोसेसिंग इंजन के साथ सेकंड में PDF दस्तावेज़ों पर हस्ताक्षर करें',
            'feature_secure_title': '100% सुरक्षित', 'feature_secure_desc': 'आपकी फ़ाइलें स्थानीय रूप से संसाधित होती हैं और प्रसंस्करण के बाद स्वचालित रूप से हटा दी जाती हैं',
            'feature_multiple_options_title': 'कई विकल्प', 'feature_multiple_options_desc': 'अनुकूलन योग्य स्टाइल के साथ अपना हस्ताक्षर ड्रा, टाइप या अपलोड करें',
            'feature_no_software_title': 'कोई सॉफ़्टवेयर आवश्यक नहीं', 'feature_no_software_desc': 'सीधे आपके ब्राउज़र में काम करता है - कोई डाउनलोड या इंस्टॉलेशन आवश्यक नहीं',
            'how_to_title': 'PDF दस्तावेज़ों पर हस्ताक्षर कैसे करें', 'how_to_subtitle': 'अपना हस्ताक्षर जोड़ने के लिए सरल 3-चरणीय प्रक्रिया',
            'step1_title': 'PDF अपलोड करें', 'step1_desc': 'शुरू करने के लिए अपनी PDF फ़ाइल का चयन करें या ड्रैग और ड्रॉप करें',
            'step2_title': 'हस्ताक्षर जोड़ें', 'step2_desc': 'अपना हस्ताक्षर ड्रा, टाइप या अपलोड करें और इसे दस्तावेज़ पर रखें',
            'step3_title': 'डाउनलोड करें', 'step3_desc': 'पेशेवर रूप से हस्ताक्षरित PDF तुरंत प्राप्त करें',
            'language': 'भाषा', 'footer_description': 'आपका ऑल-इन-वन PDF समाधान। PDF को मुफ्त में ऑनलाइन संपादित, परिवर्तित, मर्ज और प्रबंधित करें।',
            'footer_tools_title': 'उपकरण', 'footer_pdf_compressor': 'PDF संपीड़ित करें', 'footer_pdf_merger': 'PDF मर्ज करें',
            'footer_support_title': 'समर्थन', 'footer_faq': 'FAQ', 'footer_how_it_works': 'यह कैसे काम करता है', 'footer_contact': 'संपर्क करें', 'footer_terms': 'नियम और शर्तें', 'footer_privacy': 'गोपनीयता नीति',
            'footer_copyright': '© 2025 PDFrow. सर्वाधिकार सुरक्षित। दस्तावेज़ प्रसंस्करण के लिए ❤️ से बनाया गया।',
            'support_title': 'PDFrow का समर्थन करें ❤️', 'support_subtitle': 'PDFrow को मुफ्त रखने और हमारी सेवाओं में सुधार करने में हमारी मदद करें',
            'support_message': 'आपका समर्थन हमें मदद करता है:', 'support_point_1': 'सर्वर चालू और तेज़ रखें', 'support_point_2': 'नियमित रूप से नई सुविधाएँ जोड़ें',
            'support_point_3': 'उच्च सुरक्षा मानकों को बनाए रखें', 'support_point_4': 'उत्कृष्ट उपयोगकर्ता अनुभव प्रदान करें',
            'support_share_title': 'PDFrow साझा करें', 'support_share_desc': 'अपने दोस्तों को PDFrow के बारे में बताएं', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'दान करें', 'support_donation_desc': 'योगदान के साथ हमारे मिशन का समर्थन करें', 'donate_paypal': 'PayPal', 'support_thanks': 'आपके समर्थन के लिए धन्यवाद! 🙏',
            'login_title': 'वापस स्वागत है', 'login_subtitle': 'अपने PDFrow खाते तक पहुँचने के लिए साइन इन करें',
            'label_email': 'ईमेल', 'label_password': 'पासवर्ड', 'btn_sign_in': 'साइन इन करें', 'auth_or': 'या',
            'btn_continue_google': 'Google के साथ जारी रखें', 'link_forgot_password': 'पासवर्ड भूल गए?', 'auth_no_account': 'खाता नहीं है?',
            'link_sign_up': 'साइन अप करें', 'signup_title': 'खाता बनाएं', 'signup_subtitle': 'PDFrow में शामिल हों और प्रीमियम सुविधाओं को अनलॉक करें', 'label_name': 'पूरा नाम',
            'checkbox_agree_terms': 'मैं सहमत हूं', 'btn_create_account': 'खाता बनाएं', 'auth_have_account': 'पहले से खाता है?', 'link_sign_in': 'साइन इन करें',
            'contact_title': 'हमसे संपर्क करें', 'contact_subtitle': 'हम आपसे सुनना पसंद करेंगे', 'label_subject': 'विषय', 'label_message': 'संदेश',
            'btn_send_message': 'संदेश भेजें', 'contact_success': 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।', 'contact_error': 'क्षमा करें, आपका संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।'
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

    // Save language preference - use same key as script.js for consistency
    localStorage.setItem('selectedLanguage', langCode);
}

// Override the converter's getTranslations method to use our sign-pdf specific translations
function initializeSignPdfTranslations() {
    // Wait for converter to be available
    if (typeof converter === 'undefined') {
        setTimeout(initializeSignPdfTranslations, 100);
        return;
    }

    // Store original getTranslations method
    const originalGetTranslations = converter.getTranslations.bind(converter);

    // Override with our enhanced translations
    converter.getTranslations = function(langCode) {
        // Get sign-pdf specific translations
        const signPdfTranslations = getTranslations(langCode);
        // Get original translations as fallback
        const originalTranslations = originalGetTranslations(langCode);
        // Merge them, with sign-pdf translations taking priority
        return { ...originalTranslations, ...signPdfTranslations };
    };

    // Store original loadLanguage method
    const originalLoadLanguage = converter.loadLanguage.bind(converter);

    // Override loadLanguage to use merged translations
    converter.loadLanguage = function(langCode) {
        const translations = this.getTranslations(langCode);

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
                    if (translations[key].includes && translations[key].includes('<strong>')) {
                        element.innerHTML = translations[key];
                    } else {
                        element.textContent = translations[key];
                    }
                }
            }
        });

        // Update current language display
        const currentFlag = document.getElementById('currentFlag');
        const currentLang = document.getElementById('currentLang');
        const langInfo = this.getLanguageInfo(langCode);

        if (currentFlag && currentLang && langInfo) {
            currentFlag.textContent = langInfo.flag;
            currentLang.textContent = langInfo.name;
        }
    };

    // Re-load current language to apply sign-pdf translations
    const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    converter.loadLanguage(savedLang);
}

// Check if DOM is already loaded, if so initialize immediately, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeSignPdfTranslations);
} else {
    // DOM is already loaded, initialize immediately
    initializeSignPdfTranslations();
}
