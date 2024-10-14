import React from "react";
//TODO: Make the category menu scrollable horizontally & add hover animations
const categories = [
  "Landing Pages",
  "Mobile Apps",
  "Framer Plugins",
  "Fintech ",
  "E-commerce ",
];
export default function Categories() {
  return (
    <ul className="animated-list flex items-center justify-center gap-4 ">
      {categories.map((category) => (
        <ul className=" flex w-full cursor-pointer rounded-md bg-secondary p-2 text-sm transition-opacity ">
          {category}
        </ul>
      ))}
    </ul>
  );
}
