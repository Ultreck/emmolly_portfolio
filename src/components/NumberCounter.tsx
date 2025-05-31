import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export const NumberCounter = ({ from = 0, to = 100, duration = 2 }) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeOut"
    });

    return controls.stop;
  }, [from, to]);

  return <motion.span>{rounded}</motion.span>;
};

// Usage
<motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>
  <NumberCounter from={0} to={100} duration={3} />
</motion.div>