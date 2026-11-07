/**
 * ELITE EDUCATION - Course Catalogue
 * Tracks:
 * Track A: CA (CA Foundation, CA Intermediate, CA Final)
 * Track B: CMA (CMA Foundation, CMA Intermediate, CMA Final)
 * Track C: CS (CSEET, CS Executive, CS Professional)
 * Track D: Foundations (Maths made easy, Vedic Maths, Aptitude Maths, English Grammar)
 * 
 * Note: YouTube IDs are placeholders or swappable IDs.
 * Access rules on the server protect these IDs so locked lectures never expose the ID to unauthorized clients.
 */

export interface Lecture {
  order: number;
  title: string;
  youtubeId: string; // Swappable YouTube Video ID
  duration: string;
  description?: string;
  isFreeDemo?: boolean;
}

export interface SecuredLecture {
  order: number;
  title: string;
  duration: string;
  description?: string;
  isFreeDemo?: boolean;
  access: "unlocked" | "locked";
  lockReason?: "signup_required" | "enrollment_required";
  youtubeId: string | null;
}

export interface SyllabusModule {
  moduleNumber: number;
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  track: "CA" | "CMA" | "CS" | "Foundations";
  trackName: string;
  title: string;
  slug: string;
  tagline: string;
  description: string;
  level: "Foundation / Entry" | "Intermediate / Executive" | "Final / Professional" | "Skill & Aptitude";
  durationPlaceholder: string;
  feesPlaceholder: string;
  batchTimingPlaceholder: string;
  lectureCount: number;
  badge?: string;
  ratingPlaceholder: string;
  faculty: string;
  highlights: string[];
  modules: SyllabusModule[];
  lectures: Lecture[];
}

export const coursesData: Course[] = [
  // TRACK A: CA
  {
    id: "ca-foundation",
    track: "CA",
    trackName: "Chartered Accountancy",
    title: "CA Foundation Comprehensive",
    slug: "ca-foundation",
    tagline: "Build an unshakable conceptual bedrock for your CA journey.",
    description:
      "Engineered by Prof. Er. Manoj Kumar, this program decodes Quantitative Aptitude, Accounting, Business Law, and Economics into crystal-clear mental frameworks. Special emphasis on high-speed mathematical problem solving.",
    level: "Foundation / Entry",
    durationPlaceholder: "[DURATION: 4–5 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Morning & Evening Available]",
    lectureCount: 68,
    badge: "Specialised Track",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & Core Elite Faculty",
    highlights: [
      "Signature speed tricks for Quantitative Aptitude & Statistics",
      "Accounting fundamentals rebuilt from first principles",
      "Section-by-section Law case study methodology",
      "Weekly mock tests simulated on ICAI exam pattern",
      "Full 1-on-1 doubt resolution & personal mentoring",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Paper 1: Accounting Principles & Practice",
        topics: [
          "Theoretical Framework & Accounting Process",
          "Bank Reconciliation Statement (BRS) Speed Method",
          "Inventories, Depreciation & Special Transactions",
          "Final Accounts of Sole Proprietors & Partnerships",
        ],
      },
      {
        moduleNumber: 2,
        title: "Paper 2: Business Laws & Business Correspondence",
        topics: [
          "Indian Contract Act, 1872 & Case Study Drafting",
          "Sale of Goods Act, 1930 & Partnership Act",
          "Limited Liability Partnership (LLP) Act",
          "Companies Act, 2013: Essential Fundamentals",
        ],
      },
      {
        moduleNumber: 3,
        title: "Paper 3: Quantitative Aptitude (Manoj Sir's Signature Track)",
        topics: [
          "Ratio, Proportion, Indices & Logarithms Short-Cuts",
          "Equations, Linear Inequalities & Matrices",
          "Time Value of Money (Compounding, Annuity Tricks)",
          "Permutations & Combinations Intuitive Method",
          "Measures of Central Tendency, Dispersion & Probability",
        ],
      },
      {
        moduleNumber: 4,
        title: "Paper 4: Business Economics",
        topics: [
          "Demand, Supply & Consumer Behaviour Analysis",
          "Theory of Production & Cost Functions",
          "Price Determination in Different Markets",
          "Business Cycles & Macroeconomic Indicators",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: Quantitative Aptitude — Time Value of Money & Short-cut Tricks",
        youtubeId: "dQw4w9WgXcQ", // Placeholder: Replace with your YouTube Video ID
        duration: "46 min",
        description: "Open access demo covering Manoj Sir's 10-second annuity & compounding techniques.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Accounting Framework — Journal to Trial Balance Logic",
        youtubeId: "VIDEO_ID_HERE_CA_F_02",
        duration: "52 min",
        description: "Mastering ledger classification without rote memorization.",
      },
      {
        order: 3,
        title: "Lecture 3: Business Law — Formation of Valid Contracts & Case Laws",
        youtubeId: "VIDEO_ID_HERE_CA_F_03",
        duration: "58 min",
        description: "Techniques to write high-scoring answers in law exams.",
      },
      {
        order: 4,
        title: "Lecture 4: Statistics Mastery — Dispersion & Standard Deviation Made Effortless",
        youtubeId: "VIDEO_ID_HERE_CA_F_04",
        duration: "50 min",
        description: "Graphic and intuitive shortcuts for statistical problems.",
      },
      {
        order: 5,
        title: "Lecture 5: Microeconomics — Elasticity of Demand Mechanics",
        youtubeId: "VIDEO_ID_HERE_CA_F_05",
        duration: "44 min",
        description: "Interactive visual diagrams that guarantee full marks.",
      },
    ],
  },
  {
    id: "ca-intermediate",
    track: "CA",
    trackName: "Chartered Accountancy",
    title: "CA Intermediate (Group 1 & 2)",
    slug: "ca-intermediate",
    tagline: "Exemption-oriented coaching for both groups with practical tax & audit insight.",
    description:
      "Deep technical coverage of Advanced Accounting, Corporate Laws, Cost & Management Accounting, Taxation (Direct & GST), Auditing, and Financial Management with rigorous ICAI RTP/MTP problem solving.",
    level: "Intermediate / Executive",
    durationPlaceholder: "[DURATION: 8–9 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Morning Regular & Weekend Batches]",
    lectureCount: 140,
    badge: "Flagship Program",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & Specialist CA Mentors",
    highlights: [
      "Exemption strategy for Costing & Financial Management",
      "Direct Tax & GST practical computation drills",
      "Audit documentation and Standards on Auditing (SAs) simplified",
      "Chapter-wise ICAI past 10 years scanner dissection",
      "Comprehensive notes & formula quick-reference sheets",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Group 1: Advanced Accounting & Corporate Laws",
        topics: [
          "Accounting Standards (AS) & Ind AS Framework",
          "Consolidation of Financial Statements & Amalgamation",
          "Companies Act 2013, Management & Administration",
          "Interpretation of Statutes & General Clauses Act",
        ],
      },
      {
        moduleNumber: 2,
        title: "Group 1: Taxation (Direct Tax & Goods and Services Tax)",
        topics: [
          "5 Heads of Income & Total Income Computation",
          "TDS, TCS, Advance Tax & Return Filing Procedures",
          "Concept of Supply, Place of Supply & Time of Supply",
          "Input Tax Credit (ITC) Rules & Reverse Charge Mechanism",
        ],
      },
      {
        moduleNumber: 3,
        title: "Group 2: Cost & Management Accounting",
        topics: [
          "Material, Labour & Overhead Cost Allocation",
          "Marginal Costing, CVP Analysis & Decision Making",
          "Standard Costing & Variance Analysis Formula Tricks",
          "Budgetary Control & Activity Based Costing (ABC)",
        ],
      },
      {
        moduleNumber: 4,
        title: "Group 2: Auditing & Ethics & Financial Management",
        topics: [
          "Standards on Auditing (SA 200 to 700 series)",
          "Internal Control & Audit in Automated Environments",
          "Capital Budgeting & Cost of Capital (WACC)",
          "Working Capital Management & Ratio Analysis",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: Cost & Management Accounting — Marginal Costing Formula Shortcuts",
        youtubeId: "dQw4w9WgXcQ",
        duration: "54 min",
        description: "How to solve multi-product break-even problems in 90 seconds without memorizing equations.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Taxation — Total Income & AMT Computation Strategy",
        youtubeId: "VIDEO_ID_HERE_CA_I_02",
        duration: "61 min",
        description: "Practical steps to tackle 14-mark tax computation questions.",
      },
      {
        order: 3,
        title: "Lecture 3: Advanced Accounting — Amalgamation & Purchase Consideration",
        youtubeId: "VIDEO_ID_HERE_CA_I_03",
        duration: "58 min",
        description: "Net asset method vs Net payment method made straightforward.",
      },
      {
        order: 4,
        title: "Lecture 4: Corporate Law — Meetings, Resolutions & Minutes Mastery",
        youtubeId: "VIDEO_ID_HERE_CA_I_04",
        duration: "49 min",
        description: "Drafting high-precision answers for ICAI law exams.",
      },
    ],
  },
  {
    id: "ca-final",
    track: "CA",
    trackName: "Chartered Accountancy",
    title: "CA Final Specialized Prep",
    slug: "ca-final",
    tagline: "Strategic mastery for the ultimate chartered milestone.",
    description:
      "Advanced analytical mentorship for CA Final candidates with deep dive into Financial Reporting (Ind AS), Strategic Financial Management (SFM/AFM), Direct Tax Laws, and Corporate & Economic Laws.",
    level: "Final / Professional",
    durationPlaceholder: "[DURATION: 6–8 Months Modules]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Early Morning & Weekend Sessions]",
    lectureCount: 160,
    badge: "Advanced Level",
    ratingPlaceholder: "4.95 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & Senior CA Fellows",
    highlights: [
      "Rigorous case studies modeled on current ICAI case-based formats",
      "Advanced Ind AS financial modeling and carve-outs",
      "SFM/AFM portfolio and derivatives numerical shortcuts",
      "International Taxation and Transfer Pricing litigation insights",
      "One-to-one mentorship till final examination day",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Financial Reporting (Ind AS Masterclass)",
        topics: [
          "Ind AS 115 (Revenue from Contracts) & Ind AS 116 (Leases)",
          "Business Combinations (Ind AS 103) & Consolidated Financials (Ind AS 110)",
          "Financial Instruments (Ind AS 32, 107, 109)",
        ],
      },
      {
        moduleNumber: 2,
        title: "Advanced Financial Management (AFM)",
        topics: [
          "Forex Risk Management & Currency Arbitrage",
          "Interest Rate Risk Management & Swaps",
          "Portfolio Management & Mutual Funds Evaluation",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: AFM — Forex Risk Management & Triangle Arbitrage",
        youtubeId: "dQw4w9WgXcQ",
        duration: "50 min",
        description: "Understanding cross-currency rates and arbitrage without memorizing bid-ask tables.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Ind AS 115 — 5-Step Model for Complex Contracts",
        youtubeId: "VIDEO_ID_HERE_CA_F_02",
        duration: "65 min",
        description: "Practical scenarios and ICAI favorite tricky questions.",
      },
    ],
  },

  // TRACK B: CMA
  {
    id: "cma-foundation",
    track: "CMA",
    trackName: "Cost & Management Accountancy",
    title: "CMA Foundation Intensive",
    slug: "cma-foundation",
    tagline: "High-scoring foundation course for ICMAI aspirants.",
    description:
      "Comprehensive coaching for Fundamentals of Business Laws and Communication, Fundamentals of Financial & Cost Accounting, Fundamentals of Business Mathematics & Statistics, and Fundamentals of Business Economics & Management.",
    level: "Foundation / Entry",
    durationPlaceholder: "[DURATION: 4 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Afternoon & Evening Cohorts]",
    lectureCount: 54,
    badge: "High Pass Ratio",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & CMA Subject Mentors",
    highlights: [
      "Business Mathematics & Statistics special shortcuts by Manoj Sir",
      "Cost accounting foundation from ground up",
      "ICMAI online examination test interface practice",
      "Comprehensive question banks with 1,000+ MCQs",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Business Mathematics & Statistics",
        topics: [
          "Arithmetic Progressions, Geometric Progressions, Permutations",
          "Calculus Fundamentals for Business Applications",
          "Statistical Representation, Central Tendency & Index Numbers",
        ],
      },
      {
        moduleNumber: 2,
        title: "Financial & Cost Accounting Fundamentals",
        topics: [
          "Accounting Concepts, Conventions & Double Entry System",
          "Cost Sheets, Elements of Cost & Overheads",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: Business Mathematics — Speed Arithmetic & Sequence Tricks",
        youtubeId: "dQw4w9WgXcQ",
        duration: "42 min",
        description: "Direct shortcuts for competitive MCQs without pen-and-paper delays.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Fundamentals of Cost Sheet & Cost Classification",
        youtubeId: "VIDEO_ID_HERE_CMA_F_02",
        duration: "48 min",
        description: "Clear demarcation between prime cost, factory cost, and cost of sales.",
      },
    ],
  },
  {
    id: "cma-intermediate",
    track: "CMA",
    trackName: "Cost & Management Accountancy",
    title: "CMA Intermediate (Both Groups)",
    slug: "cma-intermediate",
    tagline: "Core Costing, Financial Management, Tax & Corporate Laws.",
    description:
      "Specialized mentorship focused on Cost Accounting, Financial Accounting, Direct & Indirect Taxation, Law & Ethics, Operations Management, and Financial Management.",
    level: "Intermediate / Executive",
    durationPlaceholder: "[DURATION: 7–8 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Daily Regular Batches]",
    lectureCount: 120,
    badge: "Core Specialty",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & CMA Experts",
    highlights: [
      "Mastery in Operations Management & Strategic Management",
      "High scoring techniques for Cost Accounting papers",
      "Practical case-studies and industry cost sheet models",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Cost Accounting & Cost Management",
        topics: [
          "Marginal Costing, Process Costing & Standard Costing",
          "Contract & Operating Costing for Service Sectors",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: CMA Cost Accounting — Process Costing & Equivalent Units",
        youtubeId: "dQw4w9WgXcQ",
        duration: "47 min",
        description: "Manoj Sir's 3-column table method that simplifies equivalent production units.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Operations Management — Transportation & Assignment Problem Tricks",
        youtubeId: "VIDEO_ID_HERE_CMA_I_02",
        duration: "52 min",
        description: "Shortest route and optimization tricks for maximum exam marks.",
      },
    ],
  },
  {
    id: "cma-final",
    track: "CMA",
    trackName: "Cost & Management Accountancy",
    title: "CMA Final Advanced Suite",
    slug: "cma-final",
    tagline: "Strategic Financial Management & Strategic Cost Management.",
    description:
      "Advanced training for CMA Final students covering Strategic Cost Management (SCM), Corporate Financial Reporting (CFR), and Strategic Performance Management (SPM).",
    level: "Final / Professional",
    durationPlaceholder: "[DURATION: 6–7 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Weekend Masterclasses]",
    lectureCount: 110,
    badge: "Executive Tier",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & Senior Faculty",
    highlights: [
      "SCM case study frameworks",
      "Corporate valuation and M&A pricing",
      "Quantitative techniques in decision making",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Strategic Cost Management & Decision Making",
        topics: [
          "Activity-Based Costing, Life Cycle Costing & Target Costing",
          "Pricing Strategies & Pareto Analysis",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: SCM — Target Costing & Value Engineering Case Study",
        youtubeId: "dQw4w9WgXcQ",
        duration: "44 min",
        description: "Framework to crack real-world case studies in ICMAI Final.",
        isFreeDemo: true,
      },
    ],
  },

  // TRACK C: CS
  {
    id: "cs-eet",
    track: "CS",
    trackName: "Company Secretary",
    title: "CSEET (CS Executive Entrance Test)",
    slug: "cseet",
    tagline: "Your premier gateway into Company Secretaryship.",
    description:
      "Comprehensive training covering Business Communication, Legal Aptitude, Logical Reasoning, Economic & Business Environment, and Current Affairs with regular mock examinations.",
    level: "Foundation / Entry",
    durationPlaceholder: "[DURATION: 3–4 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Flexible Cohorts]",
    lectureCount: 45,
    badge: "100% Exam Oriented",
    ratingPlaceholder: "4.85 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & CS Legal Mentors",
    highlights: [
      "Legal aptitude and Constitution of India basics made fascinating",
      "Logical reasoning visual patterns and shortcut techniques",
      "Business Communication and English Grammar mastery",
      "Computer-based mock exam simulator",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Paper 1: Business Communication & English",
        topics: [
          "Grammar essentials, Sentence Structure, Common Errors",
          "Business Letters, Memo, Email Etiquette & Comprehension",
        ],
      },
      {
        moduleNumber: 2,
        title: "Paper 2: Legal Aptitude & Logical Reasoning",
        topics: [
          "Indian Constitution, Law of Torts, Elements of Company Law",
          "Number Series, Coding-Decoding, Syllogisms & Venn Diagrams",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: CSEET Logical Reasoning — Syllogisms & Venn Diagrams in 20 Seconds",
        youtubeId: "dQw4w9WgXcQ",
        duration: "40 min",
        description: "Zero-formula Venn technique by Manoj Sir that eliminates all confusion.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Legal Aptitude — Elements of the Indian Constitution",
        youtubeId: "VIDEO_ID_HERE_CS_E_02",
        duration: "45 min",
        description: "Fundamental Rights, Writs, and key articles for CSEET.",
      },
    ],
  },
  {
    id: "cs-executive",
    track: "CS",
    trackName: "Company Secretary",
    title: "CS Executive Program",
    slug: "cs-executive",
    tagline: "Exhaustive legal & corporate compliance mastery.",
    description:
      "In-depth analysis of Jurisprudence, Interpretation & General Laws (JIGL), Company Law & Practice, Setting up of Business Entities, Tax Laws, and Corporate Restructuring.",
    level: "Intermediate / Executive",
    durationPlaceholder: "[DURATION: 7–8 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Regular Batches]",
    lectureCount: 130,
    badge: "Rigorous Legal Focus",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & Practicing CS Faculty",
    highlights: [
      "Secretarial drafting and board resolution practices",
      "Case law indexing and landmark Supreme Court judgments",
      "Securities Laws & Capital Markets (SLCM) numericals simplified",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Company Law & Practice",
        topics: [
          "Share Capital, Debentures, Board Composition & CSR",
          "General Meetings, Winding Up & Corporate Governance",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: CS Executive Company Law — Board Meetings & Resolution Drafting",
        youtubeId: "dQw4w9WgXcQ",
        duration: "51 min",
        description: "How to draft error-free board resolutions and tackle tricky case scenarios.",
        isFreeDemo: true,
      },
    ],
  },
  {
    id: "cs-professional",
    track: "CS",
    trackName: "Company Secretary",
    title: "CS Professional Pinnacle",
    slug: "cs-professional",
    tagline: "Final compliance leadership and corporate governance expertise.",
    description:
      "Advanced governance, risk management, compliance (GRMC), drafting, pleadings, appearances, and multidisciplinary corporate dispute resolution.",
    level: "Final / Professional",
    durationPlaceholder: "[DURATION: 6–7 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Weekend Modules]",
    lectureCount: 95,
    badge: "Pinnacle Program",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & Practicing Company Secretaries",
    highlights: [
      "Practical NCLT / NCLAT drafting and appearance techniques",
      "Corporate restructuring, mergers, de-mergers and takeovers",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Governance, Risk Management, Compliances and Ethics",
        topics: [
          "Board Effectiveness & Stakeholder Relationship",
          "Enterprise Risk Management (COSO Framework)",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: Drafting & Pleadings — Art of Drafting Petitions for NCLT",
        youtubeId: "dQw4w9WgXcQ",
        duration: "48 min",
        description: "Key legal clauses and common drafting mistakes to avoid.",
        isFreeDemo: true,
      },
    ],
  },

  // TRACK D: FOUNDATIONS
  {
    id: "maths-made-easy",
    track: "Foundations",
    trackName: "Foundations & Skill Mastery",
    title: "Maths Made Easy (School & Class 10 / 12)",
    slug: "maths-made-easy",
    tagline: "Prof. Er. Manoj Kumar's signature program: 'Maths aur English ko aasaan banate hain.'",
    description:
      "Specially designed for students who find numbers intimidating. Using intuitive visual models, real-world analogies, and elimination methods, Manoj Sir turns fear of mathematics into your greatest academic strength.",
    level: "Skill & Aptitude",
    durationPlaceholder: "[DURATION: 3–6 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: After-School & Weekend Slots]",
    lectureCount: 48,
    badge: "Manoj Sir's Signature",
    ratingPlaceholder: "5.0 / 5.0",
    faculty: "Prof. Er. Manoj Kumar (Engineer & Master Educator)",
    highlights: [
      "Zero-fear approach: conceptual clarity before formula memorization",
      "Class 10 & 12 Board exam target: 90+ marks strategy",
      "Trigonometry, Calculus, and Algebra visual breakdown",
      "Every step explained with 'Why' it works, not just 'How'",
      "Special doubt-clearing sessions for slow learners",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Algebra & Number Magic",
        topics: [
          "Quadratic Equations without Quadratic Formula",
          "Polynomials, Roots & Factorization Hacks",
          "Linear Equations in 2 Variables (Cross Multiplication Trick)",
        ],
      },
      {
        moduleNumber: 2,
        title: "Trigonometry & Geometry Decoded",
        topics: [
          "Visualizing Angles without Rote Memorization of Tables",
          "Heights & Distances in 3 simple triangles",
          "Circles, Theorems & Proofs Made Intuitive",
        ],
      },
      {
        moduleNumber: 3,
        title: "Calculus & Higher Mathematics (Class 11 & 12)",
        topics: [
          "Differentiation as 'Rate of Change' Real-life Models",
          "Integration as Area under Curve Made Easy",
          "Probability & Distributions without Confusion",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: Trigonometry Angles & Values in 5 Seconds without Memorizing",
        youtubeId: "dQw4w9WgXcQ",
        duration: "38 min",
        description: "Manoj Sir's legendary left-hand trick that allows you to calculate sin, cos, and tan values instantly.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Quadratic Equations — Direct Root Inspection Method",
        youtubeId: "VIDEO_ID_HERE_MATH_02",
        duration: "42 min",
        description: "Find the roots of any quadratic equation without applying the quadratic formula.",
      },
      {
        order: 3,
        title: "Lecture 3: Differentiation from Scratch — The Motion Analogy",
        youtubeId: "VIDEO_ID_HERE_MATH_03",
        duration: "45 min",
        description: "Why $dy/dx$ represents slope and how to differentiate complex functions effortlessly.",
      },
    ],
  },
  {
    id: "vedic-maths-speed-tricks",
    track: "Foundations",
    trackName: "Foundations & Skill Mastery",
    title: "Vedic Maths & Ultra-Speed Tricks",
    slug: "vedic-maths-speed-tricks",
    tagline: "Calculate 10x faster than a regular calculator in your head.",
    description:
      "A fast-paced, electrifying course on 16 Vedic Sutras that empowers students to perform large multiplications, divisions, square roots, and percentages mentally within seconds.",
    level: "Skill & Aptitude",
    durationPlaceholder: "[DURATION: 6 Weeks Bootcamp]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Weekend Masterclass]",
    lectureCount: 24,
    badge: "Speed Mastery",
    ratingPlaceholder: "4.95 / 5.0",
    faculty: "Prof. Er. Manoj Kumar",
    highlights: [
      "Mental multiplication of 2-digit, 3-digit, and 4-digit numbers",
      "Square root and cube root calculation in under 4 seconds",
      "Magical subtraction from base numbers (Nikhilam Navatashcaramam Dashatah)",
      "Essential competitive edge for CA Foundation, Bank PO, and SSC exams",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "The Vedic Sutra Toolkit",
        topics: [
          "Ekadhikena Purvena (One more than previous)",
          "Urdhva Tiryagbhyam (Vertically and crosswise)",
          "Paravartya Yojayet (Transpose and apply)",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: Multiply any 2-digit numbers in 3 seconds mentally",
        youtubeId: "dQw4w9WgXcQ",
        duration: "35 min",
        description: "Experience the sheer power of Urdhva Tiryagbhyam with live practice problems.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Instant Square Roots & Cube Roots Inspection Method",
        youtubeId: "VIDEO_ID_HERE_VEDIC_02",
        duration: "40 min",
        description: "Never write long division for square roots again.",
      },
    ],
  },
  {
    id: "aptitude-maths-competitive",
    track: "Foundations",
    trackName: "Foundations & Skill Mastery",
    title: "Quantitative Aptitude for SSC & Competitive Exams",
    slug: "aptitude-maths-competitive",
    tagline: "Proven elimination and short-cut mastery for high-stakes government & professional exams.",
    description:
      "Tailored for aspirants targeting SSC CGL, CHSL, Banking (IBPS, SBI PO), Railways, and Campus Placements who need extreme speed and accuracy in Quantitative Aptitude.",
    level: "Skill & Aptitude",
    durationPlaceholder: "[DURATION: 3–4 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Morning Batches]",
    lectureCount: 52,
    badge: "High Efficiency",
    ratingPlaceholder: "4.9 / 5.0",
    faculty: "Prof. Er. Manoj Kumar",
    highlights: [
      "Unit digit and digital sum methods to eliminate options without solving",
      "Ratio and percentage base methods for Time, Speed, and Distance",
      "Work and Pipe Cistern problems solved in 2 lines",
      "Previous 15 years question paper pattern decoding",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Arithmetic Power Modules",
        topics: [
          "Percentages & Profit-Loss without Formulas",
          "Simple & Compound Interest with Fraction Method",
          "Time, Work & Efficiency Models",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: Digital Sum Technique — Solve 80% MCQ without Paperwork",
        youtubeId: "dQw4w9WgXcQ",
        duration: "45 min",
        description: "Eliminate wrong MCQ options in 5 seconds using digit addition magic.",
        isFreeDemo: true,
      },
    ],
  },
  {
    id: "english-grammar-made-easy",
    track: "Foundations",
    trackName: "Foundations & Skill Mastery",
    title: "English Grammar & Writing Made Easy",
    slug: "english-grammar-made-easy",
    tagline: "Clear rules, zero confusion: speak and write with high authority.",
    description:
      "Grammar simplified for students and CA/CS candidates who hesitate while writing professional answers. Focuses on sentence construction, tenses, active-passive voice, direct-indirect speech, and legal/business drafting.",
    level: "Skill & Aptitude",
    durationPlaceholder: "[DURATION: 2–3 Months]",
    feesPlaceholder: "[FEES]",
    batchTimingPlaceholder: "[BATCH TIMING: Evening & Weekend Sessions]",
    lectureCount: 36,
    badge: "Essential Skill",
    ratingPlaceholder: "4.95 / 5.0",
    faculty: "Prof. Er. Manoj Kumar & Language Specialists",
    highlights: [
      "The 12 Tenses matrix decoded through a single logical chart",
      "Common grammatical errors that cost marks in Law & Business exams",
      "Formal corporate email and report writing templates",
      "Confidence building for interviews and presentations",
    ],
    modules: [
      {
        moduleNumber: 1,
        title: "Sentence Architecture & The Tense Matrix",
        topics: [
          "Subject-Verb Agreement rules with easy memory triggers",
          "Tenses without memorizing 24 rules",
          "Active & Passive Voice transformation in 3 steps",
        ],
      },
      {
        moduleNumber: 2,
        title: "Professional & Exam Drafting",
        topics: [
          "How to frame crisp legal arguments and business letters",
          "Vocabulary enhancement for commercial exams",
        ],
      },
    ],
    lectures: [
      {
        order: 1,
        title: "Demo Lecture: The 12 English Tenses Mastered in 30 Minutes",
        youtubeId: "dQw4w9WgXcQ",
        duration: "36 min",
        description: "Manoj Sir's visual timeline formula that makes tenses impossible to forget.",
        isFreeDemo: true,
      },
      {
        order: 2,
        title: "Lecture 2: Subject-Verb Agreement — The 10 Traps Where Students Lose Marks",
        youtubeId: "VIDEO_ID_HERE_ENG_02",
        duration: "41 min",
        description: "Master tricky collective nouns and correlative conjunctions.",
      },
    ],
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((c) => c.slug === slug);
}

export function getAllCourses(): Course[] {
  return coursesData;
}

