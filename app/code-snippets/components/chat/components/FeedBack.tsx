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
import useSubmitFeedback from "../hooks/useSubmitFeedback";
import { useFormStatus } from "react-dom";
import { IoChatbubblesOutline } from "react-icons/io5";

import { useState } from "react";
import { ToolTip } from "@/components/custom/tooltip";
import { UserInfo } from "@/app/types/typings";
type Props = {
  user: UserInfo;
};

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className={clsx(
        " mt-4 w-full rounded-lg bg-secondaryA p-2 hover:bg-primary",
        pending ? "cursor-not-allowed " : "",
      )}
    >
      Submit
    </button>
  );
}
export default function FeedBack({ user }: Props) {
  const { open, setOpen, handleSubmit } = useSubmitFeedback({ user });

  const [isTipOpen, setIsTipOpen] = useState(false);

  const openToolTip = () => {
    setIsTipOpen(!isTipOpen);
  };

  return (
    <Dialog  open={open} onOpenChange={() => setOpen(!open)}>
      <ToolTip content="Leave some feedback">
        <DialogTrigger asChild>
          <button className={clsx("")}>
            <IoChatbubblesOutline className="text-xl" />
          </button>
        </DialogTrigger>
      </ToolTip>

      <DialogContent
        className={clsx(
          "fixed inset-0  m-auto  flex max-h-80 max-w-[445px] flex-col  overflow-y-auto border-none bg-secondary p-4  outline-none",
        )}
      >
        <DialogTitle className="mb-2 mt-3"> Leave some feedback 😀</DialogTitle>

        <form action={handleSubmit}>
          <textarea
            className={clsx(INPUT_STYLE, "w-full ")}
            placeholder="Leave some feedback on the code-snippet feature to help improve the  experience"
            rows={4}
            name="text"
          />
          <SubmitBtn />
        </form>

        <DialogClose
          type="submit"
          className="w-full rounded-lg border border-secondaryA p-2 hover:text-secondary "
        >
          Skip
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
