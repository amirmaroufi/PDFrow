// Translation system for PDF Unlocker page
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
            'page_title': 'PDF Unlocker',
            'page_description': 'Remove password protection from PDF files and regain access to your documents. Fast, secure, and completely free.',

            // Features
            'feature_password_removal': 'Password Removal',
            'feature_secure_processing': 'Secure Processing',
            'feature_fast_unlocking': 'Fast Unlocking',
            'feature_full_access': 'Full Access',
            'security_badge': '100% Secure - Files processed locally',

            // Tool Section
            'tool_section_title': 'PDF Unlock Tool',
            'tool_section_subtitle': 'Remove password protection from your PDF documents',
            'privacy_badge': '100% client‑side. Files never leave your device.',
            'upload_from_computer': 'Upload from Computer',
            'import_from_url': 'Import from URL',

            // URL Import
            'url_placeholder': 'Paste Dropbox or Google Drive link here...',
            'import_file_btn': 'Import File',
            'download_status': 'Downloading...',
            'url_hints_title': 'Supported Services:',
            'url_hint_1': 'Dropbox: Share link and paste here',
            'url_hint_2': 'Google Drive: Get shareable link (Anyone with the link can view)',
            'url_hint_3': 'Direct file URLs (supported format only)',
            'url_hint_4': 'Maximum file size: 50MB',

            // Upload Area
            'upload_text': 'Click to select or drag and drop your PDF files',
            'upload_pdf_subtext': 'PDF files • Up to 10 files • Max 50MB total batch size',

            // Password Section
            'password_section_title': 'Enter PDF Password',
            'password_section_description': 'Please enter the password to unlock this PDF document.',
            'password_label': 'PDF Password',
            'password_placeholder': 'Enter the PDF password',
            'password_hint': 'You need the original password to unlock the PDF.',
            'unlock_btn': 'Unlock PDF',

            // Processing
            'processing_message': 'Removing password protection...',

            // Download Section
            'download_success_title': 'PDF Successfully Unlocked!',
            'download_success_description': 'Your PDF password has been removed. You can now download the unlocked file.',
            'download_btn': 'Download Unlocked PDF',
            'process_another_btn': 'Unlock Another PDF',
            'continue_to': 'Continue to...',
            'continue_description': 'Your unlocked PDF is ready! Continue editing with another tool:',

            // Why Choose Section
            'why_choose_title': 'Why Use Our PDF Unlocker',
            'why_choose_subtitle': 'Powerful features to unlock your PDF documents',
            'feature1_title': 'Secure Password Removal',
            'feature1_description': 'Remove password protection from PDF files while maintaining document security and integrity.',
            'feature2_title': 'Fast Processing',
            'feature2_description': 'Unlock PDF files quickly with our optimized processing engine. No long waiting times.',
            'feature3_title': 'Full Document Access',
            'feature3_description': 'Regain complete access to your PDF documents including text, images, and formatting.',
            'feature4_title': 'Privacy Guaranteed',
            'feature4_description': 'Your files are processed securely on your device. We never store or access your documents.',

            // How It Works
            'how_it_works_title': 'How to Unlock PDF Files',
            'how_it_works_subtitle': 'Simple steps to remove password protection',
            'step1_title': 'Upload PDF',
            'step1_description': 'Select your password-protected PDF file or drag and drop it into the upload area.',
            'step2_title': 'Enter Password',
            'step2_description': 'Provide the current password for the PDF file to authorize the unlocking process.',
            'step3_title': 'Unlock & Download',
            'step3_description': 'Click unlock and download your PDF file without password protection.',

            // FAQ
            'faq_title': 'Frequently Asked Questions',
            'faq_subtitle': 'Everything you need to know about unlocking PDF files',
            'faq1_question': 'Is it legal to unlock PDF files?',
            'faq1_answer': 'Yes, it is legal to unlock PDF files that you own or have permission to modify. Our tool is designed to help users regain access to their own documents when they\'ve forgotten passwords or need to remove restrictions for legitimate purposes.',
            'faq2_question': 'What types of PDF passwords can be removed?',
            'faq2_answer': 'Our tool can remove both user passwords (which restrict opening the file) and owner passwords (which restrict printing, editing, or copying content). You need to know the original password to unlock the file.',
            'faq3_question': 'Are my files secure during the unlocking process?',
            'faq3_answer': 'Absolutely. All processing happens locally in your browser. Your files never leave your device and are not uploaded to any server. We take privacy and security very seriously.',
            'faq4_question': 'What if I don\'t know the PDF password?',
            'faq4_answer': 'Our tool requires the original password to unlock the PDF. If you\'ve forgotten the password, you may need to contact the document owner or use specialized password recovery tools (which we don\'t provide).',
            'faq5_question': 'Is there a file size limit for unlocking PDFs?',
            'faq5_answer': 'Yes, the maximum file size for unlocking is 50MB per file. This ensures optimal performance and processing speed for all users.',

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
            'page_title': 'Desbloquear PDF',
            'page_description': 'Elimine la protección con contraseña de archivos PDF y recupere el acceso a sus documentos. Rápido, seguro y completamente gratis.',

            // Features
            'feature_password_removal': 'Eliminación de Contraseña',
            'feature_secure_processing': 'Procesamiento Seguro',
            'feature_fast_unlocking': 'Desbloqueo Rápido',
            'feature_full_access': 'Acceso Completo',
            'security_badge': '100% Seguro - Archivos procesados localmente',

            // Tool Section
            'tool_section_title': 'Herramienta para Desbloquear PDF',
            'tool_section_subtitle': 'Elimine la protección con contraseña de sus documentos PDF',
            'privacy_badge': '100% del lado del cliente. Los archivos nunca salen de su dispositivo.',
            'upload_from_computer': 'Subir desde Computadora',
            'import_from_url': 'Importar desde URL',

            // URL Import
            'url_placeholder': 'Pegue el enlace de Dropbox o Google Drive aquí...',
            'import_file_btn': 'Importar Archivo',
            'download_status': 'Descargando...',
            'url_hints_title': 'Servicios Compatibles:',
            'url_hint_1': 'Dropbox: Comparta el enlace y péguelo aquí',
            'url_hint_2': 'Google Drive: Obtenga un enlace compartible (Cualquiera con el enlace puede ver)',
            'url_hint_3': 'URL de archivos directos (solo formato compatible)',
            'url_hint_4': 'Tamaño máximo de archivo: 50MB',

            // Upload Area
            'upload_text': 'Haga clic para seleccionar o arrastre y suelte sus archivos PDF',
            'upload_pdf_subtext': 'Archivos PDF • Hasta 10 archivos • Tamaño total máximo de lote 50MB',

            // Password Section
            'password_section_title': 'Ingrese la Contraseña del PDF',
            'password_section_description': 'Por favor ingrese la contraseña para desbloquear este documento PDF.',
            'password_label': 'Contraseña del PDF',
            'password_placeholder': 'Ingrese la contraseña del PDF',
            'password_hint': 'Necesita la contraseña original para desbloquear el PDF.',
            'unlock_btn': 'Desbloquear PDF',

            // Processing
            'processing_message': 'Eliminando protección con contraseña...',

            // Download Section
            'download_success_title': '¡PDF Desbloqueado con Éxito!',
            'download_success_description': 'Se ha eliminado la contraseña de su PDF. Ahora puede descargar el archivo desbloqueado.',
            'download_btn': 'Descargar PDF Desbloqueado',
            'process_another_btn': 'Desbloquear Otro PDF',
            'continue_to': 'Continuar a...',
            'continue_description': '¡Su PDF desbloqueado está listo! Continúe editando con otra herramienta:',

            // Why Choose Section
            'why_choose_title': 'Por Qué Usar Nuestro Desbloqueador de PDF',
            'why_choose_subtitle': 'Características potentes para desbloquear sus documentos PDF',
            'feature1_title': 'Eliminación Segura de Contraseña',
            'feature1_description': 'Elimine la protección con contraseña de archivos PDF mientras mantiene la seguridad e integridad del documento.',
            'feature2_title': 'Procesamiento Rápido',
            'feature2_description': 'Desbloquee archivos PDF rápidamente con nuestro motor de procesamiento optimizado. Sin largos tiempos de espera.',
            'feature3_title': 'Acceso Completo al Documento',
            'feature3_description': 'Recupere el acceso completo a sus documentos PDF, incluyendo texto, imágenes y formato.',
            'feature4_title': 'Privacidad Garantizada',
            'feature4_description': 'Sus archivos se procesan de forma segura en su dispositivo. Nunca almacenamos ni accedemos a sus documentos.',

            // How It Works
            'how_it_works_title': 'Cómo Desbloquear Archivos PDF',
            'how_it_works_subtitle': 'Pasos simples para eliminar la protección con contraseña',
            'step1_title': 'Subir PDF',
            'step1_description': 'Seleccione su archivo PDF protegido con contraseña o arrástrelo y suéltelo en el área de carga.',
            'step2_title': 'Ingresar Contraseña',
            'step2_description': 'Proporcione la contraseña actual del archivo PDF para autorizar el proceso de desbloqueo.',
            'step3_title': 'Desbloquear y Descargar',
            'step3_description': 'Haga clic en desbloquear y descargue su archivo PDF sin protección con contraseña.',

            // FAQ
            'faq_title': 'Preguntas Frecuentes',
            'faq_subtitle': 'Todo lo que necesita saber sobre el desbloqueo de archivos PDF',
            'faq1_question': '¿Es legal desbloquear archivos PDF?',
            'faq1_answer': 'Sí, es legal desbloquear archivos PDF que posee o tiene permiso para modificar. Nuestra herramienta está diseñada para ayudar a los usuarios a recuperar el acceso a sus propios documentos cuando han olvidado las contraseñas o necesitan eliminar restricciones para fines legítimos.',
            'faq2_question': '¿Qué tipos de contraseñas de PDF se pueden eliminar?',
            'faq2_answer': 'Nuestra herramienta puede eliminar tanto las contraseñas de usuario (que restringen la apertura del archivo) como las contraseñas de propietario (que restringen la impresión, edición o copia de contenido). Necesita conocer la contraseña original para desbloquear el archivo.',
            'faq3_question': '¿Mis archivos están seguros durante el proceso de desbloqueo?',
            'faq3_answer': 'Absolutamente. Todo el procesamiento ocurre localmente en su navegador. Sus archivos nunca salen de su dispositivo y no se cargan en ningún servidor. Nos tomamos muy en serio la privacidad y la seguridad.',
            'faq4_question': '¿Qué pasa si no conozco la contraseña del PDF?',
            'faq4_answer': 'Nuestra herramienta requiere la contraseña original para desbloquear el PDF. Si ha olvidado la contraseña, es posible que deba comunicarse con el propietario del documento o usar herramientas especializadas de recuperación de contraseñas (que no proporcionamos).',
            'faq5_question': '¿Hay un límite de tamaño de archivo para desbloquear PDF?',
            'faq5_answer': 'Sí, el tamaño máximo de archivo para desbloquear es de 50 MB por archivo. Esto garantiza un rendimiento óptimo y una velocidad de procesamiento para todos los usuarios.',

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
            'page_title': 'Déverrouiller PDF',
            'page_description': 'Supprimez la protection par mot de passe des fichiers PDF et récupérez l\'accès à vos documents. Rapide, sécurisé et entièrement gratuit.',

            // Features
            'feature_password_removal': 'Suppression du Mot de Passe',
            'feature_secure_processing': 'Traitement Sécurisé',
            'feature_fast_unlocking': 'Déverrouillage Rapide',
            'feature_full_access': 'Accès Complet',
            'security_badge': '100% Sécurisé - Fichiers traités localement',

            // Tool Section
            'tool_section_title': 'Outil de Déverrouillage PDF',
            'tool_section_subtitle': 'Supprimez la protection par mot de passe de vos documents PDF',
            'privacy_badge': '100% côté client. Les fichiers ne quittent jamais votre appareil.',
            'upload_from_computer': 'Télécharger depuis l\'Ordinateur',
            'import_from_url': 'Importer depuis l\'URL',

            // URL Import
            'url_placeholder': 'Collez le lien Dropbox ou Google Drive ici...',
            'import_file_btn': 'Importer le Fichier',
            'download_status': 'Téléchargement...',
            'url_hints_title': 'Services Pris en Charge:',
            'url_hint_1': 'Dropbox: Partagez le lien et collez-le ici',
            'url_hint_2': 'Google Drive: Obtenez un lien partageable (Toute personne disposant du lien peut voir)',
            'url_hint_3': 'URL de fichiers directs (format pris en charge uniquement)',
            'url_hint_4': 'Taille maximale du fichier: 50 Mo',

            // Upload Area
            'upload_text': 'Cliquez pour sélectionner ou faites glisser et déposez vos fichiers PDF',
            'upload_pdf_subtext': 'Fichiers PDF • Jusqu\'à 10 fichiers • Taille totale de lot maximale 50 Mo',

            // Password Section
            'password_section_title': 'Entrez le Mot de Passe PDF',
            'password_section_description': 'Veuillez entrer le mot de passe pour déverrouiller ce document PDF.',
            'password_label': 'Mot de Passe PDF',
            'password_placeholder': 'Entrez le mot de passe PDF',
            'password_hint': 'Vous avez besoin du mot de passe original pour déverrouiller le PDF.',
            'unlock_btn': 'Déverrouiller PDF',

            // Processing
            'processing_message': 'Suppression de la protection par mot de passe...',

            // Download Section
            'download_success_title': 'PDF Déverrouillé avec Succès!',
            'download_success_description': 'Le mot de passe de votre PDF a été supprimé. Vous pouvez maintenant télécharger le fichier déverrouillé.',
            'download_btn': 'Télécharger le PDF Déverrouillé',
            'process_another_btn': 'Déverrouiller un Autre PDF',
            'continue_to': 'Continuer vers...',
            'continue_description': 'Votre PDF déverrouillé est prêt! Continuez l\'édition avec un autre outil:',

            // Why Choose Section
            'why_choose_title': 'Pourquoi Utiliser Notre Déverrouilleur PDF',
            'why_choose_subtitle': 'Fonctionnalités puissantes pour déverrouiller vos documents PDF',
            'feature1_title': 'Suppression Sécurisée du Mot de Passe',
            'feature1_description': 'Supprimez la protection par mot de passe des fichiers PDF tout en maintenant la sécurité et l\'intégrité du document.',
            'feature2_title': 'Traitement Rapide',
            'feature2_description': 'Déverrouillez les fichiers PDF rapidement avec notre moteur de traitement optimisé. Pas de longs temps d\'attente.',
            'feature3_title': 'Accès Complet au Document',
            'feature3_description': 'Récupérez l\'accès complet à vos documents PDF, y compris le texte, les images et le formatage.',
            'feature4_title': 'Confidentialité Garantie',
            'feature4_description': 'Vos fichiers sont traités en toute sécurité sur votre appareil. Nous ne stockons ni n\'accédons jamais à vos documents.',

            // How It Works
            'how_it_works_title': 'Comment Déverrouiller des Fichiers PDF',
            'how_it_works_subtitle': 'Étapes simples pour supprimer la protection par mot de passe',
            'step1_title': 'Télécharger le PDF',
            'step1_description': 'Sélectionnez votre fichier PDF protégé par mot de passe ou faites-le glisser et déposez-le dans la zone de téléchargement.',
            'step2_title': 'Entrer le Mot de Passe',
            'step2_description': 'Fournissez le mot de passe actuel du fichier PDF pour autoriser le processus de déverrouillage.',
            'step3_title': 'Déverrouiller et Télécharger',
            'step3_description': 'Cliquez sur déverrouiller et téléchargez votre fichier PDF sans protection par mot de passe.',

            // FAQ
            'faq_title': 'Foire Aux Questions',
            'faq_subtitle': 'Tout ce que vous devez savoir sur le déverrouillage des fichiers PDF',
            'faq1_question': 'Est-il légal de déverrouiller des fichiers PDF?',
            'faq1_answer': 'Oui, il est légal de déverrouiller des fichiers PDF que vous possédez ou que vous avez la permission de modifier. Notre outil est conçu pour aider les utilisateurs à récupérer l\'accès à leurs propres documents lorsqu\'ils ont oublié les mots de passe ou doivent supprimer des restrictions à des fins légitimes.',
            'faq2_question': 'Quels types de mots de passe PDF peuvent être supprimés?',
            'faq2_answer': 'Notre outil peut supprimer à la fois les mots de passe utilisateur (qui restreignent l\'ouverture du fichier) et les mots de passe propriétaire (qui restreignent l\'impression, l\'édition ou la copie de contenu). Vous devez connaître le mot de passe original pour déverrouiller le fichier.',
            'faq3_question': 'Mes fichiers sont-ils sécurisés pendant le processus de déverrouillage?',
            'faq3_answer': 'Absolument. Tout le traitement se fait localement dans votre navigateur. Vos fichiers ne quittent jamais votre appareil et ne sont téléchargés sur aucun serveur. Nous prenons la confidentialité et la sécurité très au sérieux.',
            'faq4_question': 'Que faire si je ne connais pas le mot de passe du PDF?',
            'faq4_answer': 'Notre outil nécessite le mot de passe original pour déverrouiller le PDF. Si vous avez oublié le mot de passe, vous devrez peut-être contacter le propriétaire du document ou utiliser des outils spécialisés de récupération de mot de passe (que nous ne fournissons pas).',
            'faq5_question': 'Y a-t-il une limite de taille de fichier pour déverrouiller les PDF?',
            'faq5_answer': 'Oui, la taille maximale du fichier pour le déverrouillage est de 50 Mo par fichier. Cela garantit des performances optimales et une vitesse de traitement pour tous les utilisateurs.',

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
            'page_title': 'PDF Entsperren',
            'page_description': 'Entfernen Sie den Passwortschutz von PDF-Dateien und erhalten Sie wieder Zugriff auf Ihre Dokumente. Schnell, sicher und völlig kostenlos.',

            // Features
            'feature_password_removal': 'Passwortentfernung',
            'feature_secure_processing': 'Sichere Verarbeitung',
            'feature_fast_unlocking': 'Schnelles Entsperren',
            'feature_full_access': 'Vollständiger Zugriff',
            'security_badge': '100% Sicher - Dateien werden lokal verarbeitet',

            // Tool Section
            'tool_section_title': 'PDF-Entsperrungswerkzeug',
            'tool_section_subtitle': 'Entfernen Sie den Passwortschutz von Ihren PDF-Dokumenten',
            'privacy_badge': '100% clientseitig. Dateien verlassen niemals Ihr Gerät.',
            'upload_from_computer': 'Vom Computer Hochladen',
            'import_from_url': 'Von URL Importieren',

            // URL Import
            'url_placeholder': 'Dropbox- oder Google Drive-Link hier einfügen...',
            'import_file_btn': 'Datei Importieren',
            'download_status': 'Wird heruntergeladen...',
            'url_hints_title': 'Unterstützte Dienste:',
            'url_hint_1': 'Dropbox: Link teilen und hier einfügen',
            'url_hint_2': 'Google Drive: Freigabelink abrufen (Jeder mit dem Link kann ansehen)',
            'url_hint_3': 'Direkte Datei-URLs (nur unterstütztes Format)',
            'url_hint_4': 'Maximale Dateigröße: 50 MB',

            // Upload Area
            'upload_text': 'Klicken Sie zum Auswählen oder ziehen Sie Ihre PDF-Dateien per Drag & Drop',
            'upload_pdf_subtext': 'PDF-Dateien • Bis zu 10 Dateien • Max. 50 MB Gesamtstapelgröße',

            // Password Section
            'password_section_title': 'PDF-Passwort Eingeben',
            'password_section_description': 'Bitte geben Sie das Passwort ein, um dieses PDF-Dokument zu entsperren.',
            'password_label': 'PDF-Passwort',
            'password_placeholder': 'PDF-Passwort eingeben',
            'password_hint': 'Sie benötigen das ursprüngliche Passwort, um das PDF zu entsperren.',
            'unlock_btn': 'PDF Entsperren',

            // Processing
            'processing_message': 'Passwortschutz wird entfernt...',

            // Download Section
            'download_success_title': 'PDF Erfolgreich Entsperrt!',
            'download_success_description': 'Ihr PDF-Passwort wurde entfernt. Sie können jetzt die entsperrte Datei herunterladen.',
            'download_btn': 'Entsperrtes PDF Herunterladen',
            'process_another_btn': 'Weiteres PDF Entsperren',
            'continue_to': 'Weiter zu...',
            'continue_description': 'Ihr entsperrtes PDF ist bereit! Fahren Sie mit einem anderen Tool fort:',

            // Why Choose Section
            'why_choose_title': 'Warum Unseren PDF-Entsperrer Verwenden',
            'why_choose_subtitle': 'Leistungsstarke Funktionen zum Entsperren Ihrer PDF-Dokumente',
            'feature1_title': 'Sichere Passwortentfernung',
            'feature1_description': 'Entfernen Sie den Passwortschutz von PDF-Dateien unter Beibehaltung der Dokumentsicherheit und -integrität.',
            'feature2_title': 'Schnelle Verarbeitung',
            'feature2_description': 'Entsperren Sie PDF-Dateien schnell mit unserer optimierten Verarbeitungsmaschine. Keine langen Wartezeiten.',
            'feature3_title': 'Vollständiger Dokumentzugriff',
            'feature3_description': 'Erlangen Sie vollständigen Zugriff auf Ihre PDF-Dokumente einschließlich Text, Bilder und Formatierung.',
            'feature4_title': 'Datenschutz Garantiert',
            'feature4_description': 'Ihre Dateien werden sicher auf Ihrem Gerät verarbeitet. Wir speichern oder greifen niemals auf Ihre Dokumente zu.',

            // How It Works
            'how_it_works_title': 'So Entsperren Sie PDF-Dateien',
            'how_it_works_subtitle': 'Einfache Schritte zum Entfernen des Passwortschutzes',
            'step1_title': 'PDF Hochladen',
            'step1_description': 'Wählen Sie Ihre passwortgeschützte PDF-Datei aus oder ziehen Sie sie in den Upload-Bereich.',
            'step2_title': 'Passwort Eingeben',
            'step2_description': 'Geben Sie das aktuelle Passwort für die PDF-Datei ein, um den Entsperrvorgang zu autorisieren.',
            'step3_title': 'Entsperren & Herunterladen',
            'step3_description': 'Klicken Sie auf Entsperren und laden Sie Ihre PDF-Datei ohne Passwortschutz herunter.',

            // FAQ
            'faq_title': 'Häufig Gestellte Fragen',
            'faq_subtitle': 'Alles, was Sie über das Entsperren von PDF-Dateien wissen müssen',
            'faq1_question': 'Ist es legal, PDF-Dateien zu entsperren?',
            'faq1_answer': 'Ja, es ist legal, PDF-Dateien zu entsperren, die Sie besitzen oder für die Sie die Berechtigung zur Änderung haben. Unser Tool ist darauf ausgelegt, Benutzern zu helfen, wieder auf ihre eigenen Dokumente zuzugreifen, wenn sie Passwörter vergessen haben oder Einschränkungen für legitime Zwecke entfernen müssen.',
            'faq2_question': 'Welche Arten von PDF-Passwörtern können entfernt werden?',
            'faq2_answer': 'Unser Tool kann sowohl Benutzerpasswörter (die das Öffnen der Datei einschränken) als auch Besitzerpasswörter (die das Drucken, Bearbeiten oder Kopieren von Inhalten einschränken) entfernen. Sie müssen das ursprüngliche Passwort kennen, um die Datei zu entsperren.',
            'faq3_question': 'Sind meine Dateien während des Entsperrvorgangs sicher?',
            'faq3_answer': 'Absolut. Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Ihre Dateien verlassen niemals Ihr Gerät und werden auf keinen Server hochgeladen. Wir nehmen Datenschutz und Sicherheit sehr ernst.',
            'faq4_question': 'Was ist, wenn ich das PDF-Passwort nicht kenne?',
            'faq4_answer': 'Unser Tool benötigt das ursprüngliche Passwort, um das PDF zu entsperren. Wenn Sie das Passwort vergessen haben, müssen Sie möglicherweise den Dokumentbesitzer kontaktieren oder spezialisierte Passwort-Wiederherstellungstools verwenden (die wir nicht anbieten).',
            'faq5_question': 'Gibt es eine Dateigrößenbeschränkung zum Entsperren von PDFs?',
            'faq5_answer': 'Ja, die maximale Dateigröße zum Entsperren beträgt 50 MB pro Datei. Dies gewährleistet optimale Leistung und Verarbeitungsgeschwindigkeit für alle Benutzer.',

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
            'page_title': 'Sblocca PDF',
            'page_description': 'Rimuovi la protezione con password dai file PDF e recupera l\'accesso ai tuoi documenti. Veloce, sicuro e completamente gratuito.',

            // Features
            'feature_password_removal': 'Rimozione Password',
            'feature_secure_processing': 'Elaborazione Sicura',
            'feature_fast_unlocking': 'Sblocco Rapido',
            'feature_full_access': 'Accesso Completo',
            'security_badge': '100% Sicuro - File elaborati localmente',

            // Tool Section
            'tool_section_title': 'Strumento Sblocca PDF',
            'tool_section_subtitle': 'Rimuovi la protezione con password dai tuoi documenti PDF',
            'privacy_badge': '100% lato client. I file non lasciano mai il tuo dispositivo.',
            'upload_from_computer': 'Carica da Computer',
            'import_from_url': 'Importa da URL',

            // URL Import
            'url_placeholder': 'Incolla il link Dropbox o Google Drive qui...',
            'import_file_btn': 'Importa File',
            'download_status': 'Download in corso...',
            'url_hints_title': 'Servizi Supportati:',
            'url_hint_1': 'Dropbox: Condividi il link e incollalo qui',
            'url_hint_2': 'Google Drive: Ottieni link condivisibile (Chiunque con il link può visualizzare)',
            'url_hint_3': 'URL di file diretti (solo formato supportato)',
            'url_hint_4': 'Dimensione massima del file: 50 MB',

            // Upload Area
            'upload_text': 'Fai clic per selezionare o trascina e rilascia i tuoi file PDF',
            'upload_pdf_subtext': 'File PDF • Fino a 10 file • Dimensione totale batch max 50 MB',

            // Password Section
            'password_section_title': 'Inserisci Password PDF',
            'password_section_description': 'Inserisci la password per sbloccare questo documento PDF.',
            'password_label': 'Password PDF',
            'password_placeholder': 'Inserisci la password PDF',
            'password_hint': 'Hai bisogno della password originale per sbloccare il PDF.',
            'unlock_btn': 'Sblocca PDF',

            // Processing
            'processing_message': 'Rimozione protezione password...',

            // Download Section
            'download_success_title': 'PDF Sbloccato con Successo!',
            'download_success_description': 'La password del tuo PDF è stata rimossa. Ora puoi scaricare il file sbloccato.',
            'download_btn': 'Scarica PDF Sbloccato',
            'process_another_btn': 'Sblocca Altro PDF',
            'continue_to': 'Continua a...',
            'continue_description': 'Il tuo PDF sbloccato è pronto! Continua la modifica con un altro strumento:',

            // Why Choose Section
            'why_choose_title': 'Perché Usare il Nostro Sblocca PDF',
            'why_choose_subtitle': 'Funzionalità potenti per sbloccare i tuoi documenti PDF',
            'feature1_title': 'Rimozione Sicura della Password',
            'feature1_description': 'Rimuovi la protezione con password dai file PDF mantenendo la sicurezza e l\'integrità del documento.',
            'feature2_title': 'Elaborazione Rapida',
            'feature2_description': 'Sblocca i file PDF rapidamente con il nostro motore di elaborazione ottimizzato. Nessun tempo di attesa lungo.',
            'feature3_title': 'Accesso Completo al Documento',
            'feature3_description': 'Recupera l\'accesso completo ai tuoi documenti PDF inclusi testo, immagini e formattazione.',
            'feature4_title': 'Privacy Garantita',
            'feature4_description': 'I tuoi file vengono elaborati in modo sicuro sul tuo dispositivo. Non memorizziamo né accediamo mai ai tuoi documenti.',

            // How It Works
            'how_it_works_title': 'Come Sbloccare File PDF',
            'how_it_works_subtitle': 'Semplici passaggi per rimuovere la protezione con password',
            'step1_title': 'Carica PDF',
            'step1_description': 'Seleziona il tuo file PDF protetto da password o trascinalo nell\'area di caricamento.',
            'step2_title': 'Inserisci Password',
            'step2_description': 'Fornisci la password corrente per il file PDF per autorizzare il processo di sblocco.',
            'step3_title': 'Sblocca e Scarica',
            'step3_description': 'Fai clic su sblocca e scarica il tuo file PDF senza protezione con password.',

            // FAQ
            'faq_title': 'Domande Frequenti',
            'faq_subtitle': 'Tutto quello che devi sapere sullo sblocco dei file PDF',
            'faq1_question': 'È legale sbloccare i file PDF?',
            'faq1_answer': 'Sì, è legale sbloccare i file PDF che possiedi o per i quali hai il permesso di modificare. Il nostro strumento è progettato per aiutare gli utenti a recuperare l\'accesso ai propri documenti quando hanno dimenticato le password o devono rimuovere le restrizioni per scopi legittimi.',
            'faq2_question': 'Quali tipi di password PDF possono essere rimosse?',
            'faq2_answer': 'Il nostro strumento può rimuovere sia le password utente (che limitano l\'apertura del file) sia le password proprietario (che limitano la stampa, la modifica o la copia del contenuto). Devi conoscere la password originale per sbloccare il file.',
            'faq3_question': 'I miei file sono sicuri durante il processo di sblocco?',
            'faq3_answer': 'Assolutamente. Tutta l\'elaborazione avviene localmente nel tuo browser. I tuoi file non lasciano mai il tuo dispositivo e non vengono caricati su nessun server. Prendiamo molto sul serio la privacy e la sicurezza.',
            'faq4_question': 'Cosa succede se non conosco la password del PDF?',
            'faq4_answer': 'Il nostro strumento richiede la password originale per sbloccare il PDF. Se hai dimenticato la password, potresti dover contattare il proprietario del documento o utilizzare strumenti specializzati di recupero password (che non forniamo).',
            'faq5_question': 'C\'è un limite di dimensione del file per sbloccare i PDF?',
            'faq5_answer': 'Sì, la dimensione massima del file per lo sblocco è di 50 MB per file. Ciò garantisce prestazioni ottimali e velocità di elaborazione per tutti gli utenti.',

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
            'page_title': 'PDF Kilidini Aç',
            'page_description': 'PDF dosyalarından şifre korumasını kaldırın ve belgelerinize yeniden erişin. Hızlı, güvenli ve tamamen ücretsiz.',

            // Features
            'feature_password_removal': 'Şifre Kaldırma',
            'feature_secure_processing': 'Güvenli İşleme',
            'feature_fast_unlocking': 'Hızlı Kilit Açma',
            'feature_full_access': 'Tam Erişim',
            'security_badge': '%100 Güvenli - Dosyalar yerel olarak işlenir',

            // Tool Section
            'tool_section_title': 'PDF Kilit Açma Aracı',
            'tool_section_subtitle': 'PDF belgelerinizden şifre korumasını kaldırın',
            'privacy_badge': '%100 istemci taraflı. Dosyalar cihazınızdan asla ayrılmaz.',
            'upload_from_computer': 'Bilgisayardan Yükle',
            'import_from_url': 'URL\'den İçe Aktar',

            // URL Import
            'url_placeholder': 'Dropbox veya Google Drive bağlantısını buraya yapıştırın...',
            'import_file_btn': 'Dosyayı İçe Aktar',
            'download_status': 'İndiriliyor...',
            'url_hints_title': 'Desteklenen Hizmetler:',
            'url_hint_1': 'Dropbox: Bağlantıyı paylaşın ve buraya yapıştırın',
            'url_hint_2': 'Google Drive: Paylaşılabilir bağlantı alın (Bağlantıya sahip herkes görüntüleyebilir)',
            'url_hint_3': 'Doğrudan dosya URL\'leri (yalnızca desteklenen format)',
            'url_hint_4': 'Maksimum dosya boyutu: 50MB',

            // Upload Area
            'upload_text': 'PDF dosyalarınızı seçmek için tıklayın veya sürükleyip bırakın',
            'upload_pdf_subtext': 'PDF dosyaları • 10 dosyaya kadar • Maksimum 50MB toplam toplu boyut',

            // Password Section
            'password_section_title': 'PDF Şifresini Girin',
            'password_section_description': 'Bu PDF belgesinin kilidini açmak için lütfen şifreyi girin.',
            'password_label': 'PDF Şifresi',
            'password_placeholder': 'PDF şifresini girin',
            'password_hint': 'PDF\'in kilidini açmak için orijinal şifreye ihtiyacınız var.',
            'unlock_btn': 'PDF Kilidini Aç',

            // Processing
            'processing_message': 'Şifre koruması kaldırılıyor...',

            // Download Section
            'download_success_title': 'PDF Başarıyla Kilidi Açıldı!',
            'download_success_description': 'PDF şifreniz kaldırıldı. Artık kilidi açılmış dosyayı indirebilirsiniz.',
            'download_btn': 'Kilidi Açılmış PDF\'i İndir',
            'process_another_btn': 'Başka Bir PDF\'in Kilidini Aç',
            'continue_to': 'Devam et...',
            'continue_description': 'Kilidi açılmış PDF\'niz hazır! Başka bir araçla düzenlemeye devam edin:',

            // Why Choose Section
            'why_choose_title': 'Neden PDF Kilit Açıcımızı Kullanmalısınız',
            'why_choose_subtitle': 'PDF belgelerinizin kilidini açmak için güçlü özellikler',
            'feature1_title': 'Güvenli Şifre Kaldırma',
            'feature1_description': 'Belge güvenliğini ve bütünlüğünü korurken PDF dosyalarından şifre korumasını kaldırın.',
            'feature2_title': 'Hızlı İşleme',
            'feature2_description': 'Optimize edilmiş işleme motorumuzla PDF dosyalarının kilidini hızlıca açın. Uzun bekleme süreleri yok.',
            'feature3_title': 'Tam Belge Erişimi',
            'feature3_description': 'Metin, resimler ve biçimlendirme dahil PDF belgelerinize tam erişimi yeniden kazanın.',
            'feature4_title': 'Gizlilik Garantili',
            'feature4_description': 'Dosyalarınız cihazınızda güvenli bir şekilde işlenir. Belgelerinizi asla saklamaz veya erişmeyiz.',

            // How It Works
            'how_it_works_title': 'PDF Dosyalarının Kilidi Nasıl Açılır',
            'how_it_works_subtitle': 'Şifre korumasını kaldırmak için basit adımlar',
            'step1_title': 'PDF Yükle',
            'step1_description': 'Şifre korumalı PDF dosyanızı seçin veya yükleme alanına sürükleyip bırakın.',
            'step2_title': 'Şifre Girin',
            'step2_description': 'Kilit açma işlemini yetkilendirmek için PDF dosyasının mevcut şifresini sağlayın.',
            'step3_title': 'Kilidi Aç ve İndir',
            'step3_description': 'Kilidi aç\'a tıklayın ve PDF dosyanızı şifre koruması olmadan indirin.',

            // FAQ
            'faq_title': 'Sıkça Sorulan Sorular',
            'faq_subtitle': 'PDF dosyalarının kilidini açma hakkında bilmeniz gereken her şey',
            'faq1_question': 'PDF dosyalarının kilidini açmak yasal mı?',
            'faq1_answer': 'Evet, sahip olduğunuz veya değiştirme izniniz olan PDF dosyalarının kilidini açmak yasaldır. Aracımız, kullanıcıların şifreleri unuttuklarında veya meşru amaçlar için kısıtlamaları kaldırmaları gerektiğinde kendi belgelerine yeniden erişmelerine yardımcı olmak için tasarlanmıştır.',
            'faq2_question': 'Hangi tür PDF şifreleri kaldırılabilir?',
            'faq2_answer': 'Aracımız hem kullanıcı şifrelerini (dosyanın açılmasını kısıtlayan) hem de sahip şifrelerini (yazdırma, düzenleme veya içerik kopyalamayı kısıtlayan) kaldırabilir. Dosyanın kilidini açmak için orijinal şifreyi bilmeniz gerekir.',
            'faq3_question': 'Kilit açma işlemi sırasında dosyalarım güvende mi?',
            'faq3_answer': 'Kesinlikle. Tüm işlemler tarayıcınızda yerel olarak gerçekleşir. Dosyalarınız asla cihazınızdan ayrılmaz ve hiçbir sunucuya yüklenmez. Gizliliği ve güvenliği çok ciddiye alıyoruz.',
            'faq4_question': 'PDF şifresini bilmiyorsam ne olur?',
            'faq4_answer': 'Aracımız PDF\'in kilidini açmak için orijinal şifreyi gerektirir. Şifreyi unuttuysanız, belge sahibiyle iletişime geçmeniz veya özel şifre kurtarma araçlarını kullanmanız (bunları sağlamıyoruz) gerekebilir.',
            'faq5_question': 'PDF\'lerin kilidini açmak için dosya boyutu sınırı var mı?',
            'faq5_answer': 'Evet, kilit açma için maksimum dosya boyutu dosya başına 50 MB\'dir. Bu, tüm kullanıcılar için optimal performans ve işlem hızını garanti eder.',

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
            'page_title': 'Desbloquear PDF',
            'page_description': 'Remova a proteção por senha de arquivos PDF e recupere o acesso aos seus documentos. Rápido, seguro e completamente gratuito.',

            // Features
            'feature_password_removal': 'Remoção de Senha',
            'feature_secure_processing': 'Processamento Seguro',
            'feature_fast_unlocking': 'Desbloqueio Rápido',
            'feature_full_access': 'Acesso Completo',
            'security_badge': '100% Seguro - Arquivos processados localmente',

            // Tool Section
            'tool_section_title': 'Ferramenta de Desbloqueio de PDF',
            'tool_section_subtitle': 'Remova a proteção por senha de seus documentos PDF',
            'privacy_badge': '100% do lado do cliente. Os arquivos nunca saem do seu dispositivo.',
            'upload_from_computer': 'Carregar do Computador',
            'import_from_url': 'Importar do URL',

            // URL Import
            'url_placeholder': 'Cole o link do Dropbox ou Google Drive aqui...',
            'import_file_btn': 'Importar Arquivo',
            'download_status': 'Baixando...',
            'url_hints_title': 'Serviços Suportados:',
            'url_hint_1': 'Dropbox: Compartilhe o link e cole aqui',
            'url_hint_2': 'Google Drive: Obtenha link compartilhável (Qualquer pessoa com o link pode visualizar)',
            'url_hint_3': 'URLs de arquivo diretos (apenas formato suportado)',
            'url_hint_4': 'Tamanho máximo do arquivo: 50MB',

            // Upload Area
            'upload_text': 'Clique para selecionar ou arraste e solte seus arquivos PDF',
            'upload_pdf_subtext': 'Arquivos PDF • Até 10 arquivos • Tamanho total máximo de lote 50MB',

            // Password Section
            'password_section_title': 'Digite a Senha do PDF',
            'password_section_description': 'Por favor, digite a senha para desbloquear este documento PDF.',
            'password_label': 'Senha do PDF',
            'password_placeholder': 'Digite a senha do PDF',
            'password_hint': 'Você precisa da senha original para desbloquear o PDF.',
            'unlock_btn': 'Desbloquear PDF',

            // Processing
            'processing_message': 'Removendo proteção por senha...',

            // Download Section
            'download_success_title': 'PDF Desbloqueado com Sucesso!',
            'download_success_description': 'A senha do seu PDF foi removida. Agora você pode baixar o arquivo desbloqueado.',
            'download_btn': 'Baixar PDF Desbloqueado',
            'process_another_btn': 'Desbloquear Outro PDF',
            'continue_to': 'Continuar para...',
            'continue_description': 'Seu PDF desbloqueado está pronto! Continue editando com outra ferramenta:',

            // Why Choose Section
            'why_choose_title': 'Por Que Usar Nosso Desbloqueador de PDF',
            'why_choose_subtitle': 'Recursos poderosos para desbloquear seus documentos PDF',
            'feature1_title': 'Remoção Segura de Senha',
            'feature1_description': 'Remova a proteção por senha de arquivos PDF mantendo a segurança e integridade do documento.',
            'feature2_title': 'Processamento Rápido',
            'feature2_description': 'Desbloqueie arquivos PDF rapidamente com nosso mecanismo de processamento otimizado. Sem longos tempos de espera.',
            'feature3_title': 'Acesso Completo ao Documento',
            'feature3_description': 'Recupere o acesso completo aos seus documentos PDF, incluindo texto, imagens e formatação.',
            'feature4_title': 'Privacidade Garantida',
            'feature4_description': 'Seus arquivos são processados com segurança em seu dispositivo. Nunca armazenamos ou acessamos seus documentos.',

            // How It Works
            'how_it_works_title': 'Como Desbloquear Arquivos PDF',
            'how_it_works_subtitle': 'Passos simples para remover a proteção por senha',
            'step1_title': 'Carregar PDF',
            'step1_description': 'Selecione seu arquivo PDF protegido por senha ou arraste e solte na área de upload.',
            'step2_title': 'Digite a Senha',
            'step2_description': 'Forneça a senha atual do arquivo PDF para autorizar o processo de desbloqueio.',
            'step3_title': 'Desbloquear e Baixar',
            'step3_description': 'Clique em desbloquear e baixe seu arquivo PDF sem proteção por senha.',

            // FAQ
            'faq_title': 'Perguntas Frequentes',
            'faq_subtitle': 'Tudo que você precisa saber sobre desbloquear arquivos PDF',
            'faq1_question': 'É legal desbloquear arquivos PDF?',
            'faq1_answer': 'Sim, é legal desbloquear arquivos PDF que você possui ou tem permissão para modificar. Nossa ferramenta foi projetada para ajudar os usuários a recuperar o acesso aos seus próprios documentos quando esquecem senhas ou precisam remover restrições para fins legítimos.',
            'faq2_question': 'Que tipos de senhas de PDF podem ser removidas?',
            'faq2_answer': 'Nossa ferramenta pode remover tanto senhas de usuário (que restringem a abertura do arquivo) quanto senhas de proprietário (que restringem impressão, edição ou cópia de conteúdo). Você precisa conhecer a senha original para desbloquear o arquivo.',
            'faq3_question': 'Meus arquivos estão seguros durante o processo de desbloqueio?',
            'faq3_answer': 'Absolutamente. Todo o processamento acontece localmente em seu navegador. Seus arquivos nunca saem do seu dispositivo e não são enviados para nenhum servidor. Levamos a privacidade e a segurança muito a sério.',
            'faq4_question': 'E se eu não souber a senha do PDF?',
            'faq4_answer': 'Nossa ferramenta requer a senha original para desbloquear o PDF. Se você esqueceu a senha, pode ser necessário entrar em contato com o proprietário do documento ou usar ferramentas especializadas de recuperação de senha (que não fornecemos).',
            'faq5_question': 'Existe um limite de tamanho de arquivo para desbloquear PDFs?',
            'faq5_answer': 'Sim, o tamanho máximo do arquivo para desbloqueio é de 50 MB por arquivo. Isso garante desempenho ideal e velocidade de processamento para todos os usuários.',

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
            'page_title': 'Разблокировать PDF',
            'page_description': 'Удалите защиту паролем из файлов PDF и восстановите доступ к вашим документам. Быстро, безопасно и совершенно бесплатно.',

            // Features
            'feature_password_removal': 'Удаление Пароля',
            'feature_secure_processing': 'Безопасная Обработка',
            'feature_fast_unlocking': 'Быстрая Разблокировка',
            'feature_full_access': 'Полный Доступ',
            'security_badge': '100% Безопасно - Файлы обрабатываются локально',

            // Tool Section
            'tool_section_title': 'Инструмент Разблокировки PDF',
            'tool_section_subtitle': 'Удалите защиту паролем из ваших PDF-документов',
            'privacy_badge': '100% на стороне клиента. Файлы никогда не покидают ваше устройство.',
            'upload_from_computer': 'Загрузить с Компьютера',
            'import_from_url': 'Импортировать из URL',

            // URL Import
            'url_placeholder': 'Вставьте ссылку Dropbox или Google Drive здесь...',
            'import_file_btn': 'Импортировать Файл',
            'download_status': 'Загрузка...',
            'url_hints_title': 'Поддерживаемые Сервисы:',
            'url_hint_1': 'Dropbox: Поделитесь ссылкой и вставьте здесь',
            'url_hint_2': 'Google Drive: Получите общедоступную ссылку (Любой, у кого есть ссылка, может просматривать)',
            'url_hint_3': 'Прямые URL-адреса файлов (только поддерживаемый формат)',
            'url_hint_4': 'Максимальный размер файла: 50 МБ',

            // Upload Area
            'upload_text': 'Нажмите, чтобы выбрать, или перетащите PDF-файлы',
            'upload_pdf_subtext': 'PDF файлы • До 10 файлов • Максимальный общий размер пакета 50 МБ',

            // Password Section
            'password_section_title': 'Введите Пароль PDF',
            'password_section_description': 'Пожалуйста, введите пароль для разблокировки этого PDF-документа.',
            'password_label': 'Пароль PDF',
            'password_placeholder': 'Введите пароль PDF',
            'password_hint': 'Вам нужен исходный пароль для разблокировки PDF.',
            'unlock_btn': 'Разблокировать PDF',

            // Processing
            'processing_message': 'Удаление защиты паролем...',

            // Download Section
            'download_success_title': 'PDF Успешно Разблокирован!',
            'download_success_description': 'Пароль вашего PDF был удален. Теперь вы можете скачать разблокированный файл.',
            'download_btn': 'Скачать Разблокированный PDF',
            'process_another_btn': 'Разблокировать Другой PDF',
            'continue_to': 'Продолжить...',
            'continue_description': 'Ваш разблокированный PDF готов! Продолжите редактирование с помощью другого инструмента:',

            // Why Choose Section
            'why_choose_title': 'Почему Стоит Использовать Наш Разблокировщик PDF',
            'why_choose_subtitle': 'Мощные функции для разблокировки ваших PDF-документов',
            'feature1_title': 'Безопасное Удаление Пароля',
            'feature1_description': 'Удалите защиту паролем из PDF-файлов, сохраняя при этом безопасность и целостность документа.',
            'feature2_title': 'Быстрая Обработка',
            'feature2_description': 'Разблокируйте PDF-файлы быстро с помощью нашего оптимизированного механизма обработки. Без длительного ожидания.',
            'feature3_title': 'Полный Доступ к Документу',
            'feature3_description': 'Восстановите полный доступ к вашим PDF-документам, включая текст, изображения и форматирование.',
            'feature4_title': 'Гарантия Конфиденциальности',
            'feature4_description': 'Ваши файлы обрабатываются безопасно на вашем устройстве. Мы никогда не храним и не получаем доступ к вашим документам.',

            // How It Works
            'how_it_works_title': 'Как Разблокировать PDF Файлы',
            'how_it_works_subtitle': 'Простые шаги для удаления защиты паролем',
            'step1_title': 'Загрузить PDF',
            'step1_description': 'Выберите ваш PDF-файл, защищенный паролем, или перетащите его в область загрузки.',
            'step2_title': 'Ввести Пароль',
            'step2_description': 'Укажите текущий пароль для PDF-файла, чтобы авторизовать процесс разблокировки.',
            'step3_title': 'Разблокировать и Скачать',
            'step3_description': 'Нажмите разблокировать и скачайте ваш PDF-файл без защиты паролем.',

            // FAQ
            'faq_title': 'Часто Задаваемые Вопросы',
            'faq_subtitle': 'Все, что вам нужно знать о разблокировке PDF файлов',
            'faq1_question': 'Законно ли разблокировать PDF файлы?',
            'faq1_answer': 'Да, разблокировать PDF-файлы, которыми вы владеете или имеете разрешение на изменение, законно. Наш инструмент разработан, чтобы помочь пользователям восстановить доступ к своим собственным документам, когда они забыли пароли или нуждаются в удалении ограничений в законных целях.',
            'faq2_question': 'Какие типы паролей PDF можно удалить?',
            'faq2_answer': 'Наш инструмент может удалить как пользовательские пароли (которые ограничивают открытие файла), так и пароли владельца (которые ограничивают печать, редактирование или копирование содержимого). Вам необходимо знать исходный пароль для разблокировки файла.',
            'faq3_question': 'Безопасны ли мои файлы во время процесса разблокировки?',
            'faq3_answer': 'Абсолютно. Вся обработка происходит локально в вашем браузере. Ваши файлы никогда не покидают ваше устройство и не загружаются на какой-либо сервер. Мы очень серьезно относимся к конфиденциальности и безопасности.',
            'faq4_question': 'Что делать, если я не знаю пароль PDF?',
            'faq4_answer': 'Наш инструмент требует исходный пароль для разблокировки PDF. Если вы забыли пароль, вам может потребоваться связаться с владельцем документа или использовать специализированные инструменты восстановления пароля (которые мы не предоставляем).',
            'faq5_question': 'Есть ли ограничение по размеру файла для разблокировки PDF?',
            'faq5_answer': 'Да, максимальный размер файла для разблокировки составляет 50 МБ на файл. Это обеспечивает оптимальную производительность и скорость обработки для всех пользователей.',

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
            'page_title': '解锁PDF',
            'page_description': '从PDF文件中删除密码保护并重新访问您的文档。快速、安全且完全免费。',

            // Features
            'feature_password_removal': '密码删除',
            'feature_secure_processing': '安全处理',
            'feature_fast_unlocking': '快速解锁',
            'feature_full_access': '完全访问',
            'security_badge': '100%安全 - 文件在本地处理',

            // Tool Section
            'tool_section_title': 'PDF解锁工具',
            'tool_section_subtitle': '从您的PDF文档中删除密码保护',
            'privacy_badge': '100%客户端。文件永远不会离开您的设备。',
            'upload_from_computer': '从计算机上传',
            'import_from_url': '从URL导入',

            // URL Import
            'url_placeholder': '在此粘贴Dropbox或Google Drive链接...',
            'import_file_btn': '导入文件',
            'download_status': '下载中...',
            'url_hints_title': '支持的服务：',
            'url_hint_1': 'Dropbox：分享链接并粘贴到此处',
            'url_hint_2': 'Google Drive：获取可共享链接（任何有链接的人都可以查看）',
            'url_hint_3': '直接文件URL（仅支持的格式）',
            'url_hint_4': '最大文件大小：50MB',

            // Upload Area
            'upload_text': '点击选择或拖放您的PDF文件',
            'upload_pdf_subtext': 'PDF文件 • 最多10个文件 • 最大总批处理大小50MB',

            // Password Section
            'password_section_title': '输入PDF密码',
            'password_section_description': '请输入密码以解锁此PDF文档。',
            'password_label': 'PDF密码',
            'password_placeholder': '输入PDF密码',
            'password_hint': '您需要原始密码来解锁PDF。',
            'unlock_btn': '解锁PDF',

            // Processing
            'processing_message': '正在删除密码保护...',

            // Download Section
            'download_success_title': 'PDF成功解锁！',
            'download_success_description': '您的PDF密码已被删除。现在您可以下载解锁的文件。',
            'download_btn': '下载解锁的PDF',
            'process_another_btn': '解锁另一个PDF',
            'continue_to': '继续到...',
            'continue_description': '您的解锁PDF已准备就绪！继续使用其他工具进行编辑：',

            // Why Choose Section
            'why_choose_title': '为什么使用我们的PDF解锁器',
            'why_choose_subtitle': '解锁您的PDF文档的强大功能',
            'feature1_title': '安全密码删除',
            'feature1_description': '从PDF文件中删除密码保护，同时保持文档的安全性和完整性。',
            'feature2_title': '快速处理',
            'feature2_description': '使用我们优化的处理引擎快速解锁PDF文件。无需长时间等待。',
            'feature3_title': '完全文档访问',
            'feature3_description': '重新获得对PDF文档的完全访问权限，包括文本、图像和格式。',
            'feature4_title': '隐私保证',
            'feature4_description': '您的文件在您的设备上安全处理。我们从不存储或访问您的文档。',

            // How It Works
            'how_it_works_title': '如何解锁PDF文件',
            'how_it_works_subtitle': '删除密码保护的简单步骤',
            'step1_title': '上传PDF',
            'step1_description': '选择您的受密码保护的PDF文件或将其拖放到上传区域。',
            'step2_title': '输入密码',
            'step2_description': '提供PDF文件的当前密码以授权解锁过程。',
            'step3_title': '解锁并下载',
            'step3_description': '点击解锁并下载没有密码保护的PDF文件。',

            // FAQ
            'faq_title': '常见问题',
            'faq_subtitle': '关于解锁PDF文件您需要了解的一切',
            'faq1_question': '解锁PDF文件是否合法？',
            'faq1_answer': '是的，解锁您拥有或有权修改的PDF文件是合法的。我们的工具旨在帮助用户在忘记密码或需要出于合法目的删除限制时重新访问自己的文档。',
            'faq2_question': '可以删除哪些类型的PDF密码？',
            'faq2_answer': '我们的工具可以删除用户密码（限制打开文件）和所有者密码（限制打印、编辑或复制内容）。您需要知道原始密码才能解锁文件。',
            'faq3_question': '解锁过程中我的文件安全吗？',
            'faq3_answer': '绝对安全。所有处理都在您的浏览器中本地进行。您的文件永远不会离开您的设备，也不会上传到任何服务器。我们非常重视隐私和安全。',
            'faq4_question': '如果我不知道PDF密码怎么办？',
            'faq4_answer': '我们的工具需要原始密码来解锁PDF。如果您忘记了密码，可能需要联系文档所有者或使用专门的密码恢复工具（我们不提供）。',
            'faq5_question': '解锁PDF是否有文件大小限制？',
            'faq5_answer': '是的，解锁的最大文件大小为每个文件50MB。这确保了所有用户的最佳性能和处理速度。',

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
            'page_title': 'PDFのロック解除',
            'page_description': 'PDFファイルからパスワード保護を削除し、ドキュメントへのアクセスを回復します。高速、安全、完全無料。',

            // Features
            'feature_password_removal': 'パスワード削除',
            'feature_secure_processing': '安全な処理',
            'feature_fast_unlocking': '高速ロック解除',
            'feature_full_access': '完全アクセス',
            'security_badge': '100%安全 - ファイルはローカルで処理されます',

            // Tool Section
            'tool_section_title': 'PDFロック解除ツール',
            'tool_section_subtitle': 'PDFドキュメントからパスワード保護を削除',
            'privacy_badge': '100%クライアント側。ファイルがデバイスから離れることはありません。',
            'upload_from_computer': 'コンピューターからアップロード',
            'import_from_url': 'URLからインポート',

            // URL Import
            'url_placeholder': 'DropboxまたはGoogle Driveのリンクをここに貼り付けてください...',
            'import_file_btn': 'ファイルをインポート',
            'download_status': 'ダウンロード中...',
            'url_hints_title': 'サポートされているサービス：',
            'url_hint_1': 'Dropbox：リンクを共有してここに貼り付けます',
            'url_hint_2': 'Google Drive：共有可能なリンクを取得（リンクを持っている人は誰でも表示可能）',
            'url_hint_3': '直接ファイルURL（サポートされている形式のみ）',
            'url_hint_4': '最大ファイルサイズ：50MB',

            // Upload Area
            'upload_text': 'クリックして選択するか、PDFファイルをドラッグ&ドロップ',
            'upload_pdf_subtext': 'PDFファイル • 最大10ファイル • 最大合計バッチサイズ50MB',

            // Password Section
            'password_section_title': 'PDFパスワードを入力',
            'password_section_description': 'このPDFドキュメントのロックを解除するには、パスワードを入力してください。',
            'password_label': 'PDFパスワード',
            'password_placeholder': 'PDFパスワードを入力',
            'password_hint': 'PDFのロックを解除するには元のパスワードが必要です。',
            'unlock_btn': 'PDFのロック解除',

            // Processing
            'processing_message': 'パスワード保護を削除中...',

            // Download Section
            'download_success_title': 'PDFのロック解除に成功しました！',
            'download_success_description': 'PDFパスワードが削除されました。ロック解除されたファイルをダウンロードできます。',
            'download_btn': 'ロック解除されたPDFをダウンロード',
            'process_another_btn': '別のPDFのロックを解除',
            'continue_to': '続行...',
            'continue_description': 'ロック解除されたPDFの準備ができました！別のツールで編集を続けます：',

            // Why Choose Section
            'why_choose_title': '当社のPDFロック解除ツールを使用する理由',
            'why_choose_subtitle': 'PDFドキュメントのロックを解除するための強力な機能',
            'feature1_title': '安全なパスワード削除',
            'feature1_description': 'ドキュメントのセキュリティと整合性を維持しながら、PDFファイルからパスワード保護を削除します。',
            'feature2_title': '高速処理',
            'feature2_description': '最適化された処理エンジンでPDFファイルを素早くロック解除。長い待ち時間はありません。',
            'feature3_title': '完全なドキュメントアクセス',
            'feature3_description': 'テキスト、画像、フォーマットを含むPDFドキュメントへの完全なアクセスを回復します。',
            'feature4_title': 'プライバシー保証',
            'feature4_description': 'ファイルはデバイス上で安全に処理されます。ドキュメントを保存したりアクセスしたりすることはありません。',

            // How It Works
            'how_it_works_title': 'PDFファイルのロックを解除する方法',
            'how_it_works_subtitle': 'パスワード保護を削除する簡単な手順',
            'step1_title': 'PDFをアップロード',
            'step1_description': 'パスワードで保護されたPDFファイルを選択するか、アップロード領域にドラッグ&ドロップします。',
            'step2_title': 'パスワードを入力',
            'step2_description': 'ロック解除プロセスを承認するために、PDFファイルの現在のパスワードを提供してください。',
            'step3_title': 'ロック解除してダウンロード',
            'step3_description': 'ロック解除をクリックして、パスワード保護なしでPDFファイルをダウンロードします。',

            // FAQ
            'faq_title': 'よくある質問',
            'faq_subtitle': 'PDFファイルのロック解除について知っておくべきすべて',
            'faq1_question': 'PDFファイルのロックを解除することは合法ですか？',
            'faq1_answer': 'はい、所有しているか変更する許可がある PDFファイルのロックを解除することは合法です。当社のツールは、ユーザーがパスワードを忘れた場合や正当な目的で制限を削除する必要がある場合に、自分のドキュメントへのアクセスを回復するのを支援するように設計されています。',
            'faq2_question': 'どのタイプのPDFパスワードを削除できますか？',
            'faq2_answer': '当社のツールは、ユーザーパスワード（ファイルを開くことを制限する）と所有者パスワード（印刷、編集、またはコンテンツのコピーを制限する）の両方を削除できます。ファイルのロックを解除するには、元のパスワードを知っている必要があります。',
            'faq3_question': 'ロック解除プロセス中にファイルは安全ですか？',
            'faq3_answer': '絶対に。すべての処理はブラウザでローカルに行われます。ファイルがデバイスから離れることはなく、サーバーにアップロードされることもありません。プライバシーとセキュリティを非常に真剣に考えています。',
            'faq4_question': 'PDFパスワードがわからない場合はどうすればよいですか？',
            'faq4_answer': '当社のツールは、PDFのロックを解除するために元のパスワードを必要とします。パスワードを忘れた場合は、ドキュメントの所有者に連絡するか、専門のパスワード回復ツール（提供していません）を使用する必要がある場合があります。',
            'faq5_question': 'PDFのロック解除にファイルサイズの制限はありますか？',
            'faq5_answer': 'はい、ロック解除の最大ファイルサイズは1ファイルあたり50MBです。これにより、すべてのユーザーに最適なパフォーマンスと処理速度が保証されます。',

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
            'page_title': 'إلغاء قفل PDF',
            'page_description': 'قم بإزالة حماية كلمة المرور من ملفات PDF واستعد الوصول إلى مستنداتك. سريع وآمن ومجاني تمامًا.',

            // Features
            'feature_password_removal': 'إزالة كلمة المرور',
            'feature_secure_processing': 'معالجة آمنة',
            'feature_fast_unlocking': 'إلغاء قفل سريع',
            'feature_full_access': 'وصول كامل',
            'security_badge': '100٪ آمن - تتم معالجة الملفات محليًا',

            // Tool Section
            'tool_section_title': 'أداة إلغاء قفل PDF',
            'tool_section_subtitle': 'قم بإزالة حماية كلمة المرور من مستندات PDF الخاصة بك',
            'privacy_badge': '100٪ من جانب العميل. لا تغادر الملفات جهازك أبدًا.',
            'upload_from_computer': 'تحميل من الكمبيوتر',
            'import_from_url': 'استيراد من URL',

            // URL Import
            'url_placeholder': 'الصق رابط Dropbox أو Google Drive هنا...',
            'import_file_btn': 'استيراد الملف',
            'download_status': 'جاري التنزيل...',
            'url_hints_title': 'الخدمات المدعومة:',
            'url_hint_1': 'Dropbox: شارك الرابط والصقه هنا',
            'url_hint_2': 'Google Drive: احصل على رابط قابل للمشاركة (يمكن لأي شخص لديه الرابط المشاهدة)',
            'url_hint_3': 'عناوين URL للملفات المباشرة (التنسيق المدعوم فقط)',
            'url_hint_4': 'الحد الأقصى لحجم الملف: 50 ميجابايت',

            // Upload Area
            'upload_text': 'انقر للتحديد أو اسحب وأفلت ملفات PDF الخاصة بك',
            'upload_pdf_subtext': 'ملفات PDF • حتى 10 ملفات • الحد الأقصى لحجم الدفعة الإجمالي 50 ميجابايت',

            // Password Section
            'password_section_title': 'أدخل كلمة مرور PDF',
            'password_section_description': 'الرجاء إدخال كلمة المرور لإلغاء قفل مستند PDF هذا.',
            'password_label': 'كلمة مرور PDF',
            'password_placeholder': 'أدخل كلمة مرور PDF',
            'password_hint': 'تحتاج إلى كلمة المرور الأصلية لإلغاء قفل PDF.',
            'unlock_btn': 'إلغاء قفل PDF',

            // Processing
            'processing_message': 'إزالة حماية كلمة المرور...',

            // Download Section
            'download_success_title': 'تم إلغاء قفل PDF بنجاح!',
            'download_success_description': 'تمت إزالة كلمة مرور PDF الخاصة بك. يمكنك الآن تنزيل الملف غير المقفل.',
            'download_btn': 'تنزيل PDF غير المقفل',
            'process_another_btn': 'إلغاء قفل PDF آخر',
            'continue_to': 'متابعة إلى...',
            'continue_description': 'ملف PDF غير المقفل جاهز! تابع التحرير بأداة أخرى:',

            // Why Choose Section
            'why_choose_title': 'لماذا تستخدم أداة إلغاء قفل PDF الخاصة بنا',
            'why_choose_subtitle': 'ميزات قوية لإلغاء قفل مستندات PDF الخاصة بك',
            'feature1_title': 'إزالة كلمة مرور آمنة',
            'feature1_description': 'قم بإزالة حماية كلمة المرور من ملفات PDF مع الحفاظ على أمان المستند وسلامته.',
            'feature2_title': 'معالجة سريعة',
            'feature2_description': 'قم بإلغاء قفل ملفات PDF بسرعة باستخدام محرك المعالجة المحسن لدينا. لا توجد أوقات انتظار طويلة.',
            'feature3_title': 'وصول كامل إلى المستند',
            'feature3_description': 'استعد الوصول الكامل إلى مستندات PDF الخاصة بك بما في ذلك النص والصور والتنسيق.',
            'feature4_title': 'خصوصية مضمونة',
            'feature4_description': 'تتم معالجة ملفاتك بشكل آمن على جهازك. نحن لا نقوم أبدًا بتخزين مستنداتك أو الوصول إليها.',

            // How It Works
            'how_it_works_title': 'كيفية إلغاء قفل ملفات PDF',
            'how_it_works_subtitle': 'خطوات بسيطة لإزالة حماية كلمة المرور',
            'step1_title': 'تحميل PDF',
            'step1_description': 'حدد ملف PDF المحمي بكلمة مرور أو اسحبه وأفلته في منطقة التحميل.',
            'step2_title': 'أدخل كلمة المرور',
            'step2_description': 'قدم كلمة المرور الحالية لملف PDF للترخيص بعملية إلغاء القفل.',
            'step3_title': 'إلغاء القفل والتنزيل',
            'step3_description': 'انقر فوق إلغاء القفل وقم بتنزيل ملف PDF الخاص بك بدون حماية بكلمة مرور.',

            // FAQ
            'faq_title': 'الأسئلة المتكررة',
            'faq_subtitle': 'كل ما تحتاج لمعرفته حول إلغاء قفل ملفات PDF',
            'faq1_question': 'هل من القانوني إلغاء قفل ملفات PDF؟',
            'faq1_answer': 'نعم، من القانوني إلغاء قفل ملفات PDF التي تمتلكها أو لديك إذن بتعديلها. تم تصميم أداتنا لمساعدة المستخدمين على استعادة الوصول إلى مستنداتهم الخاصة عندما ينسون كلمات المرور أو يحتاجون إلى إزالة القيود لأغراض مشروعة.',
            'faq2_question': 'ما أنواع كلمات مرور PDF التي يمكن إزالتها؟',
            'faq2_answer': 'يمكن لأداتنا إزالة كل من كلمات مرور المستخدم (التي تحد من فتح الملف) وكلمات مرور المالك (التي تحد من الطباعة أو التحرير أو نسخ المحتوى). تحتاج إلى معرفة كلمة المرور الأصلية لإلغاء قفل الملف.',
            'faq3_question': 'هل ملفاتي آمنة أثناء عملية إلغاء القفل؟',
            'faq3_answer': 'بالتأكيد. تتم جميع المعالجة محليًا في متصفحك. لا تغادر ملفاتك جهازك أبدًا ولا يتم تحميلها على أي خادم. نحن نأخذ الخصوصية والأمان على محمل الجد.',
            'faq4_question': 'ماذا لو كنت لا أعرف كلمة مرور PDF؟',
            'faq4_answer': 'تتطلب أداتنا كلمة المرور الأصلية لإلغاء قفل PDF. إذا نسيت كلمة المرور، فقد تحتاج إلى الاتصال بمالك المستند أو استخدام أدوات استعادة كلمة المرور المتخصصة (التي لا نوفرها).',
            'faq5_question': 'هل هناك حد لحجم الملف لإلغاء قفل ملفات PDF؟',
            'faq5_answer': 'نعم، الحد الأقصى لحجم الملف لإلغاء القفل هو 50 ميجابايت لكل ملف. هذا يضمن الأداء الأمثل وسرعة المعالجة لجميع المستخدمين.',

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
            'page_title': 'PDF अनलॉक करें',
            'page_description': 'PDF फ़ाइलों से पासवर्ड सुरक्षा हटाएं और अपने दस्तावेज़ों तक पहुंच पुनः प्राप्त करें। तेज़, सुरक्षित और पूरी तरह से मुफ़्त।',

            // Features
            'feature_password_removal': 'पासवर्ड हटाना',
            'feature_secure_processing': 'सुरक्षित प्रसंस्करण',
            'feature_fast_unlocking': 'तेज़ अनलॉकिंग',
            'feature_full_access': 'पूर्ण पहुंच',
            'security_badge': '100% सुरक्षित - फ़ाइलें स्थानीय रूप से संसाधित की जाती हैं',

            // Tool Section
            'tool_section_title': 'PDF अनलॉक टूल',
            'tool_section_subtitle': 'अपने PDF दस्तावेज़ों से पासवर्ड सुरक्षा हटाएं',
            'privacy_badge': '100% क्लाइंट-साइड। फ़ाइलें कभी भी आपके डिवाइस को नहीं छोड़तीं।',
            'upload_from_computer': 'कंप्यूटर से अपलोड करें',
            'import_from_url': 'URL से आयात करें',

            // URL Import
            'url_placeholder': 'Dropbox या Google Drive लिंक यहां पेस्ट करें...',
            'import_file_btn': 'फ़ाइल आयात करें',
            'download_status': 'डाउनलोड हो रहा है...',
            'url_hints_title': 'समर्थित सेवाएं:',
            'url_hint_1': 'Dropbox: लिंक साझा करें और यहां पेस्ट करें',
            'url_hint_2': 'Google Drive: साझा करने योग्य लिंक प्राप्त करें (लिंक वाला कोई भी देख सकता है)',
            'url_hint_3': 'सीधे फ़ाइल URL (केवल समर्थित प्रारूप)',
            'url_hint_4': 'अधिकतम फ़ाइल आकार: 50MB',

            // Upload Area
            'upload_text': 'चयन करने के लिए क्लिक करें या अपनी PDF फ़ाइलों को ड्रैग और ड्रॉप करें',
            'upload_pdf_subtext': 'PDF फ़ाइलें • 10 फ़ाइलों तक • अधिकतम 50MB कुल बैच आकार',

            // Password Section
            'password_section_title': 'PDF पासवर्ड दर्ज करें',
            'password_section_description': 'कृपया इस PDF दस्तावेज़ को अनलॉक करने के लिए पासवर्ड दर्ज करें।',
            'password_label': 'PDF पासवर्ड',
            'password_placeholder': 'PDF पासवर्ड दर्ज करें',
            'password_hint': 'PDF को अनलॉक करने के लिए आपको मूल पासवर्ड की आवश्यकता है।',
            'unlock_btn': 'PDF अनलॉक करें',

            // Processing
            'processing_message': 'पासवर्ड सुरक्षा हटाई जा रही है...',

            // Download Section
            'download_success_title': 'PDF सफलतापूर्वक अनलॉक किया गया!',
            'download_success_description': 'आपका PDF पासवर्ड हटा दिया गया है। अब आप अनलॉक की गई फ़ाइल डाउनलोड कर सकते हैं।',
            'download_btn': 'अनलॉक की गई PDF डाउनलोड करें',
            'process_another_btn': 'एक और PDF अनलॉक करें',
            'continue_to': 'जारी रखें...',
            'continue_description': 'आपकी अनलॉक की गई PDF तैयार है! किसी अन्य टूल के साथ संपादन जारी रखें:',

            // Why Choose Section
            'why_choose_title': 'हमारे PDF अनलॉकर का उपयोग क्यों करें',
            'why_choose_subtitle': 'अपने PDF दस्तावेज़ों को अनलॉक करने के लिए शक्तिशाली सुविधाएँ',
            'feature1_title': 'सुरक्षित पासवर्ड हटाना',
            'feature1_description': 'दस्तावेज़ सुरक्षा और अखंडता बनाए रखते हुए PDF फ़ाइलों से पासवर्ड सुरक्षा हटाएं।',
            'feature2_title': 'तेज़ प्रसंस्करण',
            'feature2_description': 'हमारे अनुकूलित प्रसंस्करण इंजन के साथ PDF फ़ाइलों को जल्दी से अनलॉक करें। कोई लंबा प्रतीक्षा समय नहीं।',
            'feature3_title': 'पूर्ण दस्तावेज़ पहुंच',
            'feature3_description': 'टेक्स्ट, छवियों और स्वरूपण सहित अपने PDF दस्तावेज़ों तक पूर्ण पहुंच पुनः प्राप्त करें।',
            'feature4_title': 'गोपनीयता की गारंटी',
            'feature4_description': 'आपकी फ़ाइलें आपके डिवाइस पर सुरक्षित रूप से संसाधित की जाती हैं। हम कभी भी आपके दस्तावेज़ों को संग्रहीत या एक्सेस नहीं करते हैं।',

            // How It Works
            'how_it_works_title': 'PDF फ़ाइलों को अनलॉक कैसे करें',
            'how_it_works_subtitle': 'पासवर्ड सुरक्षा हटाने के लिए सरल चरण',
            'step1_title': 'PDF अपलोड करें',
            'step1_description': 'अपनी पासवर्ड-संरक्षित PDF फ़ाइल चुनें या इसे अपलोड क्षेत्र में ड्रैग और ड्रॉप करें।',
            'step2_title': 'पासवर्ड दर्ज करें',
            'step2_description': 'अनलॉक प्रक्रिया को अधिकृत करने के लिए PDF फ़ाइल का वर्तमान पासवर्ड प्रदान करें।',
            'step3_title': 'अनलॉक करें और डाउनलोड करें',
            'step3_description': 'अनलॉक पर क्लिक करें और पासवर्ड सुरक्षा के बिना अपनी PDF फ़ाइल डाउनलोड करें।',

            // FAQ
            'faq_title': 'अक्सर पूछे जाने वाले प्रश्न',
            'faq_subtitle': 'PDF फ़ाइलों को अनलॉक करने के बारे में आपको जो कुछ भी जानने की आवश्यकता है',
            'faq1_question': 'क्या PDF फ़ाइलों को अनलॉक करना कानूनी है?',
            'faq1_answer': 'हां, उन PDF फ़ाइलों को अनलॉक करना कानूनी है जो आपके पास हैं या जिन्हें संशोधित करने की अनुमति है। हमारा टूल उपयोगकर्ताओं को उनके अपने दस्तावेज़ों तक पहुंच पुनः प्राप्त करने में मदद करने के लिए डिज़ाइन किया गया है जब उन्होंने पासवर्ड भुला दिया हो या वैध उद्देश्यों के लिए प्रतिबंध हटाने की आवश्यकता हो।',
            'faq2_question': 'किस प्रकार के PDF पासवर्ड हटाए जा सकते हैं?',
            'faq2_answer': 'हमारा टूल उपयोगकर्ता पासवर्ड (जो फ़ाइल खोलने को प्रतिबंधित करते हैं) और स्वामी पासवर्ड (जो मुद्रण, संपादन या सामग्री की प्रतिलिपि बनाने को प्रतिबंधित करते हैं) दोनों को हटा सकता है। फ़ाइल को अनलॉक करने के लिए आपको मूल पासवर्ड जानना होगा।',
            'faq3_question': 'क्या अनलॉक प्रक्रिया के दौरान मेरी फ़ाइलें सुरक्षित हैं?',
            'faq3_answer': 'बिल्कुल। सभी प्रसंस्करण आपके ब्राउज़र में स्थानीय रूप से होता है। आपकी फ़ाइलें कभी भी आपके डिवाइस को नहीं छोड़तीं और किसी भी सर्वर पर अपलोड नहीं की जाती हैं। हम गोपनीयता और सुरक्षा को बहुत गंभीरता से लेते हैं।',
            'faq4_question': 'यदि मुझे PDF पासवर्ड नहीं पता है तो क्या होगा?',
            'faq4_answer': 'हमारे टूल को PDF को अनलॉक करने के लिए मूल पासवर्ड की आवश्यकता होती है। यदि आप पासवर्ड भूल गए हैं, तो आपको दस्तावेज़ के स्वामी से संपर्क करने या विशेष पासवर्ड पुनर्प्राप्ति उपकरणों का उपयोग करने की आवश्यकता हो सकती है (जो हम प्रदान नहीं करते हैं)।',
            'faq5_question': 'क्या PDF को अनलॉक करने के लिए फ़ाइल आकार की सीमा है?',
            'faq5_answer': 'हां, अनलॉक करने के लिए अधिकतम फ़ाइल आकार प्रति फ़ाइल 50MB है। यह सभी उपयोगकर्ताओं के लिए इष्टतम प्रदर्शन और प्रसंस्करण गति सुनिश्चित करता है।',

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
    // Get saved language or default to English
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    loadLanguage(savedLang);

    // Update current language display
    const currentLang = languages.find(l => l.code === savedLang);
    if (currentLang) {
        const currentFlagEl = document.getElementById('currentFlag');
        const currentLangEl = document.getElementById('currentLang');
        if (currentFlagEl) currentFlagEl.textContent = currentLang.flag;
        if (currentLangEl) currentLangEl.textContent = currentLang.name;
    }

    // Language dropdown functionality
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageMenu = document.getElementById('languageMenu');

    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.classList.toggle('open');
        });
    }

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (languageDropdown && !languageDropdown.contains(e.target)) {
            languageDropdown.classList.remove('open');
        }
    });

    // Language selection
    if (languageMenu) {
        languageMenu.addEventListener('click', function(e) {
            const langItem = e.target.closest('.language-item');
            if (langItem) {
                const langCode = langItem.getAttribute('data-lang');
                const langData = languages.find(l => l.code === langCode);

                if (langData) {
                    // Update current language display
                    const currentFlagEl = document.getElementById('currentFlag');
                    const currentLangEl = document.getElementById('currentLang');
                    if (currentFlagEl) currentFlagEl.textContent = langData.flag;
                    if (currentLangEl) currentLangEl.textContent = langData.name;

                    // Load new language
                    loadLanguage(langCode);

                    // Close dropdown
                    if (languageDropdown) {
                        languageDropdown.classList.remove('open');
                    }
                }
            }
        });
    }
}

// Check if DOM is already loaded, if so initialize immediately, otherwise wait
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTranslations);
} else {
    // DOM is already loaded, initialize immediately
    initializeTranslations();
}
