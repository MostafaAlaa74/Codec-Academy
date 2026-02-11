document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); 

    
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
           
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach((span, index) => {
                if (navLinks.classList.contains('active')) {
                    if (index === 0) span.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (index === 1) span.style.opacity = '0';
                    if (index === 2) span.style.transform = 'rotate(-45deg) translate(7px, -7px)';
                } else {
                    span.style.transform = 'none';
                    span.style.opacity = '1';
                }
            });
        });
    }
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            
            setTimeout(() => {
                submitBtn.textContent = 'We will contact you soon :)';
                contactForm.reset();
                
                setTimeout(() => {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);
            }, 1500);
        });
    }


    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 10%';
            nav.style.background = 'rgba(5, 5, 5, 0.95)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
        } else {
            nav.style.padding = '1.2rem 10%';
            nav.style.background = 'rgba(5, 5, 5, 0.9)';
            nav.style.boxShadow = 'none';
        }
    });
});
// --- Master Translation Object ---
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_about: "About",
        nav_learn: "Learn",
        nav_courses: "Courses",
        nav_contact: "Contact",
        footer_copy: "&copy; 2026 Codec academy. Student-led, community-driven.",

        // Home Page
        hero_title: "Learn Programming <br><span>the Right Way.</span>",
        hero_desc: "Codec is a student-led programming community dedicated to building a solid foundation in software development through peer learning and practice.",
        hero_cta: "Start Your Journey",
        sec1_title: "Built by <span>Students</span> to students",
        sec1_desc: "We are a community of passionate learners who believe that the best way to master technology is by building together. No corporate fluff, just real coding.",
        sec1_link: "Read our story &rarr;",
        card1_title: "Peer Learning",
        card1_desc: "Exchange knowledge with fellow students who are on the same path as you. Learn faster through collaboration.",
        card2_title: "Modern Stack",
        card2_desc: "We focus on the technologies that power the modern web, from fundamental logic to advanced development.",
        card3_title: "Real Projects",
        card3_desc: "Move beyond tutorials. We encourage building real-world applications that solve actual problems.",
        sec2_title: "Master the <span>Fundamentals</span>",
        sec2_desc: "Don't just copy-paste. Understand the core principles of computer science and software engineering that will serve you for a lifetime.",
        sec2_cta: "Explore Learning Path",

        // About Page
        about_title_span: "About",
        about_intro: "Codec is a community created and managed entirely by students. Our mission is simple: to help beginners start their programming journey correctly.",
        story_title: "Our Story",
        story_p1: "We started as a small group of students frustrated with the overwhelming amount of tutorials that didn't explain the \"why\". We wanted a place where we could learn from each other, share our struggles, and celebrate our wins.",
        story_p2: "Today, Codec is growing into a hub for student developers who value deep understanding over quick fixes.",
        val1_title: "No Shortcuts",
        val1_desc: "We focus on understanding the core logic behind every line of code. We believe in building a foundation that lasts.",
        val2_title: "Peer Support",
        val2_desc: "Learning is better when you're not alone. Our community is built on the principle of students helping students.",
        val3_title: "Practicality",
        val3_desc: "We prioritize building things that work. Our learning path is focused on real-world application and problem-solving.",

        // Learn Page
        learn_title_prefix: "How to",
        learn_title_suffix: "Learn",
        learn_intro: "Programming is a superpower. But like any skill, it requires the right approach and consistent effort.",
        step1_title: "Master the Basics",
        step1_desc: "Before jumping into complex frameworks, understand the core logic. Variables, loops, and functions are the building blocks of everything you'll create.",
        step2_title: "Computational Thinking",
        step2_desc: "Programming is more about thinking than typing. Learn how to break down large problems into smaller, manageable steps.",
        step3_title: "Consistent Practice",
        step3_desc: "The only way to get better is to write code every day. Build small projects, break them, and fix them. That's where the real learning happens.",
        roadmap_title_prefix: "The",
        roadmap_title_suffix: "Roadmap",
        roadmap_desc: "We follow a structured path that takes you from zero to building your own applications. Our curriculum is designed by students who have successfully navigated this journey.",
        roadmap_li1: "Logic & Algorithms",
        roadmap_li2: "Web Fundamentals",
        roadmap_li3: "Software Architecture",

        // Courses Page (New)
        course_badge: "Launch Phase",
        course_title_main: "Our First Course is",
        course_title_sub: "Coming Soon",
        course_desc: "We are currently building something special for the next generation of developers. No shortcuts, no fluff—just the pure fundamentals of programming.",
        btn_notify: "Get Notified",
        btn_back: "Back to Home",

        // Contact Page (New)
        contact_title_1: "Get in",
        contact_title_2: "Touch",
        contact_subtitle: "Whether you have a question about our community or just want to say hi, we'd love to hear from you.",
        info_title: "Contact Information",
        info_desc: "Reach out to us directly via email or connect with us on our social platforms. We typically respond within 24 hours.",
        lbl_email: "Email Us",
        lbl_follow: "Follow Us",
        form_name: "Name",
        form_email: "Email",
        form_msg: "Message",
        form_btn: "Send Message",
        // Placeholders
        ph_name: "Your Name",
        ph_email: "Your Email",
        ph_msg: "How can we help?"
    },
    ar: {
        // Navigation
        nav_home: "الرئيسية",
        nav_about: "من نحن",
        nav_learn: "مسار التعلم",
        nav_courses: "الكورسات",
        nav_contact: "تواصل معنا",
        footer_copy: "&copy; 2026 أكاديمية Codec. مجتمع طلابي.",

        // Home Page
        hero_title: "تعلم البرمجة <br><span>بالطريقة الصحيحة.</span>",
        hero_desc: "Codec هو مجتمع برمجيات طلابي مكرس لبناء أساس قوي في تطوير البرمجيات من خلال التعلم الجماعي والممارسة العملية.",
        hero_cta: "ابدأ رحلتك الآن",
        sec1_title: "من الطلاب <span>وإلى الطلاب</span>",
        sec1_desc: "نحن مجتمع من المتعلمين الشغوفين، نؤمن بأن أفضل طريقة لإتقان التكنولوجيا هي البناء معاً. لا كلام نظري ممل، فقط كود حقيقي.",
        sec1_link: "اقرأ قصتنا &larr;",
        card1_title: "التعلم الجماعي",
        card1_desc: "تبادل المعرفة مع زملائك الطلاب الذين يسيرون في نفس المسار. تعلم بشكل أسرع من خلال التعاون.",
        card2_title: "تقنيات حديثة",
        card2_desc: "نحن نركز على التقنيات التي تشغل الويب الحديث، من المنطق الأساسي إلى التطوير المتقدم.",
        card3_title: "مشاريع حقيقية",
        card3_desc: "تجاوز مرحلة الدروس التقليدية. نحن نشجع على بناء تطبيقات تحل مشاكل فعلية في العالم الحقيقي.",
        sec2_title: "أتقن <span>الأساسيات</span>",
        sec2_desc: "لا تكتفِ بالنسخ واللصق. افهم المبادئ الأساسية لعلوم الحاسوب وهندسة البرمجيات التي ستخدمك مدى الحياة.",
        sec2_cta: "استكشف المسار",

        // About Page
        about_title_span: "عن",
        about_intro: "Codec هو مجتمع تم إنشاؤه وإدارته بالكامل بواسطة الطلاب. مهمتنا بسيطة: مساعدة المبتدئين على بدء رحلتهم البرمجية بشكل صحيح.",
        story_title: "قصتنا",
        story_p1: "بدأنا كمجموعة صغيرة من الطلاب المحبطين من كثرة الشروحات التي لا تشرح 'لماذا' يحدث هذا. أردنا مكانًا يمكننا فيه التعلم من بعضنا البعض، ومشاركة الصعوبات التي نواجهها، والاحتفال بإنجازاتنا.",
        story_p2: "اليوم، Codec ينمو ليصبح مركزًا للمطورين الطلاب الذين يقدرون الفهم العميق بدلاً من الحلول السريعة.",
        val1_title: "لا للاختصارات",
        val1_desc: "نركز على فهم المنطق الأساسي وراء كل سطر كود. نحن نؤمن ببناء أساس يدوم طويلاً.",
        val2_title: "دعم الأقران",
        val2_desc: "التعلم أفضل عندما لا تكون وحدك. مجتمعنا مبني على مبدأ الطلاب يساعدون الطلاب.",
        val3_title: "العملية",
        val3_desc: "نحن نعطي الأولوية لبناء أشياء تعمل. مسارنا التعليمي يركز على التطبيق العملي وحل المشكلات الواقعية.",

        // Learn Page
        learn_title_prefix: "كيف",
        learn_title_suffix: "تتعلم",
        learn_intro: "البرمجة قوة خارقة. ولكن مثل أي مهارة، تتطلب النهج الصحيح والجهد المستمر.",
        step1_title: "أتقن الأساسيات",
        step1_desc: "قبل القفز إلى أطر العمل المعقدة، افهم المنطق الأساسي. المتغيرات، الحلقات، والدوال هي اللبنات الأساسية لكل ما ستبنيه.",
        step2_title: "التفكير الحاسوبي",
        step2_desc: "البرمجة تتعلق بالتفكير أكثر من الكتابة. تعلم كيفية تقسيم المشاكل الكبيرة إلى خطوات أصغر قابلة للإدارة.",
        step3_title: "الممارسة المستمرة",
        step3_desc: "الطريقة الوحيدة للتحسن هي كتابة الكود يومياً. ابنِ مشاريع صغيرة، اكسرها، ثم أصلحها. هنا يحدث التعلم الحقيقي.",
        roadmap_title_prefix: " ",
        roadmap_title_suffix: "خارطة الطريق",
        roadmap_desc: "نحن نتبع مساراً منظماً يأخذك من الصفر إلى بناء تطبيقاتك الخاصة. منهجنا تم تصميمه بواسطة طلاب نجحوا في اجتياز هذه الرحلة.",
        roadmap_li1: "المنطق والخوارزميات",
        roadmap_li2: "أساسيات الويب",
        roadmap_li3: "معمارية البرمجيات",

        // Courses Page
        course_badge: "مرحلة الإطلاق",
        course_title_main: "أول كورس لنا",
        course_title_sub: "قادم قريباً",
        course_desc: "نقوم حالياً ببناء شيء مميز للجيل القادم من المطورين. بدون طرق مختصرة، بدون حشو—فقط أساسيات البرمجة النقية.",
        btn_notify: "أبلغني عند البدء",
        btn_back: "العودة للرئيسية",

        // Contact Page
        contact_title_1: "تواصل",
        contact_title_2: "معنا",
        contact_subtitle: "سواء كان لديك سؤال حول مجتمعنا أو تريد فقط إلقاء التحية، نود أن نسمع منك.",
        info_title: "معلومات التواصل",
        info_desc: "تواصل معنا مباشرة عبر البريد الإلكتروني أو تابعنا على منصاتنا الاجتماعية. نرد عادةً في غضون 24 ساعة.",
        lbl_email: "راسلنا  ",
        lbl_follow: "تابعنا",
        form_name: "الاسم",
        form_email: "البريد الإلكتروني",
        form_msg: "الرسالة",
        form_btn: "إرسال الرسالة",
        // Placeholders
        ph_name: "اسمك الكريم",
        ph_email: "بريدك الإلكتروني",
        ph_msg: "كيف يمكننا مساعدتك؟"
    }
};
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Language Toggle Logic (New)
    const langToggle = document.getElementById('lang-toggle');
    
    // دالة تحديث اللغة وتغيير شكل الزرار
    const updateLanguage = (lang) => {
        // تغيير النصوص في الصفحة
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if(translations[lang][key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translations[lang][key];
                } else {
                    element.innerHTML = translations[lang][key];
                }
            } 
        });

        // تغيير الاتجاه (RTL / LTR)
        if (lang === 'ar') {
            document.body.classList.add('rtl');
            document.body.dir = "rtl";
            
            // --- السحر هنا ---
            // لو اللغة عربي، خلي الزرار يكتب "English"
            if(langToggle) {
                langToggle.textContent = "English"; 
                langToggle.style.fontFamily = "'Inter', sans-serif"; // خط إنجليزي للزرار
            }

        } else {
            document.body.classList.remove('rtl');
            document.body.dir = "ltr";

            // --- السحر هنا ---
            // لو اللغة إنجليزي، خلي الزرار يكتب "العربية"
            if(langToggle) {
                langToggle.textContent = "العربية";
                langToggle.style.fontFamily = "'Cairo', sans-serif"; // خط عربي للزرار
            }
        }

        // حفظ اللغة
        localStorage.setItem('codec-lang', lang);
    };

    // قراءة اللغة المحفوظة أو البدء بالإنجليزية
    let currentLang = localStorage.getItem('codec-lang') || 'en';
    updateLanguage(currentLang);

    // عند الضغط على الزرار (Toggle)
    if(langToggle) {
        langToggle.addEventListener('click', () => {
            // لو هي إنجليزي خليها عربي، والعكس
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            updateLanguage(currentLang);
        });
    }

    // 2. Mobile Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
        });
    }

    // 3. Reveal Animation Logic
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});