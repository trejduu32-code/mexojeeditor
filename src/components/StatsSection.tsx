import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const stats = [
  { value: "10K+", label: "Lines of Code Written" },
  { value: "500+", label: "Projects Created" },
  { value: "99.9%", label: "Uptime" },
  { value: "∞", label: "Possibilities" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden border-y border-border">
      <div className="absolute inset-0 bg-primary/5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-bold text-gradient mb-4">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;