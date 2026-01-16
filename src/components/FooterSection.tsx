import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            <span className="text-foreground">me</span>
            <span className="text-gradient">.xo.je</span>
          </h3>
          <p className="text-muted-foreground mb-8">
            Cloud code editor with instant preview
          </p>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary" />
            <span>for developers</span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default FooterSection;