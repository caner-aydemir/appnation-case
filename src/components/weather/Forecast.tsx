"use client";

import { ForecastData } from "@/types/weather";
import { useTemperature } from "@/context/TemperatureContext";
import HourlyWeatherCard from "@/components/weather/HourlyWeatherCard";
import WeeklyWeatherCard from "@/components/weather/WeeklyWeatherCard";
import HourlyWeatherSkeleton from "@/components/weather/HourlyWeatherSkeleton";

interface ForecastProps {
  forecastData: ForecastData | undefined;
  isForecastLoading: boolean;
  forecastError: unknown;
}

const Forecast = ({
  forecastData,
  isForecastLoading,
  forecastError,
}: ForecastProps) => {
  const { isCelsius } = useTemperature();

  if (isForecastLoading) {
    return <HourlyWeatherSkeleton />;
  }

  if (forecastError) {
    return (
      <p className="text-red-500 text-center mt-4">
        Failed to fetch forecast data. Please try again later.
      </p>
    );
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
