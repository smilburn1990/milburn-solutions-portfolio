export const profile = {
  name: "Sean Milburn",
  role: "CTO & Engineering Leader",
  location: "Bristol · London · Remote",
  email: "seanmilburn1990@gmail.com",
  phone: "+44 7854 156559",
  linkedin: "https://www.linkedin.com/in/sean-milburn-15625387",
  github: "https://github.com/smilburn1990",
  githubHandle: "smilburn1990"
}

export const nav = [
  { label: "Now", to: "/#now" },
  { label: "Platform", to: "/#platform" },
  { label: "Practice", to: "/#practice" },
  { label: "Track record", to: "/#track-record" },
  { label: "CV", to: "/cv" }
]

/* ── Headline metrics — all verifiable from the &Dine platform repo ── */
export const metrics = [
  { value: "6", label: "repositories orchestrated as one platform" },
  { value: "4", label: "production frontends on a single API" },
  { value: "14", label: "years shipping product engineering" },
  { value: "7", label: "purpose-built engineering agents in the loop" }
]

/* ── What I own today ── */
export const now = {
  eyebrow: "Now — &Dine, 2021 to present",
  title: "Head of Technology, then CTO.",
  body: [
    "&Dine is a B2B catering platform connecting London corporates with independent food makers. I joined to run engineering and now own technology end to end — architecture, delivery, security, vendor and budget decisions, and the technical story told to the board and to enterprise procurement.",
    "The platform is six repositories deliberately orchestrated as one: an Express and TypeScript API on MySQL, three separate frontends for customers, mobile and back office, a shared design and type package, and an end-to-end suite. One contract, one auth model, four route tiers, one set of guardrails."
  ],
  ownership: [
    {
      title: "Architecture",
      copy: "Multi-tenant platform design, an OpenAPI 3.1 contract that generates typed frontend SDKs, and an integer-pence money model enforced from the database to the display layer."
    },
    {
      title: "Delivery",
      copy: "Spec-first planning, one branch per repository, three independent review passes on every pull request, and a learning loop that writes findings back into the codebase's own instructions."
    },
    {
      title: "Commercial & compliance",
      copy: "Stripe payment and refund design, Xero as the finance system of record, EU AI Act deployer documentation and DPAs — the things that unblock enterprise customers."
    },
    {
      title: "Team",
      copy: "Hiring, mentoring and setting the bar. The guardrails are written down so a new engineer — or a new agent — inherits the context instead of rediscovering it."
    }
  ]
}

/* ── The platform, in concrete terms ── */
export const platform = {
  eyebrow: "The platform",
  title: "What we actually built.",
  lead:
    "Not a brochure site. A payments-critical, multi-tenant ordering platform with a real ledger, real couriers and real accounting behind it.",
  stack: [
    {
      key: "api",
      name: "Backend API",
      tech: "Express · TypeScript · Sequelize · MySQL",
      stats: ["48 controllers", "65 models", "55 services"],
      copy:
        "Four route tiers with distinct auth — public, hub users, customers, and server-to-server internal. Two signature-verified inbound webhooks mounted ahead of the JSON parser so the raw body still validates. Documented in OpenAPI 3.1 and bundled into live Swagger docs at build."
    },
    {
      key: "site",
      name: "Customer site",
      tech: "Nuxt 4 SSR · Pinia · SCSS",
      stats: ["Browse-first", "SEO-rendered", "Enterprise SSO"],
      copy:
        "The main ordering surface. Server-rendered for search, with SAML and OIDC logins brokered through WorkOS so one integration covers Okta, Entra and the rest. Checkout state is owned by the backend ledger — the frontend derives what to show and never invents it."
    },
    {
      key: "app",
      name: "Mobile app",
      tech: "Nuxt 4 static · Capacitor 7 · iOS & Android",
      stats: ["Funnel-first UX", "Native builds", "Safe-area native"],
      copy:
        "A deliberately different product on the same API and auth — a cuisine, date, time and occasion funnel rather than browse-first. Statically generated, no server on the device, wrapped with Capacitor for the App Store and Play Store."
    },
    {
      key: "hub",
      name: "Admin & maker hub",
      tech: "Nuxt 3 SPA · Vuex · Chart.js",
      stats: ["Two role models", "Order lifecycle", "Product analytics"],
      copy:
        "Where operations and the independent makers run the business — menus, orders, deliveries, invoicing and reporting. Admin and maker are genuinely separate permission worlds, enforced by route guards on the server rather than hidden buttons on the client."
    },
    {
      key: "shared",
      name: "Shared package",
      tech: "TypeScript · SCSS tokens",
      stats: ["Framework-free", "Single edit, two apps"],
      copy:
        "Design tokens, API types and pure utilities consumed by both customer frontends. No Vue, no Nuxt, no framework lock — so one change lands in both surfaces instead of drifting apart."
    },
    {
      key: "tests",
      name: "End-to-end suite",
      tech: "Playwright",
      stats: ["Cross-surface", "Checkout critical paths"],
      copy:
        "The money paths get exercised for real: cart to payment intent to refund, across the surfaces that share the same contract."
    }
  ],
  problems: [
    {
      title: "Payments that survive an edit",
      copy:
        "Orders change after they are paid for. The platform does refund-then-repay rather than partial refunds — full refund of the original payment, customer pays the new total — with refunds executed after the database transaction commits so a Stripe failure can never roll back a committed order. Account billing, employee top-up ledgers and premium group orders each have their own path through it."
    },
    {
      title: "A ledger the UI cannot lie about",
      copy:
        "Payment state lives in the backend ledger and nowhere else. Every status the API can return has an explicit, designed affordance on the frontend — including the awkward ones. Clearing state locally to make a cart editable again was the failure mode; it masked incomplete ledger rows and blocked the customer's next payment entirely."
    },
    {
      title: "Money, integers, all the way through",
      copy:
        "Every monetary value is an integer in pence — net, VAT, gross — from the column type to the API contract. Floats never touch it. Pounds exist only at the display layer, and in exactly one place in each analytics facade, which rejects a formatted string rather than guess at its scale."
    },
    {
      title: "Finance as a first-class integration",
      copy:
        "Xero is the system of record for invoicing, synced through a queued consumer rather than ad-hoc writes, so an accounting push is always deliberate and always auditable. Deliveries run through two networks — scheduled and same-day cargo bike — with signature-verified webhooks and a receipt row per event, because neither provider retries."
    }
  ],
  integrations: [
    "Stripe", "Xero", "HubSpot", "Mailgun", "Twilio", "Slack",
    "Onfleet", "PedalMe", "WorkOS SSO", "Mixpanel", "PostHog", "Sentry"
  ],
  infra: [
    "AWS eu-west-2", "EC2", "Amplify", "S3", "EFS", "Secrets Manager",
    "CloudFlare", "Docker", "GitHub Actions"
  ]
}

/* ── Agentic engineering ── */
export const practice = {
  eyebrow: "Practice",
  title: "Agentic engineering, with the guardrails written down.",
  lead:
    "The interesting part is not that we use AI to write code. It is that the platform teaches itself — every review finding becomes a rule, and every rule is enforced on the next change, by agents and humans alike.",
  pillars: [
    {
      n: "01",
      title: "Seven agents, each with one job",
      copy:
        "Planner, developer, reviewer, code reviewer, security reviewer, retrospective and a prototyping agent that sits outside the normal flow. They are defined as version-controlled markdown, so an agent's remit is reviewed like any other change."
    },
    {
      n: "02",
      title: "Spec first, always",
      copy:
        "66 written specifications. A feature starts as a spec, becomes a cross-repository plan, and is reviewed against that spec at the end — not just against code quality. The spec is the contract between intent and implementation."
    },
    {
      n: "03",
      title: "Three independent review passes",
      copy:
        "Every pull request is reviewed for spec compliance, for correctness and pattern adherence, and for security — OWASP, auth boundaries, payment handling. Independent passes catch what a single reviewer, human or model, rationalises away."
    },
    {
      n: "04",
      title: "A learning loop that actually closes",
      copy:
        "688 logged decisions and 83 per-pull-request review narratives. A finding does not stop at a comment: it is routed to the file that failed to communicate it — the controller's instructions, the conventions doc, the platform ruleset. The same mistake is not allowed to happen twice."
    },
    {
      n: "05",
      title: "Guardrails as executable context",
      copy:
        "A single ruleset every agent must obey: money in pence, no partial refunds, never derive ledger state client-side, never write to the accounting system without approval. Constraints that used to live in someone's head now live in the repository."
    },
    {
      n: "06",
      title: "AI in production, governed",
      copy:
        "Claude parses maker menus and event proposals into structured data in back-office flows — stateless, single-shot, and human-reviewed before anything is published. Documented for EU AI Act assessment as a deployer of a general-purpose model, with a sub-processor DPA and no customer data used for training. The ordering platform itself is deliberately deterministic."
    }
  ]
}

/* ── Capabilities ── */
export const capabilities = [
  {
    group: "Leadership",
    items: [
      "Engineering strategy & roadmap",
      "Hiring, mentoring & team design",
      "Board & stakeholder reporting",
      "Budget & vendor management",
      "Security, GDPR & EU AI Act compliance",
      "Technical due diligence"
    ]
  },
  {
    group: "Agentic engineering",
    items: [
      "Claude Code & subagent orchestration",
      "Spec-driven development",
      "Guardrail & context design",
      "Model Context Protocol (MCP)",
      "Automated review pipelines",
      "AI governance & documentation"
    ]
  },
  {
    group: "Architecture",
    items: [
      "Multi-tenant platform design",
      "OpenAPI 3.1 contract design",
      "Payments, ledgers & reconciliation",
      "Webhook & integration design",
      "Observability & incident response",
      "Domain-driven service boundaries"
    ]
  },
  {
    group: "Languages & runtime",
    items: ["TypeScript", "JavaScript (ES2023)", "Node.js", "SQL", "Python", "Bash"]
  },
  {
    group: "Frontend",
    items: ["Nuxt 4 & Nuxt 3", "Vue 3", "Pinia & Vuex", "React", "SCSS & design tokens", "Capacitor (iOS/Android)"]
  },
  {
    group: "Backend & data",
    items: ["Express", "Sequelize", "MySQL", "REST & OpenAPI", "Stripe", "Xero API"]
  },
  {
    group: "Cloud & delivery",
    items: ["AWS (EC2, Amplify, S3, EFS, Secrets Manager)", "CloudFlare", "Docker", "GitHub Actions", "Sentry", "Mixpanel & PostHog"]
  },
  {
    group: "Quality",
    items: ["Vitest", "Playwright", "Vue Test Utils", "Integration testing", "Test baselining"]
  }
]

/* ── Career ── */
export const roles = [
  {
    company: "&Dine",
    title: "CTO — previously Head of Technology",
    period: "2021 — present",
    summary:
      "Own technology end to end for a B2B catering platform: architecture, delivery, security, compliance and the engineering team.",
    points: [
      "Grew a single product into a six-repository platform — API, customer site, native mobile app, admin hub, shared package and end-to-end suite — on one contract and one auth model.",
      "Designed the payments architecture: Stripe refund-then-repay on edits, post-commit refund execution, account billing, employee top-up ledgers and group ordering.",
      "Made Xero the finance system of record through a queued, auditable sync rather than ad-hoc writes.",
      "Shipped the mobile app to iOS and Android with Capacitor, with a deliberately distinct funnel-first UX rather than a wrapped website.",
      "Introduced enterprise SSO via WorkOS, unblocking corporate customers with Okta and Entra.",
      "Built an AI-assisted engineering practice — seven specialised agents, spec-first delivery, three review passes per PR, and a learning loop with 688 logged decisions.",
      "Wrote the AI governance and EU AI Act deployer documentation that clears enterprise vendor assessments."
    ]
  },
  {
    company: "Just Eat / Menulog",
    title: "Frontend Engineer — contract, then permanent",
    period: "2019 — 2021",
    summary:
      "Joined on contract to build the new menu microsite into the existing platform architecture, then hired permanently.",
    points: [
      "Built core Vue components — including the header and footer used across the platform — for a global rollout.",
      "Developed the Menulog theme for Australia and New Zealand in parallel on the shared codebase, with locale logic for pricing, currency, opening times and location, toggled by a single config value.",
      "Worked inside a large, multi-team frontend estate where a component change reached several national tenants at once."
    ]
  },
  {
    company: "Mettrr Technologies",
    title: "Tech Lead — previously Senior Developer",
    period: "2017 — 2019",
    summary:
      "First leadership role. Joined as a senior developer and moved into leading the frontend team.",
    points: [
      "Architected and built the company's frontend from scratch in Nuxt, choosing SSR for search crawlability and building on the Vue knowledge already in the team.",
      "Integrated a Netlify-backed CMS so marketing could publish content and new landing pages without a developer in the loop.",
      "Set the frontend standards and mentored the team — the step from writing the code to being responsible for how a team writes it."
    ]
  },
  {
    company: "Love Home Swap",
    title: "Frontend Developer",
    period: "2016 — 2017",
    summary:
      "Modernised the frontend of an ageing PHP platform.",
    points: [
      "Built a reusable React and Redux component library, distributed internally via npm.",
      "Replaced legacy features incrementally rather than attempting a rewrite.",
      "Unit tested critical paths on both client and server."
    ]
  },
  {
    company: "Apto Solutions",
    title: "Developer — from graduate",
    period: "2014 — 2016",
    summary:
      "Multi-platform delivery in an agile team, remote and on site.",
    points: [
      "Shipped across several concurrent client projects and platforms.",
      "Built and released Cordova applications; set up and maintained development environments.",
      "Hosted weekly internal tech forums."
    ]
  },
  {
    company: "New Era Education",
    title: "Junior Developer",
    period: "2012 — 2013",
    summary: "First professional role — JavaScript, agile delivery and working alongside designers."
  }
]

/* The CV runs the three most recent roles only. The earlier career is kept as a
   one-line summary so a reader does not hit an unexplained gap before 2017 —
   the site's Track record section still carries the full history. */
export const cvRoles = roles.slice(0, 3)

export const earlierCareer =
  "Love Home Swap — Frontend Developer (2016 — 2017) · Apto Solutions — Developer (2014 — 2016) · New Era Education — Junior Developer (2012 — 2013)"

export const freelance = [
  { name: "Bauce Brothers", copy: "Migrated Squarespace to Shopify, adding analytics tracking and SEO metadata to drive conversion." },
  { name: "Ideal Flatmate", copy: "Managed an outsourced frontend team through a rebrand and built features in React and Redux in house." }
]

export const education = [
  { qualification: "BSc (Hons) Forensic Computing — 2:1", place: "University of the West of England" },
  { qualification: "Computer Science Foundation", place: "City of Bristol College" }
]

export const outside = {
  title: "Away from the keyboard",
  copy:
    "Camping and travelling with my young family, and a fairly serious commitment to sauna, cold water and the rest of the wellbeing rabbit hole. It is where most of my better architectural decisions have actually been made."
}
