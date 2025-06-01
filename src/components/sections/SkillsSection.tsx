import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { skills } from "../../constants";
import { Globe, PenTool, Server } from "lucide-react";
import { FaCode } from "react-icons/fa";
import { RiSeoLine } from "react-icons/ri";
import PhoneTyping from "../PhoneTyping";
import { Card } from "@heroui/card";
import { FaDatabase } from "react-icons/fa6";
import { TbMessageChatbot } from "react-icons/tb";

const SkillsSection: React.FC = () => {
  // Group skills by category
  type Skill = (typeof skills)[number];
  const skillsByCategory = skills.reduce<Record<string, Skill[]>>(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {}
  );

  // Format category names for display
  const formatCategoryName = (name: string) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("resume");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="mx-auto lg:w-[85%] min-h-screen py-20 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Here are the services I render on a regular basis.
          </p>
        </div>
        <section className="text grid gridcols-1 lg:grid-cols-2 gap-5 mb-10">
          <PhoneTyping />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <FaCode size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Frontend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Building responsive websites with modern frameworks and clean
                  code.
                </p>
              </Card>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <Globe size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Web Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimizing websites for speed and accessibility.
                </p>
              </Card>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <RiSeoLine size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  SEO
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Optimizing websites for search engines with clean code, fast
                  performance, and semantic structure to improve visibility and
                  ranking.
                </p>
              </Card>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <TbMessageChatbot size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Chatbots
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Developing intelligent chatbots that automate support and
                  enhance user interaction using modern NLP tools and APIs.
                </p>
              </Card>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <div className="text-indigo-600 flex dark:text-indigo-400 gap-3 mb-4">
                  <Server size={32} />{" "}
                  <span className="text h-8 border-2"></span>{" "}
                  <FaDatabase size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Backend / Database Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  <ul className="text">
                    <li className="text list-item list-disc">
                      Creating robust server-side applications and APIs.
                    </li>
                    <li className="text list-disc">
                      Designing scalable and efficient database schemas to
                      ensure data integrity, performance, and easy
                      maintainability.
                    </li>
                  </ul>
                </p>
              </Card>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <Card className="w-full h-full p-6 bg-transparent">
                <div className="text-indigo-600 dark:text-indigo-400 mb-4">
                  <PenTool size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  UI/UX Design
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Designing intuitive interfaces and seamless user experiences.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            And many more! I'm always learning and expanding my skill set.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            See My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
