"use client";

import {
  deleteCode,
  deleteSnippet,
  getCodeSnippets,
} from "@/app/code-snippets/actions/action";
import { useParams, usePathname } from "next/navigation";
import toast from "react-hot-toast";

type Props = {
  setOpen: (value: boolean) => void;
  id: string;
  snippet: string;
};
export default function useDelete({ setOpen, id, snippet }: Props) {
  const objId = useParams();
  async function handleDelete(formData: FormData) {
    formData.append("id", String(id));

    if (snippet === "Object") {
      const res = await deleteCode(id);
      if (res.status === 200) {
        setOpen(false);
      } else {
        setOpen(true);
        toast.error(res?.message);
      }
    } else if (snippet === "Code") {
      const res = await deleteSnippet(id, objId.slug);

      console.log("res", res);
      if (res?.success) {
        setOpen(false);
      } else {
        setOpen(true);
        toast.error(res?.message);
      }
    }
  }

  return { handleDelete };
}
