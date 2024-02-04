"use client";
import { CiSearch } from "react-icons/ci";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type SearchProps = {
  query?: string;
  data?: string[];
};

export default function Search({ query, data }: SearchProps) {
  const [searchQuery, setSearchQuery] = useState<string>(query || "");

  useEffect(() => {
    const newSearchParams = new URLSearchParams();
    newSearchParams.set("q", searchQuery);
    window.history.replaceState({}, "", `?${newSearchParams.toString()}`);
  }, [searchQuery]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <form
      action=""
      className="flex w-full items-center gap-2 rounded-lg bg-secondary p-2  md:p-3 text-secondary"
    >
      <CiSearch className="text-xl" />

      <input
        className="bg-inherit focus:outline-none"
        onChange={handleInputChange}
        value={searchQuery}
        placeholder="Search for a snippet..."
      />
    </form>
  );
}
