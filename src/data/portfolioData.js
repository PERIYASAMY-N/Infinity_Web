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
  linkedin: "https://www.linkedin.com/in/periyasamy-nachimuthu04",
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
    title: "Civic Issues Management",
    category: "Full Stack",
    description: "Developed a smart civic platform for real-time public issue reporting, tracking, and complaint management.",
    image: import.meta.env.BASE_URL + "assets/projects/civichub.jpg",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose"],
    github: "https://github.com/PERIYASAMY-N/civic_management",
    demo: null
  },
  {
    id: 2,
    title: "AI Code Review Agent",
    category: "AI / Python",
    description: "An AI-powered system that analyzes user-submitted code to identify bugs, security issues, performance problems and possible improvements with detailed explanations and recommendations.",
    image: import.meta.env.BASE_URL + "assets/projects/codereview.jpg",
    technologies: ["React.js", "Monaco Editor", "FastAPI", "Python", "Groq LLM", "DeepSeek / Llama"],
    github: "https://github.com/PERIYASAMY-N/AI_CODE_REVIEW_AGENT",
    demo: "https://ai-code-review-agent-1-lrnm.onrender.com/"
  },
  {
    id: 3,
    title: "Room Expense Manager",
    category: "Full Stack",
    description: "A comprehensive web application designed to track, manage, and split shared room expenses among roommates effectively.",
    image: import.meta.env.BASE_URL + "assets/projects/roomexpense.png",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Tailwind CSS"],
    github: "https://github.com/PERIYASAMY-N/Room_Expense_Manager",
    demo: "https://room-expense-manager-three.vercel.app/"
  },
  {
    id: 4,
    title: "E-Commerce Website with Data Analysis",
    category: "Full Stack / Data",
    description: "An integrated e-commerce platform that handles online sales and provides insightful data analysis on customer behavior and sales trends.",
    image: import.meta.env.BASE_URL + "assets/projects/ecommerce.jpg",
    technologies: ["React.js", "Python", "Data Analytics", "Node.js", "MongoDB"],
    github: "https://github.com/PERIYASAMY-N/E-commerce_with_Data-Analysis",
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
