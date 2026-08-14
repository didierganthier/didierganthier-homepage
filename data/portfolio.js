export const projects = [
  {
    slug: 'alerterouge',
    index: '01',
    title: 'Alerte Rouge',
    type: 'Health technology · Mobile',
    year: '2021—Now',
    summary:
      'A mobile platform that makes urgent blood requests visible and helps suitable donors take action.',
    problem:
      'Finding compatible blood donors in Haiti is often fragmented, manual and time-sensitive. People need a simple way to broadcast a request and give potential donors a clear next step.',
    contribution:
      'I co-founded the product and helped shape its mobile experience, donor flows, notifications and appointment scheduling. The system connects public blood requests with compatible donors and the national blood-transfusion service.',
    outcome:
      'Released on Android and iOS in partnership with Banj and CNTS, with a 5/5 Play Store rating. It remains the clearest expression of the kind of technology I want to build: practical, local and capable of changing an outcome.',
    role: 'Co-founder · Product engineer',
    stack: ['Flutter', 'Firebase', 'Node.js', 'Google Cloud'],
    palette: ['#FF5A4F', '#6C1010'],
    accent: '#FFD0CB',
    motif: 'AR',
    featured: true,
    image: '/images/works/alerterouge.png',
    links: [
      {
        label: 'Android app',
        href: 'https://play.google.com/store/apps/details?id=com.banj.alerterouge'
      },
      {
        label: 'iOS app',
        href: 'https://apps.apple.com/us/app/alerte-rouge-ht/id1597959813'
      }
    ]
  },
  {
    slug: 'kwonik-ayiti',
    index: '02',
    title: 'Kwonik Ayiti',
    type: 'Culture · Maps · AI',
    year: '2026',
    summary:
      'An interactive map and timeline for exploring Haitian history through places, people and connected events.',
    problem:
      'Haitian history is rich but often scattered across books, archives and isolated references. That makes it harder for students and curious readers to see how events connect across time and geography.',
    contribution:
      'I designed the product around a map, an explorable timeline and structured historical records. Public contributions pass through moderation, while an AI assistant helps visitors ask questions without replacing primary sources.',
    outcome:
      'The platform now brings more than 80 events into one visual experience and creates a foundation for educational routes, school resources, research tools and a public historical dataset.',
    role: 'Creator · Product engineer',
    stack: ['Next.js', 'Interactive maps', 'AI', 'Structured data'],
    palette: ['#174C43', '#071D1A'],
    accent: '#F4D58D',
    motif: 'KA',
    featured: true,
    links: [{ label: 'Visit Kwonik Ayiti', href: 'https://kwonikayiti.com' }]
  },
  {
    slug: 'civicspace',
    index: '03',
    title: 'CivicSpace',
    type: 'Civic infrastructure · Web',
    year: '2026',
    summary:
      'Secure reporting infrastructure designed for communities, moderators and operational teams working in constrained environments.',
    problem:
      'Useful public reporting has to balance accessibility, trust, safety and operational value. In Haiti, that also means designing for limited connectivity and the channels people already use.',
    contribution:
      'I defined a system for anonymous reports, geolocation, media evidence, moderation and analytical dashboards, with WhatsApp intake and mobile-friendly workflows as first-class access points.',
    outcome:
      'The resulting architecture turns disconnected reports into structured, reviewable information while keeping privacy, low-bandwidth use and responsible moderation at the center of the product.',
    role: 'Product architect · Full-stack engineer',
    stack: ['Next.js', 'Supabase', 'WhatsApp', 'Geospatial data'],
    palette: ['#2854C5', '#081B4B'],
    accent: '#BFD3FF',
    motif: 'CS',
    featured: true
  },
  {
    slug: 'm3-innovate',
    index: '04',
    title: 'M3 Innovate',
    type: 'Commerce infrastructure · Web',
    year: '2026',
    summary:
      'A multi-tenant commerce platform that gives independent artists their own storefront, products and order flow.',
    problem:
      'Independent creators need the control of their own store without having to assemble payments, product management, fulfillment and reporting from scratch.',
    contribution:
      'I built the platform around isolated artist stores, shareable storefront slugs, product creation, checkout and order management. The system was designed to support Stripe payments and Printify-powered fulfillment.',
    outcome:
      'The product establishes a reusable commerce foundation: one operational platform serving many distinct brands, with room for commissions, payouts and richer artist analytics.',
    role: 'Lead full-stack engineer',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'Printify'],
    palette: ['#7B3FF2', '#241047'],
    accent: '#E0D2FF',
    motif: 'M3',
    featured: true
  },
  {
    slug: 'janjak',
    index: '05',
    title: 'Janjak',
    type: 'Applied AI · Productivity',
    year: '2026',
    summary:
      'An AI context assistant that turns scattered personal information into useful memory, relationships and workflows.',
    problem:
      'Most assistants respond to the current prompt but lose the larger context: the people, projects, decisions and patterns that make an answer genuinely useful.',
    contribution:
      'I designed a context system combining semantic memory, an entity graph, a personal model and workflow automation, with explicit privacy controls around what the assistant can retain and use.',
    outcome:
      'Janjak explores a more useful model for personal AI—one built around continuity and user control, rather than a collection of isolated chats.',
    role: 'Creator · AI engineer',
    stack: ['TypeScript', 'Node.js', 'OpenAI', 'Semantic search'],
    palette: ['#E88535', '#4A2105'],
    accent: '#FFE0B8',
    motif: 'JJ',
    featured: false
  },
  {
    slug: 'momentum',
    index: '06',
    title: 'Momentum',
    type: 'Consumer mobile · Habits',
    year: '2025',
    summary:
      'A habit companion built around flexible streaks, accountability partners and progress that feels encouraging.',
    problem:
      'Habit trackers often treat one missed day as failure. Momentum was designed around consistency that can recover, with weekly freezes and social accountability.',
    contribution:
      'I created the mobile product, its Firebase-backed data model and the core experience for habits, streaks, partners, leaderboards, templates and insights.',
    outcome:
      'The result is a complete cross-platform product concept that combines behavioral design with a focused, approachable mobile interface.',
    role: 'Creator · Mobile engineer',
    stack: ['Flutter', 'Firebase', 'iOS', 'Android'],
    palette: ['#14A98B', '#073B32'],
    accent: '#B7F3E6',
    motif: 'MO',
    featured: false,
    image: '/images/works/momentum.png',
    links: [{ label: 'Privacy policy', href: '/privacy' }]
  }
]

export const experiences = [
  {
    period: '2026—Now',
    role: 'Senior Software Engineer',
    company: 'Koru-Green',
    description:
      'Engineering product experiences and dependable systems across the stack.'
  },
  {
    period: '2025',
    role: 'Software Engineer',
    company: 'IM Digital',
    description:
      'Built and refined Flutter products for B2B ordering in a distributed product team.'
  },
  {
    period: '2023—2024',
    role: 'Frontend Web Developer',
    company: 'Matchpoint AI',
    description:
      'Improved a growing AI SaaS platform using Next.js, TypeScript and Tailwind.'
  },
  {
    period: '2023',
    role: 'Code Reviewer & Mentor',
    company: 'Microverse',
    description:
      'Reviewed production-style projects and coached developers working remotely across time zones.'
  }
]

export const capabilities = [
  {
    number: '01',
    title: 'Mobile products',
    description:
      'Cross-platform Flutter applications with thoughtful architecture, reliable state and polished product flows.'
  },
  {
    number: '02',
    title: 'Web platforms',
    description:
      'Full-stack products built with Next.js, TypeScript, Node.js, Supabase and modern data infrastructure.'
  },
  {
    number: '03',
    title: 'Applied AI',
    description:
      'AI features grounded in a real workflow: retrieval, structured context, automation and responsible interfaces.'
  },
  {
    number: '04',
    title: 'Product direction',
    description:
      'Turning ambiguous needs into a focused MVP, a clear technical plan and a product people can actually operate.'
  }
]
