"use client";

import { deleteSnippet, getCodeSnippets } from "@/app/code-snippets/actions/action";
import { useParams, usePathname } from "next/navigation";
import toast from "react-hot-toast";

type Props = {
  setOpen: (value: boolean) => void;
  id: string;
};
export default function useDelete({ setOpen, id }: Props) {
  const objId = useParams();
  async function handleDelete(formData: FormData) {
    formData.append("id", String(id));

    const res = await deleteSnippet(id, objId.slug);


    console.log("res", res);
    if (res?.success) {
      setOpen(false);
      // getCodeSnippets()
    } else {
      setOpen(true);
      toast.error(res?.message);
    }
  }

  return { handleDelete };
}
