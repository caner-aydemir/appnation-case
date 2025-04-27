"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { SearchNormal1, Refresh2 } from "iconsax-reactjs";

interface SearchBarProps {
  onSearch: (cityName: string) => void;
  isLoading: boolean;
}

const SearchBar = ({ onSearch, isLoading }: SearchBarProps) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSearch = useCallback(() => {
    if (city.trim() === "") return;

    if (city.length > 32) {
      setError("City name cannot exceed 32 characters!");
      return;
    }

    setError(null);
    onSearch(city);

    const params = new URLSearchParams(window.location.search);
    params.set("city", city);
    router.replace(`?${params.toString()}`, { scroll: false });
    setCity("");
  }, [city, onSearch, router]);
  return (
    <div className="w-full max-w-md flex flex-col items-center gap-2">
      <div className="flex w-full">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            const value = e.target.value;
            setCity(value);

            if (value.length > 32) {
              setError("City name cannot exceed 32 characters!");
            } else {
              setError(null);
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          placeholder="Enter city name"
          className="w-full px-4 py-2 rounded-l-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none"
        />

        <button
          onClick={handleSearch}
          disabled={!!error || isLoading}
          className={`px-4 py-2 flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg ${
            (!!error || isLoading) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {isLoading ? (
            <Refresh2 className="animate-spin" size="20" variant="Outline" />
          ) : (
            <SearchNormal1 size="20" variant="Outline" />
          )}
        </button>
      </div>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
  );
};

export default SearchBar;
