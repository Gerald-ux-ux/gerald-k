"use client";

import { submitFeedBack } from "@/app/code-snippets/actions/action";
import { useState } from "react";
import toast from "react-hot-toast";

type Props = {
  isAuth: boolean;
};
export default function useSubmitFeedback({ isAuth }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>("Anonymous");

  if (isAuth !== false) {
    // do something
  }

  const handleSubmit = async (formData: FormData) => {
    formData.set("from", user);

    const res = await submitFeedBack(formData);

    if (res.success) {
      setOpen(false);
    } else {
      setOpen(true);
      toast.error(res.message);
    }
  };

  return { open, setOpen, handleSubmit };
}
