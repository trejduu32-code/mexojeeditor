import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const testimonials = [
  {
    quote: "This changed how I code forever. Absolutely incredible.",
    author: "Alex Developer",
    role: "Full Stack Engineer",
  },
  {
    quote: "The live preview feature is a game changer. Can't go back.",
    author: "Sam Creative",
    role: "UI Designer",
  },
  {
    quote: "Fast, clean, and just works. What more could you ask for?",
    author: "Jordan Hacker",
    role: "Security Researcher",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Loved by <span className="text-gradient">developers</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative p-8 rounded-2xl bg-card border border-border group"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10">
                <motion.div
                  className="text-4xl text-primary mb-6"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  "
                </motion.div>
                <p className="text-lg text-foreground mb-6 leading-relaxed">
                  {item.quote}
                </p>
                <div>
                  <div className="font-semibold">{item.author}</div>
                  <div className="text-muted-foreground text-sm">{item.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;