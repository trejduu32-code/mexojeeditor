import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Live Preview", us: true, others: false },
  { feature: "Cloud Storage", us: true, others: false },
  { feature: "Instant Load", us: true, others: false },
  { feature: "No Setup Required", us: true, others: false },
  { feature: "Works Offline", us: true, others: false },
  { feature: "Free to Use", us: true, others: true },
];

const ComparisonSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px]"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Why choose <span className="text-gradient">us?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            See how we stack up against the competition
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div />
            <motion.div 
              className="text-lg font-bold text-gradient"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              me.xo.je
            </motion.div>
            <div className="text-lg font-medium text-muted-foreground">Others</div>
          </div>

          {comparisonData.map((item, index) => (
            <motion.div
              key={item.feature}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="grid grid-cols-3 gap-4 py-4 border-b border-border items-center"
            >
              <span className="text-foreground font-medium">{item.feature}</span>
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center"
                >
                  <Check className="w-5 h-5 text-green-500" />
                </motion.div>
              </div>
              <div className="flex justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    item.others ? "bg-green-500/20" : "bg-red-500/20"
                  }`}
                >
                  {item.others ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <X className="w-5 h-5 text-red-500" />
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ComparisonSection;