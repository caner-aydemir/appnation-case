"use client";

import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { clearHistory } from "@/store/reducers/searchHistoryReducer";

interface SearchHistoryProps {
  onCityClick: (cityName: string) => void;
}

const SearchHistory: React.FC<SearchHistoryProps> = ({ onCityClick }) => {
  const dispatch = useDispatch();
  const searchHistory = useSelector(
    (state: RootState) => state.searchHistory.history
  );
  const [isClearing, setIsClearing] = useState(false);

  const handleClearHistory = () => {
    setIsClearing(true);
  };

  useEffect(() => {
    if (isClearing) {
      const timeout = setTimeout(() => {
        dispatch(clearHistory());
        const url = new URL(window.location.href);
        url.searchParams.delete("city");

        window.history.replaceState(
          {},
          "",
          url.pathname + (url.search ? `?${url.searchParams.toString()}` : "")
        );
        localStorage.removeItem("searchHistory");
        toast.success("Search history cleared! 🚀", {
          position: "top-right",
          autoClose: 2000,
        });
        setIsClearing(false);
      }, 300);

      return () => clearTimeout(timeout);
    }
  }, [isClearing, dispatch]);

  if (searchHistory.length === 0) return null;

  return (
    <div className=" w-full  md:max-w-xl flex flex-col items-center gap-2 mt-4">
      <div className="flex w-full justify-between items-center">
        <h4 className="text-md font-semibold text-gray-700 dark:text-white">
          Search History
        </h4>
        <button
          onClick={handleClearHistory}
          className="text-sm hover:cursor-pointer text-red-500 hover:text-red-600 transition"
        >
          Clear All
        </button>
      </div>

      <div className="w-full flex flex-wrap gap-2 justify-center">
        {searchHistory.map((city) => (
          <div key={city} className="relative">
            <button
              onClick={() => onCityClick(city)}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-sm rounded-full hover:bg-gray-300 dark:hover:bg-gray-500"
            >
              {city}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchHistory;
