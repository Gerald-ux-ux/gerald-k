"use client";
import getSnippets from "@/app/api/codes-snippets/snippets/constants";
import { useEffect, useState } from "react";

export default function useCodeSnippets() {
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const log = () => {
      console.log("i logged");
    };

    return () => log();
  }, []);

  const handleResultClick = (result: string) => {
    setSelectedSnippet(result);
  };

  return {
    handleResultClick,
    data,
    selectedSnippet,
    setSelectedSnippet,
    setSearchQuery,
    searchQuery,
  };
}
