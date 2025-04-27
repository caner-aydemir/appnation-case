"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedWeatherData } from "@/store/reducers/selectedWeatherReducer";
import { setSelectedForecastData } from "@/store/reducers/selectedForecastReducer";
import {
  addToHistory,
  setHistory,
} from "@/store/reducers/searchHistoryReducer";
import { useQuery } from "@tanstack/react-query";
import {
  getForecastByCity,
  getWeatherByCity,
} from "@/services/weather/weatherService";
import AppNationHeader from "@/components/layout/AppNationHeader";
import SearchBar from "@/components/common/SearchBar";
import SearchHistory from "@/components/common/SearchHistory";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "@/store/store";
import dynamic from "next/dynamic";
import WeatherSkeleton from "@/components/weather/WeatherCardSkeleton";
import HourlyWeatherSkeleton from "@/components/weather/HourlyWeatherSkeleton";
import { useSearchParams } from "next/navigation";

const DynamicWeatherCard = dynamic(
  () => import("@/components/weather/WeatherCard"),
  { loading: () => <WeatherSkeleton /> }
);

const DynamicForecast = dynamic(() => import("@/components/weather/Forecast"), {
  loading: () => <HourlyWeatherSkeleton />,
});

const WeatherDashboard = () => {
  const searchParams = useSearchParams();
  const cityFromUrl = searchParams.get("city");

  const [city, setCity] = useState<string>(cityFromUrl || "Istanbul");
  const dispatch = useDispatch();

  const selectedWeatherData = useSelector(
    (state: RootState) => state.selectedWeather.weatherData
  );
  const selectedForecastData = useSelector(
    (state: RootState) => state.selectedForecast.forecastData
  );

  const { data, isLoading, isError } = useQuery({
    queryKey: ["weather", city],
    queryFn: () => getWeatherByCity(city),
    enabled: !!city,
    retry: false,
    refetchOnWindowFocus: false,
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
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const historyFromLocalStorage = JSON.parse(
      localStorage.getItem("searchHistory") || "[]"
    );
    dispatch(setHistory(historyFromLocalStorage));
  }, [dispatch]);

  useEffect(() => {
    if (data && !isError) {
      dispatch(setSelectedWeatherData(data));

      if (cityFromUrl || window.location.search.includes("city=")) {
        dispatch(addToHistory(city));
      }
    }
  }, [data, isError, dispatch, city, cityFromUrl]);

  useEffect(() => {
    if (forecastData) {
      dispatch(setSelectedForecastData(forecastData));
    }
  }, [forecastData, dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(
        "Weather information for the location you selected could not be found. Please enter a valid location."
      );
    }
  }, [isError]);

  const handleSearch = (cityName: string) => {
    setCity(cityName);
    const params = new URLSearchParams(window.location.search);
    params.set("city", cityName);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params.toString()}`
    );
  };

  return (
    <section className="flex flex-col justify-center items-center gap-4 p-6">
      <ToastContainer position="top-right" autoClose={4000} />
      <AppNationHeader />
      <SearchBar onSearch={handleSearch} isLoading={isLoading} />
      <SearchHistory onCityClick={handleSearch} />
      {isLoading && <WeatherSkeleton />}
      {selectedWeatherData && !isLoading && (
        <DynamicWeatherCard weatherData={selectedWeatherData} />
      )}
      <DynamicForecast
        forecastData={selectedForecastData}
        isForecastLoading={isForecastLoading}
        forecastError={forecastError}
      />
    </section>
  );
};

export default WeatherDashboard;
