import { Tooltip } from "@heroui/tooltip";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  id: string;
  appName: string;
  imageUrl: string;
  title: string;
  year: string;
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
  const foundApp = data?.find((app) => app.appName === project.appName);
  const allIPs = foundApp?.countries?.flatMap((c: { ips: string[] }) => c?.ips);

  const [hoverState, setHoverState] = useState<
    "github" | "demo" | "num" | null
  >(null);

  return (
    <div className="lg:w-[390px] mx-auto h-[450px] shadow-lg perspective-1000 bg-transparent  group rounded-2xl">
      <div className="text relative duration-500 preserve-3d group-hover:rotate-y-180 hover:z-20 w-full h-full">
        <div className="text bg-gray-100 dark:bg-gray-800/95 w-full h-full absolute rounded-2xl overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover rounded-2x"
          />
          <span className="text bg-red-500 absolute h-12 w-20">
            Touch/click
          </span>
        </div>
        <div
          className={`w-full p-10 rotate-y-180 backface-hidden absolute h-full rounded-2xl space-y-5 overflow-hidden transition-colors duration-300
          ${hoverState === "demo" ? "bg-indigo-700 text-white" : ""}
          ${hoverState === "github" ? "bg-gray-800 text-white" : ""}
          ${hoverState === "num" ? "bg-pink-500 text-white" : ""}
          ${!hoverState ? "dark:bg-gray-800/95 bg-gray-100" : ""}
        `}
        >
          <button
            onMouseEnter={() => setHoverState("num")}
            onMouseLeave={() => setHoverState(null)}
            className="text-center absolute bg-pink-500 hover:border hover:border-white -top-2 flex justify-center items-center -rotate-45 -left-24 h-16 w-60 font-bold text-3xl"
          >
            <Tooltip
              className="bg-white w-full px-2 text-black"
              content="Number of people visited this project"
              showArrow={true}
            >
              {allIPs?.length || 0}
            </Tooltip>
          </button>
          <span className="text-3xl absolute bottom-5 right-5 font-bold">
            {project.year}
          </span>
          <div className="text">
            <span className="text-3xl font-bold">{project.title}</span>
          </div>
          <div className="text flex flex-col space-y-5">
            <div className="w-full">
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
                    <Tooltip
                      className="bg-white text-black px-2"
                      content="Project Github URL"
                      showArrow={true}
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 w-12 h-12 flex justify-center items-center bg-gray-700/80 hover:bg-gray-800 hover:border hover:border-pink-500 hover:shadow-lg text-white rounded-full transition-colors"
                        aria-label="View GitHub repository"
                        onMouseEnter={() => setHoverState("github")}
                        onMouseLeave={() => setHoverState(null)}
                      >
                        <Github size={20} />
                      </a>
                    </Tooltip>
                  )}
                  {project.demoUrl && (
                    <Tooltip
                      className="bg-white px-2 text-black"
                      content="Explore this project"
                      showArrow={true}
                    >
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 w-12 h-12 flex justify-center items-center bg-indigo-600/80 hover:bg-indigo-700 hover:border hover:border-pink-500 hover:shadow-lg text-white rounded-full transition-colors"
                        aria-label="View live demo"
                        onMouseEnter={() => setHoverState("demo")}
                        onMouseLeave={() => setHoverState(null)}
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
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300
                    ${hoverState === "demo" ? "bg-indigo-500 text-white" : ""}
                    ${hoverState === "github" ? "bg-gray-700 text-white" : ""}
                    ${hoverState === "num" ? "bg-pink-400 text-white" : ""}
                    ${!hoverState ? "bg-blue-100 dark:bg-blue-900/30 text-pink-600 dark:text-pink-400" : ""}
                  `}
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
