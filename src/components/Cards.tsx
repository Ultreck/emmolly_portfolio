import { Tooltip } from "@heroui/tooltip";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface CardsProps {
  project: Project;
  data?: any[];
}

const Cards = ({ project, data }: CardsProps) => {
  console.log(project.githubUrl, data);

  return (
    <div className="w-[390px] h-[450px] shadow-lg perspective-1000 bg-transparent cursor-pointer group rounded-2xl">
      <div className="text relative duration-500 preserve-3d group-hover:rotate-y-180 w-full h-full">
        <div className="text w-full h-full absolute rounded-2xl overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full rounded-2x"
          />
        </div>
        <div className="w-full dark:bg-gray-800/95 p-10 bg-gray-100 rotate-y-180 backface-hidden absolute h-full rounded-2xl space-y-5 overflow-hidden">
            <span className="text-center absolute bg-red-500 -top-2 flex justify-center items-center -rotate-45 -left-24 h-16 w-60 font-bold text-3xl">
          <Tooltip className="" content="Number of people visited this project" showArrow={true}>
              {data? data?.length : "20"}
          </Tooltip>
            </span>
          <div className="text">
            <span className="text-3xl font-bold">{project.title}</span>
          </div>
          <div className="text flex flex-col space-y-5">
            <div className=" w-full">
              <div className="flex justify-between space-x-3 mb-2">
                <div className="text w-20 h-20">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full rounded-3x"
                  />
                </div>
                <div className="text flex items-center justify-end gap-2 w-40">
                  {project.githubUrl && (
                    <Tooltip content="Project Github URL" showArrow={true}>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 w-12 h-12 flex justify-center items-center bg-gray-700/80 hover:bg-gray-600 text-white rounded-full transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github size={20} />
                      </a>
                    </Tooltip>
                  )}
                  {project.demoUrl && (
                    <Tooltip content="Explore this project" showArrow={true}>
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 w-12 h-12 flex justify-center items-center bg-indigo-600/80 hover:bg-indigo-500 text-white rounded-full transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </Tooltip>
                  )}
                </div>
              </div>
            </div>
            <span className="">{project.description}</span>
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
        </div>
      </div>
    </div>
  );
};

export default Cards;
