import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const words = ["Code", "Create", "Build", "Ship", "Dream", "Innovate", "Design", "Deploy"];

const InfiniteScrollSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="flex gap-8"
      >
        <motion.div
          className="flex gap-8 shrink-0"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold text-muted-foreground/20 whitespace-nowrap"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="flex gap-8 mt-8"
      >
        <motion.div
          className="flex gap-8 shrink-0"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          {[...words.reverse(), ...words].map((word, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-bold text-gradient whitespace-nowrap opacity-30"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InfiniteScrollSection;