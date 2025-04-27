"use client";

interface SuggestionsDropdownProps {
  suggestions: { name: string; country: string; region: string }[];
  isLoading: boolean;
  onSuggestionClick: (city: string) => void;
}

const SuggestionsDropdown: React.FC<SuggestionsDropdownProps> = ({
  suggestions,
  isLoading,
  onSuggestionClick,
}) => {
  if (isLoading) {
    return (
      <div className="p-4 text-center text-gray-500 dark:text-gray-300 animate-pulse">
        Loading...
      </div>
    );
  }

  if (suggestions.length === 0) {
    return (
      <div className="p-4 text-center text-gray-400">Location not found</div>
    );
  }

  return (
    <>
      {suggestions.map((item, index) => (
        <button
          key={index}
          onClick={() => onSuggestionClick(item.name)}
          className="w-full hover:cursor-pointer text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white"
        >
          {item.name}, {item.region}, {item.country}
        </button>
      ))}
    </>
  );
};

export default SuggestionsDropdown;
