"use client";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import { CodeSnippets } from "@/app/types/typings";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type SearchProps = {
  data?: any;
};

export default function Search({ data }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [resultClicked, setResultClicked] = useState<boolean>(false);
  console.log("clicked result", resultClicked);

  /**
   * Allows to access the params ot the url
   * @example
   * /dashboard/setting?tab='money'
   * param.tab is 'money
   */
  const searchParams = useSearchParams();

  /**
   * Reads the current URL's pathname
   * @example
   * /dashboard/setting
   * would return /dashboard/setting
   */
  const pathname = usePathname();

  const { replace } = useRouter();

  function handleSearch(query: string) {
    setSearchQuery(query);

    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set("query", query.toLocaleLowerCase());
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }

  useEffect(() => {
    if (data && searchQuery) {
      const filteredResults = data
        ? data?.filter((item: CodeSnippets) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()),
          )
        : [];
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  }, [data, searchQuery]);

  const handleResultsClick = (result: any) => {
    setSearchQuery(result);
    const params = new URLSearchParams(searchParams);
    params.set("query", result.toLowerCase());
    replace(`${pathname}?${params.toString()}`);
    setResultClicked(true);
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
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          value={searchQuery}
          type="text"
          placeholder="Search for a snippet..."
        />
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
