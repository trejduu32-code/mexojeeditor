import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const technologies = [
  "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Vue",
  "Node.js", "Python", "Rust", "Go", "JSON", "Markdown",
];

const TechStackSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supports all your favorite <span className="text-gradient">languages</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Syntax highlighting, autocomplete, and more for 50+ languages.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <span className="font-medium">{tech}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;