import { PAGE_HEADER } from "@/lib/uiConstants";
import { Metadata } from "next";

import AddSnippet from "./components/AddSnippet";
import Search from "./components/Search";
import Snippets from "./components/Snippets";
import FeedBack from "./components/FeedBack";
import { jsonData } from "../code-snippets/json/data.js";
import { cookies } from "next/headers";
export const metadata: Metadata = {
  title: "Code-snippets | Gerald",
  description: "Search for code snippets",
};

async function getCodeSnippets() {
  try {
    const res = jsonData;
    if (res?.success) {
      return res.data;
    } else {
      return res.message;
    }
  } catch (error: any) {
    error = error.message;
  }
  // try {
  //   // const res = await axios.get(GET_SNIPPETS, { cache: "force-cache" } as any);

  //   const res = jsonData;
  //   if (res?.data?.success) {
  //     return res?.data?.data;
  //   } else {
  //     return res.data.message;
  //   }
  // } catch (error: any) {
  //   error = error.message;
  // }
}

export default async function CodeSnippets() {
  const snippets = await getCodeSnippets();
  const isAuth = cookies().get("auth");

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
            <FeedBack />
          </span>

          <AddSnippet
            isAuth={isAuth}
            message="Log in, snippets will be available on Tuesday"
          />
        </div>

        <div className="">
          <h2 className="mb-2 flex w-full animate-in items-center gap-4 text-lg font-semibold text-primary md:text-xl">
            Search for popular code snippets
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <Search query="" data={snippets} />
          <Snippets data={snippets} />
        </div>
      </main>
    </>
  );
}
