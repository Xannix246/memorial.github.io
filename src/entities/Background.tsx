import clsx from "clsx";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";

const Background = () => {
  const { scrollY } = useScroll();
  const [pageHeight, setPageHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateHeight = () => setPageHeight(document.documentElement.scrollHeight);
    const observer = new ResizeObserver(() => updateHeight());

    updateHeight();
    setWidth(window.innerWidth);
    observer.observe(document.body);

    return () => {
      observer.disconnect();
    };
  }, []);

  const y = useTransform(
    scrollY,
    [0, pageHeight],
    [0, -pageHeight * (width < 640 ? 0.01 : 0.032)]
  );
  const style = useSpring(y, {
    stiffness: 40,
    damping: 20,
    mass: 0.8,
  });

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
