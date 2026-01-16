import { motion } from "framer-motion";
import { Code, Cloud, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background grid */}
      <motion.div 
        className="absolute inset-0 bg-grid opacity-30"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      
      {/* Multiple glow effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[100px]"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-accent/20 blur-[80px]"
        animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Cloud className="w-4 h-4 text-primary" />
            </motion.div>
            <span className="text-sm text-muted-foreground">Cloud Code Editor</span>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span 
              className="text-foreground inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              me
            </motion.span>
            <motion.span 
              className="text-gradient inline-block"
              animate={{ 
                textShadow: [
                  "0 0 20px hsl(204 100% 50% / 0.3)",
                  "0 0 60px hsl(204 100% 50% / 0.6)",
                  "0 0 20px hsl(204 100% 50% / 0.3)",
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              .xo.je
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            The cloud code editor with instant preview. 
            Write, preview, and deploy — all in one place.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a 
              href="https://me.xo.je/g/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold transition-all glow"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(204 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              Try Advanced Editor
            </motion.a>
            <motion.a 
              href="https://me.xo.je/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border bg-card/50 backdrop-blur-sm text-foreground font-semibold transition-all"
              whileHover={{ scale: 1.05, borderColor: "hsl(204 100% 50% / 0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Code className="w-5 h-5" />
              Standard Editor
            </motion.a>
          </motion.div>
        </motion.div>
        
        {/* Floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-primary/30"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -30 - i * 5, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <motion.div 
            className="w-1 h-2 rounded-full bg-primary"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;