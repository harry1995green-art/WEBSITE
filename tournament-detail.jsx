// Tournament detail page — single tournament deep-dive, parametrised by id.

// Shared Duinrell Wassenaar accommodation block for Dutch tournaments
const DUINRELL_ACCOM = {
  name: "Duinrell · Wassenaar, Netherlands",
  link: "https://www.duinrell.nl/en/",
  linkLabel: "Visit Duinrell.nl",
  desc: "Tournament squads stay at Duinrell — a renowned holiday park in Wassenaar, near The Hague, ideally positioned for the tournament venues. Players are accommodated in comfortable holiday bungalows set within Duinrell's extensive woodland grounds. The park features indoor and outdoor pools, a waterpark, sports facilities, restaurants and on-site catering — everything a squad needs between fixtures.",
  features: ["Woodland bungalows · group allocation", "Indoor + outdoor pools", "On-site waterpark + sports facilities", "Restaurants and catering on site", "Close to tournament venues · short transfers", "Ideal recovery environment between fixtures"],
  photos: [
    { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80", cap: "Pool facilities" },
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80", cap: "Resort grounds" },
    { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", cap: "Bungalow accommodation" },
    { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80", cap: "On-site dining" },
  ],
};

// Shared Cambrils Park accommodation block used by 4 Spain tournaments
const CAMBRILS_ACCOM = {
  name: "Cambrils Park Resort · Cambrils, Costa Daurada",
  link: "https://www.cambrilspark.com/en/accommodations/",
  linkLabel: "Visit cambrilspark.com to explore accommodation",
  desc: "Tournament squads are based at Cambrils Park Resort — a family resort complex ideally located close to all tournament venues on the Costa Daurada. Players stay in comfortable villas and apartments (4–6 persons, all with kitchen, lounge and private bathroom). The resort features several swimming pools, a sports centre, crazy golf, tennis, football pitches and trampolining. Restaurants, shops and bars are all on site. The resort's proximity to the tournament pitches means short daily transfers and maximum recovery time between fixtures.",
  features: ["Villas + apartments · 4–6 persons · private bathroom", "Multiple swimming pools + sports facilities", "Football, tennis, trampolining on site", "Restaurants, bars and shops on resort", "Close to all tournament venues · short transfers", "Group allocation for travelling squads"],
  photos: [
    { url: "assets/cambrils-1.avif", cap: "Cambrils Park Resort" },
    { url: "assets/cambrils-2.avif", cap: "Resort grounds" },
    { url: "https://www.cambrilspark.com/data/webp/0306---bungalow-2-habitaciones-38f5d8f54dbce77c09216a276dc850b8-9172b32661376503cc9fd3e15e617f8f.webp", cap: "Bungalow accommodation" },
    { url: "https://www.cambrilspark.com/data/webp/0303---apartamento-2-habitaciones-0f49221e4e457e09abb9833fdc99a0c1-11c21bbe84a0809d0d2be39ced9076ea.webp", cap: "Apartment interiors" },
    { url: "assets/cambrils-extra.jfif", cap: "Pool area" },
    { url: "https://www.cambrilspark.com/data/webp/0402---villa-adaptado-2-habitaciones-a990a04ff035991ca484885dbf112a51-888599c74d0617612bfdba9b5e255b7b.webp", cap: "Villa exteriors" },
  ],
};

const TOURNAMENT_DATA = {
  "tour-mic-costa-brava": {
    name: "MIC Costa Brava.",
    eyebrow: "Spain · Easter window · International Youth Tournament",
    sub: "The reference event in international youth football. Founded in 2001, hosted across Catalonia. Direct entry through Ballerz Abroad.",
    location: "Costa Brava · ES",
    facts: [["Country", "Spain"], ["Window", "28 Mar — 04 Apr 2026"], ["Age", "U10 — U19"], ["Teams", "350+"]],
    img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=2000&q=80",
    pill: "2026 entries open",
    accent: "Finals played at RCDE Stadium",
    summary: "Over 350 teams from 60+ countries every Easter. The MIC is the most-contested youth bracket in Europe — and the standard against which every other tournament is judged.",
    accommodation: CAMBRILS_ACCOM,
  },
  "tour-copa-daurada": {
    name: "Copa Daurada.",
    eyebrow: "Salou · Costa Daurada · ES",
    sub: "Grassroots-through-academy bracket on the Mediterranean coast. 1,500+ matches in a single week.",
    location: "Salou · ES",
    facts: [["Country", "Spain"], ["Window", "Apr / Oct 2026"], ["Age", "U8 — U18"], ["Teams", "300+"]],
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=2000&q=80",
    pill: "Two windows / year",
    accent: "Beachside basing · FIFA-grade pitches",
    summary: "Copa Daurada opens the European tournament calendar. Brackets from U8 through U18 play across the Salou coast on dedicated tournament pitches. Bracketed format — every team gets a knockout fixture.",
    accommodation: CAMBRILS_ACCOM,
  },
  "tour-mare-nostrum": {
    name: "Mare Nostrum Cup.",
    eyebrow: "Catalonia · Mediterranean coast",
    sub: "Long-form international field. U8 to U19 brackets played on FIFA-grade pitches.",
    location: "Catalonia · ES",
    facts: [["Country", "Spain"], ["Window", "Easter 2026"], ["Age", "U8 — U19"], ["Pitches", "FIFA-grade"]],
    img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=2000&q=80",
    pill: "Easter window",
    accent: "Group + knockout format",
    summary: "Mare Nostrum keeps a deep international field across every age group. Group stage then knockouts — three guaranteed fixtures, finals on the headline weekend.",
    accommodation: CAMBRILS_ACCOM,
  },
  "tour-cruyff": {
    name: "Cruyff Tournament.",
    eyebrow: "Amsterdam · Netherlands · Invitational",
    sub: "Hosted in the spirit of the Cruyff philosophy — possession-first, technically demanding football.",
    accommodation: CAMBRILS_ACCOM,
    location: "Amsterdam · NL",
    facts: [["Country", "Netherlands"], ["Window", "Spring 2026"], ["Age", "U10 — U17"], ["Format", "Invitational"]],
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=2000&q=80",
    pill: "Invitational only",
    accent: "Dutch academy field",
    summary: "An invitational field of Dutch and European academy sides. The Cruyff Tournament is technical, possession-led football at the highest youth level — entry is restricted, level is the only criterion.",
  },
  "tour-levante-cup": {
    name: "Levante UD International Cup.",
    eyebrow: "Valencia · ES · Hosted by our partner La Liga club",
    sub: "The home tournament of our partner club. Played across Levante UD's Ciutat Esportiva.",
    location: "Valencia · ES",
    facts: [["Country", "Spain"], ["Window", "May 2026"], ["Age", "U12 — U19"], ["Host", "Levante UD"]],
    img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=2000&q=80",
    pill: "Direct entry",
    accent: "Restricted field · Full pro environment",
    summary: "Levante UD opens its own academy facilities to a restricted international field every May. Ballerz Abroad holds direct entries. League-format group stage, single-elimination finals — all inside the Ciutat Esportiva.",
    accommodation: {
      name: "Global-Levante UD International Residence · L'Eliana, Valencia",
      link: "https://www.globalfootballtotal.com/en/facilities/",
      linkLabel: "View facilities at globalfootballtotal.com",
      desc: "Tournament squads stay at the official Global-Levante UD International Residence — the same campus used for the Levante Academy Experience. Located in L'Eliana in the Valencian community, the 23,000 m² site houses up to 120 players with private bathrooms, dining room (breakfast, lunch and dinner), swimming pool, gymnasium, crossfit area, padel courts, tennis courts, cafeteria, games room and 24-hour surveillance.",
      features: ["Up to 120 players · private bathrooms", "Full board (breakfast, lunch & dinner)", "Swimming pool + sports centre", "Gymnasium · crossfit · padel · tennis", "24-hour surveillance + tutoring service", "Direct bus transfer to Levante UD Ciutat Esportiva"],
      photos: [
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Edificio-Residencia.jpg", cap: "Residence building" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Area-Exterior.jpg", cap: "Exterior grounds" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Piscina.jpg", cap: "Swimming pool" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Comedor.jpg", cap: "Dining room" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Campo-1er-Equipo.jpg", cap: "Training pitch" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/GYM.jpg", cap: "Gymnasium" },
      ],
    },
  },
  "tour-mic-punta-cana": {
    name: "MIC Punta Cana.",
    eyebrow: "Dominican Republic · Winter window",
    sub: "MIC format, Caribbean staging. The Christmas-break alternative for squads who want a tropical fixture programme.",
    location: "Punta Cana · DR",
    facts: [["Country", "Dominican Republic"], ["Window", "Dec / Jan 2026"], ["Age", "U10 — U18"], ["Format", "MIC bracket"]],
    img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=2000&q=80",
    pill: "Winter window",
    accent: "Long-haul · Beach resort basing",
    summary: "The MIC format, exported to the Caribbean. Winter-window staging in Punta Cana with beach-resort basing. Long-haul travel — built for squads with the appetite for a Christmas-break programme.",
  },
  "tour-easter-youth-cup": {
    name: "Netherlands Easter Youth Cup.",
    eyebrow: "Wassenaar · Netherlands · Easter window",
    sub: "One of the Netherlands' most established international youth tournaments. Hosted at Duinrell Wassenaar — drawing clubs from across Europe.",
    location: "Wassenaar · NL",
    facts: [["Country", "Netherlands"], ["Window", "Apr 7 — 10 2026"], ["Format", "Group + KO"], ["Teams", "60+"]],
    img: "https://pmsoccerevents.nl/wp-content/uploads/2025/12/7x7jeugdDSC_0019-1920w.webp",
    pill: "2026 entries open",
    accent: "Previous participants include Feyenoord · Sunderland · Watford",
    summary: "The Easter Youth Cup at Duinrell Wassenaar draws clubs from across the Netherlands and Europe every April. Previous participants include Feyenoord, ADO Den Haag, Sparta Rotterdam, SC Heerenveen, Sunderland and Watford. Well-organised, contested, and hosted at an outstanding venue.",
    accommodation: DUINRELL_ACCOM,
  },
  "tour-winter-cup-nl": {
    name: "Winter Cup Holland.",
    eyebrow: "Wassenaar · Netherlands · Winter window",
    sub: "The Dutch winter tournament window. Two editions — December and January — both hosted at Duinrell Wassenaar.",
    location: "Wassenaar · NL",
    facts: [["Country", "Netherlands"], ["Window", "Dec 11–14 · Jan 15–18"], ["Format", "Group + KO"], ["Level", "Youth + Seniors"]],
    img: "https://pmsoccerevents.nl/wp-content/uploads/2025/12/7x7jeugdDSC_0019-1920w.webp",
    pill: "Two windows available",
    accent: "Youth + Seniors brackets · Duinrell Wassenaar",
    summary: "Winter Cup Holland runs two editions at Duinrell Wassenaar — December and January. Youth and seniors brackets run in parallel, making it ideal for clubs travelling with multiple squads. A strong Dutch and European international field.",
    accommodation: DUINRELL_ACCOM,
  },
};

function TournamentDetail({ onNavigate, tourId = "tour-mic-costa-brava" }) {
  const d = TOURNAMENT_DATA[tourId] || TOURNAMENT_DATA["tour-mic-costa-brava"];
  const others = Object.entries(TOURNAMENT_DATA).filter(([id]) => id !== tourId).slice(0, 3);
  return (
    <>
      <Nav active="tournaments" onNavigate={onNavigate} />

      <section className="hero" style={{ minHeight: "82vh" }}>
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
          <h1 className="display-xl">{d.name}</h1>
          <div className="hero__sub">{d.sub}</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for this tournament →</button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("tournaments")}>View all tournaments</button>
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            {d.facts.map(([l, v], i) => (
              <StatCell key={l} n={v} label={l} accent={i === 3} />
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — The event</EyebrowBar>
          <h2 className="section-h">What this is.</h2>
          <div className="section-lead">{d.summary}</div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — How a tournament tour runs</EyebrowBar>
          <h2 className="section-h">Five days, one bracket.</h2>
          <div className="callout-grid">
            <div className="cell"><div className="cell__n">01</div><div className="cell__t">Direct entry.</div><div className="cell__d">Ballerz Abroad holds confirmed places. No federation paperwork on your side.</div></div>
            <div className="cell"><div className="cell__n">02</div><div className="cell__t">Travel ops.</div><div className="cell__d">Ground transport, daily transfers — UK-managed end to end. Flights not included.</div></div>
            <div className="cell"><div className="cell__n">03</div><div className="cell__t">Camp lead on-tour.</div><div className="cell__d">A Ballerz Abroad lead embeds with your squad from arrival to wheels-up.</div></div>
            <div className="cell"><div className="cell__n">04</div><div className="cell__t">Match-day standard.</div><div className="cell__d">Pre-match meals, tunnel walks, referee briefings, video.</div></div>
            <div className="cell"><div className="cell__n">05</div><div className="cell__t">Recovery + culture.</div><div className="cell__d">Pool sessions, downtime, optional cultural windows.</div></div>
            <div className="cell"><div className="cell__n">06</div><div className="cell__t">Media & memory.</div><div className="cell__d">Daily content drop. Every fixture filmed. Clipped reel by departure.</div></div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION */}
      {d.accommodation && (
        <section className="band" style={{ background: "var(--ink-800)", borderTop: "1px solid rgba(246,243,235,0.08)", borderBottom: "1px solid rgba(246,243,235,0.08)" }}>
          <div className="wrap">
            <EyebrowBar>03 — Accommodation</EyebrowBar>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
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
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                  {d.accommodation.photos.slice(0, 6).map((p, i) => (
                    <div key={i} style={{ position: "relative", aspectRatio: i === 0 ? "16/9" : "4/3", gridColumn: i === 0 ? "span 2" : "span 1", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${p.url})`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      ></div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 12px", background: "linear-gradient(to top, rgba(5,6,8,0.7), transparent)", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.16em", color: "#F6F3EB", textTransform: "uppercase" }}>{p.cap}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="band">
        <div className="wrap">
          <EyebrowBar>04 — Other tournaments</EyebrowBar>
          <h2 className="section-h">More fixtures on the calendar.</h2>
          <div className="exp-grid" style={{ marginTop: 32 }}>
            {others.map(([id, t]) => (
              <ExpCard
                key={id}
                image={t.img}
                meta={t.location.toUpperCase()}
                title={t.name.replace(".", "")}
                pill={t.pill}
                onClick={() => onNavigate(id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>05 — Apply</div></div>
            <h2 className="section-h">Apply for {d.name.replace(".", "")}</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Tell us your bracket, your dates, your numbers. We confirm fit within two working days.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Start an application →</button>
              <a className="btn btn--ghost btn--lg" href="tel:07867205763" style={{ textDecoration: "none", color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>07867 205763</a>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">{d.pill}</div><div className="app-step__d">{d.accent}</div></div></div>
              <div className="app-step"><div className="app-step__n">2d</div><div><div className="app-step__t">Two-day response window</div><div className="app-step__d">Every application gets a tailored brief — or a discovery call.</div></div></div>
              <div className="app-step"><div className="app-step__n">UK</div><div><div className="app-step__t">UK-managed</div><div className="app-step__d">UK contract, UK staff, UK travel ops — wherever you're playing.</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

window.TournamentDetail = TournamentDetail;
window.TOURNAMENT_DATA = TOURNAMENT_DATA;
window.TOURNAMENT_DATA = TOURNAMENT_DATA;
