// Shared React components for the Ballerz Abroad website.
// Loaded via <script type="text/babel" src="components.jsx">.
// Components are attached to window at the bottom for cross-file access.

const { useState, useEffect, useRef } = React;

// ---------------------------------------------------------------------------
// Nav — sticky, blurs on scroll
// ---------------------------------------------------------------------------
function Nav({ active = "home", onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const isActive = (id) => {
    if (id === "levante") return ["levante", "betis", "benfica"].includes(active);
    return active === id;
  };
  const link = (id, label) => (
    <a
      href="#"
      className={isActive(id) ? "is-active" : ""}
      onClick={(e) => { e.preventDefault(); onNavigate && onNavigate(id); }}
    >{label}</a>
  );
  return (
    <nav className={"nav " + (scrolled ? "nav--scrolled" : "")}>
      <div className="nav__left">
        <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("home"); }} style={{ border: "none", display: "flex", alignItems: "center" }}>
          <img className="nav__logo" src="assets/logo-white.png" alt="Ballerz Abroad" style={{ fontSize: "34px", width: "auto", alignSelf: "stretch" }} />
        </a>
        <div className="nav__links">
          {link("home", "Home")}
          <div className="nav__dropdown-wrap">
            <a
              href="#"
              className={isActive("levante") ? "is-active" : ""}
              onClick={(e) => { e.preventDefault(); onNavigate && onNavigate("levante"); }}
            >Destinations</a>
            <div className="nav__dropdown">
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("levante"); }}>Levante UD Experience</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("betis"); }}>Real Betis Experience</a>
              <a href="#" onClick={(e) => { e.preventDefault(); onNavigate("benfica"); }}>Benfica Experience</a>
            </div>
          </div>
          {link("tournaments", "Tournaments")}
          {link("application", "Apply")}
        </div>
      </div>
      <div className="nav__cta">
        <a href="tel:07867205763" className="lang-pill" style={{ border: "1px solid rgba(246,243,235,0.2)" }}>07867 205763</a>
        <button className="btn btn--primary btn--sm" onClick={() => onNavigate && onNavigate("application")}>
          Get in touch <span>→</span>
        </button>
      </div>
    </nav>
  );
}

// ---------------------------------------------------------------------------
// Floating WhatsApp pill — always visible
// ---------------------------------------------------------------------------
function WhatsAppFab() {
  return (
    <button className="wa-fab" onClick={() => window.open("https://wa.me/447867205763", "_blank")}>
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
function EyebrowBar({ children, dark }) {
  return (
    <div className="eyebrow-bar">
      <div className="eyebrow-bar__rule" style={dark ? { background: "#0A0B0D" } : {}}></div>
      <div className="eyebrow-bar__text" style={dark ? { color: "#0A0B0D" } : {}}>{children}</div>
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
function ExpCard({ featured, image, meta, title, sub, pill, onClick, gradBg, gradBgSize, gradBgPosition }) {
  return (
    <div className={"exp-card " + (featured ? "exp-card--featured" : "exp-card--regular")} onClick={onClick}>
      <div className="exp-card__img" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="exp-card__grad" style={gradBg ? { backgroundImage: `url(${gradBg})`, backgroundRepeat: "no-repeat", backgroundPosition: gradBgPosition || "center", backgroundSize: gradBgSize || "cover" } : {}}></div>
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
          <img src="assets/logo-white.png" alt="Ballerz Abroad" />
          <div className="foot__tag">European football experiences — built around your squad.</div>
        </div>
        <div className="foot__col">
          <h4>Destinations</h4>
          <a href="#">European Tours</a>
          <a href="#">Levante UD Experience</a>
          <a href="#">Real Betis Experience</a>
          <a href="#">NXGENPro · England</a>
        </div>
        <div className="foot__col">
          <h4>Tournaments</h4>
          <a href="#">MIC Costa Brava</a>
          <a href="#">Copa Daurada</a>
          <a href="#">Mare Nostrum Cup</a>
          <a href="#">Cruyff Tournament</a>
          <a href="#">Levante UD Int. Cup</a>
          <a href="#">MIC Punta Cana</a>
        </div>
        <div className="foot__col">
          <h4>Contact</h4>
          <a href="mailto:info@ballerzabroad.com">info@ballerzabroad.com</a>
          <a href="tel:07867205763">07867 205763</a>
          <a href="https://www.tiktok.com/@ballerzabroad" target="_blank" rel="noopener">@ballerzabroad · TikTok</a>
          <a href="https://www.facebook.com/ballerzabroad" target="_blank" rel="noopener">@ballerzabroad · Facebook</a>
          <a href="#">FAQ · How it works</a>
        </div>
      </div>
      <div className="foot__bottom">
        <div>© 2026 Ballerz Abroad · Company Reg. 16941046 · England &amp; Wales</div>
        <div>Terms · Privacy · FAQ</div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, WhatsAppFab, EyebrowBar, AudienceRow, ExpCard, StatCell, Footer });
