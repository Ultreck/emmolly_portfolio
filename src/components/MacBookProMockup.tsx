import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { ScrollShadow } from "@heroui/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import SkillsCard from "./SkillsCard";
import AboutSectionPart from "./AboutSection";
import { ArrowDown } from "lucide-react";

const MacBookProMockup: React.FC<React.PropsWithChildren<{}>> = () => {
  const [tab, setTab] = useState(0);
  const [expTab, setExpTab] = useState(0);
    const scrollToNextSection = () => {
    const aboutSection = document.getElementById("rojects");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex justify-center overflow-hidden w-full items-center min-h-screen bg-transparent">
      <div className="relative w-full h-[970px] lg:h-[720px]">
        <div className="absolute top-0 w-full h-full bg-gray-800 rounded-t-[40px] rounded-b-[40px] lg:rounded-b-none md:border-[12px] border-[6px] border-gray-900 dark:border-gray-700 md:border-b-0 shadow-2xl">
          <div className="absolute inset-0 m-2 bg-gray-900 lg:rounded-none rounded-b-[40px] rounded-t-[28px] overflow-hidden">
            <div className="h-full dark:bg-gradient-to-br rounded-b-[40px] lg:rounded-none bg-gradient-to-r from-indigo-50 to-blue-50 dark:to-[#070a23] dark:from-[#36192d]">
              <div className="text-center gap-5 md:p-10 p-3  grid grid-cols-1 md:grid-cols-3">
                <div className="text">
                  <motion.h2
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn("right", "spring", 0.3, 1.2)}
                    className="text-3xl sm:text-4xl font-semibold text-start font-mono text-gray-900 dark:text-white mb-3 mt-7 md:mt-1"
                  >
                    Why hire me?
                  </motion.h2>
                  <motion.p
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn("left", "spring", 0.5, 2.0)}
                    className="text-start"
                  >
                    Full-stack proficiency meets creative problem-solving. I
                    bridge technical execution with strategic vision to deliver
                    exceptional digital products.
                  </motion.p>
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ margin: "-20%" }}
                    variants={fadeIn("up", "spring", 0.6, 1.2)}
                    className="text md:mt-10 mt-5 gap-2 flex justify-between md:grid lg:grid-cols-1 md:gap-10"
                  >
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.5,
                        type: "spring",
                        stiffness: 200,
                      }}
                      onClick={() => setTab(0)}
                      className={`text lg:px-0 px-2 ${tab === 0 ? "bg-blue-600 text-white" : "border border-gray-400"}   py-2 md:py-3 rounded-lg`}
                    >
                      Experience
                    </motion.button>
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.7,
                        type: "spring",
                        stiffness: 200,
                      }}
                      onClick={() => setTab(1)}
                      className={`text lg:px-0 px-2 ${tab === 1 ? "bg-blue-600 text-white" : "border border-gray-400"} py-2 md:py-3 rounded-lg`}
                    >
                      Skills
                    </motion.button>
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.9,
                        type: "spring",
                        stiffness: 200,
                      }}
                      onClick={() => setTab(2)}
                      className={`text lg:px-0 px-2 ${tab === 2 ? "bg-blue-600 text-white" : "border border-gray-400"} py-2 md:py-3 rounded-lg`}
                    >
                      School
                    </motion.button>
                    <motion.button
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        delay: 0.9,
                        type: "spring",
                        stiffness: 200,
                      }}
                      onClick={() => setTab(3)}
                      className={`text lg:px-0 px-2 ${tab === 3 ? "bg-blue-600 text-white" : "border border-gray-400"} py-2 md:py-3 rounded-lg`}
                    >
                      About Me
                    </motion.button>
                  </motion.div>
                </div>
                <div className="text-start overflow-x-hidden lg:px-5 col-span-2">
                  {tab === 0 && (
                    <div className="text overflow-x-hidden mx-auto">
                      <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-20%" }}
                        variants={fadeIn("left", "spring", 0.3, 1.3)}
                        className="text-3xl hidden lg:block sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                      >
                        My experience
                      </motion.h2>
                      <motion.div className="text border-b-2 border-gray-400 overflow-x-hidden justify-between overflow-y-hidden md:mt-5 mt-3 flex items-center">
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          onClick={() => setExpTab(0)}
                          className={`text ${expTab === 0 ? "border-blue-600 font-bold dark:text-blue-500 text-pink-600" : "border-gray-400"} border-b-2 lg:px-[18px]  px-4 -mb-0.5 py-3`}
                        >
                          Clan
                        </motion.button>
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.2,
                            type: "spring",
                            stiffness: 200,
                          }}
                          onClick={() => setExpTab(1)}
                          className={`text ${expTab === 1 ? "border-blue-600 font-bold dark:text-blue-500 text-pink-600" : "border-gray-400"} border-b-2 lg:px-[18px]  px-4 -mb-0.5 py-3`}
                        >
                          LonH
                        </motion.button>
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.3,
                            type: "spring",
                            stiffness: 200,
                          }}
                          onClick={() => setExpTab(2)}
                          className={`text ${expTab === 2 ? "border-blue-600 font-bold dark:text-blue-500 text-pink-600" : "border-gray-400"} border-b-2 lg:px-[18px]  px-4 -mb-0.5 py-3`}
                        >
                          Medillery
                        </motion.button>
                        <motion.button
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            delay: 0.4,
                            type: "spring",
                            stiffness: 200,
                          }}
                          onClick={() => setExpTab(3)}
                          className={`text ${expTab === 3 ? "border-blue-600 font-bold dark:text-blue-500 text-pink-600" : "border-gray-400"} border-b-2 lg:px-[18px]  px-4 -mb-0.5 py-3`}
                        >
                          Scict
                        </motion.button>
                      </motion.div>
                      {expTab === 3 && (
                        <ScrollShadow className="w-full h-[500px] overflow-x-hidden no-scrollbar rounded-b-[40px] xl:h-auto pb-5 lg:pb-0">
                          <div className={`text-start mt-5 font-sans`}>
                            <motion.h1
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.1, 1.2)}
                              className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600"
                            >
                              Backend Engineer{" "}
                              <span className="text-[#EC4899]">@ Scict</span>
                            </motion.h1>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.1, 1.2)}
                              className="text font-semibold mt-2"
                            >
                              November 2019 - Febrary 2022
                            </motion.p>

                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("down", "spring", 0.1, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />I
                              was responsible for architecting scalable backend
                              solutions using Node.js, ensuring robustness and
                              flexibility to accommodate growing user demands.
                              By implementing microservices architecture and
                              employing best practices, I facilitated seamless
                              scalability, allowing our platform to handle
                              increased traffic efficiently.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("up", "spring", 0.2, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />
                              Leveraging the asynchronous nature of Node.js, I
                              optimized critical backend processes to enhance
                              overall system performance. By identifying and
                              rectifying bottlenecks, I successfully reduced
                              response times, leading to improved user
                              experience and higher customer satisfaction.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.3, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />
                              My expertise in Node.js enabled me to develop
                              robust APIs that served as the backbone of our
                              applications. I collaborated closely with frontend
                              teams to design API endpoints that aligned with
                              frontend requirements, ensuring smooth
                              communication between the client and server
                              components.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.4, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />I
                              proficiently utilized Node.js frameworks like
                              Express.js to interact with databases and manage
                              data effectively. Through efficient database
                              querying and schema design, I enhanced data
                              retrieval speed and maintained data integrity,
                              contributing to a stable and reliable backend
                              infrastructure.
                            </motion.p>
                          </div>
                        </ScrollShadow>
                      )}
                      {expTab === 2 && (
                        <ScrollShadow className="w-full no-scrollbar overflow-x-hidden h-[500px] xl:h-auto pb-5 lg:pb-0">
                          <div className={`text-start mt-5 font-sans`}>
                            <motion.h1
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.4, 1.2)}
                              className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600"
                            >
                              Frontend Engineer{" "}
                              <span className="text-[#EC4899]">
                                @ Medillery
                              </span>
                            </motion.h1>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.1, 1.2)}
                              className="text font-semibold mt-2"
                            >
                              June 2022 - May 2023
                            </motion.p>

                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.1, 1.2)}
                              className="text  flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-8 md:w-3" />{" "}
                              Spearheaded the development of intuitive and
                              visually appealing frontend interfaces using
                              JavaScript frameworks like React.js and AngularJS,
                              ensuring optimal user experience across various
                              devices and screen sizes
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("up", "spring", 0.2, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-8 md:w-3" />
                              Optimized frontend performance through efficient
                              coding practices and rigorous testing, resulting
                              in improved page load times and rendering speeds
                              across different browsers and platforms.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.3, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-8 md:w-3" />
                              Integrated with backend APIs to dynamically fetch
                              and visualize data, leveraging component-based
                              architectures and reusable UI components to
                              promote code maintainability and scalability in
                              collaboration with backend engineers.
                            </motion.p>
                          </div>
                        </ScrollShadow>
                      )}
                      {expTab === 1 && (
                        <ScrollShadow className="w-full no-scrollbar overflow-x-hidden h-[500px] xl:h-auto pb-5 lg:pb-0">
                          <div className={`text-start mt-5 font-sans`}>
                            <motion.h1
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.1, 1.2)}
                              className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600"
                            >
                              Frontend Engineer{" "}
                              <span className="text-[#EC4899]">
                                @ Lights on Heights
                              </span>
                            </motion.h1>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.1, 1.2)}
                              className="text font-semibold mt-2"
                            >
                              August 2023 - Present
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.1, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-14 md:w-5" />I
                              Collaborated closely with product designers to
                              translate design mockups and wireframes into
                              interactive and visually appealing UI components
                              using React.js. By providing technical insights
                              and feedback during the design phase, contributed
                              to the creation of user-centric solutions that
                              aligned with both design aesthetics and frontend
                              development best practices.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.2, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-16 md:w-5" />
                              Acted as a bridge between backend engineers and
                              product designers, facilitating cross-functional
                              collaboration and ensuring alignment on project
                              goals and requirements. By actively participating
                              in brainstorming sessions, design reviews, and
                              sprint planning meetings, fostered a collaborative
                              work environment focused on delivering
                              high-quality results that met both technical and
                              design standards.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("up", "spring", 0.3, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-20 md:w-7" />
                              Implemented best practices and design patterns in
                              React development, such as componentization, state
                              management wih hooks or context API, and routing
                              with React Router, leading to improved code
                              maintainability and scalability as the website
                              evolved and grew in complexity. Additionally,
                              contributed to frontend design by ensuring
                              adherence to UI/UX principles, including
                              responsive design, accessibility standards, and
                              consistent styling across the website, resulting
                              in an aesthetically pleasing and user-friendly
                              interface.
                            </motion.p>
                          </div>
                        </ScrollShadow>
                      )}
                      {expTab === 0 && (
                        <ScrollShadow className="w-full no-scrollbar overflow-x-hidden h-[500px] xl:h-auto pb-5 lg:pb-0">
                          <div className={`text-start mt-5 font-sans`}>
                            <motion.h1
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.1, 1.2)}
                              className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600"
                            >
                              Fullstack Engineer{" "}
                              <span className="text-[#EC4899]">
                                @ Clan africa
                              </span>
                            </motion.h1>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.1, 1.2)}
                              className="text font-semibold mt-2"
                            >
                              June 2024 - May 2025
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("right", "spring", 0.1, 1.2)}
                              className="text  flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />{" "}
                              I Worked closely with backend engineers to
                              integrate frontend components with backend APIs,
                              ensuring smooth data flow and seamless
                              functionality across the website. By establishing
                              clear communication channels and aligning on data
                              requirements and API contracts, facilitated
                              efficient development and integration processes.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("down", "spring", 0.2, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-14 md:w-5" />I
                              Collaborated closely with product designers to
                              translate design mockups and wireframes into
                              interactive and visually appealing UI components
                              using React.js. By providing technical insights
                              and feedback during the design phase, contributed
                              to the creation of user-centric solutions that
                              aligned with both design aesthetics and frontend
                              development best practices.
                            </motion.p>
                            <motion.p
                              initial="hidden"
                              whileInView="show"
                              variants={fadeIn("left", "spring", 0.3, 1.2)}
                              className="text flex my-4 gap-3"
                            >
                              <FaPlay className="text-[#EC4899] w-16 md:w-5" />
                              Acted as a bridge between backend engineers and
                              product designers, facilitating cross-functional
                              collaboration and ensuring alignment on project
                              goals and requirements. By actively participating
                              in brainstorming sessions, design reviews, and
                              sprint planning meetings, fostered a collaborative
                              work environment focused on delivering
                              high-quality results that met both technical and
                              design standards.
                            </motion.p>
                          </div>
                        </ScrollShadow>
                      )}
                    </div>
                  )}
                  {tab === 1 && (
                    <div className="text p-2 text-start">
                      <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-20%" }}
                        variants={fadeIn("left", "spring", 0.2, 1.3)}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                      >
                        My skills
                      </motion.h2>
                      <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-20%" }}
                        variants={fadeIn("up", "spring", 0.3, 1.3)}
                        className="text hidden lg:block"
                      >
                        Below are the technologies I specialize in and have
                        hands-on experience with across both frontend and
                        backend development
                      </motion.p>
                      <div className="text mt-8">
                        <SkillsCard />
                      </div>
                    </div>
                  )}
                  {tab === 2 && (
                    <div className="text p-2 text-start">
                      <motion.h2
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-20%" }}
                        variants={fadeIn("left", "spring", 0.2, 1.3)}
                        className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                      >
                        Schools
                      </motion.h2>
                      <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-20%" }}
                        variants={fadeIn("up", "spring", 0.3, 1.3)}
                        className="text gap-5"
                      >
                        <span className="text flex my-3 gap-1">
                          <FaPlay className="text-[#EC4899] w-8 md:w-5" />
                          Acquired Full Stack Web Development skills through a
                          program at SQI College of ICT.
                        </span>
                        <span className="text flex my-3 gap-1">
                          <FaPlay className="text-[#EC4899] w-8 md:w-5" />
                          Earned Bachelor of Science in Computer Science from
                          the Federal University of Technology Akure (FUTA)
                        </span>
                      </motion.p>
                    </div>
                  )}
                  {tab === 3 && (
                    <div className="text">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About me
                      </h2>
                      <motion.p
                        initial="hidden"
                        whileInView="show"
                        viewport={{ margin: "-20%" }}
                        variants={fadeIn("right", "spring", 0.1, 1.3)}
                        className="text hidden lg:block"
                      >
                        I'm a passionate full-stack developer with a strong
                        foundation in both frontend and backend technologies. I
                        enjoy building clean, scalable, and user-focused
                        applications
                      </motion.p>
                      <AboutSectionPart />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-gray-900 dark:bg-gray-600 rounded-b-xl"></div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>
<button
          onClick={scrollToNextSection}
          className="absolute bottom-20 z-20 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <a key={"#projects"} href={"#projects"}>
            <ArrowDown size={24} />
          </a>
        </button>
        <div className="absolute bottom-5 left-1/2 transform hidden lg:block -translate-x-1/2 w-[60%] h-2 bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-sm z-10"></div>
      </div>
    </div>
  );
};

export default MacBookProMockup;
