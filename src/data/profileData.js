export const profile = {
  name: "Periyasamy N",
  title: "Full-Stack Developer & AI Enthusiast",
  headline: "Building Intelligent Digital Experiences",
  location: "Palani, Tamil Nadu, India",
  email: "periyasamynatchimuthu@gmail.com",
  github: "https://github.com/PERIYASAMY-N",
  linkedin: "https://www.linkedin.com/in/periyasamy-natchimuthu04",
  summary: "Passionate Information Technology student skilled in full-stack web development, AI-based applications, and problem-solving. Experienced in building scalable web applications using React.js, Node.js, Java, and Spring Boot. Interested in AI-powered systems and real-world software development.",
  bio: [
    "I am currently pursuing my B.Tech in Information Technology. Over the course of my studies, I have developed a strong passion for designing and building software solutions that live at the intersection of powerful backend logic and beautiful, accessible frontend interfaces.",
    "Driven by the potential of AI systems, I love building applications that incorporate natural language processing, computer vision, and chatbot systems. My academic journey at VSB Engineering College combined with intern roles has helped me master standard software engineering practices (SDLC, Git, Agile) and apply them to resolve real-world dilemmas."
  ],
  education: [
    {
      degree: "B.Tech Information Technology",
      institution: "VSB Engineering College, Karur",
      duration: "2023 – Present",
      grade: "CGPA: 8.79 / 10",
      description: "Focusing on data structures, database management systems, web development, cloud computing, and AI concept models."
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "Sankar Ponnar Higher Secondary School, Palani",
      duration: "Completed 2023",
      grade: "Percentage: 90.66%",
      description: "Specialized in Computer Science, Mathematics, Physics, and Chemistry."
    }
  ],
  experience: [
    {
      role: "Web Development Intern",
      company: "Binary Spot Technology, Coimbatore",
      duration: "June 2024 - July 2024",
      highlights: [
        "Worked on frontend and backend development tasks on client projects.",
        "Collaborated with the development team on real-world web platform solutions.",
        "Improved understanding of software development life-cycle (SDLC) practices and RESTful design."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"]
    },
    {
      role: "Software Developer Intern",
      company: "Infosys SpringBoard",
      duration: "Feb 2024 - April 2024",
      highlights: [
        "Worked actively on the 'Hire-a-Helper' academic/vocational service connector project.",
        "Utilized React, HTML5, CSS3, and JavaScript (ES6) to construct interactive components.",
        "Gained practical exposure to full-stack web architectures and team Git workflows.",
        "Collaborated with team members during daily sprints and project checkpoints."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Collaborative Git"]
    }
  ],
  skills: {
    languages: ["Java", "JavaScript", "Python", "SQL"],
    webTechnologies: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Spring Boot"],
    databases: ["MySQL", "MongoDB"],
    aiMl: ["NLP", "AI Chatbot Integration", "Computer Vision"],
    tools: ["Git", "GitHub", "VS Code", "Postman"]
  },
  projects: [
    {
      id: "ai-code-reviewer",
      title: "AI Code Review Agent",
      shortDesc: "An AI-powered system designed to analyze, highlight bugs, and recommend best practices dynamically.",
      problem: "Developer efficiency is often blocked by manual code reviews, leading to syntax errors, code quality issues, and security vulnerabilities propagating to production.",
      solution: "An automated helper that runs the code through AI models to detect syntax flaws, calculate performance complexities, flag security risks, and output recommendations instantly side-by-side with a sandbox editor.",
      keyFeatures: [
        "Interactive live Monaco Code Editor Integration",
        "Deep semantic review of code with Groq & OpenRouter AI integrations",
        "Categorized output: Bug detection, Security threats, Performance optimization, and Best practices",
        "Support for system file uploads (JS, Py, Java) for review",
        "Extensive metrics panel with readability scores and complexity analysis"
      ],
      techStack: ["React.js", "Monaco Editor", "FastAPI", "Python", "Groq/OpenRouter", "REST APIs"],
      category: "AI / Python",
      github: "https://github.com/PERIYASAMY-N/AI_resume_filter_guide",
      live: null,
      featured: true
    },
    {
      id: "ai-student-helper",
      title: "AI Student Helper – Academic Assistant",
      shortDesc: "An AI-based academic support platform configured to assist students in workflow organization and smart content interactions.",
      problem: "Students frequently struggle with scattered lecture resources, disjointed task managers, and lack instant academic concept explanations outside classroom hours.",
      solution: "A unified portal incorporating an intelligent tutor, automated assignment scheduling, and dynamic summaries of upload study guides.",
      keyFeatures: [
        "AI-Powered Student Tutor Chatbot with memory retention",
        "MERN configuration with persistent notes and task tracking",
        "Interactive assignment deadlines dashboard with progress visualizers",
        "Document parsing and key points extraction module"
      ],
      techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "NLP"],
      category: "Full Stack",
      github: "https://github.com/PERIYASAMY-N/AI_Student_Helper",
      live: null,
      featured: true
    },
    {
      id: "civics-management",
      title: "Civics Management – Public Complaint Tracker",
      shortDesc: "A digital civic engagement platform empowering citizens to submit, track, and monitor public service requests.",
      problem: "Paper-based or fragmented systems for reporting local civic issues lack visibility and transparency, leaving residents unaware of complaint processing status.",
      solution: "An end-to-end ticketing workflow that routes submitted categories automatically to district officers and details real-time state changes to the residents.",
      keyFeatures: [
        "Department-level ticket router and dashboard for officers",
        "Unique tracking codes and live email/SMS notifications of progress",
        "Publicly viewable local issues feed with voting mechanics to highlight urgent repairs",
        "Secure citizen dashboard with history logs"
      ],
      techStack: ["React.js", "Spring Boot", "MySQL", "Core Java"],
      category: "Full Stack",
      github: "https://github.com/PERIYASAMY-N/civic_management",
      live: null,
      featured: true
    },
    {
      id: "smart-gate",
      title: "Smart Gate System – Automated Security",
      shortDesc: "A smart gate security monitoring platform integrating real-time computer vision streams and admin action boards.",
      problem: "Traditional manual visitor registration at entry gates introduces massive human errors, security gaps, and traffic delays.",
      solution: "An automated computer vision access gate verifying vehicle numbers and face IDs against credentials, triggering instant alerts for anomalies.",
      keyFeatures: [
        "Computer vision detection and vehicle plate recognition simulations",
        "Spring Boot telemetry server logging and tracking all database records",
        "Admin control desk panel to manually override gate signals",
        "Instant alert mechanism for unauthorized access attempts"
      ],
      techStack: ["Computer Vision", "React.js", "Spring Boot", "MySQL", "Python"],
      category: "Systems",
      github: "https://github.com/PERIYASAMY-N/smart_gate_system",
      live: null,
      featured: false
    }
  ],
  certifications: [
    {
      id: "cert-java",
      title: "NPTEL Java Programming",
      issuer: "Indian Institute of Technology (IIT / NPTEL)",
      grade: "Gold Certification (Top Percentile)",
      date: "2024",
      description: "Rigorous evaluation covering OOP concepts, multithreading, exception handling, collections framework, database connectivity (JDBC), and GUI setups.",
      image: null // Can be previewed in UI via modular certificate preview
    },
    {
      id: "cert-cloud",
      title: "NPTEL Cloud Computing & Distributed Systems",
      issuer: "Indian Institute of Technology (IIT / NPTEL)",
      grade: "Silver Certification",
      date: "2024",
      description: "Covers virtualization models, cloud security, MapReduce frameworks, resource scheduling, storage systems (GFS/HDFS), and orchestration configurations.",
      image: null
    }
  ],
  leadership: {
    role: "Project Head",
    platform: "AI-Enhanced Collaborative Platform (Student Mentorship & Project Management)",
    responsibilities: [
      { title: "Project Planning", detail: "Defined project scopes, designed milestones, and selected agile technological stacks." },
      { title: "Team Coordination", detail: "Delegated and review coding assignments for frontend modules, database setups, and chatbot API bindings." },
      { title: "Development Coordination", detail: "Facilitated daily code integrations, resolving git conflicts and tracking module builds." },
      { title: "Technical Collaboration", detail: "Architected connections between Node.js API endpoints and AI chatbot engines." },
      { title: "Project Execution", detail: "Successfully executed user tests, presenting the finished portal to evaluators and peers." }
    ]
  },
  achievements: [
    {
      title: "Anna University Form-III Certificate",
      category: "Sports / Softball",
      detail: "Awarded official recognition for outstanding sportsmanship and representation at the university division, highlighting teamwork, endurance, and strategic coordination under high-pressure scenarios."
    }
  ]
};
