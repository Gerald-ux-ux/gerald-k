"use client";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

export default function Connect() {
  return (
    <ul className="animated-list flex animate-in flex-col gap-2 text-secondary md:flex-row md:gap-6">
      <li className="transition-opacity">
        <Link
          href="mailto:kamaugerald36@gmail.com"
          className="flex items-center gap-2 no-underline"
        >
          <MdArrowOutward className="h-5 w-5" />
          <span>Email me</span>
        </Link>
      </li>
      <li className="transition-opacity">
        <Link href="/connect" className="flex items-center gap-2 no-underline">
          <MdArrowOutward className="h-5 w-5" />
          <span>More ways to connect with me</span>
        </Link>
      </li>
    </ul>
  );
}
