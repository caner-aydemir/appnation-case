"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AppNationHeader = () => {
  const text = "AppNation Weather Application";

  return (
    <div className="flex w-full gap-2 justify-start items-center md:justify-center md:items-center mb-2">
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.7,
          ease: "easeInOut",
        }}
      >
        <Image
          alt="logo"
          src="https://cdn.prod.website-files.com/679c8d3e7c513e31b271d21b/67c6f3e1713f6cd76c00b5c6_webclip.png"
          width={40}
          height={40}
        />
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="hidden md:flex"
      >
        {text.split("").map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-2" />;
          }
          return (
            <motion.span
              key={index}
              variants={letterAnimation}
              className="text-2xl font-semibold dark:text-white text-black"
              style={{ fontFamily: "var(--h1--font-family)" }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
};

export default AppNationHeader;
