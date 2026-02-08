import { motion } from "motion/react";
import { DottedGlowBackground } from "./ui/dotted-glow-background";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <DottedGlowBackground />
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold md:text-5xl">Let's Connect!</h2>
            <p className="mt-4 text-muted-foreground">
              I am more than happy to help you within my capabilities. Feel free to reach out for collaborations, questions, or just to say hi!
            </p>

            <div className="mt-12 space-y-6 hover:text-foreground/100 transition-colors ">
              <a
                href="mailto:emperador.jheizonbrhylle@gmail.com"
                className="block rounded-lg bg-foreground/90 border border-foreground/90 p-6 transition-colors hover:border-foreground/80 hover:bg-foreground/80"
              >
                <div className="text-sm text-gray-700">Email</div>
                <div className="mt-1 font-medium text-gray-900">emperador.jheizonbrhylle@gmail.com</div>
              </a>

              <div className="flex justify-center gap-6 pt-6">
                <motion.a
                  href="https://github.com/Brhylle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-github"></i>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/delacruzjheizonbrhylle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-linkedin"></i>
                </motion.a>
                
                <motion.a
                  href="https://x.com/dlcrzjhznbrhyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-x-twitter"></i>
                </motion.a>
                
                <motion.a
                  href="https://www.instagram.com/gmbr.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-instagram"></i>
                </motion.a>
                
                <motion.a
                  href="https://www.facebook.com/gmbr.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-facebook"></i>
                </motion.a>
                
                <motion.a
                  href="https://viber.me/09939270175"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-viber"></i>
                </motion.a>
                
                <motion.a
                  href="https://t.me/gmbrhylle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground text-2xl"
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fa-brands fa-telegram"></i>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
    </section>
  );
}
