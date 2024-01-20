import { PAGE_HEADER } from "@/lib/uiConstants";
import Preview from "@/public/images/preview.png";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AddSnippet from "./components/AddSnippet";

export const metadata: Metadata = {
  title: "Code-snippets | Gerald",
  description: "Coming soon ",
};

export default function CodeSnippets() {
  return (
    <main className="mx-auto flex max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        <h1 className={PAGE_HEADER}>Code snippets</h1>

        <AddSnippet message="Log in to add a snippet" />
      </div>

      <div>
        <h2 className="mb-2 flex animate-in items-center gap-4 text-lg font-semibold text-primary md:text-xl">
          This page is still under development. I am Currently working on the Ui
          and Backend design. The whole feature will be released late next week
          and users will be able to add code snippets and share their ideas with
          other developers.
        </h2>
        <Link
          href="/"
          className="text-sm text-secondary underline underline-offset-2 hover:text-primary  md:text-base"
        >
          Go Home{" "}
        </Link>
      </div>
      <Image
        src={Preview}
        alt="under construction"
        className="overflow-hidden rounded-md bg-tertiary md:rounded-lg"
        quality={100}
      />
    </main>
  );
}
