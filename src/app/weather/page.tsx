"use client";
import React from "react";
import SearchBar from "@/components/SearchBar";
import { motion } from "framer-motion";
const WeatherDashboard = () => {
  const handleSearch = (city: string) => {
    console.log("Searching for city:", city);
    // Buraya ileride API Fetch ekleyeceğiz
  };
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

  const text = "AppNation";

  return (
    <section className="flex flex-col justify-center items-center gap-2 p-2">
      <div className="flex gap-2 justify-center">
        <p className="text-2xl italic rotate-4 font-bold">N</p>
        <motion.div variants={container} initial="hidden" animate="show">
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

      <SearchBar onSearch={handleSearch} />
    </section>
  );
};

export default WeatherDashboard;
