import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";
import { FaCircleUser } from "react-icons/fa6";
import RatingModal from "./RatingModal";

interface ReviewsProps {
  data: { reviews: any[] }[];
}
const SLIDE_WIDTH = 1000;

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  const controls = useAnimation();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isOpened, setIsOpened] = useState(false)

  useEffect(() => {
    if (!data?.[0]?.reviews?.length || data[0].reviews.length <= 3) return;

    const totalWidth = sliderRef.current
      ? sliderRef.current.scrollWidth / 2
      : SLIDE_WIDTH;

    const loopAnimation = async () => {
      await controls.start({
        x: -totalWidth,
        transition: {
          duration: data[0].reviews.length * 4,
          ease: "linear",
        },
      });
      controls.set({ x: 0 });
      loopAnimation();
    };

    loopAnimation();
  }, [controls, data]);

  // const handleMouseEnter = () => {
  //   controls.stop();
  // };

  // const handleMouseLeave = () => {
  //   if (!data?.[0]?.reviews?.length || data[0].reviews.length <= 3) return;

  //   const totalWidth = sliderRef.current
  //     ? sliderRef.current.scrollWidth / 2
  //     : SLIDE_WIDTH;

  //   controls
  //     .start({
  //       x: -totalWidth,
  //       transition: {
  //         duration: data[0].reviews.length * 4,
  //         ease: "linear",
  //       },
  //     })
  //     .then(() => {
  //       controls.set({ x: 0 });
  //       handleMouseLeave();
  //     });
  // };
  return (
    <div className="mx-auto w-[85%] bg-gray-50 dark:bg-gray-900">
      <div className="text flex items-center justify-between">
        <h1 className="text font-bold text-lg">Reviews</h1>
        <RatingModal setIsOpened={setIsOpened} />
      </div>
      <div className="relative w-full overflow-x-hidden">
        <motion.div
          className="flex gap-5 w-full py-10 justify-center"
          ref={sliderRef}
          animate={controls}
          // onMouseEnter={handleMouseEnter}
          // onMouseLeave={handleMouseLeave}
        >
          {[...(data[0]?.reviews || []), ...(data[0]?.reviews || [])]?.map(
            (item, index) => (
              <div
                key={index}
                className="w-[300px] relative border dark:border-gray-900 border-gray-100 min-w-[300px] text-xs  bg-gray-100 dark:bg-gray-700 shadow-md py-4 rounded-tr-3xl rounded-bl-3xl p-5"
              >
                <div
                  className="text relative before:content-[' '] before:w-7 before:h-7 dark:before:bg-gray-700 before:bg-gray-100 before:absolute before:-translate-x-[25px] before:rotate-[-32deg]
                             before:border-r-[11px] dark:before:border-gray-900 before:border-white
                            before:rounded-tr-3xl before:translate-y-[14px] after:content-[' '] after:w-7 after:h-7 after:bg-gray-100 dark:after:bg-gray-700 after:absolute after:translate-x-[47px] after:rotate-[37deg]  after:border-l-[11px] after:border-white dark:after:border-gray-900 after:rounded-tl-3xl  after:translate-y-[13px] w-14 h-14 rounded-full border-4 -mt-10 border-white dark:border-gray-900 mx-auto flex"
                >
                  {item?.profile?.url ? (
                    <img
                      src={item?.profile?.url}
                      alt=""
                      className="w-full h-full rounded-full z-50 "
                    />
                  ) : (
                    <FaCircleUser className="w-full h-full border-8 text-gray-900 dark:text-white border-white dark:border-gray-900 rounded-full" />
                  )}
                </div>
                <div className="text flex items-center gap-2">
                  <h1 className="mt-1 text-4xl font-semibold">
                    {item?.star?.toFixed(1)}
                  </h1>
                  <div className="text">
                    <h1 className="text-base mb-3 mt-4 font-semibold dark:text-gray-50">
                      {item?.name}
                    </h1>
                    <div className="text-center mx-auto">
                      <Stack spacing={1}>
                        <Rating
                          sx={{
                            "& .MuiRating-icon:last-child": {
                              marginRight: 0,
                            },
                            "& .MuiRating-iconEmpty": {
                              color: "#9ca3af",
                            },
                          }}
                          name="half-rating-read"
                          defaultValue={item?.star}
                          precision={0.5}
                          readOnly
                        />
                      </Stack>
                    </div>
                  </div>
                </div>
                <h1 className="text mt-2 font-semibold text-md">
                  {item?.message}
                </h1>
              </div>
            )
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
