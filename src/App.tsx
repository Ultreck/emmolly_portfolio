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
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function App() {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleIsScrolled = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleIsScrolled);
    return () => window.removeEventListener("scroll", handleIsScrolled);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <ThemeProvider>
      <HeroUIProvider>
        <div className="min-h-screen overflow-visible bg-gray-50 relative dark:bg-gray-900 border text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />

            {isScrolled && (
              <div
                onClick={scrollToTop}
                className="fixed right-6 bottom-6 z-[9999] w-12 h-12 rounded-full bg-red-600 flex justify-center items-center text-white shadow-lg hover:bg-blue-700 transition-all"
              >
                <FaArrowUp className="text-xl" />
              </div>
            )}
          </main>
          <Footer />
        </div>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default App;
