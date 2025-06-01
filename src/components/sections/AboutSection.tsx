import React from "react";
import MacBookProMockup from "../MacBookProMockup";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

const AboutSection: React.FC = () => {

  return (
    <section
      id="resume"
      className="py-20 min-h-screen mx-auto relative lg:w-[85%] bg-white  dark:bg-gray-900"
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
      </div>
    </section>
  );
};

export default AboutSection;
