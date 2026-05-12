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
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }} style={{ border: "none", display: "flex", alignItems: "center" }}>
            <img className="nav__logo" src="https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Ff41106f9b9fc4fe882b56fc94890fca6?format=webp&width=800&height=1200" alt="Ballerz Abroad" />
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
          <a key={e.id} href="#" onClick={(ev) => { ev.preventDefault(); go(e.id); }} style={{ fontSize: 24, paddingLeft: 24, color: "#9CA4AC", borderTop: "none" }}>{e.label}</a>
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
          <a href="#">Contact</a>
          <a href="#">FAQ</a>
          <a href="#">Terms &amp; conditions</a>
          <a href="#">Privacy policy</a>
          <a href="#">Safeguarding</a>
        </div>
      </div>
      <div className="foot__bottom">
        <div>© 2026 Ballerz Abroad · Company Reg. 16941046 · England & Wales</div>
        <div>Terms · Privacy · FAQ</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, WhatsAppFab, EyebrowBar, AudienceRow, ExpCard, StatCell, Footer, EXPERIENCES });
