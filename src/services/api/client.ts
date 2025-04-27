import axios from "axios";

// Ana HTTP client instance
export const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Bizim kendi API base url
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Eğer ileride token eklemek istersek, buraya interceptor ekleriz
client.interceptors.request.use((config) => {
  // Şu an için token yok, ileride gerekirse ekleriz
  return config;
});

// Response interceptor (hata yakalamak için)
client.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);
