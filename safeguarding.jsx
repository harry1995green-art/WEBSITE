// Safeguarding page — commitment to youth welfare and safety

function Safeguarding({ onNavigate }) {
  return (
    <>
      <Nav active="safeguarding" onNavigate={onNavigate} />

      <section className="band" style={{ paddingTop: 140, paddingBottom: 0 }}>
        <div className="wrap">
          <EyebrowBar>Safeguarding</EyebrowBar>
          <h2 className="section-h">Your players' safety is non-negotiable.</h2>
          <div className="section-lead">How Ballerz Abroad protects young people on tour.</div>
        </div>
      </section>

      <section className="band">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--stand-200)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 0 }}>Our Commitment</h3>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad takes the safety and welfare of all young people on tour extremely seriously. We operate within UK safeguarding legislation and best practice standards. Protecting children and vulnerable adults is a responsibility we never take lightly.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>What We Expect From You</h3>
            <p style={{ marginBottom: 24 }}>It is the responsibility of the travelling organisation (school, club, or academy) to ensure that:</p>
            <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12 }}>All staff accompanying the tour have been subject to appropriate DBS (Disclosure and Barring Service) checks</li>
              <li style={{ marginBottom: 12 }}>Appropriate safeguarding policies are in place and understood by all staff</li>
              <li style={{ marginBottom: 12 }}>Parental consent forms are completed and include emergency contact details, medical information, and behavioural expectations</li>
              <li style={{ marginBottom: 12 }}>A designated safeguarding lead is identified and travels with the group</li>
              <li style={{ marginBottom: 12 }}>Duty of care obligations are maintained at all times during the tour</li>
              <li style={{ marginBottom: 12 }}>All relevant travel and insurance documentation is in place</li>
            </ul>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad reserves the right to request evidence of these safeguarding measures before confirming a booking.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>What We Provide</h3>
            <p style={{ marginBottom: 24 }}>On selected tours, Ballerz Abroad provides:</p>
            <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12 }}>A dedicated on-tour representative to support coordination and safeguarding oversight</li>
              <li style={{ marginBottom: 12 }}>Vetted accommodation with appropriate safety and security standards</li>
              <li style={{ marginBottom: 12 }}>Established partnerships with professional football clubs and tournament organisers who share our safeguarding commitment</li>
              <li style={{ marginBottom: 12 }}>Clear communication channels and support during the tour</li>
              <li style={{ marginBottom: 12 }}>Incident reporting procedures and emergency response protocols</li>
            </ul>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Partnership Standards</h3>
            <p style={{ marginBottom: 24 }}>We only work with European football clubs, academies, and tournament organisers that demonstrate a commitment to safeguarding. Our partners include Levante UD, Real Betis, SL Benfica, Feyenoord, and major tournament organisers including the MIC and Porto International Cup — all of whom operate to international safeguarding standards.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Codes of Conduct</h3>
            <p style={{ marginBottom: 24 }}>All participants — players, staff, and accompanying adults — are expected to behave respectfully and responsibly. Ballerz Abroad reserves the right to remove any individual from a tour if their behaviour is deemed to be putting others at risk or undermining the welfare of young people.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Reporting Concerns</h3>
            <p style={{ marginBottom: 24 }}>If you have any safeguarding concerns before, during, or after a tour, please contact us immediately:</p>
            <div style={{ background: "var(--ink-800)", border: "1px solid rgba(246,243,235,0.08)", padding: 24, marginBottom: 24, borderRadius: 4 }}>
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase", marginBottom: 4 }}>Email</div>
                <a href="mailto:safeguarding@ballerzabroad.com" style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", border: "none", textDecoration: "none" }}>safeguarding@ballerzabroad.com</a>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", color: "var(--stand-300)", textTransform: "uppercase", marginBottom: 4 }}>Phone · WhatsApp · Emergency</div>
                <a href="tel:07867205763" style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", border: "none", textDecoration: "none" }}>07867 205763</a>
              </div>
            </div>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Further Resources</h3>
            <p style={{ marginBottom: 24 }}>If you need general guidance on youth safeguarding in football, we recommend:</p>
            <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12 }}><strong>FA Safeguarding</strong> — <a href="https://www.theFA.com/safeguarding" target="_blank" rel="noopener noreferrer" style={{ color: "var(--volt-500)" }}>www.theFA.com/safeguarding</a></li>
              <li style={{ marginBottom: 12 }}><strong>Child Safeguarding Practice Review Panel (CSPR)</strong> — independent reviews of child safeguarding</li>
              <li style={{ marginBottom: 12 }}><strong>NSPCC</strong> — <a href="https://www.nspcc.org.uk" target="_blank" rel="noopener noreferrer" style={{ color: "var(--volt-500)" }}>www.nspcc.org.uk</a></li>
            </ul>

            <p style={{ marginBottom: 48, fontStyle: "italic", color: "var(--stand-300)" }}>Last updated: May 2026</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
window.Safeguarding = Safeguarding;
