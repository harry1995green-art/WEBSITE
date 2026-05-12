// Terms & Conditions and Privacy Policy pages

function TermsAndConditions({ onNavigate }) {
  return (
    <>
      <Nav active="legal" onNavigate={onNavigate} />

      <section className="band" style={{ paddingTop: 140, paddingBottom: 0 }}>
        <div className="wrap">
          <EyebrowBar>Legal · Terms & Conditions</EyebrowBar>
          <h2 className="section-h">Terms and Conditions</h2>
        </div>
      </section>

      <section className="band">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--stand-200)" }}>
            <p style={{ marginBottom: 24, fontWeight: 700 }}>These terms and conditions govern all bookings made with Ballerz Abroad (Company Registration Number: 16941046). By making a booking with us you agree to be bound by these terms. Please read them carefully before confirming your tour.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>1. About Us</h3>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad is a UK-registered football tour operator specialising in European football development tours and international tournament packages for youth, female and adult teams. All bookings are made directly with Ballerz Abroad. We manage flights, accommodation, tournament entry, ground transfers and all associated logistics in-house.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>2. Booking and Confirmation</h3>
            <p style={{ marginBottom: 24 }}>A booking is confirmed once Ballerz Abroad has received your completed booking request and your deposit payment. We will issue a written confirmation of your booking by email. No booking is guaranteed until written confirmation has been issued.</p>
            <p style={{ marginBottom: 24 }}>We accept bookings for groups of between 5 and 200 participants. Any booking request outside of these limits will be assessed individually and confirmed at our discretion.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>3. Deposit and Payments</h3>
            <p style={{ marginBottom: 24 }}>A non-refundable deposit of 20% of the total tour cost is required at the time of booking to secure your place. The remaining balance of 80% is due no later than 10 weeks before your departure date.</p>
            <p style={{ marginBottom: 24 }}>If the remaining balance is not received by the due date, Ballerz Abroad reserves the right to treat the booking as cancelled. In such cases the cancellation policy set out in section 5 will apply.</p>
            <p style={{ marginBottom: 24 }}>Individual parent payment plans are available on most tours. The structure of any payment plan will be confirmed in writing at the time of booking.</p>
            <p style={{ marginBottom: 24 }}>All prices are quoted in pounds sterling. Ballerz Abroad reserves the right to adjust pricing prior to full payment being received in the event of significant changes to flight costs, accommodation costs, tournament fees, or currency exchange rates. Any such changes will be communicated to you in writing as soon as possible.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>4. What Is Included</h3>
            <p style={{ marginBottom: 24 }}>Your booking confirmation will clearly set out everything included in your tour package. This typically includes flights, accommodation, ground transfers, tournament entry or fixture arrangements, and on-site coordination. Anything not listed in your booking confirmation is not included.</p>
            <p style={{ marginBottom: 24 }}>Personal expenses, travel insurance, meals unless stated, and any optional excursions are not included unless explicitly confirmed in writing.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>5. Cancellations and Refunds — By You</h3>
            <p style={{ marginBottom: 24 }}>If you need to cancel your booking you must notify us in writing by email to info@ballerzabroad.com. The date of cancellation will be the date we receive your written notification.</p>
            <p style={{ marginBottom: 24, fontWeight: 700 }}>The following cancellation policy applies:</p>
            <p style={{ marginBottom: 16 }}><strong>More than 12 weeks before departure</strong> — full refund of all monies paid, excluding the 20% non-refundable deposit.</p>
            <p style={{ marginBottom: 16 }}><strong>Between 10 and 12 weeks before departure</strong> — 50% refund of the total tour cost, excluding the deposit.</p>
            <p style={{ marginBottom: 16 }}><strong>Between 6 and 10 weeks before departure</strong> — 25% refund of the total tour cost, excluding the deposit.</p>
            <p style={{ marginBottom: 24 }}><strong>Less than 6 weeks before departure</strong> — no refund. All monies paid are forfeited.</p>
            <p style={{ marginBottom: 24 }}>The deposit is non-refundable in all circumstances.</p>
            <p style={{ marginBottom: 24 }}>We strongly recommend that all participants take out comprehensive travel insurance that covers cancellation at the time of booking.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>6. Cancellations — By Ballerz Abroad</h3>
            <p style={{ marginBottom: 24 }}>In the unlikely event that Ballerz Abroad is required to cancel your tour — for example due to a tournament being cancelled, a natural disaster, government travel restrictions, or circumstances beyond our control — we will notify you as soon as possible in writing.</p>
            <p style={{ marginBottom: 24, fontWeight: 700 }}>In such cases we will offer you one of the following:</p>
            <p style={{ marginBottom: 16 }}>A full refund of all monies paid to Ballerz Abroad, including the deposit.</p>
            <p style={{ marginBottom: 24 }}>An alternative tour of equivalent value, subject to availability.</p>
            <p style={{ marginBottom: 24 }}>The choice of outcome will be yours. Ballerz Abroad will not be liable for any additional costs incurred by you as a result of a cancellation by us, including but not limited to independent flight or accommodation bookings made outside of your Ballerz Abroad package.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>7. Changes to Your Booking</h3>
            <p style={{ marginBottom: 24 }}>If you wish to make changes to your booking after confirmation — such as changes to squad size, travel dates, or accommodation — please contact us as soon as possible. We will do our best to accommodate changes but cannot guarantee them. Changes made within 10 weeks of departure may incur additional charges.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>8. Travel Insurance</h3>
            <p style={{ marginBottom: 24 }}>Travel insurance is not included in your tour package. All participants are strongly advised to take out comprehensive travel insurance covering cancellation, medical expenses, personal injury, loss of luggage and travel delays before departure. Ballerz Abroad accepts no liability for losses that would have been covered by appropriate travel insurance.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>9. Liability</h3>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad is responsible for arranging the services described in your booking confirmation. We will ensure that all suppliers and partners used meet appropriate standards for safety and quality.</p>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad accepts liability for the proper performance of the travel services included in your package. We will not be liable for any failure to perform, or improper performance of, those services where such failure is attributable to you, a third party unconnected with the services provided, or circumstances which we could not have foreseen or avoided.</p>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad is not responsible for coaching, player supervision or player welfare during the tour. These responsibilities remain with the travelling club, school or organisation and their appointed coaches and staff at all times.</p>
            <p style={{ marginBottom: 24 }}>Our total liability to you in any circumstances shall not exceed the total cost of your tour as paid to Ballerz Abroad.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>10. Safeguarding and Welfare</h3>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad takes the safety and welfare of all participants seriously, particularly in relation to youth tours. It is the responsibility of the travelling club, school or organisation to ensure that all appropriate safeguarding policies, DBS checks, parental consents and duty of care obligations are in place before departure. Ballerz Abroad may request evidence of these at any time.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>11. Behaviour and Conduct</h3>
            <p style={{ marginBottom: 24 }}>All participants are expected to behave in a respectful and responsible manner throughout the tour. Ballerz Abroad reserves the right to remove any participant from a tour at any time where their behaviour is deemed to be putting others at risk or bringing the tour into disrepute. In such cases no refund will be given.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>12. Complaints</h3>
            <p style={{ marginBottom: 24 }}>If you have a complaint during your tour please raise it with your Ballerz Abroad representative or contact us directly at info@ballerzabroad.com as soon as possible so we have the opportunity to resolve it. If you are not satisfied with the outcome you may submit a formal complaint in writing within 28 days of your return date.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>13. Data Protection</h3>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad collects and processes personal data in accordance with UK GDPR. We will only use your personal data to manage your booking and communicate with you about your tour. We will not share your data with third parties except where necessary to deliver your tour. Please refer to our Privacy Policy for full details.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>14. Governing Law</h3>
            <p style={{ marginBottom: 24 }}>These terms and conditions are governed by the laws of England and Wales. Any disputes arising from a booking with Ballerz Abroad will be subject to the exclusive jurisdiction of the courts of England and Wales.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>15. Changes to These Terms</h3>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad reserves the right to update these terms and conditions at any time. The version in force at the time of your booking confirmation will apply to your tour.</p>

            <p style={{ marginBottom: 48, fontStyle: "italic", color: "var(--stand-300)" }}>Last updated: May 2026</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
window.TermsAndConditions = TermsAndConditions;


function PrivacyPolicy({ onNavigate }) {
  return (
    <>
      <Nav active="legal" onNavigate={onNavigate} />

      <section className="band" style={{ paddingTop: 140, paddingBottom: 0 }}>
        <div className="wrap">
          <EyebrowBar>Legal · Privacy Policy</EyebrowBar>
          <h2 className="section-h">Privacy Policy</h2>
        </div>
      </section>

      <section className="band">
        <div className="wrap" style={{ maxWidth: 900 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--stand-200)" }}>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad is a football travel and sports tour provider specialising in international football experiences for grassroots clubs, academies, schools, teams, players and families.</p>

            <p style={{ marginBottom: 24 }}>As an essential part of our business, we collect and manage client and non-client data. In doing so, we observe UK data protection legislation, including the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, and we are committed to protecting and respecting the privacy and rights of all individuals whose data we process.</p>

            <p style={{ marginBottom: 24 }}>For the purposes of data protection law, Ballerz Abroad acts as a "Data Controller" in respect of the personal data we collect and process.</p>

            <p style={{ marginBottom: 24 }}>This Privacy Notice explains how we collect, use, store and share personal data when you visit our website, make an enquiry, book a trip, or otherwise interact with us. It also outlines your rights in relation to your personal data.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>What Information Do We Collect?</h3>
            <p style={{ marginBottom: 16 }}>We collect personal data to enable us to:</p>
            <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12 }}>Administer our relationship with you and respond to enquiries</li>
              <li style={{ marginBottom: 12 }}>Provide and manage football tours, events and related services</li>
              <li style={{ marginBottom: 12 }}>Communicate with you regarding your booking, enquiries or requests</li>
              <li style={{ marginBottom: 12 }}>Send newsletters, updates and marketing communications (where permitted)</li>
              <li style={{ marginBottom: 12 }}>Arrange travel services, accommodation, fixtures and activities</li>
              <li style={{ marginBottom: 12 }}>Process payments and manage billing</li>
              <li style={{ marginBottom: 12 }}>Handle complaints or issues</li>
              <li style={{ marginBottom: 12 }}>Comply with legal, regulatory and insurance obligations</li>
            </ul>

            <p style={{ marginBottom: 16, fontWeight: 700 }}>The personal data we collect may include:</p>
            <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12 }}>Name</li>
              <li style={{ marginBottom: 12 }}>Address (home or business)</li>
              <li style={{ marginBottom: 12 }}>Email address</li>
              <li style={{ marginBottom: 12 }}>Telephone number</li>
              <li style={{ marginBottom: 12 }}>Date of birth</li>
              <li style={{ marginBottom: 12 }}>Emergency contact details</li>
              <li style={{ marginBottom: 12 }}>Passport or travel information (where required for bookings)</li>
              <li style={{ marginBottom: 12 }}>Payment or financial information</li>
            </ul>

            <p style={{ marginBottom: 24 }}>We collect this information when you provide it to us, including via our website forms, email, telephone, social media, or during the booking process.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Special Category (Sensitive) Personal Data</h3>
            <p style={{ marginBottom: 24 }}>In certain circumstances, we may need to collect special category personal data, such as:</p>
            <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12 }}>Medical or health information (e.g. allergies, injuries, medical conditions)</li>
              <li style={{ marginBottom: 12 }}>Dietary or accessibility requirements</li>
              <li style={{ marginBottom: 12 }}>Racial or ethnic origin (where relevant for visa, safeguarding or regulatory reasons)</li>
            </ul>
            <p style={{ marginBottom: 24 }}>We will only collect and process this information where it is strictly necessary and will seek your explicit consent before doing so.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Your Rights</h3>
            <p style={{ marginBottom: 24 }}>Under UK data protection law, you have the following rights:</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Right to Be Informed</h4>
            <p style={{ marginBottom: 24 }}>This Privacy Notice explains how we use your personal data.</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Right of Access</h4>
            <p style={{ marginBottom: 24 }}>You have the right to request a copy of the personal data we hold about you (a "Subject Access Request"). Requests are free of charge and will normally be fulfilled within 30 days. To make a request, email: info@ballerzabroad.com</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Right to Rectification</h4>
            <p style={{ marginBottom: 24 }}>You have the right to ask us to correct any inaccurate or incomplete data we hold about you.</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Right to Erasure ("Right to Be Forgotten")</h4>
            <p style={{ marginBottom: 24 }}>You may request that we delete your personal data where there is no lawful reason for us to retain it.</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Right to Object</h4>
            <p style={{ marginBottom: 24 }}>You may object to processing based on consent (you may withdraw consent at any time) or processing based on legitimate interests.</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Right to Restrict Processing</h4>
            <p style={{ marginBottom: 24 }}>You may request that we restrict processing where you contest the accuracy of the data, processing is unlawful but you do not want the data erased, you need the data for legal claims, or you have objected to processing and a decision is pending.</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Right to Data Portability</h4>
            <p style={{ marginBottom: 24 }}>You may request a copy of your personal data in a commonly used electronic format so it can be transferred to another organisation.</p>

            <h4 style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 12, marginTop: 20 }}>Rights Related to Automated Decision-Making</h4>
            <p style={{ marginBottom: 24 }}>You have the right to object to decisions made solely by automated means, including profiling.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Data Retention</h3>
            <p style={{ marginBottom: 24 }}>Ballerz Abroad typically retains personal data for up to 7 years. This is to meet legal, regulatory, accounting and insurance requirements. Data is securely deleted once it is no longer required.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Overseas Transfers</h3>
            <p style={{ marginBottom: 24 }}>Some personal data may be transferred outside the UK or European Economic Area (EEA) where required to deliver our services (for example, to overseas accommodation providers or tournament organisers). Where this occurs, we ensure appropriate safeguards are in place.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Data Security</h3>
            <p style={{ marginBottom: 24 }}>We take data security seriously and maintain appropriate technical and organisational measures to protect personal data, including:</p>
            <ul style={{ marginBottom: 24, paddingLeft: 24 }}>
              <li style={{ marginBottom: 12 }}>Secure IT systems and access controls</li>
              <li style={{ marginBottom: 12 }}>Data minimisation and regular reviews</li>
              <li style={{ marginBottom: 12 }}>Staff awareness and training</li>
              <li style={{ marginBottom: 12 }}>Secure website and hosting infrastructure</li>
            </ul>
            <p style={{ marginBottom: 24 }}>These measures are designed to protect against unauthorised access, loss, misuse or disclosure of personal data.</p>

            <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--chalk-50)", textTransform: "uppercase", marginBottom: 16, marginTop: 32 }}>Complaints</h3>
            <p style={{ marginBottom: 24 }}>If you have any concerns about how we handle your personal data, please contact us at info@ballerzabroad.com and we will do our best to resolve the issue.</p>
            <p style={{ marginBottom: 48 }}>You also have the right to lodge a complaint with the Information Commissioner's Office (ICO): www.ico.org.uk</p>

            <p style={{ marginBottom: 48, fontStyle: "italic", color: "var(--stand-300)" }}>Last updated: May 2026</p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}
window.PrivacyPolicy = PrivacyPolicy;
