"use client";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";

type SearchProps = {
  query?: string;
  data?: any;
  onResultClick?: (result: string) => void;
};

export default function Search({ query, data, onResultClick }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>(query || "");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [resultClicked, setResultClicked] = useState<boolean>(false);

  console.log("data", data);
  console.log("searchResults", searchResults);
  useEffect(() => {
    let newSearchParams: URLSearchParams | undefined;

    if (searchQuery) {
      newSearchParams = new URLSearchParams();
      newSearchParams.set("q", searchQuery);
    }

    if (newSearchParams) {
      window.history.replaceState({}, "", `?${newSearchParams.toString()}`);
    } else {
      const params = new URLSearchParams(window.location.search);
      params.delete("q");
      window.history.replaceState({}, "", `?${params.toString()}`);
    }
  }, [searchQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (data && searchQuery) {
      const filteredResults = data?.filter((item: any) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }

    setResultClicked(false);
  }, [data, searchQuery]);

  const handleResultsClick = (result: any) => {
    setSearchQuery(result);
    // onResultClick(result);

    setResultClicked(true);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <div className="relative">
      <form
        action=""
        className="flex w-full items-center gap-2 rounded-lg bg-secondary p-2 text-secondary md:p-3"
      >
        <CiSearch className="text-lg md:text-xl" />
        <input
          className="w-full bg-inherit focus:outline-none"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          value={searchQuery}
          type="text"
          placeholder="Search for a snippet..."
        />
      </form>

      {!resultClicked && searchResults && searchResults.length > 0 && (
        <ul className="animated-list absolute left-0 z-10 mt-1 max-h-[250px] w-full overflow-y-scroll rounded-lg bg-secondary shadow-md">
          {(searchQuery ? searchResults : data || []).map(
            (res: { title: string }, i: number) => (
              <li
                key={i}
                onClick={() => handleResultsClick(res.title)}
                className="animated-list cursor-pointer px-4 py-2 hover:bg-tertiary"
              >
                {res.title}
              </li>
            ),
          )}
        </ul>
      )}

      {!resultClicked && searchQuery && searchResults.length === 0 && (
        <span className="absolute mt-2 w-full">
          No results found for <strong>{searchQuery}</strong>
        </span>
      )}
    </div>
  );
}
