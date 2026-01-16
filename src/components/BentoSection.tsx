import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const BentoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            <span className="text-gradient">Features</span> that matter
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* Large card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2 md:row-span-2 p-8 rounded-3xl bg-gradient-to-br from-primary/20 to-card border border-border relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
            />
            <div className="relative z-10 h-full flex flex-col justify-end">
              <h3 className="text-3xl font-bold mb-4">Blazing Fast</h3>
              <p className="text-muted-foreground text-lg">
                Experience code editing at the speed of thought. Zero lag, maximum productivity.
              </p>
            </div>
            <motion.div
              className="absolute top-8 right-8 w-32 h-32 rounded-full bg-primary/20 blur-2xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* Small cards */}
          {[
            { title: "Dark Mode", desc: "Easy on the eyes" },
            { title: "Auto Save", desc: "Never lose work" },
            { title: "Shortcuts", desc: "Power user ready" },
            { title: "Extensions", desc: "Customize everything" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoSection;