// Home page composition.

const { useState } = React;

const HERO_IMG = "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1920&q=80";

function Home({ onNavigate }) {
  return (
    <>
      <Nav active="home" onNavigate={onNavigate} />

      {/* HERO */}
      <section className="hero">
        <div className="hero__img" style={{ backgroundImage: `url(${HERO_IMG})`, backgroundPosition: "right center" }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__meta">
          <span>2026 · WINDOWS OPEN</span>
          <span><strong>SPAIN</strong> · <strong>NL</strong> · <strong>UK</strong></span>
        </div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">UNITED KINGDOM · SPAIN · NETHERLANDS</div>
          </div>
          <h1 className="display-xl" style={{ fontSize: "45.7px" }}>Professional football experiences.</h1>
          <div className="hero__sub">Professional training environments, organised fixtures, and tournament football across Spain, the Netherlands and the UK. Built around your squad.</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for a tour →</button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("levante")}>View the destinations</button>
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            <StatCell n="4" label="countries" />
            <StatCell n="15" label="tour destinations" />
            <StatCell n="4" label="pro club partners" />
            <StatCell n="100%" label="tailored " accent />
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — Built for clubs</EyebrowBar>
          <h2 className="section-h">Tailored around your squad.</h2>
          <div className="section-lead">Every tour is custom-built around your club's age groups, level, duration, budget, destination, and training intensity. We don't run packages — we build them.</div>
          <div className="audience-list">
            <AudienceRow n="01" title="Grassroots clubs" desc="Lift a season-long programme. Bond a squad. Expose players to the next level." />
            <AudienceRow n="02" title="Academies" desc="Pre-season camps, mid-season resets, scouting windows inside partner-club environments." />
            <AudienceRow n="03" title="Schools" desc="Football-first travel for school football programmes — academic + athletic friendly." />
            <AudienceRow n="04" title="Development teams" desc="Professional environments without an academy budget. Compete, recover, return sharper." />
            <AudienceRow n="05" title="US college soccer" desc="European exposure for NCAA programmes. Pre-season abroad, contested fixtures." />
          </div>
        </div>
      </section>

      {/* EXPERIENCE GRID */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — 2026 Windows</EyebrowBar>
          <h2 className="section-h">Selected dates only.</h2>
          <div className="section-lead">Each window is opened against partner club calendars — never more, never the same.</div>
          <div className="exp-grid">
            <ExpCard
              featured
              image="https://images.unsplash.com/photo-1610294232527-d11a4c7ce40c?w=1200&q=80"
              meta="PRO EXPERIENCE · VALENCIA, SPAIN"
              title="Levante UD experience"
              sub="Inside a La Liga club's training environment. Academy coaching, contested fixtures, and the Levante UD International Cup. Individual Player Development available."
              pill="Application open"
              onClick={() => onNavigate("levante")}
              gradBg="https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fb918eef2dd304197848f3e96ef0bf284?format=webp&width=800&height=1200"
              gradBgSize="25%"
              gradBgPosition="right center"
            />
            <ExpCard
              image="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80"
              meta="EXPERIENCE · SEVILLE, SPAIN"
              title="Real Betis experience"
              sub="La Liga training environment. Andalusian football culture."
              pill="Application open"
              onClick={() => onNavigate("betis")}
              gradBg="https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fc8bef32bbe7c4b9e9fac7ac15bd62932?format=webp"
            />
            <ExpCard
              image="https://images.unsplash.com/photo-1517747614396-d21a78b850e8?w=900&q=80"
              meta="PRO EXPERIENCE · LISBON, PORTUGAL"
              title="Benfica experience"
              sub="Best Global Academy 2015 &amp; 2019. 9-pitch campus, UEFA-accredited coaches."
              pill="Application open"
              onClick={() => onNavigate("benfica")}
              gradBg="https://cdn.builder.io/o/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F2dd0b3c55fc3419caa72fb236bd670fd?alt=media&token=e4d9a904-1980-4a8c-a4a6-c6c15919f422&apiKey=94fd70ad307f4ddc9cac607abab780ad"
            />
            <ExpCard
              image="https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=900&q=80"
              meta="TOURNAMENT · COSTA BRAVA"
              title="MIC Costa Brava"
              sub="The reference event. Easter window."
              pill="Apr 2026"
              onClick={() => onNavigate("tournaments")}
            />
            <ExpCard
              featured
              image="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1200&q=80"
              meta="COMBINED TOUR · BUILT TO BRIEF"
              title="Combined tours — your squad, your way"
              sub="Mixed-level, mixed-age, mixed-gender groups. Aligned to one of our partner tournaments. Custom-built end to end."
              onClick={() => onNavigate("application")}
            />
          </div>
        </div>
      </section>

      {/* TOUR TYPES */}
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

      {/* TOURNAMENTS */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>04 — Tournaments</EyebrowBar>
          <h2 className="section-h">Compete at the reference events.</h2>
          <div className="section-lead">Direct entries into European youth football's most contested tournaments — selected for level, not name.</div>
          <div className="fixture-table">
            {[
              ["MIC COSTA BRAVA",    "Costa Brava · Easter 2026",      "900+ matches · 59 pitches · Alumni: Pedri, Lamine Yamal, Rodri"],
              ["COPA DAURADA",       "Salou · Apr 6–10 2026",          "90 teams · 300 clubs from 25 countries"],
              ["MARE NOSTRUM CUP",   "Salou · Easter &amp; Summer",        "U9 — U19 · 10,000+ participants annually"],
              ["CRUYFF TOURNAMENT",  "Salou, Catalonia",               "Honoring Johan Cruyff · All matches recorded for scouting"],
              ["LEVANTE UD INT. CUP","Valencia · Jun 18–21 2026",      "Hosted at Levante UD Sports City · Inaugural edition"],
              ["MIC PUNTA CANA",     "Dominican Republic · Jun 24–29", "100+ teams · 13 natural-grass pitches · Caribbean window"],
            ].map(([city, sub, opp], i) => (
              <div className="fixture-row" key={i} onClick={() => onNavigate("tournaments")} style={{ cursor: "pointer" }}>
                <div className="fixture-row__date">T0{i+1}</div>
                <div className="fixture-row__city">{city}</div>
                <div className="fixture-row__opp" dangerouslySetInnerHTML={{ __html: opp }}></div>
                <div className="fixture-row__status" style={{ color: "var(--stand-300)" }} dangerouslySetInnerHTML={{ __html: sub }}></div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <button className="btn btn--ghost" onClick={() => onNavigate("tournaments")}>View all tournaments →</button>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <EyebrowBar>05 — Partners</EyebrowBar>
          <h2 className="section-h">Vetted partners.</h2>
          <div className="section-lead">We only work with clubs, federations and tournaments who share our standards for safety, quality and competition.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(246,243,235,0.12)", marginTop: 48, border: "1px solid rgba(246,243,235,0.12)" }}>
            {[
              ["Levante UD",   "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/cdc306a3-efb4-407b-a841-cc986a9a0b41/ChatGPT+Image+Jan+9%2C+2026%2C+11_01_00+AM.png"],
              ["Real Betis",   "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/d9d4fac9-5dd8-41f7-b464-2d6345e2b12f/Real_betis_logo.svg.png"],
              ["MIC Football", "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/69806f9e-a44a-473f-8214-23cce19f86e3/images+%282%29.png"],
              ["Mare Nostrum", "https://images.squarespace-cdn.com/content/v1/69657d0bde7b1d54486a7193/25655f7a-a5f8-46cf-a5fb-3900848733d8/mare_nostrum_gmail_logo.png"],
            ].map(([name, src]) => (
              <div key={name} style={{ background: "var(--ink-900)", padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, minHeight: 180 }}>
                <img src={src} alt={name} style={{ maxHeight: 80, maxWidth: "70%", objectFit: "contain", filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))" }} />
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--stand-300)", textTransform: "uppercase" }}>{name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
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
            <div className="trust-cell"><div className="trust-cell__label">Insurance</div><div className="trust-cell__v">Specialist youth football travel insurance included.</div></div>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>07 — From the tours</EyebrowBar>
          <h2 className="section-h">@ballerzabroad</h2>
          <div className="section-lead">Instagram · TikTok · @ballerzabroad — the feed updates from inside every camp.</div>
          <div className="social-grid">
            {[
              ["https://images.unsplash.com/photo-1564415051543-cca4a18fe2cc?w=600&q=80", "@ballerzabroad", "BCN"],
              ["https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80", "Tunnel walk", "DAY 02"],
              ["https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80", "Recovery", "DAY 04"],
              ["https://images.unsplash.com/photo-1518614846906-3a8a8f0c40d5?w=600&q=80", "Matchday", "FIXTURE 02"],
            ].map(([img, label, badge], i) => (
              <div key={i} className="social-tile">
                <div className="social-tile__img" style={{ backgroundImage: `url(${img})` }}></div>
                <div className="social-tile__overlay"></div>
                <div className="social-tile__meta"><span>{label}</span><span>{badge}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION BAND */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <EyebrowBar dark>08 — Apply</EyebrowBar>
            <h2 className="section-h">Tour by application.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Tell us about your squad. We respond within two working days with a tailored brief — or open a discovery call. info@ballerzabroad.com · 07867 205763.</div>
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
              <div className="app-step"><div className="app-step__n">01</div><div><div className="app-step__t">Tell us about your club.</div><div className="app-step__d">Who you are. Where you sit. What good looks like.</div></div></div>
              <div className="app-step"><div className="app-step__n">02</div><div><div className="app-step__t">Your squad.</div><div className="app-step__d">Squad size, age groups, level. We use this to design opposition.</div></div></div>
              <div className="app-step"><div className="app-step__n">03</div><div><div className="app-step__t">Your goals.</div><div className="app-step__d">Pre-season fitness? Scouting? Culture? Tell us what success looks like.</div></div></div>
              <div className="app-step"><div className="app-step__n">04</div><div><div className="app-step__t">Window &amp; budget.</div><div className="app-step__d">Preferred dates and a workable budget range. We'll do the rest.</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

window.Home = Home;
