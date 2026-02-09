import { motion } from "motion/react";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

const experiences = [
  {
    title: "Customer Service Advisor",
    company: "Concentrix CVG",
    period: "July 2025 - February 2026",
    description:
      `- Handled 1,067 inbound calls across domestic and international support both
      voice and non-voice 
      achieving a 91.17% Q6 CSAT with resolution, based on surveyed customer
      feedback as a 
      Customer Service Advisor on a travel account. \n - Out of 25 colleagues who've asked for help with their network issues, I was able to troubleshoot and resolve 23 of them, resulting in a 92% success rate in providing effective solutions and ensuring uninterrupted connectivity for my colleagues.`,
    technologies: ["Empathy", "Soft Skills", "Language Frameworks", "Problem Solving"],
  },
    {
    title: "Associate Project Lead",
    company: "RTU Boni Campus - MISO",
    period: "March 2025 - May 2025",
    description:
      `- Created and deployed a queuing system in a short span of time by ensuring tasks were delegated using JIRA and is prioritized based on level or urgency and importance. \n\n`,
    technologies: ["JIRA", "Trello", "Eisenhower Matrix", "STAR Method"],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-32 px-12 bg-muted/30">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">Work Experience</h2>
          <p className="mt-4 text-muted-foreground">
            I have helped a variety of customers, users and even colleagues in a professional industry, may it be <b>virtually</b> or <b>in-person</b>!
          </p>
        </motion.div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative border-l-2 border-foreground/20 pl-8"
            >
              <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-foreground bg-background" />
              
              <div className="font-mono text-sm text-muted-foreground">
                {exp.period}
              </div>
              <h3 className="mt-1 text-xl font-semibold">{exp.title}</h3>
              <div className="text-sm text-muted-foreground">{exp.company}</div>
              <p className="mt-3 text-muted-foreground">{exp.description}</p>
              
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-foreground/5 px-3 py-1 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
