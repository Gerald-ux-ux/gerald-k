"use client";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";

type SearchProps = {
  query?: string;
  data?: string[];
};

export default function Search({ query, data }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>(query || "");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [resultClicked, setResultClicked] = useState<boolean>(false);

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
      const filteredResults = data.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [data, searchQuery]);

  const handleResultsClick = (result: any) => {
    setSearchQuery(result);
    setResultClicked(true);
  };

  return (
    <div className="relative  ">
      <form
        action=""
        className="flex w-full items-center gap-2 rounded-lg bg-secondary p-2  text-secondary md:p-3"
      >
        <CiSearch className="text-xl" />

        <input
          className="w-full bg-inherit focus:outline-none"
          onChange={handleInputChange}
          value={searchQuery}
          type="text"
          placeholder="Search for a snippet..."
        />
      </form>

      {!resultClicked && searchResults.length > 0 ? (
        <ul className="animated-list absolute left-0  z-10 mt-1 w-full rounded-lg  bg-secondary shadow-md">
          {searchResults.map((res, i) => (
            <li
              key={i}
              onClick={() => handleResultsClick(res)}
              className="animated-list cursor-pointer  px-4 py-2 hover:bg-tertiary"
            >
              {res}
            </li>
          ))}
        </ul>
      ) : (
        searchQuery && (
          <span className=" absolute  mt-2 w-full">
            No results found for <strong>{searchQuery}</strong>
          </span>
        )
      )}
    </div>
  );
}
