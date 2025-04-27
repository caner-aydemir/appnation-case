import api from "@/services/api";

export const searchCities = async (query: string) => {
  const response = await api.client.get(`/api/cities?query=${query}`);
  return response.data;
};
