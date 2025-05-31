import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { ScrollShadow } from "@heroui/react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";

const MacBookProMockup: React.FC<React.PropsWithChildren<{}>> = () => {
  const [tab, setTab] = useState(0);
  const [expTab, setExpTab] = useState(0);
  return (
    <div className="flex justify-center overflow-hidden w-full items-center min-h-screen bg-transparent">
      <div className="relative w-full h-[970px]">
        <div className="absolute top-0 w-full h-[75%] bg-gray-800 rounded-t-[40px] rounded-b-[40px] lg:rounded-b-none md:border-[12px] border-[6px] border-gray-900 dark:border-gray-700 md:border-b-0 shadow-2xl">
          {/* Screen */}
          <div className="absolute inset-0 m-2 bg-gray-900 rounded-b-[40px] rounded-t-[28px] overflow-hidden">
            {/* Screen Content - Replace with your content */}
            <div className="h-full dark:bg-gradient-to-br rounded-b-[40px] bg-gradient-to-r from-indigo-50 to-blue-50 dark:to-[#070a23] dark:from-[#36192d]">
              <div className="text-center gap-5 md:p-10 p-3  grid grid-cols-1 md:grid-cols-3">
                <div className="text">
                  <motion.h2
                    initial="hidden"
                    whileInView="show"
                    variants={fadeIn("right", "spring", 0.3, 1.2)}
                    className="text-3xl sm:text-4xl font-semibold font-mono text-gray-900 dark:text-white mb-3 mt-7 md:mt-10"
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
                    variants={fadeIn("up@", "spring", 0.6, 1.2)}
                    className="text md:mt-10 mt-5 gap-2 grid grid-cols-3 md:grid-cols-1 md:gap-10"
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
                      className={`text ${tab === 0 ? "bg-blue-600 text-white" : "border border-gray-400"}   py-3 rounded-lg`}
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
                      className={`text ${tab === 1 ? "bg-blue-600 text-white" : "border border-gray-400"} py-3 rounded-lg`}
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
                      className={`text ${tab === 2 ? "bg-blue-600 text-white" : "border border-gray-400"} py-3 rounded-lg`}
                    >
                      About Me
                    </motion.button>
                  </motion.div>
                </div>
                <div className="text lg:px-5 col-span-2">
                  {tab === 0 && (
                    <div className="text mx-auto">
                      <h2 className="text-3xl hidden lg:block sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My experience
                      </h2>
                      <div className="text mx-auto border-b-2 border-gray-400 justify-between md:mt-10 mt-5 flex items-center">
                        <button
                          onClick={() => setExpTab(0)}
                          className={`text ${expTab === 0 ? "border-blue-600 text-blue-400" : "border-gray-400"} border-b-2 lg:px-16  px-4 -mb-0.5 py-3`}
                        >
                          Clan
                        </button>
                        <button
                          onClick={() => setExpTab(1)}
                          className={`text ${expTab === 1 ? "border-blue-600 text-blue-400" : "border-gray-400"} border-b-2 lg:px-16  px-4 -mb-0.5 py-3`}
                        >
                          LonH
                        </button>
                        <button
                          onClick={() => setExpTab(2)}
                          className={`text ${expTab === 2 ? "border-blue-600 text-blue-400" : "border-gray-400"} border-b-2 lg:px-16  px-4 -mb-0.5 py-3`}
                        >
                          Medillery
                        </button>
                        <button
                          onClick={() => setExpTab(3)}
                          className={`text ${expTab === 3 ? "border-blue-600 text-blue-400" : "border-gray-400"} border-b-2 lg:px-16  px-4 -mb-0.5 py-3`}
                        >
                          Scict
                        </button>
                      </div>
                      {expTab === 3 && (
                        <ScrollShadow className="w-full h-[450px] rounded-b-[40px] xl:h-auto pb-24">
                          <div className={`text-start mt-5 font-sans rounded-b-[40px]`}>
                            <h1
                              data-aos="fade-left"
                              data-aos-duration="500"
                              className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600"
                            >
                              Backend Engineer{" "}
                              <span className="text-[#EC4899]">@ Scict</span>
                            </h1>
                            <p
                              data-aos="fade-left"
                              data-aos-duration="1000"
                              className="text font-semibold mt-2"
                            >
                              November 2019 - Febrary 2022
                            </p>

                            <p className="text flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />I
                              was responsible for architecting scalable backend
                              solutions using Node.js, ensuring robustness and
                              flexibility to accommodate growing user demands.
                              By implementing microservices architecture and
                              employing best practices, I facilitated seamless
                              scalability, allowing our platform to handle
                              increased traffic efficiently.
                            </p>
                            <p className="text flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />
                              Leveraging the asynchronous nature of Node.js, I
                              optimized critical backend processes to enhance
                              overall system performance. By identifying and
                              rectifying bottlenecks, I successfully reduced
                              response times, leading to improved user
                              experience and higher customer satisfaction.
                            </p>
                            <p className="text flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />
                              My expertise in Node.js enabled me to develop
                              robust APIs that served as the backbone of our
                              applications. I collaborated closely with frontend
                              teams to design API endpoints that aligned with
                              frontend requirements, ensuring smooth
                              communication between the client and server
                              components.
                            </p>
                            <p className="text flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-12 md:w-5" />I
                              proficiently utilized Node.js frameworks like
                              Express.js to interact with databases and manage
                              data effectively. Through efficient database
                              querying and schema design, I enhanced data
                              retrieval speed and maintained data integrity,
                              contributing to a stable and reliable backend
                              infrastructure.
                            </p>
                          </div>
                        </ScrollShadow>
                      )}
                      {expTab === 2 && (
                        <ScrollShadow className="w-full h-[450px] xl:h-auto pb-24">
                          <div className={`text-start mt-8 font-sans`}>
                            <h1 className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600">
                              Frontend Engineer{" "}
                              <span className="text-[#EC4899]">
                                @ Medillery
                              </span>
                            </h1>
                            <p className="text font-semibold mt-2">
                              June 2022 - May 2023
                            </p>

                            <p className="text  flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-8 md:w-3" />{" "}
                              Spearheaded the development of intuitive and
                              visually appealing frontend interfaces using
                              JavaScript frameworks like React.js and AngularJS,
                              ensuring optimal user experience across various
                              devices and screen sizes
                            </p>
                            <p className="text flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-8 md:w-3" />
                              Optimized frontend performance through efficient
                              coding practices and rigorous testing, resulting
                              in improved page load times and rendering speeds
                              across different browsers and platforms.
                            </p>
                            <p className="text flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-8 md:w-3" />
                              Integrated with backend APIs to dynamically fetch
                              and visualize data, leveraging component-based
                              architectures and reusable UI components to
                              promote code maintainability and scalability in
                              collaboration with backend engineers.
                            </p>
                          </div>
                        </ScrollShadow>
                      )}
                      {expTab === 1 && (
                        <ScrollShadow className="w-full h-[450px] xl:h-auto pb-24">
                          <div
                            className={`text-start mt-8 font-sans overflow-y-auto`}
                          >
                            <h1 className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600">
                              Frontend Engineer{" "}
                              <span className="text-[#EC4899]">
                                @ Lights on Heights
                              </span>
                            </h1>
                            <p className="text font-semibold mt-2">
                              August 2023 - Present
                            </p>
                            <p className="text flex my-4 gap-3">
                              <FaPlay className="text-[#EC4899] w-14 md:w-5" />I
                              Collaborated closely with product designers to
                              translate design mockups and wireframes into
                              interactive and visually appealing UI components
                              using React.js. By providing technical insights
                              and feedback during the design phase, contributed
                              to the creation of user-centric solutions that
                              aligned with both design aesthetics and frontend
                              development best practices.
                            </p>
                            <p className="text flex my-4 gap-3">
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
                            </p>
                            <p className="text flex my-4 gap-3">
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
                            </p>
                          </div>
                        </ScrollShadow>
                      )}
                      {expTab === 0 && (
                        <ScrollShadow className="w-full h-[450px] xl:h-auto pb-24">
                          <div className={`text-start mt-8 font-sans`}>
                            <h1
                              data-aos="fade-left"
                              data-aos-duration="500"
                              className="md:text-xl mt-7 md:mt-0 font-bold text-blue-600"
                            >
                              Fullstack Engineer{" "}
                              <span className="text-[#EC4899]">
                                @ Clan africa
                              </span>
                            </h1>
                            <p
                              data-aos="fade-left"
                              data-aos-duration="1000"
                              className="text font-semibold mt-2"
                            >
                              June 2024 - May 2025
                            </p>
                            <p
                              data-aos="fade-left"
                              data-aos-duration="1200"
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
                            </p>
                            <p
                              data-aos="fade-left"
                              data-aos-duration="1500"
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
                            </p>
                            <p
                              data-aos="fade-left"
                              data-aos-duration="2000"
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
                            </p>
                          </div>
                        </ScrollShadow>
                      )}
                    </div>
                  )}
                  {tab === 1 && (
                    <div className="text">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My skills
                      </h2>
                    </div>
                  )}
                  {tab === 2 && (
                    <div className="text">
                      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        About me
                      </h2>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Camera Notch */}
            <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-28 h-4 bg-gray-900 dark:bg-gray-600 rounded-b-xl"></div>

            {/* Screen Reflection Effect */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
          </div>
        </div>

        {/* HINGE */}
        <div className="absolute top-[73%] left-1/2 transform hidden lg:block -translate-x-1/2 w-[60%] h-2 bg-gradient-to-b from-gray-900 to-gray-800 rounded-t-sm z-10"></div>
      </div>
    </div>
  );
};

export default MacBookProMockup;
