// Translation system for protect-pdf.html
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

            // Password Settings
            'password_settings_title': 'Password Settings',
            'label_password': 'Enter Password:',
            'password_placeholder': 'Enter a strong password',
            'label_confirm_password': 'Confirm Password:',
            'confirm_password_placeholder': 'Re-enter password',
            'password_strength': 'Password Strength:',
            'strength_weak': 'Weak',
            'strength_medium': 'Medium',
            'strength_strong': 'Strong',
            'password_hint': 'Use at least 8 characters with letters, numbers and symbols',

            // Buttons
            'protect_pdf_btn': 'Protect PDF',
            'hint_upload_file_first': 'Upload a PDF file above to enable protection',
            'download_protected_pdf': 'Download Protected PDF',
            'protect_another': 'Protect Another PDF',

            // Success State
            'success_title': 'PDF protected successfully!',
            'success_description': 'Your password-protected PDF is ready for download',
            'continue_title': 'Continue editing your PDF:',

            // Continue Tools
            'tool_merge': 'Merge PDF',
            'tool_split': 'Split PDF',
            'tool_compress': 'Compress',
            'tool_sign': 'Sign PDF',
            'tool_rotate': 'Rotate PDF',
            'tool_unlock': 'Unlock PDF',

            // Why Choose Section
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

            // How It Works Section
            'how_to_title': 'How to Protect PDF Files',
            'how_to_subtitle': 'Simple steps to add password protection',
            'step1_title': 'Upload PDF',
            'step1_desc': 'Select your PDF file or drag and drop it into the upload area.',
            'step2_title': 'Set Password',
            'step2_desc': 'Enter a strong password to protect your PDF document.',
            'step3_title': 'Protect & Download',
            'step3_desc': 'Click protect and download your password-protected PDF file.',

            // FAQ Section
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
            'supported_services': 'Servicios compatibles:', 'service_dropbox': 'Dropbox: Comparta el enlace y péguelo aquí', 'service_gdrive': 'Google Drive: Obtenga un enlace compartible (Cualquiera con el enlace puede ver)',
            'service_direct': 'URLs directas de PDF', 'max_file_size': 'Tamaño máximo de archivo: 50MB',
            'upload_text': 'Haga clic para seleccionar o arrastre y suelte sus archivos PDF', 'upload_pdf_subtext': 'Archivos PDF • Hasta 50MB por archivo',
            'password_settings_title': 'Configuración de Contraseña', 'label_password': 'Ingrese Contraseña:', 'password_placeholder': 'Ingrese una contraseña segura',
            'label_confirm_password': 'Confirmar Contraseña:', 'confirm_password_placeholder': 'Vuelva a ingresar la contraseña', 'password_strength': 'Fortaleza de Contraseña:',
            'strength_weak': 'Débil', 'strength_medium': 'Media', 'strength_strong': 'Fuerte', 'password_hint': 'Use al menos 8 caracteres con letras, números y símbolos',
            'protect_pdf_btn': 'Proteger PDF', 'hint_upload_file_first': 'Suba un archivo PDF arriba para habilitar la protección',
            'download_protected_pdf': 'Descargar PDF Protegido', 'protect_another': 'Proteger Otro PDF',
            'success_title': '¡PDF protegido con éxito!', 'success_description': 'Su PDF protegido por contraseña está listo para descargar', 'continue_title': 'Continuar editando su PDF:',
            'tool_merge': 'Combinar PDF', 'tool_split': 'Dividir PDF', 'tool_compress': 'Comprimir', 'tool_sign': 'Firmar PDF', 'tool_rotate': 'Rotar PDF', 'tool_unlock': 'Desbloquear PDF',
            'why_choose_title': 'Por qué usar nuestro protector de PDF', 'why_choose_subtitle': 'Potentes funciones para proteger sus documentos PDF',
            'feature_password_title': 'Protección por Contraseña Fuerte', 'feature_password_desc': 'Agregue cifrado de contraseña seguro a sus archivos PDF para evitar el acceso no autorizado.',
            'feature_fast_title': 'Procesamiento Rápido', 'feature_fast_desc': 'Proteja sus archivos PDF rápidamente con nuestro motor de procesamiento optimizado. Sin largos tiempos de espera.',
            'feature_security_title': 'Seguridad Completa', 'feature_security_desc': 'Sus documentos permanecen seguros durante todo el proceso. Los archivos están cifrados y protegidos.',
            'feature_privacy_title': 'Privacidad Garantizada', 'feature_privacy_desc': 'Sus archivos se procesan de forma segura. Nunca almacenamos ni accedemos a sus documentos.',
            'how_to_title': 'Cómo Proteger Archivos PDF', 'how_to_subtitle': 'Pasos simples para agregar protección por contraseña',
            'step1_title': 'Subir PDF', 'step1_desc': 'Seleccione su archivo PDF o arrástrelo y suéltelo en el área de carga.',
            'step2_title': 'Establecer Contraseña', 'step2_desc': 'Ingrese una contraseña segura para proteger su documento PDF.',
            'step3_title': 'Proteger y Descargar', 'step3_desc': 'Haga clic en proteger y descargue su archivo PDF protegido por contraseña.',
            'faq_title': 'Preguntas Frecuentes', 'faq_subtitle': 'Todo lo que necesita saber sobre la protección de archivos PDF',
            'faq1_question': '¿Qué tan segura es la protección por contraseña?', 'faq1_answer': 'Utilizamos métodos de cifrado estándar de la industria para proteger sus PDF. La protección por contraseña es segura y solo alguien con la contraseña correcta puede abrir el archivo.',
            'faq2_question': '¿Puedo proteger varios PDF a la vez?', 'faq2_answer': 'Actualmente, puede proteger un archivo PDF a la vez para una seguridad y control óptimos.',
            'faq3_question': '¿Qué sucede con mis archivos después de la protección?', 'faq3_answer': 'Sus archivos se procesan localmente en su navegador y nunca se cargan en nuestros servidores. Una vez protegido, su archivo original permanece sin cambios.',
            'faq4_question': '¿Puedo eliminar la protección por contraseña más tarde?', 'faq4_answer': 'Sí, si conoce la contraseña, puede usar nuestra herramienta Desbloquear PDF para eliminar la protección por contraseña.',
            'language': 'Idioma', 'footer_description': 'Su solución PDF todo en uno. Edite, convierta, combine y administre PDFs en línea gratis.',
            'footer_tools_title': 'Herramientas', 'footer_pdf_compressor': 'Comprimir PDF', 'footer_pdf_merger': 'Combinar PDF',
            'footer_support_title': 'Soporte', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Cómo Funciona', 'footer_contact': 'Contacto', 'footer_terms': 'Términos y Condiciones', 'footer_privacy': 'Política de Privacidad',
            'footer_copyright': '© 2025 PDFrow. Todos los derechos reservados. Hecho con ❤️ para procesamiento de documentos.'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalités', 'nav_how_it_works': 'Comment Ça Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Déconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_current': 'Protéger PDF', 'page_title': 'Protéger PDF en Ligne',
            'page_description': 'Sécurisez vos documents PDF avec une protection par mot de passe. Ajoutez un cryptage pour garder vos fichiers sûrs et privés.',
            'feature_strong_encryption': 'Cryptage Fort', 'feature_secure_processing': 'Traitement Sécurisé', 'feature_fast_protection': 'Protection Rapide', 'feature_privacy_protected': 'Confidentialité Protégée',
            'security_badge': '100% Sécurisé - Fichiers traités en toute sécurité',
            'section_title': 'Outil de Protection PDF', 'section_subtitle': 'Ajoutez une protection par mot de passe à vos documents PDF',
            'privacy_badge': '100% sécurisé. Fichiers traités en toute sécurité.', 'upload_from_computer': 'Télécharger depuis l\'Ordinateur', 'import_from_url': 'Importer depuis URL',
            'url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...', 'import_file_btn': 'Importer le Fichier', 'download_status': 'Téléchargement...',
            'supported_services': 'Services pris en charge:', 'service_dropbox': 'Dropbox: Partagez le lien et collez-le ici', 'service_gdrive': 'Google Drive: Obtenez un lien partageable (Toute personne disposant du lien peut voir)',
            'service_direct': 'URLs PDF directes', 'max_file_size': 'Taille maximale du fichier: 50MB',
            'upload_text': 'Cliquez pour sélectionner ou glissez-déposez vos fichiers PDF', 'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 50MB par fichier',
            'password_settings_title': 'Paramètres de Mot de Passe', 'label_password': 'Entrez le Mot de Passe:', 'password_placeholder': 'Entrez un mot de passe fort',
            'label_confirm_password': 'Confirmer le Mot de Passe:', 'confirm_password_placeholder': 'Ressaisissez le mot de passe', 'password_strength': 'Force du Mot de Passe:',
            'strength_weak': 'Faible', 'strength_medium': 'Moyen', 'strength_strong': 'Fort', 'password_hint': 'Utilisez au moins 8 caractères avec des lettres, chiffres et symboles',
            'protect_pdf_btn': 'Protéger PDF', 'hint_upload_file_first': 'Téléchargez un fichier PDF ci-dessus pour activer la protection',
            'download_protected_pdf': 'Télécharger PDF Protégé', 'protect_another': 'Protéger un Autre PDF',
            'success_title': 'PDF protégé avec succès!', 'success_description': 'Votre PDF protégé par mot de passe est prêt au téléchargement', 'continue_title': 'Continuer à modifier votre PDF:',
            'tool_merge': 'Fusionner PDF', 'tool_split': 'Diviser PDF', 'tool_compress': 'Compresser', 'tool_sign': 'Signer PDF', 'tool_rotate': 'Pivoter PDF', 'tool_unlock': 'Déverrouiller PDF',
            'why_choose_title': 'Pourquoi utiliser notre protecteur PDF', 'why_choose_subtitle': 'Fonctionnalités puissantes pour sécuriser vos documents PDF',
            'feature_password_title': 'Protection par Mot de Passe Forte', 'feature_password_desc': 'Ajoutez un cryptage par mot de passe sécurisé à vos fichiers PDF pour empêcher l\'accès non autorisé.',
            'feature_fast_title': 'Traitement Rapide', 'feature_fast_desc': 'Protégez vos fichiers PDF rapidement avec notre moteur de traitement optimisé. Pas de longs temps d\'attente.',
            'feature_security_title': 'Sécurité Complète', 'feature_security_desc': 'Vos documents restent sécurisés tout au long du processus. Les fichiers sont cryptés et protégés.',
            'feature_privacy_title': 'Confidentialité Garantie', 'feature_privacy_desc': 'Vos fichiers sont traités en toute sécurité. Nous ne stockons ni n\'accédons jamais à vos documents.',
            'how_to_title': 'Comment Protéger les Fichiers PDF', 'how_to_subtitle': 'Étapes simples pour ajouter une protection par mot de passe',
            'step1_title': 'Télécharger PDF', 'step1_desc': 'Sélectionnez votre fichier PDF ou glissez-déposez-le dans la zone de téléchargement.',
            'step2_title': 'Définir le Mot de Passe', 'step2_desc': 'Entrez un mot de passe fort pour protéger votre document PDF.',
            'step3_title': 'Protéger et Télécharger', 'step3_desc': 'Cliquez sur protéger et téléchargez votre fichier PDF protégé par mot de passe.',
            'faq_title': 'Questions Fréquentes', 'faq_subtitle': 'Tout ce que vous devez savoir sur la protection des fichiers PDF',
            'faq1_question': 'Quelle est la sécurité de la protection par mot de passe?', 'faq1_answer': 'Nous utilisons des méthodes de cryptage standard de l\'industrie pour protéger vos PDF. La protection par mot de passe est sécurisée et seule une personne avec le mot de passe correct peut ouvrir le fichier.',
            'faq2_question': 'Puis-je protéger plusieurs PDF à la fois?', 'faq2_answer': 'Actuellement, vous pouvez protéger un fichier PDF à la fois pour une sécurité et un contrôle optimaux.',
            'faq3_question': 'Qu\'advient-il de mes fichiers après la protection?', 'faq3_answer': 'Vos fichiers sont traités localement dans votre navigateur et ne sont jamais téléchargés sur nos serveurs. Une fois protégé, votre fichier original reste inchangé.',
            'faq4_question': 'Puis-je supprimer la protection par mot de passe plus tard?', 'faq4_answer': 'Oui, si vous connaissez le mot de passe, vous pouvez utiliser notre outil Déverrouiller PDF pour supprimer la protection par mot de passe.',
            'language': 'Langue', 'footer_description': 'Votre solution PDF tout-en-un. Modifiez, convertissez, fusionnez et gérez des PDFs en ligne gratuitement.',
            'footer_tools_title': 'Outils', 'footer_pdf_compressor': 'Compresser PDF', 'footer_pdf_merger': 'Fusionner PDF',
            'footer_support_title': 'Support', 'footer_faq': 'FAQ', 'footer_how_it_works': 'Comment Ça Marche', 'footer_contact': 'Contact', 'footer_terms': 'Conditions Générales', 'footer_privacy': 'Politique de Confidentialité',
            'footer_copyright': '© 2025 PDFrow. Tous droits réservés. Fait avec ❤️ pour le traitement de documents.'
        }
        // Note: Other languages (de, it, tr, pt, ru, zh, ja, ar, hi) will fall back to English
        // Add full translations above by copying the structure from 'en', 'es', or 'fr'
    };

    // Return the requested language, or fall back to English if not available
    return allTranslations[langCode] || allTranslations['en'];
}

function loadLanguage(langCode) {
    const translations = getTranslations(langCode);
    console.log('Loading language:', langCode);
    console.log('Translations object:', translations);

    // Update all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    console.log('Found elements with data-translate:', elements.length);

    elements.forEach(element => {
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
        } else {
            console.log('Missing translation for key:', key);
        }
    });

    // Save language preference
    localStorage.setItem('preferredLanguage', langCode);
    console.log('Language preference saved:', langCode);
}

// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.querySelector('.language-dropdown');
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
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('open');
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
            if (languageDropdown) {
                languageDropdown.classList.remove('open');
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function() {
        if (languageDropdown) {
            languageDropdown.classList.remove('open');
        }
    });
});
