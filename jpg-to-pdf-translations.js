// Translation system for jpg-to-pdf.html
function getTranslations(langCode) {
    const allTranslations = {
        'en': {
            // How to Convert Section
            'how_to_convert_title': 'How to Convert JPG to PDF',
            'how_to_convert_subtitle': 'Simple 3-step process to create PDF from images',
            'step1_upload_title': 'Upload Images',
            'step1_upload_desc': 'Select or drag and drop your JPG files to get started',
            'step2_convert_title': 'Convert',
            'step2_convert_desc': 'Our tool automatically converts your images to PDF format',
            'step3_download_title': 'Download',
            'step3_download_desc': 'Get your professional PDF document instantly'
        },
        'es': {
            // How to Convert Section
            'how_to_convert_title': 'Cómo Convertir JPG a PDF',
            'how_to_convert_subtitle': 'Proceso simple de 3 pasos para crear PDF desde imágenes',
            'step1_upload_title': 'Subir Imágenes',
            'step1_upload_desc': 'Seleccione o arrastre y suelte sus archivos JPG para comenzar',
            'step2_convert_title': 'Convertir',
            'step2_convert_desc': 'Nuestra herramienta convierte automáticamente sus imágenes a formato PDF',
            'step3_download_title': 'Descargar',
            'step3_download_desc': 'Obtenga su documento PDF profesional al instante'
        },
        'fr': {
            // How to Convert Section
            'how_to_convert_title': 'Comment Convertir JPG en PDF',
            'how_to_convert_subtitle': 'Processus simple en 3 étapes pour créer un PDF à partir d\'images',
            'step1_upload_title': 'Télécharger des Images',
            'step1_upload_desc': 'Sélectionnez ou glissez-déposez vos fichiers JPG pour commencer',
            'step2_convert_title': 'Convertir',
            'step2_convert_desc': 'Notre outil convertit automatiquement vos images au format PDF',
            'step3_download_title': 'Télécharger',
            'step3_download_desc': 'Obtenez votre document PDF professionnel instantanément'
        },
        'de': {
            // How to Convert Section
            'how_to_convert_title': 'Wie man JPG in PDF Umwandelt',
            'how_to_convert_subtitle': 'Einfacher 3-Schritte-Prozess zur Erstellung von PDF aus Bildern',
            'step1_upload_title': 'Bilder Hochladen',
            'step1_upload_desc': 'Wählen Sie Ihre JPG-Dateien aus oder ziehen Sie sie per Drag & Drop, um zu beginnen',
            'step2_convert_title': 'Konvertieren',
            'step2_convert_desc': 'Unser Tool konvertiert Ihre Bilder automatisch in das PDF-Format',
            'step3_download_title': 'Herunterladen',
            'step3_download_desc': 'Erhalten Sie Ihr professionelles PDF-Dokument sofort'
        },
        'it': {
            // How to Convert Section
            'how_to_convert_title': 'Come Convertire JPG in PDF',
            'how_to_convert_subtitle': 'Semplice processo in 3 passaggi per creare PDF da immagini',
            'step1_upload_title': 'Carica Immagini',
            'step1_upload_desc': 'Seleziona o trascina e rilascia i tuoi file JPG per iniziare',
            'step2_convert_title': 'Converti',
            'step2_convert_desc': 'Il nostro strumento converte automaticamente le tue immagini in formato PDF',
            'step3_download_title': 'Scarica',
            'step3_download_desc': 'Ottieni il tuo documento PDF professionale istantaneamente'
        },
        'tr': {
            // How to Convert Section
            'how_to_convert_title': 'JPG\'yi PDF\'ye Nasıl Dönüştürülür',
            'how_to_convert_subtitle': 'Görüntülerden PDF oluşturmak için basit 3 adımlı süreç',
            'step1_upload_title': 'Görüntüleri Yükle',
            'step1_upload_desc': 'Başlamak için JPG dosyalarınızı seçin veya sürükleyip bırakın',
            'step2_convert_title': 'Dönüştür',
            'step2_convert_desc': 'Aracımız görüntülerinizi otomatik olarak PDF formatına dönüştürür',
            'step3_download_title': 'İndir',
            'step3_download_desc': 'Profesyonel PDF belgenizi anında alın'
        },
        'pt': {
            // How to Convert Section
            'how_to_convert_title': 'Como Converter JPG para PDF',
            'how_to_convert_subtitle': 'Processo simples de 3 etapas para criar PDF a partir de imagens',
            'step1_upload_title': 'Carregar Imagens',
            'step1_upload_desc': 'Selecione ou arraste e solte seus arquivos JPG para começar',
            'step2_convert_title': 'Converter',
            'step2_convert_desc': 'Nossa ferramenta converte automaticamente suas imagens para o formato PDF',
            'step3_download_title': 'Baixar',
            'step3_download_desc': 'Obtenha seu documento PDF profissional instantaneamente'
        },
        'ru': {
            // How to Convert Section
            'how_to_convert_title': 'Как Конвертировать JPG в PDF',
            'how_to_convert_subtitle': 'Простой процесс из 3 шагов для создания PDF из изображений',
            'step1_upload_title': 'Загрузить Изображения',
            'step1_upload_desc': 'Выберите или перетащите файлы JPG, чтобы начать',
            'step2_convert_title': 'Конвертировать',
            'step2_convert_desc': 'Наш инструмент автоматически конвертирует ваши изображения в формат PDF',
            'step3_download_title': 'Скачать',
            'step3_download_desc': 'Получите свой профессиональный PDF-документ мгновенно'
        },
        'zh': {
            // How to Convert Section
            'how_to_convert_title': '如何将JPG转换为PDF',
            'how_to_convert_subtitle': '简单的3步流程从图像创建PDF',
            'step1_upload_title': '上传图像',
            'step1_upload_desc': '选择或拖放您的JPG文件以开始',
            'step2_convert_title': '转换',
            'step2_convert_desc': '我们的工具会自动将您的图像转换为PDF格式',
            'step3_download_title': '下载',
            'step3_download_desc': '立即获取您的专业PDF文档'
        },
        'ja': {
            // How to Convert Section
            'how_to_convert_title': 'JPGをPDFに変換する方法',
            'how_to_convert_subtitle': '画像からPDFを作成するシンプルな3ステッププロセス',
            'step1_upload_title': '画像をアップロード',
            'step1_upload_desc': 'JPGファイルを選択またはドラッグ＆ドロップして開始',
            'step2_convert_title': '変換',
            'step2_convert_desc': '当社のツールは画像を自動的にPDF形式に変換します',
            'step3_download_title': 'ダウンロード',
            'step3_download_desc': 'プロフェッショナルなPDFドキュメントを即座に取得'
        },
        'ar': {
            // How to Convert Section
            'how_to_convert_title': 'كيفية تحويل JPG إلى PDF',
            'how_to_convert_subtitle': 'عملية بسيطة من 3 خطوات لإنشاء PDF من الصور',
            'step1_upload_title': 'تحميل الصور',
            'step1_upload_desc': 'حدد أو اسحب وأفلت ملفات JPG الخاصة بك للبدء',
            'step2_convert_title': 'تحويل',
            'step2_convert_desc': 'تقوم أداتنا بتحويل صورك تلقائياً إلى تنسيق PDF',
            'step3_download_title': 'تنزيل',
            'step3_download_desc': 'احصل على مستند PDF الاحترافي الخاص بك على الفور'
        },
        'hi': {
            // How to Convert Section
            'how_to_convert_title': 'JPG को PDF में कैसे बदलें',
            'how_to_convert_subtitle': 'छवियों से PDF बनाने के लिए सरल 3-चरणीय प्रक्रिया',
            'step1_upload_title': 'छवियां अपलोड करें',
            'step1_upload_desc': 'शुरू करने के लिए अपनी JPG फ़ाइलों का चयन करें या ड्रैग और ड्रॉप करें',
            'step2_convert_title': 'बदलें',
            'step2_convert_desc': 'हमारा टूल स्वचालित रूप से आपकी छवियों को PDF प्रारूप में परिवर्तित करता है',
            'step3_download_title': 'डाउनलोड करें',
            'step3_download_desc': 'अपना पेशेवर PDF दस्तावेज़ तुरंत प्राप्त करें'
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
                element.textContent = translations[key];
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
