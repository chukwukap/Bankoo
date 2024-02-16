import React, { ChangeEvent, FC, KeyboardEvent, useRef, useState } from "react";
import { SearchIcon } from "lucide-react";
interface SearchBarProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => Promise<void>;
}

const SearchBar: FC<SearchBarProps> = ({
  placeholder = "Search...",
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setSearchTerm("");
      event.currentTarget.blur();
    } else if (event.key === "Enter") {
      await performSearch();
    }
  };

  const handleIconClick = async () => {
    if (inputRef.current?.value) {
      await performSearch();
    }
  };

  const performSearch = async () => {
    setIsLoading(true);
    try {
      await onSearch(searchTerm);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center px-2 w-full md:w-auto text-stone-500 bg-[#F5F7FA] rounded-3xl shadow-sm  transition-shadow duration-300 hover:shadow-lg">
      <button
        type="button"
        className="p-2 bg-transparent border-none outline-none focus:outline-none transition-colors duration-200"
        onClick={handleIconClick}
      >
        {isLoading ? "⏳" : <SearchIcon />}
      </button>
      <input
        ref={inputRef}
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-grow mr-2 py-1 px-4 border-none outline-none rounded-3xl focus:ring-2 focus:ring-stone-400/50 focus:border-stone-500 bg-transparent transition-colors duration-200"
      />
    </div>
  );
};

export default SearchBar;
