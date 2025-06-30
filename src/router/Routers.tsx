import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectSection";
import SkillsSection from "@/components/sections/SkillsSection";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/skills" element={<SkillsSection />} />
        <Route path="/projects" element={<ProjectsSection data={[]} />} />
        <Route path="/contacts" element={<ContactSection />} />
      </Routes>
    </div>
  );
};

export default Routers;
