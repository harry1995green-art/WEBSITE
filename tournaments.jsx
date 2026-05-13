// Tournaments page — full taxonomy of partner events.

function Tournaments({ onNavigate }) {
  const T_IMG = "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=2000&q=80";

  const tournaments = [
    { id: "tour-mic-costa-brava", featured: true, name: "MIC Costa Brava", meta: "Spain · Easter window · 28 Mar — 04 Apr 2026", img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F032691b5832c48ad98a2c4f7b03eeff7?format=webp", desc: "The reference event in international youth football. Founded in 2001, hosted across Catalonia. Over 350 teams from 60+ countries; finals played at RCDE Stadium.", facts: [["Age", "U10 — U19"], ["Format", "Group + KO"], ["Teams", "350+"], ["Window", "Easter"]] },
    { id: "tour-copa-daurada", name: "Copa Daurada", meta: "Salou · Costa Daurada · ES", img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F43ec6735cb3740d4b85a11cef8068f0f", desc: "Grassroots-through-academy bracket. 1,500+ matches across the week, beachside basing — the youth tournament that opens the European season.", facts: [["Age", "U8 — U18"], ["Format", "Bracketed"], ["Teams", "300+"], ["Window", "Apr / Oct"]] },
    { id: "tour-mare-nostrum", name: "Mare Nostrum Cup", meta: "Catalonia · Mediterranean coast", img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fb683cce85259419fb0dd7835de827f98", desc: "Long-form international field. U8 to U19 brackets play on FIFA-grade pitches across the Mediterranean coast.", facts: [["Age", "U8 — U19"], ["Format", "Group + KO"], ["Pitches", "FIFA-grade"], ["Window", "Easter"]] },
    { id: "tour-cruyff", name: "Cruyff Tournament", meta: "Amsterdam · Netherlands", img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F6b7717d918c24293ac81a2d7ae270706?format=webp&width=800&height=1200", desc: "Hosted in the spirit of the Cruyff philosophy — possession-first, technically demanding football. Dutch academy field; invitational standard.", facts: [["Age", "U10 — U17"], ["Format", "Invitational"], ["Field", "Academy"], ["Window", "Spring"]] },
    { id: "tour-levante-cup", featured: true, name: "Levante UD Int. Cup", meta: "Valencia · ES · Hosted by our partner La Liga club", img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F72d8c14eea674af3a855500f305d4f80?format=webp&width=800&height=1200", desc: "The home tournament of our partner club. Played across Ciutat Esportiva facilities. Direct entry for Ballerz Abroad squads — restricted field, full pro environment.", facts: [["Age", "U12 — U19"], ["Format", "League + finals"], ["Host", "Levante UD"], ["Window", "May"]] },
    { id: "tour-easter-youth-cup", featured: false, name: "Easter Youth Cup", meta: "Netherlands · Easter window · Apr 7–10 2026", img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fce13cba90d35467982a5ce5cbf7a73c9?format=webp&width=800&height=1200", desc: "One of the Netherlands' most established international youth tournaments. Hosted at Duinrell Wassenaar — previous participants include Feyenoord, Sunderland and Watford.", facts: [["Country", "Netherlands"], ["Window", "Apr 7–10"], ["Format", "Group + KO"], ["Venue", "Duinrell"]] },
    { id: "tour-winter-cup-nl", featured: false, name: "Winter Cup Holland", meta: "Netherlands · Dec + Jan windows", img: "https://pmsoccerevents.nl/wp-content/uploads/2025/12/7x7jeugdDSC_0019-1920w.webp", desc: "Two editions at Duinrell Wassenaar — December and January. Youth and seniors brackets in parallel. Strong Dutch and European international field.", facts: [["Country", "Netherlands"], ["Window", "Dec + Jan"], ["Format", "Group + KO"], ["Level", "Youth + Seniors"]] },
  ];

  return (
    <>
      <Nav active="tournaments" onNavigate={onNavigate} />

      {/* HERO */}
      <section className="hero" style={{ minHeight: "78vh" }}>
        <div className="hero__img" style={{ backgroundImage: `url(${T_IMG})` }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__meta">
          <span>2026 — TOURNAMENT FIELD</span>
          <span><strong>ES</strong> · <strong>NL</strong> · <strong>DR</strong></span>
        </div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">Tournaments · Direct entry · By application</div>
          </div>
          <h1 className="display-xl">The reference<br/>events.</h1>
          <div className="hero__sub">Direct entries into European youth football's most contested tournaments — selected for level, not name. Six events across the calendar, three continents, one bar.</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for a tournament →</button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("detail")}>View experiences</button>
          </div>
        </div>
      </section>

      {/* STAT */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            <StatCell n="07" label="Partner events" />
            <StatCell n="3" label="Countries represented" />
            <StatCell n="11" label="Brackets · U8 — U19" />
            <StatCell n="40+" label="PROFESSIONAL ACADEMIES" accent />
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — 2026 Calendar</EyebrowBar>
          <h2 className="section-h">Where we play.</h2>
          <div className="section-lead">Each entry is opened against the host federation's calendar. Capacity is finite — apply early or join a waiting list.</div>
          <div className="tour-grid">
            {tournaments.map((t, i) => (
              <div className={"tour-card " + (t.featured ? "tour-card--lg" : "")} key={i} onClick={() => onNavigate(t.id)} style={{ cursor: "pointer" }}>
                <div className="tour-card__img" style={{ backgroundImage: `url(${t.img})` }}></div>
                <div className="tour-card__body">
                  <div className="tour-card__meta">{t.meta}</div>
                  <div className="tour-card__t">{t.name}</div>
                  <div className="tour-card__d">{t.desc}</div>
                  <div className="tour-card__facts">
                    {t.facts.map(([l, v]) => (
                      <div className="tour-card__fact" key={l}>
                        <div className="tour-card__fact-l">{l}</div>
                        <div className="tour-card__fact-v">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — How a tournament tour runs</EyebrowBar>
          <h2 className="section-h">Five days, one bracket.</h2>
          <div className="callout-grid">
            <div className="cell"><div className="cell__n">01</div><div className="cell__t">Direct entry.</div><div className="cell__d">Ballerz Abroad holds confirmed places. No federation paperwork on your side — we file it.</div></div>
            <div className="cell"><div className="cell__n">02</div><div className="cell__t">Travel ops.</div><div className="cell__d">Ground transport, team hotel, daily transfers to pitch and back. UK-managed end to end.</div></div>
            <div className="cell"><div className="cell__n">03</div><div className="cell__t">Camp lead on-tour.</div><div className="cell__d">A Ballerz Abroad lead embeds with your squad from arrival to wheels-up.</div></div>
            <div className="cell"><div className="cell__n">04</div><div className="cell__t">Match-day standard.</div><div className="cell__d">Pre-match meals, tunnel walks, referee briefings, video. The whole matchday environment, not just the kick-off.</div></div>
            <div className="cell"><div className="cell__n">05</div><div className="cell__t">Recovery + culture.</div><div className="cell__d">Pool sessions, downtime, optional cultural windows. Football first — but never football only.</div></div>
            <div className="cell"><div className="cell__n">06</div><div className="cell__t">Media & memory.</div><div className="cell__d">Daily content drop to a private parent channel. Every fixture filmed. Clipped reel by departure.</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>03 — Apply</div></div>
            <h2 className="section-h">Tournament by application.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Tell us your bracket, your dates, your numbers. We confirm fit within two working days, lock the entry, and start the build.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for a tournament →</button>
              <a className="btn btn--ghost btn--lg" href="tel:07867205763" style={{ textDecoration: "none", color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>07867 205763</a>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">Entries open</div><div className="app-step__d">2026 calendar live. Spaces fill against host federation caps.</div></div></div>
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

window.Tournaments = Tournaments;
