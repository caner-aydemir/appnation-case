"use client";

import { ForecastData } from "@/types/weather";
import { useTemperature } from "@/context/TemperatureContext";
import HourlyWeatherCard from "@/components/weather/HourlyWeatherCard";
import WeeklyWeatherCard from "@/components/weather/WeeklyWeatherCard";
import HourlyWeatherSkeleton from "@/components/weather/HourlyWeatherSkeleton";

interface ForecastProps {
  forecastData?: ForecastData | null;
  isForecastLoading: boolean;
  forecastError: unknown;
}

const Forecast = ({ forecastData, isForecastLoading }: ForecastProps) => {
  const { isCelsius } = useTemperature();

  if (isForecastLoading) {
    return <HourlyWeatherSkeleton />;
  }

  if (!forecastData) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <HourlyWeatherCard forecastData={forecastData} isCelsius={isCelsius} />
      <WeeklyWeatherCard forecastData={forecastData} isCelsius={isCelsius} />
    </div>
  );
};

export default Forecast;
