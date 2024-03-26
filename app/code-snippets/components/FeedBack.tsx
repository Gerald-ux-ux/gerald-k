"use client";

"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import { INPUT_STYLE } from "../styles/inputStyle";
import { DialogClose } from "@radix-ui/react-dialog";

export default function FeedBack() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className={clsx("rounded-lg bg-secondary p-1")}>
          Feedback
        </button>
      </DialogTrigger>

      <DialogContent
        className={clsx(
          "fixed inset-0 m-auto  flex max-h-72 max-w-[445px] flex-col  overflow-y-auto border-none bg-secondary p-4  outline-none",
        )}
      >
        <DialogTitle className="mb-2 mt-3"> Leave some feedback 😀</DialogTitle>

        <form>
          <textarea
            className={clsx(INPUT_STYLE, "w-full ")}
            placeholder="Leave some feedback on the code-snippet feature to help improve the  experience"
            rows={4}
          />
        </form>
        <DialogFooter>
          <DialogClose
            type="submit"
            className="w-full rounded-lg border border-secondaryA p-2 hover:text-secondary "
          >
            Skip
          </DialogClose>
          <button
            type="submit"
            className=" w-full rounded-lg bg-secondaryA p-2 hover:bg-primary"
          >
            Submit
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
