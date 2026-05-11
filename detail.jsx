// Experience detail page — single camp deep-dive.

function Detail({ onNavigate }) {
  const DETAIL_IMG = "https://images.unsplash.com/photo-1577471488278-16eec37ffcc2?w=2000&q=80";
  return (
    <>
      <Nav active="detail" onNavigate={onNavigate} />

      {/* DETAIL HERO */}
      <section className="hero" style={{ minHeight: "85vh" }}>
        <div className="hero__img" style={{ backgroundImage: `url(${DETAIL_IMG})` }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__meta">
          <span>CAMP 02</span>
          <span><strong>BARCELONA</strong> · CATALONIA · ES</span>
          <span>04 – 11 APR 2026</span>
        </div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">La Masia window · 7 days · Application open</div>
          </div>
          <h1 className="display-xl">La Masia<br/>window.</h1>
          <div className="hero__sub">Seven days inside a top-tier Catalan academy environment. Three contested fixtures. Camp Nou access window. Built around your squad.</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for this camp →</button>
            <button className="btn btn--ghost btn--lg">Download the brief</button>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            <StatCell n="07" label="Days in Barcelona" />
            <StatCell n="15" label="Pro sessions" />
            <StatCell n="03" label="Fixtures" />
            <StatCell n="24" label="Player capacity" accent />
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — Itinerary</EyebrowBar>
          <h2 className="section-h">Seven days, seven standards.</h2>
          <div className="section-lead">An indicative schedule — your final itinerary is built around squad age, training load, and your club's specific goals.</div>
          <div className="itin">
            <div className="itin-day"><div className="itin-day__n">DAY 01</div><div><div className="itin-day__title">Arrival · Kit handover · Camp Nou walk-in</div><div className="itin-day__time">14:00 – 22:00</div></div><div className="itin-day__desc">Touchdown El Prat. Squad transfer. Hotel check-in. Kit handover at the team room — match-shirt, training kit, recovery wear. Evening walk-in at Camp Nou.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 02</div><div><div className="itin-day__title">Session 01 · Possession &amp; shape</div><div className="itin-day__time">09:30 — 11:30 / 16:00 — 17:30</div></div><div className="itin-day__desc">Double-session under partner-club academy coaches. Morning technical block; afternoon shape, pressing triggers, video debrief.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 03</div><div><div className="itin-day__title">Fixture 01 · vs. RCD Espanyol Acad.</div><div className="itin-day__time">19:30 KO</div></div><div className="itin-day__desc">First fixture, floodlit. Pre-match meal, tunnel walk, full matchday environment. Post-match recovery + debrief on the bus.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 04</div><div><div className="itin-day__title">Recovery · Behind-the-scenes</div><div className="itin-day__time">10:00 — 18:00</div></div><div className="itin-day__desc">Pool recovery. Media room access. Q&amp;A with academy first-team coach. Free evening in El Born.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 05</div><div><div className="itin-day__title">Session 02 · Set-piece masterclass</div><div className="itin-day__time">10:00 — 12:30</div></div><div className="itin-day__desc">Set-piece detail under specialist coach — attacking and defending corners, free-kick rotations. Video first, pitch second.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 06</div><div><div className="itin-day__title">Fixture 02 · Regional select XI</div><div className="itin-day__time">11:00 KO</div></div><div className="itin-day__desc">Curated Catalan regional select side. Same matchday standard. Different test.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 07</div><div><div className="itin-day__title">Fixture 03 · Wheels-up</div><div className="itin-day__time">10:00 KO · 19:00 dep</div></div><div className="itin-day__desc">Final fixture before lunch. Debrief in the team room. Transfer to El Prat. Wheels-up at sunset.</div></div>
          </div>
        </div>
      </section>

      {/* FIXTURES */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — Opposition</EyebrowBar>
          <h2 className="section-h">Curated competition.</h2>
          <div className="section-lead">Every fixture is selected for level, not name. We don't book the famous side if the contest will be one-sided.</div>
          <div className="fixture-table">
            <div className="fixture-row">
              <div className="fixture-row__date">FIX 01 · 06 APR</div>
              <div className="fixture-row__city">Barcelona</div>
              <div className="fixture-row__opp">vs. RCD Espanyol Academy U18</div>
              <div className="fixture-row__status" style={{ color: "#DAFE3D" }}>● Confirmed</div>
            </div>
            <div className="fixture-row">
              <div className="fixture-row__date">FIX 02 · 09 APR</div>
              <div className="fixture-row__city">Catalonia</div>
              <div className="fixture-row__opp">vs. Catalan Regional Select XI</div>
              <div className="fixture-row__status" style={{ color: "#DAFE3D" }}>● Confirmed</div>
            </div>
            <div className="fixture-row">
              <div className="fixture-row__date">FIX 03 · 11 APR</div>
              <div className="fixture-row__city">Barcelona</div>
              <div className="fixture-row__opp">vs. Partner academy XI (TBC)</div>
              <div className="fixture-row__status" style={{ color: "#C8784A" }}>● Pending</div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>03 — Included</EyebrowBar>
          <h2 className="section-h">What's in the camp.</h2>
          <div className="callout-grid">
            <div className="cell"><div className="cell__n">01</div><div className="cell__t">Academy facility access</div><div className="cell__d">Daily access to partner-club training pitches, gym, recovery suite.</div></div>
            <div className="cell"><div className="cell__n">02</div><div className="cell__t">Pro coaching staff</div><div className="cell__d">15 sessions delivered by partner-club academy coaches.</div></div>
            <div className="cell"><div className="cell__n">03</div><div className="cell__t">Three contested fixtures</div><div className="cell__d">Floodlit matchday environments against academy-level opposition.</div></div>
            <div className="cell"><div className="cell__n">04</div><div className="cell__t">Full kit pack</div><div className="cell__d">Match shirt, training kit, recovery wear — kept by every player.</div></div>
            <div className="cell"><div className="cell__n">05</div><div className="cell__t">Travel + accommodation</div><div className="cell__d">Flights, ground transfer, four-star team hotel with squad-floor block.</div></div>
            <div className="cell"><div className="cell__n">06</div><div className="cell__t">Camp lead + media</div><div className="cell__d">Dedicated UK camp lead. Daily content drop — Instagram, TikTok, parents.</div></div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <EyebrowBar dark>04 — Apply</EyebrowBar>
            <h2 className="section-h">Limited to four squads.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>The April window is capped at four visiting squads against the partner-club calendar. Apply with your squad — we'll confirm fit within two working days.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for the Barcelona window →</button>
              <button className="btn btn--ghost btn--lg" style={{ color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>Download the camp brief</button>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">Application open</div><div className="app-step__d">Until 14 February 2026 or all places filled.</div></div></div>
              <div className="app-step"><div className="app-step__n">04</div><div><div className="app-step__t">Squads taken so far</div><div className="app-step__d">2 of 4 confirmed · 1 under review · 1 open.</div></div></div>
              <div className="app-step"><div className="app-step__n">£</div><div><div className="app-step__t">From £1,895 per player</div><div className="app-step__d">Indicative, all-in. Final price built around your squad size.</div></div></div>
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
