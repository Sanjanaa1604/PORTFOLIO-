/**
 * Central Data Source for Sanjanaa S's Portfolio
 * Sourced directly from her verified resume.
 */

export const personalInfo = {
  name: "Sanjanaa S",
  firstName: "Sanjanaa",
  lastName: "S",
  initials: "SS",
  dob: "16 Apr 2007",
  title: "Computer Science and Engineering Student",
  institution: "Chennai Institute of Technology",
  degree: "Bachelor of Engineering (B.E.)",
  department: "Computer Science and Engineering",
  cgpa: "8.8",
  location: "Chennai, Tamil Nadu, India",
  email: "ssanjanaa2007@gmail.com",
  phone: "+91 7397113527",
  phoneRaw: "7397113527",
  linkedin: "https://www.linkedin.com/in/sanjanaa-s-26017536b/",
  github: "https://github.com/Sanjanaa1604",
  leetcode: "https://leetcode.com", // LeetCode 400+ problems
  resumeUrl: "/Sanjanaa_S_Resume.pdf",
  profilePhoto: "/profile.jpg",
  roles: [
    "Computer Science Engineering Student",
    "Aspiring Software Developer",
    "Full-Stack Development Enthusiast",
    "Problem Solver (400+ LeetCode)"
  ],
  bio: "Motivated Computer Science and Engineering student at Chennai Institute of Technology with a strong foundation in full-stack web development, data structures, and algorithms. Experienced in building scalable web applications using the MERN stack and Python. Solved 400+ LeetCode problems with a passion for crafting clean, intuitive, and high-impact digital experiences.",
  shortBio: "Computer Science and Engineering student at Chennai Institute of Technology passionate about building full-stack web applications, solving complex algorithmic challenges, and exploring modern AI-driven solutions.",
  metrics: [
    { label: "CGPA", value: "8.8", detail: "Chennai Institute of Technology" },
    { label: "LeetCode Solved", value: "400+", detail: "DSA & Problem Solving" },
    { label: "Internships", value: "2", detail: "MERN & Python Full Stack" },
    { label: "Featured Projects", value: "3+", detail: "Full Stack & AI" },
  ]
};

export const internships = [
  {
    role: "MERN Full Stack Intern",
    company: "Dnyx Academy",
    period: "May 2026 – Jun 2026",
    type: "Internship",
    badge: "Full Stack",
    highlights: [
      "Developed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js).",
      "Implemented secure backend APIs, robust database integrations, and responsive user interfaces.",
      "Collaborated on real-world projects following modern web development workflows and clean code standards."
    ],
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "REST APIs", "Modern UI/UX"]
  },
  {
    role: "Python Full Stack Developer Intern",
    company: "EduSkills",
    period: "Virtual Internship",
    type: "Virtual Internship",
    badge: "Python & Backend",
    highlights: [
      "Worked on Python-based web application development and efficient backend programming.",
      "Gained hands-on experience in full-stack development concepts, modular design, and software development workflows.",
      "Developed problem-solving and debugging skills through rigorous project-based learning."
    ],
    skills: ["Python", "Backend Development", "Software Workflows", "Debugging", "Full Stack"]
  }
];

export const education = [
  {
    degree: "Bachelor of Engineering (B.E.)",
    specialization: "Computer Science and Engineering",
    institution: "Chennai Institute of Technology",
    period: "Undergraduate Program",
    score: "8.8 CGPA",
    badge: "In Progress",
    description: "Rigorous computer science curriculum emphasizing core data structures, algorithms, object-oriented software engineering, web application development, and database management systems.",
    highlights: [
      "Maintained a stellar 8.8 CGPA across coursework.",
      "Active participant in technical symposiums, hackathons (EY Techathon 6.0), and entrepreneurship summits (E-Summit '25).",
      "Hands-on project work in MERN stack, Java application design, and Python programming."
    ]
  }
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: [
      { name: "Python", icon: "FileCode2", highlight: "Core & Backend" },
      { name: "JavaScript", icon: "Code", highlight: "ES6+, Modern Web" },
      { name: "C++", icon: "Terminal", highlight: "DSA & Problem Solving" },
      { name: "C", icon: "Cpu", highlight: "Systems & Fundamentals" },
      { name: "Java", icon: "Coffee", highlight: "OOP & Applications" }
    ]
  },
  {
    title: "Web Technologies",
    icon: "Layout",
    skills: [
      { name: "React.js", icon: "Atom", highlight: "Frontend UI" },
      { name: "Node.js", icon: "Server", highlight: "Runtime Environment" },
      { name: "Express.js", icon: "Boxes", highlight: "REST API Framework" },
      { name: "HTML5", icon: "Globe", highlight: "Semantic Markup" },
      { name: "CSS3", icon: "Palette", highlight: "Responsive Styling" },
      { name: "Tailwind CSS", icon: "Sparkles", highlight: "Utility-First CSS" }
    ]
  },
  {
    title: "Databases",
    icon: "Database",
    skills: [
      { name: "MongoDB", icon: "Layers", highlight: "NoSQL Database" },
      { name: "MySQL", icon: "Database", highlight: "Relational SQL" }
    ]
  },
  {
    title: "Programming Concepts",
    icon: "Brain",
    skills: [
      { name: "Data Structures & Algorithms", icon: "Workflow", highlight: "400+ LeetCode Solved" },
      { name: "OOPs Concepts", icon: "Box", highlight: "Object-Oriented Design" }
    ]
  },
  {
    title: "Development Tools & Version Control",
    icon: "Wrench",
    skills: [
      { name: "Git", icon: "GitBranch", highlight: "Version Control" },
      { name: "GitHub", icon: "Github", highlight: "Repository Management" },
      { name: "VS Code", icon: "FileCode", highlight: "Primary IDE" }
    ]
  },
  {
    title: "Professional & Soft Skills",
    icon: "UserCheck",
    skills: [
      { name: "Problem Solving", icon: "CheckCircle", highlight: "Analytical Thinking" },
      { name: "Team Collaboration", icon: "Users", highlight: "Agile & Teamwork" },
      { name: "Communication", icon: "MessageSquare", highlight: "Clear & Concise" },
      { name: "Leadership", icon: "Compass", highlight: "Initiative & Guidance" },
      { name: "Time Management", icon: "Clock", highlight: "Efficiency & Planning" },
      { name: "Adaptability", icon: "RefreshCw", highlight: "Quick Learner" }
    ]
  }
];

export const projects = [
  {
    id: "quizzle",
    title: "Quizzle",
    category: "Full Stack Web Application",
    badge: "MERN Stack",
    shortDescription: "A full-stack interactive quiz platform designed for engaging learning, real-time assessment, and comprehensive score analytics.",
    longDescription: "Developed a robust full-stack quiz platform that facilitates interactive learning and automated assessment. The platform features secure user authentication, responsive question navigation, dynamic quiz management, and automated score tracking with database persistence.",
    features: [
      "User authentication and profile management",
      "Interactive quiz taking with real-time scoring and timers",
      "Dynamic quiz creation and categorized question banks",
      "Score tracking, performance summaries, and analytics",
      "Fully responsive, clean pastel interface optimized for all devices",
      "Seamless database integration for question and result persistence"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "REST API"],
    github: "https://github.com/yashikhajanakiraman/Quiz_creator",
    demo: "#quizzle-preview",
    featured: true,
    accentColor: "from-blue-500 to-indigo-600",
    gradientBg: "bg-gradient-to-br from-blue-50 via-sky-50 to-indigo-50",
    previewType: "quiz"
  },
  {
    id: "blognest",
    title: "BlogNest",
    category: "Blog Management Platform",
    badge: "Web Platform",
    shortDescription: "A modern blogging and content publishing platform empowering users to write, publish, edit, and organize articles with seamless CRUD workflows.",
    longDescription: "Developed a comprehensive blogging platform enabling writers and readers to interact seamlessly. Implemented full CRUD operations, database integration for high efficiency, and an elegant, distraction-free reading interface.",
    features: [
      "Complete CRUD functionality for blog posts (Create, Read, Update, Delete)",
      "Intuitive content editor with preview and formatting",
      "MongoDB database integration for efficient article querying and storage",
      "Category tags and search capabilities for quick discovery",
      "Modern, minimalist reader-friendly interface with smooth typography"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Sanjanaa1604/Dnyx-BlogWebsite",
    demo: "#blognest-preview",
    featured: true,
    accentColor: "from-sky-500 to-blue-600",
    gradientBg: "bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-50",
    previewType: "blog"
  },
  {
    id: "smartspend",
    title: "SmartSpend – Expense Tracker with AI",
    category: "Personal Finance Management",
    badge: "Java + AI",
    shortDescription: "A Java-based personal expense tracking application enhanced with OpenAI AI-driven insights for automated spending categorization and budgeting.",
    longDescription: "Developed a feature-rich personal finance management application in Java integrated with AI capabilities via the OpenAI API. It empowers users to monitor expenditures, set realistic budget targets, categorize expenses automatically, and receive personalized financial health advice.",
    features: [
      "AI-powered spending insights and smart financial tips via OpenAI API",
      "Automated categorization of daily and monthly expenses",
      "Budget planning and real-time overspending alerts",
      "Structured relational data persistence using MySQL",
      "Interactive, user-friendly frontend dashboard with clear visual metrics"
    ],
    technologies: ["Java", "MySQL", "OpenAI API", "JavaScript", "HTML5", "CSS3"],
    github: "https://github.com/Sanjanaa1604/SMARTSPEND-EXPENSE-TRACKER",
    demo: "#smartspend-preview",
    featured: true,
    accentColor: "from-indigo-500 to-blue-600",
    gradientBg: "bg-gradient-to-br from-indigo-50 via-blue-50 to-sky-50",
    previewType: "finance"
  }
];

export const certifications = [
  {
    title: "Python Essentials 1",
    issuer: "Cisco Networking Academy",
    issuerType: "Cisco",
    badge: "Programming",
    icon: "ShieldCheck",
    description: "Foundational programming concepts, data types, control flow, functions, and algorithmic thinking in Python."
  },
  {
    title: "Python Essentials 2",
    issuer: "Cisco Networking Academy",
    issuerType: "Cisco",
    badge: "Advanced Python",
    icon: "Award",
    description: "Advanced Python concepts including Object-Oriented Programming (OOP), modules, packages, string processing, and exception handling."
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    issuerType: "Cisco",
    badge: "Security",
    icon: "Lock",
    description: "Foundations of cybersecurity, threat landscapes, defense mechanisms, and best practices for secure application design."
  },
  {
    title: "Complete Data Science, Machine Learning, Deep Learning & NLP Bootcamp",
    issuer: "Udemy",
    issuerType: "Udemy",
    badge: "AI & ML",
    icon: "Sparkles",
    description: "Comprehensive bootcamp covering data analysis, exploratory data science, machine learning models, neural networks, and natural language processing."
  }
];

export const achievements = [
  {
    title: "Solved 400+ Problems on LeetCode",
    category: "Data Structures & Algorithms",
    organization: "LeetCode",
    badge: "Algorithmic Mastery",
    icon: "Flame",
    highlight: "400+ Solved",
    description: "Consistently solved over 400 algorithmic problems covering Arrays, Dynamic Programming, Trees, Graphs, and Hash Tables, sharpening problem-solving speed and optimization."
  },
  {
    title: "Participated in EY Techathon 6.0",
    category: "Hackathon & Innovation",
    organization: "Ernst & Young (EY)",
    badge: "National Hackathon",
    icon: "Trophy",
    highlight: "EY Techathon 6.0",
    description: "Collaborated in EY's premier technology challenge, formulating innovative digital solutions for real-world enterprise scenarios under tight deadlines."
  },
  {
    title: "Participated in E-Summit '25",
    category: "Entrepreneurship & Technology",
    organization: "E-Summit",
    badge: "Summit '25",
    icon: "Rocket",
    highlight: "E-Summit '25",
    description: "Engaged in workshops, ideathons, and keynote sessions focused on emerging tech startups, innovation scaling, and entrepreneurial problem-solving."
  }
];
