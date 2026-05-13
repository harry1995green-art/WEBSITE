// Tournament detail page — single tournament deep-dive, parametrised by id.

// Shared Duinrell Wassenaar accommodation block for Dutch tournaments
const DUINRELL_ACCOM = {
  name: "Duinrell · Wassenaar, Netherlands",
  link: "https://www.duinrell.nl/en/",
  linkLabel: "Visit Duinrell.nl",
  desc: "Tournament squads stay at Duinrell — a renowned holiday park in Wassenaar, near The Hague, ideally positioned for the tournament venues. Players are accommodated in comfortable holiday bungalows set within Duinrell's extensive woodland grounds. The park features indoor and outdoor pools, a waterpark, sports facilities, restaurants and on-site catering — everything a squad needs between fixtures.",
  features: ["Woodland bungalows · group allocation", "Indoor + outdoor pools", "On-site waterpark + sports facilities", "Restaurants and catering on site", "Close to tournament venues · short transfers", "Ideal recovery environment between fixtures"],
  photos: [
    { url: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=900&q=80", cap: "Pool facilities" },
    { url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=900&q=80", cap: "Resort grounds" },
    { url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900&q=80", cap: "Bungalow accommodation" },
    { url: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80", cap: "On-site dining" },
  ],
};

// Shared Cambrils Park accommodation block used by 4 Spain tournaments
const CAMBRILS_ACCOM = {
  name: "Cambrils Park Resort · Cambrils, Costa Daurada",
  link: "https://www.cambrilspark.com/en/accommodations/",
  linkLabel: "Visit cambrilspark.com to explore accommodation",
  desc: "Tournament squads are based at Cambrils Park Resort — a family resort complex ideally located close to all tournament venues on the Costa Daurada. Players stay in comfortable villas and apartments (4–6 persons, all with kitchen, lounge and private bathroom). The resort features several swimming pools, a sports centre, crazy golf, tennis, football pitches and trampolining. Restaurants, shops and bars are all on site. The resort's proximity to the tournament pitches means short daily transfers and maximum recovery time between fixtures.",
  features: ["Villas + apartments · 4–6 persons · private bathroom", "Multiple swimming pools + sports facilities", "Football, tennis, trampolining on site", "Restaurants, bars and shops on resort", "Close to all tournament venues · short transfers", "Group allocation for travelling squads"],
  photos: [
    { url: "assets/cambrils-1.avif", cap: "Cambrils Park Resort" },
    { url: "assets/cambrils-2.avif", cap: "Resort grounds" },
    { url: "https://www.cambrilspark.com/data/webp/0306---bungalow-2-habitaciones-38f5d8f54dbce77c09216a276dc850b8-9172b32661376503cc9fd3e15e617f8f.webp", cap: "Bungalow accommodation" },
    { url: "https://www.cambrilspark.com/data/webp/0303---apartamento-2-habitaciones-0f49221e4e457e09abb9833fdc99a0c1-11c21bbe84a0809d0d2be39ced9076ea.webp", cap: "Apartment interiors" },
    { url: "assets/cambrils-extra.jfif", cap: "Pool area" },
    { url: "https://www.cambrilspark.com/data/webp/0402---villa-adaptado-2-habitaciones-a990a04ff035991ca484885dbf112a51-888599c74d0617612bfdba9b5e255b7b.webp", cap: "Villa exteriors" },
  ],
};

const TOURNAMENT_DATA = {
  "tour-mic-costa-brava": {
    name: "MIC Costa Brava.",
    eyebrow: "Tournament · Spain · Costa Brava",
    sub: "The reference youth football tournament in Europe. Over 400 teams. More than 40 countries. Easter week on the Costa Brava — and the most competitive youth football environment your players will face all season.",
    location: "Costa Brava · ES",
    facts: [["Country", "Spain"], ["Window", "28 Mar — 04 Apr 2026"], ["Age", "U10 — U19"], ["Teams", "400+"]],
    img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=2000&q=80",
    pill: "2026 entries open",
    accent: "Finals played at RCDE Stadium",
    summary: "Over 400 teams from more than 40 countries compete across nearly 900 matches on 59 pitches spread across the Girona region and Costa Brava coastline.",
    accommodation: CAMBRILS_ACCOM,
    sections: [
      {
        eyebrow: "01 — What Is MIC",
        title: "Not just a tournament. The tournament.",
        content: `The Mediterranean International Cup — MIC — has been running every Easter on the Costa Brava since 2001. Now in its 24th edition, it has become the single most referenced youth football tournament in Europe. Over 400 teams from more than 40 countries compete across nearly 900 matches on 59 pitches spread across the Girona region and Costa Brava coastline.

The clubs that show up tell the story. FC Barcelona, Real Madrid, Liverpool, Manchester United, Ajax, AC Milan, PSG, Atlético Madrid — the full spectrum of European academy football, alongside national youth teams and development programmes from the Americas, Asia, and Africa. This is not a regional competition or a prestige trip. It is the most contested youth tournament on the European calendar, and the standard reflects it.

Players who have competed at MIC as youth footballers include Lamine Yamal, Cole Palmer, Rodri, Marcus Rashford, Pedri, Dani Carvajal, Lionel Messi, and Neymar. The tournament is what it says it is.`,
      },
      {
        eyebrow: "02 — Format",
        title: "How it works.",
        content: `MIC runs over five days during Easter week across the Costa Brava — from Lloret de Mar to Roses — with matches played on natural grass and high-quality artificial pitches across 43 municipalities in the Girona region.

Group stage: Teams are drawn into groups of four and play a round-robin format. The top two from each group progress to the final knockout rounds. Teams finishing third and fourth enter a consolation competition — meaning every team is guaranteed football throughout the tournament, not just the top sides.

Knockout rounds: Quarterfinals, semifinals, and finals are played across the final two days, with finals hosted at the main stadiums in Palamós and Figueres.

Minimum matches: Every team is guaranteed a minimum of four matches. Finalists can play up to nine.

Age categories: U12 · U13 · U14 · U15 · U16 · U18 · U19 · Girls U16`,
      },
      {
        eyebrow: "03 — Why It Matters for UK Academies",
        title: "The standard your players won't get at home.",
        content: `UK development football is physically competitive and tactically organised. MIC is technically elite and tactically varied — a tournament where your players will face Spanish academy sides built on positional play, Dutch teams with a decision-making philosophy, South American squads with technical creativity, and African sides with pace and intensity that is entirely different from anything in the domestic calendar.

In a single week, your players will encounter more different styles of football than in an entire domestic season. That exposure — the discomfort of it, the adaptation required, the moments where what they know stops working — is the development value. Coaches consistently report that players return from MIC with a sharper understanding of the game and a clearer picture of the standard they are working towards.

The best squads don't come to MIC just to win it. They come to be tested by it.`,
      },
      {
        eyebrow: "04 — The Location",
        title: "Easter week on the Costa Brava.",
        content: `The Costa Brava is one of Catalonia's most distinctive stretches of Mediterranean coastline — a region of fishing towns, rocky coves, clear water, and unhurried pace. The tournament is spread across the Girona region, with accommodation areas in Lloret de Mar, Platja d'Aro, Roses, L'Estartit, and Palamós, depending on age category.

Barcelona is approximately 100 kilometres away — reachable in under 90 minutes for squads who want to build a day trip into the itinerary. Girona itself, with its medieval walls and old town, is right in the middle of the tournament area.

For players, the combination of competitive football and a genuinely beautiful part of Spain makes MIC unlike any domestic tournament experience. For parents travelling with the squad, the Costa Brava during Easter is somewhere worth being.`,
      },
      {
        eyebrow: "05 — How Ballerz Abroad Builds a MIC Tour",
        title: "Entry is just the starting point.",
        content: `Ballerz Abroad secures your tournament entry, manages accommodation across the correct area for your age category, handles all ground transfers between pitches and accommodation, and provides a dedicated tour lead with your squad throughout.

More importantly, we build the days before the tournament around your squad's preparation. A typical MIC tour with Ballerz Abroad looks like this:

Days 1–2 — Arrival in Spain, settle in, first training sessions inside a partner club environment
Days 3–4 — Professional training at Levante UD or a Catalonia-based partner facility
Days 5–9 — MIC Costa Brava competition (five tournament days)
Day 10 — Departure

Arriving at MIC having trained properly inside a professional environment that week changes what your players are able to do when the competition starts. It is the difference between showing up and being ready.`,
      },
      {
        eyebrow: "06 — Who This Is For",
        title: "Right for your squad if…",
        content: `You're running an academy or development programme and your players are ready to be tested against European-standard opposition across multiple styles of play

You want the most competitive overseas football tournament available in the Easter window

You're looking to combine a professional training environment in Spain with the most prestigious youth tournament entry in Europe

Your players need a performance reference point — something to measure themselves against at the top end

Not the right fit for squads at very early grassroots level entering their first overseas tournament. For those groups, Copa Daurada or Mare Nostrum Cup offer a better starting level and a more appropriate environment. We will tell you honestly which tournament fits your squad.`,
      },
      {
        eyebrow: "07 — Also in the MIC Family",
        title: "Can't make Easter? There's a winter option.",
        content: `MIC Punta Cana — The MIC format, transposed to the Dominican Republic. Runs in late June across a 125,000m² sports complex at Cap Cana, with teams staying in four and five-star all-inclusive hotels. U12–U16 boys and girls U16. A genuine alternative for squads who can't travel at Easter or who want the MIC experience in a different window.`,
      },
    ],
  },
  "tour-copa-daurada": {
    name: "Copa Daurada.",
    eyebrow: "Tournament · Spain · Costa Daurada",
    sub: "Five days of international tournament football on the Costa Daurada. Over 90 teams from across Europe. Salou, Spain — Easter and summer windows available.",
    location: "Salou · ES",
    facts: [["Country", "Spain"], ["Windows", "Easter & Summer 2026"], ["Age", "U8 — U16"], ["Teams", "90+"]],
    img: "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=2000&q=80",
    pill: "Two windows available",
    accent: "Beachside basing · FIFA-grade pitches",
    summary: "Copa Daurada is an international youth football tournament held in Salou on the Costa Daurada with two windows per year — Easter and summer.",
    accommodation: CAMBRILS_ACCOM,
    sections: [
      {
        eyebrow: "01 — What Is Copa Daurada",
        title: "International tournament football in the best possible setting.",
        content: `The Copa Daurada is an international youth football tournament held in Salou on the Costa Daurada — a stretch of Mediterranean coastline about 100 kilometres south-west of Barcelona. It runs over five days and brings together more than 90 teams from across Europe, competing across grassroots and academy brackets on one of the most modern multi-pitch sports facilities in Spain.

Where MIC Costa Brava is the benchmark for elite academy competition, Copa Daurada occupies a different and equally important space — a high-quality international tournament that is genuinely accessible across ability levels, from grassroots clubs entering their first overseas tournament to development squads looking for competitive European football in a well-organised environment.

Two windows are available: Easter and summer. Both run from the same venue in Salou. Both offer the same format and standard. The window you choose depends on your squad's calendar.`,
      },
      {
        eyebrow: "02 — Format",
        title: "How it works.",
        content: `Copa Daurada is played across eight adjacent natural grass, hybrid, and artificial pitches at the Futbol Salou Sports Center — all on the same site, meaning no long transfers between matches. Everything happens in one place.

Group stage: Teams are drawn into groups of four and play a round-robin format. The top two from each group advance to the Gold Phase final rounds. Third and fourth-placed teams enter a Playoff B — meaning every team is guaranteed football throughout and no squad is simply eliminated after the group stage.

Minimum matches: Every team is guaranteed a minimum of four matches across the tournament.

Match format:
F11 (11-a-side): Two halves of 25 minutes
F7 (7-a-side): Two halves of 20 minutes

Age categories: U8 · U10 · U12 · U14 · U16 · Girls categories available

Windows:
Easter Edition — April 2026 · Salou, Costa Daurada
Summer Edition — May 2026 · Salou, Costa Daurada`,
      },
      {
        eyebrow: "03 — Why Copa Daurada Works for UK Squads",
        title: "The right level. The right environment. The right trip.",
        content: `Not every squad is ready for MIC. Not every club should be entering their players into the most competitive youth tournament in Europe on their first overseas football tour. Copa Daurada is the honest answer for squads who want genuine international competition — teams from 15 or more countries, a properly structured tournament, a professional facility — without the step up in opposition standard that MIC demands.

For grassroots clubs running their first overseas tour, Copa Daurada delivers everything that matters: international competition, a great location, a well-organised event, and a format that guarantees your players are still playing on the final day regardless of group stage results.

For academies using Copa Daurada as part of a broader Spain tour, it works perfectly as a competition element alongside training sessions at a partner club earlier in the week — giving players a context to apply what they've worked on in training.

We'll tell you honestly which tournament fits your squad. Copa Daurada is frequently the right answer.`,
      },
      {
        eyebrow: "04 — Salou and the Costa Daurada",
        title: "The location does a lot of the work.",
        content: `Salou is a Mediterranean resort town sitting directly on the Costa Daurada coastline — fine sandy beaches, warm April weather, and a relaxed atmosphere that makes the days between matches feel like a genuine trip rather than just football logistics.

Everything in Salou is walkable. The tournament facility, accommodation, beaches, and the town itself are all within easy reach on foot. For squads travelling with parents, it removes the common tournament stress of long transfers and unfamiliar logistics.

Barcelona is 100 kilometres away — close enough for a day trip if your itinerary has space. PortAventura, one of Europe's largest theme parks, is right next door to Salou for squads who want to build an off-pitch activity into the programme.

For younger age groups particularly, Salou as a location lands well with players and parents in equal measure.`,
      },
      {
        eyebrow: "05 — How Ballerz Abroad Builds a Copa Daurada Tour",
        title: "More than tournament entry.",
        content: `Ballerz Abroad secures your entry, manages accommodation in Salou, arranges all ground transfers, and provides a dedicated tour lead with your squad throughout. Half-board meals are typically included within the tournament package — breakfast and dinner provided, with catering available at the venue during match days.

A typical Copa Daurada tour with Ballerz Abroad:

Days 1–2 — Arrival in Spain, professional training sessions at a partner club
Days 3–7 — Copa Daurada competition, five full tournament days in Salou
Day 8 — Departure

As with all Ballerz Abroad tours, the training days before the tournament are built around your squad's objectives — not added as an afterthought. Your players arrive at Copa Daurada having already trained in a professional environment that week.`,
      },
      {
        eyebrow: "06 — Who This Is For",
        title: "Right for your squad if…",
        content: `You're organising a first overseas football tour and want a well-structured international tournament that is competitive without being the most demanding environment available

You have a mixed-ability or mixed-age group and need a tournament with accessible brackets across different levels

You're travelling with younger age groups — U8 through U14 — where the environment and experience matter as much as the opposition standard

You want an Easter or summer window in Spain with a great location that works for players and parents alike

You're an academy using tournament football as part of a broader Spain-based development programme

Copa Daurada sits in a different bracket from MIC — deliberately so. If your squad is at the top end of their domestic pathway and ready to face European academy opposition, we'll point you towards MIC. If Copa Daurada is the right fit, we'll tell you that too.`,
      },
      {
        eyebrow: "07 — Also Available in Spain",
        title: "Other tournament options from the Ballerz Abroad network.",
        content: `MIC Costa Brava — The reference European academy tournament. Easter window. 400+ teams, 40+ countries. For squads at the top end of their development pathway.

Mare Nostrum Cup — U8–U19 international field. Catalonia, Mediterranean coast. Easter window.

Levante UD International Cup — Hosted by our La Liga partner club in Valencia.`,
      },
    ],
  },
  "tour-mare-nostrum": {
    name: "Mare Nostrum Cup.",
    eyebrow: "Tournament · Spain · Costa Daurada",
    sub: "One of Spain's largest international youth football tournaments. Over 480 teams at Easter. U8 through U19, boys and girls. Salou on the Costa Daurada — one hour from Barcelona.",
    location: "Salou · ES",
    facts: [["Country", "Spain"], ["Window", "Easter & Summer 2026"], ["Age", "U8 — U19"], ["Teams", "480+"]],
    img: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=2000&q=80",
    pill: "Large-scale tournament",
    accent: "Opening ceremony · 3,000 players",
    summary: "Mare Nostrum is one of the biggest international youth football tournaments in Spain with over 480 teams at Easter and more than 10,000 players from across Europe and beyond.",
    accommodation: CAMBRILS_ACCOM,
    sections: [
      {
        eyebrow: "01 — What Is the Mare Nostrum Cup",
        title: "Scale, range, and twenty years of organisation behind it.",
        content: `The Mare Nostrum Cup has been running for over twenty years and has grown into one of the biggest international youth football tournaments in Spain. At Easter, over 480 teams and more than 10,000 players from across Europe, the Americas, and beyond descend on Salou for four days of competition. A summer edition follows with over 200 teams for squads who can't make the Easter window.

The tournament covers one of the widest age ranges available anywhere on the European youth football calendar — from U8 all the way through to U19, with categories for both boys and girls across multiple brackets. Whatever age group you're travelling with, there is a category for your squad.

Mare Nostrum is organised by a company with over two decades of football event experience. The logistics are reliable, the facilities are world-class, and the opening parade along Salou's Passeig Jaume I — 3,000 young players carrying club and national flags through the streets — sets a tone that no domestic cup weekend can match.`,
      },
      {
        eyebrow: "02 — Format",
        title: "How it works.",
        content: `All matches are played at the Futbol Salou Sports Center — the Mediterranean Sports Hub — a purpose-built complex with 12 full-size pitches, over 20 changing rooms, a mini-stadium with seating for 1,000 spectators, and professional-standard natural grass, hybrid, and artificial surfaces. Everything on one site.

Group stage: Teams are drawn into groups of four playing a round-robin format. Group winners advance to the Gold Final Stage. Runners-up enter the Silver Stage. Remaining teams continue in consolation rounds — meaning every squad plays throughout the tournament, not just the top sides.

Minimum matches: Every team is guaranteed a minimum of four matches.

Dates:
Easter Edition — 2nd–5th April 2026 · Salou, Costa Daurada
Summer Edition — available for squads unable to travel at Easter

Age categories:
Boys: U8 · U10 · U12 · U14 · U16 · U19
Girls: U12 · U14 · U16 · U19`,
      },
      {
        eyebrow: "03 — How Mare Nostrum Sits in the Landscape",
        title: "The right tournament for a wide range of squads.",
        content: `The Spanish tournament calendar offers options at different levels. Understanding where Mare Nostrum sits helps you choose the right one for your group.

MIC Costa Brava is Europe's most competitive elite academy tournament. The opposition includes La Liga, Bundesliga, and Premier League youth sides alongside national teams. It is the highest-standard entry in the Ballerz Abroad network and demands squads at the top end of their development pathway.

Copa Daurada is a well-organised, accessible tournament with around 90 teams and a strong community feel. Right for grassroots clubs and younger age groups on a first overseas tour.

Mare Nostrum sits between the two. With 480+ teams at Easter, the field is broad enough to accommodate a range of levels — from grassroots clubs stepping up to international competition through to development squads wanting contested football against varied European and international opposition. It is the largest tournament in Salou and the one with the widest bracket across age groups.

If you are travelling with multiple age groups and need a single tournament entry point that covers U8s through to U19s in one location, Mare Nostrum is the answer.`,
      },
      {
        eyebrow: "04 — The Opening Ceremony",
        title: "It starts before a ball is kicked.",
        content: `One of the things that sets Mare Nostrum apart from the competition is the opening ceremony. Over 3,000 players representing more than 400 clubs and nations parade along Salou's seafront promenade — the Passeig Jaume I — carrying their club colours, cheered by families and locals lining the route.

For younger players in particular, this moment lands differently than anything in the domestic calendar. It signals clearly that this is something bigger than a weekend tournament — an international event they are genuinely part of.`,
      },
      {
        eyebrow: "05 — Salou and the Costa Daurada",
        title: "The location delivers on and off the pitch.",
        content: `Salou is Mare Nostrum's permanent home and one of the best tournament locations in Spain for travelling squads. The Mediterranean Sports Hub sits within walking distance of the town centre, the beach, and accommodation options ranging from resort hotels to apartments depending on your group's budget and preferences.

Barcelona is one hour away. PortAventura, one of Europe's largest theme parks, is immediately adjacent to Salou and a consistent highlight for squads with a day off between matches. The Costa Daurada coastline — golden beaches, calm Mediterranean water, warm April weather — does the rest.

For clubs where parents travel with the squad, Salou makes the logistics easy and the experience genuinely worthwhile for everyone who makes the trip.`,
      },
      {
        eyebrow: "06 — How Ballerz Abroad Builds a Mare Nostrum Tour",
        title: "Tournament entry is the centrepiece. The week around it is what we build.",
        content: `Ballerz Abroad secures your entry into the correct age category, manages accommodation in Salou, coordinates all ground transfers, and provides a dedicated tour lead throughout. The days before the tournament are built around your squad — professional training sessions at a partner club in Spain, then into Mare Nostrum ready to compete.

A typical Mare Nostrum tour with Ballerz Abroad:

Days 1–2 — Arrival in Spain, settle in, professional training sessions at a partner club
Days 3–6 — Mare Nostrum Cup competition, Salou
Day 7 — Departure

Clubs travelling with multiple age groups get a single point of contact managing all brackets simultaneously. No juggling multiple providers. One brief, one lead, one tour.`,
      },
      {
        eyebrow: "07 — Who This Is For",
        title: "Right for your squad if…",
        content: `You're travelling with multiple age groups and need a single tournament that covers U8 through to U19 in one location

You want a large-scale, well-organised international tournament with a genuine festival atmosphere — not just a series of fixtures

Your squad is at grassroots or development level and you want broad international competition rather than the most elite field available

You want the Easter window in Spain with a proven, reliable tournament organiser behind it

Girls football is part of your programme — Mare Nostrum has strong girls categories across U12 to U19

Not sure whether Mare Nostrum, Copa Daurada, or MIC is right for your group? Tell us your squad details and we'll give you an honest recommendation.`,
      },
      {
        eyebrow: "08 — Other Tournament Options in Spain",
        title: "More from the Ballerz Abroad tournament network.",
        content: `MIC Costa Brava — Europe's most prestigious elite academy tournament. 400+ teams, 40+ countries. Easter window.

Copa Daurada — Accessible international tournament in Salou. Easter and summer windows. Best for grassroots and younger age groups.

Levante UD International Cup — Hosted by our La Liga partner club in Valencia.`,
      },
    ],
  },
  "tour-cruyff": {
    name: "Cruyff Tournament.",
    eyebrow: "Amsterdam · Netherlands · Invitational",
    sub: "Hosted in the spirit of the Cruyff philosophy — possession-first, technically demanding football.",
    accommodation: CAMBRILS_ACCOM,
    location: "Amsterdam · NL",
    facts: [["Country", "Netherlands"], ["Window", "Spring 2026"], ["Age", "U10 — U17"], ["Format", "Invitational"]],
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=2000&q=80",
    pill: "Invitational only",
    accent: "Dutch academy field",
    summary: "An invitational field of Dutch and European academy sides. The Cruyff Tournament is technical, possession-led football at the highest youth level — entry is restricted, level is the only criterion.",
  },
  "tour-levante-cup": {
    name: "Levante UD International Cup.",
    eyebrow: "Valencia · ES · Hosted by our partner La Liga club",
    sub: "The home tournament of our partner club. Played across Levante UD's Ciutat Esportiva.",
    location: "Valencia · ES",
    facts: [["Country", "Spain"], ["Window", "May 2026"], ["Age", "U12 — U19"], ["Host", "Levante UD"]],
    img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=2000&q=80",
    pill: "Direct entry",
    accent: "Restricted field · Full pro environment",
    summary: "Levante UD opens its own academy facilities to a restricted international field every May. Ballerz Abroad holds direct entries. League-format group stage, single-elimination finals — all inside the Ciutat Esportiva.",
    accommodation: {
      name: "Global-Levante UD International Residence · L'Eliana, Valencia",
      link: "https://www.globalfootballtotal.com/en/facilities/",
      linkLabel: "View facilities at globalfootballtotal.com",
      desc: "Tournament squads stay at the official Global-Levante UD International Residence — the same campus used for the Levante Academy Experience. Located in L'Eliana in the Valencian community, the 23,000 m² site houses up to 120 players with private bathrooms, dining room (breakfast, lunch and dinner), swimming pool, gymnasium, crossfit area, padel courts, tennis courts, cafeteria, games room and 24-hour surveillance.",
      features: ["Up to 120 players · private bathrooms", "Full board (breakfast, lunch & dinner)", "Swimming pool + sports centre", "Gymnasium · crossfit · padel · tennis", "24-hour surveillance + tutoring service", "Direct bus transfer to Levante UD Ciutat Esportiva"],
      photos: [
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Edificio-Residencia.jpg", cap: "Residence building" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Area-Exterior.jpg", cap: "Exterior grounds" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Piscina.jpg", cap: "Swimming pool" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Comedor.jpg", cap: "Dining room" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Campo-1er-Equipo.jpg", cap: "Training pitch" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/GYM.jpg", cap: "Gymnasium" },
      ],
    },
  },
  "tour-mic-punta-cana": {
    name: "MIC Punta Cana.",
    eyebrow: "Dominican Republic · Winter window",
    sub: "MIC format, Caribbean staging. The Christmas-break alternative for squads who want a tropical fixture programme.",
    location: "Punta Cana · DR",
    facts: [["Country", "Dominican Republic"], ["Window", "Dec / Jan 2026"], ["Age", "U10 — U18"], ["Format", "MIC bracket"]],
    img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=2000&q=80",
    pill: "Winter window",
    accent: "Long-haul · Beach resort basing",
    summary: "The MIC format, exported to the Caribbean. Winter-window staging in Punta Cana with beach-resort basing. Long-haul travel — built for squads with the appetite for a Christmas-break programme.",
  },
  "tour-easter-youth-cup": {
    name: "Netherlands Easter Youth Cup.",
    eyebrow: "Wassenaar · Netherlands · Easter window",
    sub: "One of the Netherlands' most established international youth tournaments. Hosted at Duinrell Wassenaar — drawing clubs from across Europe.",
    location: "Wassenaar · NL",
    facts: [["Country", "Netherlands"], ["Window", "Apr 7 — 10 2026"], ["Format", "Group + KO"], ["Teams", "60+"]],
    img: "https://pmsoccerevents.nl/wp-content/uploads/2025/12/7x7jeugdDSC_0019-1920w.webp",
    pill: "2026 entries open",
    accent: "Previous participants include Feyenoord · Sunderland · Watford",
    summary: "The Easter Youth Cup at Duinrell Wassenaar draws clubs from across the Netherlands and Europe every April. Previous participants include Feyenoord, ADO Den Haag, Sparta Rotterdam, SC Heerenveen, Sunderland and Watford. Well-organised, contested, and hosted at an outstanding venue.",
    accommodation: DUINRELL_ACCOM,
  },
  "tour-winter-cup-nl": {
    name: "Winter Cup Holland.",
    eyebrow: "Wassenaar · Netherlands · Winter window",
    sub: "The Dutch winter tournament window. Two editions — December and January — both hosted at Duinrell Wassenaar.",
    location: "Wassenaar · NL",
    facts: [["Country", "Netherlands"], ["Window", "Dec 11–14 · Jan 15–18"], ["Format", "Group + KO"], ["Level", "Youth + Seniors"]],
    img: "https://pmsoccerevents.nl/wp-content/uploads/2025/12/7x7jeugdDSC_0019-1920w.webp",
    pill: "Two windows available",
    accent: "Youth + Seniors brackets · Duinrell Wassenaar",
    summary: "Winter Cup Holland runs two editions at Duinrell Wassenaar — December and January. Youth and seniors brackets run in parallel, making it ideal for clubs travelling with multiple squads. A strong Dutch and European international field.",
    accommodation: DUINRELL_ACCOM,
  },
};

function TournamentDetail({ onNavigate, tourId = "tour-mic-costa-brava" }) {
  const d = TOURNAMENT_DATA[tourId] || TOURNAMENT_DATA["tour-mic-costa-brava"];
  const others = Object.entries(TOURNAMENT_DATA).filter(([id]) => id !== tourId).slice(0, 3);
  return (
    <>
      <Nav active="tournaments" onNavigate={onNavigate} />

      <section className="hero" style={{ minHeight: "82vh" }}>
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
          <h1 className="display-xl">{d.name}</h1>
          <div className="hero__sub">{d.sub}</div>
          <div className="hero__ctas">
            <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for this tournament →</button>
            <button className="btn btn--ghost btn--lg" onClick={() => onNavigate("tournaments")}>View all tournaments</button>
          </div>
        </div>
      </section>

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="stat-row">
            {d.facts.map(([l, v], i) => (
              <StatCell key={l} n={v} label={l} accent={i === 3} />
            ))}
          </div>
        </div>
      </section>

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

      {/* ACCOMMODATION */}
      {d.accommodation && (
        <section className="band" style={{ background: "var(--ink-800)", borderTop: "1px solid rgba(246,243,235,0.08)", borderBottom: "1px solid rgba(246,243,235,0.08)" }}>
          <div className="wrap">
            <EyebrowBar>03 — Accommodation</EyebrowBar>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
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
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
                  {d.accommodation.photos.slice(0, 6).map((p, i) => (
                    <div key={i} style={{ position: "relative", aspectRatio: i === 0 ? "16/9" : "4/3", gridColumn: i === 0 ? "span 2" : "span 1", overflow: "hidden" }}>
                      <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${p.url})`, backgroundSize: "cover", backgroundPosition: "center", transition: "transform 0.6s cubic-bezier(0.22,1,0.36,1)" }}
                        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
                        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                      ></div>
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 12px", background: "linear-gradient(to top, rgba(5,6,8,0.7), transparent)", fontFamily: "'JetBrains Mono', monospace", fontSize: 9, letterSpacing: "0.16em", color: "#F6F3EB", textTransform: "uppercase" }}>{p.cap}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="band">
        <div className="wrap">
          <EyebrowBar>04 — Other tournaments</EyebrowBar>
          <h2 className="section-h">More fixtures on the calendar.</h2>
          <div className="exp-grid" style={{ marginTop: 32 }}>
            {others.map(([id, t]) => (
              <ExpCard
                key={id}
                image={t.img}
                meta={t.location.toUpperCase()}
                title={t.name.replace(".", "")}
                pill={t.pill}
                onClick={() => onNavigate(id)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="app-band">
        <div className="app-band__grid">
          <div>
            <div className="eyebrow-bar"><div className="eyebrow-bar__rule" style={{ background: "#0A0B0D" }}></div><div className="eyebrow-bar__text" style={{ color: "#0A0B0D" }}>Ready to enter {d.name.replace(".", "")}?</div></div>
            <h2 className="section-h">{tourId === "tour-mic-costa-brava" ? "Entry slots are limited and fill well in advance — particularly at Easter." : tourId === "tour-copa-daurada" ? "Places fill quickly, particularly for the Easter window." : tourId === "tour-mare-nostrum" ? "Easter entry fills well in advance." : "Tell us about your squad."}</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>{tourId === "tour-mic-costa-brava" ? "Tell us about your squad and we'll confirm availability and put together your full tour brief within two working days." : tourId === "tour-copa-daurada" ? "Tell us about your squad and we'll confirm availability and put together your full tour brief within two working days." : tourId === "tour-mare-nostrum" ? "Tell us about your squad — age groups, size, level, and preferred window — and we'll confirm availability and put together your full tour brief within two working days." : "Tell us about your squad and we'll respond within two working days."}</div>
            <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
              <button className="btn btn--primary btn--lg" onClick={() => onNavigate("application")}>Apply for a tour →</button>
              <a className="btn btn--ghost btn--lg" href="tel:07867205763" style={{ textDecoration: "none", color: "#0A0B0D", borderColor: "rgba(10,11,13,0.32)" }}>07867 205763</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  );
}

window.TournamentDetail = TournamentDetail;
window.TOURNAMENT_DATA = TOURNAMENT_DATA;
window.TOURNAMENT_DATA = TOURNAMENT_DATA;
