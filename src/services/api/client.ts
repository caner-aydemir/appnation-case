import axios from "axios";

export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

client.interceptors.request.use((config) => {
  return config;
});

client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
