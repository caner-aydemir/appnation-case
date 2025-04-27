"use client";

import { WeatherData } from "@/types/weather";
import { useTemperature } from "@/context/TemperatureContext";
import { motion } from "framer-motion";

interface WeatherCardProps {
  weatherData: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weatherData }) => {
  const { isCelsius } = useTemperature();

  const {
    name,
    sys: { country },
    main: { feels_like, temp_min, temp_max, humidity, pressure },
    visibility,
    weather,
    wind: { speed },
  } = weatherData;

  const feelsLikeTemp = isCelsius
    ? Math.round(feels_like)
    : Math.round((feels_like * 9) / 5 + 32);

  const tempMax = isCelsius
    ? Math.round(temp_max)
    : Math.round((temp_max * 9) / 5 + 32);

  const tempMin = isCelsius
    ? Math.round(temp_min)
    : Math.round((temp_min * 9) / 5 + 32);

  const visibilityKm = (visibility / 1000).toFixed(2);

  const description = weather[0].description;
  const formattedDescription =
    description.charAt(0).toUpperCase() + description.slice(1);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 w-full max-w-4xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Today &apos;s Weather in {name}, {country}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <InfoItem label="High/Low" value={`°${tempMax} / °${tempMin}`} />
          <InfoItem label="Humidity" value={`${humidity}%`} />
          <InfoItem label="Pressure" value={`${pressure} hPa`} />
          <InfoItem label="Visibility" value={`${visibilityKm} km`} />
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
            Hissedilen
          </p>
          <p className="text-6xl font-bold text-gray-900 dark:text-white">
            °{feelsLikeTemp}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <InfoItem label="Wind" value={`${Math.round(speed)} km/h`} />
          <InfoItem label="Description" value={`${formattedDescription}`} />
          <InfoItem label="Dew Point" value="-" />
          <InfoItem label="Moon Phases" value="-" />
        </div>
      </div>
    </motion.div>
  );
};

interface InfoItemProps {
  label: string;
  value: string;
}

const InfoItem = ({ label, value }: InfoItemProps) => (
  <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2">
    <span className="text-gray-700 dark:text-gray-300 text-sm">{label}</span>
    <span className="text-gray-900 dark:text-white font-semibold">{value}</span>
  </div>
);

export default WeatherCard;
