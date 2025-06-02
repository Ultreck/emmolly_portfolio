import { Globe, PenTool, Server } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { RiSeoLine } from "react-icons/ri";
import PhoneTyping from "../PhoneTyping";
import { Card } from "@heroui/card";
import { FaDatabase } from "react-icons/fa6";
import { TbMessageChatbot } from "react-icons/tb";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/variant";
const SkillsSection: React.FC = () => {
  // const scrollToNextSection = () => {
  //   const aboutSection = document.getElementById("resume");
  //   if (aboutSection) {
  //     aboutSection.scrollIntoView({ behavior: "smooth" });
  //   }
  // };

  return (
    <section
      id="services"
      className="mx-auto lg:w-[85%] min-h-screen w-11/12 overflow-x-hidden py-20 bg-gray-50 dark:bg-gray-900"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-20%" }}
        variants={fadeIn("up", "spring", 0.2, 1.2)}
        className="container mx-auto sm:px-4 lg:px-8"
      >
        <div className="max-w-3xl mx-auto text-center mb-10">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-10%" }}
            variants={fadeIn("left", "spring", 0.3, 1.2)}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2"
          >
            My Services
          </motion.h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
        </div>
        <section className="text grid gridcols-1 md:grid-cols-3 gap-5 mb-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-10%" }}
            variants={fadeIn("right", "spring", 0.3, 1.2)}
            className="text col-span-3 md:col-span-1"
          >
            <PhoneTyping />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-10%" }}
            variants={fadeIn("left", "spring", 0.1, 1.2)}
            className="grid col-span-3 grid-cols-1 md:col-span-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ margin: "-10%" }}
              variants={fadeIn("up", "spring", 0.1, 1.2)}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <Card className="w-full h-full p-6 bg-transparent">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-indigo-600 dark:text-indigo-400 mb-4"
                >
                  <FaCode size={32} />
                </motion.div>
                <motion.h3
                  initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-10%" }}
                  variants={fadeIn("down", "spring", 0.2, 1.2)}
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
                >
                  Frontend Development
                </motion.h3>
                <motion.p
                  initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-20%" }}
                  variants={fadeIn("right", "spring", 0.3, 1.2)}
                  className="text-gray-600 dark:text-gray-300"
                >
                  Building responsive websites with modern frameworks and clean
                  code.
                </motion.p>
              </Card>
            </motion.div>
            <motion.div 
            initial="hidden"
              whileInView="show"
              viewport={{ margin: "-10%" }}
              variants={fadeIn("down", "spring", 0.1, 1.2)}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <motion.div 
                 initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.6,
                    type: "spring",
                    stiffness: 200,
                  }}className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <Globe size={32} />
                </motion.div>
                <motion.h3 
                initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-10%" }}
                  variants={fadeIn("up", "spring", 0.2, 1.2)}
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Web Performance
                </motion.h3>
                <motion.p 
                 initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-20%" }}
                  variants={fadeIn("left", "spring", 0.3, 1.2)}
                  className="text-gray-600 dark:text-gray-300">
                  Optimizing websites for speed and accessibility.
                </motion.p>
              </Card>
            </motion.div>
            <motion.div 
            initial="hidden"
              whileInView="show"
              viewport={{ margin: "-10%" }}
              variants={fadeIn("right", "spring", 0.1, 1.2)}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <motion.div 
                 initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <RiSeoLine size={32} />
                </motion.div>
                <motion.h3 
                initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-10%" }}
                  variants={fadeIn("right", "spring", 0.2, 1.2)}
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  SEO
                </motion.h3>
                <motion.p 
                 initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-20%" }}
                  variants={fadeIn("down", "spring", 1.0, 1.2)}
                  className="text-gray-600 dark:text-gray-300">
                  Optimizing websites for search engines with clean code, fast
                  performance, and semantic structure to improve visibility and
                  ranking.
                </motion.p>
              </Card>
            </motion.div>
            <motion.div 
            initial="hidden"
              whileInView="show"
              viewport={{ margin: "-10%" }}
              variants={fadeIn("left", "spring", 0.3, 1.2)}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <motion.div 
                 initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <TbMessageChatbot size={32} />
                </motion.div>
                <motion.h3 
                initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-10%" }}
                  variants={fadeIn("left", "spring", 0.2, 1.2)}
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Chatbots
                </motion.h3>
                <motion.p 
                 initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-20%" }}
                  variants={fadeIn("right", "spring", 0.3, 1.2)}
                  className="text-gray-600 dark:text-gray-300">
                  Developing intelligent chatbots that automate support and
                  enhance user interaction using modern NLP tools and APIs.
                </motion.p>
              </Card>
            </motion.div>

            <motion.div 
            initial="hidden"
              whileInView="show"
              viewport={{ margin: "-10%" }}
              variants={fadeIn("down", "spring", 0.1, 1.2)}className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <motion.div 
                 initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-indigo-600 flex dark:text-indigo-400 gap-3 mb-4">
                  <Server size={32} />{" "}
                  <span className="text h-8 border-2"></span>{" "}
                  <FaDatabase size={32} />
                </motion.div>
                <motion.h3 
                initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-10%" }}
                  variants={fadeIn("right", "spring", 0.2, 1.2)}
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Backend / Database
                </motion.h3>
                <motion.p 
                 initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-20%" }}
                  variants={fadeIn("right", "spring", 0.3, 1.2)}
                  className="text-gray-600 dark:text-gray-300">
                  <ul className="text">
                      Creating robust server-side applications and APIs and  Designing scalable and efficient database schemas for performance, and easy
                      maintainability.
                  </ul>
                </motion.p>
              </Card>
            </motion.div>

            <motion.div 
            initial="hidden"
              whileInView="show"
              viewport={{ margin: "-10%" }}
              variants={fadeIn("left", "spring", 0.1, 1.2)}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <motion.div 
                 initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: 1.6,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <PenTool size={32} />
                </motion.div>
                <motion.h3 
                initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-10%" }}
                  variants={fadeIn("down", "spring", 0.2, 1.2)}
                  className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  UI/UX Design
                </motion.h3>
                <motion.p 
                 initial="hidden"
                  whileInView="show"
                  viewport={{ margin: "-20%" }}
                  variants={fadeIn("down", "spring", 0.3, 1.2)}
                  className="text-gray-600 dark:text-gray-300">
                  Designing intuitive interfaces and seamless user experiences.
                </motion.p>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
