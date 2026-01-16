import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MonitorPlay, Sparkles, Globe } from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "Live Preview",
    description: "See your changes instantly with real-time preview. No refresh needed.",
  },
  {
    icon: Sparkles,
    title: "Cloud Powered",
    description: "Your code lives in the cloud. Access it anywhere, anytime.",
  },
  {
    icon: Globe,
    title: "Share & Deploy",
    description: "Deploy your projects with a single click. Share with the world.",
  },
];

const FeatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built for <span className="text-gradient">developers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Everything you need to code, preview, and ship — in the browser.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all card-glow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;