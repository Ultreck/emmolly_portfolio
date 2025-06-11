import { motion, useAnimation } from 'framer-motion';
import { Avatar, Button, Card } from '@heroui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dummyReviews from '../constants/index'
const RatingsAndReview = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    // Start animation
    controls.start({
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 500,
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
      x: '-50%',
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 100,
        ease: 'linear',
      },
    });
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-default-50 border-t dark:border-default-100 border-default-200 shadow-lg py-4 overflow-hidden ml-24">
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          initial={{ x: 0 }}
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {dummyReviews?.map((item, index) => (
            <Card key={index} className="my-1 border border-default-100">
              <div className="flex items-center gap-2 px-3 py-2">
               {item?.name}
              </div>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RatingsAndReview;
