import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navItems } from "../../constants";
import { useTheme } from "../../context/ThemeContex";
import img from "../../assets/my profile.jpg";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  // let s = motion
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto lg:w-[85%] container px-4 sm:px-6 lg:px-5">
        <div className="flex  items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.2, 1.0)}
              className="inset-0 w-8 h-8 md:hidden border-2 p-1 border-[#EC4899] border-dashed  rounded-full"
            >
              <img
                src={img}
                alt="Profile picture"
                className="w-full h-full  rounded-full shadow-lg"
              />
            </motion.div>
            <a
              href="#home"
              className="text-2xl md:block hidden font-mono font-bold text-indigo-600 dark:text-indigo-400"
            >
             <img src="/10617714.ico" alt="My Icon" className="w-6 h-6" />

            </a>
          </div>

          <div className="hidden md:block">
            <nav className="ml-10 flex items-center xl:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={` hover:text-indigo-600  dark:hover:text-indigo-400 px-3 py-2 text-sm  transition-colors duration-200 text-gray-700 dark:text-gray-300 font-medium`}
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact"
                className="p-1.5 font-bold px-3 rounded-full shadow-inner dark:shadow-pink-600 shadow-blue-500 dark:text-white hover:border-dashed border-2 dark:border-[#EC4899] border-blue-500 text-black transition-colors"
                aria-label="Toggle theme"
              >
                Hire me
              </a>
         
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </nav>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 mr-4 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white dark:bg-gray-900 overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1 border-t border-gray-200 dark:border-gray-700">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
