// Blog index — long-form posts from the road.

const POSTS = [
  {
    id: "p01",
    cat: "Tour planning",
    date: "15 MAY 2026",
    read: "7 min read",
    title: "Spain vs Netherlands vs Portugal: Which European Football Tour Destination Is Right for Your Academy?",
    excerpt: "Spain, Netherlands, or Portugal — three of Europe's best football tour destinations for UK academies. Here's how to choose the right one based on your squad's objectives, not the brochure.",
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=1600&q=80",
    featured: true,
    body: [
      "Every year, academy directors and heads of football at UK development clubs face the same question when planning an overseas football tour: where do we go? Spain is the default answer for most. But default answers aren't always the right ones — and for academy squads with specific development objectives, the destination should be a decision, not a habit.",
      "Here's a clear breakdown of what Spain, the Netherlands, and Portugal each offer, and how to match the destination to your squad's goals.",
      { heading: "Spain: The most flexible option, and the strongest tournament base" },
      "Spain — specifically the Valencia and Catalonia regions — gives you more options from a single base than any other destination in Europe. Three La Liga clubs accessible for professional training environments. The most prestigious youth tournament calendar on the continent at Easter: MIC Costa Brava, Copa Daurada, Mare Nostrum Cup, and the new Levante UD International Cup in June. Warm weather in most windows. Well-established logistics.",
      "If your primary objective is combining professional partner-club training with competitive European tournament football, Spain is the most complete base. Levante UD's training environment in Valencia pairs naturally with MIC Costa Brava or Copa Daurada entry earlier or later in the week. For squads who want a packed itinerary of training and competition, Spain does it most efficiently.",
      "The Spanish development methodology is possession-based and technically demanding — a genuine contrast to English football culture, and one that challenges UK players in ways their domestic season doesn't.",
      { heading: "Netherlands: The most philosophically distinct experience" },
      "The Netherlands produces professional footballers at a rate disproportionate to its population. The Dutch academy model — built around decision-making over instruction, positional intelligence over athleticism, and technical creativity as the foundation of everything — is fundamentally different from the English system.",
      "Training inside the Feyenoord Academy environment at Varkenoord in Rotterdam gives your players and coaching staff direct exposure to that philosophy at professional club level. For development squads who have hit the ceiling of what domestic training can challenge them with, a week inside a Dutch academy environment is a different kind of test.",
      "The Netherlands also opens up the tournament calendar for the Easter window — the Netherlands Easter Youth Cup in Roosendaal — and the mid-season December and January windows with the Winter Cup Holland. For clubs who can't travel at Easter or in summer, the Netherlands is the only destination in the Ballerz Abroad network with viable winter tournament football.",
      { heading: "Portugal: The highest-profile partner club environment in the network" },
      "Benfica's academy is the most decorated in world football — named Best Global Academy at the Globe Soccer Awards in 2015 and 2019, and identified by Football Talent Scout as the best academy of the last decade. Training inside the Benfica Campus in Lisbon gives your players access to an environment that produced Bernardo Silva, Rúben Dias, and João Félix.",
      "For UK academies where the prestige and quality of the partner club environment is the primary objective — where the coaching staff want to observe a specific development model in action and bring that back into their own practice — Benfica is the strongest single destination in the network.",
      "Lisbon as a city is genuinely excellent for squad tours where the wider experience matters alongside the football. Compact, warm, culturally rich, with good options for families travelling with the group.",
      { heading: "The honest framework for choosing" },
      "These three questions should drive the decision:",
      "What is the primary development objective — training quality, tournament competition, or a specific methodological exposure?",
      "What window are you travelling in — Easter, summer, or mid-season?",
      "What matters to your club beyond the football — cultural experience, destination appeal for parents, logistical simplicity?",
      "If you want maximum tournament access combined with professional training: Spain.",
      "If you want the most philosophically challenging development environment: Netherlands.",
      "If you want the most globally recognised academy training environment: Portugal.",
      "If you're still not sure — tell us your squad details and we'll tell you where to go.",
      { cta: "Ready to plan your academy tour? Tell us about your squad and we'll recommend the right destination." }
    ],
  },
  {
    id: "p02",
    cat: "Academy coaching",
    date: "10 MAY 2026",
    read: "8 min read",
    title: "What Makes a Good Overseas Football Tour? Five Things Academy Directors Should Look For",
    excerpt: "Not all overseas football tours deliver what they promise. Here's what academy directors and development coaches should look for — and what to avoid — when planning a professional football experience abroad.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1600&q=80",
    body: [
      "The market for overseas football tours is crowded. There are dozens of companies offering packages to Spain, Portugal, and the Netherlands — brochures full of partner club logos, tournament names, and phrases like \"world-class facilities\" and \"bespoke experiences.\" Most of them offer the same thing: a fixed itinerary, a standard opposition, and a tour manager who has never coached a football match in their life.",
      "Here is what actually separates a good overseas football tour from an expensive week with a badge on it.",
      { heading: "1. The opposition is matched to your squad's actual level" },
      "This sounds obvious. It is routinely ignored.",
      "A development squad competing against opposition two or three levels below them for a week learns almost nothing from the competitive element of the tour. The training might be excellent — but the fixtures are noise. Equally, a grassroots club entered into MIC Costa Brava against Category One academy sides will spend most of the tournament on the wrong end of scorelines that damage rather than develop confidence.",
      "The right overseas football tour matches your squad to opposition at a level that is genuinely challenging — higher than what they face domestically, but not so far beyond them that the experience becomes demoralising. Any provider worth working with will ask you detailed questions about your playing standard before they recommend a tournament bracket or arrange fixtures. If they don't ask, they don't care about the answer.",
      { heading: "2. The training environment is what it says it is" },
      "There is a difference between training at a professional club and training near a professional club. There is a difference between sessions delivered by club academy coaches applying the club's methodology and sessions delivered by freelance coaches wearing the club's kit.",
      "Before committing to any overseas football tour, ask: who will actually be coaching our sessions? Where exactly will training take place? Which specific facility? Can you speak to a previous group who trained there?",
      "A genuine partner-club training environment means your players are inside the club's academy infrastructure — on the same pitches used by the club's own youth teams, coached by the same staff, and exposed to the same methodology. That is a materially different experience from a branded camp at a nearby facility.",
      { heading: "3. Someone from the company travels with you" },
      "A tour lead who is present on the ground from arrival to departure changes the quality of the experience entirely. Not a local coordinator you've never spoken to — someone from the company who knows your squad, understands your objectives, has spoken to your coaching staff in the weeks before departure, and is contactable throughout every day of the tour.",
      "Logistics managed on the ground in real time — transport running late, a training session rescheduled, a fixture opponent change — are the moments that determine whether a tour feels professionally delivered or chaotic. A dedicated tour lead absorbs all of that. Your coaching staff focus on the football. That is how it should work.",
      { heading: "4. The itinerary is built around your squad, not the provider's logistics" },
      "Every good overseas football tour starts with a conversation about objectives. What does your club actually need from this week? Pre-season fitness preparation? Scouting and player assessment in a competitive environment? Exposure to a specific style of play? Tournament competition against European opposition?",
      "The answers to those questions should drive every element of the itinerary — the destination, the partner club, the tournament entry, the training intensity, the recovery days built in. A provider who sends you a brochure before asking those questions is offering a package. A provider who asks those questions first and then builds around the answers is offering a tour.",
      "The distinction matters. Your squad is not the same as the squad that travelled last week. The tour should reflect that.",
      { heading: "5. Recovery is treated as part of the programme" },
      "Professional clubs build recovery into their training week as a non-negotiable. Youth tours routinely ignore it — double sessions, five fixtures in six days, and players returning home exhausted rather than sharper.",
      "The best overseas football tours are built around a realistic training load that leaves players physically and mentally fresher at the end of the week than at the start. That means structured recovery sessions, nutrition managed throughout, appropriate rest between training and competition, and an itinerary that doesn't sacrifice player welfare for the appearance of productivity.",
      "Your players should return from a good overseas football tour having experienced a step up in standard, having been genuinely challenged, and having benefited from the professional environment they operated in. Not having ground out seven days on tired legs in a schedule designed around the provider's convenience.",
      { cta: "If you want to talk through what the right tour looks like for your squad, that conversation starts here." }
    ],
  },
  {
    id: "p03",
    cat: "Tour timing",
    date: "05 MAY 2026",
    read: "7 min read",
    title: "The Mid-Season Football Tour: Why December and January Are the Smartest Windows Most UK Academies Ignore",
    excerpt: "Easter is overcrowded. Summer is expensive. The mid-season window — December and January — is the most underused opportunity in the UK academy tour calendar. Here's why it works.",
    img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=1600&q=80",
    body: [
      "Ask most UK academy directors when they take their squad on an overseas football tour and you'll get the same two answers: Easter or the summer. Both are sensible windows. Both are also the most expensive, the most logistically congested, and the most competitive for tournament entry slots.",
      "There is a third option that almost nobody uses. It is arguably the most useful of the three.",
      { heading: "What the mid-season window actually offers" },
      "December and January sit in the middle of the domestic football season — after the first half of the league programme has been played, and before the second half begins. For a UK academy director, that timing has a specific and underused value: it is the exact moment when you have the most accurate picture of your squad's strengths, weaknesses, and development gaps — and the most time to do something about them before the season ends.",
      "A mid-season overseas football tour in December or January is not just a competition or a training camp. It is a performance benchmark at the halfway point of your season. Competitive international football against European opposition gives you data — real data — about how your players perform when the style, tempo, and tactical demands are different from anything they face in their domestic league. That information feeds directly into your coaching programme for the second half of the season.",
      "The squads that use this window well return in January knowing exactly which players have the technical floor to compete at a higher standard, which defensive patterns break down under pressure they haven't faced domestically, and which individuals respond well or poorly to being genuinely tested.",
      { heading: "The Netherlands in winter: better than you think" },
      "The practical objection to a mid-season Netherlands tour is the weather. December and January in Holland — most coaches assume it means frozen pitches and cancelled matches.",
      "The reality is different. The Winter Cup Holland runs at Duinrell in Wassenaar — a purpose-built facility with covered and heated infrastructure, well-maintained pitches, and an indoor leisure park for recovery time between matches. The tournament has been running since 2016 and has a reliable track record of delivering competition in full regardless of conditions.",
      "Dutch winters are cold but not extreme by the standards of northern European football — and the pitches at modern Dutch facilities are maintained to a standard that makes conditions a manageable variable rather than a threat to the programme. UK squads travel to the Netherlands in winter and play football. That is the reality.",
      { heading: "Pairing Feyenoord training with the tournament" },
      "The Winter Cup Holland is based in Wassenaar — 30 minutes from Rotterdam. That proximity means a mid-season Netherlands tour can pair Feyenoord Academy training at Varkenoord earlier in the week with Winter Cup competition at the weekend.",
      "For UK academies looking for a winter window that combines genuine professional club exposure with competitive international football, that combination is the most complete mid-season offering available. Three days inside Feyenoord's development environment followed by three days of Winter Cup competition — a week that delivers both the training benchmark and the competitive benchmark in a single trip.",
      { heading: "The logistical advantage" },
      "Easter and summer tours involve competition from every other club in the UK. Popular tournaments fill months in advance. Accommodation in Salou or Valencia in April commands premium pricing. The best partner-club training windows are fought over.",
      "Mid-season is different. December and January availability is broader, prices are lower, and entry into the Winter Cup Holland is more accessible than the Easter tournament calendar. For clubs that have always intended to do an overseas tour but found the Easter logistics prohibitive, this window removes most of the barriers.",
      { heading: "Who should consider it" },
      "The mid-season window works best for UK academies and development squads who want a performance benchmark at the halfway point of the season rather than a pre-season or end-of-season experience. It is also the right choice for clubs whose Easter and summer calendars are already committed — schools with fixed term dates, academies with domestic cup commitments, or clubs who simply couldn't get availability in the windows they originally wanted.",
      "If you have never considered December or January for an overseas football tour, consider it now. The window is underused precisely because most clubs haven't thought about it deliberately. That is your advantage.",
      { cta: "Ready for a mid-season tour? Tell us about your squad and we'll put together a December or January programme." }
    ],
  },
];

function Blog({ onNavigate }) {
  const [hero, ...rest] = POSTS;
  return (
    <>
      <Nav active="blog" onNavigate={onNavigate} />

      {/* HEADER */}
      <section className="band" style={{ paddingTop: 140, paddingBottom: 48 }}>
        <div className="wrap">
          <EyebrowBar>Journal · 2026</EyebrowBar>
          <h2 className="section-h">From the road.</h2>
          <div className="section-lead">Tour diaries, coaching notes, scout interviews, parent letters. Long-form writing from inside every Ballerz Abroad window.</div>
        </div>
      </section>

      {/* FEATURED + GRID */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="blog-feature" onClick={() => onNavigate("blog-post")}>
            <div className="blog-feature__img" style={{ backgroundImage: `url(${hero.img})` }}></div>
            <div className="blog-feature__body">
              <div className="blog-feature__meta">
                <span>{hero.cat}</span><span>·</span><span>{hero.date}</span><span>·</span><span>{hero.read}</span>
              </div>
              <h3 className="blog-feature__t">{hero.title}</h3>
              <div className="blog-feature__excerpt">{hero.excerpt}</div>
              <div className="blog-feature__cta">Read the post →</div>
            </div>
          </div>

          <div className="blog-grid">
            {rest.map(p => (
              <article className="blog-card" key={p.id} onClick={() => onNavigate("blog-post")}>
                <div className="blog-card__img" style={{ backgroundImage: `url(${p.img})` }}></div>
                <div className="blog-card__body">
                  <div className="blog-card__meta">
                    <span>{p.cat}</span><span>·</span><span>{p.date}</span>
                  </div>
                  <h4 className="blog-card__t">{p.title}</h4>
                  <div className="blog-card__excerpt" style={{ fontFamily: "Arial, sans-serif" }}>{p.excerpt}</div>
                  <div className="blog-card__read">{p.read} →</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>Subscribe</div></div>
            <h2 className="section-h">Notes from every window.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>One email per camp. Long-form writing, photo essays, coaching debriefs. No marketing.</div>
            <div style={{ display: "flex", gap: 8, marginTop: 28, maxWidth: 480 }}>
              <input className="app-newsletter" placeholder="your@email.com" style={{
                flex: 1, background: "transparent", border: "none", borderBottom: "1px solid rgba(10,11,13,0.3)",
                color: "#0A0B0D", fontFamily: "var(--font-body)", fontSize: 18, padding: "10px 0", outline: "none"
              }} />
              <button className="btn btn--primary">Subscribe →</button>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">Weekly during tour windows</div><div className="app-step__d">Notes filed from inside each camp — never blog filler.</div></div></div>
              <div className="app-step"><div className="app-step__n">→</div><div><div className="app-step__t">Photo + film</div><div className="app-step__d">Frames you won't see on Instagram. From the tunnel, the dressing room, the bus.</div></div></div>
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

window.Blog = Blog;
window.POSTS = POSTS;

// Single post view — pulls the first featured post.
function BlogPost({ onNavigate }) {
  const p = POSTS[0];
  return (
    <>
      <Nav active="blog" onNavigate={onNavigate} />

      <section className="band" style={{ paddingTop: 140, paddingBottom: 32 }}>
        <div className="wrap" style={{ maxWidth: 820 }}>
          <EyebrowBar>{p.cat} · {p.date} · {p.read}</EyebrowBar>
          <h2 className="section-h" style={{ fontSize: "clamp(40px, 6vw, 88px)" }}>{p.title}</h2>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0, paddingBottom: 48 }}>
        <div className="wrap">
          <div style={{ aspectRatio: "21/9", backgroundImage: `url(${p.img})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 24 }}>
        <div className="wrap" style={{ maxWidth: 740, fontFamily: "var(--font-body)", color: "var(--chalk-50)" }}>
          {p.body ? p.body.map((section, idx) => {
            if (typeof section === 'string') {
              return (
                <p key={idx} style={{ fontSize: 17, lineHeight: 1.7, color: "var(--stand-200)", marginBottom: 20 }}>
                  {section}
                </p>
              );
            } else if (section.heading) {
              return (
                <h3 key={idx} style={{ fontFamily: "var(--font-display)", fontSize: 40, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 0.95, margin: "48px 0 18px" }}>
                  {section.heading}
                </h3>
              );
            } else if (section.cta) {
              return (
                <div key={idx} style={{ marginTop: 48, padding: 32, background: "rgba(218,254,61,0.08)", border: "1px solid rgba(218,254,61,0.2)", borderRadius: 8 }}>
                  <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--chalk-50)", margin: 0 }}>
                    {section.cta}
                  </p>
                  <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")} style={{ marginTop: 20 }}>Apply for a tour →</button>
                </div>
              );
            }
          }) : null}
        </div>
      </section>

      <section className="band" style={{ paddingTop: 96 }}>
        <div className="wrap">
          <EyebrowBar>More journal</EyebrowBar>
          <div className="blog-grid">
            {POSTS.slice(1, 4).map(p => (
              <article className="blog-card" key={p.id} onClick={() => onNavigate("blog-post")}>
                <div className="blog-card__img" style={{ backgroundImage: `url(${p.img})` }}></div>
                <div className="blog-card__body">
                  <div className="blog-card__meta"><span>{p.cat}</span><span>·</span><span>{p.date}</span></div>
                  <h4 className="blog-card__t">{p.title}</h4>
                  <div className="blog-card__excerpt">{p.excerpt}</div>
                  <div className="blog-card__read">{p.read} →</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
      <CookieIcon onNavigate={onNavigate} />
    </>
  );
}
window.BlogPost = BlogPost;
