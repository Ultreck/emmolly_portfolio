// import React from 'react';
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ContactSection from "./components/sections/ContactSection";
import { ThemeProvider } from "./context/ThemeContex";
import ProjectsSection from "./components/sections/ProjectSection";
import { HeroUIProvider } from "@heroui/system";

function App() {
  return (
    <ThemeProvider>
      <HeroUIProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default App;
