import type React from "react";
import { use, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AuroraBackground } from "./ui/aurora-background";

export default function HeroSection() {
  const textRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    requestAnimationFrame(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });
  }, []);

  // Role rotation logic
  const roles = ["DEVELOPER", "DESIGNER", "AGENT"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
        <AuroraBackground>
        <section
          id="hero"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
          >
            <div className="relative z-10 mx-auto max-w-6xl text-center">
              <div className="relative inline-block w-full">
                <div className="relative z-10">
                  <h1
                    ref={textRef}
                    className="text-[clamp(4rem,15vw,12rem)] font-black leading-[0.85] tracking-tighter text-foreground"
                  >
                    CREATIVE
                    <br />
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={{currentRoleIndex}}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="inline-block"
                      >
                        {roles[currentRoleIndex]}
                      </motion.span>
                    </AnimatePresence>
                  </h1>
                </div>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative z-20 mt-10 font-mono text-sm text-muted-foreground md:text-base"
              >
                Crafting digital experiences with clean code & thoughtful design
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="relative z-20 mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <a
                  href="#projects"
                  className="rounded-md bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
                >
                  View Projects
                </a>
                <a
                  href="/resume.pdf"
                  download
                  className="rounded-md border border-foreground/30 px-6 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-foreground hover:bg-foreground/5"
                >
                  Download Resume
                </a>
              </motion.div>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="relative z-20 mt-16 flex flex-col items-center gap-2"
              >
                <span className="font-mono text-xs text-muted-foreground">
                  Scroll
                </span>
                <div className="h-8 w-px animate-pulse bg-gradient-to-b from-foreground/40 to-transparent" />
              </motion.div>
            </div>
      </section>
        </AuroraBackground>

    </div>
  );
}