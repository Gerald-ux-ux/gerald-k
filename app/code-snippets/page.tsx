"use client";

import { PAGE_HEADER } from "@/lib/uiConstants";
import Preview from "@/public/images/preview.png";
// import { Metadata } from "next";
import Link from "next/link";
import AddSnippet from "./components/AddSnippet";
import Search from "./components/Search";
import BetaTag from "./components/BetaTag";
import Cookies from "js-cookie";
// import { secretKey } from "../api/codes-snippets/auth/lib";
// import { userInfo } from "@/lib/secrete";
import Snippets from "./components/Snippets";
import { useState } from "react";

// export const metadata: Metadata = {
//   title: "Code-snippets | Gerald",
//   description: "Search for code snippets",
// };

export default function CodeSnippets() {
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const data = ["Yes", "No", "Yes sir", "No sir", "Yes ma", "No ma"];
  const handleResultClick = (result: string) => {
    setSelectedSnippet(result);
  };

  return (
    <main className="mx-auto flex w-full max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        <span className="flex items-center  gap-2">
          <h1 className={PAGE_HEADER}>Code snippets</h1>
          <div className="mt-1 flex animate-pulse items-center gap-1 rounded-md p-1.5 text-sm font-medium text-[#0070f3] hover:cursor-pointer  hover:bg-secondary">
            <span className="h-2 w-2 rounded-full   bg-[#0070f3] p-0.5" />
            Beta
          </div>
        </span>

        <AddSnippet message="Log in, snippets will be available on Tuesday" />
      </div>

      <div className="">
        <h2 className="mb-2 flex w-full animate-in items-center gap-4 text-lg font-semibold text-primary md:text-xl">
          Search for popular code snippets
        </h2>
      </div>

      <div className="flex flex-col gap-12">
        <Search query="" data={data} onResultClick={handleResultClick} />
        <Snippets
          data={selectedSnippet ? [selectedSnippet] : data}
          // searchQuery={searchQuery}
        />
      </div>
    </main>
  );
}
