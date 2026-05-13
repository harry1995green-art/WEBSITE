// Blog index — long-form posts from the road.

const POSTS = [
  {
    id: "p01",
    cat: "Tour planning",
    date: "15 MAY 2026",
    read: "7 min read",
    title: "Spain vs Netherlands vs Portugal: Which European Football Tour Destination Is Right for Your Academy?",
    excerpt: "Spain, Netherlands, or Portugal — three of Europe's best football tour destinations for UK academies. Here's how to choose the right one based on your squad's objectives, not the brochure.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F44d36947abd641faaa34e708dd7bdbd6?format=webp&width=800&height=1200",
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
    img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F74d0f8d3458742e69ddd4a8dc9e5bc8a?format=webp&width=800&height=1200",
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
    img: "https://images.unsplash.com/photo-CZ_HwDtvEus?w=1600&q=80",
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
  {
    id: "p04",
    cat: "Youth tours",
    date: "28 APR 2026",
    read: "10 min read",
    title: "Football Tours Abroad for Youth Clubs: The Complete Guide (2025–26)",
    excerpt: "Thinking about taking your youth football club on their first tour abroad? Here's everything you need to know — from choosing the right destination to making sure every player comes home with memories they'll never forget.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F48c2f36c2a634f12a0242cc2f5afb6b6?format=webp&width=800&height=1200",
    body: [
      "Every youth footballer remembers their first tour. The early morning flights, the unfamiliar kits, the pitches that looked nothing like home — and the matches that somehow meant everything. If you're a manager or club secretary exploring football tours abroad for youth clubs, you're about to give your players one of those moments.",
      "But organising a youth football tour is more involved than booking a family holiday. You're responsible for a squad of young players, managing parents' expectations, coordinating fixtures, and making sure every detail — from travel insurance to dietary requirements — is covered before you leave. This guide breaks it all down.",
      { heading: "Why take your youth club on a football tour abroad?" },
      "The benefits go far beyond football. Youth tours abroad expose players to different styles of play, develop resilience and team cohesion, and give young people a meaningful shared experience. Research consistently shows that shared challenge — competing together in an unfamiliar environment — is one of the most powerful tools for team bonding.",
      "From a purely footballing perspective, playing against clubs from different countries forces players to adapt. You'll face different defensive shapes, different pressing intensities, and different tactical approaches. That exposure, even over a long weekend, can accelerate development in ways that months of domestic training cannot.",
      { heading: "Most popular destinations for youth football tours" },
      "The right destination depends on your squad's age group, budget, and what you want to get out of the tour. Here are the most popular choices for UK youth clubs:",
      "Spain (Barcelona, Valencia, Malaga) — perhaps the most popular destination for youth football tours abroad. Excellent facilities, a strong football culture, and opponents who will test your technical players.",
      "Netherlands (Amsterdam, Eindhoven) — Dutch youth academies are world-renowned. Fixtures here give players a taste of structured positional play.",
      "Portugal (Lisbon, Porto, Algarve) — growing rapidly in popularity. High-quality facilities, reliable weather, and very competitive fixture programmes.",
      "Germany (Cologne, Munich, Berlin) — ideal for older youth age groups wanting a more physical, tactical challenge.",
      "Ireland — a great first tour option for younger or less experienced squads. Minimal travel disruption, no language barrier, and a great footballing community.",
      { heading: "What to look for in a youth football tour operator" },
      "Not all football tour operators are equal. When researching options, there are a few non-negotiables to look for:",
      "ATOL or ABTA protection for financial security. Dedicated tour management — someone available throughout the trip. Age-appropriate fixture matching against genuinely competitive opposition. Transparent, all-inclusive pricing (no surprise costs on arrival). Experience with your specific age group (under-9s have very different needs to under-18s).",
      "At Ballerz Abroad, we specialise in crafting football tour experiences that work around your club — your budget, your age groups, your ambitions. Every fixture is arranged specifically for your squad level, and we handle the logistics so your coaching staff can focus on football.",
      { heading: "How far in advance should you book?" },
      "For popular destinations like Spain and Portugal during peak season (Easter, May half-term, summer), we recommend booking at least six to nine months in advance. Fixture availability, accommodation blocks, and group flights all get locked up quickly — especially for the most desirable dates.",
      "If you're planning a winter or January tour, you'll generally have more flexibility, but the best facilities and opponents are still booked on a first-come basis.",
      { heading: "Costs: what to budget for a youth football tour abroad" },
      "Tour costs vary significantly based on destination, duration, group size, and the level of accommodation chosen. As a rough guide for UK youth clubs:",
      "A 3-night tour to Ireland or the Netherlands: typically £250–£350 per player. A 4-night tour to Spain or Portugal: typically £400–£600 per player. A 5–7 night summer tour to southern Europe: £600–£900+ per player.",
      "These figures include flights, accommodation, meals, fixtures, and ground transport. A reputable operator will give you a clear, itemised quote with no hidden extras.",
      { cta: "Ready to plan your youth football tour? Tell us about your squad and we'll build the right experience around your club." }
    ],
  },
  {
    id: "p05",
    cat: "Pre-season",
    date: "20 APR 2026",
    read: "9 min read",
    title: "Pre-Season Football Tours in Europe: How to Choose the Right Package for Your Club",
    excerpt: "Pre-season is your squad's foundation for the year ahead. Get the tour right and you arrive at the first league game sharper, fitter, and more cohesive than ever. Here's how to plan it properly.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F48c2f36c2a634f12a0242cc2f5afb6b6?format=webp&width=800&height=1200",
    body: [
      "Pre-season is non-negotiable. Every serious club — from grassroots to semi-professional — understands that the weeks before the competitive season begins are where you set the tone. And increasingly, clubs across the UK are choosing to do that abroad.",
      "A pre-season football tour in Europe offers something a domestic training camp simply can't: competitive fixtures against unfamiliar opponents, combined with the team-building that only comes from travelling and living together. This guide walks you through how to plan it, what to look for, and which destinations are worth considering.",
      { heading: "Why Europe for your pre-season tour?" },
      "Europe's football infrastructure is genuinely world-class. You can arrange fixtures against professional academy sides, competitive amateur clubs, or other touring teams depending on your level. The combination of quality opposition, good weather (for summer pre-season), and easily accessible flights from UK airports makes it the natural choice for most clubs.",
      "Beyond the football, a European tour means genuine cultural exposure for your squad — something that builds the kind of camaraderie that shows up when you need it most in February.",
      { heading: "Top European destinations for pre-season football tours" },
      "These are the destinations we see clubs return to year after year — and for good reason:",
      "Spain — the standout choice for summer pre-season. Guaranteed good weather, exceptional training facilities, and a rich pool of local opposition at every level. Costa del Sol, Costa Brava, and Valencia are all established hubs.",
      "Portugal — growing fast in popularity among UK clubs. The Algarve in particular has invested heavily in football infrastructure, and the fixture quality has improved dramatically in recent years.",
      "Netherlands — excellent for clubs that want a more tactical challenge. Dutch clubs are well-organised, technically disciplined, and very welcoming of touring sides.",
      "Germany — a physically demanding environment that suits senior and semi-professional clubs wanting to test themselves against high-intensity opposition.",
      "Ireland — underrated as a pre-season destination. No language barrier, short flight times, and a genuinely competitive local football scene make it a brilliant option for clubs on a tighter timeline or budget.",
      { heading: "What should a pre-season tour package include?" },
      "A good pre-season football tour package is more than flights and accommodation. When you're evaluating operators, look for the following:",
      "Minimum two competitive fixtures, properly matched to your squad level. Access to quality training pitches (ideally with floodlights for flexibility). Half-board or full-board accommodation — your players need to be fuelled properly. Group transport throughout (airport transfers, matchday travel). A dedicated tour representative available for the duration. Flexibility to add a team social or local experience into the itinerary.",
      "Ballerz Abroad builds pre-season packages around your club's specific needs — your squad size, budget, level of opposition required, and how many days you want to be away. No two tours are the same.",
      { heading: "When is the best time to go?" },
      "For summer pre-season, the window between mid-June and late July is most popular. Clubs planning to start their season in August should ideally return at least two weeks before competitive play begins to allow for recovery and final squad preparation.",
      "January tours are becoming increasingly popular for mid-season resets — particularly among semi-professional clubs and those looking to strengthen squad cohesion during the winter break.",
      { heading: "How much does a pre-season football tour to Europe cost?" },
      "Costs depend heavily on destination, group size, duration, and the standard of accommodation. As a working guide:",
      "4-night Spain or Portugal tour (squad of 20–25): approximately £450–£650 per person. 5-night summer tour with additional training sessions: approximately £600–£850 per person. Budget-friendly Ireland option (3 nights): approximately £280–£380 per person.",
      "A properly run pre-season tour is an investment. Clubs that go see real returns in fitness, cohesion, and momentum at the start of the season.",
      { cta: "Ready to plan your pre-season tour? Tell us about your squad and we'll build the perfect package." }
    ],
  },
  {
    id: "p06",
    cat: "Club culture",
    date: "12 APR 2026",
    read: "6 min read",
    title: "7 Real Benefits of Taking Your Football Club on Tour (That Have Nothing to Do With Winning)",
    excerpt: "Winning matches is great. But the most important things that happen on a football tour abroad often have nothing to do with the scoreline.",
    img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F48c2f36c2a634f12a0242cc2f5afb6b6?format=webp&width=800&height=1200",
    body: [
      "Ask any player who's been on a football tour abroad and they'll struggle to tell you the final scores. Ask them what they remember, and you'll get something different entirely — the hotel lobby at midnight, the match played in 30-degree heat, the teammate who came up huge when it mattered. Those are the things that stay.",
      "Football club tours are increasingly popular for a reason. Clubs that tour regularly — at youth, amateur, and semi-professional level — report stronger squad culture, better player retention, and genuine improvements in on-pitch performance. Here are seven benefits that extend well beyond the final whistle.",
      { heading: "1. Team cohesion you can't manufacture in training" },
      "Shared adversity builds bonds. When your squad is navigating a foreign airport together, dealing with a delayed flight, or recovering from a tough first match in unfamiliar heat, something changes. Players who barely spoke in training find themselves relying on each other. That relational trust shows up in the way a team presses together or holds a lead under pressure.",
      "Research in sports psychology consistently shows that shared challenge accelerates group cohesion far faster than controlled training environments.",
      { heading: "2. Exposure to different styles of play" },
      "Playing exclusively against the same clubs in the same league every week creates blind spots. A team tour abroad exposes your players to fundamentally different approaches — different pressing intensities, different positional structures, different physical demands. That exposure is genuinely developmental. Players who've faced a disciplined Dutch youth side or a technically sharp Spanish club return with a broader football vocabulary.",
      { heading: "3. Player development happens faster under pressure" },
      "Unfamiliar environments accelerate growth. Playing away from home, in front of a crowd that doesn't know you, against opponents with nothing to lose — that's a different pressure to a familiar Saturday league game. Players discover things about themselves in that environment that training simply doesn't surface.",
      { heading: "4. It's a powerful recruitment and retention tool" },
      "For youth clubs especially, the promise of a tour is a meaningful part of what you offer players and families. Clubs that tour regularly tend to have stronger retention — players don't want to leave a club that invests in their experience. At senior and semi-professional level, a well-run tour signals that the club is serious and ambitious.",
      { heading: "5. Coaches get a different view of their squad" },
      "There's no hiding on tour. Over four or five days together, you see players in contexts you never see during the week — how they respond to setbacks, how they treat people they've just met, how they perform when tired. Coaches who've been on tour consistently say they come back with a clearer picture of their squad's character than months of training provided.",
      { heading: "6. It builds club culture and identity" },
      "Clubs with strong cultures have stories. \"Remember the tour in Valencia\" becomes part of the fabric of a club — something that connects players across different seasons and generations. That shared narrative is what makes a club more than just a team that plays matches together on weekends.",
      { heading: "7. It's an experience families invest in — and talk about" },
      "For youth clubs, the tour is often the highlight of the footballing year for parents as much as players. A well-organised, safe, and memorable trip generates genuine word-of-mouth. Families who've had a great tour experience recommend your club. That's one of the most underrated benefits of all.",
      { cta: "Ready to take your club on tour? Tell us your vision and we'll make it happen." }
    ],
  },
];

if (typeof window !== "undefined") { window.BLOG_POSTS = POSTS; }

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
          <div className="blog-feature" onClick={() => { window.__postId = hero.id; onNavigate("blog-post"); }} style={{ cursor: "pointer" }}>
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
              <article className="blog-card" key={p.id} onClick={() => { window.__postId = p.id; onNavigate("blog-post"); }} style={{ cursor: "pointer" }}>
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

// Single post view — pulls post by ID, defaults to first
function BlogPost({ onNavigate, postId = "p01" }) {
  const p = POSTS.find(post => post.id === postId) || POSTS[0];
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": p.title,
    "description": p.excerpt,
    "image": p.img,
    "datePublished": "2026-05-15",
    "author": {
      "@type": "Organization",
      "name": "Ballerz Abroad"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ballerz Abroad",
      "logo": {
        "@type": "ImageObject",
        "url": "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fc2524f6556de432fb71303db254cb2a5?format=webp"
      }
    }
  };
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(blogSchema);
    document.head.appendChild(script);
    return () => script.remove();
  }, [blogSchema]);

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
              <article className="blog-card" key={p.id} onClick={() => { window.__postId = p.id; onNavigate("blog-post"); }} style={{ cursor: "pointer" }}>
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
