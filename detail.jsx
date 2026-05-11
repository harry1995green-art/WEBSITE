// Experience detail pages — Levante UD, Real Betis, Benfica.

// ---------------------------------------------------------------------------
// Shared detail layout helpers
// ---------------------------------------------------------------------------

function DetailHero({ eyebrow, badge1, badge2, badge3, img, title, sub, onNavigate, gradBg, titleColor }) {
  return (
    <section className="hero" style={{ minHeight: "88vh" }}>
      <div className="hero__img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="hero__grain"></div>
      <div className="hero__gradient" style={gradBg ? { backgroundImage: `url(${gradBg})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" } : {}}></div>
      <div className="hero__meta">
        {badge1 && <span>{badge1}</span>}
        {badge2 && <span dangerouslySetInnerHTML={{ __html: badge2 }}></span>}
        {badge3 && <span>{badge3}</span>}
      </div>
      <div className="hero__inner">
        <div className="hero__eyebrow">
          <div className="hero__eyebrow-rule"></div>
          <div className="hero__eyebrow-text">{eyebrow}</div>
        </div>
        <h1 className="display-xl" style={titleColor ? { color: titleColor } : {}} dangerouslySetInnerHTML={{ __html: title }}></h1>
        <div className="hero__sub">{sub}</div>
        <div className="hero__ctas">
          <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for this experience →</button>
          <button className="btn btn--ghost btn--lg" onClick={() => window.open("https://wa.me/447867205763", "_blank")}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2 22l4.31-1.13a9.86 9.86 0 0 0 5.73 1.82h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.82 9.82 0 0 0 12.04 2zm5.46 14.16c-.23.65-1.34 1.24-1.87 1.32-.48.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.82-1.22-4.66-4.06-4.8-4.25-.14-.19-1.15-1.53-1.15-2.91 0-1.38.73-2.06.99-2.34.26-.28.56-.35.75-.35h.54c.17.01.41-.07.64.49.23.57.79 1.96.86 2.1.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.13-.29.28-.13.55.16.27.71 1.17 1.52 1.9 1.04.93 1.92 1.21 2.19 1.34.27.13.43.11.59-.07.16-.18.69-.81.87-1.08.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.13.45.2.52.31.07.11.07.66-.16 1.31z"/></svg>
            Talk to us first
          </button>
        </div>
      </div>
    </section>
  );
}

function IncludedGrid({ items }) {
  return (
    <div className="callout-grid">
      {items.map(([n, t, d]) => (
        <div key={n} className="cell">
          <div className="cell__n">{n}</div>
          <div className="cell__t">{t}</div>
          <div className="cell__d">{d}</div>
        </div>
      ))}
    </div>
  );
}

function ApplyCTA({ headline, sub, detail1, detail2, detail3, campName, onNavigate }) {
  return (
    <section className="app-band">
      <div className="app-band__grid">
        <div>
          <EyebrowBar dark>Apply</EyebrowBar>
          <h2 className="section-h">{headline}</h2>
          <div className="section-lead" style={{ color: "#545B63" }}>{sub}</div>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for {campName} →</button>
            <button className="btn btn--whatsapp btn--lg" onClick={() => window.open("https://wa.me/447867205763", "_blank")}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 2.1.55 4.14 1.6 5.95L2 22l4.31-1.13a9.86 9.86 0 0 0 5.73 1.82h0c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01A9.82 9.82 0 0 0 12.04 2zm5.46 14.16c-.23.65-1.34 1.24-1.87 1.32-.48.07-1.09.1-1.76-.11-.41-.13-.93-.3-1.6-.59-2.82-1.22-4.66-4.06-4.8-4.25-.14-.19-1.15-1.53-1.15-2.91 0-1.38.73-2.06.99-2.34.26-.28.56-.35.75-.35h.54c.17.01.41-.07.64.49.23.57.79 1.96.86 2.1.07.14.11.3.02.49-.09.19-.14.3-.28.46-.14.16-.29.36-.42.49-.14.13-.29.28-.13.55.16.27.71 1.17 1.52 1.9 1.04.93 1.92 1.21 2.19 1.34.27.13.43.11.59-.07.16-.18.69-.81.87-1.08.18-.27.36-.23.61-.14.25.09 1.59.75 1.86.89.27.13.45.2.52.31.07.11.07.66-.16 1.31z"/></svg>
              Talk on WhatsApp
            </button>
          </div>
        </div>
        <div>
          <div className="app-band__steps">
            {detail1 && <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">{detail1[0]}</div><div className="app-step__d">{detail1[1]}</div></div></div>}
            {detail2 && <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">{detail2[0]}</div><div className="app-step__d">{detail2[1]}</div></div></div>}
            {detail3 && <div className="app-step"><div className="app-step__n">£</div><div><div className="app-step__t">{detail3[0]}</div><div className="app-step__d">{detail3[1]}</div></div></div>}
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Levante UD Experience
// ---------------------------------------------------------------------------
function LevanteDetail({ onNavigate }) {
  return (
    <>
      <Nav active="levante" onNavigate={onNavigate} />

      <DetailHero
        img="https://images.unsplash.com/photo-1610294232527-d11a4c7ce40c?w=2000&q=80"
        eyebrow="Pro Experience · Valencia · La Liga partner"
        badge1="PRO EXPERIENCE"
        badge2="<strong>VALENCIA</strong> · SPAIN · ES"
        badge3="2026 WINDOWS OPEN"
        title="Levante UD<br/>experience."
        sub="Train inside a La Liga club's academy environment. Professional coaching staff, contested fixtures, and the option to compete in the Levante UD International Cup. Built around your squad."
        onNavigate={onNavigate}
      />

      {/* QUICK STATS */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            <StatCell n="07" label="Days in Valencia" />
            <StatCell n="12" label="Pro sessions" />
            <StatCell n="03" label="Contested fixtures" />
            <StatCell n="01" label="La Liga environment" accent />
          </div>
        </div>
      </section>

      {/* ABOUT THE PARTNER */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — The partner</EyebrowBar>
          <h2 className="section-h">Levante UD.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="section-lead">One of Valencia's historic La Liga clubs. Levante UD's Sports City sits on the edge of the city — a full-scale professional training environment with multiple first-team pitches, academy facilities, a gym complex, and recovery suite.</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 24 }}>Your squad trains where the professional players train. Academy-grade pitches, the same dressing rooms, the same tunnel walk. The environment is intentional — it changes what players believe is possible.</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 16 }}>Levante UD coaching staff deliver the sessions — UEFA-licensed, academy-experienced, and briefed on your squad before you arrive.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(246,243,235,0.12)" }}>
              {[
                ["Location", "Levante UD Sports City, Valencia, Spain"],
                ["Club", "Levante UD · La Liga"],
                ["Facility", "First-team pitches, gym, recovery suite, dressing rooms"],
                ["Coaching", "Levante UD UEFA-licensed academy coaches"],
                ["Age groups", "U10 — U19 (squad-dependent)"],
                ["Tournament option", "Levante UD International Cup · June 2026"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(246,243,235,0.12)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase" }}>{k}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--chalk-50)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — Itinerary</EyebrowBar>
          <h2 className="section-h">Seven days inside La Liga.</h2>
          <div className="section-lead">An indicative schedule — your final programme is built around squad age, training load, and your club's goals.</div>
          <div className="itin">
            <div className="itin-day">
              <div className="itin-day__n">DAY 01</div>
              <div><div className="itin-day__title">Arrival · Sports City orientation · Kit handover</div><div className="itin-day__time">14:00 – 21:00</div></div>
              <div className="itin-day__desc">Land at Valencia Airport. Ground transfer to the hotel. Kit handover at the team room — match-shirt, training kit, recovery wear. Evening walk through Levante UD's Sports City with your camp lead.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 02</div>
              <div><div className="itin-day__title">Session 01 · Technical individual skills</div><div className="itin-day__time">09:30 – 11:30 / 16:00 – 17:30</div></div>
              <div className="itin-day__desc">Double session with Levante UD academy coaches. Morning: individual technical work — first touch, movement, positioning. Afternoon: possession patterns, pressing triggers, video debrief in the team room.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 03</div>
              <div><div className="itin-day__title">Session 02 · Shape &amp; team organisation</div><div className="itin-day__time">10:00 – 12:30</div></div>
              <div className="itin-day__desc">Tactical session focused on the team's shape in and out of possession. Emphasis on transitions — how Levante's academy presses and builds. Afternoon recovery: pool, nutrition briefing.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 04</div>
              <div><div className="itin-day__title">Fixture 01 · Valencia-area academy XI</div><div className="itin-day__time">19:30 KO · Floodlit</div></div>
              <div className="itin-day__desc">First contested fixture. Pre-match meal, full tunnel walk, matchday environment. Opposition sourced from the Valencia academy network — matched to your level. Post-match debrief with coaching staff on the bus.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 05</div>
              <div><div className="itin-day__title">Behind-the-scenes · Q&amp;A · Free afternoon</div><div className="itin-day__time">10:00 – 18:00</div></div>
              <div className="itin-day__desc">Media room access. Q&amp;A with a Levante UD academy coach — football philosophy, route to pro football, life at a La Liga club. Free afternoon in Valencia city centre.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 06</div>
              <div><div className="itin-day__title">Fixture 02 + Session 03 · Set-piece masterclass</div><div className="itin-day__time">10:00 – 12:30 / 19:00 KO</div></div>
              <div className="itin-day__desc">Morning set-piece session — attacking and defending corners, free-kicks, throw-in routines. Evening second fixture against a different opponent from the academy network.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 07</div>
              <div><div className="itin-day__title">Fixture 03 · Debrief · Wheels-up</div><div className="itin-day__time">10:00 KO · 19:00 dep</div></div>
              <div className="itin-day__desc">Final fixture before lunch. Full squad debrief with coaching staff in the team room. Transfer to Valencia Airport. Wheels-up at sunset.</div>
            </div>
          </div>
        </div>
      </section>

      {/* LEVANTE UD INTERNATIONAL CUP */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>03 — Tournament option</EyebrowBar>
          <h2 className="section-h">Levante UD Int. Cup.</h2>
          <div className="section-lead">Add the Levante UD International Cup to your experience window. National and international clubs compete at the Sports City in an inaugural tournament combining football, culture, and Valencia.</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "rgba(246,243,235,0.12)", marginTop: 48, border: "1px solid rgba(246,243,235,0.12)" }}>
            {[
              ["Dates", "June 18–21, 2026"],
              ["Location", "Levante UD Sports City, Valencia"],
              ["Format", "Group stage + knockout · national &amp; international clubs"],
              ["Edition", "Inaugural 2026 tournament"],
              ["Facilities", "First-team pitches at the Sports City"],
              ["Add-on", "Combine with the 7-day experience or stand-alone entry"],
            ].map(([k, v]) => (
              <div key={k} style={{ background: "var(--ink-900)", padding: "28px 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.16em", color: "var(--volt-500)", textTransform: "uppercase" }}>{k}</div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16, color: "var(--chalk-50)", lineHeight: 1.4 }} dangerouslySetInnerHTML={{ __html: v }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>04 — What's included</EyebrowBar>
          <h2 className="section-h">Built into every window.</h2>
          <IncludedGrid items={[
            ["01", "La Liga facility access", "Daily use of Levante UD's Sports City — pitches, gym, recovery suite, dressing rooms."],
            ["02", "Levante UD coaching staff", "12 sessions delivered by UEFA-licensed Levante UD academy coaches."],
            ["03", "3 contested fixtures", "Opponents sourced from Valencia's academy network and matched to your squad level."],
            ["04", "Full kit pack", "Match shirt, training kit, and recovery wear — kept by every player."],
            ["05", "Travel + accommodation", "Flights, ground transfers, 4-star team hotel with squad-floor block booking."],
            ["06", "Camp lead + content", "Dedicated UK camp lead with your squad throughout. Daily content feed for parents and social."],
          ]} />
        </div>
      </section>

      {/* INDIVIDUAL PLAYER DEVELOPMENT */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>05 — Individual option</EyebrowBar>
          <h2 className="section-h">Player development programme.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="section-lead">The Levante UD experience is available for individual players — not just full squads. Parents are welcome to travel.</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 24 }}>Players join a structured programme inside the Levante UD training environment alongside other invited individual players. Bespoke coaching focus agreed ahead of the window — technical, positional, or tactical.</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 16 }}>A written performance report is provided at the end of the programme. Parents can observe training sessions and meet the coaching staff.</p>
              <div style={{ marginTop: 32 }}>
                <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for the individual programme →</button>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(246,243,235,0.12)" }}>
              {[
                ["Format", "Individual player · join existing programme"],
                ["Duration", "5 or 7 days · selected windows only"],
                ["Coaching", "Dedicated 1:1 sessions alongside squad programme"],
                ["Parents", "Welcome to travel · parent accommodation available"],
                ["Report", "Written performance review at close of programme"],
                ["Age groups", "U12 — U18"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "140px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(246,243,235,0.12)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase" }}>{k}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--chalk-50)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ApplyCTA
        headline="Application open."
        sub="2026 windows are filling against the Levante UD Sports City calendar. Apply with your squad details — we'll confirm fit and availability within two working days."
        detail1={["Application open", "Limited windows per year against the partner-club calendar."]}
        detail2={["Squads + individuals", "Full squad bookings and individual player development slots available."]}
        detail3={["From £1,895 per player", "Indicative, all-in. Individual programme pricing on request."]}
        campName="the Levante UD experience"
        onNavigate={onNavigate}
      />

      <Footer />
      <WhatsAppFab />
    </>
  );
}

// ---------------------------------------------------------------------------
// Real Betis Experience
// ---------------------------------------------------------------------------
function BetisDetail({ onNavigate }) {
  return (
    <>
      <Nav active="betis" onNavigate={onNavigate} />

      <DetailHero
        img="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=2000&q=80"
        eyebrow="Pro Experience · Seville · La Liga partner"
        badge1="PRO EXPERIENCE"
        badge2="<strong>SEVILLE</strong> · ANDALUSIA · ES"
        badge3="2026 WINDOWS OPEN"
        title="Real Betis<br/>experience."
        sub="Train in a La Liga environment on the edge of Europe's most passionate football city. Professional coaching, contested fixtures, and behind-the-scenes access at one of Seville's iconic clubs."
        onNavigate={onNavigate}
      />

      {/* QUICK STATS */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            <StatCell n="07" label="Days in Seville" />
            <StatCell n="12" label="Pro sessions" />
            <StatCell n="03" label="Contested fixtures" />
            <StatCell n="01" label="La Liga environment" accent />
          </div>
        </div>
      </section>

      {/* ABOUT THE PARTNER */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — The partner</EyebrowBar>
          <h2 className="section-h">Real Betis.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="section-lead">Real Betis Balompié — one of the most celebrated clubs in Andalusia and Spain. Founded 1907. La Liga. Europa League regulars. A club built on culture, identity, and the kind of football that gets under your skin.</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 24 }}>The Ballerz Abroad Real Betis experience places your squad inside the club's training environment. Coaching delivered by Betis academy staff — same methodology, same standards the first team operates to.</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 16 }}>Seville is one of Spain's great football cities. Your squad trains in it, lives in it, competes in it. The environment is part of the programme — not just the backdrop.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(246,243,235,0.12)" }}>
              {[
                ["Location", "Seville, Andalusia, Spain"],
                ["Club", "Real Betis Balompié · La Liga"],
                ["Founded", "1907"],
                ["Facility", "Academy training complex, pitches, gym, recovery areas"],
                ["Coaching", "Real Betis academy coaches · UEFA-licensed"],
                ["Age groups", "U10 — U19 (squad-dependent)"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(246,243,235,0.12)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase" }}>{k}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--chalk-50)" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — Itinerary</EyebrowBar>
          <h2 className="section-h">Seven days in Andalusia.</h2>
          <div className="section-lead">An indicative programme — built around your squad's age, level, and goals.</div>
          <div className="itin">
            <div className="itin-day">
              <div className="itin-day__n">DAY 01</div>
              <div><div className="itin-day__title">Arrival · Club orientation · Kit handover</div><div className="itin-day__time">13:00 – 21:00</div></div>
              <div className="itin-day__desc">Fly into Seville. Ground transfer. Hotel check-in and kit handover in the team room. Evening club orientation — ground tour, meeting the Betis coaching staff who'll be delivering your sessions.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 02</div>
              <div><div className="itin-day__title">Session 01 · Betis philosophy — possession &amp; press</div><div className="itin-day__time">09:30 – 11:30 / 15:30 – 17:00</div></div>
              <div className="itin-day__desc">Morning technical block: Betis academy principles of ball retention under pressure. Afternoon: team shape session — how Betis builds from the back, triggers to press, transitions. Video debrief after.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 03</div>
              <div><div className="itin-day__title">Session 02 · Positional play masterclass</div><div className="itin-day__time">10:00 – 12:30</div></div>
              <div className="itin-day__desc">Positional play session focused on spatial awareness, third-man combinations, and exploiting width. Afternoon recovery — pool, and a behind-the-scenes tour of Benito Villamarín stadium.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 04</div>
              <div><div className="itin-day__title">Fixture 01 · Andalusian academy opposition</div><div className="itin-day__time">19:30 KO · Floodlit</div></div>
              <div className="itin-day__desc">First fixture. Pre-match meal, full tunnel walk, matchday environment. Opposition curated from Seville's academy landscape — level-matched to your squad. Post-match recovery and debrief.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 05</div>
              <div><div className="itin-day__title">Recovery · Q&amp;A with Betis academy staff</div><div className="itin-day__time">10:00 – 18:00</div></div>
              <div className="itin-day__desc">Recovery morning. Q&amp;A with a Betis academy coach — the philosophy, the path to professional football, what scouts look for at this level. Free afternoon in Seville.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 06</div>
              <div><div className="itin-day__title">Session 03 · Set pieces + Fixture 02</div><div className="itin-day__time">10:00 – 12:00 / 19:00 KO</div></div>
              <div className="itin-day__desc">Morning set-piece session with the Betis coaches. Evening second fixture against a different opponent — same competitive standard, different tactical challenge.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 07</div>
              <div><div className="itin-day__title">Fixture 03 · Debrief · Wheels-up</div><div className="itin-day__time">10:00 KO · 18:00 dep</div></div>
              <div className="itin-day__desc">Final fixture. Squad debrief with coaching staff. Transfer to Seville Airport. Wheels-up in the early evening.</div>
            </div>
          </div>
        </div>
      </section>

      {/* FIXTURES */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>03 — Opposition</EyebrowBar>
          <h2 className="section-h">Curated competition.</h2>
          <div className="section-lead">Every opponent is selected for the quality of contest — not the name. We source from Seville's rich academy infrastructure and match to your level, age group, and style.</div>
          <div className="fixture-table">
            <div className="fixture-row">
              <div className="fixture-row__date">FIX 01</div>
              <div className="fixture-row__city">Seville</div>
              <div className="fixture-row__opp">vs. Andalusian academy XI — Level A</div>
              <div className="fixture-row__status" style={{ color: "var(--volt-500)" }}>● Confirmed on booking</div>
            </div>
            <div className="fixture-row">
              <div className="fixture-row__date">FIX 02</div>
              <div className="fixture-row__city">Seville</div>
              <div className="fixture-row__opp">vs. Regional select XI — Level A/B</div>
              <div className="fixture-row__status" style={{ color: "var(--volt-500)" }}>● Confirmed on booking</div>
            </div>
            <div className="fixture-row">
              <div className="fixture-row__date">FIX 03</div>
              <div className="fixture-row__city">Seville</div>
              <div className="fixture-row__opp">vs. Partner academy XI (TBC by window)</div>
              <div className="fixture-row__status" style={{ color: "var(--clay-500)" }}>● Confirmed 8 weeks prior</div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>04 — What's included</EyebrowBar>
          <h2 className="section-h">Built into every window.</h2>
          <IncludedGrid items={[
            ["01", "Betis academy facility access", "Daily use of Real Betis training pitches, gym, and recovery areas."],
            ["02", "Real Betis coaching staff", "12 sessions delivered by UEFA-licensed Betis academy coaches."],
            ["03", "3 contested fixtures", "Opponents curated from Seville's academy network — level-matched throughout."],
            ["04", "Full kit pack", "Match shirt, training kit, recovery wear — kept by every player."],
            ["05", "Travel + accommodation", "Flights, ground transfers, 4-star team hotel in Seville city."],
            ["06", "Camp lead + content", "UK camp lead throughout. Daily content for parents, club channels, and social."],
          ]} />
        </div>
      </section>

      <ApplyCTA
        headline="Application open."
        sub="Seville windows fill quickly. Apply with your squad details and preferred dates — we'll confirm availability and build the brief within two working days."
        detail1={["Application open", "2026 windows against the Betis academy calendar."]}
        detail2={["Squad-only", "Full squad bookings. Minimum 14 players travelling."]}
        detail3={["From £1,895 per player", "Indicative, all-in. Final price built around squad size."]}
        campName="the Real Betis experience"
        onNavigate={onNavigate}
      />

      <Footer />
      <WhatsAppFab />
    </>
  );
}

// ---------------------------------------------------------------------------
// Benfica Experience
// ---------------------------------------------------------------------------
function BenficaDetail({ onNavigate }) {
  return (
    <>
      <Nav active="benfica" onNavigate={onNavigate} />

      <DetailHero
        img="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=2000&q=80"
        eyebrow="Pro Experience · Lisbon · Best Global Academy"
        badge1="PRO EXPERIENCE"
        badge2="<strong>LISBON</strong> · PORTUGAL · PT"
        badge3="2026 WINDOWS OPEN"
        title="Benfica<br/>experience."
        sub="Train at the facility voted Best Global Academy twice. SL Benfica's 19-hectare campus in Seixal — 9 pitches, UEFA-accredited coaches, and one of European football's most respected development environments."
        onNavigate={onNavigate}
        gradBg="https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fc447d2d12c6b441c9c8283cbe34dde2d"
        titleColor="rgba(0, 0, 0, 1)"
      />

      {/* QUICK STATS */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            <StatCell n="07" label="Days in Lisbon" />
            <StatCell n="9"  label="Pitches on campus" />
            <StatCell n="03" label="Contested fixtures" />
            <StatCell n="02" label="Global Academy Awards" accent />
          </div>
        </div>
      </section>

      {/* ABOUT THE PARTNER */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — The partner</EyebrowBar>
          <h2 className="section-h">SL Benfica.</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
            <div>
              <div className="section-lead">SL Benfica are one of the world's most decorated youth football institutions — Globe Soccer Best Global Academy in 2015 and 2019. The Benfica Campus at Seixal is among the best youth football facilities on the planet.</div>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 24 }}>19 hectares. 9 pitches (6 natural grass, 3 artificial). An 86-room hotel on campus. 28 dressing rooms. 2 gymnasiums. Swimming pool and spa. Everything a professional development environment needs — all in one place.</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.6, color: "var(--stand-200)", marginTop: 16 }}>Coaching staff are UEFA-licensed and FPF-accredited. Players who've come through this system include João Félix, Renato Sanches, Bernardo Silva, Rúben Dias, and Ederson.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(246,243,235,0.12)" }}>
              {[
                ["Location", "Benfica Campus, Seixal, Lisbon, Portugal"],
                ["Club", "SL Benfica · Primeira Liga"],
                ["Campus size", "19 hectares"],
                ["Pitches", "9 total — 6 natural grass + 3 artificial"],
                ["Coaching", "UEFA-licensed + FPF-accredited Benfica coaches"],
                ["Award", "Best Global Academy · Globe Soccer 2015 &amp; 2019"],
                ["Age groups", "U10 — U19 (squad-dependent)"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid rgba(246,243,235,0.12)" }}>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase" }}>{k}</div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 500, fontSize: 15, color: "var(--chalk-50)" }} dangerouslySetInnerHTML={{ __html: v }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAMPUS HIGHLIGHTS */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — The campus</EyebrowBar>
          <h2 className="section-h">Best-in-class facility.</h2>
          <div className="section-lead">The Benfica Campus is one of the most comprehensively equipped youth football facilities in Europe. Your squad uses the same environment as Benfica's academy players.</div>
          <div className="callout-grid" style={{ marginTop: 48 }}>
            <div className="cell">
              <div className="cell__n">9 pitches</div>
              <div className="cell__t">Training surfaces</div>
              <div className="cell__d">6 natural grass and 3 artificial turf pitches — your squad will always have the right surface for the session.</div>
            </div>
            <div className="cell">
              <div className="cell__n">19 ha</div>
              <div className="cell__t">Purpose-built campus</div>
              <div className="cell__d">Everything on-site — hotel, pitches, gym, physio, recovery, dressing rooms, analysis suite. No commuting. Total immersion.</div>
            </div>
            <div className="cell">
              <div className="cell__n">86 rooms</div>
              <div className="cell__t">On-campus hotel</div>
              <div className="cell__d">Your squad stays at the campus hotel — the same facility used by Benfica's academy players and visiting professional teams.</div>
            </div>
            <div className="cell">
              <div className="cell__n">2× gym</div>
              <div className="cell__t">Strength &amp; conditioning</div>
              <div className="cell__d">Two full gymnasiums for strength and conditioning work. Supplementary sessions built into the programme for squads that want them.</div>
            </div>
            <div className="cell">
              <div className="cell__n">Pool + spa</div>
              <div className="cell__t">Recovery suite</div>
              <div className="cell__d">Swimming pool and spa for structured recovery sessions between training days and fixtures. Used daily post-session.</div>
            </div>
            <div className="cell">
              <div className="cell__n">28</div>
              <div className="cell__t">Dressing rooms</div>
              <div className="cell__d">Full matchday dressing-room experience — the same rooms used by Benfica academy squads on matchday.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>03 — Itinerary</EyebrowBar>
          <h2 className="section-h">Seven days at the best global academy.</h2>
          <div className="section-lead">An indicative schedule — finalised around your squad's age group, level, and training objectives.</div>
          <div className="itin">
            <div className="itin-day">
              <div className="itin-day__n">DAY 01</div>
              <div><div className="itin-day__title">Arrival · Campus check-in · Kit handover</div><div className="itin-day__time">14:00 – 21:00</div></div>
              <div className="itin-day__desc">Fly into Lisbon Humberto Delgado Airport. Ground transfer to Benfica Campus, Seixal. Check into the on-site hotel. Kit handover in the team room. Campus orientation with your camp lead.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 02</div>
              <div><div className="itin-day__title">Session 01 · Technical fundamentals + physical tests</div><div className="itin-day__time">09:00 – 12:00 / 15:00 – 16:30</div></div>
              <div className="itin-day__desc">Opening session: Benfica methodology — technical individual skills, agility and movement patterns. Afternoon: physical benchmark tests. Evening video debrief — analysis session in the Benfica analysis suite.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 03</div>
              <div><div className="itin-day__title">Session 02 · Positional play &amp; structure</div><div className="itin-day__time">09:30 – 12:00 / Pool recovery 15:00</div></div>
              <div className="itin-day__desc">Positional play session based on Benfica's academy framework — block structure, high press, build-up patterns. Recovery pool session in the afternoon.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 04</div>
              <div><div className="itin-day__title">Fixture 01 · Lisbon academy opposition</div><div className="itin-day__time">19:00 KO · Floodlit</div></div>
              <div className="itin-day__desc">First fixture on the campus pitches. Pre-match meal, full tunnel walk, matchday environment. Opposition sourced from the Lisbon academy network and matched to your level. Post-match physiotherapy and debrief.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 05</div>
              <div><div className="itin-day__title">Workshop · Gym session · Lisbon</div><div className="itin-day__time">09:00 – 17:00</div></div>
              <div className="itin-day__desc">Morning workshop with Benfica coaches — football philosophy, the path from academy to professional, analysis of your squad's performance from footage taken during sessions. Afternoon S&amp;C session. Optional Lisbon city visit for the evening.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 06</div>
              <div><div className="itin-day__title">Session 03 · Set pieces + Fixture 02</div><div className="itin-day__time">10:00 – 12:00 / 19:00 KO</div></div>
              <div className="itin-day__desc">Morning set-piece masterclass with Benfica staff. Evening second fixture — different opponent, same competitive standard.</div>
            </div>
            <div className="itin-day">
              <div className="itin-day__n">DAY 07</div>
              <div><div className="itin-day__title">Fixture 03 · Performance reports · Wheels-up</div><div className="itin-day__time">10:00 KO · 18:00 dep</div></div>
              <div className="itin-day__desc">Final fixture on campus. Individual written performance reports distributed to each player. Squad debrief. Transfer to Lisbon Airport. Wheels-up in the evening.</div>
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>04 — What's included</EyebrowBar>
          <h2 className="section-h">Built into every window.</h2>
          <IncludedGrid items={[
            ["01", "Benfica Campus access", "Full use of the 19-hectare campus — pitches, gym, pool, recovery suite, dressing rooms, analysis suite."],
            ["02", "Benfica coaching staff", "12 sessions delivered by UEFA-licensed, FPF-accredited Benfica academy coaches."],
            ["03", "3 contested fixtures", "Lisbon academy opposition — level-matched. Played on the campus pitches."],
            ["04", "Individual player reports", "Written performance report for each player at the end of the programme."],
            ["05", "On-campus accommodation", "Stay at the Benfica Campus hotel. Same facility used by the academy. Flights and transfers included."],
            ["06", "Camp lead + content", "Dedicated UK camp lead. Daily content drop — parents, club social, Instagram, TikTok."],
          ]} />
        </div>
      </section>

      <ApplyCTA
        headline="Selected windows only."
        sub="Benfica Campus windows are limited by the academy calendar. Apply early — we confirm availability and build the brief within two working days of receiving your application."
        detail1={["Limited windows", "Availability against the Benfica Campus academy calendar."]}
        detail2={["On-campus stay", "Your squad stays at the Benfica Campus hotel throughout."]}
        detail3={["From £2,095 per player", "Indicative, all-in including on-campus accommodation. Final price built around squad size."]}
        campName="the Benfica experience"
        onNavigate={onNavigate}
      />

      <Footer />
      <WhatsAppFab />
    </>
  );
}

window.LevanteDetail = LevanteDetail;
window.BetisDetail   = BetisDetail;
window.BenficaDetail = BenficaDetail;
