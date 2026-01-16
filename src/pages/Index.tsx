import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import ProjectsSection from "@/components/ProjectsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <ProjectsSection />
      <FooterSection />
    </main>
  );
};

export default Index;