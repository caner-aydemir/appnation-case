import api from "@/services/api";
import { WeatherData, ForecastData } from "@/types/weather";

export const getWeatherByCity = async (city: string): Promise<WeatherData> => {
  const response = await api.client.get(`/api/weather?city=${city}`);
  return response.data;
};

export const getForecastByCity = async (
  city: string
): Promise<ForecastData> => {
  const response = await api.client.get(`/api/forecast?city=${city}`);
  return response.data;
};
