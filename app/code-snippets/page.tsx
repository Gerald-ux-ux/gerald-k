import { PAGE_HEADER } from "@/lib/uiConstants";
import Preview from "@/public/images/preview.png";
import { Metadata } from "next";
import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AddSnippet from "./components/AddSnippet";
import Search from "./components/Search";
import BetaTag from "./components/BetaTag";

export const metadata: Metadata = {
  title: "Code-snippets | Gerald",
  description: "Coming soon ",
};

export default function CodeSnippets() {
  return (
    <main className="mx-auto flex w-full max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        <span className="flex items-center  gap-2">
          <h1 className={PAGE_HEADER}>Code snippets</h1>
          <div className="mt-1 flex items-center gap-1 rounded-md p-1.5 text-sm text-[#0070f3] font-medium animate-pulse hover:cursor-pointer  hover:bg-secondary">
            <span className="h-2 w-2 rounded-full   bg-[#0070f3] p-0.5" />
            Beta
          </div>
        </span>

        <AddSnippet message="Log in to add a snippet" />
      </div>

      <div>
        <h2 className="mb-2 flex animate-in items-center gap-4 text-lg font-semibold text-primary md:text-xl">
          Beta version releases on Tuesday
        </h2>
        <Link
          href="/"
          className="text-sm text-secondary underline underline-offset-2 hover:text-primary  md:text-base"
        >
          Go Home{" "}
        </Link>
      </div>

      <Search query="" data="" />
    </main>
  );
}
