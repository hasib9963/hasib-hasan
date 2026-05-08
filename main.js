/* ===== DATA ===== */
const summaryData = [
  { title: "Projects Built", value: "8", suffix: "+" },
  { title: "APIs Designed", value: "15", suffix: "+" },
  { title: "Hours Coded", value: "500", suffix: "+" },
];
const skillsData = [
  { id: 1, title: "API Engineering", description: "Secure, documented, and production-ready REST & GraphQL APIs.", icon: "fa-code" },
  { id: 2, title: "Data Layer", description: "Schema strategy, migrations, indexing, and query performance.", icon: "fa-database" },
  { id: 3, title: "Performance Tuning", description: "Caching, queuing, and profiling to keep response times minimal.", icon: "fa-gauge-high" },
  { id: 4, title: "Deployment & Ops", description: "Containerized delivery, stability, and maintainable operations.", icon: "fa-server" },
];
const aboutPoints = [
  { icon: "fa-diagram-project", title: "Architecture First", description: "I structure services for clean separation of concerns, long-term maintainability, and clear ownership." },
  { icon: "fa-shield-halved", title: "Security & Reliability", description: "Authentication, authorization, input validation, and safe defaults are integrated from the beginning." },
  { icon: "fa-rocket", title: "Performance Focused", description: "I optimize query paths, caching strategy, and API throughput to keep applications fast under load." },
];
const techStackGroups = [
  { title: "Languages", icon: "fa-code", items: [{ name: "Python", icon: "devicon-python-plain colored" }, { name: "JavaScript", icon: "devicon-javascript-plain colored" }, { name: "SQL", icon: "fa-solid fa-database" }] },
  { title: "Frameworks", icon: "fa-layer-group", items: [{ name: "Django", icon: "devicon-django-plain colored" }, { name: "FastAPI", icon: "devicon-fastapi-plain colored" }, { name: "Django REST", icon: "fa-solid fa-plug-circle-bolt" }, { name: "Celery", icon: "fa-solid fa-gears" }] },
  { title: "Databases", icon: "fa-database", items: [{ name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, { name: "MySQL", icon: "devicon-mysql-plain colored" }, { name: "Redis", icon: "devicon-redis-plain colored" }, { name: "SQLite", icon: "devicon-sqlite-plain colored" }] },
  { title: "Deployment & Ops", icon: "fa-server", items: [{ name: "Docker", icon: "devicon-docker-plain colored" }, { name: "Nginx", icon: "devicon-nginx-original colored" }, { name: "Linux", icon: "devicon-linux-plain" }, { name: "Git", icon: "devicon-git-plain colored" }, { name: "GitHub", icon: "devicon-github-original" }] },
];
const techOrbIcons = [
  { name: "Python", icon: "devicon-python-plain colored" }, { name: "Django", icon: "devicon-django-plain colored" }, { name: "FastAPI", icon: "devicon-fastapi-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, { name: "Redis", icon: "devicon-redis-plain colored" }, { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" }, { name: "Linux", icon: "devicon-linux-plain" }, { name: "Nginx", icon: "devicon-nginx-original colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" }, { name: "Postman", icon: "devicon-postman-plain colored" }, { name: "GitHub", icon: "devicon-github-original" },
];
const projects = [
  { image: "https://miro.medium.com/1*6Jp3vJWe7VFlFHZ9WhSJng.jpeg", category: "Webapp", icon: "fa-solid fa-book", title: "Library Management System", description: "A comprehensive Django-based library management system designed for universities.", tech: [{ name: "Django", icon: "devicon-django-plain colored" }, { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, { name: "Redis", icon: "devicon-redis-plain colored" }, { name: "Docker", icon: "devicon-docker-plain colored" }], links: [{ icon: "fa-brands fa-github", url: "https://github.com/hasib9963/unilib", label: "GitHub" }, { icon: "fa-solid fa-arrow-up-right-from-square", url: "https://unilib-ci2k.onrender.com/", label: "Live Demo" }] },
  { image: "https://www.nadiafurniture.com/web/image/32780-f3c8fd91/Set%20Dining.webp", category: "Webapp", icon: "fas fa-couch", title: "Modern Furniture E-Commerce Platform", description: "A Django-based e-commerce web application for selling modern furniture and home decor items.", tech: [{ name: "FastAPI", icon: "devicon-fastapi-plain colored" }, { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" }, { name: "Elasticsearch", icon: "fa-solid fa-magnifying-glass-chart" }, { name: "JWT", icon: "fa-solid fa-key" }], links: [{ icon: "fa-brands fa-github", url: "https://github.com/hasib9963/furni", label: "GitHub" }, { icon: "fa-solid fa-arrow-up-right-from-square", url: "https://furni-qnpo.onrender.com/", label: "Live Demo" }] },
  { image: "https://www.resumebuilder.com/wp-content/uploads/2025/06/SecurityOfficerResumeExampleHomepage.pdf.jpeg", category: "Webapp", icon: "fa-solid fa-file", title: "ATS Friendly Resume Builder", description: "A Django-based web application for creating, managing, and analyzing professional resumes with PDF generation.", tech: [{ name: "Django Channels", icon: "fa-solid fa-tower-cell" }, { name: "Redis", icon: "devicon-redis-plain colored" }, { name: "WebSockets", icon: "fa-solid fa-wave-square" }, { name: "Celery", icon: "fa-solid fa-gears" }], links: [{ icon: "fa-brands fa-github", url: "https://github.com/hasib9963/resume-builder", label: "GitHub" }, { icon: "fa-solid fa-arrow-up-right-from-square", url: "https://resume-builder-6xmi.onrender.com/", label: "Live Demo" }] },
];
const socialIcons = [
  { icon: "fa-github", url: "https://github.com/hasib9963" }, { icon: "fa-linkedin-in", url: "https://www.linkedin.com/in/hasiblnkd/" },
  { icon: "fa-discord", url: "https://discordapp.com/users/1129265407585431605" }, { icon: "fa-facebook", url: "https://www.facebook.com/hmmhfbs/" },
];
const addresses = [
  { icon: "fa-envelope", title: "Email", value: "hasib.mahede@gmail.com" }, { icon: "fa-location-dot", title: "Location", value: "Dhaka, Bangladesh" },
  { icon: "fa-link", title: "Social Network", value: "", html: `<div id="addressSocialContainer"></div>` },
];

/* ===== DOM Helpers ===== */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

/* ===== Custom Cursor ===== */
function initCursor() {
  const cursor = $("#cursor"), trail = $("#cursorTrail");
  if (!cursor || !trail || window.innerWidth < 640) return;
  let mouseX = 0, mouseY = 0, trailX = 0, trailY = 0;
  document.addEventListener("mousemove", (e) => { mouseX = e.clientX; mouseY = e.clientY; cursor.style.left = mouseX + "px"; cursor.style.top = mouseY + "px"; });
  (function animateTrail() { trailX += (mouseX - trailX) * 0.14; trailY += (mouseY - trailY) * 0.14; trail.style.left = trailX + "px"; trail.style.top = trailY + "px"; requestAnimationFrame(animateTrail); })();
}

/* ===== Render Functions ===== */
function renderSummary() {
  const el = $("#summaryCards"); if (!el) return;
  el.innerHTML = summaryData.map(item => `<article class="summary-card"><h4 class="counter" data-target="${item.value}" data-suffix="${item.suffix || '+'}">0</h4><p>${item.title}</p></article>`).join("");
}
function renderSocial(targetId) {
  const el = $(targetId); if (!el) return;
  const platformMap = { "fa-github": { social: "github", tooltip: "GitHub" }, "fa-linkedin-in": { social: "linkedin", tooltip: "LinkedIn" }, "fa-discord": { social: "discord", tooltip: "Discord" }, "fa-facebook": { social: "facebook", tooltip: "Facebook" } };
  const list = document.createElement("ul"); list.className = "example-1";
  socialIcons.forEach(s => { const info = platformMap[s.icon] || { social: "", tooltip: s.icon }; const li = document.createElement("li"); li.className = "icon-content"; li.innerHTML = `<a href="${s.url}" target="_blank" aria-label="${info.tooltip}" data-social="${info.social}" class="link parent-relative"><i class="fa-brands ${s.icon}"></i><span class="tooltip-icon">${info.tooltip}</span></a>`; list.appendChild(li); });
  el.innerHTML = ""; el.appendChild(list);
}
function renderAboutPoints() {
  const el = $("#aboutPoints"); if (!el) return;
  el.innerHTML = aboutPoints.map(point => `<article class="about-point"><span class="icon-box"><i class="fa-solid ${point.icon}"></i></span><div><h3 class="font-semibold text-slate-900 dark:text-slate-100">${point.title}</h3><p class="text-slate-500 dark:text-slate-400 text-sm mt-1">${point.description}</p></div></article>`).join("");
}
function renderSkillBrief() {
  const el = $("#skillsBriefCards"); if (!el) return;
  el.innerHTML = skillsData.map(skill => `<article class="skill-brief-card"><div class="flex items-center gap-3 mb-3"><span class="skill-index">${skill.id}</span><span class="icon-box"><i class="fa-solid ${skill.icon}"></i></span><h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">${skill.title}</h3></div><p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${skill.description}</p></article>`).join("");
}
function renderTechStack() {
  const gw = $("#techStackGroups"); if (gw) gw.innerHTML = techStackGroups.map(g => `<article class="tech-group"><h4 class="tech-group-title"><span class="icon-box"><i class="fa-solid ${g.icon}"></i></span><span>${g.title}</span></h4><div class="tech-group-items">${g.items.map(t => `<div class="tech-item"><span class="tech-icon"><i class="${t.icon}"></i></span><span>${t.name}</span></div>`).join("")}</div></article>`).join("");
  const orb = $("#techIconOrb"); if (!orb) return;
  const cx = 50, cy = 50, rx = 42, ry = 36;
  orb.innerHTML = techOrbIcons.map((t, i) => { const a = (i / techOrbIcons.length) * Math.PI * 2; const x = cx + rx * Math.cos(a); const y = cy + ry * Math.sin(a); const d = i % 2 === 0 ? "32px" : "10px"; return `<span class="orb-tech" style="left:${x}%;top:${y}%;--depth:${d};--i:${i}"><span class="orb-tooltip">${t.name}</span><i class="${t.icon}"></i></span>`; }).join("");
}
function renderProjects() {
  const el = $("#projectCards"); if (!el) return;
  el.innerHTML = projects.map(p => `<article class="project-card"><div class="project-img-wrap"><img src="${p.image}" alt="${p.title}" loading="lazy" /><div class="project-img-overlay"><div class="flex gap-2">${p.links.map(l => `<a href="${l.url}" target="_blank" rel="noopener noreferrer" class="text-white border border-white/30 rounded-lg px-3 py-1.5 text-xs font-semibold backdrop-blur hover:bg-white/20 transition flex items-center gap-1.5"><i class="${l.icon}"></i> ${l.label}</a>`).join("")}</div></div></div><div class="p-5 flex flex-col flex-1"><p class="category">${p.category}</p><h3 class="project-headline mt-1"><i class="fa-solid ${p.icon} text-primary text-sm"></i>${p.title}</h3><p class="text-slate-500 dark:text-slate-400 text-sm mt-2 leading-relaxed flex-1">${p.description}</p><div class="project-tech-list">${p.tech.map(t => `<span class="project-tech-icon" title="${t.name}"><i class="${t.icon}"></i></span>`).join("")}</div><div class="project-links">${p.links.map(l => `<div class="parent-relative"><a href="${l.url}" target="_blank" rel="noopener noreferrer" class="project-link-icon" title="${l.label}"><i class="${l.icon}"></i></a><span class="tooltip-icon">${l.label}</span></div>`).join("")}</div></div></article>`).join("");
}
function renderAddresses() {
  const el = $("#addressCards"); if (!el) return;
  el.innerHTML = addresses.map(a => { const vc = a.html ? `<div class="contact-info-value">${a.html}</div>` : `<span class="contact-info-value">${a.value}</span>`; return `<div class="contact-info-item"><span class="contact-info-icon"><i class="fa-solid ${a.icon}"></i></span><div class="contact-info-text"><span class="contact-info-label">${a.title}</span>${vc}</div></div>`; }).join("");
  renderSocial("#addressSocialContainer");
}

/* ===== Theme ===== */
function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
  const tc = $("#themeToggle"); if (tc) tc.checked = isDark;
  const mb = $("#themeToggleMobile"); if (mb) mb.innerHTML = isDark ? '<i class="fa-solid fa-sun mr-2"></i>Light mode' : '<i class="fa-solid fa-moon mr-2"></i>Dark mode';
  localStorage.setItem("theme", isDark ? "dark" : "light");
}
function initTheme() { const saved = localStorage.getItem("theme"); applyTheme(saved ? saved === "dark" : true); }

/* ===== Typewriters ===== */
function startTypewriter() {
  const el = $("#typewriterText"); if (!el) return;
  const roles = ["Python Django Developer", "Backend Engineer", "Problem Solver", "API Architect", "Database Enthusiast"];
  let ri = 0, ci = 0, del = false, spd = 80;
  (function tick() { const cur = roles[ri]; if (!del) { el.textContent = cur.substring(0, ci + 1); ci++; if (ci === cur.length) { del = true; spd = 1600; } else spd = 60 + Math.random() * 50; } else { el.textContent = cur.substring(0, ci - 1); ci--; if (ci === 0) { del = false; ri = (ri + 1) % roles.length; spd = 350; } else spd = 28 + Math.random() * 28; } setTimeout(tick, spd); })();
}
function startTerminalTyping() {
  const el = $("#typingText"); if (!el) return;
  const lines = ["Server ready ✓", "All tests passed ✓", "Deploy complete 🎉"];
  let li = 0, ci = 0, del = false;
  (function tick() { const line = lines[li]; if (!del) { el.textContent = line.substring(0, ci + 1); ci++; if (ci === line.length) { del = true; setTimeout(tick, 2000); return; } } else { el.textContent = line.substring(0, ci - 1); ci--; if (ci === 0) { del = false; li = (li + 1) % lines.length; setTimeout(tick, 400); return; } } setTimeout(tick, del ? 35 : 70); })();
}

/* ===== Counters ===== */
function animateCounters() {
  const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { const el = e.target, tgt = parseInt(el.getAttribute("data-target")), suf = el.getAttribute("data-suffix") || "+", dur = 2000, st = performance.now(); (function up(now) { const p = Math.min((now - st) / dur, 1), eased = 1 - Math.pow(1 - p, 3); el.textContent = Math.floor(eased * tgt) + (p < 1 ? "" : suf); if (p < 1) requestAnimationFrame(up); })(st); obs.unobserve(el); } }); }, { threshold: 0.6 });
  $$(".counter").forEach(c => obs.observe(c));
}

/* ===== Scroll Reveal ===== */
const REVEAL_SEL = ".fade-up,.reveal-from-left,.reveal-from-right,.reveal-scale,.reveal-zoom,.section-reveal-line";
function initScrollReveal() {
  const els = document.querySelectorAll(REVEAL_SEL); if (!els.length) return;
  const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (!e.isIntersecting) return; const d = Number(e.target.dataset.delay) || 0; setTimeout(() => e.target.classList.add("visible", "is-visible"), d); obs.unobserve(e.target); }); }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  els.forEach(el => obs.observe(el));
}
function initRevealStagger() {
  const obs = new IntersectionObserver((entries) => { entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-visible"); obs.unobserve(e.target); } }); }, { threshold: 0.06, rootMargin: "0px 0px -8% 0px" });
  $$(".reveal-stagger").forEach(el => obs.observe(el));
}

/* ===== Parallax ===== */
function initOrbParallax() {
  const orbs = $$(".ambient-orb"); if (!orbs.length) return; let ticking = false;
  document.addEventListener("mousemove", (e) => { if (ticking) return; ticking = true; requestAnimationFrame(() => { const x = (e.clientX / window.innerWidth - 0.5) * 20, y = (e.clientY / window.innerHeight - 0.5) * 20; orbs[0] && (orbs[0].style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`); orbs[1] && (orbs[1].style.transform = `translate(${-x * 0.4}px, ${-y * 0.4}px)`); orbs[2] && (orbs[2].style.transform = `translate(${x * 0.3}px, ${y * 0.5}px)`); ticking = false; }); });
}
function initScrollParallax() {
  const els = $$("[data-parallax]"); if (!els.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  let ticking = false;
  const update = () => { const vh = window.innerHeight, sy = window.scrollY; els.forEach(el => { const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1, rect = el.getBoundingClientRect(), ec = rect.top + rect.height / 2, vc = vh / 2, off = (vc - ec) * speed * 0.15; el.style.setProperty("--parallax-y", `${off}px`); }); ticking = false; };
  window.addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true }); update();
}

/* ===== Navigation & Events ===== */
function setupEvents() {
  const navbar = $("#navbar"), navLinks = $$(".nav-link"), secIds = ["hero", "about", "skills", "projects", "contact"], secs = secIds.map(id => document.getElementById(id)).filter(Boolean);
  const activate = (hash) => navLinks.forEach(l => l.classList.toggle("active", l.getAttribute("href") === hash));
  const updateNav = () => { const sy = window.scrollY + 180; let cur = "#hero"; secs.forEach(s => { if (sy >= s.offsetTop) cur = `#${s.id}`; }); activate(cur); };
  $("#mobileMenu").addEventListener("click", (e) => { if (e.target.closest("a[href^='#']") || e.target.closest(".btn-primary")) { const cb = $("#mobileToggleCheckbox"); if (cb) cb.checked = false; } });
  const sBtn = $("#scrollTopBtn");
  window.addEventListener("scroll", () => { const sc = window.scrollY > 80; navbar?.classList.toggle("glass-nav--scrolled", sc); if (sBtn) sBtn.classList.toggle("hidden", window.scrollY < 300); updateNav(); });
  sBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  $("#themeToggle")?.addEventListener("click", () => applyTheme(!document.documentElement.classList.contains("dark")));
  $("#themeToggleMobile")?.addEventListener("click", () => applyTheme(!document.documentElement.classList.contains("dark")));
  updateNav();
}

/* ===== Toast ===== */
function showToast(title, msg) {
  const te = $("#toast"), tt = $("#toastTitle"), tm = $("#toastMsg"); if (!te) return;
  if (window._toastTimer) clearTimeout(window._toastTimer);
  tt.textContent = title; tm.textContent = msg; te.classList.add("show");
  window._toastTimer = setTimeout(() => te.classList.remove("show"), 3000);
}

/* ===== Contact Form ===== */
function initContactForm() {
  const form = $("#contactForm"), btn = $("#sendMessageBtn"); if (!form || !btn) return;
  form.addEventListener("submit", async (e) => { e.preventDefault(); if (btn.disabled) return; const orig = btn.innerHTML; btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Sending…'; try { const res = await fetch("https://formspree.io/f/mnjlejgb", { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } }); const data = await res.json(); if (data.ok) { showToast("Message sent ✓", "Thanks! I'll get back to you soon."); form.reset(); } else showToast("Error", "Oops! Something went wrong."); } catch { showToast("Network error", "Please check your connection."); } finally { btn.innerHTML = orig; btn.disabled = false; } });
}

/* ===== Resume Download ===== */
function initResumeDownload() {
  const btn = $("#downloadResumeBtn"); if (!btn) return;
  btn.addEventListener("click", () => { showToast("Download started ↓", "Your resume is being downloaded!"); const a = document.createElement("a"); a.href = "https://drive.google.com/uc?export=download&id=1Mpi9Na_kOGQmIVUNFBmc2t5kIHKo1PX0"; a.download = "Hasib_Hasan_Resume.pdf"; document.body.appendChild(a); a.click(); a.remove(); });
}

/* ===== Progress Bar ===== */
function initProgressBar() {
  const bar = document.createElement("div"); bar.style.cssText = "position:fixed;top:0;left:0;height:2px;z-index:9999;background:linear-gradient(90deg,#57534E,#A8A29E);width:0%;transition:width 0.1s linear;pointer-events:none;"; document.body.appendChild(bar);
  window.addEventListener("scroll", () => { const st = window.scrollY, dh = document.documentElement.scrollHeight - window.innerHeight; bar.style.width = (st / dh) * 100 + "%"; });
}

/* ===== Init ===== */
function init() {
  initTheme(); initCursor(); renderSummary(); renderAboutPoints(); renderSocial("#profileSocial"); renderSocial("#footerSocial");
  renderSkillBrief(); renderTechStack(); renderProjects(); renderAddresses(); $("#year").textContent = new Date().getFullYear();
  startTypewriter(); startTerminalTyping(); animateCounters(); initScrollReveal(); initRevealStagger();
  initOrbParallax(); initScrollParallax(); initProgressBar(); setupEvents(); initContactForm(); initResumeDownload();
}
document.addEventListener("DOMContentLoaded", init);