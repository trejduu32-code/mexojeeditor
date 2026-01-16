import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

const codeLines = [
  { text: "// Welcome to me.xo.je", color: "text-muted-foreground" },
  { text: "const app = createApp();", color: "text-foreground" },
  { text: "", color: "" },
  { text: "app.use(CloudEditor, {", color: "text-foreground" },
  { text: "  theme: 'midnight',", color: "text-primary" },
  { text: "  livePreview: true,", color: "text-primary" },
  { text: "  autoSave: true,", color: "text-primary" },
  { text: "});", color: "text-foreground" },
  { text: "", color: "" },
  { text: "// Start coding instantly", color: "text-muted-foreground" },
  { text: "await app.initialize();", color: "text-foreground" },
  { text: "console.log('Ready! 🚀');", color: "text-green-400" },
];

const CodeDemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (isInView && visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isInView, visibleLines]);

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Live Preview
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Write code.<br />
              <span className="text-gradient">See it live.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              No more switching between tabs. Watch your changes come to life 
              instantly as you type. The fastest feedback loop for web development.
            </p>
            <ul className="space-y-4">
              {["Instant hot reload", "Zero configuration", "Works offline"].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-lg"
                >
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl" />
            <div className="relative bg-card border border-border rounded-2xl overflow-hidden card-glow">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-sm text-muted-foreground">app.js</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm md:text-base">
                {codeLines.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: index < visibleLines ? 1 : 0 }}
                    className={`${line.color} h-7 flex items-center`}
                  >
                    <span className="text-muted-foreground/50 w-8 select-none">
                      {index + 1}
                    </span>
                    {line.text}
                    {index === visibleLines - 1 && (
                      <span className="w-2 h-5 bg-primary ml-1 animate-pulse" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodeDemoSection;