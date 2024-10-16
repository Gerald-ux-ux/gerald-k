import React from "react";

const categories = [
  "Landing Pages",
  "Mobile Apps",
  "Ui/Ux designs",
  "Framer Plugins",
  "Fintech",
  "E-commerce",
];

export default function Categories() {
  return (
    <div className="w-80 overflow-hidden md:w-full">
      <div className="scrollbar-hide -mb-4 overflow-x-auto pb-4">
        <ul className="animated-list flex items-center justify-start gap-2 whitespace-nowrap px-4 sm:gap-4 sm:px-0">
          {categories.map((category) => (
            <li
              key={category}
              className="hover:text-primary-foreground cursor-pointer rounded-md bg-secondary p-2 text-xs transition-all duration-300 ease-in-out hover:bg-primary sm:text-sm"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
