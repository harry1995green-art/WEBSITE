// Application — 4-step premium intake.

const { useState: useStateApp } = React;

function Application({ onNavigate }) {
  const [step, setStep] = useStateApp(0);
  const [club, setClub] = useStateApp("Hackney Marshes FC");
  const [role, setRole] = useStateApp("Head Coach");
  const [size, setSize] = useStateApp("18 players");
  const [age,  setAge]  = useStateApp("U16 — U18");
  const [goals, setGoals] = useStateApp([1, 2]);
  const [dest, setDest] = useStateApp(["Barcelona"]);

  const steps = ["Your club", "Your squad", "Your goals", "Window & budget"];

  const toggle = (state, setter, v) =>
    setter(state.includes(v) ? state.filter(x => x !== v) : [...state, v]);

  return (
    <div className="app-page">
      <Nav active="application" onNavigate={onNavigate} />

      <div className="app-page__wrap">
        <div className="eyebrow-bar">
          <div className="eyebrow-bar__rule"></div>
          <div className="eyebrow-bar__text">Application · Step {String(step + 1).padStart(2, "0")} / 04 · {steps[step]}</div>
        </div>
        <h2 className="section-h" style={{ marginBottom: 24 }}>
          {step === 0 && "Tell us about your club."}
          {step === 1 && "Tell us about your squad."}
          {step === 2 && "What does success look like?"}
          {step === 3 && "Window & budget."}
        </h2>

        <div className="app-stepper">
          {steps.map((_, i) => (
            <div key={i} className={"app-stepper__dot " + (i < step ? "is-done" : i === step ? "is-current" : "")}></div>
          ))}
        </div>

        {/* Step 0 */}
        {step === 0 && (
          <>
            <div className="app-form-row">
              <label>Club / organisation</label>
              <input value={club} onChange={(e) => setClub(e.target.value)} />
            </div>
            <div className="app-form-row">
              <label>Your role</label>
              <input value={role} onChange={(e) => setRole(e.target.value)} />
            </div>
            <div className="app-form-row">
              <label>Type of organisation</label>
              <div className="chips">
                {["Grassroots", "Academy", "School", "Non-league", "US college", "Other"].map(c => (
                  <button key={c} className={"chip " + (c === "Grassroots" ? "is-on" : "")}>{c}</button>
                ))}
              </div>
            </div>
            <div className="app-form-row">
              <label>Your email</label>
              <input placeholder="head.coach@yourclub.com" />
            </div>
          </>
        )}

        {/* Step 1 */}
        {step === 1 && (
          <>
            <div className="app-form-row">
              <label>Squad size</label>
              <input value={size} onChange={(e) => setSize(e.target.value)} />
            </div>
            <div className="app-form-row">
              <label>Age groups travelling</label>
              <input value={age} onChange={(e) => setAge(e.target.value)} />
            </div>
            <div className="app-form-row">
              <label>Level of competition you typically face</label>
              <div className="chips">
                {["Local league", "County", "Regional", "National", "Academy / pro", "Mixed"].map(c => (
                  <button key={c} className={"chip " + (c === "Regional" ? "is-on" : "")}>{c}</button>
                ))}
              </div>
            </div>
            <div className="app-form-row">
              <label>Number of staff travelling</label>
              <input placeholder="e.g. 3 coaches, 1 physio" />
            </div>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <div className="app-form-row">
              <label>What do you want this camp to deliver? (Pick all that apply)</label>
              <div className="chips">
                {["Pre-season fitness", "Team culture", "Tactical reset", "Scouting exposure", "Player development", "Reward for the season", "International experience"].map((c, i) => (
                  <button
                    key={c}
                    className={"chip " + (goals.includes(i) ? "is-on" : "")}
                    onClick={() => toggle(goals, setGoals, i)}
                  >{c}</button>
                ))}
              </div>
            </div>
            <div className="app-form-row">
              <label>How would your squad describe a successful trip?</label>
              <textarea placeholder="Tell us in your own words — we read every application." />
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <>
            <div className="app-form-row">
              <label>Preferred destination</label>
              <div className="chips">
                {["Barcelona", "Madrid", "Lisbon", "Milan", "Amsterdam", "Open — surprise us"].map(c => (
                  <button
                    key={c}
                    className={"chip " + (dest.includes(c) ? "is-on" : "")}
                    onClick={() => toggle(dest, setDest, c)}
                  >{c}</button>
                ))}
              </div>
            </div>
            <div className="app-form-row">
              <label>Preferred window</label>
              <input placeholder="e.g. April 2026, half-term, pre-season" />
            </div>
            <div className="app-form-row">
              <label>Workable budget (per player)</label>
              <div className="chips">
                {["£1,200 — £1,500", "£1,500 — £1,800", "£1,800 — £2,200", "£2,200+", "Open"].map(c => (
                  <button key={c} className={"chip " + (c === "£1,800 — £2,200" ? "is-on" : "")}>{c}</button>
                ))}
              </div>
            </div>
            <div className="app-form-row">
              <label>Anything else we should know</label>
              <textarea placeholder="Optional." />
            </div>
          </>
        )}

        {/* Footer / controls */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 56, paddingTop: 24, borderTop: "1px solid rgba(246,243,235,0.12)" }}>
          <button
            className="btn btn--ghost"
            disabled={step === 0}
            onClick={() => setStep(s => Math.max(0, s - 1))}
            style={{ opacity: step === 0 ? 0.35 : 1 }}
          >← Previous</button>
          {step < 3 ? (
            <button className="btn btn--primary btn--lg" onClick={() => setStep(s => s + 1)}>Continue →</button>
          ) : (
            <button className="btn btn--primary btn--lg" onClick={() => alert("Application submitted — we'll be in touch within 2 working days.")}>Submit application →</button>
          )}
        </div>

        <div style={{ marginTop: 64, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--stand-300)" }}>
          We respond to every application within two working days · By submitting, you accept a follow-up call from a UK number.
        </div>
      </div>

      <WhatsAppFab />
    </div>
  );
}

window.Application = Application;
