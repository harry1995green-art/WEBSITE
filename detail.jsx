// Experience detail page — single camp deep-dive, parametrised by id.

const EXP_DATA = {
  "exp-nxgenpro": {
    title: "NXGENPro.",
    eyebrow: "England · UK-based development programme",
    sub: "",
    location: "England · UK",
    facts: [["Country", "England"], ["Format", "Year-round windows"], ["Age", "U13 — U18"], ["From", "£895 pp"]],
    img: "https://images.unsplash.com/photo-1518604666860-9ed391f76460?w=2000&q=80",
    pill: "Year-round",
    accent: "Apr 2026 · May 2026 · Jul 2026 — multiple windows live",
    summary: "NXGENPro is Ballerz Abroad's UK-based professional football experience partner. Based at Gordon's School in Surrey, it gives boys and girls aged 11–18 the chance to train, compete, and live inside a genuine professional football environment — without leaving England.\n\nWhere our European tours take squads abroad, NXGENPro brings the pro environment to the UK.",
    accommodation: {
      name: "Gordon's School · Augusta Boarding House · Surrey, England",
      link: "https://nx-genpro.com",
      linkLabel: "Visit NXGENPro.com — quote BALLERZ ABROAD for our exclusive promo code",
      desc: "Players are housed in the Augusta Boarding House at Gordon's School — a recently refurbished residential boarding house run by resident NXGEN staff members. Gordon's School boasts a prestigious £6 million first-class sports hub with a 1,233 m² indoor sports hall and a brand new 150 m² fully air-conditioned fitness suite, alongside dedicated football pitches and recovery facilities.",
      features: ["Augusta Boarding House · recently refurbished", "Resident NXGEN staff on-site 24/7", "£6m sports hub + 1,233m² indoor hall", "150m² air-conditioned fitness suite", "Football pitches on campus", "Full board · all meals provided"],
      photos: [
        { url: "https://nx-genpro.com/wp-content/uploads/2025/08/3163_618-1-1024x683.jpg", cap: "Gordon's School sports hub" },
        { url: "https://www.synergyllp.co.uk/wp-content/uploads/2020/02/Gordons-School-Boarding-Accom-HIGH-RES-001-scaled.jpg", cap: "Boarding house grounds" },
        { url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80", cap: "Fitness suite" },
        { url: "https://www.synergyllp.co.uk/wp-content/uploads/2020/02/Gordons-School-Boarding-Accom-HIGH-RES-025-e1582906641466.jpg.webp", cap: "Boarding rooms" },
      ],
    },
    sections: [
      { eyebrow: "05 — The UK Advantage", title: "Professional football. No passport needed.", content: "NXGENPro opens access to a professional football environment without the cost, logistics, or time of international travel. For UK development squads, the value isn't just the training — it's the consistency.\n\nYour players train under the same coaches, on the same pitches, in the same system every window. They build relationships with opposition players. They understand the facility, the schedule, the coaching methodology. That consistency is how development actually happens.\n\nAnd parents can watch whenever they want." },
      { eyebrow: "06 — Year-Round Windows", title: "When you need it, we run it.", content: "NXGENPro operates across the full calendar — spring windows, summer breaks, autumn builds, and midseason resets. Every window is seven days, fully residential, and built around your squad's phase of the season.\n\nNeeds a pre-season build in July? Done. Looking for a midseason reset in January? Done. Want an Easter window that fits the school calendar? Done. Choose your timing. We'll build the programme." },
      { eyebrow: "07 — The Partnership Difference", title: "One location. One standard. One environment.", content: "NXGENPro is not a generic residential camp. It's Ballerz Abroad's direct partnership with Gordon's School and the coaching team — the same coaches, the same facilities, the same daily standard across every window.\n\nWhen you come back, it feels familiar. The pitch is the same. The gym is the same. The boarding house is the same. That continuity is deliberately designed. It means your players develop rhythm and understanding — not just experience a different place." },
      { eyebrow: "08 — Who This Is For", title: "Right for your squad if…", content: "You want professional football development without the logistics of international travel\n\nYour squad needs year-round access to high-standard training, not a one-off tournament trip\n\nYou value consistency and long-term relationship building over novelty\n\nYou want parents to be able to attend and observe\n\nYour budget doesn't stretch to European destinations, but your ambition does.\n\nNot the right fit if you specifically want the experience of travelling abroad as part of the development value. For that, the European partnerships are the answer. NXGENPro is right when the football standard and the continuity of environment are the priorities." },
    ],
  },
  "exp-levante": {
    title: "Levante Academy Experience.",
    eyebrow: "Valencia · ES · Pro Experience · La Liga partner",
    sub: "Inside Levante UD's training environment. Individual Player Development available. Parents welcome to travel. The fullest pro-grade window we run.",
    location: "Valencia · ES",
    facts: [["Country", "Spain"], ["Partner", "Levante UD"], ["Age", "U7 — U21"], ["From", "£999"]],
    img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=2000&q=80",
    pill: "Application open",
    accent: "Easter window · Apr 04 — 11 2026",
    summary: "Levante UD is one of three La Liga clubs based in the Valencia region — one of European football's most productive development ecosystems. Founded in 1909, the club runs a full youth academy structured around a methodology built on game understanding, decision-making, and tactical intelligence. It's the same system used across every age group from the first team down.\n\nWhen Ballerz Abroad takes a squad to Levante, they aren't visiting the club. They're training inside it — on the same pitches, under the same coaching model, in the same daily environment as Levante's own academy players.\n\nThe Levante Individual Player Development programme is a structured residency inside Levante's training environment — open to individual players aged 11–18. Players are assessed on arrival, placed into a training group matched to their level, and spend the week training and competing alongside Levante's academy structure. Parents are welcome to travel. Places are limited per window.",
    accommodation: {
      name: "Global-Levante UD International Residence · L'Eliana, Valencia",
      desc: "Players stay at the official Global-Levante UD International Residence — located in L'Eliana, one of the quietest and most comfortable areas of the Valencian community. The 23,000 m² campus houses up to 120 players with private bathrooms, dining room (breakfast, lunch and dinner), swimming pool, gymnasium, crossfit area, padel courts, tennis courts, a cafeteria, games room and 24-hour surveillance. Players live, eat and recover where Levante UD's international programme is based — the environment is part of the experience.",
      features: ["Up to 120 players · private bathrooms", "Full board (breakfast, lunch & dinner)", "Swimming pool + sports centre", "Gymnasium · crossfit · padel · tennis", "Games room · TV lounge · laundry", "24-hour surveillance + tutoring service", "Direct bus transfer to training campus"],
      photos: [
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Edificio-Residencia.jpg", cap: "Residence exterior" },
        { url: "http://www.globalfootballtotal.com/wp-content/uploads/2020/04/Dormitorios.jpg", cap: "Player rooms" },
        { url: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Ffce0f6409dea4c95a4fafd0cdb7ca997?format=webp&width=800&height=1200", cap: "Swimming pool" },
        { url: "http://www.globalfootballtotal.com/wp-content/uploads/2020/04/Previo-Habitaciones.jpg", cap: "Accommodation" },
        { url: "http://www.globalfootballtotal.com/wp-content/uploads/2020/04/Previo-Habitaciones-II.jpg", cap: "Residence grounds" },
      ],
    },
    sections: [
      { eyebrow: "05 — The Valencia Region", title: "One of Europe's most productive football ecosystems.", content: "Valencia sits at the centre of Spanish football's most prolific development region. Levante UD, Valencia CF, and Villarreal CF all operate academies here — producing dozens of La Liga and international players every year.\n\nThat concentration of quality opposition, coaching expertise, and tournament access is unique. It's not just Levante's training that develops your players. It's the daily standard of the region itself." },
      { eyebrow: "06 — Tournament Windows", title: "Access to the Spanish youth circuit.", content: "A Levante-based tour places your squad inside Spain's tournament calendar. Copa Daurada, MIC Costa Brava, and regional championship fixtures fill the fixture list during Easter and summer windows.\n\nThese tournaments are known for their competitive standard, organisational quality, and the professional infrastructure surrounding them. Squads travelling to Levante routinely play 4–6 competitive fixtures across the window — more than most club tours elsewhere in Europe." },
      { eyebrow: "07 — The Individual Player Development Window", title: "An academy residency for individual players.", content: "Levante's Individual Player Development programme sits inside the Levante Academy structure, open to individual players aged 11–18. Players are assessed on arrival, placed into a training group matched to their level, and train alongside Levante's own academy age groups.\n\nParents are welcome to travel — accommodation is provided both for players and parents. Places are limited per window, and selection is based on a video assessment and discussion with your coaching staff." },
      { eyebrow: "08 — Why Levante", title: "Right for your squad if…", content: "You want maximum flexibility across destinations, timings, and squad structures\n\nYou want the most tournament access during a single window\n\nYou're interested in the Individual Player Development pathway for selected players\n\nYou want parents to be able to travel alongside the squad\n\nYour squad is ready for the highest standard of competition — Valencia is not an introduction to Spanish football, it's an immersion in it.\n\nNot the right fit if your primary goal is the most prestige or the most exclusive academy environment. For that, Benfica is the answer. Levante is the right choice when flexibility, tournament access, and the entire width of the Spanish academy environment matter most." },
    ],
  },
  "exp-betis": {
    title: "Real Betis Academy Experience.",
    eyebrow: "Seville · ES · Andalusian football",
    sub: "A professional football experience in Europe built around one of La Liga's most distinctive playing identities. Train inside Real Betis's academy infrastructure in Seville — and return with a different understanding of the game.",
    location: "Seville · ES",
    facts: [["Country", "Spain"], ["Partner", "Real Betis Balompié"], ["Age", "U7 — U21"], ["From", "£999pp"]],
    img: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=2000&q=80",
    pill: "Application open",
    accent: "Spring window · May 02 — 09 2026",
    summary: "Real Betis Balompié was founded in Seville in 1907. The club plays out of the Estadio Benito Villamarín — one of Spain's largest stadiums with a capacity of over 60,000 — and has built one of Andalusia's most respected youth development systems over decades.\n\nWhat sets Betis apart isn't just the infrastructure. It's the way they play. The club's methodology is built around possession, technical precision, positional intelligence, and creative expression — a style that runs from the first team down through every age group in the academy. It's technically demanding, tactically specific, and fundamentally different from the direct, physical approach that dominates UK football development.\n\nThat contrast is exactly why it's worth the trip.\n\nReal Betis operates two world-class training facilities in Seville. The Ciudad Deportiva Luis del Sol sits in the Los Bermejales neighbourhood and serves as the historic home of both the first team and the full youth academy — multiple pitches, a state-of-the-art gym, cryotherapy facilities, medical support, and stands for 1,300 spectators. The Ciudad Deportiva Rafael Gordillo in Dos Hermanas — opened in 2023 — significantly expands the club's capacity with five natural grass pitches, three hybrid pitches, and dedicated multipurpose facilities. It's one of the most modern academy training complexes in southern Spain.\n\nBallerz Abroad squads train across both sites, coached by Real Betis's own UEFA-licensed academy staff applying the club's methodology directly to your group.\n\nFacility snapshot:\n\nTwo La Liga club training complexes in Seville\nMultiple natural grass and hybrid pitches\nFirst-team standard gym and recovery facilities\nCryotherapy suite and medical support\nCoached by Real Betis academy staff throughout",
    accommodation: {
      name: "4-star team hotel · Seville city centre",
      desc: "Squads are based in a four-star hotel in central Seville, within easy reach of the Real Betis training facility. A dedicated squad floor, daily breakfast and team dinner, plus a team briefing room are reserved for Ballerz Abroad groups. The hotel's location puts players in the heart of Seville — Andalusia's football culture is part of the curriculum.",
      features: ["Squad-floor block booking", "Breakfast + team dinner included", "Dedicated team briefing room", "Central Seville location", "Short coach transfer to Betis cantera", "On-site pool + wellness area"],
      photos: [
        { url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80", cap: "Hotel exterior" },
        { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80", cap: "Pool terrace" },
        { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", cap: "Player rooms" },
        { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80", cap: "Team dining" },
      ],
    },
    sections: [
      { eyebrow: "05 — The Methodology", title: "Possession, precision, and creative expression.", content: "Real Betis's academy philosophy is built on a principle that distinguishes Spanish football at its highest level: the ball is currency. Every decision is made with the ball at your feet.\n\nPossession percentages in Betis training regularly exceed 65%. Technical demands are precise — first touch, body shape, awareness of space. The system requires players to be comfortable in tight spaces, adept at quick combinations, and capable of reading the game while under pressure.\n\nFor UK development squads, that contrast is the entire development value. It's a different footballing language. Your players come home with a fundamentally different understanding of what football at the highest level demands." },
      { eyebrow: "06 — Seville as a Base", title: "Andalusian football culture and a world-class stadium.", content: "Seville is one of Spain's most distinctive cities, and its football identity is deeply embedded in the culture. Real Betis and Sevilla FC represent two different philosophical approaches to Spanish football — and Betis's world is worth experiencing.\n\nEl Estadio Benito Villamarín holds over 60,000 spectators and is one of Spain's most atmospheric stadiums. Walking the city, you're surrounded by football conversation, the local rivalry, and the passion of Andalusian football. It's not a backdrop — it's part of the curriculum." },
      { eyebrow: "07 — The Two Facilities", title: "Training inside La Liga infrastructure.", content: "The Ciudad Deportiva Luis del Sol is the historic home of Betis's academy — multiple natural grass pitches, a professional gym, cryotherapy, medical support, and first-team standard infrastructure.\n\nThe Ciudad Deportiva Rafael Gordillo, opened in 2023, is one of southern Spain's most modern facilities — five natural grass pitches, three hybrid surfaces, and dedicated multipurpose training spaces.\n\nBoth are used across a Betis window. Your squad trains inside La Liga infrastructure under the club's own coaches, applying their methodology directly to your group." },
      { eyebrow: "08 — Who This Is For", title: "Right for your squad if…", content: "You want to expose your players to a technically precise, possession-based playing identity\n\nYour coaching staff want to observe and engage with a Spanish academy methodology built around technical mastery\n\nYou want a distinct alternative to the other Spanish destinations — Betis is different from Levante. Different philosophy, different city, different standard.\n\nYou want the experience of Andalusian football culture and one of Spain's most distinctive stadium environments.\n\nNot the right fit if you want the highest-profile academy or the most global reach. For that, Benfica is the answer. Betis is right when the methodological difference and the cultural immersion in Andalusian football matter most." },
    ],
  },
  "exp-benfica": {
    title: "Benfica Academy Experience.",
    eyebrow: "Lisbon · PT · Seixal training environment",
    sub: "One of the most decorated youth academies in world football. Train inside the Benfica Campus in Lisbon — the same environment that produced Bernardo Silva, Rúben Dias, and João Félix — on a professional football experience abroad built around your squad.",
    location: "Lisbon · PT",
    facts: [["Country", "Portugal"], ["Partner", "SL Benfica"], ["Age", "U7 — U19"], ["From", "£749"]],
    img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2F6ae357e4b18047bd97ef50f4161f3a12?format=webp&width=800&height=1200",
    pill: "By application",
    accent: "Summer window · Jul 12 — 19 2026",
    summary: "The world's most recognised youth academy. Your squad inside it.\n\nSport Lisboa e Benfica was founded in 1904 and is Portugal's most successful football club. But it's the academy — the Benfica Campus — that has made the club a global reference point in player development.\n\nNamed Best Global Academy at the Globe Soccer Awards in both 2015 and 2019, and recognised by Football Talent Scout as the best academy of the last decade, Benfica's youth system operates at a standard that very few clubs in the world match. It has produced over 94 players currently active in top divisions across 49 countries — and since 2015, has generated more than €379 million in transfer profit from academy graduates, more than any other club on the planet including Real Madrid.\n\nThis is not a branded camp experience. It is access to the actual environment where some of European football's most technically complete players were developed.\n\n19 hectares. Nine pitches. One of Europe's finest development facilities.\n\nThe Benfica Campus sits in Seixal, approximately 25 minutes from central Lisbon, and spans 19 hectares of purpose-built football infrastructure. It serves as the daily training base for Benfica's first team, reserve side, and the full youth academy structure.\n\nThe complex includes nine pitches — six natural grass and three artificial surfaces — including a main stadium pitch with seating for over 2,700 spectators. On site: an 86-room hotel, two gymnasiums, a swimming pool and spa, 28 locker rooms, a 360° indoor football laboratory for individual physical assessment, and full medical support.\n\nBallerz Abroad squads train here under Benfica's own UEFA-licensed academy coaches, applying the club's established methodology — the same system used to develop every player in the academy from youth level to the first team.\n\nFacility snapshot:\n\n19-hectare purpose-built campus in Seixal, Lisbon\n9 pitches — 6 natural grass, 3 artificial\n360° indoor football laboratory\nHotel, gymnasium, pool and spa on site\nCoached by Benfica's own UEFA-licensed academy staff",
    accommodation: {
      name: "Crowne Plaza Caparica Lisbon by IHG · Costa da Caparica",
      link: "https://www.ihg.com/crowneplaza/hotels/gb/en/caparica/lispr/hoteldetail",
      linkLabel: "View Crowne Plaza Caparica Lisbon on IHG.com",
      desc: "Squads on the Benfica window stay at the Crowne Plaza Caparica Lisbon by IHG — strategically located near Costa da Caparica, just 15 minutes from Lisbon city centre. The hotel features indoor and outdoor heated swimming pools, a full Wellness Spa (sauna, Turkish bath, treatments), a fully equipped fitness suite, seven conference rooms and the RAIMUNDO Restaurant. A dedicated team floor with full-board service is reserved for Ballerz Abroad groups. Morning transfers run direct to the Benfica Seixal campus.",
      features: ["Costa da Caparica · 15 min from Lisbon", "Crowne Plaza by IHG · four-star", "Indoor + outdoor heated pools", "Full Wellness Spa · sauna + Turkish bath", "Fitness centre · pilates · yoga · aqua aerobics", "7 conference rooms · team suite", "RAIMUNDO Restaurant on site", "~20 min transfer to Seixal campus"],
      photos: [
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8467903272-4x3", cap: "Hotel exterior" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8456254860-4x3", cap: "Rooms" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8730142370-4x3", cap: "Spa" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8730142846-4x3", cap: "Wellness centre" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8431809472-4x3", cap: "RAIMUNDO Restaurant" },
        { url: "https://digital.ihg.com/is/image/ihg/crowne-plaza-caparica-8467903272-2x1", cap: "Hotel overview" },
      ],
    },
    sections: [
      { eyebrow: "05 — The Global Standard", title: "94 players across 49 countries. €379m in transfer profit.", content: "Benfica's academy is not a domestic programme. It's a global reference point. The numbers tell the story: 94 players currently active in top divisions across 49 countries. Since 2015, the academy has generated more transfer profit than any other club on the planet — more than Real Madrid, more than Barcelona, more than anywhere.\n\nThat's not marketing. That's measurable output. Your players train inside a system that produces international players at scale, developed under a methodology that has proved itself across decades." },
      { eyebrow: "06 — The Campus Standard", title: "19 hectares. Nine pitches. State-of-the-art infrastructure.", content: "The Benfica Campus is 19 hectares of purpose-built football infrastructure in Seixal, approximately 25 minutes from central Lisbon. It serves as the daily training base for the first team, reserve side, and full youth academy structure.\n\nNine pitches — six natural grass, three artificial. A main stadium pitch with seating for 2,700 spectators. An 86-room hotel on-site. Two gymnasiums. A 360° indoor football laboratory for individual physical assessment. Full medical support.\n\nYour squad trains alongside Benfica's own players, under Benfica's own UEFA-licensed academy coaches, applying the club's established methodology." },
      { eyebrow: "07 — Lisbon and the Seixal Environment", title: "The capital of Portuguese football. A different culture.", content: "Lisbon is Portugal's capital and cultural heart — a city rebuilt after the 1755 earthquake, now known for its distinctive character, proximity to the Atlantic, and passionate football culture.\n\nThe Benfica Academy is based in Seixal, just outside the city, but the entire experience sits within Portugal's football context. It's a different country, a different footballing tradition, and a different standard than the Spanish destinations. That contrast is intentional and valuable." },
      { eyebrow: "08 — Who This Is For", title: "Right for your squad if…", content: "You want access to the world's most recognised youth academy system\n\nYour squad is ready for the highest standard of competition and training intensity available\n\nYou want to study a methodology that has proved itself across decades and across continents\n\nYou're interested in a different footballing tradition — Portugal has a distinct identity separate from Spain or the Netherlands\n\nNot the right fit if you want the most flexibility, the most tournament access, or the most cultural immersion in a new city. For those, the Spanish destinations or Netherlands are stronger. Benfica is the right choice when access to the world's premier academy environment is the primary goal." },
    ],
  },
  "exp-feyenoord": {
    title: "Feyenoord Academy Experience.",
    eyebrow: "Rotterdam · NL · Eredivisie partner",
    sub: "The Netherlands' most decorated youth academy. Train inside Varkenoord — Feyenoord's purpose-built development complex in Rotterdam — on a professional football experience abroad that exposes your squad to one of European football's most innovative coaching philosophies.",
    location: "Rotterdam · NL",
    facts: [["Country", "Netherlands"], ["Partner", "Feyenoord"], ["Age", "U7 — U19"], ["From", "£999pp"]],
    img: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=2000&q=80",
    pill: "Application open",
    accent: "Pre-season window · Jul — Aug 2026",
    summary: "Feyenoord Rotterdam is one of the three dominant clubs in Dutch football — alongside Ajax and PSV — and has spent decades building one of Europe's most respected youth development systems. The Feyenoord Academy has won the Rinus Michels Award for best youth academy in the Netherlands five times. At the 2014 FIFA World Cup in Brazil, more players from the Feyenoord Academy were active than from any other single academy in the world — eleven former Varkenoord graduates on the pitch in one tournament.\n\nGraduates include Robin van Persie, Giovanni van Bronckhorst, Stefan de Vrij, and a generation of Eredivisie and international players developed entirely through the Rotterdam system. The academy's stated goal is to produce at least half of Feyenoord's senior first team from within — and in recent seasons, it has been delivering on it.\n\nThis is what your squad trains inside.\n\nThe Feyenoord Academy is based at Sportcomplex Varkenoord in Rotterdam — a modern, purpose-built facility opened in 2019 and located directly across from De Kuip, Feyenoord's iconic 51,000-capacity stadium. The first team trains next door. The proximity is deliberate — the academy and the senior environment are designed to feel connected, not separate.\n\nThe complex includes multiple immaculately maintained pitches, a 300m² gym and fitness suite where two teams can train simultaneously, spacious changing rooms, staff offices, meeting rooms, and grandstand seating. It is one of the best-equipped youth training environments in the Netherlands — and it is where Ballerz Abroad squads train.\n\nSessions are delivered by Feyenoord's own KNVB and UEFA-licensed academy coaches, applying the club's development methodology directly to your group.\n\nFacility snapshot:\nSportcomplex Varkenoord, Rotterdam — opened 2019\nMultiple professional-standard pitches\n300m² fitness suite, changing rooms, meeting rooms\nLocated directly adjacent to De Kuip stadium\nCoached by Feyenoord's own academy staff throughout",
    accommodation: {
      name: "Mainport Hotel · Rotterdam Old Harbour",
      link: "https://mainport.1strotterdamhotels.com/en/",
      linkLabel: "Visit mainport.1strotterdamhotels.com",
      desc: "Players stay at Mainport Hotel — a boutique design hotel set on the Maas riverfront in Rotterdam's Old Harbour (Leuvehaven). The hotel's Vitality Spa features an outdoor rooftop pool, sauna, steam room and treatments. 214 contemporary rooms, a riverside restaurant and bar, and direct access to the waterfront. Feyenoord's training complex is a short transfer by coach. Rotterdam's architecture, the waterfront and De Kuip are part of the daily backdrop.",
      features: ["Old Harbour · Leuvehaven, Rotterdam", "Vitality Spa · rooftop pool + sauna", "214 contemporary rooms", "Riverside restaurant + bar", "Full board for travelling squads", "Short transfer to Feyenoord training complex"],
      photos: [
        { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80", cap: "Mainport Hotel exterior" },
        { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80", cap: "Rooftop pool" },
        { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", cap: "Player rooms" },
        { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80", cap: "Riverside restaurant" },
        { url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900&q=80", cap: "Hotel interiors" },
        { url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=900&q=80", cap: "Spa & wellness" },
      ],
    },
    sections: [
      { eyebrow: "05 — The Dutch Methodology", title: "Decision-making first. Everything else follows.", content: "Dutch football's development philosophy is built on a principle that sets it apart from virtually every other major football nation: players learn by making decisions, not by being given answers. Feyenoord's coaches are trained to create situations, not instructions. To allow the wrong decision to happen — and let the player understand why — rather than correcting it before it occurs.\n\nThe result is a generation of players who are tactically intelligent, technically composed under pressure, versatile across positions, and capable of reading the game several moves ahead. It is a style of thinking about football development that is fundamentally different from the English academy model — and for UK development squads, that contrast is the entire point.\n\nYour players will be challenged in ways that don't happen at home. Their first touch, their body shape, their awareness of space before the ball arrives — all of it tested against a standard shaped by a different footballing culture. That exposure is the development value of a Feyenoord tour." },
      { eyebrow: "06 — Tournament Access", title: "The Netherlands in Easter and winter windows.", content: "A Feyenoord-based tour opens up access to the Dutch tournament calendar — including the Netherlands Easter Youth Cup and Winter Cup Holland for squads travelling in those windows.\n\nDutch youth football tournaments are known for their organisational quality, competitive standard, and the intensity of the local opposition. The Netherlands produces disproportionate numbers of professional players for its size — the teams your squad will face in competition reflect that.\n\nNetherlands Easter Youth Cup — Easter window\nWinter Cup Holland — Winter window" },
      { eyebrow: "07 — Rotterdam as a Base", title: "A city worth travelling to.", content: "Rotterdam is the second largest city in the Netherlands and one of Europe's most architecturally distinctive — rebuilt entirely after World War II, the city is known for bold modern design, a working harbour, and a cultural identity that is direct, proud, and distinctly different from Amsterdam.\n\nFor squads who want a European football experience that doesn't feel like a standard sun-and-Spanish-pitches tour, Rotterdam is a genuinely different proposition. The city is compact and walkable, the football culture is deeply embedded, and De Kuip — one of the most atmospheric stadiums in European football — is right outside the training complex." },
      { eyebrow: "08 — Who This Is For", title: "Right for your squad if…", content: "You want to expose your players to the Dutch development philosophy — one of the most analytically rigorous and technically demanding approaches to youth football in the world\n\nYour coaching staff want to observe and engage with a methodology built around player decision-making rather than prescriptive instruction\n\nYou're looking for a professional football experience abroad that is culturally and stylistically distinct from the Spanish destinations — a different country, a different footballing language\n\nYou want access to Dutch tournament football during the Easter or winter window\n\nNot the right fit if your primary goal is maximum warm-weather tournament access. For that, the Spanish destinations are the stronger base. Feyenoord is the right choice when the Dutch footballing identity — and the challenge it presents — is the objective." },
    ],
  },
};

function Detail({ onNavigate, expId = "exp-levante" }) {
  const d = EXP_DATA[expId] || EXP_DATA["exp-levante"];
  return (
    <>
      <Nav active={expId} onNavigate={onNavigate} />

      {/* DETAIL HERO */}
      <section className="hero" style={{ minHeight: "85vh" }}>
        <div className="hero__img" style={{ backgroundImage: `url(${d.img})` }}></div>
        <div className="hero__grain"></div>
        <div className="hero__gradient"></div>
        <div className="hero__meta">
          <span>{d.location.toUpperCase()}</span>
          <span><strong>{d.pill.toUpperCase()}</strong></span>
          <span>{d.accent.toUpperCase()}</span>
        </div>
        <div className="hero__inner">
          <div className="hero__eyebrow">
            <div className="hero__eyebrow-rule"></div>
            <div className="hero__eyebrow-text">{d.eyebrow}</div>
          </div>
          <h1 className="display-xl">{d.title}</h1>
          <div className="hero__sub">{d.sub}</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for this experience →</button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("detail")}>View all experiences</button>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            {d.facts.map(([l, v], i) => (
              <StatCell key={l} n={v} label={l} accent={i === 3} />
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>01 — The environment</EyebrowBar>
          <h2 className="section-h">What this is.</h2>
          <div className="section-lead">{d.summary}</div>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>02 — Itinerary</EyebrowBar>
          <h2 className="section-h">Seven days, seven standards.</h2>
          <div className="section-lead">An indicative schedule — your final itinerary is built around squad age, training load, and your club's specific goals.</div>
          <div className="itin">
            <div className="itin-day"><div className="itin-day__n">DAY 01</div><div><div className="itin-day__title">Arrival · Kit handover · Stadium walk-in</div><div className="itin-day__time">14:00 – 22:00</div></div><div className="itin-day__desc">Squad transfer from the airport. Hotel check-in. Kit handover at the team room — match shirt, training kit, recovery wear. Evening walk-in at the partner club's stadium.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 02</div><div><div className="itin-day__title">Session 01 · Possession & shape</div><div className="itin-day__time">09:30 — 11:30 / 16:00 — 17:30</div></div><div className="itin-day__desc">Double-session under partner-club academy coaches. Morning technical block; afternoon shape, pressing triggers, video debrief.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 03</div><div><div className="itin-day__title">Fixture 01 · Partner academy XI</div><div className="itin-day__time">19:30 KO</div></div><div className="itin-day__desc">First fixture, floodlit. Pre-match meal, tunnel walk, full matchday environment. Post-match recovery + debrief on the bus.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 04</div><div><div className="itin-day__title">Recovery · Behind-the-scenes</div><div className="itin-day__time">10:00 — 18:00</div></div><div className="itin-day__desc">Pool recovery. Media room access. Q&A with academy first-team coach. Free evening in town.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 05</div><div><div className="itin-day__title">Session 02 · Set-piece masterclass</div><div className="itin-day__time">10:00 — 12:30</div></div><div className="itin-day__desc">Set-piece detail under specialist coach — attacking and defending corners, free-kick rotations. Video first, pitch second.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 06</div><div><div className="itin-day__title">Fixture 02 · Regional select XI</div><div className="itin-day__time">11:00 KO</div></div><div className="itin-day__desc">A curated regional select side. Same matchday standard. Different test.</div></div>
            <div className="itin-day"><div className="itin-day__n">DAY 07</div><div><div className="itin-day__title">Fixture 03 · Wheels-up</div><div className="itin-day__time">10:00 KO · 19:00 dep</div></div><div className="itin-day__desc">Final fixture before lunch. Debrief in the team room. Transfer to the airport. Wheels-up at sunset.</div></div>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>03 — Included</EyebrowBar>
          <h2 className="section-h">What's in the experience.</h2>
          <div className="callout-grid">
            <div className="cell"><div className="cell__n">01</div><div className="cell__t">Partner facility access</div><div className="cell__d">Daily access to partner-club training pitches, gym, recovery suite.</div></div>
            <div className="cell"><div className="cell__n">02</div><div className="cell__t">Pro coaching staff</div><div className="cell__d">Sessions delivered by partner-club academy coaches.</div></div>
            <div className="cell"><div className="cell__n">03</div><div className="cell__t">Contested fixtures</div><div className="cell__d">Matchday environments against academy-level opposition.</div></div>
            <div className="cell"><div className="cell__n">04</div><div className="cell__t">Full kit pack</div><div className="cell__d">Match shirt, training kit, recovery wear — kept by every player.</div></div>
            <div className="cell"><div className="cell__n">05</div><div className="cell__t">Accommodation + ground transport</div><div className="cell__d">Team accommodation with squad-floor allocation. Ground transfers included.</div></div>
            <div className="cell"><div className="cell__n">06</div><div className="cell__t">Camp lead + media</div><div className="cell__d">Dedicated UK camp lead. Daily content drop — Instagram, TikTok, parents.</div></div>
          </div>
        </div>
      </section>

      {/* ACCOMMODATION ---------------------------------------------------- */}
      {d.accommodation && (
        <section className="band" style={{ background: "var(--ink-800)", borderTop: "1px solid rgba(246,243,235,0.08)", borderBottom: "1px solid rgba(246,243,235,0.08)" }}>
          <div className="wrap">
            <EyebrowBar>04 — Accommodation</EyebrowBar>
            <div className="exp-detail-accommodation" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'Archivo', system-ui, sans-serif", fontWeight: 800, fontSize: 28, lineHeight: 1.2, letterSpacing: "-0.01em", color: "#F6F3EB", marginBottom: 12, textTransform: "none" }}>{d.accommodation.name}</div>
                {d.accommodation.link && (
                  <a href={d.accommodation.link} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.16em", color: "#DAFE3D", textTransform: "uppercase", border: "none", marginBottom: 18 }}>{d.accommodation.linkLabel} →</a>
                )}
                <div style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontSize: 17, lineHeight: 1.65, color: "#9CA4AC", marginTop: 8 }}>{d.accommodation.desc}</div>
                <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 10 }}>
                  {d.accommodation.features.map((f, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 14 }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.18em", color: "#DAFE3D", textTransform: "uppercase", flexShrink: 0 }}>●</span>
                      <span style={{ fontFamily: "'Manrope', system-ui, sans-serif", fontSize: 15, color: "#F6F3EB" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="exp-detail-photos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                  {d.accommodation.photos.slice(0, 6).map((p, i) => (
                    <div key={i} className={i === 0 ? "exp-detail-photos-first" : ""} style={{ position: "relative", aspectRatio: i === 0 ? "16/9" : "4/3", gridColumn: i === 0 ? "span 2" : "span 1", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${p.url})`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      ></div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 12px", background: "linear-gradient(to top, rgba(5,6,8,0.7), transparent)", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--chalk-50)", textTransform: "uppercase" }}>{p.cap}</div>
                    </div>
                  ))}
                </div>
                {d.accommodation.photos.length > 6 && (
                  <div className="exp-detail-photos-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 8 }}>
                    {d.accommodation.photos.slice(6).map((p, i) => (
                      <div key={i} style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden" }}>
                        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${p.url})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "6px 10px", background: "linear-gradient(to top, rgba(5,6,8,0.7), transparent)", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.16em", color: "var(--chalk-50)", textTransform: "uppercase" }}>{p.cap}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* EXTENDED SECTIONS */}
      {d.sections && d.sections.map((sec, i) => (
        <section key={i} className="band">
          <div className="wrap">
            <EyebrowBar>{sec.eyebrow}</EyebrowBar>
            <h2 className="section-h">{sec.title}</h2>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 16, lineHeight: 1.7, color: "var(--stand-200)", maxWidth: 900 }}>
              {sec.content.split('\n\n').map((para, idx) => (
                <p key={idx} style={{ marginBottom: 16 }}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* OTHER EXPERIENCES */}
      <section className="band">
        <div className="wrap">
          <EyebrowBar>05 — Other experiences</EyebrowBar>
          <h2 className="section-h">More ways to travel.</h2>
          <div className="exp-grid" style={{ marginTop: 32 }}>
            {EXPERIENCES.filter(e => e.id !== expId).map(e => (
              <ExpCard
                key={e.id}
                image={(EXP_DATA[e.id] || {}).img}
                meta={e.loc.toUpperCase()}
                title={e.label}
                pill={(EXP_DATA[e.id] || {}).pill}
                onClick={() => onNavigate(e.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>06 — Apply</div></div>
            <h2 className="section-h">Apply for {d.title.replace(".", "")}</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>Tell us about your squad. We respond within two working days with a tailored brief — or open a discovery call.</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Start an application →</button>
              <a className="btn btn--ghost btn--lg" href="tel:07867205763" style={{ textDecoration: "none", color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>07867 205763</a>
            </div>
          </div>
          <div>
            <div className="app-band__steps">
              <div className="app-step"><div className="app-step__n">●</div><div><div className="app-step__t">{d.pill}</div><div className="app-step__d">{d.accent}</div></div></div>
              <div className="app-step"><div className="app-step__n">04</div><div><div className="app-step__t">Squads taken so far</div><div className="app-step__d">2 of 4 confirmed · 1 under review · 1 open.</div></div></div>
              <div className="app-step"><div className="app-step__n">£</div><div><div className="app-step__t">{d.facts.find(f => f[0] === "From") ? d.facts.find(f => f[0] === "From")[1] : "POA"}</div><div className="app-step__d">Indicative, all-in. Final price built around your squad size.</div></div></div>
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

window.Detail = Detail;
window.EXP_DATA = EXP_DATA;
