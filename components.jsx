// Shared React components for the Ballerz Abroad website UI kit.
// Loaded via <script type="text/babel" src="components.jsx">.
// Components are attached to window at the bottom for cross-file access.

const { useState, useEffect, useRef } = React;

const EXPERIENCES = [
  { id: "exp-nxgenpro",   label: "NXGENPro",                    loc: "England · UK" },
  { id: "exp-levante",    label: "Levante Academy Experience",   loc: "Valencia · ES" },
  { id: "exp-betis",      label: "Real Betis Academy Experience",loc: "Seville · ES" },
  { id: "exp-benfica",    label: "Benfica Academy Experience",   loc: "Lisbon · PT" },
  { id: "exp-feyenoord",  label: "Feyenoord Academy Experience", loc: "Rotterdam · NL" },
];

function Nav({ active = "home", onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [expOpen, setExpOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef(null);
  const openMenu = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setExpOpen(true); };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setExpOpen(false), 220);
  };
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  // Close mobile nav on route change
  const go = (id) => { setMobileOpen(false); onNavigate && onNavigate(id); };
  const link = (id, label) => (
    <a
      href="#"
      className={active === id ? "is-active" : ""}
      onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(id); }}
    >{label}</a>
  );
  const isExpActive = active === "detail" || active.startsWith("exp-");
  return (
    <>
      <nav className={"nav " + (scrolled ? "nav--scrolled" : "")}>
        <div className="nav__left">
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ border: "none", display: "flex", alignItems: "center", background: "transparent" }}>
            <img className="nav__logo" src="https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fc2524f6556de432fb71303db254cb2a5?format=webp&width=800&height=1200" alt="Ballerz Abroad" />
          </a>
          <div className="nav__links">
            <a href="#" className={active === "home" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); go("home"); }}>Home</a>
            <div className="nav__dropdown" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
              <a href="#" className={isExpActive ? "is-active" : ""} onClick={(e) => { e.preventDefault(); go("detail"); }}>
                Experiences <span className="nav__chev">▾</span>
              </a>
              <div className={"nav__menu " + (expOpen ? "is-open" : "")}>
                <div className="nav__menu-inner">
                  <div className="nav__menu-eyebrow">Experiences · 04</div>
                  {EXPERIENCES.map(e => (
                    <a key={e.id} href="#" className="nav__menu-item" onClick={(ev) => { ev.preventDefault(); setExpOpen(false); go(e.id); }}>
                      <span className="nav__menu-item-t">{e.label}</span>
                      <span className="nav__menu-item-l">{e.loc}</span>
                    </a>
                  ))}
                  <a href="#" className="nav__menu-foot" onClick={(ev) => { ev.preventDefault(); setExpOpen(false); go("detail"); }}>View all experiences →</a>
                </div>
              </div>
            </div>
            <a href="#" className={active === "tournaments" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); go("tournaments"); }}>Tournaments</a>
            <a href="#" className={active === "about" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); go("about"); }}>About</a>
            <a href="#" className={active === "contact" ? "is-active" : ""} onClick={(e) => { e.preventDefault(); go("contact"); }}>Contact</a>
          </div>
        </div>
        <div className="nav__cta">
          <button className="btn btn--primary btn--sm" onClick={() => go("application")}>Get in touch <span>→</span></button>
          <button className="nav__hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div className={"nav__mobile " + (mobileOpen ? "is-open" : "")}>
        <button className="nav__mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
        <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); go("detail"); }}>Experiences</a>
        {EXPERIENCES.map(e => (
          <a key={e.id} href="#" onClick={(ev) => { ev.preventDefault(); go(e.id); }} style={{ fontSize: "14px !important" }}>{e.label}</a>
        ))}
        <a href="#" onClick={(e) => { e.preventDefault(); go("tournaments"); }}>Tournaments</a>
        <a href="#" onClick={(e) => { e.preventDefault(); go("about"); }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); go("contact"); }}>Contact</a>
        <div className="nav__mobile-cta">
          <button className="btn btn--primary btn--lg" style={{ width: "100%", justifyContent: "center" }} onClick={() => go("application")}>Get in touch →</button>
        </div>
      </div>
    </>
  );
}

// ---------------------------------------------------------------------------
// Floating WhatsApp pill — always visible
// ---------------------------------------------------------------------------
function WhatsAppFab() {
  return (
    <button className="wa-fab" onClick={() => alert("Opens wa.me/...")}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2 22l4.31-1.13a9.86 9.86 0 0 0 5.73 1.82h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.82 9.82 0 0 0 12.04 2zm5.46 14.16c-.23.65-1.34 1.24-1.87 1.32-.48.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.82-1.22-4.66-4.06-4.8-4.25-.14-.19-1.15-1.53-1.15-2.91 0-1.38.73-2.06.99-2.34.26-.28.56-.35.75-.35h.54c.17.01.41-.07.64.49.23.57.79 1.96.86 2.1.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.13-.29.28-.13.55.16.27.71 1.17 1.52 1.9 1.04.93 1.92 1.21 2.19 1.34.27.13.43.11.59-.07.16-.18.69-.81.87-1.08.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.13.45.2.52.31.07.11.07.66-.16 1.31z"/>
      </svg>
      Talk to us
    </button>
  );
}

// ---------------------------------------------------------------------------
// Cookie Policy Icon — fixed position, links to privacy policy
// ---------------------------------------------------------------------------
function CookieIcon({ onNavigate }) {
  return (
    <button
      className="cookie-icon"
      onClick={() => onNavigate && onNavigate("privacy")}
      title="Cookie Policy"
      aria-label="Cookie Policy"
      style={{
        position: "fixed",
        bottom: 80,
        right: 20,
        width: 48,
        height: 48,
        borderRadius: "50%",
        background: "rgba(245, 245, 240, 0.95)",
        border: "1px solid rgba(10, 11, 13, 0.1)",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        transition: "all 0.2s ease",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)"
      }}
      onMouseEnter={(e) => {
        e.target.style.background = "rgba(245, 245, 240, 1)";
        e.target.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.15)";
      }}
      onMouseLeave={(e) => {
        e.target.style.background = "rgba(245, 245, 240, 0.95)";
        e.target.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
      }}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="1" fill="currentColor"/>
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 6v6"/>
      </svg>
    </button>
  );
}

// ---------------------------------------------------------------------------
// Eyebrow
// ---------------------------------------------------------------------------
function EyebrowBar({ children }) {
  return (
    <div className="eyebrow-bar">
      <div className="eyebrow-bar__rule"></div>
      <div className="eyebrow-bar__text">{children}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Audience row
// ---------------------------------------------------------------------------
function AudienceRow({ n, title, desc }) {
  return (
    <div className="audience-row">
      <div className="audience-row__n">{n}</div>
      <div className="audience-row__t">{title}</div>
      <div className="audience-row__d">{desc}</div>
      <div className="audience-row__a">→</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Experience card
// ---------------------------------------------------------------------------
function ExpCard({ featured, image, meta, title, sub, pill, onClick }) {
  return (
    <div className={"exp-card " + (featured ? "exp-card--featured" : "exp-card--regular")} onClick={onClick}>
      <div className="exp-card__img" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="exp-card__grad"></div>
      {pill && (
        <span className="exp-card__pill">
          <span className="dot"></span>{pill}
        </span>
      )}
      <div className="exp-card__body">
        <div className="exp-card__meta">{meta}</div>
        <div className="exp-card__t">{title}</div>
        {sub && <div className="exp-card__sub">{sub}</div>}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Stat cell
// ---------------------------------------------------------------------------
function StatCell({ n, label, accent }) {
  return (
    <div className={"stat-cell " + (accent ? "accent" : "")}>
      <div className="n">{n}</div>
      <div className="l">{label}</div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------
function Footer() {
  return (
    <footer className="foot">
      <div className="foot__grid">
        <div className="foot__logo">
          <img src="assets/logo-mark-white.svg" alt="Ballerz Abroad" />
          <div className="foot__tag">European football experiences — built around your squad.</div>
        </div>
        <div className="foot__col">
          <h4>Experiences</h4>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("exp-nxgenpro"); }}>NXGENPro · England</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("exp-levante"); }}>Levante Academy · ES</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("exp-betis"); }}>Real Betis Academy · ES</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("exp-benfica"); }}>Benfica Academy · PT</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("exp-feyenoord"); }}>Feyenoord Academy · NL</a>
        </div>
        <div className="foot__col">
          <h4>Tournaments</h4>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-mic-costa-brava"); }}>MIC Costa Brava</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-copa-daurada"); }}>Copa Daurada</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-mare-nostrum"); }}>Mare Nostrum Cup</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-cruyff"); }}>Cruyff Tournament</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-levante-cup"); }}>Levante UD Int. Cup</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-mic-punta-cana"); }}>MIC Punta Cana</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-easter-youth-cup"); }}>Netherlands Easter Youth Cup</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("tour-winter-cup-nl"); }}>Winter Cup Holland</a>
        </div>
        <div className="foot__col">
          <h4>Support</h4>
          <a href="#" onClick={(e) => { e.preventDefault(); go("contact"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>Contact</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go("contact"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>FAQ</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go("terms"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>Terms &amp; conditions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); go("privacy"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>Privacy policy</a>
          <a href="#">Safeguarding</a>
        </div>
      </div>
      <div className="foot__bottom">
        <div>© 2026 Ballerz Abroad · Company Reg. 16941046 · England & Wales</div>
        <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
          <a href="https://facebook.com/ballerzabroad" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://instagram.com/ballerzabroad" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.768 11.865c.002.046.003.092.003.138 0 4.017-3.06 8.645-8.66 8.645-1.72 0-3.313-.503-4.659-1.371.24.028.483.042.73.042 1.423 0 2.735-.486 3.777-1.3-.33.006-.657-.1-.932-.299-.275-.198-.488-.476-.607-.795-.12-.318-.135-.666-.045-.993.09-.327.288-.619.563-.83-.413.028-.81-.075-1.158-.3-.348-.225-.635-.563-.823-.96-.188-.396-.264-.832-.22-1.255.045-.424.22-.82.491-1.141.27-.32.632-.556 1.04-.686-.19-.06-.384-.09-.58-.09-.07 0-.14.002-.209.006.137-.44.428-.83.802-1.11.374-.279.823-.433 1.276-.433.452 0 .902.154 1.276.433.374.28.665.67.802 1.11-.07-.004-.14-.006-.21-.006-.196 0-.389.03-.58.09.408.13.77.366 1.04.686.271.321.446.717.491 1.141.044.423-.032.86-.22 1.255-.188.397-.475.735-.823.96-.348.225-.745.328-1.158.3.275.211.473.503.563.83.09.327.075.675-.045.993-.12.32-.332.597-.607.795-.275.199-.602.305-.932.299 1.042.814 2.354 1.3 3.777 1.3.247 0 .49-.014.73-.042-1.346.868-2.939 1.371-4.659 1.371-4.6 0-8.66-4.628-8.66-8.645 0-.046.001-.092.003-.138.567.443 1.213.818 1.915 1.1.702.282 1.447.435 2.204.456 1.428 0 2.735-.486 3.777-1.3-.33.006-.657-.1-.932-.299-.275-.198-.488-.476-.607-.795-.12-.318-.135-.666-.045-.993.09-.327.288-.619.563-.83-.413.028-.81-.075-1.158-.3-.348-.225-.635-.563-.823-.96-.188-.396-.264-.832-.22-1.255.045-.424.22-.82.491-1.141.27-.32.632-.556 1.04-.686-.19-.06-.384-.09-.58-.09-.07 0-.14.002-.209.006.137-.44.428-.83.802-1.11.374-.279.823-.433 1.276-.433.452 0 .902.154 1.276.433.374.28.665.67.802 1.11-.07-.004-.14-.006-.21-.006-.196 0-.389.03-.58.09.408.13.77.366 1.04.686.271.321.446.717.491 1.141.044.423-.032.86-.22 1.255-.188.397-.475.735-.823.96-.348.225-.745.328-1.158.3.275.211.473.503.563.83.09.327.075.675-.045.993-.12.32-.332.597-.607.795-.275.199-.602.305-.932.299 1.042.814 2.354 1.3 3.777 1.3.247 0 .49-.014.73-.042-1.346.868-2.939 1.371-4.659 1.371-4.6 0-8.66-4.628-8.66-8.645 0-.046.001-.092.003-.138.567.443 1.213.818 1.915 1.1.702.282 1.447.435 2.204.456z"/>
            </svg>
          </a>
          <a href="https://tiktok.com/@ballerzabroad" target="_blank" rel="noopener noreferrer" title="TikTok" style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.66 1.94 2.89 2.89 0 0 1 5.66-1.94v-3.03a6.15 6.15 0 0 0-7.14-6.05 6.59 6.59 0 0 0-5.17 10.86 6.56 6.56 0 0 0 10.86 2v-3.03A4.74 4.74 0 0 0 23 13.64V9.88a7.07 7.07 0 0 1-3.41.81z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, WhatsAppFab, CookieIcon, EyebrowBar, AudienceRow, ExpCard, StatCell, Footer, EXPERIENCES });
