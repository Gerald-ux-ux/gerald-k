"use client";

import clsx from "clsx";
import React from "react";

interface Heading {
  heading: number;
  text: string;
  slug: string;
}

type HeadingProps = {
  headings: Heading[];
};

const OnThisPage = ({ headings }: HeadingProps) => {
  return (
    <>
      <div className="sticky top-24 hidden h-0 shrink-0 animate-in md:flex  md:w-56 md:justify-end">
        <div className="space-y-2 text-sm font-medium">
          <h2 className="animate-in text-lg">On this page</h2>
          {headings ? (
            <ul className="animated-list animate-in border-b pb-1">
              {headings.map((heading) => (
                <li
                  key={heading.slug}
                  className="flex flex-col gap-2 transition-opacity"
                >
                  <a
                    href={`#${heading.slug}`}
                    className={clsx("block cursor-pointer transition-opacity")}
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default OnThisPage;
