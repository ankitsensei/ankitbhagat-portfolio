import React from "react";
import { motion, useScroll, useSpring } from "motion/react";

export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 45,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] z-[99999] origin-left bg-black dark:bg-white"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;
