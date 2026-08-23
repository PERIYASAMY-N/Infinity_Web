import { 
  Code, Lightbulb, GraduationCap, Server, Database, 
  Terminal, MonitorSmartphone, BrainCircuit
} from 'lucide-react';
import React from 'react';

export const personalInfo = {
  name: "Periyasamy N",
  role: "Full-Stack Developer & AI Enthusiast",
  location: "Palani, Tamil Nadu, India",
  email: "periyasamynatchimuthu@gmail.com",
  phone: "9025214090",
  github: "https://github.com/PERIYASAMY-N",
  linkedin: "https://www.linkedin.com/in/periyasamy-natchimuthu04",
  college: "V.S.B Engineering College, Karur",
  education: "B.Tech Information Technology",
  status: "Available for Internships & Projects",
  cgpa: "8.68 / 10",
  aboutText: "I am currently pursuing my B.Tech in Information Technology and have a strong interest in full-stack development and AI-powered applications. I enjoy building practical software solutions using modern web technologies and continuously improving my programming and problem-solving skills.",
  careerObjective: "To build reliable and useful software solutions that solve real-world problems while continuously growing as a software engineer.",
  heroText: "I build full-stack web applications and AI-powered tools that solve practical problems."
};

export const aboutFeatures = [
  {
    title: "Full-Stack Development",
    description: "Building responsive frontend applications and integrating scalable APIs and backend services.",
    icon: MonitorSmartphone,
  },
  {
    title: "AI Integration",
    description: "Exploring AI-powered applications, LLM integrations, NLP systems and intelligent automation.",
    icon: BrainCircuit,
  },
  {
    title: "Problem Solving",
    description: "Breaking complex requirements into practical, maintainable and scalable software solutions.",
    icon: Lightbulb,
  },
  {
    title: "Continuous Learning",
    description: "Improving technical skills through projects, coding practice, certifications and real-world development.",
    icon: GraduationCap,
  }
];

export const skills = [
  {
    category: "Programming Languages",
    icon: Terminal,
    items: ["Java", "JavaScript", "Python", "SQL"]
  },
  {
    category: "Frontend",
    icon: MonitorSmartphone,
    items: ["HTML5", "CSS3", "React.js", "Tailwind CSS"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "FastAPI"]
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "AI / ML",
    icon: BrainCircuit,
    items: ["NLP", "LLM Integration", "AI Applications", "Computer Vision"]
  },
  {
    category: "Tools",
    icon: Code,
    items: ["Git", "GitHub", "VS Code", "Postman"]
  }
];

export const projects = [
  {
    id: 1,
    title: "AI Code Review Agent",
    category: "AI / Python",
    description: "An AI-powered system that analyzes user-submitted code to identify bugs, security issues, performance problems and possible improvements with detailed explanations and recommendations.",
    image: null, // Will use placeholder if image is missing
    technologies: ["React.js", "Monaco Editor", "FastAPI", "Python", "Groq LLM", "DeepSeek / Llama"],
    github: "https://github.com/PERIYASAMY-N/AI_CODE_REVIEW_AGENT",
    demo: "https://ai-code-review-agent-1-lrnm.onrender.com/"
  },
  {
    id: 2,
    title: "Civic Issues Management",
    category: "Full Stack",
    description: "Developed a smart civic platform for real-time public issue reporting, tracking, and complaint management.",
    image: null,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    github: "https://github.com/PERIYASAMY-N/civic_management",
    demo: null
  },
  {
    id: 3,
    title: "AI Student Helper",
    category: "Full Stack / AI",
    description: "An AI-assisted academic support platform designed to help students with academic workflows and intelligent content interaction.",
    image: null,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "AI Integration"],
    github: "https://github.com/PERIYASAMY-N/AI_Student_Helper",
    demo: null
  },
  {
    id: 4,
    title: "AI Career Intelligence System",
    category: "AI / Python",
    description: "An AI-powered career assistance application for document analysis and intelligent career guidance.",
    image: null,
    technologies: ["React.js", "FastAPI", "Python", "PDF Processing", "Machine Learning"],
    github: null,
    demo: null
  },
  {
    id: 5,
    title: "Smart Gate System",
    category: "Systems",
    description: "A smart security monitoring application integrating computer vision, real-time monitoring and administrative workflows.",
    image: null,
    technologies: ["React.js", "Python", "Computer Vision", "Database", "Real-time Monitoring"],
    github: "https://github.com/PERIYASAMY-N/smart_gate_system",
    demo: null
  },
  {
    id: 6,
    title: "Smart Production Scheduling",
    category: "AI / Systems",
    description: "An intelligent production scheduling concept designed to optimize manufacturing schedules using AI-driven decision making and operational constraints.",
    image: null,
    technologies: ["AI", "Python", "Optimization", "React.js"],
    github: null,
    demo: null
  }
];

export const experience = [
  {
    id: 0,
    role: "Student",
    company: "V.S.B Engineering College · Karur",
    duration: "Sep 2023 – Present",
    type: "Academic Experience",
    responsibilities: [
      "Currently pursuing B.Tech in Information Technology.",
      "Learning and applying core computer science concepts.",
      "Developing projects based on real-world problem statements."
    ],
    technologies: ["Java", "Python", "Web Technologies"]
  },
  {
    id: 1,
    role: "Web Development Intern",
    company: "Binary Spot Technology, Coimbatore",
    duration: "June 2024 – July 2024",
    responsibilities: [
      "Worked on frontend and backend development tasks.",
      "Collaborated on real-world web platform solutions.",
      "Improved understanding of SDLC practices.",
      "Worked with REST-based application architecture."
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"]
  },
  {
    id: 2,
    role: "Software Developer / Java Foundation Experience",
    company: "Infosys Springboard",
    duration: "2024", // Assuming 2024 since it's around the same time based on certs, but leaving as generic string
    responsibilities: [
      "Worked on the Hire-a-Helper project.",
      "Built interactive frontend components.",
      "Used HTML5, CSS3, JavaScript and React.",
      "Gained exposure to collaborative Git workflows.",
      "Worked with software development practices."
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React"]
  }
];

export const education = [
  {
    id: 1,
    degree: "B.Tech Information Technology",
    institution: "V.S.B Engineering College, Karur",
    duration: "2023 – Present",
    score: "CGPA: 8.68 / 10",
    description: "Studying Information Technology with focus areas including programming, data structures, databases, web development, cloud computing and AI concepts."
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    institution: "Sankar Ponnar Higher Secondary School",
    duration: "2023",
    score: "Percentage: 90.66%",
    description: "Stream: Computer Science"
  }
];

export const certifications = [
  {
    id: 1,
    title: "NPTEL Java Programming",
    issuer: "NPTEL / IIT",
    badge: "Gold Certification",
    year: "2024",
    image: null
  },
  {
    id: 2,
    title: "NPTEL Cloud Computing / Distributed Systems",
    issuer: "NPTEL / IIT",
    badge: "Silver Certification",
    year: "2024",
    image: null
  },
  {
    id: 3,
    title: "Infosys Springboard Java Foundation",
    issuer: "Infosys Springboard",
    badge: "Completed",
    year: "2024",
    image: null
  }
];

export const achievements = [
  {
    id: 1,
    type: "Academic / Project Leadership",
    title: "Project Head – AI-Enhanced Collaborative Platform",
    description: "Led project planning, feature coordination and development activities for an AI-enhanced platform focused on student mentorship and project management.",
    highlights: ["Project Planning", "Team Coordination", "Development Coordination", "Technical Collaboration", "Project Execution"]
  },
  {
    id: 2,
    type: "Sports Achievement",
    title: "University-Level Softball Representation",
    description: "Represented at university-level sports activities, developing teamwork, discipline, endurance and decision-making under pressure.",
    highlights: ["Teamwork", "Tactical Thinking", "Discipline", "Quick Decision Making"]
  }
];
