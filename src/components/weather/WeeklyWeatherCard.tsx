"use client";

import { ForecastData } from "@/types/weather";
import { motion } from "framer-motion";
import Image from "next/image";

interface WeeklyWeatherCardProps {
  forecastData: ForecastData;
  isCelsius: boolean;
}

const WeeklyWeatherCard: React.FC<WeeklyWeatherCardProps> = ({
  forecastData,
  isCelsius,
}) => {
  const now = new Date();
  const filteredData = forecastData.list.filter((item) => {
    const itemDate = new Date(item.dt_txt);
    return itemDate.getTime() > now.getTime();
  });

  const dailyData = filteredData
    .filter((item) => item.dt_txt.includes("12:00:00"))
    .slice(0, 7);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full max-w-4xl mx-auto"
    >
      <h3 className="text-xl font-semibold  mb-4 text-gray-900 dark:text-white">
        5-Day Forecast
      </h3>

      <div className="flex flex-col divide-y divide-gray-300 dark:divide-gray-700">
        {dailyData.map((item, index) => {
          const itemDate = new Date(item.dt_txt);
          const dayName = itemDate.toLocaleDateString("en-US", {
            weekday: "short",
          });
          const day = itemDate.getDate().toString().padStart(2, "0");
          const month = (itemDate.getMonth() + 1).toString().padStart(2, "0");
          const formattedDate = `${dayName} ${day}/${month}`;

          const tempMax = isCelsius
            ? Math.round(item.main.temp_max)
            : Math.round((item.main.temp_max * 9) / 5 + 32);

          const description = item.weather[0].description;
          const humidity = item.main.humidity;
          const icon = item.weather[0].icon;

          return (
            <div key={index} className="flex items-center justify-between py-3">
              <div className="w-20 text-left text-gray-800 dark:text-gray-200 text-sm font-semibold">
                {formattedDate}
              </div>

              <div className="flex items-center gap-1 w-24 justify-center text-gray-900 dark:text-white font-bold">
                °{tempMax}
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

              <div className="w-36 text-xs text-gray-700 dark:text-gray-300 capitalize text-left">
                {description}
              </div>

              <div className="flex items-center gap-1 text-xs font-semibold text-gray-700 dark:text-gray-300 w-12 justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
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
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default WeeklyWeatherCard;
