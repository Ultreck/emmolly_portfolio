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

const SkillsCard = () => {
  const stacks = [
    {
      href: "https://www.javascript.com/",
      name: "JavaScript",
      icon: javascript,
    },
    {
      href: "https://www.typescriptlang.org/",
      name: "TypeScript",
      icon: typescript,
    },
    { href: "https://react.dev/learn", name: "React.js", icon: reactjs },
    { href: "https://nextjs.org/docs", name: "Next.js", icon: nextjs },
    { href: "https://nodejs.org/en", name: "Node.js", icon: nodejs },
    { href: "https://docs.nestjs.com/", name: "Nest.js", icon: nestjs },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Viewport_meta_element",
      name: "HTML5",
      icon: html5,
    },
    {
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      name: "CSS3",
      icon: css,
    },
    { href: "https://vuejs.org/", name: "Vue.js", icon: vuedotjs },
    { href: "https://angular.dev/", name: "Angular.js", icon: angular },
    { href: "https://www.mongodb.com/", name: "MongoDB", icon: mongodb },
    { href: "https://expressjs.com/", name: "Express", icon: express },
    { href: "https://www.mysql.com/", name: "MYSQL", icon: mysql },
    { href: "https://tailwindcss.com/", name: "Tailwind", icon: tailwindcss },
    { href: "https://laravel.com/", name: "Laravel", icon: laravel },
    { href: "https://www.php.net/", name: "PHP", icon: php },
    {
      href: "https://www.postgresql.org/",
      name: "PostgreSQL",
      icon: postgresql,
    },
    { href: "https://github.com/", name: "Github.js", icon: github },
    { href: "https://firebase.google.com/", name: "Firebase", icon: firebase },
    { href: "https://getbootstrap.com/", name: "Bootstrap", icon: bootstrap },
  ];
  return (
     <ScrollShadow className="w-full h-[500px] pb-16 lg:pb-0">
    <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 p-5">
      {stacks.map((stack, index) => (
          <Tooltip
          key={index}
          className="dark:bg-white bg-black text-white p-3 dark:text-black"
          content={` ${stack?.name}`}
          showArrow={true}
          >
          <Card className="p-3 dark:border shadow hover:shadow-lg hover:scale-110">
            <a href={stack?.href}  className="">
              <img
                src={stack?.icon}
                alt=""
                className="text rounded-tr-lg rounded-bl-lg text-white dark:bg-white"
                />
              {/* <p className=" ">{stack?.name}</p> */}
            </a>
          </Card>
        </Tooltip>
      ))}
    </div>
      </ScrollShadow>
  );
};

export default SkillsCard;
