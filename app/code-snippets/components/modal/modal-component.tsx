
"use client";


import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import clsx from "clsx";
import { GoArrowDownLeft } from "react-icons/go";

type Props = {
  triggerButton: string;
  dialogTitle: string;
  open: boolean;
  setOpen: (value: boolean) => void;
  formComponent?: React.ReactNode;
  className?: string;
  maxHeight?: string;
  icon?: React.ReactElement;
  maxWidth?: string;
};
export default function Modal({
  triggerButton,
  dialogTitle,
  formComponent,
  setOpen,
  icon,
  maxHeight,
  open,
  maxWidth,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(!open)}>
      <DialogTrigger asChild>
        <button
          className={clsx(
            "flex w-full items-center justify-start gap-2 rounded-md outline-none  hover:bg-secondary   ",
          )}
        >
          {icon}
          {triggerButton}
        </button>
      </DialogTrigger>
      <DialogContent
        className={clsx(
          "fixed inset-0 m-auto  flex flex-col overflow-y-auto border-none   bg-secondary p-8  outline-none",
          maxHeight,
          maxWidth,
        )}
      >
        <DialogTitle className="mb-2 mt-3">{dialogTitle}</DialogTitle>

        {formComponent}
      </DialogContent>
    </Dialog>
  );
}
