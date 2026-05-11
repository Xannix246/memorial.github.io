import clsx from "clsx";
import { motion, useScroll, useTransform } from "motion/react";

const Background = () => {
  const scrollY = useScroll().scrollY;
  const style = useTransform(scrollY, [0, 3600], [0, -100]);

  return (
    <motion.div
      className={clsx("fixed -z-10 w-full h-full flex")}
      style={{
        y: style,
      }}
    >
      <div className="w-full h-[200vh] bg-black absolute -z-10" />

      <div className="flex w-full justify-center">
        <img src="assets/bg.png" className="absolute min-w-200 md:min-w-384 object-cover top-55 md:-top-55"/>
      </div>

      <div className="absolute w-full h-[60vh] bg-linear-0 from-[#832204] to-80% -bottom-55" />
    </motion.div>
  );
};

export default Background;
