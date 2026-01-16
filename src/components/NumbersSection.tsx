import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const NumbersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const numbers = [
    { value: "24/7", label: "Availability" },
    { value: "0ms", label: "Setup Time" },
    { value: "100%", label: "Free" },
    { value: "∞", label: "Projects" },
  ];

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {numbers.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                bounce: 0.4
              }}
              className="text-center"
            >
              <motion.div
                className="text-5xl md:text-7xl font-bold text-gradient mb-4"
                animate={{ 
                  textShadow: [
                    "0 0 20px hsl(204 100% 50% / 0)",
                    "0 0 40px hsl(204 100% 50% / 0.5)",
                    "0 0 20px hsl(204 100% 50% / 0)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {item.value}
              </motion.div>
              <div className="text-muted-foreground text-lg">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumbersSection;