"use client";

import { formatDate } from "@/lib/formatdate";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import SnippetCodeList from "./SnippetCodeList";
import { useSearchParams } from "next/navigation";
// import { useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

type SnippetProps = {
  data?: any;
  setSearchQuery?: string;
};

export default function Snippets({ data }: SnippetProps) {
  const [expanded, setExpanded] = useState<boolean[]>([]);

  const searchQuery = useSearchParams();
  const searchItem = searchQuery.get("query");

  const handleToggle = (id: number) => {
    setExpanded((prevExpanded: any) => {
      const newExpanded = [...prevExpanded];
      newExpanded[id] = !prevExpanded[id];
      return newExpanded;
    });
  };

  return (
    <ul className="animated-list flex w-full flex-col gap-2">
      {data
        ?.filter((snippet: any) =>
          searchItem
            ? snippet.title.toLowerCase().includes(searchItem.toLowerCase())
            : true,
        )
        .map((snippet: any, i: number) => (
          <li
            onClick={() => handleToggle(i)}
            key={i}
            className="flex cursor-pointer flex-col gap-3 rounded-lg border border-secondaryA  p-2"
          >
            <span className="flex w-full  items-center justify-between ">
              <p className=" text-sm font-medium tracking-tight md:text-xl md:font-semibold">
                {snippet.title} ({snippet.code.length})
              </p>

              <span className="hidden items-center gap-2 text-xs md:flex md:text-base">
                <p className="w-full">{snippet.author}</p>

                <span className=" hidden rounded-full bg-secondaryA p-2  md:block">
                  <FaRegUser />
                </span>
              </span>
            </span>
            <span className="flex w-full items-center justify-between  text-sm md:text-base">
              <p className="w-96 truncate ">{snippet.description}</p>

              <p>{formatDate(snippet.createdAt)}</p>
            </span>

            {expanded[i] && (
              <span>
                {snippet.code.map((code: any) => (
                  <SnippetCodeList code={code} key={code._id} />
                ))}
              </span>
            )}

            <span className=" flex flex-row gap-2 ">
              {snippet?.tags?.map((tag: string) => (
                <span
                  key={tag}
                  className=" whitespace-nowrap  rounded-lg bg-secondary p-1.5 text-sm text-primary "
                >
                  {tag}
                </span>
              ))}
            </span>
          </li>
        ))}
    </ul>
  );
}
