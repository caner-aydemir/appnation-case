import api from "@/services/api";

export const getWeatherByCity = async (city: string) => {
  try {
    const response = await api.client.get(`/api/weather?city=${city}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};
