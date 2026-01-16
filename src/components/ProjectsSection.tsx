import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Rocket, Code, HelpCircle, FileText, Gamepad2, Clock, Edit3, Database } from "lucide-react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Advanced Code Editor",
    description: "Full-featured code editor with advanced syntax highlighting, autocomplete, and live preview portfolio.",
    url: "https://me.xo.je/g/",
    icon: <Rocket className="w-6 h-6 text-primary" />,
  },
  {
    title: "Standard Editor",
    description: "Clean and simple code editor for quick edits and experiments. Perfect for beginners.",
    url: "https://me.xo.je/",
    icon: <Code className="w-6 h-6 text-primary" />,
  },
  {
    title: "Simple Code Editor",
    description: "Lightweight and minimal code editor. Perfect for quick snippets and learning to code.",
    url: "https://me.xo.je/codeeditor.html",
    icon: <Edit3 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Base44 Bin",
    description: "The main site for bin.base44 - A powerful platform for all your development needs.",
    url: "https://bin.base44.app/",
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    title: "Mystery Project",
    description: "Something special is brewing here. Stay tuned for updates on this secret project.",
    url: "https://me.xo.je/gg/",
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
  },
  {
    title: "Pasteto",
    description: "A sleek pastebin clone for sharing code snippets. Fast, simple, and beautiful.",
    url: "https://pasteto.vercel.app/",
    icon: <FileText className="w-6 h-6 text-primary" />,
  },
  {
    title: "Kart Bros",
    description: "A fun racing game built for the web. Challenge your friends and race to victory!",
    url: "https://kart-bros.pages.dev/",
    icon: <Gamepad2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Clock Made of Clocks",
    description: "An artistic clock display where each digit is made up of smaller analog clocks.",
    url: "https://clock-made-clocks.pages.dev/",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Explore the <span className="text-gradient">collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects built with passion, creativity, and lots of coffee.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;