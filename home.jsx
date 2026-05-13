// Home page composition.

const { useState: useHState } = React;

// Destination explorer — UK · Europe · Global tabs
function DestExplorer({ onNavigate }) {
  const [tab, setTab] = useHState("europe");
  const DATA = {
    uk: [
      { c: "England · Surrey",  t: "NXGENPro", logo: "https://nx-genpro.com/wp-content/uploads/2025/08/NXGEN_Logo.png", img: "assets/dest-nxgen.avif" },
    ],
    europe: [
      { c: "Spain · Valencia",  t: "Levante UD",        logo: "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/cdc306a3-efb4-407b-a841-cc986a9a0b41/ChatGPT+Image+Jan+9%2C+2026%2C+11_01_00+AM.png", img: "assets/dest-levante.jpg" },
      { c: "Spain · Seville",   t: "Real Betis",        logo: "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/d9d4fac9-5dd8-41f7-b464-2d6345e2b12f/Real_betis_logo.svg.png", img: "assets/dest-betis.png" },
      { c: "Spain · Catalonia", t: "MIC Costa Brava",   logo: "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/69806f9e-a44a-473f-8214-23cce19f86e3/images+%282%29.png", img: "assets/dest-mic.webp" },
      { c: "Netherlands · Rotterdam", t: "Feyenoord Academy", logo: "https://pmsoccerevents.nl/wp-content/uploads/2025/11/Feyenoord_logo.svg.png", img: "assets/dest-feyenoord.jfif" },
      { c: "Portugal · Lisbon", t: "Benfica window", logo: "assets/logo-benfica.png", img: "assets/dest-benfica.jpeg" },
      { c: "Spain · Costa Daurada", t: "Copa Daurada",  logo: null, img: "assets/dest-copa.jpg" },
    ],
    global: [
      { c: "Dominican Republic", t: "MIC Punta Cana", logo: "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/69806f9e-a44a-473f-8214-23cce19f86e3/images+%282%29.png", img: "https://images.unsplash.com/photo-1564415051543-cca4a18fe2cc?w=900&q=80" },
      { c: "Custom",             t: "Build your tour", logo: null, img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=900&q=80" },
    ],
  };
  const rows = DATA[tab];
  return (
    <section className="band">
      <div className="wrap">
        <EyebrowBar>02 — Destinations</EyebrowBar>
        <h2 className="section-h">Where we travel.</h2>
        <div className="section-lead">A curated network of partner clubs, federations and tournaments — split across the UK, Europe and the wider world.</div>
        <div className="dest-tabs">
          {[["uk","UK"],["europe","Europe"],["global","Rest of world"]].map(([id,lbl]) => (
            <button key={id} className={"dest-tab " + (tab === id ? "is-active" : "")} onClick={() => setTab(id)}>{lbl}</button>
          ))}
        </div>
        <div className="dest-grid">
          {rows.map((r, idx) => (
            <div key={r.t} className="dest-card" onClick={() => onNavigate("exp-levante")}>
              <div className="dest-card__img" style={{ backgroundImage: `url(${r.img})` }}></div>
              <div className="dest-card__grad" style={idx === 3 ? { backgroundImage: "url(https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fe542691c14014b21b02b0fe16ada39a0)", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" } : {}}></div>
              <div className="dest-card__arrow">→</div>
              <div className="dest-card__body">
                <div className="dest-card__country">{r.c}</div>
                <div className="dest-card__t">{r.t}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HERO_IMG = "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&q=80";

function Home({ onNavigate }) {
  return (
    <>
      <Nav active="home" onNavigate={onNavigate} />

      {/* HERO -------------------------------------------------------------- */}
      <section className="hero">
        <div className="hero__img" style={{ backgroundImage: `url(${HERO_IMG})` }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__meta">
          <span>2026 · WINDOWS OPEN</span>
          <span><strong>ENGLAND</strong> · <strong>SPAIN</strong> · <strong>PORTUGAL</strong> · <strong>NETHERLANDS</strong></span>
        </div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">ENGLAND · SPAIN · PORTUGAL · NETHERLANDS</div>
          </div>
          <h1 className="display-xl">PROFESSIONAL FOOTBALL EXPERIENCES</h1>
          <div className="hero__sub">Ballerz Abroad designs bespoke overseas football tours for UK academies and development teams. Professional training environments, vetted partner clubs, and competitive fixtures across Spain, the Netherlands, Portugal and England.</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for a tour →</button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("detail")}>View the destinations</button>
          </div>
        </div>
      </section>

      {/* STAT BAND -------------------------------------------------------- */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            <StatCell n="07" label="Days abroad" />
            <StatCell n="10" label="Pro sessions" />
            <StatCell n="03" label="Int. fixtures" />
            <StatCell n="100%" label="Pro environment" accent />
          </div>
        </div>
      </section>

      {/* WHY US — 3 pillars ----------------------------------------------- */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — Why Ballerz Abroad</EyebrowBar>
          <h2 className="section-h">More than a tour.</h2>
          <div className="section-lead">We're a UK-based boutique football experience company. Every professional football experience we deliver is designed — not packaged — around your squad, your level, and your definition of success.</div>
          <div className="pillars">
            <div className="pillar">
              <div className="pillar__n">01 — Built, not booked</div>
              <div className="pillar__t">Bespoke<br/>itineraries.</div>
              <div className="pillar__d">No off-the-shelf packages. Squad size, age groups, level of opposition, training intensity, dates, budget, destination — every variable is yours.</div>
            </div>
            <div className="pillar">
              <div className="pillar__n">02 — On-tour delivery</div>
              <div className="pillar__t">Tour leads<br/>who travel.</div>
              <div className="pillar__d">A Ballerz lead with your squad from arrival to wheels-up. Football people. Logistics handled. You focus on the football.</div>
            </div>
            <div className="pillar">
              <div className="pillar__n">03 — Vetted network</div>
              <div className="pillar__t">Partner clubs &amp; events.</div>
              <div className="pillar__d">Levante UD, Real Betis, MIC, Mare Nostrum, Cruyff. We only work with partners who share our standards for safety, quality and competition.</div>
            </div>
          </div>
        </div>
      </section>

      {/* DESTINATIONS EXPLORER ------------------------------------------- */}
      <DestExplorer onNavigate={onNavigate} />

      {/* WHO IT'S FOR ----------------------------------------------------- */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — Built for clubs</EyebrowBar>
          <h2 className="section-h">Tailored around your squad.</h2>
          <div className="section-lead">Every tour is custom-built around your club's age groups, level, duration, budget, destination, and training intensity. We don't run packages — we build them.</div>
          <div className="audience-list">
            <AudienceRow n="01" title="Grassroots clubs" desc="Lift a full season's programme. Expose your squad to the next level with a professional football experience in Europe." />
            <AudienceRow n="02" title="Academies" desc="Pre-season camps, mid-season resets and scouting windows inside professional partner-club environments in Europe." />
            <AudienceRow n="03" title="Schools" desc="Football-first overseas tours that balance academic and athletic calendars. Professionally hosted fixtures included." />
            <AudienceRow n="04" title="Development teams" desc="Professional-grade football experiences abroad without a Category One budget. Compete, recover, and return sharper." />
            <AudienceRow n="05" title="US college soccer" desc="European exposure for NCAA programmes. Pre-season football tours in Europe with contested fixtures against quality opposition." />
          </div>
        </div>
      </section>

      {/* EXPERIENCE GRID -------------------------------------------------- */}
      {/* TOUR TYPES ------------------------------------------------------- */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>03 — Tour type</EyebrowBar>
          <h2 className="section-h">Four ways to travel.</h2>
          <div className="callout-grid">
            <div className="cell">
              <div className="cell__n">01</div>
              <div className="cell__t">Pro Experience Tours.</div>
              <div className="cell__d">For squads competing at the top end. Development, team coherence, contested fixtures — the standard players see at the next level.</div>
            </div>
            <div className="cell">
              <div className="cell__n">02</div>
              <div className="cell__t">Experience Tours.</div>
              <div className="cell__d">For squads stepping up. Train at the next level, compete abroad, return sharper than you left.</div>
            </div>
            <div className="cell">
              <div className="cell__n">03</div>
              <div className="cell__t">Combined Tours.</div>
              <div className="cell__d">Mixed-level, mixed-age, mixed-gender groups. Built around the squad you actually have — not the one the brochure assumes.</div>
            </div>
            <div className="cell">
              <div className="cell__n">04</div>
              <div className="cell__t">Individual Player Development.</div>
              <div className="cell__d">A structured programme inside Levante UD's training environment. Parents welcome to travel.</div>
            </div>
            <div className="cell">
              <div className="cell__n">05</div>
              <div className="cell__t">On-tour delivery.</div>
              <div className="cell__d">A Ballerz Abroad lead with your squad from arrival to wheels-up. Logistics handled. You focus on football.</div>
            </div>
            <div className="cell">
              <div className="cell__n">06</div>
              <div className="cell__t">The Ballerz network.</div>
              <div className="cell__d">Vetted clubs, federations and tournament organisers across the UK, Europe and beyond. Selected to our standards — never the other way round.</div>
            </div>
          </div>
        </div>
      </section>

      {/* TOURNAMENTS ------------------------------------------------------ */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>04 — Tournaments</EyebrowBar>
          <h2 className="section-h">COMPETE IN EUROPE'S MOST PRESTIGOUS TOURNAMENTS</h2>
          <div className="section-lead">Direct entries into European youth football's most contested tournaments — selected for level, not name.</div>
          <div className="fixture-table">
            {[
              ["MIC COSTA BRAVA",    "Spain · Easter window",          "The international youth football reference tournament"],
              ["COPA DAURADA",       "Salou, Costa Daurada",           "Grassroots through academy bracket"],
              ["EASTER YOUTH CUP",   "Netherlands · Apr 7–10 2026",    "One of the Netherlands' most established international youth tournaments"],
              ["CRUYFF TOURNAMENT",  "Salou, Spain · December",        "Possession-first, technically demanding football in the Cruyff philosophy"],
              ["WINTER CUP HOLLAND", "Netherlands · Dec + Jan windows","Two editions at Duinrell Wassenaar with strong European field"],
              ["LEVANTE UD INT. CUP","Valencia, Spain · June",          "Hosted by our partner La Liga club — direct entry for Ballerz squads"],
              ["MIC PUNTA CANA",     "Dominican Republic · Jun 24-29 2026", "Global youth tournament at The Fields Cap Cana Sports City"],
            ].map(([city, sub, opp], i) => (
              <div className="fixture-row" key={i}>
                <div className="fixture-row__date">T0{i+1}</div>
                <div className="fixture-row__city">{city}</div>
                <div className="fixture-row__opp">{opp}</div>
                <div className="fixture-row__status" style={{ color: "var(--stand-300)" }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS --------------------------------------------------------- */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <EyebrowBar>05 — Partners</EyebrowBar>
          <h2 className="section-h">Vetted partners.</h2>
          <div className="section-lead">We only work with clubs, federations and tournaments who share our standards for safety, quality and competition.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 1, background: "rgba(246,243,235,0.12)", marginTop: 48, border: "1px solid rgba(246,243,235,0.12)" }}>
            {[
              ["Levante UD",     "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fecd4304b94af4777b17bf55676f7ac0a?format=webp&width=800&height=1200"],
              ["Real Betis",    "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F017e8565cae4423fbbbf2b16b4337f89?format=webp&width=800&height=1200"],
              ["NXGENPro",  "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F34566296fd694ffba6beaaf2c42ef832?format=webp&width=800&height=1200"],
              ["SL Benfica",  "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F089fc518870d4c2d9e8f6284416b2ba1?format=webp&width=800&height=1200"],
            ].map(([name, src]) => (
              <div key={name} style={{ background: "var(--ink-900)", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, minHeight: 180 }}>
                <img src={src} alt={name} style={{ maxHeight: 80, maxWidth: "70%", objectFit: "contain" }} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--stand-300)", textTransform: "uppercase", textAlign: "center" }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST -------------------------------------------------------------- */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>06 — Trust</EyebrowBar>
          <h2 className="section-h">What you can expect.</h2>
          <div className="trust-row">
            <div className="trust-cell"><div className="trust-cell__label">Partnerships</div><div className="trust-cell__v">Professional club access via European academy network.</div></div>
            <div className="trust-cell"><div className="trust-cell__label">Facilities</div><div className="trust-cell__v">Academy-grade pitches, gyms, recovery rooms across Europe.</div></div>
            <div className="trust-cell"><div className="trust-cell__label">Support</div><div className="trust-cell__v">Dedicated camp lead with your squad from arrival to wheels-up.</div></div>
            <div className="trust-cell"><div className="trust-cell__label">Based</div><div className="trust-cell__v">UK company. UK contracts. UK-managed travel ops.</div></div>
            <div className="trust-cell"><div className="trust-cell__label">Planning</div><div className="trust-cell__v">Tailored brief, full itinerary, weekly check-ins until departure.</div></div>
            <div className="trust-cell"><div className="trust-cell__label">Flights + insurance</div><div className="trust-cell__v">Not bundled. Booked by the squad. We share recommended partners.</div></div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS ----------------------------------------------------- */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>07 — In their words</EyebrowBar>
          <h2 className="section-h">Parents and coaches on what they experienced.</h2>
          <div className="testi-row">
            <div className="testi">
              <div className="testi__quote-mark">"</div>
              <div className="testi__q">I wasn't sure what to expect sending my son on an individual tour. Honestly, it was the best thing I've done for his football. He came back a different player — more confident, more switched on. The Levante experience was something else.</div>
              <div className="testi__by">
                <div className="testi__by-name">Marcus O.</div>
                <div className="testi__by-role">Parent · Levante Tour</div>
              </div>
            </div>
            <div className="testi">
              <div className="testi__quote-mark">"</div>
              <div className="testi__q">My daughter had been playing for years but this was a completely different level. NxGenPro pushed her in ways I hadn't seen before. She came home with a hunger she's kept ever since. Already asking when she can go back.</div>
              <div className="testi__by">
                <div className="testi__by-name">Sarah H.</div>
                <div className="testi__by-role">Parent · NxGenPro Tour</div>
              </div>
            </div>
            <div className="testi">
              <div className="testi__quote-mark">"</div>
              <div className="testi__q">MIC Tournament was exactly the test our squad needed. Ballerz handled everything — fixtures, logistics, the lot. Our players stepped up. We came home with a clearer picture of where we are and where we're going.</div>
              <div className="testi__by">
                <div className="testi__by-name">James W.</div>
                <div className="testi__by-role">Head of Football · MIC Tournament</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL INLINE -------------------------------------------------- */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>08 — From the journal</EyebrowBar>
          <h2 className="section-h">Notes from inside the tours.</h2>
          <div className="section-lead">Tour diaries, partner-club features, behind-the-scenes from every camp we run.</div>
          <div className="journal-row">
            {typeof window !== "undefined" && window.BLOG_POSTS ? window.BLOG_POSTS.slice(0, 3).map(p => (
              <div key={p.id} className="j-card" onClick={() => { window.__postId = p.id; onNavigate("blog-post"); }} style={{ cursor: "pointer" }}>
                <div className="j-card__img" style={{ backgroundImage: `url(${p.img})` }}></div>
                <div className="j-card__meta">{p.cat.toUpperCase()} · {p.date}</div>
                <div className="j-card__t">{p.title}</div>
                <div className="j-card__d">{p.excerpt}</div>
                <div className="j-card__read">Read the post →</div>
              </div>
            )) : null}
          </div>
          <div style={{ marginTop: 40 }}>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("blog")}>View the full journal →</button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER ------------------------------------------------------- */}
      <section className="news-band">
        <div className="news-grid">
          <div>
            <EyebrowBar>The mailing list</EyebrowBar>
            <h3 className="news-h">Tour windows.<br/>First to hear.</h3>
            <div className="news-d">New windows are added against partner-club calendars throughout the year — never more than a handful at a time. Subscribe to hear first.</div>
          </div>
          <div>
            <form className="news-form" onSubmit={(e) => { e.preventDefault(); alert("Subscribed."); }}>
              <input type="email" placeholder="head.coach@yourclub.com" />
              <button type="submit">Subscribe →</button>
            </form>
            <div className="news-fine">No spam. Unsubscribe in one click. Selected dates only.</div>
          </div>
        </div>
      </section>

      {/* SOCIAL ------------------------------------------------------------- */}

      {/* APPLICATION BAND --------------------------------------------------- */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>08 — Apply</div></div>
            <h2 className="section-h">Tour by application.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Tell us about your squad. We respond within two working days with a tailored brief — or open a discovery call. info@ballerzabroad.com · 07867 205763.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Start an application →</button>
              <button className="btn btn--whatsapp btn--lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2 22l4.31-1.13a9.86 9.86 0 0 0 5.73 1.82h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.82 9.82 0 0 0 12.04 2zm5.46 14.16c-.23.65-1.34 1.24-1.87 1.32-.48.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.82-1.22-4.66-4.06-4.8-4.25-.14-.19-1.15-1.53-1.15-2.91 0-1.38.73-2.06.99-2.34.26-.28.56-.35.75-.35h.54c.17.01.41-.07.64.49.23.57.79 1.96.86 2.1.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.13-.29.28-.13.55.16.27.71 1.17 1.52 1.9 1.04.93 1.92 1.21 2.19 1.34.27.13.43.11.59-.07.16-.18.69-.81.87-1.08.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.13.45.2.52.31.07.11.07.66-.16 1.31z"/></svg>
                WhatsApp
              </button>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">01</div><div><div className="app-step__t">Tell us about your club.</div><div className="app-step__d">Who you are. Where you sit. What good looks like.</div></div></div>
              <div className="app-step"><div className="app-step__n">02</div><div><div className="app-step__t">Your squad.</div><div className="app-step__d">Squad size, age groups, level. We use this to design opposition.</div></div></div>
              <div className="app-step"><div className="app-step__n">03</div><div><div className="app-step__t">Your goals.</div><div className="app-step__d">Pre-season fitness? Scouting? Culture? Tell us what success looks like.</div></div></div>
              <div className="app-step"><div className="app-step__n">04</div><div><div className="app-step__t">Window & budget.</div><div className="app-step__d">Preferred dates and a workable budget range. We'll do the rest.</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
      <CookieIcon onNavigate={onNavigate} />
    </>
  );
}

window.Home = Home;
