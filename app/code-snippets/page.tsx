import { PAGE_HEADER } from "@/lib/uiConstants";
import { Metadata } from "next";

import AddSnippet from "./components/AddSnippet";
import Search from "./components/Search";
import Snippets from "./components/Snippets";
import { getCodeSnippets } from "./actions/action";

export const metadata: Metadata = {
  title: "Code-snippets | Gerald",
  description: "Search for code snippets",
};

export default async function CodeSnippets() {
  const snippets = await getCodeSnippets();

  const data = snippets ? snippets : [];

  return (
    <>
      <main className="mx-auto flex w-full max-w-[700px] animate-in flex-col gap-8 px-6">
        <div className="flex  w-full items-center justify-between">
          <span className="flex items-center  gap-2">
            <h1 className={PAGE_HEADER}>Code snippets</h1>
            <div className="mt-1 flex animate-pulse items-center gap-1 rounded-md p-1.5 text-sm font-medium text-[#0070f3] hover:cursor-pointer  hover:bg-secondary">
              <span className="h-2 w-2 rounded-full   bg-[#0070f3] p-0.5" />
              Beta
            </div>
            {/* <FeedBack /> */}
          </span>
          {/* Add auth */}
          <AddSnippet message="" />
        </div>

        <div className="">
          <h2 className="mb-2 flex w-full animate-in items-center gap-4 text-lg font-semibold text-primary md:text-xl">
            Search for popular code snippets
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {/* <Search data={data} /> */}
          {/* <form
            action=""
            className="flex w-full items-center gap-2 rounded-lg bg-secondary p-2 text-secondary md:p-3"
          >
            <CiSearch className="text-lg md:text-xl" />
            <input
              className="w-full bg-inherit focus:outline-none"
              type="text"
              placeholder="Search for a snippet..."
            />
          </form> */}
          {/* <Snippets data={data} /> */}
        </div>
      </main>
    </>
  );
}
