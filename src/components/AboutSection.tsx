import { fadeIn } from "@/utils/variant";
import { ScrollShadow } from "@heroui/scroll-shadow";
import { motion } from "framer-motion";
const AboutSectionPart = () => {
  const data = [
    { title: "Name", value: "Emmanuel Oluwatayese A." },
    { title: "Phone number", value: "+2347064778921" },
    { title: "Email", value: "adetutuemmanueloluwatayese@gmail.com" },
    { title: "Location", value: "Lagos" },
    { title: "Language", value: "English" },
    { title: "Nationality", value: "Nigerian" },
    { title: "Experience", value: "5+ years" },
    { title: "Freelance", value: "Available" },
  ];
  return (
    <section
      id="resume"
      className="py-10 min-h-screen mx-auto relative lg:w-[85%]"
    >
      <ScrollShadow  size={0} className="w-full no-scrollbar h-[500px] pb-56 lg:pb-0">
        <div className="w-3xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-center mb-16">
          {data.map((item, index) => (
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ margin: "-20%" }}
              variants={fadeIn(
                index % 2 === 0 ? "right" : "left",
                "spring",
                0.3,
                1.3
              )}
              key={index}
              className="text-gray-600 shadow py-2 px-3 rounded-lg text-start border dark:text-gray-400"
            >
              <h1 className="text-lg font-semibold font-mono">{item?.title}</h1>
              <span className="dark:text-white">{item?.value}</span>
            </motion.p>
          ))}
        </div>
      </ScrollShadow>
    </section>
  );
};

export default AboutSectionPart;
