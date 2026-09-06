/**
 * Safe Grounded Resume Knowledge Base for "Jhei"
 * Extracted directly from Jheizon Brhylle P. Dela Cruz's official resume.
 * 
 * SECURITY NOTICE:
 * - Contains public, professional information only.
 * - Sensitive PII (exact house address, personal phone numbers, government IDs)
 *   is strictly excluded to safeguard privacy.
 */

export interface ResumeKnowledge {
  name: string;
  preferredName: string;
  location: string;
  professionalSummary: string;
  contact: {
    email: string;
    github?: string;
    linkedin?: string;
  };
  education: {
    institution: string;
    period: string;
    coursework: string[];
  };
  workExperience: Array<{
    title: string;
    company: string;
    period: string;
    highlights: string[];
  }>;
  projects: Array<{
    title: string;
    subtitle: string;
    roles?: string[];
    description: string;
    highlights: string[];
    technologies: string[];
  }>;
  technicalSkills: {
    programming: string[];
    machineLearning: string[];
    multimedia: string[];
    workflowAutomation: string[];
    timeManagementAndAgile: string[];
    documentationSuites: string[];
  };
  certifications: Array<{
    name: string;
    description: string;
  }>;
  faq: Array<{
    question: string;
    answer: string;
  }>;
}

export const RESUME_KNOWLEDGE: ResumeKnowledge = {
  name: "Jheizon Brhylle P. Dela Cruz",
  preferredName: "Jhei / Brhylle",
  location: "Rizal, Philippines",
  professionalSummary:
    "Software engineer, machine learning practitioner, and customer service specialist with a strong foundation in computer science, computer vision, web engineering, and enterprise customer operations. Experienced in leading development teams, architecting machine learning pipelines (YOLOv8-v10), building dynamic responsive web applications, and delivering high-satisfaction client support.",
  contact: {
    email: "emperador.jheizonbrhylle@gmail.com",
    github: "https://github.com/Brhylle",
    linkedin: "https://linkedin.com/in/delacruzjheizonbrhylle",
  },
  education: {
    institution: "Pamantasan ng Lungsod ng Pasig",
    period: "September 2021 – June 2025",
    coursework: [
      "Discrete Structures",
      "Algorithms & Complexities",
      "Data Structures I & II",
      "Operating Systems",
      "Software Engineering I & II",
      "Robotics I",
      "Automata Theory and Formal Languages",
    ],
  },
  workExperience: [
    {
      title: "Customer Service Advisor",
      company: "Concentrix",
      period: "July 2025 – February 2026",
      highlights: [
        "Handled 1,067 inbound calls across domestic and international support (both voice and non-voice), achieving a 91.17% Q6 CSAT with resolution on a high-volume travel account based on surveyed customer feedback.",
        "Got upscaled two times, successfully demonstrating how applied skill, lesson, and training can transition into 3 different lines of businesses (3 LOBs).",
      ],
    },
  ],
  projects: [
    {
      title: "Aquagrade: A Fish-Grading Freshness System",
      subtitle: "Machine Learning & Computer Vision System",
      roles: ["Junior Software Engineer", "Machine Learning Engineer (MLE)", "Data Governance Officer"],
      description: "An automated fish freshness grading system leveraging computer vision and machine learning.",
      highlights: [
        "Trained and evaluated a computer vision model achieving 90% mAP50 while maintaining an optimal sweet spot of 66%.",
        "Led a team of 3 people, ensuring tasks were properly and equitably delegated using the Eisenhower Matrix method for prioritizing by urgency and importance.",
        "Shortened project development timeline from 9 months down to 3 months through effective agile execution.",
      ],
      technologies: ["Roboflow", "PyTorch", "TensorFlow", "YOLOv8-v10", "Python", "Pillow", "Jupyter"],
    },
    {
      title: "ChuuPurple: Collaborative Components Portfolio",
      subtitle: "Frontend UI/UX Component Showcase",
      description: "A collaborative components portfolio crafted with Vue.js emphasizing deliberate color harmony and micro-interactions.",
      highlights: [
        "Enhanced UI/UX by crafting custom monochromatic palettes rooted in Color Theory.",
        "Received overwhelmingly positive user reviews: 15 out of 17 feedback respondents explicitly commended the website's color palette, seamless layout, and smooth animations.",
      ],
      technologies: ["Vue.js", "JavaScript", "HTML5", "CSS3", "Color Theory", "Animations"],
    },
    {
      title: "gmbr.dev Portfolio",
      subtitle: "Interactive 3D Web Portfolio",
      description: "Personal portfolio featuring interactive 3D Globe with Three.js, Aurora visual effects, and Jhei AI Assistant.",
      highlights: [
        "Built with Astro, React, Tailwind CSS, Three.js, and Framer Motion for maximum performance and visual richness.",
      ],
      technologies: ["Astro", "React", "Three.js", "Tailwind CSS", "Framer Motion", "Google Gemini API"],
    },
  ],
  technicalSkills: {
    programming: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ReactJS",
      "VueJS",
      "NEXT.js",
      "TailwindCSS",
      "GSAP",
      "Laravel",
      "PHP",
      "Arduino",
      "C++",
      "Python",
      "Java",
      "Node.js",
      "Vercel",
      "JSON",
      "YAML",
    ],
    machineLearning: [
      "Roboflow",
      "PyTorch",
      "TensorFlow",
      "Anaconda",
      "Jupyter",
      "Pillow",
      "YOLOv8-v10",
      "Computer Vision",
    ],
    multimedia: [
      "Canva",
      "PowerPoint",
      "Adobe Photoshop",
      "Sony Vegas Pro",
      "Capcut",
      "Filmora",
    ],
    workflowAutomation: ["Zapier"],
    timeManagementAndAgile: [
      "Outlook",
      "Notion",
      "JIRA",
      "Trello",
      "AGILE Framework",
      "Eisenhower Matrix",
      "STAR Method",
    ],
    documentationSuites: ["Microsoft 365", "Google Suites", "LibreSuites"],
  },
  certifications: [
    {
      name: "Base Community Townhall Certificate",
      description:
        "Attended and led the discussion on blockchain, answering inquiries about Base and how it upholds accountability and transparency in the digital era like a public ledger.",
    },
    {
      name: "Hardening SQL: Cybersecurity Strategies for Safer Databases",
      description:
        "Active participation in mitigation of SQL injection vulnerabilities and key vectors of cyberattacks.",
    },
    {
      name: "NVIDIA Elevate Seminar: Exploring Career Opportunities for Emerging Technologies",
      description:
        "Focus on staying updated in Machine Learning, Autonomous Vehicles, and Embedded Systems (IoT), emphasizing full self-driving integration, continuous learning, and adaptability.",
    },
  ],
  faq: [
    {
      question: "Where do you live?",
      answer: "I am based in Rizal, Philippines.",
    },
    {
      question: "Where did you study and what was your course?",
      answer: "I graduated from Pamantasan ng Lungsod ng Pasig (2021 – 2025). My coursework covered Algorithms & Complexities, Data Structures, Software Engineering, Operating Systems, Robotics, and Automata Theory.",
    },
    {
      question: "What is your customer service background?",
      answer: "I worked as a Customer Service Advisor at Concentrix (July 2025 – February 2026), handling 1,067 inbound calls across domestic and international accounts with a 91.17% Q6 CSAT. I was upscaled twice across 3 different Lines of Business (LOBs).",
    },
    {
      question: "What is Aquagrade?",
      answer: "Aquagrade is a Fish-Grading Freshness System using computer vision and machine learning. As Junior Software Engineer, MLE, and Data Governance Officer, I led a 3-person team and developed a model reaching 90% mAP50. We used the Eisenhower Matrix method to finish the project in 3 months instead of 9.",
    },
    {
      question: "What machine learning tools do you use?",
      answer: "I work with PyTorch, TensorFlow, Roboflow, YOLOv8-v10, Anaconda, Jupyter, and Pillow for computer vision and ML workflows.",
    },
    {
      question: "How can I contact you?",
      answer: "You can email me at emperador.jheizonbrhylle@gmail.com, or reach out on LinkedIn (linkedin.com/in/delacruzjheizonbrhylle) or GitHub (github.com/Brhylle).",
    },
  ],
};

/**
 * Returns the formatted markdown string of the resume for LLM context grounding.
 */
export function getGroundedResumeContext(): string {
  const {
    name,
    preferredName,
    location,
    professionalSummary,
    contact,
    education,
    workExperience,
    projects,
    technicalSkills,
    certifications,
    faq,
  } = RESUME_KNOWLEDGE;

  return `
NAME: ${name} (Goes by ${preferredName})
LOCATION: ${location}
SUMMARY: ${professionalSummary}

CONTACT & LINKS:
- Email: ${contact.email}
${contact.github ? `- GitHub: ${contact.github}\n` : ""}${contact.linkedin ? `- LinkedIn: ${contact.linkedin}\n` : ""}
EDUCATION:
- Institution: ${education.institution} (${education.period})
- Coursework: ${education.coursework.join(", ")}

WORK EXPERIENCE:
${workExperience
  .map(
    (exp) => `
### ${exp.title} at ${exp.company} (${exp.period})
${exp.highlights.map((h) => `- ${h}`).join("\n")}`
  )
  .join("\n")}

PROJECTS:
${projects
  .map(
    (p) => `
### ${p.title} (${p.subtitle})
${p.roles ? `- Roles: ${p.roles.join(", ")}\n` : ""}- Overview: ${p.description}
${p.highlights.map((h) => `- ${h}`).join("\n")}
- Tech Stack: ${p.technologies.join(", ")}`
  )
  .join("\n")}

TECHNICAL SKILLS:
- Programming: ${technicalSkills.programming.join(", ")}
- Machine Learning & AI: ${technicalSkills.machineLearning.join(", ")}
- Multimedia & Video Editing: ${technicalSkills.multimedia.join(", ")}
- Workflow Automation: ${technicalSkills.workflowAutomation.join(", ")}
- Project & Time Management: ${technicalSkills.timeManagementAndAgile.join(", ")}
- Office & Documentation Suites: ${technicalSkills.documentationSuites.join(", ")}

CERTIFICATIONS & SEMINARS:
${certifications
  .map(
    (cert) => `
- ${cert.name}: ${cert.description}`
  )
  .join("\n")}

FREQUENTLY ASKED QUESTIONS & DIRECT ANSWERS:
${faq.map((item) => `Q: ${item.question}\nA: ${item.answer}`).join("\n\n")}
`.trim();
}
