import { PAGE_HEADER } from "@/lib/uiConstants";
import Construction from "@/public/images/construction.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
// import * as Tooltip from "@radix-ui/react-tooltip";

export const metadata: Metadata = {
  title: "Code-snippets | Gerald",
  description: "Coming soon ",
};

//   const ToolTipDemo = () => {
//     return (
//       <Tooltip.Provider>
//         <Tooltip.Root>
//           <Tooltip.Trigger asChild></Tooltip.Trigger>
//           <Tooltip.Portal>
//             <Tooltip.Content className="TooltipContent" sideOffset={5}>
//               Add to library
//               <Tooltip.Arrow className="TooltipArrow" />
//             </Tooltip.Content>
//           </Tooltip.Portal>
//         </Tooltip.Root>
//       </Tooltip.Provider>
//     );
//   };

export default function CodeSnippets() {
  return (
    <main className="mx-auto flex max-w-[700px] animate-in flex-col gap-8 px-6">
      <div className="flex  w-full items-center justify-between">
        <h1 className={PAGE_HEADER}>Code snippets</h1>

        <button className="rounded-lg bg-secondaryA p-2 text-sm text-primary hover:text-secondary md:text-base">
          Add a snippet
        </button>
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
        src={Construction}
        alt="under construction"
        className="rounded-md"
        quality={100}
      />
    </main>
  );
}
