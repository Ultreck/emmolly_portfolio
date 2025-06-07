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
import { Tooltip } from "@heroui/tooltip";
import NumberOfUsers from "./components/NumberOfUsers";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    getUserIP();
    const handleIsScrolled = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleIsScrolled);
    return () => window.removeEventListener("scroll", handleIsScrolled);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getUserIP = async () => {
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (!res) return;
      const data = await res.json();
      console.log(data);
    } catch (error) {
      throw new Error("Internal server error");
    }
  };

  return (
    <ThemeProvider>
      <HeroUIProvider>
        <div className="min-h-screen overflow-visible bg-gray-50 dark:bg-gray-900  text-gray-900 dark:text-white transition-colors duration-300">
          <Header />
          <main>
            <HeroSection />
            <SkillsSection />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          {isScrolled && (
            <button
              onClick={scrollToTop}
              className="fixed flex justify-center items-center text-white right-2 bottom-0 mb-10 -ml-5 rounded-full w-12 h-12 bg-blue-600 hover:bg-blue-500"
            >
              <FaArrowUp className="text-xl animate-bounce" />
            </button>
          )}
          <div className="text">
          <NumberOfUsers/>
          </div>

          
          <Footer />
        </div>
      </HeroUIProvider>
    </ThemeProvider>
  );
}

export default App;
