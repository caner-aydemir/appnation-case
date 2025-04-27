"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getForecastByCity,
  getWeatherByCity,
} from "@/services/weather/weatherService";
import SearchBar from "@/components/common/SearchBar";
import WeatherSkeleton from "@/components/weather/WeatherCardSkeleton";
import dynamic from "next/dynamic";
import AppNationHeader from "@/components/layout/AppNationHeader";
import HourlyWeatherSkeleton from "@/components/weather/HourlyWeatherSkeleton";

const WeatherCard = dynamic(() => import("@/components/weather/WeatherCard"), {
  loading: () => <WeatherSkeleton />,
});
const Forecast = dynamic(() => import("@/components/weather/Forecast"), {
  loading: () => <HourlyWeatherSkeleton />,
});

const WeatherDashboard = () => {
  const [city, setCity] = useState("London");

  const { data, isLoading, error } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherByCity(city),
    enabled: !!city,
    retry: false, // Optional
  });
  const {
    data: forecastData,
    isLoading: isForecastLoading,
    error: forecastError,
  } = useQuery({
    queryKey: ["forecast", city],
    queryFn: () => getForecastByCity(city),
    enabled: !!city,
    retry: false,
  });

  const handleSearch = (cityName: string) => {
    setCity(cityName);
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4 p-6">
      <AppNationHeader />
      <SearchBar onSearch={handleSearch} />

      {isLoading && <WeatherSkeleton />}

      {error && (
        <p className="text-red-500 text-center mt-4">
          Failed to fetch weather data. Please try again.
        </p>
      )}

      {data && !isLoading && <WeatherCard weatherData={data} />}
      <Forecast
        forecastData={forecastData}
        isForecastLoading={isForecastLoading}
        forecastError={forecastError}
      />
    </section>
  );
};

export default WeatherDashboard;
