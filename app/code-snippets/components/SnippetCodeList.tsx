"use client";
import { IoClipboardOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import * as Accordion from "@radix-ui/react-accordion";

type SnippetCodeListProps = {
  code: any;
  key: string;
};

export default function SnippetCodeList({ code, key }: SnippetCodeListProps) {
  console.log("SnippetCodeList", code);
  return (
    <Accordion.Root
      type="single"
      collapsible
      defaultValue="item-1"
      className="my-4 flex  w-full gap-2 rounded-lg bg-secondaryA"
    >
      <div key={key} className="flex w-full justify-between gap-2 p-2.5">
        <Accordion.Item value="snippet" className="flex w-full justify-between">
          <Accordion.Trigger className="text-sm md:text-base">
            <span>
              {code.code.map((heading: any) => (
                <span key={heading}>
                  <span className="font-bold">{heading.heading}</span>
                </span>
              ))}
            </span>
          </Accordion.Trigger>

          {/* Right side action items */}
          <div className="flex  items-center  justify-end gap-2  ">
            <IoClipboardOutline />
            <small>Copy code</small>

            <div className=" ">
              <BsThreeDots />
            </div>
          </div>
          <Accordion.Content>{code.content}</Accordion.Content>
        </Accordion.Item>
      </div>
    </Accordion.Root>
  );
}
