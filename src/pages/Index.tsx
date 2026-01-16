import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import StatsSection from "@/components/StatsSection";
import CodeDemoSection from "@/components/CodeDemoSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import TechStackSection from "@/components/TechStackSection";
import TimelineSection from "@/components/TimelineSection";
import QuoteSection from "@/components/QuoteSection";
import ProjectsSection from "@/components/ProjectsSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeatureSection />
      <StatsSection />
      <CodeDemoSection />
      <ShowcaseSection />
      <TechStackSection />
      <TimelineSection />
      <QuoteSection />
      <ProjectsSection />
      <CTASection />
      <FooterSection />
    </main>
  );
};

export default Index;