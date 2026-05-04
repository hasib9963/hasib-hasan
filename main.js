/* ===== DATA ===== */
const summaryData = [
  { title: "Projects Built", value: "8", suffix: "+" },
  { title: "APIs Designed", value: "15", suffix: "+" },
  { title: "Hours Coded", value: "500", suffix: "+" },
];

const skillsData = [
  {
    id: 1,
    title: "API Engineering",
    description:
      "Secure, documented, and production-ready REST & GraphQL APIs.",
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

/* ===== EXPERIENCE DATA ===== */
// const experienceData = [
//   {
//     role: "Backend Developer (Freelance)",
//     company: "Self-Employed / Upwork",
//     period: "2023 – Present",
//     icon: "fa-laptop-code",
//     description: "Designing and delivering production-grade REST APIs and Django backends for international clients. Architecting scalable data models, integrating third-party services, and ensuring clean, maintainable codebases.",
//     tags: ["Django", "FastAPI", "PostgreSQL", "Redis", "Docker"],
//     side: "right",
//   },
//   {
//     role: "Junior Backend Developer",
//     company: "Local Tech Startup",
//     period: "2022 – 2023",
//     icon: "fa-building",
//     description: "Built and maintained RESTful APIs using Django REST Framework. Collaborated with frontend teams to integrate backend services, optimized SQL queries for performance, and implemented JWT-based authentication systems.",
//     tags: ["Django REST", "MySQL", "Celery", "JWT", "Git"],
//     side: "left",
//   },
//   {
//     role: "Python Developer Intern",
//     company: "Software Agency",
//     period: "2021 – 2022",
//     icon: "fa-graduation-cap",
//     description: "Assisted in building data-driven web applications using Django. Gained hands-on experience in MVC architecture, database migrations, and writing unit tests to ensure code reliability.",
//     tags: ["Python", "Django", "SQLite", "REST API", "Unit Testing"],
//     side: "right",
//   },
// ];

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
  {
    title: "Deployment & Ops",
    icon: "fa-server",
    items: [
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "Nginx", icon: "devicon-nginx-original colored" },
      { name: "Linux", icon: "devicon-linux-plain" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "GitHub", icon: "devicon-github-original" },
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
    image: "https://placehold.co/600x400/1c1917/a8a29e?text=E-Commerce+API",
    category: "Production API",
    icon: "fa-cart-shopping",
    title: "E-Commerce Backend Platform",
    description:
      "Enterprise-ready commerce backend handling product catalog, secure checkout, order lifecycle, and role-based access control.",
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
    image: "https://placehold.co/600x400/1c1917/a8a29e?text=Headless+CMS",
    category: "Scalable CMS",
    icon: "fa-newspaper",
    title: "Headless Blog & Content API",
    description:
      "API-first content platform with markdown publishing, media handling, search indexing, and permission-aware workflows.",
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
    image: "https://placehold.co/600x400/1c1917/a8a29e?text=Realtime+Tasks",
    category: "Realtime System",
    icon: "fa-bolt",
    title: "Collaborative Task Management API",
    description:
      "Real-time team task engine with websocket events, notifications, activity history, and performance analytics endpoints.",
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
  { icon: "fa-facebook", url: "https://www.facebook.com/hmmhfbs/" },
];

const addresses = [
  { icon: "fa-envelope", title: "Email", value: "hasib.mahede@gmail.com" },
  { icon: "fa-location-dot", title: "Location", value: "Dhaka, Bangladesh" },
  {
    icon: "fa-link",
    title: "Social Network",
    value: "",
    html: `<div id="addressSocialContainer"></div>`, // container to be filled
  },
];

/* ===== DOM Helpers ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ===== Custom Cursor ===== */
function initCursor() {
  const cursor = $("#cursor");
  const trail = $("#cursorTrail");
  if (!cursor || !trail || window.innerWidth < 640) return;

  let mouseX = 0,
    mouseY = 0,
    trailX = 0,
    trailY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });

  function animateTrail() {
    trailX += (mouseX - trailX) * 0.14;
    trailY += (mouseY - trailY) * 0.14;
    trail.style.left = trailX + "px";
    trail.style.top = trailY + "px";
    requestAnimationFrame(animateTrail);
  }
  animateTrail();
}

/* ===== Render Summary ===== */
function renderSummary() {
  const el = $("#summaryCards");
  if (!el) return;
  el.innerHTML = summaryData
    .map(
      (item) => `
      <article class="summary-card">
        <h4 class="counter" data-target="${item.value}" data-suffix="${item.suffix || "+"}">0</h4>
        <p>${item.title}</p>
      </article>`,
    )
    .join("");
}

/* ===== Render Social ===== */
function renderSocial(targetId) {
  const el = $(targetId);
  if (!el) return;

  const platformMap = {
    "fa-github": { social: "github", tooltip: "GitHub" },
    "fa-linkedin-in": { social: "linkedin", tooltip: "LinkedIn" },
    "fa-discord": { social: "discord", tooltip: "Discord" },
    "fa-facebook": { social: "facebook", tooltip: "Facebook" },
  };

  const list = document.createElement("ul");
  list.className = "example-1";

  socialIcons.forEach((s) => {
    const info = platformMap[s.icon] || { social: "", tooltip: s.icon };
    const li = document.createElement("li");
    li.className = "icon-content";

    li.innerHTML = `
      <a
        href="${s.url}"
        target="_blank"
        aria-label="${info.tooltip}"
        data-social="${info.social}"
        class="link parent-relative"
      >
        <i class="fa-brands ${s.icon}"></i>
        <span class="tooltip-icon">${info.tooltip}</span>
      </a>
    `;
    list.appendChild(li);
  });

  el.innerHTML = "";
  el.appendChild(list);
}

/* ===== Render About Points ===== */
function renderAboutPoints() {
  const el = $("#aboutPoints");
  if (!el) return;
  el.innerHTML = aboutPoints
    .map(
      (point) => `
      <article class="about-point">
        <span class="icon-box"><i class="fa-solid ${point.icon}"></i></span>
        <div>
          <h3 class="font-semibold text-slate-900 dark:text-slate-100">${point.title}</h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-1">${point.description}</p>
        </div>
      </article>`,
    )
    .join("");
}

/* ===== Render Experience ===== */
// function renderExperience() {
//   const el = $("#experienceTimeline");
//   if (!el) return;

//   el.innerHTML = experienceData.map((exp, i) => {
//     const isLeft = exp.side === "left";
//     const cardHTML = `
//       <div class="timeline-card">
//         <span class="timeline-period"><i class="fa-solid fa-calendar-days"></i> ${exp.period}</span>
//         <h3 class="timeline-role">${exp.role}</h3>
//         <p class="timeline-company"><i class="fa-solid fa-building mr-1"></i>${exp.company}</p>
//         <p class="timeline-desc">${exp.description}</p>
//         <div class="timeline-tags">
//           ${exp.tags.map(t => `<span class="timeline-tag">${t}</span>`).join("")}
//         </div>
//       </div>`;
//     const emptyCell = `<div></div>`;

//     return `
//       <div class="timeline-item fade-up" style="transition-delay: ${i * 100}ms">
//         ${isLeft ? cardHTML : emptyCell}
//         <div class="timeline-dot-wrap">
//           <div class="timeline-dot">
//             <i class="fa-solid ${exp.icon} text-sm"></i>
//           </div>
//         </div>
//         <div class="${isLeft ? "" : ""}">
//           ${isLeft ? emptyCell : cardHTML}
//         </div>
//       </div>`;
//   }).join("");

//   // Re-run scroll reveal for new elements
//   initScrollReveal();
// }

/* ===== Render Skill Brief ===== */
function renderSkillBrief() {
  const el = $("#skillsBriefCards");
  if (!el) return;
  el.innerHTML = skillsData
    .map(
      (skill) => `
      <article class="skill-brief-card">
        <div class="flex items-center gap-3 mb-3">
          <span class="skill-index">${skill.id}</span>
          <span class="icon-box"><i class="fa-solid ${skill.icon}"></i></span>
          <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">${skill.title}</h3>
        </div>
        <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${skill.description}</p>
      </article>`,
    )
    .join("");
}

/* ===== Render Tech Stack ===== */
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
                  <span>${tech.name}</span>
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
  const centerX = 50,
    centerY = 50,
    radiusX = 42,
    radiusY = 36;
  orb.innerHTML = techOrbIcons
    .map((tech, idx) => {
      const angle = (idx / techOrbIcons.length) * Math.PI * 2;
      const x = centerX + radiusX * Math.cos(angle);
      const y = centerY + radiusY * Math.sin(angle);
      const depth = idx % 2 === 0 ? "32px" : "10px";
      return `<span class="orb-tech" style="left:${x}%;top:${y}%;--depth:${depth};--i:${idx}">
        <span class="orb-tooltip">${tech.name}</span>
        <i class="${tech.icon}"></i>
      </span>`;
    })
    .join("");
}

/* ===== Render Projects ===== */
function renderProjects() {
  const el = $("#projectCards");
  if (!el) return;
  el.innerHTML = projects
    .map(
      (p) => `
      <article class="project-card">
        <div class="project-img-wrap">
          <img src="${p.image}" alt="${p.title}" loading="lazy" />
          <div class="project-img-overlay">
            <div class="flex gap-2">
              ${p.links
                .map(
                  (link) => `
                <a href="${link.url}" target="_blank" rel="noopener noreferrer"
                  class="text-white border border-white/30 rounded-lg px-3 py-1.5 text-xs font-semibold backdrop-blur hover:bg-white/20 transition flex items-center gap-1.5">
                  <i class="${link.icon}"></i> ${link.label}
                </a>`,
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="p-5 flex flex-col flex-1">
          <p class="category">${p.category}</p>
          <h3 class="project-headline mt-1">
            <i class="fa-solid ${p.icon} text-primary text-sm"></i>
            ${p.title}
          </h3>
          <p class="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed flex-1">${p.description}</p>
          <div class="project-tech-list">
            ${p.tech.map((t) => `<span class="project-tech-icon" title="${t.name}"><i class="${t.icon}"></i></span>`).join("")}
          </div>
          <div class="project-links">
            ${p.links
              .map(
                (link) => `
              <div class="parent-relative">
                <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="project-link-icon" title="${link.label}">
                  <i class="${link.icon}"></i>
                </a>
                <span class="tooltip-icon">${link.label}</span>
              </div>`,
              )
              .join("")}
          </div>
        </div>
      </article>`,
    )
    .join("");
}

/* ===== Render Addresses ===== */
function renderAddresses() {
  const el = $("#addressCards");
  if (!el) return;
  el.innerHTML = addresses
    .map((a) => {
      const valueContent = a.html
        ? `<div class="contact-info-value">${a.html}</div>`
        : `<span class="contact-info-value">${a.value}</span>`;
      return `
        <div class="contact-info-item">
          <span class="contact-info-icon">
            <i class="fa-solid ${a.icon}"></i>
          </span>
          <div class="contact-info-text">
            <span class="contact-info-label">${a.title}</span>
            ${valueContent}
          </div>
        </div>`;
    })
    .join("");
  // Fill the social container if it exists
  renderSocial("#addressSocialContainer");
}

/* ===== Theme ===== */
function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  const toggleCheckbox = $("#themeToggle");
  if (toggleCheckbox) toggleCheckbox.checked = isDark;
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
  // Force dark if no saved preference
  applyTheme(saved ? saved === "dark" : true);
}

/* ===== Typewriter ===== */
function startTypewriter() {
  const el = $("#typewriterText");
  if (!el) return;
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
        speed = 1600;
      } else {
        speed = 60 + Math.random() * 50;
      }
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 350;
      } else {
        speed = 28 + Math.random() * 28;
      }
    }
    setTimeout(tick, speed);
  }
  setTimeout(tick, 1200);
}

/* ===== Terminal typing ===== */
function startTerminalTyping() {
  const el = $("#typingText");
  if (!el) return;
  const lines = ["Server ready ✓", "All tests passed ✓", "Deploy complete 🎉"];
  let lineIdx = 0,
    charIdx = 0,
    isDeleting = false;
  function tick() {
    const line = lines[lineIdx];
    if (!isDeleting) {
      el.textContent = line.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === line.length) {
        isDeleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = line.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        isDeleting = false;
        lineIdx = (lineIdx + 1) % lines.length;
        setTimeout(tick, 400);
        return;
      }
    }
    setTimeout(tick, isDeleting ? 35 : 70);
  }
  setTimeout(tick, 2000);
}

/* ===== Counter animation ===== */
function animateCounters() {
  const counters = $$(".counter");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target"));
          const suffix = el.getAttribute("data-suffix") || "+";
          const duration = 2000;
          const start = performance.now();
          function update(now) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.floor(eased * target) + (p < 1 ? "" : suffix);
            if (p < 1) requestAnimationFrame(update);
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

/* ===== Scroll Reveal (multi-type) ===== */
const REVEAL_SELECTOR = [
  ".fade-up",
  ".reveal-from-left",
  ".reveal-from-right",
  ".reveal-scale",
  ".reveal-zoom",
  ".section-reveal-line",
].join(", ");

function initScrollReveal() {
  const elements = document.querySelectorAll(REVEAL_SELECTOR);
  if (!elements.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const delay = Number(entry.target.dataset.delay) || 0;
        setTimeout(() => {
          entry.target.classList.add("visible", "is-visible");
        }, delay);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  elements.forEach((el) => observer.observe(el));
}

/* ===== Stagger children inside grids/lists ===== */
function initRevealStagger() {
  const parents = $$(".reveal-stagger");
  if (!parents.length) return;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.06, rootMargin: "0px 0px -8% 0px" },
  );
  parents.forEach((el) => observer.observe(el));
}

/* ===== Stagger reveal ===== */
function initStaggerReveal() {
  const els = $$(".stagger-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  els.forEach((el) => observer.observe(el));
}

/* ===== Hero orb parallax (pointer) ===== */
function initOrbParallax() {
  const orbs = $$(".ambient-orb");
  if (!orbs.length) return;
  let ticking = false;
  document.addEventListener("mousemove", (e) => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      orbs[0] &&
        (orbs[0].style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`);
      orbs[1] &&
        (orbs[1].style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`);
      orbs[2] &&
        (orbs[2].style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`);
      ticking = false;
    });
  });
}

/* ===== Scroll-linked parallax for hero columns ===== */
function initScrollParallax() {
  const els = $$("[data-parallax]");
  if (!els.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;
  const update = () => {
    const vh = window.innerHeight;
    const scrollY = window.scrollY;
    els.forEach((el) => {
      const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
      const rect = el.getBoundingClientRect();
      const elCenter = rect.top + rect.height / 2;
      const viewportCenter = vh / 2;
      const offset = (viewportCenter - elCenter) * speed * 0.15;
      el.style.setProperty("--parallax-y", `${offset}px`);
    });
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    },
    { passive: true },
  );
  update();
}

/* ===== Navigation & Events ===== */
function setupEvents() {
  const navbar = $("#navbar");
  const navLinks = $$(".nav-link");
  const sectionIds = ["hero", "about", "skills", "projects", "contact"];
  const sections = sectionIds
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const activateNavForHash = (hash) => {
    navLinks.forEach((link) =>
      link.classList.toggle("active", link.getAttribute("href") === hash),
    );
  };
  const updateActiveNavByScroll = () => {
    const scrollY = window.scrollY + 180;
    let current = "#hero";
    sections.forEach((section) => {
      if (scrollY >= section.offsetTop) current = `#${section.id}`;
    });
    activateNavForHash(current);
  };

  $("#mobileMenu").addEventListener("click", (e) => {
    if (e.target.closest("a[href^='#']") || e.target.closest(".btn-primary")) {
      const checkbox = $("#mobileToggleCheckbox");
      if (checkbox) checkbox.checked = false;
    }
  });

  const scrollBtn = $("#scrollTopBtn");
  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 80;
    navbar?.classList.toggle("glass-nav--scrolled", scrolled);
    if (scrollBtn) scrollBtn.classList.toggle("hidden", window.scrollY < 300);
    updateActiveNavByScroll();
  });

  scrollBtn?.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );
  $("#themeToggle")?.addEventListener("click", () =>
    applyTheme(!document.documentElement.classList.contains("dark")),
  );
  $("#themeToggleMobile")?.addEventListener("click", () =>
    applyTheme(!document.documentElement.classList.contains("dark")),
  );

  updateActiveNavByScroll();
}

/* ===== Toast ===== */
function showToast(title, msg) {
  const toastEl = $("#toast");
  const toastTitleEl = $("#toastTitle");
  const toastMsgEl = $("#toastMsg");
  if (!toastEl) return;
  if (window._toastTimer) clearTimeout(window._toastTimer);
  toastTitleEl.textContent = title;
  toastMsgEl.textContent = msg;
  toastEl.classList.add("show");
  window._toastTimer = setTimeout(() => toastEl.classList.remove("show"), 3000);
}

/* ===== Contact Form ===== */
function initContactForm() {
  const form = $("#contactForm");
  const sendBtn = $("#sendMessageBtn");
  if (!form || !sendBtn) return;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (sendBtn.disabled) return;
    const original = sendBtn.innerHTML;
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
        showToast("Message sent ✓", "Thanks! I'll get back to you soon.");
        form.reset();
      } else {
        showToast("Error", "Oops! Something went wrong. Please try again.");
      }
    } catch {
      showToast("Network error", "Please check your connection.");
    } finally {
      sendBtn.innerHTML = original;
      sendBtn.disabled = false;
    }
  });
}

/* ===== Resume Download ===== */
function initResumeDownload() {
  const btn = $("#downloadResumeBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    showToast("Download started ↓", "Your resume is being downloaded!");
    const a = document.createElement("a");
    a.href =
      "https://drive.google.com/uc?export=download&id=1Mpi9Na_kOGQmIVUNFBmc2t5kIHKo1PX0";
    a.download = "Hasib_Hasan_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
}

/* ===== Page Progress Bar ===== */
function initProgressBar() {
  const bar = document.createElement("div");
  bar.style.cssText = `
    position: fixed; top: 0; left: 0; height: 2px; z-index: 9999;
    background: linear-gradient(90deg, #57534e, #a8a29e);
    width: 0%; transition: width 0.1s linear; pointer-events: none;
  `;
  document.body.appendChild(bar);
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (scrollTop / docHeight) * 100 + "%";
  });
}

/* ===== Navbar shrink on scroll ===== */
function initNavbarShrink() {
  const navbar = $("#navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
      navbar?.querySelector(".max-w-7xl")?.classList.add("py-2");
      navbar?.querySelector(".max-w-7xl")?.classList.remove("py-3");
    } else {
      navbar?.querySelector(".max-w-7xl")?.classList.remove("py-2");
      navbar?.querySelector(".max-w-7xl")?.classList.add("py-3");
    }
  });
}

/* ===== Init ===== */
function init() {
  initTheme();
  initCursor();
  renderSummary();
  renderAboutPoints();
  renderSocial("#profileSocial");
  renderSocial("#footerSocial");
  renderSkillBrief();
  renderTechStack();
  // renderExperience();
  renderProjects();
  renderAddresses();
  $("#year").textContent = new Date().getFullYear();

  startTypewriter();
  startTerminalTyping();
  animateCounters();
  initScrollReveal();
  initRevealStagger();
  initStaggerReveal();
  initOrbParallax();
  initScrollParallax();
  initProgressBar();
  initNavbarShrink();
  setupEvents();
  initContactForm();
  initResumeDownload();

  console.log(
    "%c🚀 Backend Developer Portfolio Ready",
    "color: #57534e; font-weight: 800; font-size: 14px;",
  );
}

document.addEventListener("DOMContentLoaded", init);
