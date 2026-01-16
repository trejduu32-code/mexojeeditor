import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Lightbulb, Rocket, Star, Zap, Heart, Globe } from "lucide-react";

const timeline = [
  {
    icon: Lightbulb,
    title: "The Idea",
    description: "It started with a simple question: What if coding was as easy as writing a document?",
  },
  {
    icon: Rocket,
    title: "First Launch",
    description: "The first version of me.xo.je went live. A simple editor with big dreams.",
  },
  {
    icon: Star,
    title: "Live Preview",
    description: "Added real-time preview - see your changes instantly without refreshing.",
  },
  {
    icon: Zap,
    title: "Cloud Sync",
    description: "Your code, everywhere. Access your projects from any device, anytime.",
  },
  {
    icon: Heart,
    title: "Community",
    description: "Developers started using and loving it. The community grew organically.",
  },
  {
    icon: Globe,
    title: "Today",
    description: "A full suite of tools for modern development. And we're just getting started.",
  },
];

const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            From idea to<br />
            <span className="text-gradient">reality</span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {timeline.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Icon */}
              <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center z-10">
                <item.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <div className={`ml-28 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;