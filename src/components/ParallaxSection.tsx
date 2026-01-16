import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Sparkles, Zap, Target, Crown } from "lucide-react";

const ParallaxSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-60 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        animate={{ 
          background: [
            "radial-gradient(circle at 20% 50%, hsl(204 100% 50% / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, hsl(204 100% 50% / 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, hsl(204 100% 50% / 0.15) 0%, transparent 50%)",
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 rounded-full bg-primary/40"
          style={{
            left: `${15 + i * 15}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <Crown className="w-16 h-16 text-primary" />
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Built for
              <br />
              <motion.span 
                className="text-gradient"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                greatness
              </motion.span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Every line of code is crafted with precision. Every feature is 
              designed with purpose. This isn't just a code editor — it's your 
              creative playground.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, type: "spring", delay: 0.2 }}
            className="space-y-6"
          >
            {[
              { icon: Sparkles, title: "Magic Autocomplete", desc: "AI-powered suggestions that read your mind" },
              { icon: Zap, title: "Lightning Fast", desc: "Sub-millisecond response times" },
              { icon: Target, title: "Precision Tools", desc: "Every feature exactly where you need it" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.15 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="flex gap-6 p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:border-primary/50 transition-colors"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ParallaxSection;