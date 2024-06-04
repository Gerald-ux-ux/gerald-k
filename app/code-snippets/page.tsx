import { PAGE_HEADER } from "@/lib/uiConstants";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code-snippets | Gerald",
  description: "Search for code snippets",
};

export default async function CodeSnippets() {
  return (
    <div className="mx-auto  flex max-w-[700px] flex-col gap-16 px-6 md:gap-24">
      <p className={cn(PAGE_HEADER)}>
        I&apos;m happy to announce that code snippets is now a stand alone app.
        Visit{" "}
        <Link
          target="_blank"
          href="https://codesnippets-six.vercel.app/"
          className="text-link underline underline-offset-2"
        >
          to find our more{" "}
        </Link>
      </p>
    </div>
  );
}
