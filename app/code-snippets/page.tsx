import { PAGE_HEADER } from "@/lib/uiConstants";
import Construction from "@/public/images/construction.jpg";
import Image from "next/image";
import Link from "next/link";

export default function CodeSnippets() {
  return (
    <main className="mx-auto flex max-w-[700px] animate-in flex-col gap-8 px-6">
      <h1 className={PAGE_HEADER}>Code snippets</h1>

      <div>
        <h2 className="mb-2 flex animate-in items-center gap-4 text-lg font-semibold text-primary md:text-2xl">
          This page is still under development
        </h2>
        <Link
          href="/"
          className="text-sm text-secondary underline underline-offset-2 hover:text-primary  md:text-base"
        >
          Go Home{" "}
        </Link>
      </div>
      <Image
        src={Construction}
        alt="under construction"
        className="rounded-md"
        quality={100}
      />
    </main>
  );
}
