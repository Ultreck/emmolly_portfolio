import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
// import Typed from "typed.js";
// import { Button } from "@heroui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@heroui/card";
import Typed from "typed.js";
import PhoneTyping from "../PhoneTyping";
import ProfileWithAnimatedRing from "../ProfileWithAnimatedRing";

const allMessages = [
  { id: 1, text: "Hey! How are you?", sender: "other" },
  { id: 2, text: "I'm good! Working on a cool project.", sender: "me" },
  { id: 3, text: "Wow, what's it about?", sender: "other" },
  { id: 4, text: "A portfolio with real-time chat simulation.", sender: "me" },
  { id: 5, text: "That sounds amazing!", sender: "other" },
];
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [chat, setChat] = useState<
    { id: number; text: string; sender: string }[]
  >([]);
  const [index, setIndex] = useState(0);
  const el = React.useRef<HTMLSpanElement | null>(null);
  const typed = React.useRef<Typed | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (index < allMessages.length) {
      const timer = setTimeout(() => {
        setChat((prev) => [...prev, allMessages[index]]);
        setIndex((prev) => prev + 1);
      }, 3000); // Change delay to control speed
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    const options = {
      strings: [allMessages.map((msg) => msg.text).join(" ")],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    if (!el.current) return;
    typed.current = new Typed(el.current as Element, options);

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  const data = [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="min-h-screen mx-auto lg:w-[85%] relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950 grid md:grid-cols-2"
      >
        <div
          className={`container md:mt-28 mt-6 mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6">
              <span className="block dark:text-white text-black">
                Hello, I'm
              </span>
              <span className="block mt-2">
                {/* <span ref={el}></span> */}
                <span>Emmanuel Oluwatayese</span>
              </span>
            </h1>

            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 rounded-full mb-6"></div>

            <div className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl md:my-8 my-5 font-semibold md:text-start px-4">
              <span className="mr-2">A</span>
              <span className="inline-block max-w-full whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300"
                  >
                    {data[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="ml-2 text-start">
                specializing in crafting seamless user interfaces and building
                scalable backend systems. I transform ideas into complete,
                high-performing web applications that deliver powerful digital
                experiences.
              </span>
            </div>

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
          className="absolute bottom-8 z-20 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
        <div className="border mt-20 p-10 h-[80vh] relative">
          <ProfileWithAnimatedRing />
        </div>
        {/* <div
          className={`container hidden md:block md:mt-28 mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <PhoneTyping />
        </div> */}
      </section>
    </>
  );
};

export default HeroSection;
