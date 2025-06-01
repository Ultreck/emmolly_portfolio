import reactjs from "../assets/icons/react.svg";
import nextjs from "../assets/icons/nestjs.svg";
import nodejs from "../assets/icons/nodedotjs.svg";
import javascript from "../assets/icons/javascript.svg";
import typescript from "../assets/icons/typescript.svg";
import html5 from "../assets/icons/html5.svg";
import css from "../assets/icons/css.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import express from "../assets/icons/express.svg";
import mongodb from "../assets/icons/mongodb.svg";
import postgresql from "../assets/icons/postgresql.svg";
import github from "../assets/icons/github.svg";
import angular from "../assets/icons/angular.svg";
import bootstrap from "../assets/icons/bootstrap.svg";
import firebase from "../assets/icons/firebase.svg";
import vuedotjs from "../assets/icons/vuedotjs.svg";
import laravel from "../assets/icons/laravel.svg";
import mysql from "../assets/icons/mysql.svg";
import nestjs from "../assets/icons/nestjs.svg";
import php from "../assets/icons/php.svg";
import { Card } from "@heroui/card";
import { Tooltip } from "@heroui/tooltip";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { motion } from "framer-motion";
const SkillsCard = () => {
  const stacks = [
    {
     delay: 0.10, href: "https://www.javascript.com/",
      name: "JavaScript",
      icon: javascript,
    },
    {
     delay: 0.15, href: "https://www.typescriptlang.org/",
      name: "TypeScript",
      icon: typescript,
    },
    {delay: 0.20, href: "https://react.dev/learn", name: "React.js", icon: reactjs },
    {delay: 0.12, href: "https://nextjs.org/docs", name: "Next.js", icon: nextjs },
    {delay: 0.10, href: "https://nodejs.org/en", name: "Node.js", icon: nodejs },
    {delay: 0.25, href: "https://docs.nestjs.com/", name: "Nest.js", icon: nestjs },
    {
     delay: 0.18, href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Viewport_meta_element",
      name: "HTML5",
      icon: html5,
    },
    {
     delay: 0.30, href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      name: "CSS3",
      icon: css,
    },
    {delay: 0.10, href: "https://vuejs.org/", name: "Vue.js", icon: vuedotjs },
    {delay: 0.20, href: "https://angular.dev/", name: "Angular.js", icon: angular },
    {delay: 0.35, href: "https://www.mongodb.com/", name: "MongoDB", icon: mongodb },
    {delay: 0.15, href: "https://expressjs.com/", name: "Express", icon: express },
    {delay: 0.19, href: "https://www.mysql.com/", name: "MYSQL", icon: mysql },
    {delay: 0.25, href: "https://tailwindcss.com/", name: "Tailwind", icon: tailwindcss },
    {delay: 0.32, href: "https://laravel.com/", name: "Laravel", icon: laravel },
    {delay: 0.10, href: "https://www.php.net/", name: "PHP", icon: php },
    {
     delay: 0.15, href: "https://www.postgresql.org/",
      name: "PostgreSQL",
      icon: postgresql,
    },
    {delay: 0.18, href: "https://github.com/", name: "Github.js", icon: github },
    {delay: 0.28, href: "https://firebase.google.com/", name: "Firebase", icon: firebase },
    {delay: 0.31, href: "https://getbootstrap.com/", name: "Bootstrap", icon: bootstrap },
  ];
  return (
    <ScrollShadow  size={0} className="w-full no-scrollbar h-[500px] pb-5 lg:pb-0">
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-6 gap-5 p-5">
        {stacks.map((stack, index) => (
          <Tooltip
            key={index}
            className="dark:bg-white bg-black text-white p-3 dark:text-black"
            content={` ${stack?.name}`}
            showArrow={true}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: stack?.delay || 0.1,
                type: "spring",
                stiffness: 100,
              }}
              className="text"
            >
              <Card className="p-3 dark:border shadow hover:shadow-lg hover:scale-110">
                <a href={stack?.href} className="">
                  <img
                    src={stack?.icon}
                    alt=""
                    className="text rounded-tr-xl rounded-bl-xl text-white dark:bg-white"
                  />
                  <p className="md:hidden text-center ">{stack?.name}</p>
                </a>
              </Card>
            </motion.div>
          </Tooltip>
        ))}
      </div>
    </ScrollShadow>
  );
};

export default SkillsCard;
