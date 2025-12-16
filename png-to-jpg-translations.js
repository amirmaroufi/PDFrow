// Translation system for png-to-jpg.html
function getTranslations(langCode) {
    const allTranslations = {
        'en': {
            // Navigation
            'nav_tools': 'Tools',
            'nav_features': 'Features',
            'nav_how_it_works': 'How It Works',
            'nav_blog': 'Blog',
            'nav_faq': 'FAQ',

            // Page Header & Breadcrumb
            'breadcrumb_home': 'Home',
            'breadcrumb_current': 'PNG to JPG Converter',
            'page_title': 'PNG to JPG Converter',
            'page_description': 'Convert PNG images to JPG format with high quality results. Reduce file size while maintaining visual quality. Perfect for web optimization and sharing.',
            'feature_fast_convert': 'Fast Convert',
            'feature_small_files': 'Small Files',
            'feature_batch_process': 'Batch Process',
            'feature_secure': '100% Secure',
            'security_badge': '100% Secure - Files processed locally',

            // Tools Section
            'section_title': 'PNG to JPG Converter',
            'section_subtitle': 'Convert your PNG images to JPG format with customizable quality',
            'privacy_badge': '100% client‑side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',

            // Upload Section
            'drop_png_files': 'Drop PNG files here',
            'or_click_browse': 'or click to browse',
            'convert_to_jpg': 'Convert to JPG',
            'hint_upload_files_first': 'Upload PNG files above to enable conversion',

            // Features Section
            'features_title': 'Why Choose PDFrow PNG to JPG Converter?',
            'features_subtitle': 'Fast, secure, and high-quality image conversion',
            'feature_lightning_fast_title': 'Lightning Fast',
            'feature_lightning_fast_desc': 'Convert PNG images to JPG in seconds with our optimized conversion engine',
            'feature_100_secure_title': '100% Secure',
            'feature_100_secure_desc': 'Your files are processed locally and automatically deleted after processing',
            'feature_quality_control_title': 'Quality Control',
            'feature_quality_control_desc': 'Customizable quality settings to balance file size and image quality',
            'feature_no_software_title': 'No Software Needed',
            'feature_no_software_desc': 'Works directly in your browser - no downloads or installations required',

            // How It Works Section
            'how_it_works_title': 'How to Convert PNG to JPG',
            'how_it_works_subtitle': 'Simple 3-step process to convert your images',
            'step_1_title': 'Upload PNG',
            'step_1_desc': 'Select or drag and drop your PNG files to get started',
            'step_2_title': 'Convert',
            'step_2_desc': 'Our tool automatically converts your PNG images to JPG format',
            'step_3_title': 'Download',
            'step_3_desc': 'Download your converted JPG files instantly',

            // Footer
            'language': 'Language',
            'footer_description': 'Next-generation document processing platform. Fast, secure, and always free.',
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
            'support_message': 'PDFrow is completely free to use and will always remain so. Your support helps us:',
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
            'support_thanks': 'Thank you for helping us keep PDFrow free for everyone! ❤️',

            // Auth Modals
            'login_title': 'Welcome Back',
            'login_subtitle': 'Sign in to access your PDFrow account',
            'label_email': 'Email',
            'label_password': 'Password',
            'btn_sign_in': 'Sign In',
            'auth_or': 'or',
            'btn_continue_google': 'Continue with Google',
            'link_forgot_password': 'Forgot password?',
            'auth_no_account': 'Don\'t have an account?',
            'link_sign_up': 'Sign up',

            'signup_title': 'Create Account',
            'signup_subtitle': 'Join PDFrow and unlock premium features',
            'label_name': 'Full Name',
            'btn_create_account': 'Create Account',
            'checkbox_agree_terms': 'I agree to the <a href="terms-conditions.html" target="_blank">Terms of Service</a> and <a href="privacy-policy.html" target="_blank">Privacy Policy</a>',
            'auth_have_account': 'Already have an account?',
            'link_sign_in': 'Sign in',

            // Contact Modal
            'contact_title': 'Contact Us',
            'contact_subtitle': 'We\'d love to hear from you',
            'label_subject': 'Subject',
            'label_message': 'Message',
            'btn_send_message': 'Send Message',
            'contact_success': 'Thank you! Your message has been sent successfully.',
            'contact_error': 'Sorry, there was an error sending your message. Please try again.'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Características', 'nav_how_it_works': 'Cómo Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Convertidor PNG a JPG', 'page_title': 'Convertidor PNG a JPG',
            'page_description': 'Convierta imágenes PNG a formato JPG con resultados de alta calidad. Reduzca el tamaño del archivo manteniendo la calidad visual. Perfecto para optimización web y compartir.',
            'feature_fast_convert': 'Conversión Rápida', 'feature_small_files': 'Archivos Pequeños', 'feature_batch_process': 'Procesamiento por Lotes', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Archivos procesados localmente',
            'section_title': 'Convertidor PNG a JPG', 'section_subtitle': 'Convierta sus imágenes PNG a formato JPG con calidad personalizable',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.',
            'upload_from_computer': 'Subir desde Computadora', 'import_from_url': 'Importar desde URL',
            'drop_png_files': 'Suelte archivos PNG aquí', 'or_click_browse': 'o haga clic para explorar',
            'convert_to_jpg': 'Convertir a JPG', 'hint_upload_files_first': 'Suba archivos PNG arriba para habilitar la conversión',
            'features_title': '¿Por qué elegir el convertidor PNG a JPG de PDFrow?', 'features_subtitle': 'Conversión de imágenes rápida, segura y de alta calidad',
            'feature_lightning_fast_title': 'Extremadamente Rápido', 'feature_lightning_fast_desc': 'Convierta imágenes PNG a JPG en segundos con nuestro motor de conversión optimizado',
            'feature_100_secure_title': '100% Seguro', 'feature_100_secure_desc': 'Sus archivos se procesan localmente y se eliminan automáticamente después del procesamiento',
            'feature_quality_control_title': 'Control de Calidad', 'feature_quality_control_desc': 'Configuraciones de calidad personalizables para equilibrar el tamaño del archivo y la calidad de imagen',
            'feature_no_software_title': 'No se Necesita Software', 'feature_no_software_desc': 'Funciona directamente en su navegador - no se requieren descargas ni instalaciones',
            'how_it_works_title': 'Cómo Convertir PNG a JPG', 'how_it_works_subtitle': 'Proceso simple de 3 pasos para convertir sus imágenes',
            'step_1_title': 'Subir PNG', 'step_1_desc': 'Seleccione o arrastre y suelte sus archivos PNG para comenzar',
            'step_2_title': 'Convertir', 'step_2_desc': 'Nuestra herramienta convierte automáticamente sus imágenes PNG a formato JPG',
            'step_3_title': 'Descargar', 'step_3_desc': 'Descargue sus archivos JPG convertidos instantáneamente',
            'language': 'Idioma', 'footer_description': 'Plataforma de procesamiento de documentos de próxima generación. Rápida, segura y siempre gratuita.',
            'footer_tools_title': 'Herramientas', 'footer_pdf_compressor': 'Comprimir PDF', 'footer_pdf_merger': 'Combinar PDF', 'footer_support_title': 'Soporte',
            'footer_faq': 'FAQ', 'footer_how_it_works': 'Cómo Funciona', 'footer_contact': 'Contacto', 'footer_terms': 'Términos y Condiciones', 'footer_privacy': 'Política de Privacidad',
            'footer_copyright': '© 2025 PDFrow. Todos los derechos reservados. Hecho con ❤️ para el procesamiento de documentos.',
            'support_title': 'Apoyar PDFrow ❤️', 'support_subtitle': 'Ayúdenos a mantener PDFrow gratis y mejorar nuestros servicios',
            'support_message': 'PDFrow es completamente gratuito y siempre lo seguirá siendo. Su apoyo nos ayuda a:',
            'support_point_1': 'Mantener los servidores funcionando y rápidos', 'support_point_2': 'Agregar nuevas funciones regularmente',
            'support_point_3': 'Mantener altos estándares de seguridad', 'support_point_4': 'Proporcionar una excelente experiencia de usuario',
            'support_share_title': 'Compartir PDFrow', 'support_share_desc': 'Cuéntale a tus amigos sobre PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Hacer una Donación', 'support_donation_desc': 'Apoye nuestra misión con una contribución', 'donate_paypal': 'PayPal',
            'support_thanks': '¡Gracias por ayudarnos a mantener PDFrow gratis para todos! ❤️',
            'login_title': 'Bienvenido de Nuevo', 'login_subtitle': 'Inicie sesión para acceder a su cuenta de PDFrow', 'label_email': 'Correo Electrónico',
            'label_password': 'Contraseña', 'btn_sign_in': 'Iniciar Sesión', 'auth_or': 'o', 'btn_continue_google': 'Continuar con Google',
            'link_forgot_password': '¿Olvidaste tu contraseña?', 'auth_no_account': '¿No tienes una cuenta?', 'link_sign_up': 'Registrarse',
            'signup_title': 'Crear Cuenta', 'signup_subtitle': 'Únase a PDFrow y desbloquee funciones premium', 'label_name': 'Nombre Completo',
            'btn_create_account': 'Crear Cuenta', 'checkbox_agree_terms': 'Acepto los <a href="terms-conditions.html" target="_blank">Términos de Servicio</a> y la <a href="privacy-policy.html" target="_blank">Política de Privacidad</a>',
            'auth_have_account': '¿Ya tienes una cuenta?', 'link_sign_in': 'Iniciar sesión',
            'contact_title': 'Contáctenos', 'contact_subtitle': 'Nos encantaría saber de ti', 'label_subject': 'Asunto', 'label_message': 'Mensaje',
            'btn_send_message': 'Enviar Mensaje', 'contact_success': '¡Gracias! Tu mensaje ha sido enviado con éxito.',
            'contact_error': 'Lo sentimos, hubo un error al enviar tu mensaje. Por favor, inténtalo de nuevo.'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'breadcrumb_home': 'Accueil', 'breadcrumb_current': 'Convertisseur PNG en JPG', 'page_title': 'Convertisseur PNG en JPG',
            'page_description': 'Convertissez des images PNG au format JPG avec des résultats de haute qualité. Réduisez la taille du fichier tout en maintenant la qualité visuelle. Parfait pour l\'optimisation web et le partage.',
            'feature_fast_convert': 'Conversion Rapide', 'feature_small_files': 'Petits Fichiers', 'feature_batch_process': 'Traitement par Lots', 'feature_secure': '100% Sécurisé',
            'security_badge': '100% Sécurisé - Fichiers traités localement',
            'section_title': 'Convertisseur PNG en JPG', 'section_subtitle': 'Convertissez vos images PNG au format JPG avec une qualité personnalisable',
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.',
            'upload_from_computer': 'Télécharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'drop_png_files': 'Déposez les fichiers PNG ici', 'or_click_browse': 'ou cliquez pour parcourir',
            'convert_to_jpg': 'Convertir en JPG', 'hint_upload_files_first': 'Téléchargez des fichiers PNG ci-dessus pour activer la conversion',
            'features_title': 'Pourquoi choisir le convertisseur PNG en JPG de PDFrow?', 'features_subtitle': 'Conversion d\'images rapide, sécurisée et de haute qualité',
            'feature_lightning_fast_title': 'Ultra Rapide', 'feature_lightning_fast_desc': 'Convertissez des images PNG en JPG en quelques secondes avec notre moteur de conversion optimisé',
            'feature_100_secure_title': '100% Sécurisé', 'feature_100_secure_desc': 'Vos fichiers sont traités localement et automatiquement supprimés après le traitement',
            'feature_quality_control_title': 'Contrôle de Qualité', 'feature_quality_control_desc': 'Paramètres de qualité personnalisables pour équilibrer la taille du fichier et la qualité de l\'image',
            'feature_no_software_title': 'Aucun Logiciel Nécessaire', 'feature_no_software_desc': 'Fonctionne directement dans votre navigateur - aucun téléchargement ni installation requis',
            'how_it_works_title': 'Comment Convertir PNG en JPG', 'how_it_works_subtitle': 'Processus simple en 3 étapes pour convertir vos images',
            'step_1_title': 'Télécharger PNG', 'step_1_desc': 'Sélectionnez ou glissez-déposez vos fichiers PNG pour commencer',
            'step_2_title': 'Convertir', 'step_2_desc': 'Notre outil convertit automatiquement vos images PNG au format JPG',
            'step_3_title': 'Télécharger', 'step_3_desc': 'Téléchargez vos fichiers JPG convertis instantanément',
            'language': 'Langue', 'footer_description': 'Plateforme de traitement de documents de nouvelle génération. Rapide, sécurisée et toujours gratuite.',
            'footer_tools_title': 'Outils', 'footer_pdf_compressor': 'Compresser PDF', 'footer_pdf_merger': 'Fusionner PDF', 'footer_support_title': 'Support',
            'footer_faq': 'FAQ', 'footer_how_it_works': 'Comment Ça Marche', 'footer_contact': 'Contact', 'footer_terms': 'Conditions Générales', 'footer_privacy': 'Politique de Confidentialité',
            'footer_copyright': '© 2025 PDFrow. Tous droits réservés. Fait avec ❤️ pour le traitement de documents.',
            'support_title': 'Soutenir PDFrow ❤️', 'support_subtitle': 'Aidez-nous à garder PDFrow gratuit et à améliorer nos services',
            'support_message': 'PDFrow est entièrement gratuit et le restera toujours. Votre soutien nous aide à:',
            'support_point_1': 'Maintenir les serveurs en marche et rapides', 'support_point_2': 'Ajouter régulièrement de nouvelles fonctionnalités',
            'support_point_3': 'Maintenir des normes de sécurité élevées', 'support_point_4': 'Fournir une excellente expérience utilisateur',
            'support_share_title': 'Partager PDFrow', 'support_share_desc': 'Parlez de PDFrow à vos amis', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Faire un Don', 'support_donation_desc': 'Soutenez notre mission avec une contribution', 'donate_paypal': 'PayPal',
            'support_thanks': 'Merci de nous aider à garder PDFrow gratuit pour tous! ❤️',
            'login_title': 'Bon Retour', 'login_subtitle': 'Connectez-vous pour accéder à votre compte PDFrow', 'label_email': 'Email',
            'label_password': 'Mot de Passe', 'btn_sign_in': 'Se Connecter', 'auth_or': 'ou', 'btn_continue_google': 'Continuer avec Google',
            'link_forgot_password': 'Mot de passe oublié?', 'auth_no_account': 'Vous n\'avez pas de compte?', 'link_sign_up': 'S\'inscrire',
            'signup_title': 'Créer un Compte', 'signup_subtitle': 'Rejoignez PDFrow et débloquez les fonctionnalités premium', 'label_name': 'Nom Complet',
            'btn_create_account': 'Créer un Compte', 'checkbox_agree_terms': 'J\'accepte les <a href="terms-conditions.html" target="_blank">Conditions d\'Utilisation</a> et la <a href="privacy-policy.html" target="_blank">Politique de Confidentialité</a>',
            'auth_have_account': 'Vous avez déjà un compte?', 'link_sign_in': 'Se connecter',
            'contact_title': 'Contactez-nous', 'contact_subtitle': 'Nous aimerions avoir de vos nouvelles', 'label_subject': 'Sujet', 'label_message': 'Message',
            'btn_send_message': 'Envoyer le Message', 'contact_success': 'Merci! Votre message a été envoyé avec succès.',
            'contact_error': 'Désolé, une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'breadcrumb_home': 'Startseite', 'breadcrumb_current': 'PNG zu JPG Konverter', 'page_title': 'PNG zu JPG Konverter',
            'page_description': 'Konvertieren Sie PNG-Bilder mit hochwertigen Ergebnissen in das JPG-Format. Reduzieren Sie die Dateigröße bei gleichbleibender visueller Qualität. Perfekt für Web-Optimierung und Teilen.',
            'feature_fast_convert': 'Schnelle Konvertierung', 'feature_small_files': 'Kleine Dateien', 'feature_batch_process': 'Stapelverarbeitung', 'feature_secure': '100% Sicher',
            'security_badge': '100% Sicher - Dateien werden lokal verarbeitet',
            'section_title': 'PNG zu JPG Konverter', 'section_subtitle': 'Konvertieren Sie Ihre PNG-Bilder mit anpassbarer Qualität in das JPG-Format',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.',
            'upload_from_computer': 'Vom Computer Hochladen', 'import_from_url': 'Von URL Importieren',
            'drop_png_files': 'PNG-Dateien hier ablegen', 'or_click_browse': 'oder klicken zum Durchsuchen',
            'convert_to_jpg': 'In JPG Konvertieren', 'hint_upload_files_first': 'Laden Sie PNG-Dateien oben hoch, um die Konvertierung zu aktivieren',
            'features_title': 'Warum den PNG zu JPG Konverter von PDFrow wählen?', 'features_subtitle': 'Schnelle, sichere und hochwertige Bildkonvertierung',
            'feature_lightning_fast_title': 'Blitzschnell', 'feature_lightning_fast_desc': 'Konvertieren Sie PNG-Bilder in Sekunden mit unserer optimierten Konvertierungs-Engine in JPG',
            'feature_100_secure_title': '100% Sicher', 'feature_100_secure_desc': 'Ihre Dateien werden lokal verarbeitet und nach der Verarbeitung automatisch gelöscht',
            'feature_quality_control_title': 'Qualitätskontrolle', 'feature_quality_control_desc': 'Anpassbare Qualitätseinstellungen zum Ausgleich von Dateigröße und Bildqualität',
            'feature_no_software_title': 'Keine Software Erforderlich', 'feature_no_software_desc': 'Funktioniert direkt in Ihrem Browser - keine Downloads oder Installationen erforderlich',
            'how_it_works_title': 'So Konvertieren Sie PNG zu JPG', 'how_it_works_subtitle': 'Einfacher 3-Schritte-Prozess zum Konvertieren Ihrer Bilder',
            'step_1_title': 'PNG Hochladen', 'step_1_desc': 'Wählen Sie Ihre PNG-Dateien aus oder ziehen Sie sie per Drag & Drop',
            'step_2_title': 'Konvertieren', 'step_2_desc': 'Unser Tool konvertiert Ihre PNG-Bilder automatisch in das JPG-Format',
            'step_3_title': 'Herunterladen', 'step_3_desc': 'Laden Sie Ihre konvertierten JPG-Dateien sofort herunter',
            'language': 'Sprache', 'footer_description': 'Dokumentenverarbeitungsplattform der nächsten Generation. Schnell, sicher und immer kostenlos.',
            'footer_tools_title': 'Werkzeuge', 'footer_pdf_compressor': 'PDF Komprimieren', 'footer_pdf_merger': 'PDF Zusammenführen', 'footer_support_title': 'Unterstützung',
            'footer_faq': 'FAQ', 'footer_how_it_works': 'Wie es Funktioniert', 'footer_contact': 'Kontakt', 'footer_terms': 'Nutzungsbedingungen', 'footer_privacy': 'Datenschutzrichtlinie',
            'footer_copyright': '© 2025 PDFrow. Alle Rechte vorbehalten. Mit ❤️ für die Dokumentenverarbeitung gemacht.',
            'support_title': 'PDFrow Unterstützen ❤️', 'support_subtitle': 'Helfen Sie uns, PDFrow kostenlos zu halten und unsere Dienste zu verbessern',
            'support_message': 'PDFrow ist völlig kostenlos und wird es immer bleiben. Ihre Unterstützung hilft uns:',
            'support_point_1': 'Server am Laufen und schnell halten', 'support_point_2': 'Regelmäßig neue Funktionen hinzufügen',
            'support_point_3': 'Hohe Sicherheitsstandards aufrechterhalten', 'support_point_4': 'Hervorragende Benutzererfahrung bieten',
            'support_share_title': 'PDFrow Teilen', 'support_share_desc': 'Erzählen Sie Ihren Freunden von PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Spenden', 'support_donation_desc': 'Unterstützen Sie unsere Mission mit einem Beitrag', 'donate_paypal': 'PayPal',
            'support_thanks': 'Vielen Dank, dass Sie uns helfen, PDFrow für alle kostenlos zu halten! ❤️',
            'login_title': 'Willkommen Zurück', 'login_subtitle': 'Melden Sie sich an, um auf Ihr PDFrow-Konto zuzugreifen', 'label_email': 'E-Mail',
            'label_password': 'Passwort', 'btn_sign_in': 'Anmelden', 'auth_or': 'oder', 'btn_continue_google': 'Mit Google Fortfahren',
            'link_forgot_password': 'Passwort vergessen?', 'auth_no_account': 'Haben Sie kein Konto?', 'link_sign_up': 'Registrieren',
            'signup_title': 'Konto Erstellen', 'signup_subtitle': 'Treten Sie PDFrow bei und schalten Sie Premium-Funktionen frei', 'label_name': 'Vollständiger Name',
            'btn_create_account': 'Konto Erstellen', 'checkbox_agree_terms': 'Ich stimme den <a href="terms-conditions.html" target="_blank">Nutzungsbedingungen</a> und der <a href="privacy-policy.html" target="_blank">Datenschutzrichtlinie</a> zu',
            'auth_have_account': 'Haben Sie bereits ein Konto?', 'link_sign_in': 'Anmelden',
            'contact_title': 'Kontaktieren Sie Uns', 'contact_subtitle': 'Wir würden gerne von Ihnen hören', 'label_subject': 'Betreff', 'label_message': 'Nachricht',
            'btn_send_message': 'Nachricht Senden', 'contact_success': 'Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.',
            'contact_error': 'Entschuldigung, beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'breadcrumb_home': 'Home', 'breadcrumb_current': 'Convertitore PNG a JPG', 'page_title': 'Convertitore PNG a JPG',
            'page_description': 'Converti immagini PNG in formato JPG con risultati di alta qualità. Riduci la dimensione del file mantenendo la qualità visiva. Perfetto per l\'ottimizzazione web e la condivisione.',
            'feature_fast_convert': 'Conversione Veloce', 'feature_small_files': 'File Piccoli', 'feature_batch_process': 'Elaborazione Batch', 'feature_secure': '100% Sicuro',
            'security_badge': '100% Sicuro - File elaborati localmente',
            'section_title': 'Convertitore PNG a JPG', 'section_subtitle': 'Converti le tue immagini PNG in formato JPG con qualità personalizzabile',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.',
            'upload_from_computer': 'Carica dal Computer', 'import_from_url': 'Importa da URL',
            'drop_png_files': 'Trascina file PNG qui', 'or_click_browse': 'o clicca per sfogliare',
            'convert_to_jpg': 'Converti in JPG', 'hint_upload_files_first': 'Carica file PNG sopra per abilitare la conversione',
            'features_title': 'Perché scegliere il convertitore PNG a JPG di PDFrow?', 'features_subtitle': 'Conversione di immagini veloce, sicura e di alta qualità',
            'feature_lightning_fast_title': 'Fulmineo', 'feature_lightning_fast_desc': 'Converti immagini PNG in JPG in pochi secondi con il nostro motore di conversione ottimizzato',
            'feature_100_secure_title': '100% Sicuro', 'feature_100_secure_desc': 'I tuoi file vengono elaborati localmente e automaticamente eliminati dopo l\'elaborazione',
            'feature_quality_control_title': 'Controllo Qualità', 'feature_quality_control_desc': 'Impostazioni di qualità personalizzabili per bilanciare dimensione del file e qualità dell\'immagine',
            'feature_no_software_title': 'Nessun Software Necessario', 'feature_no_software_desc': 'Funziona direttamente nel tuo browser - nessun download o installazione richiesti',
            'how_it_works_title': 'Come Convertire PNG in JPG', 'how_it_works_subtitle': 'Semplice processo in 3 passaggi per convertire le tue immagini',
            'step_1_title': 'Carica PNG', 'step_1_desc': 'Seleziona o trascina i tuoi file PNG per iniziare',
            'step_2_title': 'Converti', 'step_2_desc': 'Il nostro strumento converte automaticamente le tue immagini PNG in formato JPG',
            'step_3_title': 'Scarica', 'step_3_desc': 'Scarica i tuoi file JPG convertiti istantaneamente',
            'language': 'Lingua', 'footer_description': 'Piattaforma di elaborazione documenti di nuova generazione. Veloce, sicura e sempre gratuita.',
            'footer_tools_title': 'Strumenti', 'footer_pdf_compressor': 'Comprimi PDF', 'footer_pdf_merger': 'Unisci PDF', 'footer_support_title': 'Supporto',
            'footer_faq': 'FAQ', 'footer_how_it_works': 'Come Funziona', 'footer_contact': 'Contatto', 'footer_terms': 'Termini e Condizioni', 'footer_privacy': 'Privacy Policy',
            'footer_copyright': '© 2025 PDFrow. Tutti i diritti riservati. Fatto con ❤️ per l\'elaborazione di documenti.',
            'support_title': 'Supporta PDFrow ❤️', 'support_subtitle': 'Aiutaci a mantenere PDFrow gratuito e a migliorare i nostri servizi',
            'support_message': 'PDFrow è completamente gratuito e lo rimarrà sempre. Il tuo supporto ci aiuta a:',
            'support_point_1': 'Mantenere i server attivi e veloci', 'support_point_2': 'Aggiungere nuove funzionalità regolarmente',
            'support_point_3': 'Mantenere elevati standard di sicurezza', 'support_point_4': 'Fornire un\'eccellente esperienza utente',
            'support_share_title': 'Condividi PDFrow', 'support_share_desc': 'Parla di PDFrow ai tuoi amici', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Fai una Donazione', 'support_donation_desc': 'Sostieni la nostra missione con un contributo', 'donate_paypal': 'PayPal',
            'support_thanks': 'Grazie per aiutarci a mantenere PDFrow gratuito per tutti! ❤️',
            'login_title': 'Bentornato', 'login_subtitle': 'Accedi per accedere al tuo account PDFrow', 'label_email': 'Email',
            'label_password': 'Password', 'btn_sign_in': 'Accedi', 'auth_or': 'o', 'btn_continue_google': 'Continua con Google',
            'link_forgot_password': 'Password dimenticata?', 'auth_no_account': 'Non hai un account?', 'link_sign_up': 'Registrati',
            'signup_title': 'Crea Account', 'signup_subtitle': 'Unisciti a PDFrow e sblocca funzionalità premium', 'label_name': 'Nome Completo',
            'btn_create_account': 'Crea Account', 'checkbox_agree_terms': 'Accetto i <a href="terms-conditions.html" target="_blank">Termini di Servizio</a> e la <a href="privacy-policy.html" target="_blank">Privacy Policy</a>',
            'auth_have_account': 'Hai già un account?', 'link_sign_in': 'Accedi',
            'contact_title': 'Contattaci', 'contact_subtitle': 'Ci piacerebbe sentirti', 'label_subject': 'Oggetto', 'label_message': 'Messaggio',
            'btn_send_message': 'Invia Messaggio', 'contact_success': 'Grazie! Il tuo messaggio è stato inviato con successo.',
            'contact_error': 'Spiacenti, si è verificato un errore durante l\'invio del messaggio. Riprova.'
        },
        'tr': {
            'nav_tools': 'Araçlar', 'nav_features': 'Özellikler', 'nav_how_it_works': 'Nasıl Çalışır', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_current': 'PNG\'den JPG\'ye Dönüştürücü', 'page_title': 'PNG\'den JPG\'ye Dönüştürücü',
            'page_description': 'PNG görüntüleri yüksek kaliteli sonuçlarla JPG formatına dönüştürün. Görsel kaliteyi korurken dosya boyutunu küçültün. Web optimizasyonu ve paylaşım için mükemmel.',
            'feature_fast_convert': 'Hızlı Dönüştürme', 'feature_small_files': 'Küçük Dosyalar', 'feature_batch_process': 'Toplu İşlem', 'feature_secure': '%100 Güvenli',
            'security_badge': '%100 Güvenli - Dosyalar yerel olarak işlenir',
            'section_title': 'PNG\'den JPG\'ye Dönüştürücü', 'section_subtitle': 'PNG görüntülerinizi özelleştirilebilir kaliteyle JPG formatına dönüştürün',
            'privacy_badge': '%100 istemci tarafı. Dosyalar cihazınızdan asla ayrılmaz.',
            'upload_from_computer': 'Bilgisayardan Yükle', 'import_from_url': 'URL\'den İçe Aktar',
            'drop_png_files': 'PNG dosyalarını buraya bırakın', 'or_click_browse': 'veya göz atmak için tıklayın',
            'convert_to_jpg': 'JPG\'ye Dönüştür', 'hint_upload_files_first': 'Dönüştürmeyi etkinleştirmek için yukarıya PNG dosyaları yükleyin',
            'features_title': 'Neden PDFrow PNG\'den JPG\'ye Dönüştürücüsünü Seçmelisiniz?', 'features_subtitle': 'Hızlı, güvenli ve yüksek kaliteli görüntü dönüştürme',
            'feature_lightning_fast_title': 'Şimşek Hızında', 'feature_lightning_fast_desc': 'Optimize edilmiş dönüştürme motorumuzla PNG görüntüleri saniyeler içinde JPG\'ye dönüştürün',
            'feature_100_secure_title': '%100 Güvenli', 'feature_100_secure_desc': 'Dosyalarınız yerel olarak işlenir ve işlemden sonra otomatik olarak silinir',
            'feature_quality_control_title': 'Kalite Kontrolü', 'feature_quality_control_desc': 'Dosya boyutu ve görüntü kalitesini dengelemek için özelleştirilebilir kalite ayarları',
            'feature_no_software_title': 'Yazılım Gerekmez', 'feature_no_software_desc': 'Doğrudan tarayıcınızda çalışır - indirme veya kurulum gerekmez',
            'how_it_works_title': 'PNG\'yi JPG\'ye Nasıl Dönüştürülür', 'how_it_works_subtitle': 'Görüntülerinizi dönüştürmek için basit 3 adımlı işlem',
            'step_1_title': 'PNG Yükle', 'step_1_desc': 'Başlamak için PNG dosyalarınızı seçin veya sürükleyip bırakın',
            'step_2_title': 'Dönüştür', 'step_2_desc': 'Aracımız PNG görüntülerinizi otomatik olarak JPG formatına dönüştürür',
            'step_3_title': 'İndir', 'step_3_desc': 'Dönüştürülmüş JPG dosyalarınızı anında indirin',
            'language': 'Dil', 'footer_description': 'Yeni nesil belge işleme platformu. Hızlı, güvenli ve her zaman ücretsiz.',
            'footer_tools_title': 'Araçlar', 'footer_pdf_compressor': 'PDF Sıkıştır', 'footer_pdf_merger': 'PDF Birleştir', 'footer_support_title': 'Destek',
            'footer_faq': 'SSS', 'footer_how_it_works': 'Nasıl Çalışır', 'footer_contact': 'İletişim', 'footer_terms': 'Şartlar ve Koşullar', 'footer_privacy': 'Gizlilik Politikası',
            'footer_copyright': '© 2025 PDFrow. Tüm hakları saklıdır. Belge işleme için ❤️ ile yapıldı.',
            'support_title': 'PDFrow\'u Destekleyin ❤️', 'support_subtitle': 'PDFrow\'u ücretsiz tutmamıza ve hizmetlerimizi geliştirmemize yardımcı olun',
            'support_message': 'PDFrow tamamen ücretsizdir ve her zaman öyle kalacak. Desteğiniz bize yardımcı olur:',
            'support_point_1': 'Sunucuları çalışır ve hızlı tutmak', 'support_point_2': 'Düzenli olarak yeni özellikler eklemek',
            'support_point_3': 'Yüksek güvenlik standartlarını korumak', 'support_point_4': 'Mükemmel kullanıcı deneyimi sağlamak',
            'support_share_title': 'PDFrow\'u Paylaş', 'support_share_desc': 'Arkadaşlarınıza PDFrow hakkında bilgi verin', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Bağış Yap', 'support_donation_desc': 'Bir katkı ile misyonumuzu destekleyin', 'donate_paypal': 'PayPal',
            'support_thanks': 'PDFrow\'u herkes için ücretsiz tutmamıza yardımcı olduğunuz için teşekkür ederiz! ❤️',
            'login_title': 'Tekrar Hoş Geldiniz', 'login_subtitle': 'PDFrow hesabınıza erişmek için giriş yapın', 'label_email': 'E-posta',
            'label_password': 'Şifre', 'btn_sign_in': 'Giriş Yap', 'auth_or': 'veya', 'btn_continue_google': 'Google ile Devam Et',
            'link_forgot_password': 'Şifrenizi mi unuttunuz?', 'auth_no_account': 'Hesabınız yok mu?', 'link_sign_up': 'Kayıt ol',
            'signup_title': 'Hesap Oluştur', 'signup_subtitle': 'PDFrow\'a katılın ve premium özelliklerin kilidini açın', 'label_name': 'Tam Ad',
            'btn_create_account': 'Hesap Oluştur', 'checkbox_agree_terms': '<a href="terms-conditions.html" target="_blank">Hizmet Şartlarını</a> ve <a href="privacy-policy.html" target="_blank">Gizlilik Politikasını</a> kabul ediyorum',
            'auth_have_account': 'Zaten hesabınız var mı?', 'link_sign_in': 'Giriş yap',
            'contact_title': 'Bize Ulaşın', 'contact_subtitle': 'Sizden haber almak isteriz', 'label_subject': 'Konu', 'label_message': 'Mesaj',
            'btn_send_message': 'Mesaj Gönder', 'contact_success': 'Teşekkürler! Mesajınız başarıyla gönderildi.',
            'contact_error': 'Üzgünüz, mesajınız gönderilirken bir hata oluştu. Lütfen tekrar deneyin.'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'breadcrumb_home': 'Início', 'breadcrumb_current': 'Conversor PNG para JPG', 'page_title': 'Conversor PNG para JPG',
            'page_description': 'Converta imagens PNG para formato JPG com resultados de alta qualidade. Reduza o tamanho do arquivo mantendo a qualidade visual. Perfeito para otimização web e compartilhamento.',
            'feature_fast_convert': 'Conversão Rápida', 'feature_small_files': 'Arquivos Pequenos', 'feature_batch_process': 'Processamento em Lote', 'feature_secure': '100% Seguro',
            'security_badge': '100% Seguro - Arquivos processados localmente',
            'section_title': 'Conversor PNG para JPG', 'section_subtitle': 'Converta suas imagens PNG para formato JPG com qualidade personalizável',
            'privacy_badge': '100% no lado do cliente. Os arquivos nunca saem do seu dispositivo.',
            'upload_from_computer': 'Carregar do Computador', 'import_from_url': 'Importar de URL',
            'drop_png_files': 'Solte arquivos PNG aqui', 'or_click_browse': 'ou clique para procurar',
            'convert_to_jpg': 'Converter para JPG', 'hint_upload_files_first': 'Carregue arquivos PNG acima para habilitar a conversão',
            'features_title': 'Por que escolher o conversor PNG para JPG do PDFrow?', 'features_subtitle': 'Conversão de imagens rápida, segura e de alta qualidade',
            'feature_lightning_fast_title': 'Extremamente Rápido', 'feature_lightning_fast_desc': 'Converta imagens PNG para JPG em segundos com nosso mecanismo de conversão otimizado',
            'feature_100_secure_title': '100% Seguro', 'feature_100_secure_desc': 'Seus arquivos são processados localmente e automaticamente excluídos após o processamento',
            'feature_quality_control_title': 'Controle de Qualidade', 'feature_quality_control_desc': 'Configurações de qualidade personalizáveis para equilibrar tamanho do arquivo e qualidade da imagem',
            'feature_no_software_title': 'Sem Necessidade de Software', 'feature_no_software_desc': 'Funciona diretamente no seu navegador - sem downloads ou instalações necessárias',
            'how_it_works_title': 'Como Converter PNG para JPG', 'how_it_works_subtitle': 'Processo simples de 3 etapas para converter suas imagens',
            'step_1_title': 'Carregar PNG', 'step_1_desc': 'Selecione ou arraste e solte seus arquivos PNG para começar',
            'step_2_title': 'Converter', 'step_2_desc': 'Nossa ferramenta converte automaticamente suas imagens PNG para formato JPG',
            'step_3_title': 'Baixar', 'step_3_desc': 'Baixe seus arquivos JPG convertidos instantaneamente',
            'language': 'Idioma', 'footer_description': 'Plataforma de processamento de documentos de próxima geração. Rápida, segura e sempre gratuita.',
            'footer_tools_title': 'Ferramentas', 'footer_pdf_compressor': 'Compactar PDF', 'footer_pdf_merger': 'Mesclar PDF', 'footer_support_title': 'Suporte',
            'footer_faq': 'FAQ', 'footer_how_it_works': 'Como Funciona', 'footer_contact': 'Contato', 'footer_terms': 'Termos e Condições', 'footer_privacy': 'Política de Privacidade',
            'footer_copyright': '© 2025 PDFrow. Todos os direitos reservados. Feito com ❤️ para processamento de documentos.',
            'support_title': 'Apoiar PDFrow ❤️', 'support_subtitle': 'Ajude-nos a manter o PDFrow gratuito e a melhorar nossos serviços',
            'support_message': 'O PDFrow é completamente gratuito e sempre será. Seu apoio nos ajuda a:',
            'support_point_1': 'Manter os servidores funcionando e rápidos', 'support_point_2': 'Adicionar novos recursos regularmente',
            'support_point_3': 'Manter altos padrões de segurança', 'support_point_4': 'Fornecer excelente experiência do usuário',
            'support_share_title': 'Compartilhar PDFrow', 'support_share_desc': 'Conte aos seus amigos sobre o PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Fazer uma Doação', 'support_donation_desc': 'Apoie nossa missão com uma contribuição', 'donate_paypal': 'PayPal',
            'support_thanks': 'Obrigado por nos ajudar a manter o PDFrow gratuito para todos! ❤️',
            'login_title': 'Bem-vindo de Volta', 'login_subtitle': 'Entre para acessar sua conta PDFrow', 'label_email': 'Email',
            'label_password': 'Senha', 'btn_sign_in': 'Entrar', 'auth_or': 'ou', 'btn_continue_google': 'Continuar com Google',
            'link_forgot_password': 'Esqueceu a senha?', 'auth_no_account': 'Não tem uma conta?', 'link_sign_up': 'Cadastrar',
            'signup_title': 'Criar Conta', 'signup_subtitle': 'Junte-se ao PDFrow e desbloqueie recursos premium', 'label_name': 'Nome Completo',
            'btn_create_account': 'Criar Conta', 'checkbox_agree_terms': 'Concordo com os <a href="terms-conditions.html" target="_blank">Termos de Serviço</a> e a <a href="privacy-policy.html" target="_blank">Política de Privacidade</a>',
            'auth_have_account': 'Já tem uma conta?', 'link_sign_in': 'Entrar',
            'contact_title': 'Entre em Contato', 'contact_subtitle': 'Adoraríamos ouvir de você', 'label_subject': 'Assunto', 'label_message': 'Mensagem',
            'btn_send_message': 'Enviar Mensagem', 'contact_success': 'Obrigado! Sua mensagem foi enviada com sucesso.',
            'contact_error': 'Desculpe, ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'breadcrumb_home': 'Главная', 'breadcrumb_current': 'Конвертер PNG в JPG', 'page_title': 'Конвертер PNG в JPG',
            'page_description': 'Конвертируйте изображения PNG в формат JPG с высококачественными результатами. Уменьшите размер файла, сохраняя визуальное качество. Идеально для веб-оптимизации и обмена.',
            'feature_fast_convert': 'Быстрая Конвертация', 'feature_small_files': 'Маленькие Файлы', 'feature_batch_process': 'Пакетная Обработка', 'feature_secure': '100% Безопасно',
            'security_badge': '100% Безопасно - Файлы обрабатываются локально',
            'section_title': 'Конвертер PNG в JPG', 'section_subtitle': 'Конвертируйте ваши изображения PNG в формат JPG с настраиваемым качеством',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.',
            'upload_from_computer': 'Загрузить с Компьютера', 'import_from_url': 'Импорт из URL',
            'drop_png_files': 'Перетащите файлы PNG сюда', 'or_click_browse': 'или нажмите для просмотра',
            'convert_to_jpg': 'Конвертировать в JPG', 'hint_upload_files_first': 'Загрузите файлы PNG выше, чтобы включить конвертацию',
            'features_title': 'Почему выбрать конвертер PNG в JPG от PDFrow?', 'features_subtitle': 'Быстрая, безопасная и высококачественная конвертация изображений',
            'feature_lightning_fast_title': 'Молниеносно Быстро', 'feature_lightning_fast_desc': 'Конвертируйте изображения PNG в JPG за секунды с нашим оптимизированным механизмом конвертации',
            'feature_100_secure_title': '100% Безопасно', 'feature_100_secure_desc': 'Ваши файлы обрабатываются локально и автоматически удаляются после обработки',
            'feature_quality_control_title': 'Контроль Качества', 'feature_quality_control_desc': 'Настраиваемые параметры качества для баланса размера файла и качества изображения',
            'feature_no_software_title': 'Программное Обеспечение не Требуется', 'feature_no_software_desc': 'Работает прямо в вашем браузере - не требуется загрузок или установок',
            'how_it_works_title': 'Как Конвертировать PNG в JPG', 'how_it_works_subtitle': 'Простой 3-шаговый процесс конвертации ваших изображений',
            'step_1_title': 'Загрузить PNG', 'step_1_desc': 'Выберите или перетащите ваши файлы PNG, чтобы начать',
            'step_2_title': 'Конвертировать', 'step_2_desc': 'Наш инструмент автоматически конвертирует ваши изображения PNG в формат JPG',
            'step_3_title': 'Скачать', 'step_3_desc': 'Мгновенно скачайте ваши конвертированные файлы JPG',
            'language': 'Язык', 'footer_description': 'Платформа обработки документов нового поколения. Быстрая, безопасная и всегда бесплатная.',
            'footer_tools_title': 'Инструменты', 'footer_pdf_compressor': 'Сжать PDF', 'footer_pdf_merger': 'Объединить PDF', 'footer_support_title': 'Поддержка',
            'footer_faq': 'FAQ', 'footer_how_it_works': 'Как это работает', 'footer_contact': 'Контакт', 'footer_terms': 'Условия использования', 'footer_privacy': 'Политика конфиденциальности',
            'footer_copyright': '© 2025 PDFrow. Все права защищены. Сделано с ❤️ для обработки документов.',
            'support_title': 'Поддержать PDFrow ❤️', 'support_subtitle': 'Помогите нам сохранить PDFrow бесплатным и улучшить наши услуги',
            'support_message': 'PDFrow полностью бесплатен и всегда будет таким. Ваша поддержка помогает нам:',
            'support_point_1': 'Поддерживать работу серверов быстрыми', 'support_point_2': 'Регулярно добавлять новые функции',
            'support_point_3': 'Поддерживать высокие стандарты безопасности', 'support_point_4': 'Обеспечивать отличный пользовательский опыт',
            'support_share_title': 'Поделиться PDFrow', 'support_share_desc': 'Расскажите друзьям о PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'Сделать Пожертвование', 'support_donation_desc': 'Поддержите нашу миссию своим вкладом', 'donate_paypal': 'PayPal',
            'support_thanks': 'Спасибо за помощь в сохранении PDFrow бесплатным для всех! ❤️',
            'login_title': 'С Возвращением', 'login_subtitle': 'Войдите, чтобы получить доступ к вашей учетной записи PDFrow', 'label_email': 'Email',
            'label_password': 'Пароль', 'btn_sign_in': 'Войти', 'auth_or': 'или', 'btn_continue_google': 'Продолжить с Google',
            'link_forgot_password': 'Забыли пароль?', 'auth_no_account': 'Нет учетной записи?', 'link_sign_up': 'Зарегистрироваться',
            'signup_title': 'Создать Аккаунт', 'signup_subtitle': 'Присоединяйтесь к PDFrow и разблокируйте премиум-функции', 'label_name': 'Полное Имя',
            'btn_create_account': 'Создать Аккаунт', 'checkbox_agree_terms': 'Я согласен с <a href="terms-conditions.html" target="_blank">Условиями обслуживания</a> и <a href="privacy-policy.html" target="_blank">Политикой конфиденциальности</a>',
            'auth_have_account': 'Уже есть аккаунт?', 'link_sign_in': 'Войти',
            'contact_title': 'Свяжитесь с Нами', 'contact_subtitle': 'Мы хотели бы услышать от вас', 'label_subject': 'Тема', 'label_message': 'Сообщение',
            'btn_send_message': 'Отправить Сообщение', 'contact_success': 'Спасибо! Ваше сообщение было успешно отправлено.',
            'contact_error': 'Извините, произошла ошибка при отправке вашего сообщения. Пожалуйста, попробуйте снова.'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'breadcrumb_home': '首页', 'breadcrumb_current': 'PNG转JPG转换器', 'page_title': 'PNG转JPG转换器',
            'page_description': '将PNG图像转换为JPG格式，获得高质量结果。在保持视觉质量的同时减小文件大小。非常适合网页优化和分享。',
            'feature_fast_convert': '快速转换', 'feature_small_files': '小文件', 'feature_batch_process': '批量处理', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - 文件在本地处理',
            'section_title': 'PNG转JPG转换器', 'section_subtitle': '使用可自定义质量将PNG图像转换为JPG格式',
            'privacy_badge': '100%客户端。文件永远不会离开您的设备。',
            'upload_from_computer': '从电脑上传', 'import_from_url': '从URL导入',
            'drop_png_files': '在此放置PNG文件', 'or_click_browse': '或点击浏览',
            'convert_to_jpg': '转换为JPG', 'hint_upload_files_first': '上传PNG文件以启用转换',
            'features_title': '为什么选择PDFrow PNG转JPG转换器？', 'features_subtitle': '快速、安全、高质量的图像转换',
            'feature_lightning_fast_title': '闪电般快速', 'feature_lightning_fast_desc': '使用我们优化的转换引擎在几秒钟内将PNG图像转换为JPG',
            'feature_100_secure_title': '100%安全', 'feature_100_secure_desc': '您的文件在本地处理，并在处理后自动删除',
            'feature_quality_control_title': '质量控制', 'feature_quality_control_desc': '可自定义的质量设置，以平衡文件大小和图像质量',
            'feature_no_software_title': '无需软件', 'feature_no_software_desc': '直接在浏览器中工作 - 无需下载或安装',
            'how_it_works_title': '如何将PNG转换为JPG', 'how_it_works_subtitle': '转换图像的简单3步流程',
            'step_1_title': '上传PNG', 'step_1_desc': '选择或拖放您的PNG文件以开始',
            'step_2_title': '转换', 'step_2_desc': '我们的工具会自动将您的PNG图像转换为JPG格式',
            'step_3_title': '下载', 'step_3_desc': '立即下载您转换的JPG文件',
            'language': '语言', 'footer_description': '新一代文档处理平台。快速、安全且始终免费。',
            'footer_tools_title': '工具', 'footer_pdf_compressor': '压缩PDF', 'footer_pdf_merger': '合并PDF', 'footer_support_title': '支持',
            'footer_faq': '常见问题', 'footer_how_it_works': '如何运作', 'footer_contact': '联系', 'footer_terms': '条款和条件', 'footer_privacy': '隐私政策',
            'footer_copyright': '© 2025 PDFrow. 版权所有。用❤️制作用于文档处理。',
            'support_title': '支持PDFrow ❤️', 'support_subtitle': '帮助我们保持PDFrow免费并改进我们的服务',
            'support_message': 'PDFrow完全免费，而且将永远如此。您的支持帮助我们:',
            'support_point_1': '保持服务器运行和快速', 'support_point_2': '定期添加新功能',
            'support_point_3': '维持高安全标准', 'support_point_4': '提供出色的用户体验',
            'support_share_title': '分享PDFrow', 'support_share_desc': '告诉您的朋友关于PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': '捐赠', 'support_donation_desc': '通过捐款支持我们的使命', 'donate_paypal': 'PayPal',
            'support_thanks': '感谢您帮助我们为所有人保持PDFrow免费！❤️',
            'login_title': '欢迎回来', 'login_subtitle': '登录以访问您的PDFrow账户', 'label_email': '电子邮件',
            'label_password': '密码', 'btn_sign_in': '登录', 'auth_or': '或', 'btn_continue_google': '使用Google继续',
            'link_forgot_password': '忘记密码？', 'auth_no_account': '没有账户？', 'link_sign_up': '注册',
            'signup_title': '创建账户', 'signup_subtitle': '加入PDFrow并解锁高级功能', 'label_name': '全名',
            'btn_create_account': '创建账户', 'checkbox_agree_terms': '我同意<a href="terms-conditions.html" target="_blank">服务条款</a>和<a href="privacy-policy.html" target="_blank">隐私政策</a>',
            'auth_have_account': '已有账户？', 'link_sign_in': '登录',
            'contact_title': '联系我们', 'contact_subtitle': '我们很乐意听取您的意见', 'label_subject': '主题', 'label_message': '消息',
            'btn_send_message': '发送消息', 'contact_success': '谢谢！您的消息已成功发送。',
            'contact_error': '抱歉，发送您的消息时出错。请重试。'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'breadcrumb_home': 'ホーム', 'breadcrumb_current': 'PNGからJPGへのコンバーター', 'page_title': 'PNGからJPGへのコンバーター',
            'page_description': 'PNG画像を高品質な結果でJPG形式に変換します。視覚的な品質を維持しながらファイルサイズを削減します。ウェブ最適化と共有に最適です。',
            'feature_fast_convert': '高速変換', 'feature_small_files': '小さいファイル', 'feature_batch_process': 'バッチ処理', 'feature_secure': '100%安全',
            'security_badge': '100%安全 - ファイルはローカルで処理されます',
            'section_title': 'PNGからJPGへのコンバーター', 'section_subtitle': 'カスタマイズ可能な品質でPNG画像をJPG形式に変換',
            'privacy_badge': '100%クライアント側。ファイルはデバイスから離れることはありません。',
            'upload_from_computer': 'コンピューターからアップロード', 'import_from_url': 'URLからインポート',
            'drop_png_files': 'PNGファイルをここにドロップ', 'or_click_browse': 'またはクリックして参照',
            'convert_to_jpg': 'JPGに変換', 'hint_upload_files_first': '変換を有効にするには上にPNGファイルをアップロードしてください',
            'features_title': 'なぜPDFrowのPNGからJPGコンバーターを選ぶのか？', 'features_subtitle': '高速、安全、高品質な画像変換',
            'feature_lightning_fast_title': '超高速', 'feature_lightning_fast_desc': '最適化された変換エンジンで数秒でPNG画像をJPGに変換',
            'feature_100_secure_title': '100%安全', 'feature_100_secure_desc': 'ファイルはローカルで処理され、処理後に自動的に削除されます',
            'feature_quality_control_title': '品質管理', 'feature_quality_control_desc': 'ファイルサイズと画像品質のバランスを取るためのカスタマイズ可能な品質設定',
            'feature_no_software_title': 'ソフトウェア不要', 'feature_no_software_desc': 'ブラウザで直接動作 - ダウンロードやインストールは不要',
            'how_it_works_title': 'PNGをJPGに変換する方法', 'how_it_works_subtitle': '画像を変換するための簡単な3ステッププロセス',
            'step_1_title': 'PNGをアップロード', 'step_1_desc': 'PNGファイルを選択するか、ドラッグ＆ドロップして開始',
            'step_2_title': '変換', 'step_2_desc': '当社のツールが自動的にPNG画像をJPG形式に変換します',
            'step_3_title': 'ダウンロード', 'step_3_desc': '変換されたJPGファイルをすぐにダウンロード',
            'language': '言語', 'footer_description': '次世代ドキュメント処理プラットフォーム。高速、安全、そして常に無料。',
            'footer_tools_title': 'ツール', 'footer_pdf_compressor': 'PDF圧縮', 'footer_pdf_merger': 'PDF結合', 'footer_support_title': 'サポート',
            'footer_faq': 'よくある質問', 'footer_how_it_works': '使い方', 'footer_contact': '連絡先', 'footer_terms': '利用規約', 'footer_privacy': 'プライバシーポリシー',
            'footer_copyright': '© 2025 PDFrow. 全著作権所有。ドキュメント処理のために❤️で作られました。',
            'support_title': 'PDFrowをサポート ❤️', 'support_subtitle': 'PDFrowを無料に保ち、サービスを改善するのを手伝ってください',
            'support_message': 'PDFrowは完全に無料で、常に無料のままです。あなたのサポートは私たちを助けます:',
            'support_point_1': 'サーバーを稼働させ、高速に保つ', 'support_point_2': '定期的に新機能を追加',
            'support_point_3': '高いセキュリティ基準を維持', 'support_point_4': '優れたユーザーエクスペリエンスを提供',
            'support_share_title': 'PDFrowを共有', 'support_share_desc': '友達にPDFrowについて教えてください', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': '寄付する', 'support_donation_desc': '貢献で私たちの使命をサポート', 'donate_paypal': 'PayPal',
            'support_thanks': 'PDFrowをすべての人に無料で保つのを手伝ってくれてありがとう！❤️',
            'login_title': 'おかえりなさい', 'login_subtitle': 'PDFrowアカウントにアクセスするにはサインインしてください', 'label_email': 'メール',
            'label_password': 'パスワード', 'btn_sign_in': 'サインイン', 'auth_or': 'または', 'btn_continue_google': 'Googleで続ける',
            'link_forgot_password': 'パスワードを忘れましたか？', 'auth_no_account': 'アカウントをお持ちでないですか？', 'link_sign_up': '登録',
            'signup_title': 'アカウント作成', 'signup_subtitle': 'PDFrowに参加してプレミアム機能のロックを解除', 'label_name': 'フルネーム',
            'btn_create_account': 'アカウントを作成', 'checkbox_agree_terms': '<a href="terms-conditions.html" target="_blank">利用規約</a>と<a href="privacy-policy.html" target="_blank">プライバシーポリシー</a>に同意します',
            'auth_have_account': 'すでにアカウントをお持ちですか？', 'link_sign_in': 'サインイン',
            'contact_title': 'お問い合わせ', 'contact_subtitle': 'お気軽にお問い合わせください', 'label_subject': '件名', 'label_message': 'メッセージ',
            'btn_send_message': 'メッセージを送信', 'contact_success': 'ありがとうございます！メッセージは正常に送信されました。',
            'contact_error': '申し訳ございません、メッセージの送信中にエラーが発生しました。もう一度お試しください。'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'المميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_current': 'محول PNG إلى JPG', 'page_title': 'محول PNG إلى JPG',
            'page_description': 'قم بتحويل صور PNG إلى تنسيق JPG بنتائج عالية الجودة. قلل حجم الملف مع الحفاظ على الجودة البصرية. مثالي لتحسين الويب والمشاركة.',
            'feature_fast_convert': 'تحويل سريع', 'feature_small_files': 'ملفات صغيرة', 'feature_batch_process': 'معالجة دفعية', 'feature_secure': 'آمن 100%',
            'security_badge': 'آمن 100% - تتم معالجة الملفات محلياً',
            'section_title': 'محول PNG إلى JPG', 'section_subtitle': 'قم بتحويل صور PNG الخاصة بك إلى تنسيق JPG مع جودة قابلة للتخصيص',
            'privacy_badge': '100% من جانب العميل. لا تترك الملفات جهازك أبداً.',
            'upload_from_computer': 'التحميل من الكمبيوتر', 'import_from_url': 'استيراد من URL',
            'drop_png_files': 'أسقط ملفات PNG هنا', 'or_click_browse': 'أو انقر للتصفح',
            'convert_to_jpg': 'تحويل إلى JPG', 'hint_upload_files_first': 'قم بتحميل ملفات PNG أعلاه لتمكين التحويل',
            'features_title': 'لماذا تختار محول PNG إلى JPG من PDFrow؟', 'features_subtitle': 'تحويل الصور بسرعة وأمان وجودة عالية',
            'feature_lightning_fast_title': 'سريع كالبرق', 'feature_lightning_fast_desc': 'قم بتحويل صور PNG إلى JPG في ثوانٍ باستخدام محرك التحويل المحسّن لدينا',
            'feature_100_secure_title': 'آمن 100%', 'feature_100_secure_desc': 'تتم معالجة ملفاتك محلياً ويتم حذفها تلقائياً بعد المعالجة',
            'feature_quality_control_title': 'مراقبة الجودة', 'feature_quality_control_desc': 'إعدادات جودة قابلة للتخصيص لتحقيق التوازن بين حجم الملف وجودة الصورة',
            'feature_no_software_title': 'لا حاجة لبرامج', 'feature_no_software_desc': 'يعمل مباشرة في المتصفح - لا حاجة للتنزيلات أو التثبيتات',
            'how_it_works_title': 'كيفية تحويل PNG إلى JPG', 'how_it_works_subtitle': 'عملية بسيطة من 3 خطوات لتحويل صورك',
            'step_1_title': 'تحميل PNG', 'step_1_desc': 'حدد أو اسحب وأفلت ملفات PNG الخاصة بك للبدء',
            'step_2_title': 'تحويل', 'step_2_desc': 'تقوم أداتنا تلقائياً بتحويل صور PNG الخاصة بك إلى تنسيق JPG',
            'step_3_title': 'تنزيل', 'step_3_desc': 'قم بتنزيل ملفات JPG المحولة على الفور',
            'language': 'اللغة', 'footer_description': 'منصة معالجة المستندات من الجيل التالي. سريعة وآمنة ومجانية دائماً.',
            'footer_tools_title': 'الأدوات', 'footer_pdf_compressor': 'ضغط PDF', 'footer_pdf_merger': 'دمج PDF', 'footer_support_title': 'الدعم',
            'footer_faq': 'الأسئلة الشائعة', 'footer_how_it_works': 'كيف يعمل', 'footer_contact': 'اتصل', 'footer_terms': 'الشروط والأحكام', 'footer_privacy': 'سياسة الخصوصية',
            'footer_copyright': '© 2025 PDFrow. جميع الحقوق محفوظة. صنع بـ ❤️ لمعالجة المستندات.',
            'support_title': 'دعم PDFrow ❤️', 'support_subtitle': 'ساعدنا في الحفاظ على PDFrow مجانياً وتحسين خدماتنا',
            'support_message': 'PDFrow مجاني تماماً وسيبقى كذلك دائماً. دعمك يساعدنا على:',
            'support_point_1': 'الحفاظ على الخوادم قيد التشغيل وسريعة', 'support_point_2': 'إضافة ميزات جديدة بانتظام',
            'support_point_3': 'الحفاظ على معايير أمان عالية', 'support_point_4': 'توفير تجربة مستخدم ممتازة',
            'support_share_title': 'شارك PDFrow', 'support_share_desc': 'أخبر أصدقاءك عن PDFrow', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'تبرع', 'support_donation_desc': 'ادعم مهمتنا بمساهمة', 'donate_paypal': 'PayPal',
            'support_thanks': 'شكراً لمساعدتنا في الحفاظ على PDFrow مجانياً للجميع! ❤️',
            'login_title': 'مرحباً بعودتك', 'login_subtitle': 'قم بتسجيل الدخول للوصول إلى حساب PDFrow الخاص بك', 'label_email': 'البريد الإلكتروني',
            'label_password': 'كلمة المرور', 'btn_sign_in': 'تسجيل الدخول', 'auth_or': 'أو', 'btn_continue_google': 'المتابعة مع Google',
            'link_forgot_password': 'هل نسيت كلمة المرور؟', 'auth_no_account': 'ليس لديك حساب؟', 'link_sign_up': 'اشترك',
            'signup_title': 'إنشاء حساب', 'signup_subtitle': 'انضم إلى PDFrow وافتح الميزات المميزة', 'label_name': 'الاسم الكامل',
            'btn_create_account': 'إنشاء حساب', 'checkbox_agree_terms': 'أوافق على <a href="terms-conditions.html" target="_blank">شروط الخدمة</a> و<a href="privacy-policy.html" target="_blank">سياسة الخصوصية</a>',
            'auth_have_account': 'هل لديك حساب بالفعل؟', 'link_sign_in': 'تسجيل الدخول',
            'contact_title': 'اتصل بنا', 'contact_subtitle': 'نحب أن نسمع منك', 'label_subject': 'الموضوع', 'label_message': 'الرسالة',
            'btn_send_message': 'إرسال رسالة', 'contact_success': 'شكراً! تم إرسال رسالتك بنجاح.',
            'contact_error': 'عذراً، حدث خطأ أثناء إرسال رسالتك. يرجى المحاولة مرة أخرى.'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'FAQ',
            'breadcrumb_home': 'होम', 'breadcrumb_current': 'PNG से JPG कनवर्टर', 'page_title': 'PNG से JPG कनवर्टर',
            'page_description': 'PNG छवियों को उच्च गुणवत्ता परिणामों के साथ JPG प्रारूप में बदलें। दृश्य गुणवत्ता बनाए रखते हुए फ़ाइल का आकार कम करें। वेब अनुकूलन और साझाकरण के लिए बिल्कुल सही।',
            'feature_fast_convert': 'तेज़ रूपांतरण', 'feature_small_files': 'छोटी फ़ाइलें', 'feature_batch_process': 'बैच प्रोसेसिंग', 'feature_secure': '100% सुरक्षित',
            'security_badge': '100% सुरक्षित - फ़ाइलें स्थानीय रूप से संसाधित',
            'section_title': 'PNG से JPG कनवर्टर', 'section_subtitle': 'अनुकूलन योग्य गुणवत्ता के साथ अपनी PNG छवियों को JPG प्रारूप में बदलें',
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी आपके उपकरण को नहीं छोड़तीं।',
            'upload_from_computer': 'कंप्यूटर से अपलोड करें', 'import_from_url': 'URL से आयात करें',
            'drop_png_files': 'PNG फ़ाइलें यहां छोड़ें', 'or_click_browse': 'या ब्राउज़ करने के लिए क्लिक करें',
            'convert_to_jpg': 'JPG में कनवर्ट करें', 'hint_upload_files_first': 'रूपांतरण सक्षम करने के लिए ऊपर PNG फ़ाइलें अपलोड करें',
            'features_title': 'PDFrow PNG से JPG कनवर्टर क्यों चुनें?', 'features_subtitle': 'तेज़, सुरक्षित और उच्च गुणवत्ता वाली छवि रूपांतरण',
            'feature_lightning_fast_title': 'बिजली की तरह तेज़', 'feature_lightning_fast_desc': 'हमारे अनुकूलित रूपांतरण इंजन के साथ सेकंडों में PNG छवियों को JPG में बदलें',
            'feature_100_secure_title': '100% सुरक्षित', 'feature_100_secure_desc': 'आपकी फ़ाइलें स्थानीय रूप से संसाधित होती हैं और प्रसंस्करण के बाद स्वचालित रूप से हटा दी जाती हैं',
            'feature_quality_control_title': 'गुणवत्ता नियंत्रण', 'feature_quality_control_desc': 'फ़ाइल आकार और छवि गुणवत्ता को संतुलित करने के लिए अनुकूलन योग्य गुणवत्ता सेटिंग्स',
            'feature_no_software_title': 'सॉफ़्टवेयर की आवश्यकता नहीं', 'feature_no_software_desc': 'सीधे आपके ब्राउज़र में काम करता है - कोई डाउनलोड या स्थापना आवश्यक नहीं',
            'how_it_works_title': 'PNG को JPG में कैसे बदलें', 'how_it_works_subtitle': 'अपनी छवियों को बदलने के लिए सरल 3-चरण प्रक्रिया',
            'step_1_title': 'PNG अपलोड करें', 'step_1_desc': 'शुरू करने के लिए अपनी PNG फ़ाइलों का चयन करें या ड्रैग और ड्रॉप करें',
            'step_2_title': 'कनवर्ट करें', 'step_2_desc': 'हमारा उपकरण स्वचालित रूप से आपकी PNG छवियों को JPG प्रारूप में बदल देता है',
            'step_3_title': 'डाउनलोड करें', 'step_3_desc': 'अपनी परिवर्तित JPG फ़ाइलों को तुरंत डाउनलोड करें',
            'language': 'भाषा', 'footer_description': 'अगली पीढ़ी का दस्तावेज़ प्रसंस्करण मंच। तेज़, सुरक्षित और हमेशा मुफ़्त।',
            'footer_tools_title': 'उपकरण', 'footer_pdf_compressor': 'PDF संपीड़ित करें', 'footer_pdf_merger': 'PDF मर्ज करें', 'footer_support_title': 'समर्थन',
            'footer_faq': 'FAQ', 'footer_how_it_works': 'यह कैसे काम करता है', 'footer_contact': 'संपर्क करें', 'footer_terms': 'नियम और शर्तें', 'footer_privacy': 'गोपनीयता नीति',
            'footer_copyright': '© 2025 PDFrow. सर्वाधिकार सुरक्षित। दस्तावेज़ प्रसंस्करण के लिए ❤️ के साथ बनाया गया।',
            'support_title': 'PDFrow का समर्थन करें ❤️', 'support_subtitle': 'PDFrow को मुफ़्त रखने और हमारी सेवाओं को बेहतर बनाने में हमारी मदद करें',
            'support_message': 'PDFrow पूरी तरह से मुफ़्त है और हमेशा ऐसा ही रहेगा। आपका समर्थन हमें मदद करता है:',
            'support_point_1': 'सर्वरों को चालू और तेज़ रखें', 'support_point_2': 'नियमित रूप से नई सुविधाएँ जोड़ें',
            'support_point_3': 'उच्च सुरक्षा मानकों को बनाए रखें', 'support_point_4': 'उत्कृष्ट उपयोगकर्ता अनुभव प्रदान करें',
            'support_share_title': 'PDFrow साझा करें', 'support_share_desc': 'अपने दोस्तों को PDFrow के बारे में बताएं', 'share_twitter': 'Twitter', 'share_facebook': 'Facebook',
            'support_donation_title': 'दान करें', 'support_donation_desc': 'योगदान के साथ हमारे मिशन का समर्थन करें', 'donate_paypal': 'PayPal',
            'support_thanks': 'सभी के लिए PDFrow को मुफ़्त रखने में हमारी मदद करने के लिए धन्यवाद! ❤️',
            'login_title': 'वापस स्वागत है', 'login_subtitle': 'अपने PDFrow खाते तक पहुंचने के लिए साइन इन करें', 'label_email': 'ईमेल',
            'label_password': 'पासवर्ड', 'btn_sign_in': 'साइन इन करें', 'auth_or': 'या', 'btn_continue_google': 'Google के साथ जारी रखें',
            'link_forgot_password': 'पासवर्ड भूल गए?', 'auth_no_account': 'खाता नहीं है?', 'link_sign_up': 'साइन अप करें',
            'signup_title': 'खाता बनाएं', 'signup_subtitle': 'PDFrow में शामिल हों और प्रीमियम सुविधाओं को अनलॉक करें', 'label_name': 'पूरा नाम',
            'btn_create_account': 'खाता बनाएं', 'checkbox_agree_terms': 'मैं <a href="terms-conditions.html" target="_blank">सेवा की शर्तों</a> और <a href="privacy-policy.html" target="_blank">गोपनीयता नीति</a> से सहमत हूं',
            'auth_have_account': 'पहले से खाता है?', 'link_sign_in': 'साइन इन करें',
            'contact_title': 'हमसे संपर्क करें', 'contact_subtitle': 'हम आपसे सुनना पसंद करेंगे', 'label_subject': 'विषय', 'label_message': 'संदेश',
            'btn_send_message': 'संदेश भेजें', 'contact_success': 'धन्यवाद! आपका संदेश सफलतापूर्वक भेजा गया है।',
            'contact_error': 'क्षमा करें, आपका संदेश भेजने में त्रुटि हुई। कृपया पुनः प्रयास करें।'
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
                // Preserve HTML formatting for elements with <a> tags or <strong> tags
                if (translations[key].includes('<a') || translations[key].includes('<strong>')) {
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
