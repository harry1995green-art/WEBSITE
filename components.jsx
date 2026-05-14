// Shared React components for the Ballerz Abroad website UI kit.
// Loaded via <script type="text/babel" src="components.jsx">.
// Components are attached to window at the bottom for cross-file access.

const { useState, useEffect, useRef } = React;

// Add responsive styles for nav logo on mobile
if (typeof document !== "undefined" && !document.getElementById("nav-logo-responsive")) {
  const style = document.createElement("style");
  style.id = "nav-logo-responsive";
  style.innerHTML = `
    @media (max-width: 768px) {
      .nav__logo {
        transform: scale(1.5);
      }
    }
  `;
  document.head.appendChild(style);
}

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
            <img className="nav__logo" src="assets/logo-black.png" alt="Ballerz Abroad" />
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
          <img src="assets/logo-mark-white.svg" alt="Ballerz Abroad" style={{ transform: "scale(2)" }} />
          <div className="foot__tag"></div>
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
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("contact"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>Contact</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("faq"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>FAQ</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("terms-conditions"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>Terms &amp; conditions</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("privacy-policy"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>Privacy policy</a>
          <a href="#" onClick={(e) => { e.preventDefault(); window.__navigate && window.__navigate("safeguarding"); }} style={{ border: "none", background: "none", cursor: "pointer" }}>Safeguarding</a>
        </div>
      </div>
      <div className="foot__bottom">
        <div>© 2026 Ballerz Abroad · Company Reg. 16941046 · England & Wales</div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <a href="https://www.facebook.com/people/Ballerz-Abroad/61586226172523/" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer", color: "var(--chalk-50)" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/ballerzabroad/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer", color: "var(--chalk-50)" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
            </svg>
          </a>
          <a href="https://www.tiktok.com/@ballerzabroad" target="_blank" rel="noopener noreferrer" title="TikTok" style={{ display: "flex", alignItems: "center", border: "none", background: "none", cursor: "pointer", color: "var(--chalk-50)" }}>
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.75 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.26 6.26 0 0 0-1.01-.08C5.84 9.32 2 13.46 2 18.14s3.84 8.82 8.65 8.82c4.63 0 8.44-3.88 8.44-8.65V10.7a8.19 8.19 0 0 0 3.54 2.34v-3.72a4.3 4.3 0 0 1-2.04-.67z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, WhatsAppFab, CookieIcon, EyebrowBar, AudienceRow, ExpCard, StatCell, Footer, EXPERIENCES });
