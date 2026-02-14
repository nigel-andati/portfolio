/**
 * Nigel Andati - Portfolio
 * Language toggle, scroll animations, and dynamic content
 */

// ========== i18n Translations ==========
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-projects': 'Projects',
    'nav-skills': 'Skills',
    'nav-experience': 'Experience',
    'nav-education': 'Education',
    'nav-contact': 'Contact',
    'nav-resume': 'Resume',
    'hero-intro': "I'm a passionate developer and creative problem-solver. I enjoy building software that makes a difference and exploring new technologies to create innovative solutions.",
    'hero-cta': 'Get in Touch',
    'section-experience': 'Experience',
    'section-skills': 'Skills',
    'section-projects': 'Projects',
    'section-education': 'Education',
    'section-contact': "Let's Connect!",
    'exp1-date': '2024 — Present',
    'exp1-title': 'IT Office Software Developer',
    'exp1-company': 'Duke Kunshan University',
    'exp1-desc': 'Develop and maintain campus technologies including the library\'s textbook reservation and ordering software, custom applications for student clubs, and physical computing machines. Maintain campus computing infrastructure with 99.9% uptime through security patching and hardware troubleshooting. Ensure database integrity for library acquisitions and synchronization.',
    'exp2-date': 'Apr 2022 — Aug 2022',
    'exp2-title': 'Corporate Analyst Intern',
    'exp2-company': 'Equity Group Foundation',
    'exp2-desc': 'Built Python automation scripts for monthly portfolio reporting, reducing manual data processing time by 30%. Optimized data extraction using SQL queries and Excel macros to identify financial trends. Developed interactive dashboards to visualize KPIs for data-driven decision-making.',
    'proj1-title': 'Semantic Book Recommender',
    'proj1-date': '2024',
    'proj1-desc': 'Developed a RAG-based discovery engine using OpenAI and vector search, integrating zero-shot classification and sentiment analysis to categorize 7,000+ books and improve recommendation precision by 30%.',
    'proj2-title': 'EchoThread',
    'proj2-date': '2024',
    'proj2-desc': 'Built a responsive forum with real-time features and a custom REST API, improving rendering speeds by 40% and ensuring 99.9% reliability during high-traffic testing of 1,000+ concurrent requests.',
    'proj3-title': 'Campus & Community Hub',
    'proj3-date': 'Ongoing',
    'proj3-desc': 'Developed and deployed an official platform for the university and local town club to manage animal activities. Enables community reporting of sightings and complaints with an admin-only CMS to securely manage animal profiles and images.',
    'proj-view': 'View Project',
    'edu1-school': 'Duke University',
    'edu1-degree': 'Bachelor of Science, Computer Science',
    'edu1-year': '2024 — 2028',
    'contact-location': 'Shanghai, China',
    'footer-rights': 'All rights reserved.',
  },
  zh: {
    'nav-home': '首页',
    'nav-projects': '项目',
    'nav-skills': '技能',
    'nav-experience': '经历',
    'nav-education': '教育',
    'nav-contact': '联系',
    'nav-resume': '简历',
    'hero-intro': '我是一名充满热情的开发者与创意问题解决者。我喜欢构建有影响力的软件，探索新技术，创造创新解决方案。',
    'hero-cta': '联系我',
    'section-experience': '工作经历',
    'section-skills': '技能',
    'section-projects': '项目',
    'section-education': '教育背景',
    'section-contact': '保持联系！',
    'exp1-date': '2024 — 至今',
    'exp1-title': 'IT 办公室软件开发工程师',
    'exp1-company': '昆山杜克大学',
    'exp1-desc': '开发维护校园技术，包括图书馆教材预订与订购系统、学生社团定制应用及物理计算设备。维护校园计算基础设施，通过安全补丁和硬件故障排查实现 99.9% 正常运行时间。确保图书馆采购数据库的完整性与同步。',
    'exp2-date': '2022年4月 — 2022年8月',
    'exp2-title': '企业分析师实习生',
    'exp2-company': 'Equity Group Foundation',
    'exp2-desc': '使用 Python 自动化脚本进行月度投资组合报告，将人工数据处理时间减少 30%。通过 SQL 和 Excel 宏优化数据提取，识别财务趋势。开发交互式仪表盘可视化关键绩效指标，支持数据驱动决策。',
    'proj1-title': '语义图书推荐系统',
    'proj1-date': '2024年',
    'proj1-desc': '基于 RAG 的发现引擎，使用 OpenAI 与向量搜索，集成零样本分类和情感分析，对 7,000+ 本书进行分类，推荐精度提升 30%。',
    'proj2-title': 'EchoThread',
    'proj2-date': '2024年',
    'proj2-desc': '构建响应式论坛，具备实时功能与自定义 REST API，渲染速度提升 40%，在 1,000+ 并发请求的高流量测试中保持 99.9% 可靠性。',
    'proj3-title': '校园与社区中心',
    'proj3-date': '进行中',
    'proj3-desc': '为大学与当地社区俱乐部开发并部署官方动物活动管理平台，支持社区报告目击与投诉，配备仅管理员可用的 CMS 安全管理动物档案与图片。',
    'proj-view': '查看项目',
    'edu1-school': '杜克大学',
    'edu1-degree': '计算机科学学士',
    'edu1-year': '2024 — 2028',
    'contact-location': '中国上海',
    'footer-rights': '版权所有。',
  },
};

// ========== State ==========
let currentLang = localStorage.getItem('portfolio-lang') || 'en';

// ========== Language Toggle ==========
function initLanguageToggle() {
  const btnEn = document.getElementById('lang-en');
  const btnZh = document.getElementById('lang-zh');

  if (!btnEn || !btnZh) return;

  function setActiveButton(lang) {
    btnEn.classList.toggle('active', lang === 'en');
    btnZh.classList.toggle('active', lang === 'zh');
    btnEn.setAttribute('aria-pressed', lang === 'en');
    btnZh.setAttribute('aria-pressed', lang === 'zh');
  }

  btnEn.addEventListener('click', () => {
    currentLang = 'en';
    localStorage.setItem('portfolio-lang', 'en');
    setActiveButton('en');
    updateContent();
  });

  btnZh.addEventListener('click', () => {
    currentLang = 'zh';
    localStorage.setItem('portfolio-lang', 'zh');
    setActiveButton('zh');
    updateContent();
  });

  setActiveButton(currentLang);
  updateContent();
}

function updateContent() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (t && t[key]) {
      el.textContent = t[key];
    }
  });

  // Update html lang for accessibility
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

// ========== Scroll Animations ==========
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('[data-animate]').forEach((el) => {
    observer.observe(el);
  });
}

// ========== Dynamic Year ==========
function setCurrentYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ========== Smooth Scroll for Nav Links ==========
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ========== Typing Effect (Optional - for hero intro) ==========
function initTypingEffect() {
  const introEl = document.querySelector('.hero-intro');
  if (!introEl || !introEl.getAttribute('data-i18n')) return;

  // Simple fade-in is enough; typing can be added later if desired
  introEl.style.opacity = '1';
}

// ========== Parallax on Scroll (subtle) ==========
function initParallax() {
  const heroImage = document.querySelector('.hero-image');
  if (!heroImage) return;

  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const rate = scrolled * 0.05;
    heroImage.style.transform = `translateY(${Math.min(rate, 20)}px) scale(1)`;
  }, { passive: true });
}

// ========== Initialize ==========
document.addEventListener('DOMContentLoaded', () => {
  initLanguageToggle();
  initScrollAnimations();
  setCurrentYear();
  initSmoothScroll();
  initTypingEffect();
  // initParallax(); // Uncomment for subtle parallax on hero image
});
