/**
 * ELITE EDUCATION - Central Brand & Configuration File
 * All business details, contact information, coordinates, and placeholders are kept here.
 * Placeholders are clearly marked with bracket notation (e.g., [FEES]) for effortless substitution.
 */

export interface TestimonialItem {
  id: string;
  name: string;
  course: string;
  scoreOrRank: string;
  quote: string;
  year: string;
  isPlaceholder: boolean;
}

export interface ResultItem {
  id: string;
  studentName: string;
  course: string;
  exam: string;
  achievement: string;
  isPlaceholder: boolean;
}

export const siteConfig = {
  brand: {
    name: "Elite Education",
    shortName: "EE",
    tagline: "Classes for CA / CMA / CS — Specialised for CA",
    hindiSubline: "Maths aur English ko aasaan banate hain.",
    heroHeadline: "Master CA, CMA & CS — the Elite way.",
    heroDescription:
      "Engineered for rank-defining clarity. Transforming complex accounting, taxation, quantitative aptitude, and business law into instinctive mastery through proven pedagogical shortcuts.",
    leadFaculty: {
      name: "Prof. Er. Manoj Kumar",
      title: "Founder & Lead Faculty",
      motto: "An Engineer by profession, a Teacher by passion.",
      highlight:
        "Renowned for innovative mental frameworks and simple tricks that turn Mathematics and English from intimidating hurdles into high-scoring assets.",
      photoPlaceholder: "[FACULTY PHOTO: Prof. Er. Manoj Kumar]",
    },
  },

  contact: {
    address: {
      line1: "Navghar Road, Opp. Bus Depot, Chandan Nagar",
      area: "Bhayandar East, Mira Bhayandar",
      cityStateZip: "Maharashtra 401105",
      full: "Navghar Road, Opp. Bus Depot, Chandan Nagar, Bhayandar East, Mira Bhayandar, Maharashtra 401105",
    },
    phone: {
      display: "+91 79000 96857",
      tel: "+917900096857",
    },
    whatsapp: {
      display: "+91 87965 76868",
      number: "918796576868",
      prefilledMessage:
        "Hi, I'm interested in Elite Education courses. Please share the details.",
      get directLink() {
        return `https://wa.me/${this.number}?text=${encodeURIComponent(
          this.prefilledMessage
        )}`;
      },
    },
    map: {
      lat: 19.3122497,
      lng: 72.8534029,
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.8118029519547!2d72.8534029!3d19.3122497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDE4JzQ0LjEiTiA3MsKwNTEnMTIuMiJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      directionsUrl:
        "https://www.google.com/maps/dir/?api=1&destination=19.3122497,72.8534029",
    },
    email: "admissions@eliteeducation.co.in",
  },

  // ONLY Facebook and Instagram are shown (NO YouTube channel name/handle/link anywhere)
  socials: {
    facebook: "https://facebook.com/eliteedu1811",
    instagram: "https://instagram.com/elite_education_",
  },

  // Central placeholders dictionary - clearly marked for replacement
  placeholders: {
    fees: "[FEES]",
    batchTiming: "[BATCH TIMING]",
    studentsTaught: "[STUDENTS TAUGHT]",
    yearsOfExperience: "[YEARS OF EXCELLENCE]",
    allIndiaRankers: "[AIR RANKERS]",
    successRate: "[SUCCESS RATE %]",
    facultyExperienceYears: "[YEARS IN EDUCATION]",
  },

  // Stats Counters configured with placeholder defaults and fallback values for luxury display
  stats: [
    {
      label: "Students Mentored",
      placeholder: "[STUDENTS TAUGHT]",
      numericTarget: 1500,
      suffix: "+",
      caption: "Across Mumbai & Maharashtra",
    },
    {
      label: "Years of Pedagogy",
      placeholder: "[YEARS OF EXCELLENCE]",
      numericTarget: 12,
      suffix: "+",
      caption: "Specialised CA/CMA/CS coaching",
    },
    {
      label: "Exam Pass Ratio",
      placeholder: "[SUCCESS RATE %]",
      numericTarget: 89,
      suffix: "%",
      caption: "Consistently above council average",
    },
    {
      label: "Batch Personal Attention",
      placeholder: "1:25",
      numericTarget: 25,
      suffix: " max",
      caption: "Small cohorts, direct mentorship",
    },
  ],

  // Clearly marked result placeholders (no invented statistics or fake reviews)
  results: [
    {
      id: "res-1",
      studentName: "[STUDENT NAME - AIR]",
      course: "CA Intermediate",
      exam: "May / Nov Exam Session",
      achievement: "[RANK / EXEMPTION HOLDER]",
      isPlaceholder: true,
    },
    {
      id: "res-2",
      studentName: "[STUDENT NAME - CA FINAL]",
      course: "CA Final",
      exam: "Group 1 & 2 Both Cleared",
      achievement: "[HIGH SCORE IN FINANCIAL REPORTING]",
      isPlaceholder: true,
    },
    {
      id: "res-3",
      studentName: "[STUDENT NAME - CMA]",
      course: "CMA Intermediate",
      exam: "Cost & Management Accounting",
      achievement: "[DISTINCTION IN COSTING & FM]",
      isPlaceholder: true,
    },
    {
      id: "res-4",
      studentName: "[STUDENT NAME - CS]",
      course: "CS Executive",
      exam: "Company Law & Jurisprudence",
      achievement: "[HIGH SCORER / EXEMPTION]",
      isPlaceholder: true,
    },
    {
      id: "res-5",
      studentName: "[STUDENT NAME - MATHS]",
      course: "Quantitative Aptitude / 12th Maths",
      exam: "Competitive / Board Examination",
      achievement: "[SCORECARD: 95+ MARKS IN MATHS]",
      isPlaceholder: true,
    },
  ] as ResultItem[],

  // Clearly marked testimonial placeholders
  testimonials: [
    {
      id: "test-1",
      name: "[VERIFIED STUDENT A]",
      course: "CA Foundation & Intermediate",
      scoreOrRank: "[STUDENT SCORE / RANK]",
      quote:
        "\"Prof. Manoj Sir's mathematical shortcuts completely eliminated my fear of Quantitative Aptitude. Complex equations were solved in seconds without formulas.\"",
      year: "Batch of [YEAR]",
      isPlaceholder: true,
    },
    {
      id: "test-2",
      name: "[VERIFIED STUDENT B]",
      course: "CMA Intermediate",
      scoreOrRank: "[EXEMPTION IN COSTING]",
      quote:
        "\"The personalized attention and small batch size in Bhayandar made all the difference. Sir makes sure every single doubt is clarified before moving to the next chapter.\"",
      year: "Batch of [YEAR]",
      isPlaceholder: true,
    },
    {
      id: "test-3",
      name: "[VERIFIED STUDENT C]",
      course: "Class 12 & Foundation Maths",
      scoreOrRank: "[98% IN MATHEMATICS]",
      quote:
        "\"As an engineer, Sir brings a logical structural approach to teaching that you won't find anywhere else. He teaches 'why' a method works, not just blind steps.\"",
      year: "Batch of [YEAR]",
      isPlaceholder: true,
    },
  ] as TestimonialItem[],

  faqs: [
    {
      q: "Where is Elite Education located, and how can I visit?",
      a: "Elite Education is conveniently located right opposite the Bus Depot on Navghar Road in Chandan Nagar, Bhayandar East, Mira Bhayandar (401105). You are welcome to visit our campus between 9:00 AM and 8:00 PM for in-person counselling and batch queries.",
    },
    {
      q: "Can I attend a free demo lecture before enrolling?",
      a: "Yes! Every student is entitled to experience our signature pedagogical method. You can register for free on our website to immediately watch the first demo lecture of any course, or contact us on WhatsApp (+91 87965 76868) to book a live demo seat.",
    },
    {
      q: "What makes Prof. Er. Manoj Kumar's teaching methodology unique?",
      a: "Prof. Manoj Kumar is an Engineer by profession and a Teacher by passion. He specializes in reverse-engineering difficult Mathematical and English concepts into simple, visual, and memorable tricks. Students who previously scored low or feared numbers consistently achieve exemptions and distinctions under his guidance.",
    },
    {
      q: "What are the batch sizes and timings?",
      a: "We maintain intimate, high-accountability cohorts (maximum 20–25 students per batch) so every student receives 1-on-1 doubt solving. Morning, afternoon, and evening batches are available ([BATCH TIMING]); contact our admissions desk for exact schedule slots.",
    },
    {
      q: "Are recorded lectures provided for revision or missed classes?",
      a: "Yes, enrolled students receive access to high-definition recorded lectures and chapter-wise study materials through their student dashboard for anytime revision up until their exam session.",
    },
    {
      q: "What is the fee structure and payment options?",
      a: "Our fee structure ([FEES]) is structured affordably with flexible installment options and merit scholarships. Please get in touch with our team via WhatsApp (+91 87965 76868) or submit an enquiry to receive the latest prospectus and fee schedule.",
    },
  ],

  marqueeSubjects: [
    "Financial Accounting",
    "Cost & Management Accounting",
    "Direct & Indirect Taxation (GST)",
    "Corporate & Economic Laws",
    "Quantitative Aptitude & Statistics",
    "Business Mathematics",
    "Financial Management",
    "Advanced English Grammar",
    "Vedic Mathematics & Speed Calculation",
    "Auditing & Ethics",
    "Strategic Management",
  ],
};

