// ============================================
// Main JavaScript File
// ============================================

// Translation content
const translations = {
    pageTitleHome: { ar: 'الحسين - صناعة الملابس الداخلية الفاخرة', en: 'Al-Hussein - Premium Underwear' },
    pageTitleProducts: { ar: 'المنتجات - الحسين', en: 'Products - Al-Hussein' },
    pageTitleAbout: { ar: 'عن الشركة - الحسين', en: 'About - Al-Hussein' },
    pageTitleContact: { ar: 'اتصل بنا - الحسين', en: 'Contact - Al-Hussein' },
    languageLabel: { ar: 'اللغة', en: 'Language' },
    themeLabel: { ar: 'لون الموقع', en: 'Site color' },
    langAr: { ar: 'العربية', en: 'Arabic' },
    langEn: { ar: 'الإنجليزية', en: 'English' },
    defaultTheme: { ar: 'افتراضي', en: 'Default' },
    blueTheme: { ar: 'أزرق', en: 'Blue' },
    greenTheme: { ar: 'أخضر', en: 'Green' },
    warmTheme: { ar: 'دافئ', en: 'Warm' },
    homeText: { ar: 'الرئيسية', en: 'Home' },
    productsText: { ar: 'المنتجات', en: 'Products' },
    aboutText: { ar: 'عن الشركة', en: 'About' },
    contactText: { ar: 'اتصل بنا', en: 'Contact' },
    heroHeading: { ar: 'مرحباً بك في الحسين', en: 'Welcome to Al-Hussein' },
    heroText: { ar: 'نحن نصنع أفضل الملابس الداخلية بأعلى معايير الجودة', en: 'We craft premium underwear with top quality.' },
    heroButton: { ar: 'استكشف المنتجات', en: 'Explore Products' },
    featuresTitle: { ar: 'لماذا تختار الحسين؟', en: 'Why choose Al-Hussein?' },
    feature1Title: { ar: 'جودة عالية', en: 'High Quality' },
    feature1Text: { ar: 'نستخدم أفضل الخامات والمواد الطبيعية المستوردة', en: 'We use the best imported natural materials.' },
    feature2Title: { ar: 'راحة فائقة', en: 'Superior Comfort' },
    feature2Text: { ar: 'تصاميم مريحة وأنيقة تناسب جميع الأذواق', en: 'Comfortable, stylish designs for every taste.' },
    feature3Title: { ar: 'صناعة حرفية', en: 'Craftsmanship' },
    feature3Text: { ar: 'كل منتج يتم صنعه بعناية ودقة عالية', en: 'Every product is crafted with care and precision.' },
    feature4Title: { ar: 'صديقة للبيئة', en: 'Eco Friendly' },
    feature4Text: { ar: 'نستخدم مواد صديقة للبيئة ومستدامة', en: 'We use eco-friendly, sustainable materials.' },
    brandName: { ar: 'الحسين', en: 'Al-Hussein' },
    brandTagline: { ar: 'جودة وأناقة في كل التفاصيل', en: 'Quality and elegance in every detail' },
    featuredProductsTitle: { ar: 'المنتجات المميزة', en: 'Featured Products' },
    testimonialsTitle: { ar: 'آراء العملاء', en: 'Customer Reviews' },
    testimonialText1: { ar: '"منتجات رائعة وجودة عالية جداً. أنا راضي جداً عن الشراء"', en: '"Great products and very high quality. I am very satisfied with the purchase."' },
    testimonialAuthor1: { ar: '- عكيد حي صلاح الدين', en: '- Akid of Salah al-Din' },
    testimonialText2: { ar: '"الخدمة والجودة ممتازة. أوصي الجميع بالشراء من الحسين"', en: '"The service and quality are excellent. I recommend everyone to buy from Al-Hussein."' },
    testimonialAuthor2: { ar: '- ابو اصطيف الفوال', en: '- Abu Istif Al-Fawwal' },
    testimonialText3: { ar: '"أفضل ملابس داخلية جربتها. تستحق السعر تماماً"', en: '"The best underwear I have tried. Worth the price fully."' },
    testimonialAuthor3: { ar: '- أبو علي صكيك', en: '- Abu Ali Sakik' },
    productCardTitleMen: { ar: 'ملابس داخلية رجالية', en: 'Men’s Underwear' },
    productClassicTitle: { ar: 'ملابس داخلية رجالية - كلاسيكية', en: 'Men’s Classic Underwear' },
    productLuxuryTitle: { ar: 'ملابس داخلية رجالية - فاخرة', en: 'Men’s Luxury Underwear' },
    productSportTitle: { ar: 'ملابس داخلية رجالية - رياضية', en: 'Men’s Sports Underwear' },
    womenElegantTitle: { ar: 'ملابس داخلية نسائية - أنيقة', en: 'Women’s Elegant Underwear' },
    womenRoyalTitle: { ar: 'ملابس داخلية نسائية - ملكية', en: 'Women’s Royal Underwear' },
    womenFloralTitle: { ar: 'ملابس داخلية نسائية - زهرية', en: 'Women’s Floral Underwear' },
    kidsGirlsTitle: { ar: 'ملابس داخلية أطفال - بنات', en: 'Kids’ Girls Underwear' },
    kidsBoysTitle: { ar: 'ملابس داخلية أطفال - أولاد', en: 'Kids’ Boys Underwear' },
    kidsSkyTitle: { ar: 'ملابس داخلية أطفال - سماوية', en: 'Kids’ Sky Underwear' },
    addToCart: { ar: 'أضف للسلة', en: 'Add to cart' },
    currencyLabel: { ar: 'ل.س', en: 'SYP' },
    productCardTitleWomen: { ar: 'ملابس داخلية نسائية', en: 'Women’s Underwear' },
    productCardTitleKids: { ar: 'ملابس داخلية أطفال', en: 'Kids’ Underwear' },
    productDetailsClassic: { ar: 'مصنوعة من أفضل الأقمشة القطنية', en: 'Made from premium cotton fabrics.' },
    productDetailsLuxury: { ar: 'تصميم عصري مع خيوط مرنة', en: 'Modern design with stretch stitching.' },
    productDetailsSport: { ar: 'خفيفة وتهوية ممتازة', en: 'Lightweight with excellent ventilation.' },
    productColorsMenClassic: { ar: 'الألوان: أسود، أبيض، أحمر', en: 'Colors: Black, White, Red' },
    productColorsMenLuxury: { ar: 'الألوان: رمادي، أزرق، بني', en: 'Colors: Gray, Blue, Brown' },
    productColorsMenSport: { ar: 'الألوان: أسود، أبيض، أزرق', en: 'Colors: Black, White, Blue' },
    productColorsWomenElegant: { ar: 'الألوان: وردي، أحمر، أسود', en: 'Colors: Pink, Red, Black' },
    productColorsWomenRoyal: { ar: 'الألوان: أسود، ذهبي، فضي', en: 'Colors: Black, Gold, Silver' },
    productColorsWomenFloral: { ar: 'الألوان: متعددة', en: 'Colors: Assorted' },
    productColorsKidsGirls: { ar: 'الألوان: وردي، أبيض، أحمر', en: 'Colors: Pink, White, Red' },
    productColorsKidsBoys: { ar: 'الألوان: أزرق، أسود، أحمر', en: 'Colors: Blue, Black, Red' },
    productColorsKidsSky: { ar: 'الألوان: أزرق سماوي، أبيض', en: 'Colors: Sky Blue, White' },
    detailsButton: { ar: 'عرض التفاصيل', en: 'View Details' },
    filterLabel: { ar: 'الفئة:', en: 'Category:' },
    allCategories: { ar: 'جميع الفئات', en: 'All Categories' },
    menCategory: { ar: 'رجالي', en: 'Men' },
    womenCategory: { ar: 'نسائي', en: 'Women' },
    kidsCategory: { ar: 'أطفال', en: 'Kids' },
    newsletterTitle: { ar: 'اشترك في نشرتنا الإخبارية', en: 'Subscribe to our newsletter' },
    newsletterText: { ar: 'احصل على أحدث العروض والمنتجات الجديدة', en: 'Get the latest offers and new products' },
    newsletterPlaceholder: { ar: 'البريد الإلكتروني', en: 'Email address' },
    newsletterSubmit: { ar: 'اشترك الآن', en: 'Subscribe Now' },
    pageHeaderTitle: { ar: 'كتالوج المنتجات', en: 'Product Catalog' },
    pageHeaderText: { ar: 'استكشف مجموعتنا الكاملة من الملابس الداخلية الفاخرة', en: 'Browse our full premium underwear collection' },
    aboutHeaderTitle: { ar: 'عن شركة الحسين', en: 'About Al-Hussein' },
    aboutHeaderText: { ar: 'تعرف على قصتنا وتاريخنا العريق', en: 'Learn about our story and heritage' },
    aboutSectionTitle: { ar: 'من نحن؟', en: 'Who are we?' },
    aboutParagraph1: { ar: 'شركة الحسين متخصصة في صناعة الملابس الداخلية الفاخرة والراقية منذ عام 2020. نحن نؤمن بأن الجودة والراحة لا يجب أن يأتيا بسعر مرتفع.', en: 'Al-Hussein specializes in luxury underwear manufacturing since 2020. We believe quality and comfort should not come at a high price.' },
    aboutParagraph2: { ar: 'تأسست الشركة برؤية واضحة: توفير منتجات عالية الجودة بأسعار معقولة لجميع طبقات المجتمع. على مدار السنوات الماضية، اكتسبنا سمعة ممتازة في السوق المحلي والإقليمي.', en: 'The company was founded with a clear vision: deliver premium products at fair prices to all customers. Over the years, we have built an excellent reputation locally and regionally.' },
    missionTitle: { ar: 'رسالتنا', en: 'Our Mission' },
    missionText: { ar: 'توفير ملابس داخلية عالية الجودة تجمع بين الراحة والأناقة والسعر المعقول', en: 'Provide high-quality underwear that combines comfort, style, and fair pricing.' },
    visionTitle: { ar: 'رؤيتنا', en: 'Our Vision' },
    visionText: { ar: 'أن نصبح العلامة التجارية الأولى في سوريا وخارجها في مجال الملابس الداخلية', en: 'To become the leading underwear brand in Syria and beyond.' },
    valuesTitle: { ar: 'قيمنا', en: 'Our Values' },
    valuesText: { ar: 'الجودة، الأمانة، الابتكار، وخدمة العميل هي أساس عملنا اليومي', en: 'Quality, integrity, innovation, and customer service are the foundation of our daily work.' },
    whyChooseTitle: { ar: 'لماذا تختار الحسين؟', en: 'Why choose Al-Hussein?' },
    reason1Title: { ar: 'خبرة 15+ سنة', en: '15+ Years Experience' },
    reason1Text: { ar: 'أكثر من 15 سنة من الخبرة في صناعة الملابس الداخلية الفاخرة', en: 'More than 15 years of luxury underwear experience.' },
    reason2Title: { ar: 'جودة معتمدة', en: 'Certified Quality' },
    reason2Text: { ar: 'جميع المنتجات تحقق المعايير الدولية والمحلية', en: 'All products meet international and local standards.' },
    reason3Title: { ar: 'مواد طبيعية', en: 'Natural Materials' },
    reason3Text: { ar: 'نستخدم أفضل الخامات الطبيعية والمستدامة فقط', en: 'We use only the best natural and sustainable materials.' },
    reason4Title: { ar: 'أسعار تنافسية', en: 'Competitive Prices' },
    reason4Text: { ar: 'أفضل جودة بأفضل الأسعار في السوق', en: 'Top quality at the best prices in the market.' },
    reason5Title: { ar: 'خدمة عملاء ممتازة', en: 'Excellent Customer Service' },
    reason5Text: { ar: 'فريق دعم متوفر 24/7 لخدمتك', en: 'Support team available 24/7 to serve you.' },
    timelineTitle: { ar: 'سجل إنجازاتنا', en: 'Our Milestones' },
    timeline2020: { ar: 'تأسيس شركة الحسين للملابس الداخلية', en: 'Founded Al-Hussein underwear company' },
    timeline2021: { ar: 'إطلاق المتجر الإلكتروني', en: 'Launched the online store' },
    timeline2022: { ar: 'الحصول على شهادات الجودة الدولية', en: 'Achieved international quality certifications' },
    timeline2024: { ar: 'توسع خدماتنا داخل سوريا وزيادة الإنتاج', en: 'Expanded services across Syria and increased production' },
    timeline2026: { ar: 'تحقيق مبيعات بأكثر من 50,000 عميل راضي', en: 'Reached over 50,000 satisfied customers' },
    contactNameLabel: { ar: 'الاسم *', en: 'Name *' },
    contactEmailLabel: { ar: 'البريد الإلكتروني *', en: 'Email *' },
    contactPhoneLabel: { ar: 'رقم الهاتف *', en: 'Phone *' },
    contactSubjectLabel: { ar: 'الموضوع *', en: 'Subject *' },
    contactSubjectPlaceholder: { ar: 'اختر الموضوع', en: 'Select a subject' },
    contactSubjectInquiry: { ar: 'استفسار عام', en: 'General inquiry' },
    contactSubjectOrder: { ar: 'استفسار عن الطلب', en: 'Order inquiry' },
    contactSubjectComplaint: { ar: 'شكوى أو اقتراح', en: 'Complaint or suggestion' },
    contactSubjectWholesale: { ar: 'طلب جملة', en: 'Wholesale order' },
    contactSubjectOther: { ar: 'أخرى', en: 'Other' },
    contactMessageLabel: { ar: 'الرسالة *', en: 'Message *' },
    contactSubmit: { ar: 'إرسال الرسالة', en: 'Send Message' },
    contactInfoTitle: { ar: 'معلومات التواصل', en: 'Contact Information' },
    contactAddressTitle: { ar: 'العنوان', en: 'Address' },
    contactAddressLine1: { ar: 'العنوان: سوريا - حلب - باب انطاكيه', en: 'Address: Syria - Aleppo - Bab Antakia' },
    contactAddressLine2: { ar: 'الطريق الدائري الشرقي', en: 'Eastern Ring Road' },
    contactAddressLine3: { ar: 'المملكة العربية السعودية', en: 'Kingdom of Saudi Arabia' },
    contactPhoneTitle: { ar: 'الهاتف', en: 'Phone' },
    contactPhoneLine1: { ar: 'الهاتف: 00963947029969', en: 'Phone: 00963947029969' },
    contactPhoneLine2: { ar: '+966 11 456 7890', en: '+966 11 456 7890' },
    contactEmailTitle: { ar: 'البريد الإلكتروني', en: 'Email' },
    contactEmailLine1: { ar: 'info@alhussein.com', en: 'info@alhussein.com' },
    contactEmailLine2: { ar: 'support@alhussein.com', en: 'support@alhussein.com' },
    contactHoursTitle: { ar: 'ساعات العمل', en: 'Working Hours' },
    contactHoursLine1: { ar: 'الأحد - الخميس: 9:00 ص - 10:00 م', en: 'Sun - Thu: 9:00 AM - 10:00 PM' },
    contactHoursLine2: { ar: 'الجمعة والسبت: 2:00 م - 10:00 م', en: 'Fri - Sat: 2:00 PM - 10:00 PM' },
    socialFollow: { ar: 'تابعنا على وسائل التواصل', en: 'Follow us on social media' },
    socialFacebook: { ar: 'فيسبوك', en: 'Facebook' },
    socialInstagram: { ar: 'إنستاجرام', en: 'Instagram' },
    socialTwitter: { ar: 'تويتر', en: 'Twitter' },
    socialWhatsApp: { ar: 'واتس آب', en: 'WhatsApp' },
    faqTitle: { ar: 'الأسئلة الشائعة', en: 'Frequently Asked Questions' },
    faqQ1: { ar: 'كيف أطلب منتجات؟', en: 'How do I order products?' },
    faqA1: { ar: 'يمكنك الطلب من خلال موقعنا الإلكتروني مباشرة أو التواصل معنا عبر الهاتف أو البريد الإلكتروني.', en: 'You can order directly from our website or contact us by phone or email.' },
    faqQ2: { ar: 'ما هي تكاليف الشحن؟', en: 'What are the shipping costs?' },
    faqA2: { ar: 'الشحن مجاني للطلبات فوق 500000 ليرة سورية. للطلبات الأقل، تكلفة الشحن 50000 ليرة سورية داخل حلب و100000 ليرة سورية خارجها.', en: 'Shipping is free for orders over 500 SAR. For smaller orders, shipping costs 50 SAR inside Riyadh and 100 SAR outside.' },
    faqQ3: { ar: 'هل هناك ضمان على المنتجات؟', en: 'Is there a warranty on the products?' },
    faqA3: { ar: 'نعم، جميع منتجاتنا مضمونة لمدة سنة واحدة من تاريخ الشراء ضد عيوب التصنيع.', en: 'Yes, all our products are guaranteed for one year from purchase against manufacturing defects.' },
    faqQ4: { ar: 'كم مدة التوصيل؟', en: 'How long is delivery?' },
    faqA4: { ar: 'التوصيل يستغرق 2-3 أيام عمل داخل حلب و4-5 أيام عمل خارجها.', en: 'Delivery takes 2-3 business days within Riyadh and 4-5 business days outside.' },
    faqQ5: { ar: 'هل توجد عروض أو خصومات؟', en: 'Are there offers or discounts?' },
    faqA5: { ar: 'نعم، لدينا عروض موسمية ودعم للطلبات الكبيرة. تابع موقعنا للعروض الجديدة.', en: 'Yes, we have seasonal offers and support for large orders. Follow our site for new promotions.' },
    faqQ6: { ar: 'هل تقبلون طلبات الجملة؟', en: 'Do you accept wholesale orders?' },
    faqA6: { ar: 'نعم، نقبل طلبات الجملة بأسعار خاصة. يرجى التواصل معنا للحصول على عرض خاص.', en: 'Yes, we accept wholesale orders at special prices. Please contact us for a custom quote.' },
    footerTitleBrand: { ar: 'الحسين', en: 'Al-Hussein' },
    footerBrandText: { ar: 'متخصصون في صناعة الملابس الداخلية الفاخرة منذ 2020', en: 'Specializing in luxury underwear since 2020' },
    footerLinksTitle: { ar: 'الروابط السريعة', en: 'Quick Links' },
    footerContactTitle: { ar: 'تواصل معنا', en: 'Contact Us' },
    footerContactPhone: { ar: 'الهاتف: الهاتف: 00963947029969', en: 'Phone: 00963947029969' },
    footerContactEmail: { ar: 'البريد: info@alhussein.com', en: 'Email: info@alhussein.com' },
    footerContactAddress: { ar: 'العنوان: سوريا - حلب - باب انطاكيه', en: 'Address: Riyadh, Saudi Arabia' },
    footerContactPhoneSyria: { ar: 'الهاتف: 00963947029969', en: 'Phone: 00963947029969' },
    footerContactEmailSyria: { ar: 'البريد: info@alhussein.com', en: 'Email: info@alhussein.com' },
    footerContactAddressSyria: { ar: 'العنوان: سوريا - حلب - باب انطاكيه', en: 'Address: Syria - Aleppo - Bab Antakia' },
    footerCopy: { ar: 'جميع الحقوق محفوظة.', en: 'All rights reserved.' },
    emailError: { ar: 'البريد الإلكتروني غير صحيح', en: 'The email address is not valid' },
    phoneError: { ar: 'رقم الهاتف غير صحيح', en: 'Phone number is not valid' },
    messageSent: { ar: 'تم إرسال الرسالة بنجاح! سنتواصل معك قريباً.', en: 'Your message was sent successfully! We will contact you soon.' }
};

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitcher();
    initThemeSwitcher();
    initProductFilter();
    initFAQ();
    initContactForm();
    initSmoothScroll();
});

function getTranslation(key, lang = document.documentElement.lang || 'ar') {
    return translations[key] && translations[key][lang] ? translations[key][lang] : '';
}

function updateTranslations(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        const text = getTranslation(key, lang);
        if (!text) {
            return;
        }

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.tagName === 'OPTION') {
            element.textContent = text;
        } else {
            element.textContent = text;
        }
    });
}

function updatePageTitle(lang) {
    const titleElement = document.querySelector('title[data-i18n-title]');
    if (!titleElement) {
        return;
    }
    const key = titleElement.dataset.i18nTitle;
    const text = getTranslation(key, lang);
    if (text) {
        titleElement.textContent = text;
    }
}

function initLanguageSwitcher() {
    const langSelect = document.getElementById('language-switcher');
    if (!langSelect) {
        return;
    }

    const savedLanguage = localStorage.getItem('siteLanguage') || 'ar';
    langSelect.value = savedLanguage;
    applyLanguage(savedLanguage);

    langSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        applyLanguage(selectedLanguage);
        localStorage.setItem('siteLanguage', selectedLanguage);
    });
}

function applyLanguage(lang) {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.body.classList.toggle('lang-en', lang === 'en');
    document.body.classList.toggle('lang-ar', lang === 'ar');
    updateTranslations(lang);
    updateCurrencySymbols(lang);
    updatePageTitle(lang);
}

function updateCurrencySymbols(lang) {
    document.querySelectorAll('.price').forEach(element => {
        if (lang === 'en') {
            element.textContent = element.textContent.replace(/ل\.س/g, 'SYP');
        } else {
            element.textContent = element.textContent.replace(/SYP/g, 'ل.س');
        }
    });
}

function initThemeSwitcher() {
    const themeSelect = document.getElementById('theme-switcher');
    if (!themeSelect) {
        return;
    }

    const savedTheme = localStorage.getItem('siteTheme') || 'default';
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);

    themeSelect.addEventListener('change', function() {
        const selectedTheme = this.value;
        applyTheme(selectedTheme);
        localStorage.setItem('siteTheme', selectedTheme);
    });
}

function applyTheme(theme) {
    const themeClasses = ['theme-default', 'theme-blue', 'theme-green', 'theme-warm'];
    document.body.classList.remove(...themeClasses);
    document.body.classList.add(`theme-${theme}`);
}

// ============================================
// Product Filter
// ============================================

function initProductFilter() {
    const filterSelect = document.getElementById('category-filter');
    const productCards = document.querySelectorAll('.product-card');

    if (filterSelect) {
        filterSelect.addEventListener('change', function() {
            const selectedCategory = this.value;

            productCards.forEach(card => {
                if (selectedCategory === 'all' || card.dataset.category === selectedCategory) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    }
}

// ============================================
// FAQ Accordion
// ============================================

function initFAQ() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Close all other FAQs
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
                q.nextElementSibling.classList.remove('active');
            });

            // Toggle current FAQ
            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// ============================================
// Contact Form
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Validate email
            if (!validateEmail(email)) {
                showMessage(getTranslation('emailError'), 'error');
                return;
            }

            // Validate phone
            if (!validatePhone(phone)) {
                showMessage(getTranslation('phoneError'), 'error');
                return;
            }

            // In a real application, you would send this data to a server
            console.log({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message,
                timestamp: new Date()
            });

            // Show success message
            showMessage(getTranslation('messageSent'), 'success');

            // Reset form
            contactForm.reset();
        });
    }

    function showMessage(msg, type) {
        if (formMessage) {
            formMessage.textContent = msg;
            formMessage.className = `form-message ${type}`;
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                formMessage.className = 'form-message';
            }, 5000);
        }
    }
}

// ============================================
// Validation Functions
// ============================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Accept various phone formats
    const phoneRegex = /^(\+?966|0)?([0-9]{9})$/;
    return phoneRegex.test(phone.replace(/[-\s]/g, ''));
}

// ============================================
// Add to Cart (Placeholder)
// ============================================

function initAddToCart() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();

            // Get product info
            const productCard = this.closest('.product-card');
            const productName = productCard.querySelector('h3').textContent;
            const price = productCard.querySelector('.price').textContent;

            // Show notification
            const currentLang = document.documentElement.lang || 'ar';
            const messageTemplate = getTranslation('addedToCartMessage', currentLang);
            const message = messageTemplate.replace('{productName}', productName);
            showNotification(message);

            // Change button state
            const originalText = this.textContent;
            this.textContent = getTranslation('addedToCartConfirmation', currentLang);
            this.disabled = true;

            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);

            // Log to console (in real app, would send to server)
            console.log(`Added to cart: ${productName} - ${price}`);
        });
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #28a745;
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize add to cart after page load
document.addEventListener('DOMContentLoaded', function() {
    initAddToCart();
});

// ============================================
// Smooth Scroll
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// Newsletter Signup
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;

            if (validateEmail(email)) {
                // Show success message
                const originalHTML = this.innerHTML;
                this.innerHTML = '<p style="color: white; font-size: 16px; margin: 0;">شكراً! تم الاشتراك بنجاح ✓</p>';

                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    emailInput.value = '';
                }, 3000);

                console.log('Newsletter signup:', email);
            } else {
                alert('البريد الإلكتروني غير صحيح');
            }
        });
    }
});

// ============================================
// Mobile Menu Toggle (if needed)
// ============================================

function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelector('.nav-links');

    // You can add mobile menu functionality here if needed
    // This is a placeholder for future enhancement
}

// ============================================
// Scroll to top button
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.createElement('button');
    scrollButton.innerHTML = '↑';
    scrollButton.className = 'scroll-to-top';
    scrollButton.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        width: 50px;
        height: 50px;
        background-color: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        font-size: 24px;
        display: none;
        z-index: 999;
        transition: all 0.3s;
    `;

    document.body.appendChild(scrollButton);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollButton.style.display = 'flex';
            scrollButton.style.alignItems = 'center';
            scrollButton.style.justifyContent = 'center';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollButton.addEventListener('hover', function() {
        this.style.backgroundColor = '#8b0000';
    });
});

// ============================================
// Animation on scroll
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const elementsToObserve = document.querySelectorAll('.feature-card, .product-card, .testimonial-card');
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(element);
    });
});

console.log('الحسين - موقع متجر الملابس الداخلية الفاخرة');
console.log('جميع الحقوق محفوظة 2026');

// ============================================
// Hide/Show Navbar on Scroll (Mobile Friendly)
// ============================================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let scrollTimeout;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Clear the timeout to prevent rapid toggling
    clearTimeout(scrollTimeout);
    
    scrollTimeout = setTimeout(function() {
        if (currentScroll > lastScrollTop) {
            // Scrolling DOWN - hide navbar
            if (navbar && !navbar.classList.contains('navbar-hidden')) {
                navbar.classList.add('navbar-hidden');
            }
        } else {
            // Scrolling UP - show navbar
            if (navbar && navbar.classList.contains('navbar-hidden')) {
                navbar.classList.remove('navbar-hidden');
            }
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
    }, 100); // Debounce for 100ms
});
