// Blog index — long-form posts from the road.

const POSTS = [
  {
    id: "p01",
    cat: "Tour diary",
    date: "08 MAY 2026",
    read: "6 min read",
    title: "Inside the Levante UD window — five takeaways.",
    excerpt: "What a week inside a La Liga academy actually looks like — beyond the brochure. Five things every visiting squad learns in the first 48 hours.",
    img: "https://images.unsplash.com/photo-1610294232527-d11a4c7ce40c?w=1600&q=80",
    featured: true,
  },
  {
    id: "p02",
    cat: "Tournament",
    date: "12 MAY 2026",
    read: "8 min read",
    title: "MIC Costa Brava: Is It the Right Tournament for Your Academy?",
    excerpt: "MIC Costa Brava is Europe's most contested youth football tournament. Here's what academy directors need to know before applying — and whether it's right for your squad.",
    img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=900&q=80",
  },
  {
    id: "p03",
    cat: "Tour planning",
    date: "08 MAY 2026",
    read: "9 min read",
    title: "How to Plan a Pre-Season Football Tour in Europe: A Guide for UK Academies",
    excerpt: "Planning a pre-season overseas football tour for your academy? This guide covers timelines, destinations, what to look for in a provider, and how to get it right.",
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=900&q=80",
  },
  {
    id: "p04",
    cat: "Coaching",
    date: "05 MAY 2026",
    read: "7 min read",
    title: "Levante UD vs Real Betis: Which Professional Football Experience Is Right for Your Squad?",
    excerpt: "Ballerz Abroad partners with both Levante UD in Valencia and Real Betis in Seville. Here's how the two professional football experiences differ — and how to choose.",
    img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=900&q=80",
  },
  {
    id: "p05",
    cat: "Parents",
    date: "20 MAR 2026",
    read: "3 min read",
    title: "Travelling with the squad — a parent's note.",
    excerpt: "A mum from a U15 squad writes about what the Levante window looked like from the parents' floor of the hotel.",
    img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=900&q=80",
  },
  {
    id: "p06",
    cat: "Tournament",
    date: "07 MAR 2026",
    read: "4 min read",
    title: "Copa Daurada — the European season opener.",
    excerpt: "Why a 1,500-match tournament on the Costa Daurada is the best first taste of international youth football we know.",
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=900&q=80",
  },
  {
    id: "p07",
    cat: "On-tour",
    date: "22 FEB 2026",
    read: "5 min read",
    title: "Recovery is not the off-day.",
    excerpt: "Sleep, pool work, nutrition. How we design recovery so day four lifts day five — not flattens it.",
    img: "https://images.unsplash.com/photo-1518614846906-3a8a8f0c40d5?w=900&q=80",
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
                  <div className="blog-card__excerpt">{p.excerpt}</div>
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
          <p style={{ fontSize: 22, lineHeight: 1.5, color: "var(--chalk-50)", fontWeight: 500, marginBottom: 32 }}>
            {p.excerpt}
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--stand-200)", marginBottom: 20 }}>
            The first thing a visiting squad notices at a La Liga academy is the quiet. Sessions start on the dot, and nobody shouts because nobody has to. The standard does the work.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--stand-200)", marginBottom: 20 }}>
            We took 18 players into Levante's Ciutat Esportiva for seven days. Two video sessions a day, two on-pitch blocks, three fixtures against academy-aligned XIs. By midweek the lads were eating like the host squad and walking like them — the way an environment rewrites posture in 96 hours.
          </p>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 40, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 0.95, margin: "48px 0 18px" }}>
            01 — Standards are contagious.
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--stand-200)", marginBottom: 20 }}>
            Inside a pro environment, players self-select for the standard. They show up earlier, hydrate harder, listen longer. The job of the on-tour camp lead becomes about preserving that pull — not enforcing it.
          </p>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: 40, textTransform: "uppercase", letterSpacing: "-0.01em", lineHeight: 0.95, margin: "48px 0 18px" }}>
            02 — Opposition decides the week.
          </h3>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--stand-200)", marginBottom: 20 }}>
            We obsess about fixture design before we obsess about hotels. A well-matched academy XI is worth more to a U16 squad than any number of tunnel walks. Three contested games — not three blowouts — is the bar.
          </p>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: "var(--stand-200)", marginBottom: 20 }}>
            By day seven, the bus debrief had a different shape. Quieter. Sharper. The players knew which detail they were taking home — and which one had been undone.
          </p>
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
    </>
  );
}
window.BlogPost = BlogPost;
