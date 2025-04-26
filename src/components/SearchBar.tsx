"use client";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city.trim());
    setCity("");
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-1/4">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search City..."
        className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white w-full"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
