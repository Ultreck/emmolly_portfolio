import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { dummyReviews } from "@/constants";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
const Reviews = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Start animation
    controls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    });
  }, [controls]);

  const handleMouseEnter = () => {
    controls.stop(); // Pause animation
  };

  const handleMouseLeave = () => {
    // Resume animation
    controls.start({
      x: "-50%",
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    });
  };
  return (
    <div className="mx-auto w-[85%] bg-gray-50 dark:bg-gray-900">
      <div className="relative w-full overflow-x-hidden">
        <motion.div
          className="flex gap-5 w-full py-10"
          initial={{ x: 50 }}
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {dummyReviews?.map((item, index) => (
            <div
              key={index}
              className="w-[300px] relative border dark:border-gray-900 border-gray-100 min-w-[300px] text-xs  bg-gray-100 dark:bg-gray-700 shadow-md py-4 rounded"
            >
              <div
                className="text relative before:content-[' '] before:w-7 before:h-7 dark:before:bg-gray-700 before:bg-gray-100 before:absolute before:-translate-x-[25px] before:rotate-[-32deg]
                             before:border-r-[11px] dark:before:border-gray-900 before:border-white
                            before:rounded-tr-3xl before:translate-y-[14px] after:content-[' '] after:w-7 after:h-7 after:bg-gray-100 dark:after:bg-gray-700 after:absolute after:translate-x-[47px] after:rotate-[37deg]  after:border-l-[11px] after:border-white dark:after:border-gray-900 after:rounded-tl-3xl  after:translate-y-[13px] w-14 h-14 rounded-full border-4 -mt-10 border-white dark:border-gray-900 mx-auto flex"
              >
                <img
                  src={`/assets/testing.jpg`}
                  alt=""
                  className="w-full h-full rounded-full z-50 "
                />
              </div>
              <h1 className="text-xs mb-3 mt-4 font-semibold dark:text-gray-50">
                {item.name}
              </h1>
              <div className="text-center mx-auto">
                <Stack spacing={1}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                </Stack>
              </div>
              <h1 className="mt-1 text-sm">Rating: {item.rating}</h1>
              <h1 className="text-blue-600 mt-2 font-semibold text-md"></h1>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
