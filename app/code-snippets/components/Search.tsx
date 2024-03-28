"use client";

import { CiSearch } from "react-icons/ci";
import { useEffect, useRef } from "react";
import { CodeSnippets } from "@/app/types/typings";
import useSearch from "../hooks/useSearch";

type SearchProps = {
  data?: any;
};

export default function Search({ data }: SearchProps) {
  const {
    handleResultsClick,
    searchQuery,
    setSearchResults,
    resultClicked,
    searchResults,
    handleSearch,
  } = useSearch();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Handler to call on window 'keydown' event
    const handleKeyDown = (e: KeyboardEvent) => {
      // Check if Command+K was pressed
      if (e.metaKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        // If the ref is attached to the input, focus it
        inputRef.current?.focus();
      }
    };

    // Attach the event listener to the window
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener on cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  useEffect(() => {
    if (data && searchQuery) {
      const filteredResults = Array.isArray(data)
        ? data?.filter((item: CodeSnippets) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : [];
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [data, searchQuery, setSearchResults]);

  return (
    <div className="relative">
      <form
        action=""
        onSubmit={(e: any) => {
          e.preventDefault();
        }}
        className="flex w-full items-center gap-2 rounded-lg bg-secondary p-2 text-secondary md:p-3"
      >
        <CiSearch className="text-lg md:text-xl" />
        <input
          className="w-full bg-inherit focus:outline-none"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          value={searchQuery}
          type="text"
          ref={inputRef}
          placeholder="Search for a snippet..."
        />
        ⌘+K
      </form>

      {!resultClicked && searchResults && searchResults.length > 0 && (
        <ul className="animated-list absolute left-0 z-10 mt-1 max-h-[250px] w-full overflow-y-scroll rounded-lg bg-secondary shadow-md">
          {(searchQuery ? searchResults : data || []).map(
            (res: { title: string; code: string[] }, i: number) => (
              <li
                key={i}
                onClick={() => handleResultsClick(res.title)}
                className="animated-list cursor-pointer px-4 py-2 hover:bg-tertiary"
              >
                {res.title} ({res.code.length})
              </li>
            ),
          )}
        </ul>
      )}

      {resultClicked && searchQuery && searchResults.length === 0 && (
        <span className="absolute mt-6 w-full">
          No results found for <strong>{searchQuery}</strong>
        </span>
      )}
    </div>
  );
}
