"use client";
import { IoClipboardOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useTheme } from "next-themes";
import { capsFirstLetter } from "@/lib/utils";

type SnippetCodeListProps = {
  code: any;
};

export default function SnippetCodeList({ code }: SnippetCodeListProps) {
  const theme = useTheme();

  return (
    <Accordion type="single" className="mt-0 " collapsible>
      <AccordionItem value="item-1" className="mt-0">
        <AccordionTrigger className=" flex  w-full items-center  justify-between ">
          {code.heading}
        </AccordionTrigger>
        <AccordionContent className="">
          <div className="rounded-lg  p-2">
            <div className="mr-4 flex w-full  cursor-pointer  items-center justify-between   rounded-lg p-2 text-secondary ">
              {capsFirstLetter(code.language)}
              <span className="flex items-center gap-2">
                <IoClipboardOutline />
                <small>Copy code</small>

                <div className=" ">
                  <BsThreeDots />
                </div>
              </span>
            </div>
            <SyntaxHighlighter
              style={dark}
              wrapLongLines={true}
              customStyle={{
                padding: "12px",
                backgroundColor:
                  theme.theme === "light"
                    ? "#F5F5F5"
                    : "dark"
                      ? "#F5F5F5"
                      : "#F5F5F5",
              }}
              showLineNumbers
              language={code.language.toLowerCase()}
            >
              {code.content}
            </SyntaxHighlighter>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
