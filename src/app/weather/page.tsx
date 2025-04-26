"use client";
import React from "react";
import SearchBar from "@/components/SearchBar";

const WeatherDashboard = () => {
  const handleSearch = (city: string) => {
    console.log("Searching for city:", city);
    // Buraya ileride API Fetch ekleyeceğiz
  };
  return (
    <section className="flex flex-col items-center gap-4 p-6">
      <h1 className="text-3xl font-bold text-center dark:text-white">
        Weather Dashboard
      </h1>
      <SearchBar onSearch={handleSearch} />
    </section>
  );
};

export default WeatherDashboard;
