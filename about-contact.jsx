// About + Contact — finishing the site.

function About({ onNavigate }) {
  return (
    <>
      <Nav active="about" onNavigate={onNavigate} />

      {/* HERO */}
      <section className="hero" style={{ minHeight: "70vh" }}>
        <div className="hero__img" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1551958219-acbc608c6377?w=2000&q=80)` }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">About · Ballerz Abroad · Est. 2025</div>
          </div>
          <h1 className="display-xl">More than a tour<br/>operator.</h1>
          <div className="hero__sub">A UK-based football experience company built by football people, for football people. We design windows abroad that work because we've been on the other side of the bus.</div>
        </div>
      </section>

      {/* MISSION */}
      <section className="band">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64 }}>
          <div>
            <EyebrowBar>01 — Mission</EyebrowBar>
            <h2 className="section-h">Football first.</h2>
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.6, color: "var(--stand-200)" }}>
            <p style={{ marginBottom: 20 }}>We build international football experiences for grassroots clubs, academies, schools, development teams and US college soccer programmes. Every tour is custom — there is no brochure.</p>
            <p style={{ marginBottom: 20 }}>Our network of partner clubs, federations and tournament organisers across the UK, Spain, Portugal, the Netherlands and the Dominican Republic is vetted to one standard: ours. We sell football, not flights.</p>
            <p>Ballerz Abroad is a UK-registered company. UK contracts, UK staff on-tour, UK-managed travel ops — wherever in the world your squad is playing.</p>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="band">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ aspectRatio: "3/4", background: "var(--ink-800)", border: "1px solid rgba(246,243,235,0.08)", borderRadius: 8, overflow: "hidden", backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F664bed4b7bef47eeaaadf217a15217e5?format=webp&width=800&height=1200)`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          </div>
          <div>
            <EyebrowBar>About the founder</EyebrowBar>
            <h2 className="section-h">Why Choose Ballerz Abroad for Your Youth Football Tours?</h2>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--stand-200)", marginBottom: 32 }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12 }}>About Ballerz Abroad</h3>
              <p style={{ marginBottom: 16 }}>Ballerz Abroad was founded by Harrison Green, a grassroots football coach with over 20 years of experience in the game — first as a player, and for the past several years as a coach following his retirement from playing.</p>
              <p style={{ marginBottom: 24 }}>Having spent two decades in football, Harrison recognised a gap in the market. UK clubs with ambition and talented squads had no straightforward, trustworthy route to professional European football experiences. The tours that existed were either generic travel packages with football bolted on, or prohibitively expensive academy programmes out of reach for most grassroots clubs. Ballerz Abroad was built to fix that.</p>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 24 }}>Our Philosophy</h3>
              <p style={{ marginBottom: 16 }}>We are a football-first company. Every programme we design starts with the football — the training sessions, the opposition, the tournament format, the facilities — and builds outward from there. Travel, accommodation and logistics follow the football plan, not the other way around.</p>
              <p style={{ marginBottom: 24 }}>This means the teams that travel with us come home having genuinely experienced how professional European football operates. Not as tourists who watched a game, but as players who trained at professional facilities, competed against international opposition, and understood a different football culture from the inside.</p>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 24 }}>Who We Work With</h3>
              <p style={{ marginBottom: 24 }}>Ballerz Abroad works with grassroots clubs, school football programmes, community academies, female teams, and adult pre-season groups across the UK. Our programmes are built for teams at every level — from development-focused youth sides taking their first trip abroad, to ambitious academies looking for elite competition at tournaments like the MIC or Porto International Cup.</p>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 24 }}>Harrison Green — Founder</h3>
              <p style={{ marginBottom: 16 }}>Harrison holds FA coaching qualifications and has been actively involved in football for over 20 years. After a playing career spanning two decades, he transitioned into coaching at grassroots level, working with players from youth level through to adult football.</p>
              <p style={{ marginBottom: 24 }}>His experience on both sides of the game shapes every Ballerz Abroad programme. He understands what coaches need from a tour, what players need from the experience, and what parents need from an operator they are trusting with their children. That combination of playing experience, coaching knowledge, and operational expertise is what makes Ballerz Abroad different from generic sports travel companies.</p>

              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 24 }}>Our Partners</h3>
              <p>Every tour is delivered in partnership with established European football organisations. Our football partners include the organisers of the MIC, Porto International Cup, Copa Daurada, Mare Nostrum Cup, Cruyff Tournament, Levante UD International Cup and MIC Punta Cana.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — Principles</EyebrowBar>
          <h2 className="section-h">How we work.</h2>
          <div className="callout-grid">
            <div className="cell"><div className="cell__n">01</div><div className="cell__t">Football first.</div><div className="cell__d">Every decision — destination, timing, hotel, opposition — is taken from the football outwards. Logistics serves the game, never the other way round.</div></div>
            <div className="cell"><div className="cell__n">02</div><div className="cell__t">Tailored, not packaged.</div><div className="cell__d">We don't operate fixed itineraries. Every window is designed around the squad in front of us — age, level, ambition, budget.</div></div>
            <div className="cell"><div className="cell__n">03</div><div className="cell__t">Vetted partners.</div><div className="cell__d">Levante UD, Real Betis, SL Benfica, MIC, Mare Nostrum. We open doors at clubs and tournaments that share our standards on safety, quality and competition.</div></div>
            <div className="cell"><div className="cell__n">04</div><div className="cell__t">UK end-to-end.</div><div className="cell__d">UK contract, UK staff, UK travel ops, UK-based youth-football insurance. One number, one company, one accountability line.</div></div>
            <div className="cell"><div className="cell__n">05</div><div className="cell__t">Tour by application.</div><div className="cell__d">We respond to every application within two working days. If we're not the right fit, we say so — and point you somewhere that is.</div></div>
            <div className="cell"><div className="cell__n">06</div><div className="cell__t">On-tour delivery.</div><div className="cell__d">A Ballerz Abroad lead is embedded with your squad from arrival to wheels-up. You coach the football. We handle the rest.</div></div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="band">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "center" }}>
          <div style={{ aspectRatio: "3/4", background: "var(--ink-800)", border: "1px solid rgba(246,243,235,0.08)", borderRadius: 8, overflow: "hidden", backgroundImage: `url(https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fc50f71cb4d8340f68b4f304608879763?format=webp&width=800&height=1200)`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
          <div>
            <EyebrowBar>03 — Team</EyebrowBar>
            <h2 className="section-h">Who you'll meet.</h2>
            <div style={{ marginTop: 24 }}>
              <div style={{ background: "var(--ink-800)", border: "1px solid rgba(246,243,235,0.08)", padding: 32 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.18em", color: "var(--volt-500)", textTransform: "uppercase", marginBottom: 8 }}>Founder & Tour Director</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: 28, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12 }}>Harrison Green</h3>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--stand-200)", lineHeight: 1.6 }}>
                  <p style={{ marginBottom: 12 }}>Harrison is Ballerz Abroad. He designs every window, talks to every applicant, travels with every squad, and coordinates every partnership.</p>
                  <p>After 20 years in football — first as a player, then as a grassroots coach — he built Ballerz Abroad to fill a gap. No call centres, no templates, no layers. You speak directly to the person who'll design your tour.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>04 — Get started</div></div>
            <h2 className="section-h">Tell us about your squad.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Application or call — both lead to a real conversation with the person who'll design your tour.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Start an application →</button>
              <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("contact")} style={{ color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>Contact us</button>
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
window.About = About;


function Contact({ onNavigate }) {
  return (
    <>
      <Nav active="contact" onNavigate={onNavigate} />

      <section className="band" style={{ paddingTop: 140, paddingBottom: 0 }}>
        <div className="wrap">
          <EyebrowBar>Contact · UK office</EyebrowBar>
          <h2 className="section-h">Talk to a human.</h2>
          <div className="section-lead">Every enquiry is read by the person who'll design your tour. No bots, no call centre, no chat handler.</div>
        </div>
      </section>

      <section className="band">
        <div className="wrap" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64 }}>
          <div>
            <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase", marginBottom: 8 }}>Email</div>
                <a href="mailto:info@ballerzabroad.com" style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--chalk-50)", textTransform: "uppercase", letterSpacing: "-0.01em", border: "none" }}>info@ballerzabroad.com</a>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase", marginBottom: 8 }}>Phone · WhatsApp</div>
                <a href="tel:07867205763" style={{ fontFamily: "var(--font-display)", fontSize: 32, color: "var(--chalk-50)", textTransform: "uppercase", letterSpacing: "-0.01em", border: "none" }}>07867 205763</a>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase", marginBottom: 8 }}>UK office</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--chalk-50)", lineHeight: 1.55 }}>Ballerz Abroad Ltd<br/>Company Reg. 16941046<br/>Registered in England & Wales</div>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase", marginBottom: 8 }}>Social</div>
                <div style={{ display: "flex", gap: 16, fontFamily: "var(--font-body)", fontSize: 16 }}>
                  <a href="#" style={{ color: "var(--chalk-50)", border: "none" }}>@ballerzabroad — TikTok</a>
                  <a href="#" style={{ color: "var(--chalk-50)", border: "none" }}>Facebook</a>
                </div>
              </div>
            </div>
          </div>
          <div style={{ background: "var(--ink-800)", border: "1px solid rgba(246,243,235,0.08)", padding: 32 }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--volt-500)", textTransform: "uppercase", marginBottom: 8 }}>Quick message</div>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, marginBottom: 24 }}>Drop us a line.</div>
            <form action="https://formsubmit.co/info@ballerzabroad.com" method="POST" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div className="app-form-row" style={{ marginBottom: 0 }}>
                <label>Your name</label>
                <input name="name" placeholder="Coach Roberts" required />
              </div>
              <div className="app-form-row" style={{ marginBottom: 0 }}>
                <label>Club / organisation</label>
                <input name="organisation" placeholder="Hackney Marshes FC" required />
              </div>
              <div className="app-form-row" style={{ marginBottom: 0 }}>
                <label>Email</label>
                <input name="email" type="email" placeholder="head.coach@yourclub.com" required />
              </div>
              <div className="app-form-row" style={{ marginBottom: 0 }}>
                <label>What do you need</label>
                <textarea name="message" placeholder="Tell us in your own words. We read every enquiry." required />
              </div>
              <input type="hidden" name="_captcha" value="false" />
              <button type="submit" className="btn btn--primary btn--lg" style={{ alignSelf: "flex-start" }}>Send message →</button>
            </form>
          </div>
        </div>
      </section>


      <Footer />
      <WhatsAppFab />
    </>
  );
}
window.Contact = Contact;
