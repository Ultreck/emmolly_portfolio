import React, { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import Typed from "typed.js";
import { Button } from '@heroui/button';



const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const el = React.useRef<HTMLSpanElement | null>(null);
  const typed = React.useRef<Typed | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const options = {
      strings: [" Emmanuel Oluwatayese", "A Full Stack Developer", "A Software Engineer", "A Web Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current as Element, options);

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [])
  

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen mx-auto w-[80%] flex items-center justify-center relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950"
    >
      <div 
        className={`container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <Button >Button</Button>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6">
            <span className="block">Hello, I'm</span>
            <span className="block mt-2">
              <span ref={el}></span>
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 rounded-full mb-6"></div>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-8">
            A <span className="font-semibold text-indigo-600 dark:text-indigo-400">Frontend Developer</span> crafting beautiful user interfaces and digital experiences
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-gray-900 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Scroll down indicator */}
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;