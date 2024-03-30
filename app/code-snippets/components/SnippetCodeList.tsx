"use client";
import { IoClipboardOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type SnippetCodeListProps = {
  code: any;
};

export default function SnippetCodeList({ code }: SnippetCodeListProps) {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex w-full  items-center justify-between">
          {code.heading}
          <div className="mr-4  flex w-full cursor-pointer items-center justify-end  gap-2 no-underline ">
            <IoClipboardOutline />
            <small>Copy code</small>

            <div className=" ">
              <BsThreeDots />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="">{code.content}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
