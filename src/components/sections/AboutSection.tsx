import React from "react";
import { ArrowDown } from "lucide-react";
import MacBookProMockup from "../MacBookProMockup";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

const AboutSection: React.FC = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("skills");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      id="resume"
      className="py-20 h-screen mx-auto relative w-[85%] bg-white  dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-3xl mx-auto text-center mb-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-20%" }}
            variants={fadeIn("up", "spring", 0.2, 1.2)}
            className="text w-full"
          >
            <MacBookProMockup />{" "}
          </motion.div>
        </div>
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 z-20 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <a key={"#skills"} href={"#skills"}>
            <ArrowDown size={24} />
          </a>
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
