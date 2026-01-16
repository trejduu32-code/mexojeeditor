import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Keyboard, Monitor, MousePointer, Wifi } from "lucide-react";

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { icon: Monitor, title: "Open Browser", desc: "No downloads needed" },
    { icon: Keyboard, title: "Start Typing", desc: "Write your code" },
    { icon: MousePointer, title: "See Preview", desc: "Instant feedback" },
    { icon: Wifi, title: "Share & Deploy", desc: "Go live instantly" },
  ];

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to coding bliss
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connection line */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent hidden md:block"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center"
              >
                <motion.div
                  className="w-20 h-20 mx-auto rounded-2xl bg-card border border-border flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 hsl(204 100% 50% / 0)",
                      "0 0 30px 10px hsl(204 100% 50% / 0.2)",
                      "0 0 0 0 hsl(204 100% 50% / 0)",
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity, delay: index * 0.5 }
                  }}
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <motion.div
                  className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm z-20"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;