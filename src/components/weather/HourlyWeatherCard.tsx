"use client";
import React from "react";
import { ForecastData } from "@/types/weather";
import { motion } from "framer-motion";
import Image from "next/image";

interface HourlyWeatherCardProps {
  forecastData: ForecastData;
  isCelsius: boolean;
}
const HourlyWeatherCard: React.FC<HourlyWeatherCardProps> = ({
  forecastData,
  isCelsius,
}) => {
  const now = new Date();

  const upcomingHours = forecastData.list
    .filter((item) => {
      const itemDate = new Date(item.dt_txt);
      return itemDate.getTime() > now.getTime();
    })
    .slice(0, 6);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-4xl mx-auto"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Hourly Forecast
      </h3>

      <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700">
        {upcomingHours.map((item, index) => {
          const itemDate = new Date(item.dt_txt);
          const timeString = itemDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });
          const temp = isCelsius
            ? Math.round(item.main.temp)
            : Math.round((item.main.temp * 9) / 5 + 32);
          const humidity = item.main.humidity;
          const description = item.weather[0].description;
          const icon = item.weather[0].icon;

          return (
            <div key={index} className="flex items-center justify-between py-3">
              <div className="text-gray-800 dark:text-gray-200 text-sm w-16 text-left">
                {index === 0 ? "Şimdi" : timeString}
              </div>

              <div className="font-bold text-gray-900 dark:text-white text-lg w-12 text-center">
                °{temp}
              </div>

              <div className="w-12 text-center">
                <Image
                  src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
                  alt={description}
                  width={40}
                  height={40}
                  className="mx-auto"
                />
              </div>

              <div className="flex flex-col items-end text-gray-700 dark:text-gray-300 text-xs w-28">
                <span className="capitalize">{description}</span>
                <span className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 22c4.418 0 8-7 8-10a8 8 0 10-16 0c0 3 3.582 10 8 10z"
                    />
                  </svg>
                  {humidity}%
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default HourlyWeatherCard;
