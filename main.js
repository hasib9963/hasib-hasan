/* ===== DATA ===== */
const summaryData = [
  { title: "Projects Built", value: "8" },
  { title: "APIs Designed", value: "15" },
  { title: "Hours Coded", value: "500" },
];

const skillsData = [
  {
    id: 1,
    title: "API Engineering",
    description:
      "Secure, documented, and production‑ready REST & GraphQL APIs.",
    icon: "fa-code",
  },
  {
    id: 2,
    title: "Data Layer",
    description:
      "Schema strategy, migrations, indexing, and query performance.",
    icon: "fa-database",
  },
  {
    id: 3,
    title: "Performance Tuning",
    description:
      "Caching, queuing, and profiling to keep response times minimal.",
    icon: "fa-gauge-high",
  },
  {
    id: 4,
    title: "Deployment & Ops",
    description:
      "Containerized delivery, stability, and maintainable operations.",
    icon: "fa-server",
  },
];

const aboutPoints = [
  {
    icon: "fa-diagram-project",
    title: "Architecture First",
    description:
      "I structure services for clean separation of concerns, long-term maintainability, and clear ownership.",
  },
  {
    icon: "fa-shield-halved",
    title: "Security & Reliability",
    description:
      "Authentication, authorization, input validation, and safe defaults are integrated from the beginning.",
  },
  {
    icon: "fa-rocket",
    title: "Performance Focused",
    description:
      "I optimize query paths, caching strategy, and API throughput to keep applications fast under load.",
  },
];

const techStackGroups = [
  {
    title: "Languages",
    icon: "fa-code",
    items: [
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "SQL", icon: "fa-solid fa-database" },
    ],
  },
  {
    title: "Frameworks",
    icon: "fa-layer-group",
    items: [
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "Django REST", icon: "fa-solid fa-plug-circle-bolt" },
      { name: "Celery", icon: "fa-solid fa-gears" },
    ],
  },
  {
    title: "Databases",
    icon: "fa-database",
    items: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "SQLite", icon: "devicon-sqlite-plain colored" },
    ],
  },
];
const techOrbIcons = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "Django", icon: "devicon-django-plain colored" },
  { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Nginx", icon: "devicon-nginx-original colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
];

const projects = [
  {
    image: "https://placehold.co/600x400/232323/9929fb?text=E‑Commerce+API",
    category: "Production API",
    icon: "fa-cart-shopping",
    title: "E‑Commerce Backend Platform",
    description:
      "Enterprise‑ready commerce backend handling product catalog, secure checkout, order lifecycle, and role‑based access control.",
    tech: [
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
    ],
    links: [
      {
        icon: "fa-brands fa-github",
        url: "https://github.com/hasib9963",
        label: "GitHub",
      },
      {
        icon: "fa-solid fa-arrow-up-right-from-square",
        url: "#",
        label: "Live Demo",
      },
    ],
  },
  {
    image: "https://placehold.co/600x400/232323/9929fb?text=Headless+CMS",
    category: "Scalable CMS",
    icon: "fa-newspaper",
    title: "Headless Blog & Content API",
    description:
      "API‑first content platform with markdown publishing, media handling, search indexing, and permission‑aware workflows.",
    tech: [
      { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "Elasticsearch", icon: "fa-solid fa-magnifying-glass-chart" },
      { name: "JWT", icon: "fa-solid fa-key" },
    ],
    links: [
      {
        icon: "fa-brands fa-github",
        url: "https://github.com/hasib9963",
        label: "GitHub",
      },
      {
        icon: "fa-solid fa-arrow-up-right-from-square",
        url: "#",
        label: "Live API",
      },
    ],
  },
  {
    image: "https://placehold.co/600x400/232323/9929fb?text=Realtime+Tasks",
    category: "Realtime System",
    icon: "fa-bolt",
    title: "Collaborative Task Management API",
    description:
      "Real‑time team task engine with websocket events, notifications, activity history, and performance analytics endpoints.",
    tech: [
      { name: "Django Channels", icon: "fa-solid fa-tower-cell" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
      { name: "WebSockets", icon: "fa-solid fa-wave-square" },
      { name: "Celery", icon: "fa-solid fa-gears" },
    ],
    links: [
      {
        icon: "fa-brands fa-github",
        url: "https://github.com/hasib9963",
        label: "GitHub",
      },
      { icon: "fa-solid fa-diagram-project", url: "#", label: "Architecture" },
    ],
  },
];

const socialIcons = [
  { icon: "fa-github", url: "https://github.com/hasib9963" },
  { icon: "fa-linkedin-in", url: "https://www.linkedin.com/in/hasiblnkd/" },
  {
    icon: "fa-discord",
    url: "https://discordapp.com/users/1129265407585431605",
  },
  {
    icon: "fa-facebook",
    url: "https://www.facebook.com/hmmhfbs/",
  },
];

// UPDATE 1: Add social network card to addresses array
const addresses = [
  { icon: "fa-envelope", title: "Email", value: "hasib.mahede@gmail.com" },
  { icon: "fa-location-dot", title: "Location", value: "Dhaka, Bangladesh" },
  {
    icon: "fa-link",
    title: "Social Network",
    value: "", // not used – we output the icons directly
    html: socialIcons
      .map(
        (s) =>
          `<a href="${s.url}" target="_blank" class="social-btn" style="margin-right:0.35rem"><i class="fa-brands ${s.icon}"></i></a>`,
      )
      .join(""),
  },
];

/* ===== DOM helpers ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ===== Render functions ===== */
function renderSummary() {
  $("#summaryCards").innerHTML = summaryData
    .map(
      (item) => `
      <article class="summary-card">
        <h4 class="counter" data-target="${item.value}">0</h4>
        <p>${item.title}</p>
      </article>`,
    )
    .join("");
}

function renderSocial(targetId) {
  $(targetId).innerHTML = socialIcons
    .map(
      (s) =>
        `<a href="${s.url}" target="_blank" class="social-btn"><i class="fa-brands ${s.icon}"></i></a>`,
    )
    .join("");
}

function renderAboutPoints() {
  $("#aboutPoints").innerHTML = aboutPoints
    .map(
      (point) => `
      <article class="about-point">
        <span class="icon-box"><i class="fa-solid ${point.icon}"></i></span>
        <div>
          <h3 class="font-semibold text-slate-900 dark:text-slate-100">${point.title}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mt-1">${point.description}</p>
        </div>
      </article>`,
    )
    .join("");
}

function renderSkillBrief() {
  const wrapper = $("#skillsBriefCards");
  if (!wrapper) return;
  wrapper.innerHTML = skillsData
    .map(
      (skill) => `
      <article class="skill-brief-card">
        <div class="flex items-center gap-3">
          <span class="skill-index">${skill.id}</span>
          <h3 class="text-base font-semibold text-slate-900 dark:text-slate-100">${skill.title}</h3>
        </div>
        <p class="text-slate-600 dark:text-slate-300 text-sm mt-3">${skill.description}</p>
      </article>`,
    )
    .join("");
}

function renderTechStack() {
  const groupsWrapper = $("#techStackGroups");
  if (groupsWrapper) {
    groupsWrapper.innerHTML = techStackGroups
      .map(
        (group) => `
        <article class="tech-group">
          <h4 class="tech-group-title">
            <span class="icon-box"><i class="fa-solid ${group.icon}"></i></span>
            <span>${group.title}</span>
          </h4>
          <div class="tech-group-items">
            ${group.items
              .map(
                (tech) => `
                <div class="tech-item">
                  <span class="tech-icon"><i class="${tech.icon}"></i></span>
                  <span class="font-medium text-sm">${tech.name}</span>
                </div>`,
              )
              .join("")}
          </div>
        </article>`,
      )
      .join("");
  }

  const orb = $("#techIconOrb");
  if (!orb) return;
  const centerX = 50;
  const centerY = 50;
  const radiusX = 36;
  const radiusY = 30;
  orb.innerHTML = techOrbIcons
    .map((tech, idx) => {
      const angle = (idx / techOrbIcons.length) * Math.PI * 2;
      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);
      const depth = idx % 2 === 0 ? "32px" : "10px";
      return `<span class="orb-tech" style="left:${x}%; top:${y}%; --depth:${depth}; --i:${idx}" title="${tech.name}" aria-label="${tech.name}"><i class="${tech.icon}"></i></span>`;
    })
    .join("");
}

function renderProjects() {
  $("#projectCards").innerHTML = projects
    .map(
      (p) => `
      <article class="project-card">
        <img src="${p.image}" alt="${p.title}" />
        <div class="p-5">
          <p class="category">${p.category}</p>
          <h3 class="text-lg font-semibold mt-1 project-headline"><i class="fa-solid ${p.icon} text-primary"></i> ${p.title}</h3>
          <p class="text-slate-600 dark:text-slate-300 text-sm mt-2">${p.description}</p>
          <div class="project-tech-list">
            ${p.tech
              .map(
                (item) =>
                  `<span class="project-tech-icon" title="${item.name}" aria-label="${item.name}"><i class="${item.icon}"></i></span>`,
              )
              .join("")}
          </div>
          <div class="project-links">
            ${p.links
              .map(
                (link) =>
                  `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link-icon" aria-label="${link.label}" title="${link.label}"><i class="${link.icon}"></i></a>`,
              )
              .join("")}
          </div>
        </div>
      </article>`,
    )
    .join("");
}

// UPDATE 2: Modified renderAddresses to handle the 'html' property
function renderAddresses() {
  $("#addressCards").innerHTML = addresses
    .map((a) => {
      const valueContent = a.html
        ? `<div class="font-medium text-slate-900 dark:text-white flex items-center gap-1">${a.html}</div>`
        : `<p class="font-medium text-slate-900 dark:text-white">${a.value}</p>`;
      return `
        <article class="address-card">
          <span class="icon-box"><i class="fa-solid ${a.icon}"></i></span>
          <div>
            <p class="text-sm text-slate-500 dark:text-slate-400">${a.title}</p>
            ${valueContent}
          </div>
        </article>`;
    })
    .join("");
}

/* ===== Theme Toggle ===== */
function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  const icon = $("#themeIcon");
  if (icon) {
    icon.className = isDark
      ? "fa-solid fa-sun text-xl"
      : "fa-solid fa-moon text-xl";
  }
  const mobileBtn = $("#themeToggleMobile");
  if (mobileBtn) {
    mobileBtn.innerHTML = isDark
      ? '<i class="fa-solid fa-sun mr-2"></i>Light mode'
      : '<i class="fa-solid fa-moon mr-2"></i>Dark mode';
  }
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(saved ? saved === "dark" : prefersDark);
}

/* ===== Typewriter Effect ===== */
function startTypewriter() {
  const el = $("#typewriterText");
  const roles = [
    "Python Django Developer",
    "Backend Engineer",
    "Problem Solver",
    "API Architect",
    "Database Enthusiast",
  ];
  let roleIndex = 0,
    charIndex = 0,
    isDeleting = false,
    speed = 80;

  function tick() {
    const current = roles[roleIndex];
    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        speed = 1500;
      } else {
        speed = 60 + Math.random() * 60;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
      } else {
        speed = 30 + Math.random() * 30;
      }
    }
    setTimeout(tick, speed);
  }
  setTimeout(tick, 1200);
}

/* ===== Counter Animation ===== */
function animateCounters() {
  const counters = $$(".counter");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"));
          const duration = 2000;
          const start = performance.now();
          function update(now) {
            const progress = Math.min((now - start) / duration, 1);
            el.textContent = Math.floor(progress * target);
            if (progress < 1) requestAnimationFrame(update);
            else el.textContent = target + "+";
          }
          requestAnimationFrame(update);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((c) => observer.observe(c));
}

/* ===== Scroll Reveal (fade-up) ===== */
function initScrollReveal() {
  const elements = $$(".fade-up");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
  );
  elements.forEach((el) => observer.observe(el));
}

/* ===== Events (menu, scroll, etc.) ===== */
function setupEvents() {
  const navbar = $("#navbar");
  const mobileBtn = $("#mobileMenuBtn");
  const mobileMenu = $("#mobileMenu");
  const navLinks = $$(".nav-link");
  const sectionIds = ["hero", "about", "skills", "projects", "contact"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const activateNavForHash = (hash) => {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === hash);
    });
  };

  const updateActiveNavByScroll = () => {
    const scrollY = window.scrollY + 150;
    let current = "#hero";
    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) {
        current = `#${section.id}`;
      }
    });
    activateNavForHash(current);
  };

  mobileBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });

  const scrollBtn = $("#scrollTopBtn");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 60;
    navbar.classList.toggle(
      "border-slate-200",
      scrolled && !document.documentElement.classList.contains("dark"),
    );
    navbar.classList.toggle(
      "border-slate-700",
      scrolled && document.documentElement.classList.contains("dark"),
    );
    navbar.classList.toggle("shadow-sm", scrolled);
    scrollBtn.classList.toggle("hidden", window.scrollY < 200);
    updateActiveNavByScroll();
  });
  scrollBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  // Theme toggles
  $("#themeToggle")?.addEventListener("click", () =>
    applyTheme(!document.documentElement.classList.contains("dark")),
  );
  $("#themeToggleMobile")?.addEventListener("click", () =>
    applyTheme(!document.documentElement.classList.contains("dark")),
  );

  updateActiveNavByScroll();
}

/* ===== Contact Form (Formspree) ===== */
// function initContactForm() {
//   const form = $("#contactForm");
//   const sendBtn = $("#sendMessageBtn");
//   const toastEl = $("#toast");
//   const toastTitleEl = $("#toastTitle");
//   const toastMsgEl = $("#toastMsg");
//   let toastTimer;

//   function showToast(title, msg) {
//     toastTitleEl.textContent = title;
//     toastMsgEl.textContent = msg;
//     toastEl.classList.add("show");
//     if (toastTimer) clearTimeout(toastTimer);
//     toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2600);
//   }

//   form.addEventListener("submit", async (e) => {
//     e.preventDefault();
//     if (sendBtn.disabled) return;
//     const originalHTML = sendBtn.innerHTML;
//     sendBtn.disabled = true;
//     sendBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Sending…';

//     try {
//       const res = await fetch("https://formspree.io/f/mnjlejgb", {
//         method: "POST",
//         body: new FormData(form),
//         headers: { Accept: "application/json" },
//       });
//       const data = await res.json();
//       if (data.ok) {
//         showToast("Message sent", "Thanks! I’ll get back to you soon.");
//         form.reset();
//       } else {
//         showToast("Error", "Oops! Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       showToast("Network error", "Please check your connection.");
//     } finally {
//       sendBtn.innerHTML = originalHTML;
//       sendBtn.disabled = false;
//     }
//   });
// }

// /* ===== Resume Download ===== */
// function initResumeDownload() {
//   const btn = $("#downloadResumeBtn");
//   if (!btn) return;
//   btn.addEventListener("click", () => {
//     const a = document.createElement("a");
//     a.href = "https://drive.google.com/uc?export=download&id=1Mpi9Na_kOGQmIVUNFBmc2t5kIHKo1PX0";
//     a.download = "Hasib_Hasan_Resume.pdf";
//     document.body.appendChild(a);
//     a.click();
//     a.remove();
//   });
// }

/* ===== Shared Toast Utility ===== */
function showToast(title, msg) {
  const toastEl = document.getElementById("toast");
  const toastTitleEl = document.getElementById("toastTitle");
  const toastMsgEl = document.getElementById("toastMsg");
  if (!toastEl || !toastTitleEl || !toastMsgEl) return;

  // Clear any existing timeout
  if (window._toastTimer) clearTimeout(window._toastTimer);

  toastTitleEl.textContent = title;
  toastMsgEl.textContent = msg;
  toastEl.classList.add("show");

  window._toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2600);
}

/* ===== Contact Form ===== */
function initContactForm() {
  const form = document.getElementById("contactForm");
  const sendBtn = document.getElementById("sendMessageBtn");
  if (!form || !sendBtn) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (sendBtn.disabled) return;
    const originalHTML = sendBtn.innerHTML;
    sendBtn.disabled = true;
    sendBtn.innerHTML =
      '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Sending…';

    try {
      const res = await fetch("https://formspree.io/f/mnjlejgb", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const data = await res.json();
      if (data.ok) {
        showToast("Message sent", "Thanks! I’ll get back to you soon.");
        form.reset();
      } else {
        showToast("Error", "Oops! Something went wrong. Please try again.");
      }
    } catch (err) {
      showToast("Network error", "Please check your connection.");
    } finally {
      sendBtn.innerHTML = originalHTML;
      sendBtn.disabled = false;
    }
  });
}

/* ===== Resume Download ===== */
function initResumeDownload() {
  const btn = document.getElementById("downloadResumeBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    // Show the same toast style as the contact form
    showToast(
      "Download started",
      "Your resume is being downloaded. Thanks for your interest!",
    );

    const a = document.createElement("a");
    a.href =
      "https://drive.google.com/uc?export=download&id=1Mpi9Na_kOGQmIVUNFBmc2t5kIHKo1PX0";
    a.download = "Hasib_Hasan_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
}

/* ===== Initialization ===== */
function init() {
  initTheme();
  renderSummary();
  renderAboutPoints();
  renderSocial("#profileSocial");
  // UPDATE 3: REMOVE or COMMENT this line – contact social icons are now inside addressCards
  // renderSocial("#contactSocial");
  renderSocial("#footerSocial");
  renderSkillBrief();
  renderTechStack();
  renderProjects();
  renderAddresses();
  $("#year").textContent = new Date().getFullYear();

  startTypewriter();
  animateCounters();
  initScrollReveal();
  setupEvents();
  initContactForm();
  initResumeDownload();

  console.log(
    "%c🚀 Backend Developer Portfolio Ready",
    "color: #9929fb; font-weight: bold;",
  );
}

document.addEventListener("DOMContentLoaded", init);
