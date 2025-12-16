// Translation system for compare-pdf.html
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
            'breadcrumb_current': 'Compare PDF',
            'page_title': 'Compare PDF Files',
            'page_description': 'Compare two PDF files side-by-side or with overlay mode. Instantly identify differences and changes between documents.',
            'feature_side_by_side': 'Side-by-side comparison',
            'feature_overlay': 'Overlay mode with slider',
            'feature_secure': '100% secure & private',
            'feature_instant': 'Instant comparison',
            'security_badge': 'Your files are processed locally in your browser. They never leave your device.',

            // Upload Section
            'original_pdf': 'Original PDF',
            'modified_pdf': 'Modified PDF',
            'click_select_first': 'Click to select first PDF',
            'click_select_second': 'Click to select second PDF',
            'max_size': 'Max 50MB',
            'btn_change': 'Change',
            'btn_remove': 'Remove',
            'btn_compare': 'Compare PDFs',
            'btn_clear_all': 'Clear All Files',

            // Loading & Comparison
            'comparing_pdfs': 'Comparing PDFs...',
            'mode_side_by_side': 'Side by Side',
            'mode_overlay': 'Overlay',
            'btn_previous': 'Previous',
            'btn_next': 'Next',
            'page_of': 'Page',
            'of': 'of',
            'btn_close_upload': 'Close & Upload New Files',
            'panel_original': 'Original PDF',
            'panel_modified': 'Modified PDF',
            'differences': 'differences',

            // Success State
            'success_title': 'Comparison Completed!',
            'success_description': 'Your PDFs have been compared successfully',
            'btn_download_report': 'Download Report',
            'btn_compare_another': 'Compare Another',
            'continue_with': 'Continue with...',

            // Footer
            'language': 'Language',
            'footer_description': 'Next-generation document processing platform. Fast, secure, and always free.',
            'footer_tools': 'Tools',
            'footer_support': 'Support',
            'footer_rights': 'All rights reserved.'
        },
        'es': {
            'nav_tools': 'Herramientas', 'nav_features': 'Caracteristicas', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Iniciar Sesion', 'btn_signup': 'Registrarse', 'btn_profile': 'Perfil', 'btn_logout': 'Cerrar Sesion',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Comparar PDF', 'page_title': 'Comparar Archivos PDF',
            'page_description': 'Compare dos archivos PDF lado a lado o con modo de superposicion. Identifique instantaneamente las diferencias y cambios entre documentos.',
            'feature_side_by_side': 'Comparacion lado a lado', 'feature_overlay': 'Modo de superposicion con control deslizante', 'feature_secure': '100% seguro y privado', 'feature_instant': 'Comparacion instantanea',
            'security_badge': 'Sus archivos se procesan localmente en su navegador. Nunca salen de su dispositivo.',
            'original_pdf': 'PDF Original', 'modified_pdf': 'PDF Modificado',
            'click_select_first': 'Haga clic para seleccionar el primer PDF', 'click_select_second': 'Haga clic para seleccionar el segundo PDF',
            'max_size': 'Max 50MB', 'btn_change': 'Cambiar', 'btn_remove': 'Eliminar',
            'btn_compare': 'Comparar PDFs', 'btn_clear_all': 'Borrar Todos los Archivos',
            'comparing_pdfs': 'Comparando PDFs...', 'mode_side_by_side': 'Lado a Lado', 'mode_overlay': 'Superposicion',
            'btn_previous': 'Anterior', 'btn_next': 'Siguiente', 'page_of': 'Pagina', 'of': 'de',
            'btn_close_upload': 'Cerrar y Subir Nuevos Archivos', 'panel_original': 'PDF Original', 'panel_modified': 'PDF Modificado', 'differences': 'diferencias',
            'success_title': 'Comparacion Completada!', 'success_description': 'Sus PDFs han sido comparados exitosamente',
            'btn_download_report': 'Descargar Informe', 'btn_compare_another': 'Comparar Otro', 'continue_with': 'Continuar con...',
            'language': 'Idioma', 'footer_description': 'Plataforma de procesamiento de documentos de proxima generacion. Rapida, segura y siempre gratuita.', 'footer_tools': 'Herramientas', 'footer_support': 'Soporte', 'footer_rights': 'Todos los derechos reservados.'
        },
        'fr': {
            'nav_tools': 'Outils', 'nav_features': 'Fonctionnalites', 'nav_how_it_works': 'Comment Ca Marche', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Connexion', 'btn_signup': 'S\'inscrire', 'btn_profile': 'Profil', 'btn_logout': 'Deconnexion',
            'breadcrumb_home': 'Accueil', 'breadcrumb_current': 'Comparer PDF', 'page_title': 'Comparer des Fichiers PDF',
            'page_description': 'Comparez deux fichiers PDF cote a cote ou en mode superposition. Identifiez instantanement les differences et les changements entre les documents.',
            'feature_side_by_side': 'Comparaison cote a cote', 'feature_overlay': 'Mode superposition avec curseur', 'feature_secure': '100% securise et prive', 'feature_instant': 'Comparaison instantanee',
            'security_badge': 'Vos fichiers sont traites localement dans votre navigateur. Ils ne quittent jamais votre appareil.',
            'original_pdf': 'PDF Original', 'modified_pdf': 'PDF Modifie',
            'click_select_first': 'Cliquez pour selectionner le premier PDF', 'click_select_second': 'Cliquez pour selectionner le deuxieme PDF',
            'max_size': 'Max 50Mo', 'btn_change': 'Changer', 'btn_remove': 'Supprimer',
            'btn_compare': 'Comparer les PDFs', 'btn_clear_all': 'Effacer Tous les Fichiers',
            'comparing_pdfs': 'Comparaison des PDFs...', 'mode_side_by_side': 'Cote a Cote', 'mode_overlay': 'Superposition',
            'btn_previous': 'Precedent', 'btn_next': 'Suivant', 'page_of': 'Page', 'of': 'de',
            'btn_close_upload': 'Fermer et Telecharger de Nouveaux Fichiers', 'panel_original': 'PDF Original', 'panel_modified': 'PDF Modifie', 'differences': 'differences',
            'success_title': 'Comparaison Terminee!', 'success_description': 'Vos PDFs ont ete compares avec succes',
            'btn_download_report': 'Telecharger le Rapport', 'btn_compare_another': 'Comparer un Autre', 'continue_with': 'Continuer avec...',
            'language': 'Langue', 'footer_description': 'Plateforme de traitement de documents de nouvelle generation. Rapide, securisee et toujours gratuite.', 'footer_tools': 'Outils', 'footer_support': 'Support', 'footer_rights': 'Tous droits reserves.'
        },
        'de': {
            'nav_tools': 'Werkzeuge', 'nav_features': 'Funktionen', 'nav_how_it_works': 'Wie es Funktioniert', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Anmelden', 'btn_signup': 'Registrieren', 'btn_profile': 'Profil', 'btn_logout': 'Abmelden',
            'breadcrumb_home': 'Startseite', 'breadcrumb_current': 'PDF Vergleichen', 'page_title': 'PDF-Dateien Vergleichen',
            'page_description': 'Vergleichen Sie zwei PDF-Dateien nebeneinander oder im Uberlagerungsmodus. Identifizieren Sie sofort Unterschiede und Anderungen zwischen Dokumenten.',
            'feature_side_by_side': 'Nebeneinander-Vergleich', 'feature_overlay': 'Uberlagerungsmodus mit Schieberegler', 'feature_secure': '100% sicher & privat', 'feature_instant': 'Sofortiger Vergleich',
            'security_badge': 'Ihre Dateien werden lokal in Ihrem Browser verarbeitet. Sie verlassen niemals Ihr Gerat.',
            'original_pdf': 'Original-PDF', 'modified_pdf': 'Geanderte PDF',
            'click_select_first': 'Klicken Sie, um die erste PDF auszuwahlen', 'click_select_second': 'Klicken Sie, um die zweite PDF auszuwahlen',
            'max_size': 'Max 50MB', 'btn_change': 'Andern', 'btn_remove': 'Entfernen',
            'btn_compare': 'PDFs Vergleichen', 'btn_clear_all': 'Alle Dateien Loschen',
            'comparing_pdfs': 'PDFs werden verglichen...', 'mode_side_by_side': 'Nebeneinander', 'mode_overlay': 'Uberlagerung',
            'btn_previous': 'Zuruck', 'btn_next': 'Weiter', 'page_of': 'Seite', 'of': 'von',
            'btn_close_upload': 'Schliessen & Neue Dateien Hochladen', 'panel_original': 'Original-PDF', 'panel_modified': 'Geanderte PDF', 'differences': 'Unterschiede',
            'success_title': 'Vergleich Abgeschlossen!', 'success_description': 'Ihre PDFs wurden erfolgreich verglichen',
            'btn_download_report': 'Bericht Herunterladen', 'btn_compare_another': 'Weitere Vergleichen', 'continue_with': 'Weiter mit...',
            'language': 'Sprache', 'footer_description': 'Dokumentenverarbeitungsplattform der nachsten Generation. Schnell, sicher und immer kostenlos.', 'footer_tools': 'Werkzeuge', 'footer_support': 'Support', 'footer_rights': 'Alle Rechte vorbehalten.'
        },
        'it': {
            'nav_tools': 'Strumenti', 'nav_features': 'Caratteristiche', 'nav_how_it_works': 'Come Funziona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Accedi', 'btn_signup': 'Registrati', 'btn_profile': 'Profilo', 'btn_logout': 'Esci',
            'breadcrumb_home': 'Home', 'breadcrumb_current': 'Confronta PDF', 'page_title': 'Confronta File PDF',
            'page_description': 'Confronta due file PDF affiancati o in modalita sovrapposizione. Identifica istantaneamente differenze e modifiche tra i documenti.',
            'feature_side_by_side': 'Confronto affiancato', 'feature_overlay': 'Modalita sovrapposizione con cursore', 'feature_secure': '100% sicuro e privato', 'feature_instant': 'Confronto istantaneo',
            'security_badge': 'I tuoi file vengono elaborati localmente nel tuo browser. Non lasciano mai il tuo dispositivo.',
            'original_pdf': 'PDF Originale', 'modified_pdf': 'PDF Modificato',
            'click_select_first': 'Clicca per selezionare il primo PDF', 'click_select_second': 'Clicca per selezionare il secondo PDF',
            'max_size': 'Max 50MB', 'btn_change': 'Cambia', 'btn_remove': 'Rimuovi',
            'btn_compare': 'Confronta PDFs', 'btn_clear_all': 'Cancella Tutti i File',
            'comparing_pdfs': 'Confronto PDFs...', 'mode_side_by_side': 'Affiancato', 'mode_overlay': 'Sovrapposizione',
            'btn_previous': 'Precedente', 'btn_next': 'Successivo', 'page_of': 'Pagina', 'of': 'di',
            'btn_close_upload': 'Chiudi e Carica Nuovi File', 'panel_original': 'PDF Originale', 'panel_modified': 'PDF Modificato', 'differences': 'differenze',
            'success_title': 'Confronto Completato!', 'success_description': 'I tuoi PDFs sono stati confrontati con successo',
            'btn_download_report': 'Scarica Rapporto', 'btn_compare_another': 'Confronta un Altro', 'continue_with': 'Continua con...',
            'language': 'Lingua', 'footer_description': 'Piattaforma di elaborazione documenti di nuova generazione. Veloce, sicura e sempre gratuita.', 'footer_tools': 'Strumenti', 'footer_support': 'Supporto', 'footer_rights': 'Tutti i diritti riservati.'
        },
        'tr': {
            'nav_tools': 'Araclar', 'nav_features': 'Ozellikler', 'nav_how_it_works': 'Nasil Calisir', 'nav_blog': 'Blog', 'nav_faq': 'SSS',
            'btn_login': 'Giris Yap', 'btn_signup': 'Kayit Ol', 'btn_profile': 'Profil', 'btn_logout': 'Cikis Yap',
            'breadcrumb_home': 'Ana Sayfa', 'breadcrumb_current': 'PDF Karsilastir', 'page_title': 'PDF Dosyalarini Karsilastir',
            'page_description': 'Iki PDF dosyasini yan yana veya bindirme moduyla karsilastirin. Belgeler arasindaki farklari ve degisiklikleri aninda belirleyin.',
            'feature_side_by_side': 'Yan yana karsilastirma', 'feature_overlay': 'Kaydiricili bindirme modu', 'feature_secure': '%100 guvenli ve ozel', 'feature_instant': 'Anlik karsilastirma',
            'security_badge': 'Dosyalariniz tarayicinizda yerel olarak islenir. Asla cihazinizdan ayrilmazlar.',
            'original_pdf': 'Orijinal PDF', 'modified_pdf': 'Degistirilmis PDF',
            'click_select_first': 'Ilk PDF\'yi secmek icin tiklayin', 'click_select_second': 'Ikinci PDF\'yi secmek icin tiklayin',
            'max_size': 'Maks 50MB', 'btn_change': 'Degistir', 'btn_remove': 'Kaldir',
            'btn_compare': 'PDF\'leri Karsilastir', 'btn_clear_all': 'Tum Dosyalari Temizle',
            'comparing_pdfs': 'PDF\'ler karsilastiriliyor...', 'mode_side_by_side': 'Yan Yana', 'mode_overlay': 'Bindirme',
            'btn_previous': 'Onceki', 'btn_next': 'Sonraki', 'page_of': 'Sayfa', 'of': '/',
            'btn_close_upload': 'Kapat ve Yeni Dosyalar Yukle', 'panel_original': 'Orijinal PDF', 'panel_modified': 'Degistirilmis PDF', 'differences': 'fark',
            'success_title': 'Karsilastirma Tamamlandi!', 'success_description': 'PDF\'leriniz basariyla karsilastirildi',
            'btn_download_report': 'Raporu Indir', 'btn_compare_another': 'Baskasini Karsilastir', 'continue_with': 'Devam et...',
            'language': 'Dil', 'footer_description': 'Yeni nesil belge isleme platformu. Hizli, guvenli ve her zaman ucretsiz.', 'footer_tools': 'Araclar', 'footer_support': 'Destek', 'footer_rights': 'Tum haklari saklidir.'
        },
        'pt': {
            'nav_tools': 'Ferramentas', 'nav_features': 'Recursos', 'nav_how_it_works': 'Como Funciona', 'nav_blog': 'Blog', 'nav_faq': 'FAQ',
            'btn_login': 'Entrar', 'btn_signup': 'Cadastrar', 'btn_profile': 'Perfil', 'btn_logout': 'Sair',
            'breadcrumb_home': 'Inicio', 'breadcrumb_current': 'Comparar PDF', 'page_title': 'Comparar Arquivos PDF',
            'page_description': 'Compare dois arquivos PDF lado a lado ou no modo de sobreposicao. Identifique instantaneamente diferencas e alteracoes entre documentos.',
            'feature_side_by_side': 'Comparacao lado a lado', 'feature_overlay': 'Modo de sobreposicao com controle deslizante', 'feature_secure': '100% seguro e privado', 'feature_instant': 'Comparacao instantanea',
            'security_badge': 'Seus arquivos sao processados localmente em seu navegador. Eles nunca saem do seu dispositivo.',
            'original_pdf': 'PDF Original', 'modified_pdf': 'PDF Modificado',
            'click_select_first': 'Clique para selecionar o primeiro PDF', 'click_select_second': 'Clique para selecionar o segundo PDF',
            'max_size': 'Max 50MB', 'btn_change': 'Alterar', 'btn_remove': 'Remover',
            'btn_compare': 'Comparar PDFs', 'btn_clear_all': 'Limpar Todos os Arquivos',
            'comparing_pdfs': 'Comparando PDFs...', 'mode_side_by_side': 'Lado a Lado', 'mode_overlay': 'Sobreposicao',
            'btn_previous': 'Anterior', 'btn_next': 'Proximo', 'page_of': 'Pagina', 'of': 'de',
            'btn_close_upload': 'Fechar e Carregar Novos Arquivos', 'panel_original': 'PDF Original', 'panel_modified': 'PDF Modificado', 'differences': 'diferencas',
            'success_title': 'Comparacao Concluida!', 'success_description': 'Seus PDFs foram comparados com sucesso',
            'btn_download_report': 'Baixar Relatorio', 'btn_compare_another': 'Comparar Outro', 'continue_with': 'Continuar com...',
            'language': 'Idioma', 'footer_description': 'Plataforma de processamento de documentos de proxima geracao. Rapida, segura e sempre gratuita.', 'footer_tools': 'Ferramentas', 'footer_support': 'Suporte', 'footer_rights': 'Todos os direitos reservados.'
        },
        'ru': {
            'nav_tools': 'Инструменты', 'nav_features': 'Возможности', 'nav_how_it_works': 'Как это работает', 'nav_blog': 'Блог', 'nav_faq': 'FAQ',
            'btn_login': 'Войти', 'btn_signup': 'Регистрация', 'btn_profile': 'Профиль', 'btn_logout': 'Выйти',
            'breadcrumb_home': 'Главная', 'breadcrumb_current': 'Сравнить PDF', 'page_title': 'Сравнить PDF-файлы',
            'page_description': 'Сравните два PDF-файла бок о бок или в режиме наложения. Мгновенно выявляйте различия и изменения между документами.',
            'feature_side_by_side': 'Сравнение бок о бок', 'feature_overlay': 'Режим наложения с ползунком', 'feature_secure': '100% безопасно и конфиденциально', 'feature_instant': 'Мгновенное сравнение',
            'security_badge': 'Ваши файлы обрабатываются локально в вашем браузере. Они никогда не покидают ваше устройство.',
            'original_pdf': 'Оригинальный PDF', 'modified_pdf': 'Измененный PDF',
            'click_select_first': 'Нажмите, чтобы выбрать первый PDF', 'click_select_second': 'Нажмите, чтобы выбрать второй PDF',
            'max_size': 'Макс 50МБ', 'btn_change': 'Изменить', 'btn_remove': 'Удалить',
            'btn_compare': 'Сравнить PDF', 'btn_clear_all': 'Очистить все файлы',
            'comparing_pdfs': 'Сравнение PDF...', 'mode_side_by_side': 'Бок о бок', 'mode_overlay': 'Наложение',
            'btn_previous': 'Назад', 'btn_next': 'Далее', 'page_of': 'Страница', 'of': 'из',
            'btn_close_upload': 'Закрыть и загрузить новые файлы', 'panel_original': 'Оригинальный PDF', 'panel_modified': 'Измененный PDF', 'differences': 'различий',
            'success_title': 'Сравнение завершено!', 'success_description': 'Ваши PDF-файлы успешно сравнены',
            'btn_download_report': 'Скачать отчет', 'btn_compare_another': 'Сравнить другой', 'continue_with': 'Продолжить с...',
            'language': 'Язык', 'footer_description': 'Платформа обработки документов нового поколения. Быстрая, безопасная и всегда бесплатная.', 'footer_tools': 'Инструменты', 'footer_support': 'Поддержка', 'footer_rights': 'Все права защищены.'
        },
        'zh': {
            'nav_tools': '工具', 'nav_features': '特点', 'nav_how_it_works': '如何运作', 'nav_blog': '博客', 'nav_faq': '常见问题',
            'btn_login': '登录', 'btn_signup': '注册', 'btn_profile': '个人资料', 'btn_logout': '退出',
            'breadcrumb_home': '首页', 'breadcrumb_current': '比较PDF', 'page_title': '比较PDF文件',
            'page_description': '并排或叠加模式比较两个PDF文件。即时识别文档之间的差异和变化。',
            'feature_side_by_side': '并排比较', 'feature_overlay': '带滑块的叠加模式', 'feature_secure': '100%安全私密', 'feature_instant': '即时比较',
            'security_badge': '您的文件在浏览器中本地处理。它们永远不会离开您的设备。',
            'original_pdf': '原始PDF', 'modified_pdf': '修改后的PDF',
            'click_select_first': '点击选择第一个PDF', 'click_select_second': '点击选择第二个PDF',
            'max_size': '最大50MB', 'btn_change': '更改', 'btn_remove': '删除',
            'btn_compare': '比较PDF', 'btn_clear_all': '清除所有文件',
            'comparing_pdfs': '正在比较PDF...', 'mode_side_by_side': '并排', 'mode_overlay': '叠加',
            'btn_previous': '上一页', 'btn_next': '下一页', 'page_of': '页', 'of': '/',
            'btn_close_upload': '关闭并上传新文件', 'panel_original': '原始PDF', 'panel_modified': '修改后的PDF', 'differences': '个差异',
            'success_title': '比较完成！', 'success_description': '您的PDF文件已成功比较',
            'btn_download_report': '下载报告', 'btn_compare_another': '比较另一个', 'continue_with': '继续...',
            'language': '语言', 'footer_description': '新一代文档处理平台。快速、安全、始终免费。', 'footer_tools': '工具', 'footer_support': '支持', 'footer_rights': '版权所有。'
        },
        'ja': {
            'nav_tools': 'ツール', 'nav_features': '機能', 'nav_how_it_works': '使い方', 'nav_blog': 'ブログ', 'nav_faq': 'よくある質問',
            'btn_login': 'ログイン', 'btn_signup': '登録', 'btn_profile': 'プロフィール', 'btn_logout': 'ログアウト',
            'breadcrumb_home': 'ホーム', 'breadcrumb_current': 'PDF比較', 'page_title': 'PDFファイルを比較',
            'page_description': '2つのPDFファイルを横並びまたはオーバーレイモードで比較します。ドキュメント間の差異と変更を即座に特定します。',
            'feature_side_by_side': '横並び比較', 'feature_overlay': 'スライダー付きオーバーレイモード', 'feature_secure': '100%安全でプライベート', 'feature_instant': '即座に比較',
            'security_badge': 'ファイルはブラウザ内でローカルに処理されます。デバイスから出ることはありません。',
            'original_pdf': '元のPDF', 'modified_pdf': '変更後のPDF',
            'click_select_first': 'クリックして最初のPDFを選択', 'click_select_second': 'クリックして2番目のPDFを選択',
            'max_size': '最大50MB', 'btn_change': '変更', 'btn_remove': '削除',
            'btn_compare': 'PDFを比較', 'btn_clear_all': 'すべてのファイルをクリア',
            'comparing_pdfs': 'PDFを比較中...', 'mode_side_by_side': '横並び', 'mode_overlay': 'オーバーレイ',
            'btn_previous': '前へ', 'btn_next': '次へ', 'page_of': 'ページ', 'of': '/',
            'btn_close_upload': '閉じて新しいファイルをアップロード', 'panel_original': '元のPDF', 'panel_modified': '変更後のPDF', 'differences': '件の差異',
            'success_title': '比較完了！', 'success_description': 'PDFが正常に比較されました',
            'btn_download_report': 'レポートをダウンロード', 'btn_compare_another': '別のファイルを比較', 'continue_with': '続行...',
            'language': '言語', 'footer_description': '次世代ドキュメント処理プラットフォーム。高速、安全、常に無料。', 'footer_tools': 'ツール', 'footer_support': 'サポート', 'footer_rights': '全著作権所有。'
        },
        'ar': {
            'nav_tools': 'الأدوات', 'nav_features': 'الميزات', 'nav_how_it_works': 'كيف يعمل', 'nav_blog': 'المدونة', 'nav_faq': 'الأسئلة الشائعة',
            'btn_login': 'تسجيل الدخول', 'btn_signup': 'التسجيل', 'btn_profile': 'الملف الشخصي', 'btn_logout': 'تسجيل الخروج',
            'breadcrumb_home': 'الصفحة الرئيسية', 'breadcrumb_current': 'مقارنة PDF', 'page_title': 'مقارنة ملفات PDF',
            'page_description': 'قارن ملفين PDF جنباً إلى جنب أو في وضع التراكب. حدد الاختلافات والتغييرات بين المستندات فوراً.',
            'feature_side_by_side': 'مقارنة جنباً إلى جنب', 'feature_overlay': 'وضع التراكب مع شريط التمرير', 'feature_secure': 'آمن وخاص 100%', 'feature_instant': 'مقارنة فورية',
            'security_badge': 'تتم معالجة ملفاتك محلياً في متصفحك. لا تغادر جهازك أبداً.',
            'original_pdf': 'PDF الأصلي', 'modified_pdf': 'PDF المعدل',
            'click_select_first': 'انقر لتحديد PDF الأول', 'click_select_second': 'انقر لتحديد PDF الثاني',
            'max_size': 'الحد الأقصى 50 ميجابايت', 'btn_change': 'تغيير', 'btn_remove': 'إزالة',
            'btn_compare': 'مقارنة PDF', 'btn_clear_all': 'مسح جميع الملفات',
            'comparing_pdfs': 'جاري مقارنة PDF...', 'mode_side_by_side': 'جنباً إلى جنب', 'mode_overlay': 'تراكب',
            'btn_previous': 'السابق', 'btn_next': 'التالي', 'page_of': 'صفحة', 'of': 'من',
            'btn_close_upload': 'إغلاق وتحميل ملفات جديدة', 'panel_original': 'PDF الأصلي', 'panel_modified': 'PDF المعدل', 'differences': 'اختلافات',
            'success_title': 'اكتملت المقارنة!', 'success_description': 'تمت مقارنة ملفات PDF بنجاح',
            'btn_download_report': 'تنزيل التقرير', 'btn_compare_another': 'مقارنة ملف آخر', 'continue_with': 'متابعة مع...',
            'language': 'اللغة', 'footer_description': 'منصة معالجة المستندات من الجيل التالي. سريعة وآمنة ومجانية دائماً.', 'footer_tools': 'الأدوات', 'footer_support': 'الدعم', 'footer_rights': 'جميع الحقوق محفوظة.'
        },
        'hi': {
            'nav_tools': 'उपकरण', 'nav_features': 'विशेषताएं', 'nav_how_it_works': 'यह कैसे काम करता है', 'nav_blog': 'ब्लॉग', 'nav_faq': 'सामान्य प्रश्न',
            'btn_login': 'लॉगिन करें', 'btn_signup': 'साइन अप करें', 'btn_profile': 'प्रोफाइल', 'btn_logout': 'लॉगआउट',
            'breadcrumb_home': 'होम', 'breadcrumb_current': 'PDF तुलना करें', 'page_title': 'PDF फाइलों की तुलना करें',
            'page_description': 'दो PDF फाइलों की साथ-साथ या ओवरले मोड में तुलना करें। दस्तावेजों के बीच अंतर और परिवर्तनों की तुरंत पहचान करें।',
            'feature_side_by_side': 'साथ-साथ तुलना', 'feature_overlay': 'स्लाइडर के साथ ओवरले मोड', 'feature_secure': '100% सुरक्षित और निजी', 'feature_instant': 'तुरंत तुलना',
            'security_badge': 'आपकी फाइलें आपके ब्राउज़र में स्थानीय रूप से प्रोसेस होती हैं। वे कभी आपके डिवाइस से नहीं जातीं।',
            'original_pdf': 'मूल PDF', 'modified_pdf': 'संशोधित PDF',
            'click_select_first': 'पहला PDF चुनने के लिए क्लिक करें', 'click_select_second': 'दूसरा PDF चुनने के लिए क्लिक करें',
            'max_size': 'अधिकतम 50MB', 'btn_change': 'बदलें', 'btn_remove': 'हटाएं',
            'btn_compare': 'PDF तुलना करें', 'btn_clear_all': 'सभी फाइलें साफ करें',
            'comparing_pdfs': 'PDF तुलना हो रही है...', 'mode_side_by_side': 'साथ-साथ', 'mode_overlay': 'ओवरले',
            'btn_previous': 'पिछला', 'btn_next': 'अगला', 'page_of': 'पृष्ठ', 'of': 'का',
            'btn_close_upload': 'बंद करें और नई फाइलें अपलोड करें', 'panel_original': 'मूल PDF', 'panel_modified': 'संशोधित PDF', 'differences': 'अंतर',
            'success_title': 'तुलना पूर्ण!', 'success_description': 'आपकी PDF फाइलों की सफलतापूर्वक तुलना की गई',
            'btn_download_report': 'रिपोर्ट डाउनलोड करें', 'btn_compare_another': 'अन्य की तुलना करें', 'continue_with': 'जारी रखें...',
            'language': 'भाषा', 'footer_description': 'अगली पीढ़ी का दस्तावेज़ प्रसंस्करण प्लेटफॉर्म। तेज़, सुरक्षित और हमेशा मुफ्त।', 'footer_tools': 'उपकरण', 'footer_support': 'सहायता', 'footer_rights': 'सर्वाधिकार सुरक्षित।'
        }
    };

    return allTranslations[langCode] || allTranslations['en'];
}

function loadLanguage(langCode) {
    const translations = getTranslations(langCode);

    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[key]) {
            if (element.tagName === 'INPUT' && element.type !== 'submit' && element.type !== 'button') {
                element.placeholder = translations[key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[key];
            } else {
                element.textContent = translations[key];
            }
        }
    });

    localStorage.setItem('preferredLanguage', langCode);
}

document.addEventListener('DOMContentLoaded', function() {
    const languageBtn = document.getElementById('languageBtn');
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

    if (languageBtn) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageMenu.classList.toggle('active');
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
            languageMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', function() {
        if (languageMenu) languageMenu.classList.remove('active');
    });
});
