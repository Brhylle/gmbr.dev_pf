import { motion } from "motion/react";
import { DottedGlowBackground } from "./ui/dotted-glow-background";
import { Spotlight } from "./ui/spotlight-new";
import { Github, ExternalLink } from "lucide-react"; // Import icons

const projects = [
  {
    title: "BitGyeol (빛결)",
    description: "An Automated Smart Home System Using Motorized, Light-Aware Technology",
    image: "/projects/tmb_bitgyeol.jpg",
    tags: ["Arduino", "C++", "IoT","Wiring Schematics", "Circuit Design", "Robotics"],
    github: "https://github.com/Brhylle/BitGyeol",
    live: null, // No live demo
  },
  {
    title: "Aquagrade",
    description: "A Visual-Grading Freshness System Powered by CNNs",
    image: "/projects/tmb_aquagrade.png",
    tags: ["CNN", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/eyronnnn/AquaGrade-AI",
    live: null,
  },
  {
    title: "ChuuPurple",
    description: "A Single-Paged Collective Portfolio for Components",
    image: "/projects/tmb_chuupurple.png",
    tags: ["Vue.js", "Node.js", "GSAP", "HTML", "TailwindCSS"],
    github: "https://github.com/Brhylle/chuupurple", // If no GitHub link
    live: "https://chuupurple.vercel.app/",
  },
  {
    title: "CPU Scheduling Calculator",
    description: "A simple, interactive web-based tool to simulate and visualize CPU scheduling algorithms including FCFS, SJF, and Priority Scheduling.",
    image: "/projects/tmb_cpuscheduler.png",
    tags: ["Laravel", "PHP", "HTML", "TailwindCSS", "JavaScript"],
    github: "https://github.com/Brhylle/CpuSchedulingCalculator",
    live: "https://chuupurplesrcpuschedulingcalc.vercel.app",
  },
];

export default function ProjectsSection() {
  return (
    <div className="relative">
       <Spotlight/>
      <section id="projects" className="py-24 px-6">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
            >
            
            <h2 className="text-4xl font-bold md:text-5xl">Featured Projects</h2>
            <p className="mt-4 text-muted-foreground">
              I can help you create your projects from ground-up! Just like these creations crafted with care.
            </p>
          </motion.div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col overflow-hidden rounded-lg border border-foreground/10 bg-card transition-colors hover:border-foreground/20"
              >
                <div className="aspect-video overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-foreground/20 px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Buttons - pushed to bottom with mt-auto */}
                  <div className="mt-auto pt-6 flex gap-3">
                    {project.github && (
                      
                      <a href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-md border border-foreground/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-foreground/5"
                      >
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </a>
                    )}
                    {project.live && (
                      
                      <a href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Live
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          
        </div>

        
    </section>
    </div>

  );
}