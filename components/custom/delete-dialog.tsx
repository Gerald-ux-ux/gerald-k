"use client";

import clsx from "clsx";
import { useFormStatus } from "react-dom";
import BtnLoader from "../ui/btn-loader";
import useDelete from "@/app/code-snippets/components/modal/hooks/useDelete";

type Props = {
  setOpen: (value: boolean) => void;
  actionItem: string;
  id: any;
  snippet: string;
};

function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <span className="flex w-full  gap-2">
      <button
        className={clsx(
          "flex  items-center gap-2 rounded-lg bg-secondaryA p-2 hover:bg-primary",
          pending ? "bg-opacity-50" : "",
        )}
      >
        {pending ? <BtnLoader /> : "Delete"}
      </button>
    </span>
  );
}
export default function DeleteDialog({
  setOpen,
  actionItem,
  id,
  snippet,
}: Props) {
  const { handleDelete } = useDelete({
    setOpen,
    id,
    snippet
  });
  return (
    <form action={handleDelete} className="flex  h-full  flex-col gap-2">
      <span>
        This will delete the current <strong>{actionItem}</strong>{" "}
      </span>
      <span className="flex-grow " />
      <span className="mb-2 flex  flex-col justify-end gap-4">
        <span className="flex  gap-2">
          <button
            onClick={() => setOpen(false)}
            className="rounded-lg border border-primary p-2 hover:bg-primary "
          >
            Close
          </button>

          <SubmitBtn />
        </span>
      </span>
    </form>
  );
}
