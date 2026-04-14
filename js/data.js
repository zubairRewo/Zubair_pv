const projectsData = [
  {
    id: "fixail",
    title: "fixail",
    category: "Mobile",
    tags: ["Flutter", "Laravel", "Node.js", "Firebase", "i18n"],
    status: "Active Development",
    icon: "🏠",
    accent: "#a07aff",
    subtitle: "Modular Super App Ecosystem for Home Services",
    description: "A high-scale modular ecosystem engineered to unify fragmented service domains including on-demand maintenance, spare parts commerce, and B2B facility management under a single architectural roof.",
    problem: "Traditional monolithic apps fail in the multi-service domain due to complex dependency entanglements. Businesses either struggle with multiple disconnected apps or a monolith that is impossible to scale across regions and services.",
    solution: "A Package-Based Micro-Frontend Architecture. The ecosystem is decoupled into 'Feature Packages' (Service, Spares, Quick, Business) that plug into a main container. This allows independent scaling and deployment of business modules without system-wide regressions.",
    architecture: {
      app: "Modular Flutter architecture where business verticals are delivered as decoupled packages. State management via reactive providers ensures predictable performance across thousands of concurrent sessions.",
      backend: "Centralized Laravel 10 core utilizing a Service-Oriented design. Includes a Global DB for identity and Regional DBs for operational data, ensuring multi-country compliance and low-latency throughput.",
      infrastructure: "Status-driven state machines for booking lifecycles, real-time tracking via Socket.io, and automated AWS S3 media orchestration."
    },
    logic: [
      { h: "Capacity-Based Slot Engine", p: "A dynamic algorithm that validates worker availability and travel overhead before confirming bookings, ensuring 100% SLA adherence." },
      { h: "Auto Dispatch Matrix", p: "Assigns the optimal technician based on proximity, historical performance rating, and real-time workload balance." },
      { h: "Multi-Role Wallet System", p: "Automated real-time earnings calculation with platform commission deduction and instant payout orchestration." }
    ],
    features: [
      "Micro-Frontend based Modular App Structure",
      "Multi-Country Geo-Based DB Routing",
      "Real-time Booking State Machine & Tracking",
      "Advanced Slot Management & Capacity Control",
      "B2B Subscription Maintenance Module"
    ],
    techStack: ["Flutter 3.x", "Laravel 10", "Node.js (Quick Engine)", "Firebase", "Socket.io", "Redis", "MySQL & PostgreSQL"],
    role: "System Architect & Lead Engineer. Designed the complete modular strategy, architected the multi-tenant backend, and defined the systemic business logic for cross-region scaling.",
    impact: "Created a single platform capable of replacing a dozen niche apps, ready for deployment across multiple Middle Eastern markets with zero architectural debt.",
    links: { download: "https://onelink.to/4yvrvu" }
  },
  {
    id: "fixail-care",
    title: "Fixail care",
    category: "ERP",
    tags: ["Flutter", "Laravel", "Firebase", "WhatsApp API"],
    status: "Advanced Development",
    icon: "🔧",
    accent: "#4effc6",
    subtitle: "Brand-Centric After-Sales Service ERP & FSM",
    description: "An enterprise-grade orchestration layer designed for brands to manage the complete lifecycle of after-sales operations, from service ticketing and technician management to inventory control and warranty validation.",
    problem: "After-sales operations are notoriously chaotic. Brands often lose visibility once a request leaves the head office, leading to inventory leakage, inaccurate warranty billing, and fragmented customer experiences.",
    solution: "A 'Backend-as-Control-Tower' architecture. The mobile app acts strictly as an execution interface with forced validation steps, while the web ERP centralizes all business logic, financial redirections, and audit trails.",
    architecture: {
      system: "A status-driven lifecycle engine with strict stage validations. Every action (Accept → Start → Complete) is logged with high-precision timestamps and geo-stamps for full transparency.",
      inventory: "Integrated 'Part-Request' workflow that connects field technician needs directly to branch inventory levels, featuring defective-return tracking and automated stock replenishment alerts."
    },
    logic: [
      { h: "Warranty Dynamic Pricing", p: "A rule-based engine that calculates service costs based on brand agreements, product age, and warranty classification (AMC, Extended, etc.)." },
      { h: "Payment Redirection Matrix", p: "Complex logic that splits service and part costs dynamically between the Brand and the Customer based on the specific ticket context." },
      { h: "Technician Incentive Engine", p: "Calculates payouts based on travel distance, job complexity, and customer feedback ratings in real-time." }
    ],
    features: [
      "Ticket-Based Lifecycle Orchestration",
      "Warranty-Aware Multi-Layer Pricing Engine",
      "Field Part Request & Tracking Workflow",
      "Dynamic Payment Split Logic (Brand vs Customer)",
      "Role-Based Fine-Grained Access Control (RBAC)"
    ],
    techStack: ["Flutter", "Laravel 9", "MySQL", "WhatsApp Business API", "Firebase Messaging"],
    role: "System Architect & Backend Strategist. Engineered the pricing engine and payment redirection logic, ensuring 100% financial accuracy across thousands of monthly service tickets.",
    impact: "Eliminated manual service coordination bottleneck, improved technician productivity by 30%, and provided brands with real-time operational visibility.",
    links: { playStore: "https://play.google.com/store/apps/details?id=com.fixail.care" }
  },
  {
    id: "moestay",
    title: "moestay",
    category: "Hospitality",
    tags: ["Flutter", "Node.js", "Riverpod", "Socket.io", "DigiLocker API"],
    status: "In Development",
    icon: "🏨",
    accent: "#ff70b8",
    subtitle: "Digital Infrastructure for Verified Managed Stays",
    description: "A secure, trust-first ecosystem designed to automate property management and resident onboarding through deep identity verification and subscription-based financial workflows.",
    problem: "The managed-stay industry suffers from a lack of trust and operational friction. Manual KYC is prone to forgery, while rigid booking systems prevent flexible co-living models.",
    solution: "Implementation of a 'Verified Ecosystem' where identity is validated via government vaults (DigiLocker) before access. A modular feature-first app design allows room, spa, and event bookings to share a unified checkout bus.",
    architecture: {
      frontend: "Feature-driven Flutter architecture utilizing Riverpod for high-performance reactive state management and optimistic UI updates during slow network conditions.",
      backend: "RESTful Node.js backend with Socket.io orchestration for real-time inventory visibility and resident-to-manager communication."
    },
    logic: [
      { h: "DigiLocker KYC Integration", p: "One-click identity vault integration ensuring 100% verified occupancy and zero manual data entry errors." },
      { h: "Subscription Financial Engine", p: "Automated recurring billing system for rent and utilities with integrated referral reward triggers." },
      { h: "AI-Ready Matching Algorithm", p: "Predictive finder system that suggests stays based on user lifestyle preferences, amenities, and community vibe." }
    ],
    features: [
      "Instant Verified Onboarding (Deep KYC)",
      "Multi-Vertical Unified Booking Engine",
      "Automated Rent & Utility Billing Suite",
      "Real-Time Inventory State Orchestration",
      "Optimistic UI & Offline Data Sync"
    ],
    techStack: ["Flutter", "Node.js", "Express.js", "MongoDB", "Riverpod", "Socket.io", "DigiLocker SDK"],
    role: "Lead Architect. Designed the end-to-end modular app framework and directed the transition from traditional booking to a scalable recurring revenue model.",
    impact: "Built a 70% faster resident onboarding pipeline and created an infrastructure capable of scaling from 10 to 1,000+ managed units seamlessly.",
    links: {}
  },
  {
    id: "rewostore",
    title: "Rewostore",
    category: "Construction",
    tags: ["React Native", "Node.js", "MySQL", "Google Maps"],
    status: "Delivered",
    icon: "🏗️",
    accent: "#a29bfe",
    subtitle: "Multi-Role Construction Material Ecosystem",
    description: "A specialized construction marketplace that solves the 'Last-Mile' procurement challenge by connecting contractors, suppliers, and transporters through a multi-party transactional workflow.",
    problem: "Construction procurement is notoriously fragmented. Contractors lack pricing transparency, while the lack of coordinated logistics between suppliers and transporters causes massive worksite delays.",
    solution: "A state-driven role machine where an order only proceeds once all three parties (Buyer, Supplier, Transporter) are locked in. This ensures 100% transaction integrity and delivery visibility.",
    architecture: {
      roles: "Decoupled mobile interfaces for three distinct roles, all powered by a centralized state-managing backend that enforces role-based permissions and logic transitions.",
      logistics: "Integrated Google Maps geolocation engine used for proximity-based supplier matching and real-time transporter route tracking."
    },
    logic: [
      { h: "Multi-Role Dependency Engine", p: "Ensures an order cannot be placed without a validated supplier and a chosen transporter, eliminating communication gaps." },
      { h: "Worksite-Centric Tracking", p: "Allows contractors to manage multiple concurrent construction sites with site-specific inventory and logistics logs." },
      { h: "State-Driven Transaction Flow", p: "A rigid state machine preventing any stage bypass, ensuring that payments are only settled upon validated delivery." }
    ],
    features: [
      "Multi-Stakeholder Transactional Engine",
      "Worksite-Based Logistics & Mapping",
      "Real-Time GPS Delivery Tracking",
      "Role-Based Approval Gatekeeping Layer",
      "Dynamic Pricing & Multi-Tier Logistics"
    ],
    techStack: ["React Native", "Node.js", "Laravel (Legacy Support)", "MySQL", "Google Maps API", "Socket.io"],
    role: "System Architect & Senior Developer. Designed the multi-role dependency engine and built the real-time logistics tracking system.",
    impact: "Delivered a production-ready ecosystem that transformed construction procurement from manual phone calls to a structured digital workflow.",
    links: {}
  },
  {
    id: "zean-erp",
    title: "zean erp",
    category: "Retail",
    tags: ["Node.js", "PostgreSQL", "Redis", "Next.js", "WebSockets"],
    status: "Production",
    icon: "🏪",
    accent: "#c8ff57",
    subtitle: "Enterprise-Grade High-Concurrency Retail ERP",
    description: "A high-throughput retail operations engine built for stability, featuring automated fiscal compliance (GST/VAT) and centralized multi-branch orchestration.",
    problem: "Mid-to-large supermarket chains often suffer from POS lag during peak hours and data silos that make financial reconciliation a manual nightmare.",
    solution: "Implementation of an Asynchronous Sales Processor. POS transactions are finalized in <100ms via Redis and BullMQ, while heavy financial bookkeeping and ledger updates occur in the background.",
    architecture: {
      backend: "Modular Node.js backend using ES Modules. Features a Metadata-Driven Tax Schema that decouples fiscal logic from product data for instant regional adaptation.",
      database: "Highly-normalized PostgreSQL schema managed via Knex migration, ensuring ACID-compliant transactional integrity across complex multi-branch ledgers."
    },
    logic: [
      { h: "Async Sale Processing", p: "Abstracted heavy profit calculations into background workers to ensure zero peak-hour POS downtime." },
      { h: "Metadata-Driven Tax Engine", p: "Standardized HSN/GST lookup systems that automatically calculate multi-regional compliance without manual input." },
      { h: "Digital Daily Closing Workflow", p: "A fail-safe financial discipline engine that enforces branch-level reconciliation before the business day can be finalized." }
    ],
    features: [
      "Multi-Branch Centralized Command Cockpit",
      "High-Performance Async POS Workflow",
      "Automated Multi-Regional Tax Engine (GST)",
      "Dynamic Inventory Cost-Averaging Engine",
      "Real-time Multi-Location Stock Visibility"
    ],
    techStack: ["Node.js (Express)", "PostgreSQL", "Redis", "BullMQ", "Next.js", "WebSockets"],
    role: "System Architect. Led the end-to-end strategy for database normalization, background worker orchestration, and high-concurrency API performance.",
    impact: "Reduced manual reconciliation time by 40% and successfully eliminated all POS-related lag during promotional high-traffic periods.",
    links: {}
  },
  {
    id: "ecommerce",
    title: "ecommerce",
    category: "E-commerce",
    tags: ["Laravel", "Next.js", "PWA", "Strategy Pattern", "Lenis"],
    status: "Production",
    icon: "🛍️",
    accent: "#57e5ff",
    subtitle: "Strategic Architect for Global Commerce Suites",
    description: "A comprehensive portfolio of specialized high-performance systems optimized for multi-vendor autonomy, global payments, and cinematic UX.",
    problem: "Generic e-commerce engines often fail at specific business scale needs: either lack of vendor control (New Delmon), payment fragmentation (Vibe), or slow UI for high-item catalogs (Zendo).",
    solution: "Deployed specialized patterns for each business need: Headless API fragmentation for vendor autonomy, Strategy Pattern for payment agnosticity, and NoSQL aggregation for high-speed grocery browsing.",
    brands: [
      {
        name: "New Delmon",
        url: "https://newdelmon.com",
        tagline: "Headless Multi-Vendor Platform",
        architecture: "Decoupled API-First (Laravel + Next.js). Features ACID-compliant transaction layers and multi-tier logistics orchestration (State/District/Division).",
        logic: "Contract-to-Commerce workflow allowing administrative governance to coexist with vendor autonomy.",
        techStack: ["Laravel 9", "Next.js", "MySQL", "Stripe"]
      },
      {
        name: "Vibe",
        url: "https://vybonline.ae",
        tagline: "Global Transactional Engine",
        architecture: "Monolithic Laravel core with Service-Oriented Payment Adapters. PWA-integrated for native-like mobile accessibility.",
        logic: "Strategy Pattern implementation supporting 10+ international payment gateways through a unified adapter layer.",
        techStack: ["Laravel 10", "Paytm", "N-Genius", "Razorpay", "Redis Caching"]
      },
      {
        name: "Zendo Supermarket",
        url: "https://zendoksa.com",
        tagline: "Enterprise Grocery Suite (KSA)",
        architecture: "Modern Mean-ish Stack with Next.js 16 and MongoDB. Optimized aggregation pipelines for high-item-count grocery catalogs.",
        logic: "Zero-Friction shopping experience using Framer Motion and Lenis for cinematic, high-speed UX.",
        techStack: ["Node.js", "Express", "TypeScript", "MongoDB", "Framer Motion"]
      }
    ],
    techStack: ["Laravel 10", "Next.js 16", "TypeScript", "Node.js", "MongoDB", "MySQL", "AWS S3", "Redis"],
    role: "Lead Architect & Technical Consultant. Focused on standardizing the transaction layers and ensuring high-end UI consistency across varying stack choices.",
    impact: "Enabled immediate market entry into 15+ global regions and achieved a 60% reduction in manual order processing via automated logistics loops.",
    links: { live: "https://newdelmon.com" }
  }
];
