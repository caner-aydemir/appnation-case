"use client";

import { useTemperature } from "@/context/TemperatureContext";

const TemperatureToggle = () => {
  const { isCelsius, toggleUnit } = useTemperature();

  return (
    <button
      onClick={toggleUnit}
      className="w-10 h-10 flex justify-center items-center
           rounded-full hover:cursor-pointer border border-gray-300 dark:border-white text-black dark:text-white
           
           "
    >
      <span className="font-bold">{isCelsius ? "°C" : "°F"}</span>
    </button>
  );
};

export default TemperatureToggle;
