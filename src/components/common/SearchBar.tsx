"use client";

import { useCallback, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { searchCities } from "@/services/cities/citiesService";
import SuggestionsDropdown from "./SuggestionsDropdown";

interface SearchBarProps {
  onSearch: (cityName: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [debouncedCity, setDebouncedCity] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isCitySelected, setIsCitySelected] = useState(false);
  const router = useRouter();
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const debounceSearch = useCallback(
    debounce((value: string) => {
      setDebouncedCity(value);
    }, 400),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    setIsCitySelected(false);

    if (value.length > 32) {
      setError("City name cannot exceed 32 characters!");
    } else {
      setError(null);
    }

    debounceSearch(value);
  };

  const { data: suggestions = [], isLoading: isSuggestionsLoading } = useQuery({
    queryKey: ["searchCities", debouncedCity],
    queryFn: () => searchCities(debouncedCity),
    enabled: debouncedCity.length >= 2,
    staleTime: 1000 * 60 * 5,
  });

  const handleSearch = useCallback(() => {
    if (!isCitySelected) return;

    onSearch(city);

    const params = new URLSearchParams(window.location.search);
    params.set("city", city);
    router.replace(`?${params.toString()}`, { scroll: false });

    setCity("");
    setIsCitySelected(false);
  }, [city, onSearch, router, isCitySelected]);

  const handleSuggestionClick = (selectedCity: string) => {
    setCity("");
    setIsCitySelected(true);
    setError(null);

    onSearch(selectedCity);

    const params = new URLSearchParams(window.location.search);
    params.set("city", selectedCity);
    router.replace(`?${params.toString()}`, { scroll: false });

    setDebouncedCity("");
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setIsCitySelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-md flex flex-col items-center gap-2 relative">
      <div className="flex w-full">
        <input
          type="text"
          value={city}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleSearch();
            }
          }}
          placeholder="Enter city name"
          className="w-full px-4 py-2 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none"
        />
      </div>

      {debouncedCity.length >= 2 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full mt-1 w-full bg-white dark:bg-gray-700 shadow-lg rounded-lg z-50 max-h-60 overflow-y-auto"
        >
          <SuggestionsDropdown
            suggestions={suggestions}
            isLoading={isSuggestionsLoading}
            onSuggestionClick={handleSuggestionClick}
          />
        </div>
      )}

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}
    </div>
  );
};

export default SearchBar;
