export const personalInfo = {
  name: "Maha Mamdouh Ahmed",
  title: "Software Engineer",
  subtitle: "Flutter & Full Stack Developer",
  location: "Aswan, Egypt",
  phone: "01100827245",
  email: "maha.mamdouh.info@gmail.com",
  github: "https://github.com/Maahhaaa",
  linkedin: "https://linkedin.com/in/mahamamdouh8",
  whatsapp: "https://wa.me/201100827245",
  bio: "Computer Engineer specializing in full-stack web and cross-platform mobile development, with hands-on experience building Flutter applications integrated with REST APIs, Firebase, and machine learning backends. Passionate about delivering scalable, secure mobile and web solutions powered by Dart, HTML5/CSS3, and AI-driven automation.",
  resumeUrl: "#",
};

export const skills = [
  {
    category: "Mobile Development",
    icon: "📱",
    color: "#00F5FF",
    items: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "Cross-Platform Dev", level: 85 },
    ],
  },
  {
    category: "Frontend",
    icon: "🎨",
    color: "#FF3CAC",
    items: [
      { name: "Angular", level: 78 },
      { name: "HTML5 / CSS3", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 82 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#7B2CBF",
    items: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 76 },
      { name: "REST APIs", level: 88 },
      { name: "MongoDB", level: 74 },
    ],
  },
  {
    category: "Cloud & Backend",
    icon: "☁️",
    color: "#00F5FF",
    items: [
      { name: "Firebase Auth", level: 85 },
      { name: "Firestore", level: 82 },
      { name: "Cloud Functions", level: 72 },
    ],
  },
  {
    category: "Languages",
    icon: "💻",
    color: "#FF3CAC",
    items: [
      { name: "Python", level: 72 },
      { name: "Java", level: 68 },
      { name: "C++", level: 65 },
    ],
  },
  {
    category: "Tools & Testing",
    icon: "🛠️",
    color: "#7B2CBF",
    items: [
      { name: "Git & GitHub", level: 88 },
      { name: "Selenium", level: 70 },
      { name: "Postman", level: 82 },
    ],
  },
  {
    category: "Soft Skills",
    icon: "🧠",
    color: "#00F5FF",
    items: [
      { name: "Problem Solving", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Fast Learner", level: 95 },
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "DriveSecureX",
    subtitle: "ML-based Intrusion Detection System",
    description:
      "An end-to-end cybersecurity system designed to detect and respond to malicious DoS and Fuzzy cyberattacks on vehicle Controller Area Network (CAN) bus networks in real time.",
    longDescription:
      "Graduation Project at the Computer & Artificial Intelligence Research Center (CAIR). Built a real-time cross-platform mobile warning application using Flutter to alert vehicle owners of active security threats. Integrated the mobile system with a lightweight machine learning classification backend via RESTful APIs to process simulated live network traffic.",
    technologies: ["Flutter", "Dart", "Firebase", "REST APIs", "Machine Learning", "Python"],
    features: [
      "Real-time threat detection on CAN bus networks",
      "Cross-platform mobile alert system",
      "ML classification backend integration",
      "Live network traffic simulation",
      "Push notification system for vehicle owners",
    ],
    challenges: "Integrating a low-latency ML pipeline with a Flutter mobile app while maintaining real-time responsiveness.",
    solution: "Designed a lightweight REST API layer between the ML model and the Flutter frontend, using asynchronous streams for live data updates.",
    category: "Flutter Mobile App",
    status: "Completed",
    date: "July 2026",
    github: "https://github.com/Maahhaaa",
    liveDemo: "`https://youtu.be/wb9bD47Z0J4?si=UG13IsyeEtRWYqW7`",
    previewUrl: "https://dsxdemo.vercel.app/",
    color: "#00F5FF",
    tags: ["Graduation Project", "Cybersecurity", "Flutter", "ML"],
  },
  {
  id: 2,

  title: "Todo App",

  subtitle: "Task Management & Organization App",

  description:
    "A simple and modern task management mobile application designed to help users organize their daily tasks, set priorities and due dates, and keep track of completed and remaining tasks.",

  longDescription:
    "A cross-platform task management application built with Flutter and Firebase. The app provides a smooth user experience for creating and managing tasks, with features including user authentication, task creation, editing, deletion, priority selection, due date management, and task statistics. Firebase is used to securely manage user accounts and store task data in the cloud.",

  technologies: [
    "Flutter",
    "Dart",
    "Firebase",
    "Firebase Authentication",
    "Cloud Firestore"
  ],

  features: [
    "User registration and secure login",
    "Forgot password functionality",
    "Create, edit, and delete tasks",
    "Set task descriptions and due dates",
    "Set task priority levels",
    "Track completed and remaining tasks",
    "Real-time task data synchronization"
  ],

  challenges:
    "Building a simple and responsive task management experience while keeping user authentication and task data synchronized with Firebase.",

  solution:
    "Designed a clean Flutter interface connected to Firebase Authentication and Cloud Firestore, allowing users to securely manage their accounts and store, update, and retrieve their tasks in real time.",

  category: "Flutter Mobile App",

  status: "Completed",

  date: "August 2026",

  github: "https://github.com/Maahhaaa",

  liveDemo: "",

  previewUrl: "",

  color: "#6C5CE7",

  tags: [
    "Flutter",
    "Firebase",
    "Task Management",
    "Mobile App"
  ],
},
];

export const experience = [
  {
    id: 1,
    company: "Career 180",
    role: "Soft Skills Trainer",
    type: "Freelance",
    period: "August 2025",
    location: "Egypt",
    description:
      "Conducted interactive sessions on professional communication, effective teamwork, and leadership strategies to help participants strengthen their career readiness.",
    achievements: [
      "Delivered professional communication workshops",
      "Trained participants in effective teamwork strategies",
      "Facilitated leadership development sessions",
    ],
    color: "#00F5FF",
    level: 3,
  },
  {
    id: 2,
    company: "Almentor",
    role: "Project-Based Coordinator",
    type: "DECI Program",
    period: "Nov 2024 – Jul 2025",
    location: "Egypt",
    description:
      "Coordinated digital training sessions for the Digital Egypt Cubs Initiative (DECI). Managed program logistics, communication schedules, and status reporting between trainers and participants.",
    achievements: [
      "Coordinated digital training sessions for DECI",
      "Managed program logistics and communication schedules",
      "Ensured seamless program delivery for all participants",
    ],
    color: "#FF3CAC",
    level: 2,
  },
];

export const volunteering = [
  {
    id: 1,
    organization: "IEEE Aswan Student Branch",
    role: "Head of Human Resources",
    period: "Oct 2021 – May 2025",
    description:
      "Led recruitment cycles, interviewed prospective candidates, organized technical workshops, and moderated internal evaluations to streamline member operations.",
    color: "#00F5FF",
  },
  {
    id: 2,
    organization: "Google Developer Student Club (GDSC)",
    role: "HR Core Team Member",
    period: "Aug 2023 – 2024",
    description:
      "Supported core organizing efforts, planned technical events, and managed community outreach across engineering faculties at Aswan University.",
    color: "#FF3CAC",
  },
];

export const education = [
  {
    id: 1,
    degree: "B.Sc. Computer and Systems Engineering",
    institution: "Aswan University, Faculty of Engineering",
    period: "Sep 2021 – Jul 2026",
    location: "Aswan, Egypt",
    grade: "Very Good",
    projectGrade: "Excellent",
    description: "Full computer engineering curriculum with focus on software engineering, embedded systems, and AI.",
    color: "#00F5FF",
    icon: "🎓",
  },
  {
    id: 2,
    degree: "Cross-Platform Mobile App Development",
    institution: "Information Technology Institute (ITI)",
    period: "July 2026",
    location: "Aswan, Egypt",
    grade: "Completed",
    description:
      "Comprehensive training covering Flutter, Dart, Firebase, generative AI, AI agents, workflow automation, and freelancing fundamentals.",
    color: "#FF3CAC",
    icon: "📱",
  },
  {
    id: 3,
    degree: "Full-Stack Development: MEAN Stack",
    institution: "National Telecommunication Institute (NTI)",
    period: "August 2025",
    location: "Egypt",
    grade: "Completed",
    description:
      "Hands-on training in MongoDB, RESTful API development with Express.js/Node.js, and modern front-end design with Angular.",
    color: "#7B2CBF",
    icon: "💻",
  },
  {
    id: 4,
    degree: "Software Testing Track",
    institution: "Digital Egypt Pioneers Initiative (DEPI) — 2nd Round",
    period: "Oct 2024 – May 2025",
    location: "Egypt",
    grade: "Completed",
    description:
      "Studied Prompt Engineering, Java programming, software testing lifecycles, static testing techniques, and automation tools including Selenium and Postman.",
    color: "#00F5FF",
    icon: "🧪",
  },
];

export const certifications = [
  {
    id: 1,
    title: "Cross-Platform Mobile App Development",
    issuer: "Information Technology Institute (ITI)",
    date: "July 2026",
    color: "#00F5FF",
    icon: "🏆",
  },
  {
    id: 2,
    title: "Full-Stack MEAN Stack Development",
    issuer: "National Telecommunication Institute (NTI)",
    date: "August 2025",
    color: "#FF3CAC",
    icon: "🥇",
  },
  {
    id: 3,
    title: "Software Testing Track",
    issuer: "Digital Egypt Pioneers Initiative (DEPI)",
    date: "May 2025",
    color: "#7B2CBF",
    icon: "🎖️",
  },
  {
    id: 4,
    title: "IEEE Student Branch Member",
    issuer: "IEEE Aswan Student Branch",
    date: "2021 – 2025",
    color: "#00F5FF",
    icon: "⭐",
  },
];
