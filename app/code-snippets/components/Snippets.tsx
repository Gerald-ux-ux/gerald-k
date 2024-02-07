"use client";

import { formatDate } from "@/lib/formatdate";
import React from "react";
import { FaRegUser } from "react-icons/fa";

type SnippetProps = {
  data?: [];
  setSearchQuery?: string;
};

export default function Snippets({ data, setSearchQuery }: SnippetProps) {
  return (
    <ul className="animated-list flex w-full flex-col gap-2">
      {data?.map((snippet: any, i) => (
        <li
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
            <p className="truncate">{snippet.description}</p>

            <p>{formatDate(snippet.createdAt)}</p>
          </span>

          <span className=" whitespace-nowrap rounded-lg bg-secondary px-4 py-2 text-sm text-primary">
            {snippet.tags}
          </span>
        </li>
      ))}
    </ul>
  );
}
