import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

interface NumberCounterProps {
  from: number;
  to: number;
  duration: number;
  setRounded: (value: number) => void; // Prop type
}
export const NumberCounter = ({ 
  from = 0, 
  to = 100, 
  duration = 2,
  setRounded // Destructured from props
}: NumberCounterProps) => {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, {
      duration,
      ease: "easeInOut"
    });

    return controls.stop;
  }, [from, to]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setRounded(latest);
    });
    return unsubscribe;
  }, [rounded, setRounded]);

  return <motion.span>{rounded}</motion.span>;
};


