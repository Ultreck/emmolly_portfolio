import { motion, useAnimation } from 'framer-motion';
import { Card } from '@heroui/react';
import { useEffect } from 'react';
import { dummyReviews } from '@/constants';
import Stack from '@mui/material/Stack';
import Rating from '@mui/material/Rating';
const Reviews = () => {
      const controls = useAnimation();
    
      useEffect(() => {
        // Start animation
        controls.start({
          x: '-10%',
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 5,
            ease: 'linear',
          },
        });
      }, [controls]);
    
      const handleMouseEnter = () => {
        controls.stop(); // Pause animation
      };
    
      const handleMouseLeave = () => {
        // Resume animation
        controls.start({
          x: '-10%',
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: 5,
            ease: 'linear',
          },
        });
      };
  return (
     <div className=" bottom-0 left-0 w-[85%] mx-auto bg-default-50 border-t dark:border-default-100 border-default-200 shadow-lg py-4 overflow-hidden ml-24">
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-8"
              initial={{ x: 50 }}
              animate={controls}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {dummyReviews?.map((item, index) => (
                <Card key={index} className="my-1 border border-default-100">
                   <div className="text-center text-xs  bg-gray-100 shadow-md  px-5 py-4 rounded grid justify-center">
                            <div className="text relative before:content-[' '] before:w-7 before:h-7 before:bg-gray-100 before:absolute before:-translate-x-[31px] before:rotate-[-35deg]
                             before:border-r-8 before:border-white
                            before:rounded-tr-3xl before:translate-y-1.5 after:content-[' '] after:w-7 after:h-7 after:bg-gray-100 after:absolute after:translate-x-[36px] after:rotate-[35deg]  after:border-l-8 after:border-white after:rounded-tl-3xl  after:translate-y-1.5 w-12 h-12 rounded-full border-8 -mt-9 border-white mx-auto flex">
                              <img src={`/10617714.ico`} alt="" className="text z-50 w-full h-full rounded-full" />
                            </div>
                            <h1 className="text-xs mb-3 mt-4 font-semibold text-slate-700">{item.name}</h1>
    
                              <div className="text-center mx-auto ">
                                  <Stack spacing={1} className=''>
                                    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly className='' />
                                 </Stack>
                              </div>
                            <h1 className="text mt-.5">Rating: {item.rating}</h1>
                            <h1 className=" text-blue-600 mt-2 font-semibold text-md">
                              {/* <TimestampDisplay className="" timestamp={val.createdAt}/> */}
                            </h1>
                        </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
  )
}

export default Reviews