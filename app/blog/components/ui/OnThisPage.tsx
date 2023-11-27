"use client";

import clsx from "clsx";
import React, { useState, useEffect } from "react";

interface Heading {
  heading: number;
  text: string;
  slug: string;
}

type HeadingProps = {
  headings: Heading[];
};

const OnThisPage = ({ headings }: HeadingProps) => {
  const [activeHeading, setActiveHeading] = useState<string | null>(null);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (const heading of headings) {
      const element = document.getElementById(heading.slug);
      if (element) {
        const offset = 100;
        const elementTop = element.offsetTop - offset;
        const elementBottom = elementTop + element.clientHeight;

        if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
          setActiveHeading(heading.slug);
          return;
        }
      }
    }

    setActiveHeading(null);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <>
      <div className="sticky top-24 h-0 animate-in hidden shrink-0 md:flex  md:w-56 md:justify-end">
        <div className="space-y-2 text-sm font-medium">
          <h2 className="text-lg animate-in">On this page</h2>
          {headings ? (
            <ul className="animated-list animate-in border-b pb-1">
              {headings.map((heading) => (
                <li
                  key={heading.slug}
                  className="flex flex-col gap-2 transition-opacity"
                >
                  <a
                    href={`#${heading.slug}`}
                    className={clsx("block cursor-pointer transition-opacity", {
                      "text-blue-600": heading.slug === activeHeading,
                    })}
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
