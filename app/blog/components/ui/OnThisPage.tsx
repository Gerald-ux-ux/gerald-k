"use client";

import clsx from "clsx";
import { useRouter } from "next/router";
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
      <div className="sticky  top-24 hidden  h-0 animate-in px-12  md:flex md:justify-end">
        <div className="space-y-2  font-medium">
          <h2 className="mb-4 animate-in ">On this page</h2>
          {headings ? (
            <>
              <ul className="animated-list flex animate-in flex-col gap-4 border-b pb-6 ">
                {headings.map((heading) => (
                  <li
                    key={heading.slug}
                    className="flex flex-col gap-2 transition-opacity"
                  >
                    <a
                      href={`#${heading.slug}`}
                      className={clsx(
                        "block cursor-pointer  text-sm transition-opacity",
                      )}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                className="hover:text-secondary text-sm text-primary"
                onClick={() => {
                  window.scrollTo({ top: 0 });
                }}
              >
                Back to top
              </button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default OnThisPage;
