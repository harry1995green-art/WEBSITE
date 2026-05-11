// Tournaments hub page — all 6 tournaments Ballerz Abroad enters.

function TournamentsPage({ onNavigate }) {
  const [active, setActive] = React.useState(null);

  const tournaments = [
    {
      id: "mic-costa-brava",
      eyebrow: "T01 · EASTER WINDOW",
      name: "MIC Costa Brava",
      location: "Costa Brava · Catalonia · Spain",
      dates: "Easter 2026",
      img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&q=80",
      pill: "Application open",
      tagline: "The reference event.",
      headline: "MIC<br/>Costa Brava.",
      intro: "MICFootball is the world's most prestigious international youth football tournament. Held each Easter on the Costa Brava, it has produced over two decades of elite competition — alumni include Lamine Yamal, Cole Palmer, Rodri, Marcus Rashford, Pedri, and Dani Carvajal.",
      body: "900+ matches. 59 grass and artificial pitches across the Costa Brava. Teams from elite academies, national federations, and grassroots clubs — all competing at the same tournament, in the same environment. The MIC is where the world's youth football benchmarks itself.",
      body2: "Ballerz Abroad handles your squad's entry, travel, accommodation, and camp lead throughout. You compete. We handle everything else.",
      facts: [
        ["Dates", "Easter week · April 2026"],
        ["Location", "Costa Brava, Catalonia, Spain"],
        ["Format", "Round-robin groups · knockout finals · consolation bracket"],
        ["Age groups", "U12 — U19 · Female U16"],
        ["Pitches", "59 grass and artificial pitches"],
        ["Matches", "900+ total across the tournament"],
        ["Alumni", "Pedri · Lamine Yamal · Cole Palmer · Rodri · Rashford · Carvajal"],
        ["Editions", "20+ annual editions"],
      ],
      included: [
        ["01", "Tournament entry", "Full squad registration and confirmed group placement."],
        ["02", "Travel + accommodation", "Flights, transfers, and 4-star hotel close to the tournament venues."],
        ["03", "Camp lead", "Dedicated Ballerz Abroad lead with your squad for the full tournament."],
        ["04", "Training sessions", "Optional pre-tournament training sessions on-site before group play begins."],
        ["05", "Kit pack", "Tournament kit included for every player."],
        ["06", "Content", "Daily photo and video content — parents, club channels, social."],
      ],
    },
    {
      id: "copa-daurada",
      eyebrow: "T02 · APRIL WINDOW",
      name: "Copa Daurada",
      location: "Salou · Costa Daurada · Spain",
      dates: "Apr 6–10, 2026",
      img: "https://images.unsplash.com/photo-1564415051543-cca4a18fe2cc?w=1200&q=80",
      pill: "Apr 6–10 2026",
      tagline: "Costa Daurada. Five days of competition.",
      headline: "Copa<br/>Daurada.",
      intro: "The Copa Daurada brings together over 90 teams and 300 clubs from 25+ countries at a purpose-built sports complex in Salou on the Costa Daurada — 100km west of Barcelona. Five tournament days, grassroots through academy brackets.",
      body: "Eight adjacent pitches including artificial turf, hybrid, and natural grass surfaces. The tournament is accessible for squads at all levels — competitive brackets mean every team is genuinely tested. Salou is a well-connected base with direct links from the UK.",
      body2: "Ballerz Abroad manages entry, travel, accommodation, and your camp lead throughout. Optional pre-tournament training is available on-site.",
      facts: [
        ["Dates", "April 6–10, 2026"],
        ["Location", "Salou, Costa Daurada, Spain"],
        ["Format", "Round-robin + knockout stages · 5 tournament days"],
        ["Teams", "90+ teams · 300 clubs from 25 countries"],
        ["Pitches", "8 adjacent pitches · artificial, hybrid, natural grass"],
        ["Age groups", "Boys and girls · full range of age categories"],
        ["Bracket", "Grassroots through academy level"],
        ["Nearby", "Port Aventura · beach access · Barcelona day trip"],
      ],
      included: [
        ["01", "Tournament entry", "Full squad registration and confirmed bracket placement."],
        ["02", "Travel + accommodation", "Flights, transfers, hotel in Salou for the tournament duration."],
        ["03", "Camp lead", "Dedicated Ballerz Abroad camp lead throughout."],
        ["04", "Pre-tournament session", "Optional on-site training session before the tournament opens."],
        ["05", "Kit pack", "Tournament kit for every player."],
        ["06", "Content", "Daily content feed for parents and club social channels."],
      ],
    },
    {
      id: "mare-nostrum",
      eyebrow: "T03 · EASTER + SUMMER",
      name: "Mare Nostrum Cup",
      location: "Salou · Catalonia · Spain",
      dates: "Easter & Summer 2026",
      img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=1200&q=80",
      pill: "2 windows · 2026",
      tagline: "Easter and summer. U9 to U19.",
      headline: "Mare Nostrum<br/>Cup.",
      intro: "The Mare Nostrum Cup runs twice a year — Easter and Summer — at the Esportiu Futbol Salou complex in Catalonia. Over 20 years of youth football events. 10,000+ boys and girls competing annually. U9 to U19, all competitive levels.",
      body: "12 pitches at the Esportiu Futbol Salou. Professional staff, structured competition, and a Mediterranean setting. The tournament has built a reputation for high-quality organisation and a fair competitive structure — squads are bracketed properly so every match means something.",
      body2: "The summer window in particular suits clubs looking to finish a season with a competitive experience abroad — or start a pre-season with something that'll test the squad properly.",
      facts: [
        ["Dates", "Easter 2026 + Summer 2026"],
        ["Location", "Esportiu Futbol Salou, Catalonia, Spain"],
        ["Format", "Structured brackets · group + knockout"],
        ["Age groups", "U9 — U19 · boys and girls"],
        ["Pitches", "12 pitches at Esportiu Futbol Salou"],
        ["Participants", "10,000+ players annually"],
        ["History", "20+ years of football events"],
        ["Windows", "Easter and Summer editions available"],
      ],
      included: [
        ["01", "Tournament entry", "Full squad registration · your preferred window (Easter or Summer)."],
        ["02", "Travel + accommodation", "Flights, transfers, Salou hotel for the tournament duration."],
        ["03", "Camp lead", "Dedicated Ballerz Abroad lead with your squad."],
        ["04", "Training access", "Pre-tournament on-site training available."],
        ["05", "Kit pack", "Tournament kit for every player."],
        ["06", "Content", "Daily content for parents and club channels."],
      ],
    },
    {
      id: "cruyff",
      eyebrow: "T04 · SALOU, CATALONIA",
      name: "Cruyff Tournament",
      location: "Salou · Catalonia · Spain",
      dates: "2026 window TBC",
      img: "https://images.unsplash.com/photo-1518614846906-3a8a8f0c40d5?w=1200&q=80",
      pill: "2026 window",
      tagline: "Every match recorded. Every player scouted.",
      headline: "Cruyff<br/>Tournament.",
      intro: "Created by Jordi Cruyff in honour of Johan Cruyff's legacy, the Cruyff Tournament launched its first edition in 2024. Held in Salou, Catalonia — 90 teams, 17 countries, 1,600 players. Every match recorded and available in the app for scouting analysis.",
      body: "Groups of 4 teams. Each group guaranteed to include at least one team from Spanish La Liga or a major international league. The tournament is structured around the Cruyff philosophy — technique, intelligence, teamwork. FC Barcelona and AFC Ajax are the benchmark clubs.",
      body2: "The scouting element is genuine. Recorded footage is available through the tournament app. If your players perform, they will be seen. The 2026 edition is expanding — application through Ballerz Abroad gives your squad a confirmed slot.",
      facts: [
        ["Location", "Salou, Catalonia, Spain"],
        ["Format", "Groups of 4 · at least 1 La Liga / top-league club per group"],
        ["Age groups", "U10 (F7) through U19 (F11)"],
        ["Teams", "90 teams from 17 countries in first edition"],
        ["Players", "1,600 players · 2024 inaugural edition"],
        ["Recording", "All matches recorded · player analysis app"],
        ["Scouting", "Footage available for clubs and scouts via the tournament platform"],
        ["Philosophy", "Honoring Johan Cruyff · Barcelona & Ajax as benchmark clubs"],
      ],
      included: [
        ["01", "Tournament entry", "Full squad entry · confirmed group placement with guaranteed quality opposition."],
        ["02", "Travel + accommodation", "Flights, transfers, Salou hotel for the tournament."],
        ["03", "Camp lead", "Dedicated Ballerz Abroad lead throughout."],
        ["04", "Match footage", "Full match recordings available via the Cruyff Tournament app."],
        ["05", "Kit pack", "Tournament kit for every player."],
        ["06", "Content", "Daily content feed — parents, club channels, and social."],
      ],
    },
    {
      id: "levante-cup",
      eyebrow: "T05 · JUNE 2026 · INAUGURAL",
      name: "Levante UD Int. Cup",
      location: "Valencia · Spain",
      dates: "Jun 18–21, 2026",
      img: "https://images.unsplash.com/photo-1610294232527-d11a4c7ce40c?w=1200&q=80",
      pill: "Jun 18–21 2026",
      tagline: "A new tournament. Our partner La Liga club.",
      headline: "Levante UD<br/>International Cup.",
      intro: "The inaugural Levante UD International Cup takes place at Levante UD Sports City in Valencia, June 18–21, 2026. National and international clubs compete at the partner-club's training ground — football, culture, and Valencia combined.",
      body: "Organised by Levante UD, the tournament combines competitive football with the full Sports City experience — Fan Zone, cultural activities, tourist access to Valencia, and training programmes alongside competition. Participants stay at the Sports City facilities.",
      body2: "As a Ballerz Abroad partner club, Levante UD has reserved entry slots for squads travelling through us. The inaugural edition is a significant moment — be part of a tournament that will grow into one of the European calendar's fixtures.",
      facts: [
        ["Dates", "June 18–21, 2026"],
        ["Location", "Levante UD Sports City, Valencia, Spain"],
        ["Edition", "Inaugural 2026 tournament"],
        ["Format", "Group + knockout · national and international clubs"],
        ["Facilities", "Levante UD Sports City first-team pitches"],
        ["Extras", "Fan Zone · cultural activities · Valencia city tours"],
        ["Accommodation", "Sports City facilities for participating squads"],
        ["Partner", "Organised by Levante UD · Ballerz Abroad allocated entry"],
      ],
      included: [
        ["01", "Tournament entry", "Partner-allocated entry through Ballerz Abroad — confirmed slot."],
        ["02", "Travel + accommodation", "Flights, Valencia transfers, Sports City / partner accommodation."],
        ["03", "Camp lead", "Dedicated Ballerz Abroad lead throughout."],
        ["04", "Training sessions", "Pre-tournament sessions on the Sports City pitches with Levante UD coaching staff."],
        ["05", "Kit pack", "Tournament kit for every player."],
        ["06", "Content", "Daily content — parents feed, club channels, and social."],
      ],
    },
    {
      id: "mic-punta-cana",
      eyebrow: "T06 · CARIBBEAN WINDOW",
      name: "MIC Punta Cana",
      location: "Cap Cana · Dominican Republic",
      dates: "Jun 24–29, 2026",
      img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1200&q=80",
      pill: "Jun 24–29 2026",
      tagline: "MIC format. Caribbean staging.",
      headline: "MIC<br/>Punta Cana.",
      intro: "The second edition of MICFootball's Caribbean expansion. Jun 24–29, 2026 at Cap Cana Sports City in the Dominican Republic. 100+ teams from 20 countries. All-inclusive 4–5 star resort accommodation. The MIC format — in the Caribbean.",
      body: "125,000 m² sports complex purpose-built for the tournament. 13 natural-grass pitches. The entire event takes place within one facility — teams travel from the hotel to the pitch on foot. Elite academies from Barcelona, Liverpool, Manchester United, Real Madrid, and Inter Miami competed in the 2025 edition.",
      body2: "This is a premium window — the combination of high-level competition and full-resort accommodation makes it particularly suited to clubs rewarding a squad, combining a pre-season with something genuinely different, or competing internationally for the first time.",
      facts: [
        ["Dates", "June 24–29, 2026"],
        ["Location", "Cap Cana Sports City, Punta Cana, Dominican Republic"],
        ["Edition", "Second edition · first held 2025"],
        ["Teams", "100+ teams from 20 countries"],
        ["Facility", "125,000 m² sports complex · 13 natural-grass pitches"],
        ["Accommodation", "All-inclusive 4–5 star resort on-site"],
        ["Previous entrants", "Barcelona · Liverpool · Man Utd · Real Madrid · Inter Miami"],
        ["Format", "MIC tournament format · full group + knockout stages"],
      ],
      included: [
        ["01", "Tournament entry", "Full squad MIC Punta Cana registration."],
        ["02", "Travel + all-inclusive accommodation", "Flights, transfers, all-inclusive 4–5 star resort for the tournament duration."],
        ["03", "Camp lead", "Dedicated Ballerz Abroad lead throughout."],
        ["04", "Training access", "On-site pre-tournament training on natural grass before group play."],
        ["05", "Kit pack", "Tournament kit for every player."],
        ["06", "Content", "Daily content feed — players, parents, and club channels."],
      ],
    },
  ];

  const selected = active ? tournaments.find(t => t.id === active) : null;

  if (selected) {
    return (
      <>
        <Nav active="tournaments" onNavigate={onNavigate} />

        {/* TOURNAMENT HERO */}
        <section className="hero" style={{ minHeight: "80vh" }}>
          <div className="hero__img" style={{ backgroundImage: `url(${selected.img})` }}></div>
          <div className="hero__grain"></div>
          <div className="hero__gradient"></div>
          <div className="hero__meta">
            <span>{selected.dates}</span>
            <span dangerouslySetInnerHTML={{ __html: selected.location.replace("·", "·") }}></span>
          </div>
          <div className="hero__inner">
            <div className="hero__eyebrow">
              <div className="hero__eyebrow-rule"></div>
              <div className="hero__eyebrow-text">{selected.eyebrow}</div>
            </div>
            <h1 className="display-xl" dangerouslySetInnerHTML={{ __html: selected.headline }}></h1>
            <div className="hero__sub">{selected.tagline}</div>
            <div className="hero__ctas">
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for this tournament →</button>
              <button className="btn btn--ghost btn--lg" onClick={() => setActive(null)}>← All tournaments</button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="band">
          <div className="wrap">
            <EyebrowBar>01 — About</EyebrowBar>
            <h2 className="section-h">{selected.name}.</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
              <div>
                <div className="section-lead">{selected.intro}</div>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 24 }}>{selected.body}</p>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 16 }}>{selected.body2}</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(246,243,235,0.12)" }}>
                {selected.facts.map(([k, v]) => (
                  <div key={k} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(246,243,235,0.12)" }}>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase" }}>{k}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--chalk-50)" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="band">
          <div className="wrap">
            <EyebrowBar>02 — What's included</EyebrowBar>
            <h2 className="section-h">Built into the package.</h2>
            <div className="callout-grid">
              {selected.included.map(([n, t, d]) => (
                <div key={n} className="cell">
                  <div className="cell__n">{n}</div>
                  <div className="cell__t">{t}</div>
                  <div className="cell__d">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="app-band">
          <div className="app-band__grid">
            <div>
              <EyebrowBar dark>Apply</EyebrowBar>
              <h2 className="section-h">Secure your slot.</h2>
              <div className="section-lead" style={{ color: "#545B63" }}>Tournament entry is managed through Ballerz Abroad. Apply with your squad details — we confirm availability and the full brief within two working days.</div>
              <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
                <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for {selected.name} →</button>
                <button className="btn btn--whatsapp btn--lg" onClick={() => window.open("https://wa.me/447867205763", "_blank")}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2 22l4.31-1.13a9.86 9.86 0 0 0 5.73 1.82h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.82 9.82 0 0 0 12.04 2zm5.46 14.16c-.23.65-1.34 1.24-1.87 1.32-.48.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.82-1.22-4.66-4.06-4.8-4.25-.14-.19-1.15-1.53-1.15-2.91 0-1.38.73-2.06.99-2.34.26-.28.56-.35.75-.35h.54c.17.01.41-.07.64.49.23.57.79 1.96.86 2.1.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.13-.29.28-.13.55.16.27.71 1.17 1.52 1.9 1.04.93 1.92 1.21 2.19 1.34.27.13.43.11.59-.07.16-.18.69-.81.87-1.08.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.13.45.2.52.31.07.11.07.66-.16 1.31z"/></svg>
                  Talk on WhatsApp
                </button>
              </div>
            </div>
            <div>
              <div className="app-band__steps">
                <div className="app-step"><div className="app-step__n">01</div><div><div className="app-step__t">Submit your squad details.</div><div className="app-step__d">Age group, squad size, level, preferred window.</div></div></div>
                <div className="app-step"><div className="app-step__n">02</div><div><div className="app-step__t">We confirm availability.</div><div className="app-step__d">Within two working days — with full pricing and brief.</div></div></div>
                <div className="app-step"><div className="app-step__n">03</div><div><div className="app-step__t">Deposit secures your slot.</div><div className="app-step__d">Payment plan agreed. We handle everything from there.</div></div></div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <WhatsAppFab />
      </>
    );
  }

  // TOURNAMENTS HUB
  return (
    <>
      <Nav active="tournaments" onNavigate={onNavigate} />

      {/* HERO */}
      <section className="hero" style={{ minHeight: "72vh" }}>
        <div className="hero__img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=2000&q=80)" }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__meta">
          <span>6 TOURNAMENTS</span>
          <span><strong>SPAIN</strong> · <strong>PORTUGAL</strong> · <strong>CARIBBEAN</strong></span>
          <span>2026 ENTRIES OPEN</span>
        </div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">MIC · Copa Daurada · Mare Nostrum · Cruyff · Levante Cup · Punta Cana</div>
          </div>
          <h1 className="display-xl">Compete at<br/>the reference events.</h1>
          <div className="hero__sub">Direct entries into European youth football's most contested tournaments — and one Caribbean window. Selected for competition level, not prestige alone.</div>
        </div>
      </section>

      {/* TOURNAMENT GRID */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>2026 tournament calendar</EyebrowBar>
          <h2 className="section-h">Six events. One calendar.</h2>
          <div className="section-lead">Ballerz Abroad manages entry, travel, accommodation, and your camp lead for all six tournaments. One application — we do the rest.</div>

          <div style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: 48, borderTop: "1px solid rgba(246,243,235,0.12)" }}>
            {tournaments.map((t, i) => (
              <div
                key={t.id}
                onClick={() => { setActive(t.id); window.scrollTo({ top: 0, behavior: "instant" }); }}
                style={{
                  display: "grid",
                  gridTemplateColumns: "80px 280px 1fr 240px 56px",
                  alignItems: "center",
                  gap: 24,
                  padding: "32px 0",
                  borderBottom: "1px solid rgba(246,243,235,0.12)",
                  cursor: "pointer",
                  transition: "padding var(--dur-2) var(--ease-out)",
                }}
                className="tournament-row"
              >
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--stand-300)", textTransform: "uppercase" }}>T0{i+1}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(24px, 2.5vw, 40px)", lineHeight: 0.95, textTransform: "uppercase", color: "var(--chalk-50)" }}>{t.name}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--stand-300)", lineHeight: 1.5 }}>{t.tagline}</div>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--volt-500)", textTransform: "uppercase", marginBottom: 4 }}>{t.dates}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", color: "var(--stand-300)", textTransform: "uppercase" }}>{t.location}</div>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 18, color: "var(--stand-300)", textAlign: "right", transition: "color var(--dur-2), transform var(--dur-2) var(--ease-out)" }} className="tournament-row__arrow">→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOURNAMENT CARDS */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>In detail</EyebrowBar>
          <h2 className="section-h">Every tournament.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginTop: 48 }}>
            {tournaments.map((t) => (
              <div
                key={t.id}
                style={{ position: "relative", overflow: "hidden", cursor: "pointer", background: "var(--ink-800)", aspectRatio: "4/5" }}
                onClick={() => { setActive(t.id); window.scrollTo({ top: 0, behavior: "instant" }); }}
                className="exp-card"
              >
                <div className="exp-card__img" style={{ backgroundImage: `url(${t.img})` }}></div>
                <div className="exp-card__grad"></div>
                <span className="exp-card__pill"><span className="dot"></span>{t.pill}</span>
                <div className="exp-card__body">
                  <div className="exp-card__meta">{t.eyebrow}</div>
                  <div className="exp-card__t">{t.name}</div>
                  <div className="exp-card__sub">{t.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>How we manage tournament entry</EyebrowBar>
          <h2 className="section-h">One application. Everything managed.</h2>
          <div className="section-lead">Ballerz Abroad handles registration, travel, accommodation, and your camp lead for every tournament on this page. You apply once — we build the rest.</div>
          <div className="callout-grid" style={{ marginTop: 48 }}>
            <div className="cell">
              <div className="cell__n">01</div>
              <div className="cell__t">Apply with your squad details.</div>
              <div className="cell__d">Age group, squad size, preferred tournament, window. We respond within two working days with availability and pricing.</div>
            </div>
            <div className="cell">
              <div className="cell__n">02</div>
              <div className="cell__t">We confirm and build the brief.</div>
              <div className="cell__d">Full itinerary, travel plan, accommodation, kit, and camp lead assignment. One point of contact throughout.</div>
            </div>
            <div className="cell">
              <div className="cell__n">03</div>
              <div className="cell__t">Deposit and you're confirmed.</div>
              <div className="cell__d">Payment plan agreed. Tournament entry secured. We handle everything from registration to wheels-up and back.</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <EyebrowBar dark>Apply</EyebrowBar>
            <h2 className="section-h">Tournament by application.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Tell us which tournament, your squad size, and age group. We confirm availability and pricing within two working days — info@ballerzabroad.com or 07867 205763.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Start an application →</button>
              <button className="btn btn--whatsapp btn--lg" onClick={() => window.open("https://wa.me/447867205763", "_blank")}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2 22l4.31-1.13a9.86 9.86 0 0 0 5.73 1.82h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.82 9.82 0 0 0 12.04 2zm5.46 14.16c-.23.65-1.34 1.24-1.87 1.32-.48.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.82-1.22-4.66-4.06-4.8-4.25-.14-.19-1.15-1.53-1.15-2.91 0-1.38.73-2.06.99-2.34.26-.28.56-.35.75-.35h.54c.17.01.41-.07.64.49.23.57.79 1.96.86 2.1.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.13-.29.28-.13.55.16.27.71 1.17 1.52 1.9 1.04.93 1.92 1.21 2.19 1.34.27.13.43.11.59-.07.16-.18.69-.81.87-1.08.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.13.45.2.52.31.07.11.07.66-.16 1.31z"/></svg>
                Talk on WhatsApp
              </button>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">01</div><div><div className="app-step__t">Choose your tournament.</div><div className="app-step__d">Or let us recommend one based on your squad's level and window.</div></div></div>
              <div className="app-step"><div className="app-step__n">02</div><div><div className="app-step__t">Tell us about your squad.</div><div className="app-step__d">Age group, size, level, and preferred travel dates.</div></div></div>
              <div className="app-step"><div className="app-step__n">03</div><div><div className="app-step__t">We confirm and handle everything.</div><div className="app-step__d">Entry, travel, kit, accommodation, camp lead — end to end.</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

window.TournamentsPage = TournamentsPage;
