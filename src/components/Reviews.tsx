import { motion, useAnimation } from 'framer-motion';
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
     <div className="mx-auto w-[85%]">
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex"
              initial={{ x: 50 }}
              animate={controls}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {dummyReviews?.map((item, index) => (
                   <div key={index} className="text w-80">
                            <div className="text  ">
                              <img src={`/assets/testing.jpg`} alt="" className="w-full flex-wrap" />
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
              ))}
            </motion.div>
          </div>
        </div>
  )
}

export default Reviews