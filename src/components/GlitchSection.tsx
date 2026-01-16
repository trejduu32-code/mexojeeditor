import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const GlitchSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-60 overflow-hidden bg-card">
      {/* Scan lines effect */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--foreground) / 0.03) 2px, hsl(var(--foreground) / 0.03) 4px)",
        }}
      />

      {/* Glowing lines */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="text-center"
        >
          <motion.h2 
            className="text-6xl md:text-9xl font-bold mb-8 relative"
            animate={{ 
              textShadow: [
                "0 0 10px hsl(204 100% 50% / 0.5)",
                "0 0 20px hsl(204 100% 50% / 0.8)",
                "0 0 10px hsl(204 100% 50% / 0.5)",
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span
              className="absolute inset-0 text-primary/50"
              animate={{ x: [-2, 2, -2], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 0.1, repeat: Infinity }}
            >
              HACK
            </motion.span>
            <motion.span
              className="absolute inset-0 text-red-500/50"
              animate={{ x: [2, -2, 2], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 0.1, repeat: Infinity, delay: 0.05 }}
            >
              HACK
            </motion.span>
            <span className="relative text-gradient">HACK</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-2xl md:text-3xl text-muted-foreground"
          >
            the future of coding
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlitchSection;