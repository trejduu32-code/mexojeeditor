import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Quote } from "lucide-react";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <Quote className="w-16 h-16 text-primary/30 mx-auto mb-8" />
          <blockquote className="text-3xl md:text-5xl font-light leading-relaxed mb-8">
            "The best code is the code that<br />
            <span className="text-gradient font-medium">writes itself.</span>"
          </blockquote>
          <p className="text-muted-foreground text-lg">
            — Every developer, eventually
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection;