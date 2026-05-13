// FAQ page — extracted from Contact page

function FAQ({ onNavigate }) {
  return (
    <>
      <Nav active="faq" onNavigate={onNavigate} />

      <section className="band" style={{ paddingTop: 140, paddingBottom: 0 }}>
        <div className="wrap">
          <EyebrowBar>FAQ</EyebrowBar>
          <h2 className="section-h">Questions, briefly answered.</h2>
          <div className="section-lead">Got a question about tours, dates, costs, or how we work? Here are the answers we give most often.</div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid rgba(246,243,235,0.12)", marginTop: 32 }}>
            {[
              ["How far in advance should we apply?", "Most squads apply 4–8 months out. We open shorter-notice windows when a partner-club calendar permits — call us."],
              ["What's the minimum squad size?", "We've run windows with 12 players and with 36. Below that, an Individual Player Development programme is usually the better fit."],
              ["Are flights included?", "No — flights are not bundled. We can recommend airlines, routings and group-booking partners, but every squad books its own flights."],
              ["What ages do you work with?", "U7 through to senior teams and US college. Pro-Experience tours are usually U12 upwards."],
              ["Is insurance included?", "No — travel and football insurance are not bundled. Every squad and player must arrange their own cover before the window. We share our recommended providers on request."],
              ["Can parents travel?", "Yes. Individual Player Development windows are designed around parent travel. On club tours, a parents' floor at the team hotel is standard."],
              ["Who is responsible for booking the travel?", "Ballerz Abroad manages all ground logistics directly — including accommodation, transfers and tournament entry. Flights are booked independently by your club. We provide recommended partners and full guidance to make that process straightforward. You have one point of contact for everything else, from first enquiry to the day you return home."],
              ["Who do we pay?", "All payments are made directly to Ballerz Abroad. We handle everything in-house, so there are no third parties involved and no confusion about who to contact."],
              ["Can parents pay individually?", "Yes. Individual parent payment options are available on most tours, making it easier for clubs to spread costs across the squad without the club carrying the full amount upfront. We will confirm the payment structure when we put your programme together."],
              ["Will a Ballerz Abroad representative be on the tour?", "On selected tours a senior Ballerz Abroad representative will be present on the ground to support coordination and ensure the programme runs smoothly. Your club's coaches and staff remain fully responsible for coaching, player supervision and welfare throughout."],
              ["What does Ballerz Abroad handle?", "We manage the full tour end to end — tournament entry, accommodation, ground transfers, fixture scheduling, liaison with tournament organisers and European club partners, and on-site coordination. Flights are arranged independently by your club; we provide trusted recommendations to help with that. You focus on the football. We handle everything else."],
              ["What age groups do you cater for?", "We work with youth teams from under 7s through to adult pre-season groups, as well as female squads and school football programmes. Every programme is tailored to the age group, playing level and objectives of the travelling team."],
              ["How far in advance should we book?", "We recommend getting in touch at least three to four months before your intended travel date, particularly for popular tournaments which have limited entry slots. Some tournaments fill up six months in advance — the earlier you contact us the better."],
              ["What destinations do you cover?", "We currently offer tours and tournament packages in Spain, Portugal, the Netherlands, England and the Dominican Republic. New destinations are added regularly — get in touch if you have somewhere specific in mind."],
            ].map(([q, a], i) => (
              <details key={i} style={{ borderBottom: "1px solid rgba(246,243,235,0.12)", padding: "22px 0", cursor: "pointer" }}>
                <summary style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 19, color: "var(--chalk-50)", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  {q}
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--volt-500)" }}>+</span>
                </summary>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--stand-200)", lineHeight: 1.6, marginTop: 12, maxWidth: 720 }}>{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>Still have questions?</div></div>
            <h2 className="section-h">Get in touch.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>We answer every enquiry within two working days. Call, email, or submit the contact form.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("contact")}>Contact us →</button>
              <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("application")} style={{ color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>Start an application</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
window.FAQ = FAQ;
