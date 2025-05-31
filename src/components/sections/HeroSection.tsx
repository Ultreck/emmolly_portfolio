import React, { useEffect, useState } from "react";
import { ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Typed from "typed.js";
// import PhoneTyping from "../PhoneTyping";
import ProfileWithAnimatedRing from "../ProfileWithAnimatedRing";
import { fadeIn } from "../../utils/variant";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Tooltip } from "@heroui/tooltip";
import { NumberCounter } from "../NumberCounter";

const allMessages = [
  { id: 1, text: "Hey! How are you?", sender: "other" },
  { id: 2, text: "I'm good! Working on a cool project.", sender: "me" },
  { id: 3, text: "Wow, what's it about?", sender: "other" },
  { id: 4, text: "A portfolio with real-time chat simulation.", sender: "me" },
  { id: 5, text: "That sounds amazing!", sender: "other" },
];
const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rounded, setRounded] = useState(0);
  const [index, setIndex] = useState(0);
  const el = React.useRef<HTMLSpanElement | null>(null);
  const typed = React.useRef<Typed | null>(null);
  console.log(rounded);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (index < allMessages.length) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 3000); // Change delay to control speed
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    const options = {
      strings: [allMessages.map((msg) => msg.text).join(" ")],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    };
    if (!el.current) return;
    typed.current = new Typed(el.current as Element, options);

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  const data = [
    "Full Stack Developer",
    "Software Engineer",
    "Web Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [data.length]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ margin: "-20%" }}
        variants={fadeIn("down", "spring", 0.2, 1.2)}
        id="home"
        className="min-h-screen mx-auto w-full lg:w-[85%] relative overflow-hidden bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950 grid grid-cols-1 md:grid-cols-2 gri"
      >
        <div
          className={`container md:mt-24 mt-8 mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center text-center">
            <motion.h1
              initial="hidden"
              whileInView="show"
              viewport={{ margin: "-20%" }}
              variants={fadeIn("right", "spring", 0.3, 1.3)}
              className="text-4xl sm:text-5xl font-extrabold text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 mb-6"
            >
              <motion.span
                initial="hidden"
                whileInView="show"
                viewport={{ margin: "-20%" }}
                variants={fadeIn("left", "spring", 0.3, 1.3)}
                className="block font-serif dark:text-white text-black"
              >
                Hello, I'm
              </motion.span>
              <span className="block mt-2">
                {/* <span ref={el}></span> */}
                <span>Emmanuel Oluwatayese</span>
              </span>
            </motion.h1>

            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300 rounded-full mb-6"></div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ margin: "-20%" }}
              variants={fadeIn("up", "spring", 0.2, 1.2)}
              className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl lg:my-5 mb-5 lg:mb-0 font-semibold md:text-start px-4"
            >
              <span className="mr-2">A</span>
              <span className="inline-block max-w-full whitespace-nowrap">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentIndex}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-[#EC4899] bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500 dark:from-indigo-400 dark:to-blue-300"
                  >
                    {data[currentIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="ml-2 text-sm lg:text-xl text-start">
                specializing in crafting seamless user interfaces and building
                scalable backend systems. I transform ideas into complete,
                high-performing web applications that deliver powerful digital
                experiences.
              </span>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ margin: "-20%" }}
            variants={fadeIn("right", "spring", 1.0, 1.3)}
            className="text xl:mt-8 flex items-center lg:gap-5 justify-center xl:gap-8 gap-2"
          >
            <Tooltip content="Download my cv" showArrow={true}>
              <button className="flex dark:border-[#EC4899] border-blue-500 dark:text-[#EC4899] text-blue-500 shadow-inner shadow-indigo-500 dark:shadow-red-400 hover:border-dashed hover:border-2 text-xs lg:text-base items-center lg:gap-2 gap-1 border rounded-full lg:px-5 sm:px-2 px-1 py-2">
                Download cv{" "}
                <MdOutlineFileDownload className="transition-colors duration-300 animate-bounce mt-1 text-[#EC4899] dark:text-blue-500" />
              </button>
            </Tooltip>
            <Tooltip content="LinkedIn account" showArrow={true}>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.3,
                  type: "spring",
                  stiffness: 200,
                }}
                href="https://www.linkedin.com/in/oluwatayese-emmanuel-a-39254b218?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bq64WZR48RtG2XFs5lYMF6w%3D%3D"
                className="text border hover:border-dashed hover:border-2 transition-transform border-blue-500 dark:border-[#EC4899] p-2 rounded-full shadow-inner shadow-indigo-500 dark:shadow-red-400"
              >
                <FaLinkedin size={22} className="text-blue-500" />
              </motion.a>
            </Tooltip>
            <Tooltip content="Github account" showArrow={true}>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.4,
                  type: "spring",
                  stiffness: 200,
                }}
                href="https://github.com/Ultreck"
                className="text border hover:border-dashed hover:border-2 border-blue-500 dark:border-[#EC4899] p-2 rounded-full shadow-inner shadow-indigo-500 dark:shadow-red-400"
              >
                <FaGithub size={22} className="text-red-500 border-0 " />
              </motion.a>
            </Tooltip>
            <Tooltip content="WhatsApp account" showArrow={true}>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.6,
                  type: "spring",
                  stiffness: 200,
                }}
                href="https://wa.me/2347064778921?text=Hi%20Emmanuel%2C%20I%20got%20your%20contact%20from%20your%20portfolio!
"
                className="text border hover:border-dashed hover:border-2 border-blue-500 dark:border-[#EC4899] p-2 rounded-full shadow-inner shadow-indigo-500 dark:shadow-red-400"
              >
                <FaWhatsapp size={22} className="text-green-500 border-0 " />
              </motion.a>
            </Tooltip>
            <Tooltip content="Youtube account" showArrow={true}>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.5,
                  type: "spring",
                  stiffness: 200,
                }}
                href="https://www.youtube.com/channel/UCO1CNgEARCnuodUuy9JVaAw"
                className="text border hover:border-dashed hover:border-2 border-blue-500 dark:border-[#EC4899] p-2 rounded-full shadow-inner shadow-indigo-500 dark:shadow-red-400"
              >
                <CiYoutube size={22} className="text-red-500 border-0" />
              </motion.a>
            </Tooltip>
            <Tooltip content="X account" showArrow={true}>
              <motion.a
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 1.7,
                  type: "spring",
                  stiffness: 200,
                }}
                href="https://x.com/AdetutuEmmanue6?t=2Dp_Fjr6izYH3tibEdd7bA&s=08"
                className="text border hover:border-dashed hover:border-2 border-blue-500 dark:border-[#EC4899] p-2 rounded-full shadow-inner shadow-indigo-500 dark:shadow-red-400"
              >
                <FaTwitter size={22} className="text-blue-500 border-0 " />
              </motion.a>
            </Tooltip>
          </motion.div>

          <section className="text xl:mt-16 mt-5 px-2 lg:px-0 flex flex-wrap justify-between gap-2 items-center ">
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.5, 1.3)}
              className="text flex items-center gap-1"
            >
              <h1 className="md:text-6xl text-4xl font-mono">
                <NumberCounter
                  setRounded={setRounded}
                  from={0}
                  to={5}
                  duration={3}
                />
              </h1>
              <p className="lg:text-sm text-xs grid">
                <span className="text">Years</span>
                <span className="text">of experience</span>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.6, 1.3)}
              className="text flex items-center gap-1"
            >
              <h1 className="md:text-6xl text-4xl font-mono">
                <NumberCounter
                  setRounded={setRounded}
                  from={0}
                  to={10}
                  duration={3}
                />
              </h1>
              <p className="lg:text-sm text-xs grid">
                <span className="text">Completed</span>
                <span className="text">projects</span>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.7, 1.3)}
              className="text flex items-center gap-1"
            >
              <h1 className="md:text-6xl text-4xl font-mono">
                <NumberCounter
                  setRounded={setRounded}
                  from={0}
                  to={8}
                  duration={3}
                />
              </h1>
              <p className="lg:text-sm text-xs grid">
                <span className="text">Technologies</span>
                <span className="text">mastered</span>
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              variants={fadeIn("up", "spring", 0.8, 1.3)}
              className="text flex items-center gap-1"
            >
              <h1 className="md:text-6xl text-4xl font-mono">
                {rounded >= 2100 ? (
                  "2k+"
                ) : (
                  <NumberCounter
                    setRounded={setRounded}
                    from={0}
                    to={2500}
                    duration={5}
                  />
                )}
              </h1>
              <p className="lg:text-sm text-xs grid">
                <span className="text">Codes</span>
                <span className="text">commits</span>
              </p>
            </motion.div>
          </section>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-indigo-300 dark:bg-indigo-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-blue-300 dark:bg-blue-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-300 dark:bg-purple-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Scroll down indicator */}
        <button
          onClick={scrollToNextSection}
          className="absolute bottom-8 z-20 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300 animate-bounce"
          aria-label="Scroll down"
        >
          <a key={"#about"} href={"#about"}>
            <ArrowDown size={24} />
          </a>
        </button>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ margin: "-20%" }}
          variants={fadeIn("left", "spring", 0.4, 1.5)}
          className="mt-28 hidden md:block p-10 h-[80vh] relative"
        >
          <ProfileWithAnimatedRing />
        </motion.div>
      </motion.section>
    </>
  );
};

export default HeroSection;
