import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";

type LoaderProps = {
  onLoadingComplete: () => void;
};

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const controls = useAnimation();
  const isAnimationCompleted = useRef<boolean>(false);

  useEffect(() => {
    const animateLoader = async () => {
      await animateSvg();
      handleAnimationCompletion();
    };

    animateLoader();

    return () => {
      window.removeEventListener("load", handlePageLoad);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) {
      onLoadingComplete();
    }
  }, [isVisible, onLoadingComplete]);

  const animateSvg = async () => {
    document.body.style.cursor = "wait";
    await controls.start({
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    });
    await new Promise((resolve) => setTimeout(resolve, 2000));
    document.body.style.cursor = "auto";
  };

  const handleAnimationCompletion = () => {
    isAnimationCompleted.current = true;
    if (document.readyState === "complete") {
      setIsVisible(false);
    } else {
      window.addEventListener("load", handlePageLoad);
    }
  };

  const handlePageLoad = () => {
    if (isAnimationCompleted.current) {
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && <LoaderContent />}
    </AnimatePresence>
  );
};

const LoaderContent: React.FC = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={loaderStyles}
  >
    <LoaderSvg />
  </motion.div>
);

const LoaderSvg: React.FC = () => (
  <motion.svg
    width="600"
    height="300"
    viewBox="0 0 600 300"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ scale: 0.5, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    exit={{ scale: 0.5, opacity: 0 }}
    transition={{ duration: 1, ease: "easeInOut" }}
  >
    <defs>
      <SvgDefs />
    </defs>
    <LoaderText />
  </motion.svg>
);

const SvgDefs: React.FC = () => (
  <>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#6a6a6a" />
      <stop offset="100%" stopColor="#9a9a9a" />
    </linearGradient>
    <filter id="neon">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
    <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
      <motion.line
        x1="0"
        y1="0"
        x2="10"
        y2="10"
        stroke="#7a7a7a"
        strokeWidth="2.5"
        animate={{ x: [0, 10], y: [0, 10] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </pattern>
  </>
);

const LoaderText: React.FC = () => (
  <>
    <motion.text
      x="55%"
      y="40%"
      textAnchor="middle"
      fontSize="85"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fill="#FFFFFF"
      stroke="#000000"
      strokeWidth="2"
      filter="url(#neon)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      Oğuzhan Ç.
    </motion.text>
    <motion.text
      x="50%"
      y="70%"
      textAnchor="middle"
      fontSize="40"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
      fill="url(#textGradient)"
      filter="url(#neon)"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
    >
      Full Stack Developer
    </motion.text>
    <motion.text
      x="50%"
      y="85%"
      textAnchor="middle"
      fontSize="28"
      fontFamily="Arial, sans-serif"
      fill="#FFFFFF"
      filter="url(#neon)"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut", delay: 2 }}
    >
      Loading...
    </motion.text>
  </>
);

const loaderStyles = {
  position: "fixed" as const,
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(45deg, #1a1a1a, #2c2c2c)",
  zIndex: 9999,
};

export default Loader;
