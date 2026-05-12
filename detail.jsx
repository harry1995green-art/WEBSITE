// Experience detail page — single camp deep-dive, parametrised by id.

const EXP_DATA = {
  "exp-nxgenpro": {
    title: "NXGENPro.",
    eyebrow: "England · UK-based development programme",
    sub: "",
    location: "England · UK",
    facts: [["Country", "England"], ["Format", "Year-round windows"], ["Age", "U13 — U18"], ["From", "£895 pp"]],
    img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=2000&q=80",
    pill: "Year-round",
    accent: "Apr 2026 · May 2026 · Jul 2026 — multiple windows live",
    summary: "NXGENPro is Ballerz Abroad's UK-based professional football experience partner. Based at Gordon's School in Surrey, it gives boys and girls aged 11–18 the chance to train, compete, and live inside a genuine professional football environment — without leaving England.\n\nWhere our European tours take squads abroad, NXGENPro brings the pro environment to the UK.",
    accommodation: {
      name: "Gordon's School · Augusta Boarding House · Surrey, England",
      link: "https://nx-genpro.com",
      linkLabel: "Visit NXGENPro.com — quote BALLERZ ABROAD for our exclusive promo code",
      desc: "Players are housed in the Augusta Boarding House at Gordon's School — a recently refurbished residential boarding house run by resident NXGEN staff members. Gordon's School boasts a prestigious £6 million first-class sports hub with a 1,233 m² indoor sports hall and a brand new 150 m² fully air-conditioned fitness suite, alongside dedicated football pitches and recovery facilities.",
      features: ["Augusta Boarding House · recently refurbished", "Resident NXGEN staff on-site 24/7", "£6m sports hub + 1,233m² indoor hall", "150m² air-conditioned fitness suite", "Football pitches on campus", "Full board · all meals provided"],
      photos: [
        { url: "https://nx-genpro.com/wp-content/uploads/2025/08/3163_618-1-1024x683.jpg", cap: "Gordon's School sports hub" },
        { url: "https://www.synergyllp.co.uk/wp-content/uploads/2020/02/Gordons-School-Boarding-Accom-HIGH-RES-001-scaled.jpg", cap: "Boarding house grounds" },
        { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80", cap: "Fitness suite" },
        { url: "https://www.synergyllp.co.uk/wp-content/uploads/2020/02/Gordons-School-Boarding-Accom-HIGH-RES-025-e1582906641466.jpg.webp", cap: "Boarding rooms" },
      ],
    },
  },
  "exp-levante": {
    title: "Levante Academy Experience.",
    eyebrow: "Valencia · ES · Pro Experience · La Liga partner",
    sub: "Inside Levante UD's training environment. Individual Player Development available. Parents welcome to travel. The fullest pro-grade window we run.",
    location: "Valencia · ES",
    facts: [["Country", "Spain"], ["Partner", "Levante UD"], ["Age", "U7 — U21"], ["From", "£999"]],
    img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=2000&q=80",
    pill: "Application open",
    accent: "Easter window · Apr 04 — 11 2026",
    summary: "Levante UD is one of three La Liga clubs based in the Valencia region — one of European football's most productive development ecosystems. Founded in 1909, the club runs a full youth academy structured around a methodology built on game understanding, decision-making, and tactical intelligence. It's the same system used across every age group from the first team down.\n\nWhen Ballerz Abroad takes a squad to Levante, they aren't visiting the club. They're training inside it — on the same pitches, under the same coaching model, in the same daily environment as Levante's own academy players.\n\nThe Levante Individual Player Development programme is a structured residency inside Levante's training environment — open to individual players aged 11–18. Players are assessed on arrival, placed into a training group matched to their level, and spend the week training and competing alongside Levante's academy structure. Parents are welcome to travel. Places are limited per window.",
    accommodation: {
      name: "Global-Levante UD International Residence · L'Eliana, Valencia",
      desc: "Players stay at the official Global-Levante UD International Residence — located in L'Eliana, one of the quietest and most comfortable areas of the Valencian community. The 23,000 m² campus houses up to 120 players with private bathrooms, dining room (breakfast, lunch and dinner), swimming pool, gymnasium, crossfit area, padel courts, tennis courts, a cafeteria, games room and 24-hour surveillance. Players live, eat and recover where Levante UD's international programme is based — the environment is part of the experience.",
      features: ["Up to 120 players · private bathrooms", "Full board (breakfast, lunch & dinner)", "Swimming pool + sports centre", "Gymnasium · crossfit · padel · tennis", "Games room · TV lounge · laundry", "24-hour surveillance + tutoring service", "Direct bus transfer to training campus"],
      photos: [
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Edificio-Residencia.jpg", cap: "Residence exterior" },
        { url: "http://www.globalfootballtotal.com/wp-content/uploads/2020/04/Dormitorios.jpg", cap: "Player rooms" },
        { url: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Ffce0f6409dea4c95a4fafd0cdb7ca997?format=webp&width=800&height=1200", cap: "Swimming pool" },
        { url: "http://www.globalfootballtotal.com/wp-content/uploads/2020/04/Previo-Habitaciones.jpg", cap: "Accommodation" },
        { url: "http://www.globalfootballtotal.com/wp-content/uploads/2020/04/Previo-Habitaciones-II.jpg", cap: "Residence grounds" },
      ],
    },
  },
  "exp-betis": {
    title: "Real Betis Academy Experience.",
    eyebrow: "Seville · ES · Andalusian football",
    sub: "Andalusian football, on its own terms. Coached at the Real Betis Cantera, contested against the Andalusian academy field.",
    location: "Seville · ES",
    facts: [["Country", "Spain"], ["Partner", "Real Betis Balompié"], ["Age", "U14 — U19"], ["From", "£1,950 pp"]],
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=2000&q=80",
    pill: "Application open",
    accent: "Spring window · May 02 — 09 2026",
    summary: "Cantera environment. Possession-heavy, southern Spanish football. The week ends with one fixture inside the Estadio Benito Villamarín training complex.",
    accommodation: {
      name: "4-star team hotel · Seville city centre",
      desc: "Squads are based in a four-star hotel in central Seville, within easy reach of the Real Betis training facility. A dedicated squad floor, daily breakfast and team dinner, plus a team briefing room are reserved for Ballerz Abroad groups. The hotel's location puts players in the heart of Seville — Andalusia's football culture is part of the curriculum.",
      features: ["Squad-floor block booking", "Breakfast + team dinner included", "Dedicated team briefing room", "Central Seville location", "Short coach transfer to Betis cantera", "On-site pool + wellness area"],
      photos: [
        { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80", cap: "Hotel exterior" },
        { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80", cap: "Pool terrace" },
        { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", cap: "Player rooms" },
        { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80", cap: "Team dining" },
      ],
    },
  },
  "exp-benfica": {
    title: "Benfica Academy Experience.",
    eyebrow: "Lisbon · PT · Seixal training environment",
    sub: "Inside Benfica's Seixal campus — the most decorated academy in modern Portuguese football. Coached by partner-club staff, tested against the Sub-19 field.",
    location: "Lisbon · PT",
    facts: [["Country", "Portugal"], ["Partner", "SL Benfica"], ["Age", "U14 — U19"], ["From", "£2,150 pp"]],
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=2000&q=80",
    pill: "By application",
    accent: "Summer window · Jul 12 — 19 2026",
    summary: "Seixal access. Daily sessions, video debrief, two fixtures against Benfica-aligned youth sides, one against an external Lisbon academy.",
    accommodation: {
      name: "Crowne Plaza Caparica Lisbon by IHG · Costa da Caparica",
      link: "https://www.ihg.com/crowneplaza/hotels/gb/en/caparica/lispr/hoteldetail",
      linkLabel: "View Crowne Plaza Caparica Lisbon on IHG.com",
      desc: "Squads on the Benfica window stay at the Crowne Plaza Caparica Lisbon by IHG — strategically located near Costa da Caparica, just 15 minutes from Lisbon city centre. The hotel features indoor and outdoor heated swimming pools, a full Wellness Spa (sauna, Turkish bath, treatments), a fully equipped fitness suite, seven conference rooms and the RAIMUNDO Restaurant. A dedicated team floor with full-board service is reserved for Ballerz Abroad groups. Morning transfers run direct to the Benfica Seixal campus.",
      features: ["Costa da Caparica · 15 min from Lisbon", "Crowne Plaza by IHG · four-star", "Indoor + outdoor heated pools", "Full Wellness Spa · sauna + Turkish bath", "Fitness centre · pilates · yoga · aqua aerobics", "7 conference rooms · team suite", "RAIMUNDO Restaurant on site", "~20 min transfer to Seixal campus"],
      photos: [
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8467903272-4x3", cap: "Hotel exterior" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8456254860-4x3", cap: "Rooms" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8730142370-4x3", cap: "Spa" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8730142846-4x3", cap: "Wellness centre" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8431809472-4x3", cap: "RAIMUNDO Restaurant" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8467903272-2x1", cap: "Hotel overview" },
      ],
    },
  },
  "exp-feyenoord": {
    title: "Feyenoord Academy Experience.",
    eyebrow: "Rotterdam · NL · Eredivisie partner",
    sub: "Inside Feyenoord's training environment. Direct, physical, attacking Dutch football — contested against Rotterdam and Dutch youth opposition.",
    location: "Rotterdam · NL",
    facts: [["Country", "Netherlands"], ["Partner", "Feyenoord"], ["Age", "U14 — U19"], ["From", "£1,795 pp"]],
    img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=2000&q=80",
    pill: "Application open",
    accent: "Pre-season window · Jul — Aug 2026",
    summary: "Feyenoord's academy — one of the most respected in European football — opens its training complex to Ballerz Abroad squads. Coached by partner-club staff, tested against Feyenoord youth sides and Dutch regional opposition. De Kuip access. Seven days in Rotterdam.",
    accommodation: {
      name: "Mainport Hotel · Rotterdam Old Harbour",
      link: "https://mainport.1strotterdamhotels.com/en/",
      linkLabel: "Visit mainport.1strotterdamhotels.com",
      desc: "Players stay at Mainport Hotel — a boutique design hotel set on the Maas riverfront in Rotterdam's Old Harbour (Leuvehaven). The hotel's Vitality Spa features an outdoor rooftop pool, sauna, steam room and treatments. 214 contemporary rooms, a riverside restaurant and bar, and direct access to the waterfront. Feyenoord's training complex is a short transfer by coach. Rotterdam's architecture, the waterfront and De Kuip are part of the daily backdrop.",
      features: ["Old Harbour · Leuvehaven, Rotterdam", "Vitality Spa · rooftop pool + sauna", "214 contemporary rooms", "Riverside restaurant + bar", "Full board for travelling squads", "Short transfer to Feyenoord training complex"],
      photos: [
        { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80", cap: "Mainport Hotel exterior" },
        { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80", cap: "Rooftop pool" },
        { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", cap: "Player rooms" },
        { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80", cap: "Riverside restaurant" },
        { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80", cap: "Hotel interiors" },
        { url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80", cap: "Spa & wellness" },
      ],
    },
  },
};

function Detail({ onNavigate, expId = "exp-levante" }) {
  const d = EXP_DATA[expId] || EXP_DATA["exp-levante"];
  return (
    <>
      <Nav active={expId} onNavigate={onNavigate} />

      {/* DETAIL HERO */}
      <section className="hero" style={{ minHeight: "85vh" }}>
        <div className="hero__img" style={{ backgroundImage: `url(${d.img})` }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__meta">
          <span>{d.location.toUpperCase()}</span>
          <span><strong>{d.pill.toUpperCase()}</strong></span>
          <span>{d.accent.toUpperCase()}</span>
        </div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">{d.eyebrow}</div>
          </div>
          <h1 className="display-xl">{d.title}</h1>
          <div className="hero__sub">{d.sub}</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for this experience →</button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("detail")}>View all experiences</button>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            {d.facts.map(([l, v], i) => (
              <StatCell key={l} n={v} label={l} accent={i === 3} />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — The environment</EyebrowBar>
          <h2 className="section-h">What this is.</h2>
          <div className="section-lead">{d.summary}</div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — Itinerary</EyebrowBar>
          <h2 className="section-h">Seven days, seven standards.</h2>
          <div className="section-lead">An indicative schedule — your final itinerary is built around squad age, training load, and your club's specific goals.</div>
          <div className="itin">
            <div className="itin-day"><div className="itin-day__n">DAY 01</div><div><div className="itin-day__title">Arrival · Kit handover · Stadium walk-in</div><div className="itin-day__time">14:00 – 22:00</div></div><div className="itin-day__desc">Squad transfer from the airport. Hotel check-in. Kit handover at the team room — match shirt, training kit, recovery wear. Evening walk-in at the partner club's stadium.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 02</div><div><div className="itin-day__title">Session 01 · Possession & shape</div><div className="itin-day__time">09:30 — 11:30 / 16:00 — 17:30</div></div><div className="itin-day__desc">Double-session under partner-club academy coaches. Morning technical block; afternoon shape, pressing triggers, video debrief.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 03</div><div><div className="itin-day__title">Fixture 01 · Partner academy XI</div><div className="itin-day__time">19:30 KO</div></div><div className="itin-day__desc">First fixture, floodlit. Pre-match meal, tunnel walk, full matchday environment. Post-match recovery + debrief on the bus.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 04</div><div><div className="itin-day__title">Recovery · Behind-the-scenes</div><div className="itin-day__time">10:00 — 18:00</div></div><div className="itin-day__desc">Pool recovery. Media room access. Q&A with academy first-team coach. Free evening in town.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 05</div><div><div className="itin-day__title">Session 02 · Set-piece masterclass</div><div className="itin-day__time">10:00 — 12:30</div></div><div className="itin-day__desc">Set-piece detail under specialist coach — attacking and defending corners, free-kick rotations. Video first, pitch second.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 06</div><div><div className="itin-day__title">Fixture 02 · Regional select XI</div><div className="itin-day__time">11:00 KO</div></div><div className="itin-day__desc">A curated regional select side. Same matchday standard. Different test.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 07</div><div><div className="itin-day__title">Fixture 03 · Wheels-up</div><div className="itin-day__time">10:00 KO · 19:00 dep</div></div><div className="itin-day__desc">Final fixture before lunch. Debrief in the team room. Transfer to the airport. Wheels-up at sunset.</div></div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>03 — Included</EyebrowBar>
          <h2 className="section-h">What's in the experience.</h2>
          <div className="callout-grid">
            <div className="cell"><div className="cell__n">01</div><div className="cell__t">Partner facility access</div><div className="cell__d">Daily access to partner-club training pitches, gym, recovery suite.</div></div>
            <div className="cell"><div className="cell__n">02</div><div className="cell__t">Pro coaching staff</div><div className="cell__d">Sessions delivered by partner-club academy coaches.</div></div>
            <div className="cell"><div className="cell__n">03</div><div className="cell__t">Contested fixtures</div><div className="cell__d">Matchday environments against academy-level opposition.</div></div>
            <div className="cell"><div className="cell__n">04</div><div className="cell__t">Full kit pack</div><div className="cell__d">Match shirt, training kit, recovery wear — kept by every player.</div></div>
            <div className="cell"><div className="cell__n">05</div><div className="cell__t">Accommodation + ground transport</div><div className="cell__d">Team accommodation with squad-floor allocation. Ground transfers included.</div></div>
            <div className="cell"><div className="cell__n">06</div><div className="cell__t">Camp lead + media</div><div className="cell__d">Dedicated UK camp lead. Daily content drop — Instagram, TikTok, parents.</div></div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION ---------------------------------------------------- */}
      {d.accommodation && (
        <section className="band" style={{ background: "var(--ink-800)", borderTop: "1px solid rgba(246,243,235,0.08)", borderBottom: "1px solid rgba(246,243,235,0.08)" }}>
          <div className="wrap">
            <EyebrowBar>04 — Accommodation</EyebrowBar>
            <div className="exp-detail-accommodation" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#F6F3EB", marginBottom: 12, textTransform: "none" }}>{d.accommodation.name}</div>
                {d.accommodation.link && (
                  <a href={d.accommodation.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.16em", color: "#DAFE3D", textTransform: "uppercase", border: "none", marginBottom: 18 }}>{d.accommodation.linkLabel} →</a>
                )}
                <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontSize: 17, lineHeight: 1.65, color: "#9CA4AC", marginTop: 8 }}>{d.accommodation.desc}</div>
                <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                  {d.accommodation.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.18em", color: "#DAFE3D", textTransform: "uppercase", flexShrink: 0 }}>●</span>
                      <span style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontSize: 15, color: "#F6F3EB" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="exp-detail-photos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                  {d.accommodation.photos.slice(0, 6).map((p, i) => (
                    <div key={i} className={i === 0 ? "exp-detail-photos-first" : ""} style={{ position: "relative", aspectRatio: i === 0 ? "16/9" : "4/3", gridColumn: i === 0 ? "span 2" : "span 1", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${p.url})`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      ></div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 12px", background: "linear-gradient(to top, rgba(5,6,8,0.7), transparent)", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--chalk-50)", textTransform: "uppercase" }}>{p.cap}</div>
                    </div>
                  ))}
                </div>
                {d.accommodation.photos.length > 6 && (
                  <div className="exp-detail-photos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 8 }}>
                    {d.accommodation.photos.slice(6).map((p, i) => (
                      <div key={i} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${p.url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "6px 10px", background: "linear-gradient(to top, rgba(5,6,8,0.7), transparent)", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--chalk-50)", textTransform: "uppercase" }}>{p.cap}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* OTHER EXPERIENCES */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>05 — Other experiences</EyebrowBar>
          <h2 className="section-h">More ways to travel.</h2>
          <div className="exp-grid" style={{ marginTop: 32 }}>
            {EXPERIENCES.filter(e => e.id !== expId).map(e => (
              <ExpCard
                key={e.id}
                image={(EXP_DATA[e.id] || {}).img}
                meta={e.loc.toUpperCase()}
                title={e.label}
                pill={(EXP_DATA[e.id] || {}).pill}
                onClick={() => onNavigate(e.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>06 — Apply</div></div>
            <h2 className="section-h">Apply for {d.title.replace(".", "")}</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Tell us about your squad. We respond within two working days with a tailored brief — or open a discovery call.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Start an application →</button>
              <a className="btn btn--ghost btn--lg" href="tel:07867205763" style={{ textDecoration: "none", color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>07867 205763</a>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">{d.pill}</div><div className="app-step__d">{d.accent}</div></div></div>
              <div className="app-step"><div className="app-step__n">04</div><div><div className="app-step__t">Squads taken so far</div><div className="app-step__d">2 of 4 confirmed · 1 under review · 1 open.</div></div></div>
              <div className="app-step"><div className="app-step__n">£</div><div><div className="app-step__t">{d.facts.find(f => f[0] === "From") ? d.facts.find(f => f[0] === "From")[1] : "POA"}</div><div className="app-step__d">Indicative, all-in. Final price built around your squad size.</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

window.Detail = Detail;
window.EXP_DATA = EXP_DATA;
