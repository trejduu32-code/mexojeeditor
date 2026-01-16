import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { Terminal, Layers, Palette, Cpu, Database, Shield } from "lucide-react";

const showcaseItems = [
  {
    icon: Terminal,
    title: "Powerful Terminal",
    description: "Built-in terminal for running commands directly in the browser. Execute scripts, install packages, and more.",
  },
  {
    icon: Layers,
    title: "Multi-File Support",
    description: "Work with multiple files and folders. Full project structure support with intuitive file navigation.",
  },
  {
    icon: Palette,
    title: "Beautiful Themes",
    description: "Choose from dozens of color themes. Dark mode, light mode, and everything in between.",
  },
  {
    icon: Cpu,
    title: "Fast & Responsive",
    description: "Optimized for speed. Instant feedback, zero lag, even on complex projects.",
  },
  {
    icon: Database,
    title: "Cloud Storage",
    description: "Your projects are safely stored in the cloud. Access them from any device, anytime.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "End-to-end encryption for your code. Your projects stay private and secure.",
  },
];

const ShowcaseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Everything you need to<br />
            <span className="text-gradient">code like a pro</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional-grade tools, zero setup required. Start coding in seconds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-card to-background border border-border hover:border-primary/30 transition-all group"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;