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
    name: "The Cruyff Tournament.",
    eyebrow: "Tournament · Spain · Salou",
    sub: "Hosted in the spirit of Johan Cruyff's footballing philosophy. FC Barcelona, AFC Ajax, and Europe's best academy programmes. Salou, Spain — December window.",
    location: "Salou · ES",
    facts: [["Country", "Spain"], ["Window", "4–7 December 2026"], ["Age", "U10 — U19"], ["from", "£240pp"]],
    img: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=2000&q=80",
    pill: "December window",
    accent: "FC Barcelona · AFC Ajax",
    summary: "The Cruyff Football Tournament was created to honour Johan Cruyff's footballing philosophy — total football, positional intelligence, technical freedom. FC Barcelona and AFC Ajax lead a curated field of Europe's best academies.",
    accommodation: CAMBRILS_ACCOM,
    sections: [
      {
        eyebrow: "01 — What Is the Cruyff Tournament",
        title: "More than a competition. A philosophy in action.",
        content: `The Cruyff Football Tournament was created to honour the legacy of Johan Cruyff — the man who more than any other individual shaped the way modern football is played, coached, and taught. Total Football. Positional intelligence. Technical freedom. The belief that the game should be played a specific way, and that developing players means developing thinkers as much as athletes.

The tournament launched in 2024 with 90 teams from 17 countries and 1,600 players — FC Barcelona and AFC Ajax leading the field alongside some of the most respected youth academies in Europe. It has grown each year since, with the 2026 edition building on that foundation with an expanded field and the same commitment to competition that reflects Cruyff's values rather than simply carrying his name.

For squads and coaching staff who want a tournament where the philosophy of play matters — not just the result — the Cruyff Tournament is the most distinctive entry in the Ballerz Abroad network.`,
      },
      {
        eyebrow: "02 — Format and Details",
        title: "The tournament at a glance.",
        content: `Date: 4–7 December 2026 · Salou, Costa Daurada, Spain

Age categories:
U10 · U12 · U14 · U16 · U19

Notable participants:
FC Barcelona · AFC Ajax · Leading European club academies · International youth programmes

Format:
Group stage followed by knockout rounds. Spaces are deliberately limited to maintain competition quality and ensure every team has ample playing time throughout. This is not an open-entry mass participation event — it is a curated field of clubs and academies who have been selected to reflect the standard the tournament is built around.

Venue:
Salou, Costa Daurada — the same location as Copa Daurada and Mare Nostrum Cup, played at the Mediterranean Sports Hub complex with professional-grade pitches and first-class facilities on the Costa Daurada coastline.`,
      },
      {
        eyebrow: "03 — Why the Name Matters",
        title: "Johan Cruyff. The standard his name sets.",
        content: `Johan Cruyff played for Ajax and FC Barcelona, won three consecutive European Cups, and remains the greatest Dutch footballer in the history of the game. As a manager and thinker, he built the foundation of La Masia — Barça's academy — and exported a philosophy of technical football, positional awareness, and creative intelligence that is still the dominant influence on European youth development today.

The clubs that show up to a tournament in his name are the ones who play the game the way he believed it should be played. Ajax, who produced him. Barcelona, who he transformed. Academies that have built their identity around technique, movement, and intelligence over physicality.

For UK development squads, that field is exactly the kind of challenge that produces genuine development. You will not face teams that play like the teams at home. That is the point.`,
      },
      {
        eyebrow: "04 — The December Window",
        title: "A tournament slot most clubs don't use. That's the opportunity.",
        content: `The Easter and summer windows are heavily contested for overseas football tours — flights and accommodation are at a premium, popular tournaments fill months in advance, and the calendar is busy. December is different.

The Cruyff Tournament runs in early December, in a window that sits cleanly after the first half of the domestic season and before Christmas. For UK academies and development squads looking for a mid-season reset, a performance benchmark, or an overseas experience that doesn't compete with the Easter calendar, it is the most useful window in the Ballerz Abroad network.

Salou in December is cooler than the summer months but consistently mild by UK standards — playable conditions throughout, and a location that retains all its tournament infrastructure and accommodation quality year-round.`,
      },
      {
        eyebrow: "05 — How Ballerz Abroad Builds a Cruyff Tournament Tour",
        title: "Entry is the centrepiece. The build around it is ours.",
        content: `Ballerz Abroad secures your tournament entry, manages accommodation in Salou, coordinates all ground transfers, and provides a dedicated tour lead with your squad throughout. The days leading into the tournament are built around your squad's preparation — professional training sessions matched to your objectives before you step into competition.

A typical Cruyff Tournament tour with Ballerz Abroad:

Days 1–2 — Arrival in Spain, settle in, professional training sessions at a partner club
Days 3–6 — Cruyff Tournament competition, Salou
Day 7 — Departure

Tell us your age group, squad size, and window. We'll have a full brief back to you within two working days.`,
      },
      {
        eyebrow: "06 — Who This Is For",
        title: "Right for your squad if…",
        content: `You want a mid-season overseas tournament in a December window that doesn't clash with Easter or summer commitments

You're looking for a tournament where the opposition has been developed with a specific technical and tactical identity — Ajax, Barcelona, and their equivalents in the field

Your coaching staff want to benchmark your squad against European academy standard football at a specific point in the season

Your U10–U19 players are technically capable and ready to be challenged by the best academy football Europe produces in a curated, limited-entry field

Not the right fit if you need an Easter window or a large open-entry bracket across many age groups simultaneously. For those requirements, MIC Costa Brava, Mare Nostrum, or Copa Daurada are the better fit.`,
      },
      {
        eyebrow: "07 — Other Spanish Tournament Options",
        title: "More from the Ballerz Abroad Spain network.",
        content: `MIC Costa Brava — Easter. Europe's most competitive elite academy tournament. 400+ teams, 40+ countries.

Copa Daurada — Easter and summer. Accessible international tournament. Grassroots through development bracket.

Mare Nostrum Cup — Easter and summer. Spain's largest youth tournament. U8–U19, boys and girls.`,
      },
    ],
  },
  "tour-levante-cup": {
    name: "Levante UD International Cup.",
    eyebrow: "Tournament · Spain · Valencia",
    sub: "Hosted by our La Liga partner club at their own training ground. 300 teams. 500 matches. An opening ceremony inside Levante's stadium. Valencia, Spain — June 2026.",
    location: "Valencia · ES",
    facts: [["Country", "Spain"], ["Window", "18–21 June 2026"], ["Age", "U8 — U19"], ["Teams", "300+"]],
    img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=2000&q=80",
    pill: "Inaugural edition",
    accent: "Stadium ceremony · Partner club",
    summary: "The Levante UD International Cup launches in June 2026 — the first edition of a tournament hosted directly by Levante UD at their own Ciudad Deportiva in Buñol, Valencia. Opening ceremony inside their La Liga stadium.",
    accommodation: {
      name: "Global-Levante UD International Residence · L'Eliana, Valencia",
      link: "https://www.globalfootballtotal.com/en/facilities/",
      linkLabel: "View facilities at globalfootballtotal.com",
      desc: "Tournament squads stay at the official Global-Levante UD International Residence — the same campus used for the Levante Academy Experience. Located in L'Eliana in the Valencian community, the 23,000 m² site houses up to 120 players with private bathrooms, dining room (breakfast, lunch and dinner), swimming pool, gymnasium, crossfit area, padel courts, tennis courts, cafeteria, games room and 24-hour surveillance.",
      features: ["Up to 120 players · private bathrooms", "Full board (breakfast, lunch & dinner)", "Swimming pool + sports centre", "Gymnasium · crossfit · padel · tennis", "24-hour surveillance + tutoring service", "Direct bus transfer to Levante UD Ciudad Deportiva"],
      photos: [
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Edificio-Residencia.jpg", cap: "Residence building" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Area-Exterior.jpg", cap: "Exterior grounds" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Piscina.jpg", cap: "Swimming pool" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Comedor.jpg", cap: "Dining room" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/Campo-1er-Equipo.jpg", cap: "Training pitch" },
        { url: "https://www.globalfootballtotal.com/wp-content/uploads/2020/04/GYM.jpg", cap: "Gymnasium" },
      ],
    },
    sections: [
      {
        eyebrow: "01 — What Is the Levante UD International Cup",
        title: "A brand new tournament. A partner club hosting it. Your squad inside it.",
        content: `The Levante UD International Cup launches in June 2026 — the first edition of a tournament hosted directly by Levante UD at their own Ciudad Deportiva in Buñol, Valencia. It is the flagship event in Levante's international strategy, bringing together all of the club's partner academies and associated clubs from across the Americas, Europe, Asia, Africa, and Oceania into a single four-day competition.

300 teams. 500 matches. 2,500 players. 8,000 spectators.

The tournament opens with an inauguration ceremony inside the Estadi Ciutat de València — Levante's own La Liga stadium — bringing every participating squad and their families together in a moment that no other tournament in the Ballerz Abroad network can offer. Then four days of football at the club's training complex, on the same pitches where Levante's own academy squads train every day.

For Ballerz Abroad squads, this is the most direct expression of our partnership with Levante UD. You are not visiting the club. You are competing in their tournament, on their ground, in an event they have built.`,
      },
      {
        eyebrow: "02 — Format and Details",
        title: "The tournament at a glance.",
        content: `Dates: 18–21 June 2026 · Valencia, Spain

Venues:
Ciudad Deportiva Levante UD, Buñol — All match play. Located 40km west of Valencia, the full training complex of Levante UD's first team and academy
Estadi Ciutat de València — Opening ceremony and inauguration

Facilities at Ciudad Deportiva:
3 natural grass full-size pitches (F11)
8 artificial pitches (F8)
18 full-size changing rooms · 12 F8 changing rooms

Age categories:
F8 format:
Benjamín: 2016–2017
Alevín: 2014–2015

F11 format:
Infantil: 2012–2013
Cadete: 2010–2011
Juvenil: 2008–2009
Female: 2008–2009–2010`,
      },
      {
        eyebrow: "03 — The Opening Ceremony",
        title: "It starts at the stadium.",
        content: `Every participating squad gathers at the Estadi Ciutat de València — Levante's La Liga home — for the tournament inauguration. Players, coaches, and families inside a professional football stadium, marking the start of four days of competition.

For players who have trained at the club's academy environment earlier in their tour, walking into that stadium to open the tournament is the moment that ties the whole experience together. It is the kind of memory that no domestic cup final, no weekend tournament, no training ground session can produce.`,
      },
      {
        eyebrow: "04 — Why This Tournament Is Different",
        title: "The tournament your squad trains in all week and then competes in.",
        content: `Every other tournament in the Ballerz Abroad network is a competition we take squads to. The Levante UD International Cup is a competition hosted by our partner club — the same club whose pitches, coaches, and academy methodology we use for professional training sessions earlier in the week.

The natural tour structure builds itself. Arrive in Valencia. Train at the Ciudad Deportiva under Levante's coaching staff for two or three days. Enter the Levante UD International Cup and compete on the same pitches against academies and clubs from 40+ countries. Return home having trained, competed, and experienced what a La Liga club's environment looks and feels like from the inside.

No other destination in the network gives you that continuity — the training environment and the tournament competition in the same place, with the same club behind both.`,
      },
      {
        eyebrow: "05 — Valencia and the June Window",
        title: "The right city. The right time of year.",
        content: `Valencia in June is one of the finest football tour destinations in Europe. The weather is reliably warm, the city is at its best, and the end-of-season timing works cleanly for UK academies finishing their domestic programme and looking for a summer experience before pre-season begins.

Valencia itself offers everything beyond the football — the City of Arts and Sciences, the Oceanogràfic, the historic old town, Gulliver Park, and the natural beauty of Albufera Natural Park just outside the city. For squads travelling with families, Valencia in June is a destination in its own right.`,
      },
      {
        eyebrow: "06 — How Ballerz Abroad Builds a Levante Cup Tour",
        title: "Training and tournament. One destination. One week.",
        content: `The Levante UD International Cup slots perfectly into a seven to ten day Valencia-based tour. Ballerz Abroad manages tournament entry, accommodation, ground transfers, and a dedicated tour lead throughout.

A typical Levante Cup tour:

Days 1–3 — Arrival in Valencia, professional training sessions at the Ciudad Deportiva under Levante academy coaching staff
Days 4–7 — Levante UD International Cup competition, Ciudad Deportiva Buñol
Day 8 — Departure

For clubs wanting to extend the tour, Copa Daurada and MIC Costa Brava entries are available from the same Valencia base in the weeks either side of the June window.`,
      },
      {
        eyebrow: "07 — Who This Is For",
        title: "Right for your squad if…",
        content: `You want to combine professional partner-club training with a tournament hosted by the same club — the most joined-up experience in the Ballerz Abroad network

You're travelling in the June window and want an ambitious end-of-season or early summer tour with genuine international competition

You have mixed age groups — the Levante Cup covers F8 and F11 categories from U8 through to U19 including a female category

You want your players to compete on a La Liga club's actual training pitches and open the tournament in their stadium`,
      },
      {
        eyebrow: "08 — Other Valencia-Based Options",
        title: "More from Ballerz Abroad in Valencia.",
        content: `The Levante UD International Cup is the centrepiece of our Valencia offering — but the destination opens up access to the wider tournament network from the same base.

MIC Costa Brava — Easter. Europe's most competitive elite academy tournament.

Copa Daurada — Easter and summer. Salou, Costa Daurada.

Levante UD Academy training — Professional training inside the partner club environment, independent of tournament entry.`,
      },
    ],
  },
  "tour-mic-punta-cana": {
    name: "MIC Punta Cana.",
    eyebrow: "Tournament · Dominican Republic · Punta Cana",
    sub: "The MIC format. The same clubs. The Caribbean. A June window for squads who can't make Easter — or who want one of the most extraordinary tournament experiences available in youth football.",
    location: "Punta Cana · DR",
    facts: [["Country", "Dominican Republic"], ["Window", "24–29 June 2026"], ["Age", "U12 — U16"], ["Teams", "International"]],
    img: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=2000&q=80",
    pill: "June window",
    accent: "All-inclusive resort · 4 & 5-star hotels",
    summary: "The MIC format, transposed to the Dominican Republic. Runs in late June across a 125,000m² sports complex at Cap Cana, with teams staying in four and five-star all-inclusive hotels.",
    sections: [
      {
        eyebrow: "01 — What Is MIC Punta Cana",
        title: "MIC goes to the Caribbean.",
        content: `MICFootball launched its Punta Cana edition in 2025 — taking the format, the standards, and the club network that made MIC Costa Brava Europe's reference youth tournament, and transplanting it to the Dominican Republic for a June window.

The result is exactly what it sounds like. Real Madrid, FC Barcelona, Atlético de Madrid, River Plate, Inter Miami, Club América, Olympique de Marseille — the same calibre of clubs that appear at Costa Brava in April, competing across 13 natural grass pitches at The Fields Cap Cana Sports City, a 125,000m² purpose-built sports complex in one of the Caribbean's most exclusive resort destinations.

It is a genuinely different proposition from any other tournament in the Ballerz Abroad network — not just because of the competition standard, but because of where it happens. There is no other youth football tournament that puts your players in 4 and 5-star all-inclusive hotels on the Caribbean coast for a week of international competition.`,
      },
      {
        eyebrow: "02 — Format",
        title: "How it works.",
        content: `MIC Punta Cana runs over five days in late June, with teams arriving on Wednesday and competition running from Thursday through Sunday.

All matches are played at The Fields Cap Cana Sports City — 13 natural grass pitches on a single 125,000m² complex, with tents for players and coaches, food trucks, leisure areas, and the MIC Store on site. Everything in one place.

Group stage: Teams play a round-robin group stage with four teams per group. The top two from each group advance to the Gold knockout rounds. All other teams continue in the Silver stage — no squad is knocked out and left without football.

Knockout rounds: Single-match elimination through to the final. Finals and awards ceremony on the final day.

Dates: 24–29 June 2026 · Cap Cana, Dominican Republic

Age categories:
Boys: U12 · U13 · U14 · U15 · U16
Girls: U16

Match format:
U12: 7-a-side
U13–U16: 11-a-side`,
      },
      {
        eyebrow: "03 — The Setting",
        title: "Punta Cana. The best beaches in the Caribbean. Youth football.",
        content: `Cap Cana is a private resort complex on the eastern tip of the Dominican Republic — considered one of the finest tourist destinations in the Caribbean. The tournament's partner hotels are 4 and 5-star all-inclusive properties with direct beach access, pools, and full resort facilities. Squads are accommodated, fed, and transported to the tournament complex together — the all-inclusive format means no per-meal logistics and no budget surprises on the ground.

Airport transfers from Punta Cana International Airport to the hotels take 30 to 40 minutes. The tournament is compact, logistically straightforward, and set against a backdrop that is difficult to match anywhere on the European football tour calendar.

For clubs whose players and parents have done Spain before, or for squads looking for a genuinely different summer football experience, Punta Cana is the answer.`,
      },
      {
        eyebrow: "04 — Why It Works for UK Squads",
        title: "A summer window. A different world.",
        content: `The vast majority of UK academy and development teams focus their overseas football tours on the Easter window — Spain, Portugal, the Netherlands. The summer calendar is less well served by tournaments of genuine quality and international standard.

MIC Punta Cana fills that gap directly. It runs in late June, after the domestic season has finished and before the pre-season window fully opens — a clean slot in the calendar that works for clubs wanting to travel in the summer without clashing with existing commitments.

The competition standard is high. The clubs entering Punta Cana are drawn from the same global network as MIC Costa Brava — this is not a second-tier version of MIC built for teams who couldn't get into the main event. It is a distinct edition, in a distinct location, with the same organisational standards and the same quality of opposition.`,
      },
      {
        eyebrow: "05 — MIC Punta Cana vs MIC Costa Brava",
        title: "Same brand. Different experience. Different window.",
        content: `Both tournaments are run by MICFootball. Both draw from the same club network. Both operate to the same organisational standards and competition format. The differences are the window, the location, and the scale.

MIC Costa Brava — Easter, Spain. The flagship edition. 400+ teams, 40+ countries, nine categories from U12 to U19. The most competitive youth tournament in Europe. Costa Brava coastline.

MIC Punta Cana — Late June, Dominican Republic. The Caribbean edition. Focused U12–U16 bracket plus girls U16. Fewer teams, tighter field, 4 and 5-star all-inclusive setting. A different kind of experience at the same competition level.

Not sure which is right for your squad? If Easter works and you want maximum age category coverage, Costa Brava. If you're travelling in June or want the Caribbean experience alongside top-level competition, Punta Cana.`,
      },
      {
        eyebrow: "06 — How Ballerz Abroad Builds a MIC Punta Cana Tour",
        title: "We handle everything on the ground.",
        content: `Ballerz Abroad secures your tournament entry, manages accommodation through the MIC partner hotel network, coordinates airport transfers, and provides a dedicated tour lead with your squad throughout.

The all-inclusive format simplifies the on-the-ground logistics significantly — meals, pools, beach access, and transfers to the complex are all built in. Your coaching staff focus on preparation and performance. We handle everything else.

A typical MIC Punta Cana tour runs across six days — arrival Wednesday, competition Thursday through Sunday, departure Monday. Extensions before or after the tournament can be arranged for squads who want additional time in the Dominican Republic.`,
      },
      {
        eyebrow: "07 — Who This Is For",
        title: "Right for your squad if…",
        content: `You want to enter a MIC-standard tournament in a June window that doesn't interfere with the Easter calendar

Your players have done Spain and you're looking for a tournament experience that is categorically different — in setting, atmosphere, and memory

You're travelling with U12–U16 age groups and want the most ambitious summer overseas football tour available

Your club wants to offer families something that goes well beyond a standard football tour — a genuine destination trip built around top-level international competition

Not the right fit if your primary objective is maximum age group coverage — for U17, U18, and U19 squads, the Easter Costa Brava edition has the fuller bracket. For the U12–U16 window in June, Punta Cana stands alone.`,
      },
    ],
  },
  "tour-easter-youth-cup": {
    name: "Netherlands Easter Youth Cup.",
    eyebrow: "Tournament · Netherlands · Roosendaal",
    sub: "International tournament football in the heart of Dutch football country. Easter weekend, Roosendaal, Netherlands — and the perfect pairing with a Feyenoord Academy training week.",
    location: "Roosendaal · NL",
    facts: [["Country", "Netherlands"], ["Window", "3–6 April 2026"], ["Age", "U9 — U15"], ["Field", "International"]],
    img: "https://cdn.builder.io/api/v1/image/assets%2F94fd70ad307f4ddc9cac607abab780ad%2Fce13cba90d35467982a5ce5cbf7a73c9?format=webp&width=800&height=1200",
    pill: "Easter window",
    accent: "Roosendaal · 30 mins from Rotterdam",
    summary: "The Netherlands Easter Youth Cup is an international youth football tournament held over Easter weekend in Roosendaal — a Dutch town midway between Rotterdam and Antwerp.",
    accommodation: DUINRELL_ACCOM,
    sections: [
      {
        eyebrow: "01 — What Is the Netherlands Easter Youth Cup",
        title: "Easter weekend football in the Netherlands. Done properly.",
        content: `The Netherlands Easter Youth Cup is an international youth football tournament held over Easter weekend in Roosendaal — a well-connected Dutch town midway between Rotterdam and Antwerp, and within easy reach of Amsterdam. It brings together teams from across Europe including England, Denmark, France, Italy, Germany, Belgium, and the Netherlands, competing across top-quality grass and artificial pitches at BSC Roosendaal's excellent facility.

The format is four days — Friday to Monday over Easter — with multiple matches per team, a genuine international field, and the kind of tournament atmosphere that UK squads rarely encounter in their domestic calendar. Fast-paced games, strong competition, teams from different countries playing different styles. Exactly what an overseas football tour should deliver.

For UK clubs, the timing and location make it one of the most practically accessible European tournaments available. The Netherlands is an easy journey from the UK — a straightforward option for clubs who want international tournament football at Easter without the logistics of travelling to Spain.`,
      },
      {
        eyebrow: "02 — Format and Details",
        title: "The tournament at a glance.",
        content: `Dates: 3–6 April 2026 · Roosendaal, Netherlands

Venue: BSC Roosendaal — 8 grass pitches and 1 artificial pitch, all on a single well-maintained facility

Age categories: Boys U9–U15

Format: Group stage followed by knockout rounds. Every team is guaranteed multiple matches across the tournament weekend. Competition is structured by age group with teams playing opponents matched to their level throughout.

Accommodation: Options range from budget holiday park bungalows in the Roosendaal area through to Centre Parcs De Kempervennen — a premium stay in natural surroundings with swimming complexes, leisure facilities, and activities for players and families between matches.

Location: Roosendaal sits 30 minutes south of Rotterdam by road, and approximately 1.5 to 2 hours from Amsterdam — making day trips or city exploration easy to build into the itinerary.`,
      },
      {
        eyebrow: "03 — The Dutch Football Experience",
        title: "Playing in the Netherlands is a different kind of test.",
        content: `The Netherlands produces professional footballers at a rate that makes no sense relative to the country's population. Ajax, Feyenoord, PSV — three clubs with a continuous tradition of developing technically elite players from youth level. The domestic youth leagues are built around technique, decision-making, and positional intelligence from an early age.

When UK squads play against Dutch opposition — or face German, French, and Scandinavian clubs at a tournament like this — they encounter different rhythms, different pressing systems, and different technical expectations than they face at home. That exposure is what makes the Netherlands Easter Youth Cup genuinely developmental rather than just competitive.

Your players will face situations they haven't faced before. That's the point.`,
      },
      {
        eyebrow: "04 — The Natural Pairing with Feyenoord",
        title: "Train at Varkenoord. Compete at Easter.",
        content: `The Netherlands Easter Youth Cup pairs naturally with a Feyenoord Academy training block earlier in the week. Feyenoord's Varkenoord complex sits 30 minutes north of Roosendaal in Rotterdam — close enough to build a seamless tour that moves from professional partner-club training to Easter tournament competition without changing base.

A typical Netherlands Easter tour with Ballerz Abroad:

Days 1–3 — Arrival in Rotterdam, professional training sessions at Varkenoord under Feyenoord Academy coaching staff
Days 4–7 — Netherlands Easter Youth Cup, Roosendaal
Day 8 — Departure

Your squad arrives at the tournament having already trained inside one of the Netherlands' most respected academy environments that week. The football your players see at Varkenoord and the football they then face in competition is part of the same Dutch development tradition — that continuity is what separates a well-built Netherlands tour from a tournament trip with training added as an afterthought.`,
      },
      {
        eyebrow: "05 — Roosendaal and the Netherlands",
        title: "A well-placed base with everything within reach.",
        content: `Roosendaal is a compact, pleasant Dutch town with easy road and rail connections in all directions. Rotterdam is 30 minutes north — Europe's largest port and one of the most architecturally distinctive cities on the continent, well worth a day trip for squads with time between matches. Amsterdam is 1.5 to 2 hours away for groups who want to build a cultural day into the itinerary.

The tournament accommodation options sit in the green countryside around Roosendaal — holiday parks that give squads a shared base, space to recover between games, and a team environment that continues off the pitch as well as on it. For clubs where the social and bonding element of a tour matters alongside the football, a Centre Parcs base brings that naturally.`,
      },
      {
        eyebrow: "06 — Who This Is For",
        title: "Right for your squad if…",
        content: `You're travelling with U9–U15 boys and want Easter weekend international tournament football in the Netherlands

You want a practical, accessible European tournament without the longer journey to Spain — the Netherlands is one of the most straightforward overseas destinations for UK clubs

You're looking to combine a Feyenoord Academy training block with Easter tournament competition in a single joined-up Netherlands tour

You want a tournament with a genuine international field from across northern Europe — not just UK clubs travelling together

Not the right fit if you need girls categories or U16+ age groups — for those, the Spanish tournament options have wider brackets. For U9–U15 boys at Easter in the Netherlands, this is the right entry point.`,
      },
      {
        eyebrow: "07 — More from the Netherlands Network",
        title: "Other options from Ballerz Abroad in the Netherlands.",
        content: `Feyenoord Academy — Professional training at Varkenoord, Rotterdam. The natural pairing with this tournament.

Winter Cup Holland — Netherlands winter tournament window.`,
      },
    ],
  },
  "tour-winter-cup-nl": {
    name: "Winter Cup Holland.",
    eyebrow: "Tournament · Netherlands · Wassenaar",
    sub: "International youth football tournament in the Netherlands. December and January windows. Boys and girls U12–U19. Based at Duinrell — one of the most distinctive tournament venues in Europe.",
    location: "Wassenaar · NL",
    facts: [["Country", "Netherlands"], ["Windows", "Dec & Jan 2026–27"], ["Age", "U12 — U19"], ["Teams", "International"]],
    img: "https://pmsoccerevents.nl/wp-content/uploads/2025/12/7x7jeugdDSC_0019-1920w.webp",
    pill: "Two windows available",
    accent: "Mid-season tournament",
    summary: "Winter Cup Holland runs two editions at Duinrell Wassenaar — December and January. Boys and girls U12–U19 with international field from Netherlands, Germany, Belgium, France, and other European nations.",
    accommodation: DUINRELL_ACCOM,
    sections: [
      {
        eyebrow: "01 — What Is the Winter Cup Holland",
        title: "Mid-season international football. In the Netherlands. In winter.",
        content: `The Winter Cup Holland is an international youth football tournament held at the RKSV Blauw Zwart sports complex in Wassenaar, Netherlands — a well-established event running since 2016, bringing together boys and girls teams from the Netherlands, Germany, Belgium, France, and other European nations across a four-day weekend.

Two windows are available — December and January — making it one of the only tournaments in the Ballerz Abroad network that fills the mid-season gap. For UK squads looking for an international benchmark in the middle of their domestic campaign, or for clubs who can't travel at Easter or in the summer, the Winter Cup Holland is the answer.

The format is straightforward and well-organised. Teams arrive on Friday, play group stage matches on Saturday, advance to knockout rounds on Sunday, and depart Monday. All matches are played at the RKSV Blauw Zwart sports complex adjacent to Duinrell — professional-standard pitches with changing rooms and full tournament infrastructure on site.`,
      },
      {
        eyebrow: "02 — Format and Details",
        title: "The tournament at a glance.",
        content: `Dates:
December Edition — 11–14 December 2026 · Wassenaar, Netherlands
January Edition — 15–18 January 2027 · Wassenaar, Netherlands

Venue: RKSV Blauw Zwart sports complex, Wassenaar — adjacent to Duinrell leisure park

Age categories:
Boys: U12–U19
Girls: U12–U19

Format: Group stage pools of 5 or 6 teams, followed by knockout playoffs culminating in the final. Every team is guaranteed multiple matches. All teams receive a commemorative cup and tournament souvenir at the awards ceremony.

Accommodation: Teams stay in Duingalows at Duinrell park — self-contained cottages with living rooms, kitchen, comfortable beds, and bathrooms, centrally located within the park. Keeping the whole squad together in one location builds the team environment that makes a winter tour genuinely valuable.

Duinrell: Beyond the football, Duinrell is a leisure park with a theme park and the Tikibad indoor water park — giving squads activities between matches and a social programme that works particularly well for younger age groups and for clubs travelling with families.`,
      },
      {
        eyebrow: "03 — The Winter Window Opportunity",
        title: "The calendar slot most clubs overlook.",
        content: `Easter is oversubscribed. Summer is competitive. The winter window — December and January — is largely untapped by UK clubs despite being one of the most useful points in the football calendar for a mid-season reset or development experience abroad.

A Winter Cup Holland tour gives your squad a performance benchmark at the halfway point of their domestic season — competitive international football against European opposition at a point when the data from those games is immediately actionable. Return in January and your coaching staff know exactly what your squad needs to work on for the second half of the season. That is a different kind of development value from an end-of-season or pre-season tour.

The Netherlands in December and January is cold but very manageable — pitches are well-maintained, facilities are indoor-heated, and the Duinrell setting insulates the squad from the weather between matches.`,
      },
      {
        eyebrow: "04 — Wassenaar and the Netherlands",
        title: "Well placed for everything the Netherlands offers.",
        content: `Wassenaar is a small town on the Dutch coast between The Hague and the North Sea — quiet, well-connected, and surrounded by the dunes and woodland that give Duinrell its distinctive character. Rotterdam is 30 minutes south by road. Amsterdam is 45 minutes north. The Hague is 15 minutes.

For squads with a day between arrival and the tournament start, all three cities are within easy reach — Rotterdam for its architecture and football culture, Amsterdam for the full Dutch city experience, The Hague for something quieter. The Netherlands in winter has a character entirely its own — Christmas markets, canal cities, and a football culture that is fully active and visible year-round.`,
      },
      {
        eyebrow: "05 — The Natural Pairing with Feyenoord",
        title: "Train at Varkenoord. Compete at Duinrell.",
        content: `The Winter Cup Holland pairs naturally with a Feyenoord Academy training block earlier in the week. Varkenoord sits in Rotterdam — 30 minutes from Wassenaar — making a joined-up Netherlands tour easy to build.

A typical Winter Cup Holland tour with Ballerz Abroad:

Days 1–3 — Arrival in Rotterdam, professional training sessions at Varkenoord under Feyenoord Academy coaching staff
Days 4–7 — Winter Cup Holland competition, Wassenaar
Day 8 — Departure

Your squad arrives at the tournament having already trained inside one of Europe's most respected youth development environments that week. The standard they encountered at Varkenoord and the standard they then face in competition come from the same Dutch football tradition — that continuity shapes what your players take home.`,
      },
      {
        eyebrow: "06 — Who This Is For",
        title: "Right for your squad if…",
        content: `You want a mid-season international tournament in December or January — a benchmark at the halfway point of the domestic season that feeds directly back into your coaching programme

You have U12–U19 boys or girls and want a winter window overseas tour that combines competitive football with a distinctive venue

You're looking to combine a Feyenoord Academy training block with winter tournament competition in a single Netherlands-based tour

You want a tournament environment where the squad stays together in one location — Duinrell's self-contained setup builds team cohesion in a way that hotel-based tournaments don't

Not the right fit if you need an Easter or summer window, or if your primary goal is the most elite competitive field available. For that, MIC Costa Brava or the Cruyff Tournament are the stronger options. The Winter Cup Holland is the right choice when the window, the location, and the mid-season timing are what your club needs.`,
      },
      {
        eyebrow: "07 — More from the Netherlands Network",
        title: "Other Ballerz Abroad options in the Netherlands.",
        content: `Feyenoord Academy — Professional training at Varkenoord, Rotterdam. The natural pairing for any Netherlands-based tour.

Netherlands Easter Youth Cup — Easter weekend tournament in Roosendaal. U9–U15 boys.`,
      },
    ],
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
            <h2 className="section-h">Tell us your bracket, your dates, your numbers.</h2>
            <div className="section-lead" style={{ color: "#545B63" }}>We confirm fit within two working days, lock the entry, and start the build.</div>
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
