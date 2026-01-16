import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  url: string;
  icon: ReactNode;
  gradient?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, url, icon, gradient, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="group relative block p-8 rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/50 transition-colors card-glow"
    >
      {/* Background gradient on hover */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity ${gradient || 'bg-primary'}`}
      />
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            {icon}
          </div>
          <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </motion.a>
  );
};

export default ProjectCard;