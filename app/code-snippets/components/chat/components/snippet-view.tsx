"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import { INPUT_STYLE } from "../../../styles/inputStyle";
import { DialogClose } from "@radix-ui/react-dialog";

type Props = {
  snippet: any;
};
export default function SnippetView({ snippet }: Props) {
  console.log("snippet", snippet);
  return (
    <DialogContent
      className={clsx(
        "fixed inset-0 m-auto  flex max-h-[500px] max-w-[445px] flex-col  overflow-y-auto border-none bg-secondary p-4  outline-none",
      )}
    >
      <DialogTitle className="mb-2 mt-3"> </DialogTitle>

      {/* <DialogClose
          type="submit"
          className="w-full rounded-lg border border-secondaryA p-2 hover:text-secondary "
        >
          Skip
        </DialogClose> */}
    </DialogContent>
  );
}
