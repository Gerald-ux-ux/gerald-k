"use client";

import { formatDate } from "@/lib/formatdate";
import React, { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import SnippetCodeList from "./SnippetCodeList";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
// import { useSearchParams } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import clsx from "clsx";

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

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleClicked = (id: string) => {
    let params = new URLSearchParams(searchParams);
    params.set("snippet", id);
    return router.push(`${pathname}?${params}`);
  };

  return (
    <ul className="animated-list flex w-full flex-col gap-2">
      <Dialog>
        {data
          ?.filter((snippet: any) =>
            searchItem
              ? snippet?.title
                  ?.toLowerCase()
                  ?.includes(searchItem.toLowerCase())
              : true,
          )
          .map((snippet: any, i: number) => (
            <DialogTrigger
              key={i}
              asChild
              onClick={() => handleClicked(snippet._id)}
            >
              {/* <DialogContent
                className={clsx(
                  "fixed inset-0 m-auto  flex max-h-80 max-w-[445px] flex-col  overflow-y-auto border-none bg-secondary p-4  outline-none",
                )}
              > */}
              <li className="flex cursor-pointer flex-col gap-3 rounded-lg border border-secondaryA  p-2">
                <span className="flex w-full  items-center justify-between ">
                  <p className=" text-sm font-medium tracking-tight md:text-xl md:font-semibold">
                    {snippet?.title} ({snippet.code.length})
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
              {/* </DialogContent> */}
            </DialogTrigger>
          ))}
      </Dialog>
    </ul>
  );
}
