// Builds every section from the data files in js/data/.
// Edit content in js/data/*.js — this file only turns that data into markup.
// It runs before the page's interaction script, so animations and effects attach to the rendered elements.
(() => {
  const D = window.PORTFOLIO || {};
  const links = D.toolLinks || {};

  const esc = (v) => String(v ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const ext = (on) => (on ? ' target="_blank" rel="noopener noreferrer"' : "");
  const isExternal = (href) => /^https?:\/\//.test(href);

  // Tool tag: a link to the official site when one is known, otherwise a plain tag
  const chip = (name) => {
    const url = links[name];
    if (!url) return `<span class="chip">${esc(name)}</span>`;
    return `<a class="chip chip-link" href="${esc(url)}"${ext(true)} title="Open the official ${esc(name)} site" aria-label="${esc(name)}, official site (opens in a new tab)">${esc(name)}<span class="chip-arrow" aria-hidden="true">↗</span></a>`;
  };
  const chips = (list = []) => `<div class="chips">${list.map(chip).join("")}</div>`;

  const head = (s) => `
        <div class="section-head">
          <div><div class="section-kicker">${esc(s.kicker)}</div><h2 class="section-title">${(s.title || []).map(esc).join("<br>")}</h2></div>
          <p class="section-intro">${esc(s.intro)}</p>
        </div>`;

  const fill = (selector, html) => {
    const el = document.querySelector(selector);
    if (el && html) el.innerHTML = html;
  };

  /* ── Hero ─────────────────────────────────────────── */
  const hero = (h) => {
    if (!h) return "";
    const c = h.card || {};
    const tagClasses = ["react", "web", "mobile", "ui"];
    const headline = (h.headline || []).map((l) => (l.accent ? `<span>${esc(l.text)}</span>` : esc(l.text))).join("<br>");
    return `
      <canvas class="hero-canvas" aria-hidden="true"></canvas>
      <div class="hero-grid shell">
        <div>
          <div class="eyebrow">${esc(h.eyebrow)}</div>
          <h1>${headline}</h1>
          <p class="hero-copy"><strong>${esc(h.intro?.lead)}</strong> ${esc(h.intro?.text)}</p>
          <div class="hero-actions">
            ${(h.actions || []).map((a) => `<a class="button button-${a.style === "primary" ? "primary" : "secondary"}" href="${esc(a.href)}"${ext(isExternal(a.href))}>${esc(a.label)} <span aria-hidden="true">${esc(a.icon)}</span></a>`).join("\n            ")}
          </div>
        </div>
        <aside class="hero-card" aria-label="Profile snapshot">
          <span class="glare" aria-hidden="true"></span>
          <div class="hero-card-top"><span class="hero-card-label">${esc(c.label)}</span><span class="hero-card-id">${esc(c.id)}</span></div>
          <div class="hero-orbit" aria-label="${esc(c.years)} plus years of web and mobile application experience">
            <span class="orbit-ring one" aria-hidden="true"></span><span class="orbit-ring two" aria-hidden="true"></span><span class="orbit-ring three" aria-hidden="true"></span>
            ${(c.orbitTags || []).slice(0, 4).map((t, i) => `<span class="orbit-tag ${tagClasses[i]}" aria-hidden="true">${esc(t)}</span>`).join("")}
            <div class="hero-years"><strong data-count="${esc(c.years)}" data-suffix="${esc(c.yearsSuffix)}">${esc(c.years)}${esc(c.yearsSuffix)}</strong><span>${(c.yearsCaption || []).map(esc).join("<br>")}</span></div>
          </div>
          <div class="hero-card-footer"><div><span class="hero-card-label">${esc(c.roleLabel)}</span><strong class="hero-card-role">${esc(c.role)}</strong></div>${c.link ? `<a class="hero-card-link" href="${esc(c.link.href)}"${ext(true)}>${esc(c.link.label)}</a>` : ""}</div>
          <div class="hero-card-location">${esc(c.location)}</div>
        </aside>
      </div>`;
  };

  /* ── About ────────────────────────────────────────── */
  const pillarIcons = {
    components: '<rect x="4" y="4" width="16" height="16" rx="3"/><rect x="10" y="10" width="16" height="16" rx="3"/><path d="M14 18h8M18 14v8"/>',
    devices: '<rect x="3" y="5" width="20" height="14" rx="2"/><path d="M9 23h8M13 19v4"/><rect x="21" y="11" width="8" height="15" rx="2"/>',
    quality: '<path d="M16 3l10 4v8c0 7-4.5 11-10 13C10.5 26 6 22 6 15V7z"/><path d="M11 15.5l3.5 3.5L21 12"/>',
    team: '<circle cx="11" cy="10" r="4"/><circle cx="22" cy="12" r="3"/><path d="M3 26c0-4.5 3.6-8 8-8s8 3.5 8 8"/><path d="M19 19.5c1-.6 2-1 3-1 3.3 0 6 2.7 6 6"/>',
  };
  const about = (a) => a && `
      <div class="shell">${head(a)}
        <div class="about-grid">
          <div>
            ${(a.paragraphs || []).map((p) => `<p class="about-copy">${esc(p)}</p>`).join("\n            ")}
          </div>
          <div class="pillars" aria-label="How I work">
            ${(a.principles || []).map((p, i) => `
            <div class="pillar${i === 0 ? " is-active" : ""}" style="--pi:${i}">
              <button class="pillar-head" type="button" id="pillar-${i}" aria-expanded="${i === 0}" aria-controls="pillar-body-${i}">
                <span class="pillar-num">${pad(i + 1)}</span><span class="pillar-title">${esc(p.title)}</span><span class="pillar-chev" aria-hidden="true"></span>
              </button>
              <div class="pillar-body" id="pillar-body-${i}" role="region" aria-labelledby="pillar-${i}"><div class="pillar-inner">
                <svg class="pillar-icon" viewBox="0 0 32 30" aria-hidden="true">${pillarIcons[p.icon] || pillarIcons.components}</svg>
                <p>${esc(p.text)}</p>
              </div></div>
              <span class="pillar-progress" aria-hidden="true"></span>
            </div>`).join("")}
          </div>
        </div>
      </div>`;

  /* ── Expertise ────────────────────────────────────── */
  const skills = (s) => s && `
      <div class="expertise-marquee" aria-hidden="true"><span>${esc(s.backgroundText)}</span><span>${esc(s.backgroundText)}</span></div>
      <div class="shell">${head(s)}
        <div class="skills-grid">
          ${(s.groups || []).map((g) => `<article class="skill-card"><div class="skill-icon" aria-hidden="true">${esc(g.icon)}</div><h3>${esc(g.title)}</h3><p>${esc(g.text)}</p>${chips(g.tools)}</article>`).join("\n          ")}
        </div>
        ${s.note ? `<p class="expertise-note">${esc(s.note).replace("↗", "<b>↗</b>")}</p>` : ""}
      </div>`;

  /* ── Projects ─────────────────────────────────────── */
  const projects = (p) => {
    if (!p) return "";
    const items = p.items || [];
    return `
      <div class="shell">${head(p)}
        <div class="project-filters" role="group" aria-label="Filter projects">
          ${(p.filters || []).map((f, i) => `<button class="filter-button" type="button" data-filter="${esc(f.key)}" aria-pressed="${i === 0}">${esc(f.button)}</button>`).join("\n          ")}
        </div>
        <p class="filter-status" aria-live="polite">Showing all ${items.length} projects</p>
        <div class="projects">
          ${items.map((it, i) => `
          <article class="project" data-category="${esc((it.categories || []).join(" "))}">
            <div class="project-top"><span class="project-index">${pad(i + 1)} — ${esc(it.area)}</span><span class="project-type">${esc(it.client)}</span></div>
            <h3>${esc(it.name)}</h3>
            <p>${esc(it.description)}</p>
            ${chips(it.tools)}
            ${it.details ? `<button class="project-more" type="button" data-project="${i}" aria-haspopup="dialog">View details <span aria-hidden="true">→</span></button>` : ""}
          </article>`).join("")}
        </div>
      </div>`;
  };

  // Project details panel content (used by the project-details dialog in index.html)
  window.PORTFOLIO.renderProjectDetails = (i) => {
    const items = (D.projects || {}).items || [];
    const it = items[i]; if (!it) return "";
    const d = it.details || {};
    return `
      <header class="pd-head">
        <div class="pd-kicker">${pad(i + 1)} — ${esc(it.area)}</div>
        <h2 class="pd-title" id="pd-title">${esc(it.name)}</h2>
        <div class="pd-meta">
          ${it.client ? `<div><span>Client</span><b>${esc(it.client)}</b></div>` : ""}
          ${d.role ? `<div><span>My role</span><b>${esc(d.role)}</b></div>` : ""}
          ${d.platform ? `<div><span>Platform</span><b>${esc(d.platform)}</b></div>` : ""}
          ${d.period ? `<div><span>Period</span><b>${esc(d.period)}</b></div>` : ""}
        </div>
      </header>
      ${d.overview ? `<section class="pd-block" style="--b:0"><h3>Overview</h3><p>${esc(d.overview)}</p></section>` : ""}
      ${(d.modules || []).length ? `<section class="pd-block" style="--b:1"><h3>What the product does</h3><div class="pd-modules">${d.modules.map((m) => `<div class="pd-module"><b>${esc(m.name)}</b><p>${esc(m.text)}</p></div>`).join("")}</div></section>` : ""}
      ${(d.contributions || []).length ? `<section class="pd-block" style="--b:2"><h3>What I did</h3><ol class="pd-list">${d.contributions.map((c, k) => `<li style="--k:${k}">${esc(c)}</li>`).join("")}</ol></section>` : ""}
      ${(d.highlights || []).length ? `<section class="pd-block" style="--b:3"><h3>Key highlights</h3><div class="pd-highlights">${d.highlights.map((c) => `<div class="pd-hl"><span aria-hidden="true">★</span><p>${esc(c)}</p></div>`).join("")}</div></section>` : ""}
      ${(d.outcomes || []).length ? `<section class="pd-block" style="--b:3"><h3>Outcomes</h3><ul class="pd-outcomes">${d.outcomes.map((c) => `<li>${esc(c)}</li>`).join("")}</ul></section>` : ""}
      ${(it.tools || []).length ? `<section class="pd-block" style="--b:4"><h3>Tech stack</h3>${chips(it.tools)}</section>` : ""}
      ${d.link ? `<a class="button button-primary pd-link" href="${esc(d.link.href)}"${ext(true)}>${esc(d.link.label || "Visit project")} <span aria-hidden="true">↗</span></a>` : ""}`;
  };

  /* ── Experience ───────────────────────────────────── */
  const experience = (e) => e && `
      <div class="shell">${head(e)}
        <div class="career-track">
          ${(e.roles || []).map((r, i) => `
          <article class="career-step${r.current ? " current" : ""}">
            <div class="career-era"><span class="career-index">CHAPTER ${pad((e.roles || []).length - i)}</span><span class="career-period">${esc(r.period)}</span></div>
            <span class="career-node" aria-hidden="true"></span>
            <div class="career-content"><h3>${esc(r.title)}</h3><div class="career-company">${esc(r.company)}</div>
              ${r.current ? `<span class="career-status">${esc(r.currentLabel || "Current role")}</span>` : ""}
              <p>${esc(r.description)}</p>
              ${(r.responsibilities || []).length ? `
              <button class="career-more" type="button" aria-expanded="false" aria-controls="career-resp-${i}"><span class="cm-label">Show responsibilities</span><span class="cm-count">${r.responsibilities.length}</span><span class="cm-chev" aria-hidden="true"></span></button>
              <div class="career-resp" id="career-resp-${i}"><div class="career-resp-inner"><ul>${r.responsibilities.map((x, k) => `<li style="--k:${k}">${esc(x)}</li>`).join("")}</ul></div></div>` : ""}
              <div class="career-tech"><span class="career-tech-label">Technologies</span>${chips(r.tools)}</div>
            </div>
          </article>`).join("")}
        </div>
      </div>`;

  /* ── Education ────────────────────────────────────── */
  const education = (e) => e && `
      <div class="shell">${head(e)}
        ${(e.entries || []).map((en) => `
        <div class="education-entry" data-ghost="${esc(en.backgroundText)}">
          <div><span class="education-years">${esc(en.years)}</span><span class="education-level">${esc(en.level)}</span></div>
          <div class="education-details">
            <h3 class="education-degree">${esc(en.degree)}</h3>
            <p class="education-major">${esc(en.major)}</p>
            <p class="education-school">${esc(en.school)}</p>
            <div class="education-meta">${(en.meta || []).map((m) => `<span>${esc(m)}</span>`).join("")}</div>
          </div>
        </div>`).join("")}
      </div>`;

  /* ── Certifications ───────────────────────────────── */
  const shortId = (id = "") => (id.length > 20 ? `${id.slice(0, 11)}…${id.slice(-8)}` : id);
  const certifications = (c) => c && `
      <div class="shell">${head(c)}
        <div class="certs">
          ${(c.items || []).map((it) => `
          <article class="cert">
            <span class="cert-holo" aria-hidden="true"></span>
            <div class="cert-top"><span class="cert-issuer">${esc(it.issuer)}</span><time class="cert-date" datetime="${esc(it.date)}">${esc(it.dateLabel)}</time></div>
            <h3>${esc(it.title)}</h3>
            <dl class="cert-meta"><div><dt>Instructor</dt><dd>${esc(it.instructor)}</dd></div><div><dt>Length</dt><dd>${esc(it.length)}</dd></div><div><dt>Completed</dt><dd>${esc(it.completed)}</dd></div></dl>
            ${chips(it.tags)}
            <div class="cert-foot"><code class="cert-id">${esc(shortId(it.credentialId))}</code>${it.verifyUrl ? `<a class="cert-verify" href="${esc(it.verifyUrl)}"${ext(true)}>Verify credential <span aria-hidden="true">↗</span></a>` : ""}</div>
          </article>`).join("")}
        </div>
      </div>`;

  /* ── Beyond work ──────────────────────────────────── */
  const hobbyVisuals = {
    photo: `<div class="hobby-visual viewfinder" aria-hidden="true">
              <span class="vf-grid"></span>
              <span class="vf-corner tl"></span><span class="vf-corner tr"></span><span class="vf-corner bl"></span><span class="vf-corner br"></span>
              <span class="vf-focus"></span>
              <span class="vf-rec"><i></i>LIVE VIEW</span>
              <span class="vf-count">FRAMES <b>000</b></span>
              <span class="vf-readout">f/2.8 · 1/250 · ISO 200</span>
              <svg class="vf-iris" viewBox="0 0 100 100"><g>
                <path d="M50 4 L72 30 L50 50Z"/><path d="M90 28 L80 60 L50 50Z"/><path d="M84 78 L50 80 L50 50Z"/><path d="M40 96 L22 70 L50 50Z"/><path d="M6 64 L18 34 L50 50Z"/><path d="M22 10 L50 4 L50 50Z"/>
              </g></svg>
              <span class="vf-flash"></span>
            </div>`,
    badminton: `<div class="hobby-visual court" aria-hidden="true">
              <span class="court-floor"></span><span class="court-net"></span>
              <svg class="shuttle" viewBox="0 0 24 24"><path d="M4 12 L14 5 L14 19Z" class="feathers"/><path d="M6 12 L14 8 M6 12 L14 16 M5 12 L14 12" class="ribs"/><circle cx="17" cy="12" r="4" class="cork"/></svg>
              <span class="rally">RALLY <b>0</b></span>
            </div>`,
    books: `<div class="hobby-visual book" aria-hidden="true">
              <span class="book-back"></span>
              <span class="page" style="--p:3"></span><span class="page" style="--p:2"></span><span class="page" style="--p:1"></span><span class="page" style="--p:0"></span>
              <span class="book-cover"><i></i></span>
            </div>`,
    movies: `<div class="hobby-visual reel" aria-hidden="true">
              <div class="filmstrip"><div class="frames">${"<span></span>".repeat(12)}</div></div>
              <span class="play"></span>
            </div>`,
    travel: `<div class="hobby-visual route" aria-hidden="true">
              <svg viewBox="0 0 240 120" preserveAspectRatio="xMidYMid meet">
                <path class="route-base" d="M18 96 C 60 20, 110 120, 150 60 S 210 30, 222 40"/>
                <path class="route-line" d="M18 96 C 60 20, 110 120, 150 60 S 210 30, 222 40" pathLength="1"/>
                <circle class="route-start" cx="18" cy="96" r="4"/>
                <g class="route-pin"><path d="M222 40 c0 -8 -6 -13 -11 -13 s-11 5 -11 13 c0 8 11 18 11 18 s11 -10 11 -18z" transform="translate(11 -18)"/><circle cx="222" cy="22" r="3.5"/></g>
              </svg>
              <span class="compass"><i></i></span>
            </div>`,
  };
  const hobbies = (h) => h && `
      <div class="shell">${head(h)}
        <div class="hobbies">
          ${(h.items || []).map((it) => `
          <article class="hobby hobby--${esc(it.type)}" tabindex="0" aria-label="${esc(it.tag)}">
            ${hobbyVisuals[it.type] || ""}
            <div class="hobby-body"><span class="hobby-tag">${esc(it.tag)}</span><h3>${esc(it.title)}</h3><p>${esc(it.text)}</p></div>
          </article>`).join("")}
        </div>
      </div>`;

  /* ── Contact + footer ─────────────────────────────── */
  const linkTag = (l, cls = "") => `<a${cls ? ` class="${cls}"` : ""} href="${esc(l.href)}"${ext(l.external || isExternal(l.href))}>${esc(l.label)}</a>`;
  const contact = (c) => c && `
      <div class="shell">
        <div class="contact-panel">
          ${c.photo ? `<figure class="contact-photo"><img src="${esc(c.photo.src)}" alt="${esc(c.photo.alt)}" width="560" height="700" loading="lazy" decoding="async"></figure>` : ""}
          <div class="contact-text"><div class="section-kicker">${esc(c.kicker)}</div><h2>${esc(c.title)}</h2><p>${esc(c.text)}</p></div>
          <div class="contact-actions">${(c.actions || []).map((a) => linkTag(a, `button button-${a.style === "primary" ? "primary" : "secondary"}`)).join("")}</div>
        </div>
      </div>`;
  const footer = (c) => c?.footer && `<div class="footer-inner shell"><span>${esc(c.footer.text)}</span><div class="footer-links">${(c.footer.links || []).map((l) => linkTag(l)).join("")}</div></div>`;

  fill(".hero", hero(D.hero));
  fill("#about", about(D.about));
  fill("#expertise", skills(D.skills));
  fill("#projects", projects(D.projects));
  fill("#experience", experience(D.experience));
  fill("#education", education(D.education));
  fill("#certifications", certifications(D.certifications));
  fill("#life", hobbies(D.hobbies));
  fill("#contact", contact(D.contact));
  fill("footer", footer(D.contact));
})();
