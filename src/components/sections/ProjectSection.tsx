import { projects } from "../../constants";
import { ArrowDown, ExternalLink, Github } from "lucide-react";
import type { projectTag } from "../../types";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variant";
import { Tooltip } from "@heroui/tooltip";
import Cards from "../Cards";
import { useState } from "react";
import {Swiper as SwiperClass} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation } from "swiper/modules";


interface ProjectsSectionProps {
  data: any[]; // Replace 'any' with a more specific type if available
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ data }) => {
const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [swiper, setSwiper] = useState<SwiperClass | null>(null)
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("contact");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSlideChanges = () => {

  };
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ margin: "-20%" }}
      variants={fadeIn("right", "spring", 0.2, 1.3)}
      id="projects"
      className="mx-auto w-[85%] py-20 bg-white dark:bg-gray-900"
    >
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-10%" }}
            variants={fadeIn("left", "spring", 0.2, 1.3)}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            My Projects
          </motion.h2>
          <div className="w-20 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto mb-6"></div>
        </div>
        {/* <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project: projectTag) => (
            <div className="mb-5 w-full mx-auto" key={project.id}>
              <Cards data={data} project={project} />
            </div>
          ))}
        </div> */}

        <div className="">
          <Swiper 
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={'auto'}
          onSwiper={setSwiper}
          onSlideChange={handleSlideChanges}
          className="!overflow-hidden"
          >

          {projects.map((project: projectTag) => (
            <SwiperSlide
            key={project.id}
            className="!w-auto"
            >
            <div className="mb-5 w-full mx-auto" key={project.id}>
              <Cards data={data} project={project} />
            </div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>

        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: projectTag, index) => (
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ margin: "-10%" }}
              variants={fadeIn(
                index % 2 === 0 ? "left" : "right",
                "spring",
                0.1,
                0.5
              )}
              key={project.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent flex items-end transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="p-6 w-full">
                    <div className="flex justify-end space-x-3 mb-2">
                      {project.githubUrl && (
                        <Tooltip content="Project Github URL" showArrow={true}>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-800/80 hover:bg-gray-700 text-white rounded-full transition-colors"
                            aria-label="View GitHub repository"
                          >
                            <Github size={20} />
                          </a>
                        </Tooltip>
                      )}
                      {project.demoUrl && (
                        <Tooltip
                          content="Explore this project"
                          showArrow={true}
                        >
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-indigo-600/80 hover:bg-indigo-500 text-white rounded-full transition-colors"
                            aria-label="View live demo"
                          >
                            <ExternalLink size={20} />
                          </a>
                        </Tooltip>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-pink-600 dark:text-pink-400 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-0 z-20 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <a key={"#contact"} href={"#contact"}>
            <ArrowDown size={24} />
          </a>
        </button>
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
