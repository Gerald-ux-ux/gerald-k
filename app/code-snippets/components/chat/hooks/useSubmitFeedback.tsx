"use client";

import { submitFeedBack } from "@/app/code-snippets/actions/action";
import { useState } from "react";
import toast from "react-hot-toast";
import { UserInfo } from "@/app/types/typings";
type Props = {
  user: UserInfo;
};
export default function useSubmitFeedback({ user: userEmail }: Props) {
  const [open, setOpen] = useState<boolean>(false);
  const [user] = useState<string>(userEmail?.email || "username@gmail.com");

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
