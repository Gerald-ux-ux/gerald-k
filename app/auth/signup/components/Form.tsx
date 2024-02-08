"use client";

import { INPUT_STYLE } from "@/app/code-snippets/styles/inputStyle";
import { AUTH_BTN } from "../../styles/authStyles";
import { registerUser } from "../../actions/actions";
import { redirect } from "next/navigation";
import { useState } from "react";

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import clsx from "clsx";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={AUTH_BTN}>
      {pending ? "Loading..." : "Sign Up"}
    </button>
  );
}
export default function Form() {
  const [message, setMessage] = useState<String>("");
  const [showPass, setShowPass] = useState<boolean>(false);

  async function handleSubmit(formData: FormData) {
    const res = await registerUser(formData);
    if (res.success) {
      redirect("/code-snippets");
    } else if (res?.success === false) {
      setMessage(
        res?.message || "An unexpected error occurred, please try again",
      );
    } else {
      setMessage(res);
    }
  }
  return (
    <form action={handleSubmit} className="flex w-full flex-col gap-4">
      <input
        type="text"
        className={INPUT_STYLE}
        name="name"
        placeholder="Username"
        required
      />
      <input
        type="text"
        className={INPUT_STYLE}
        name="email"
        placeholder="Email"
        required
      />
      <span className="relative w-full items-center  ">
        <input
          type={showPass ? "text" : "password"}
          className={clsx(INPUT_STYLE, "w-full ")}
          name="password"
          placeholder="Password"
          required
        />
        <span
          className="absolute right-8 top-3 cursor-pointer"
          onClick={() => setShowPass(!showPass)}
        >
          {showPass ? <FaEyeSlash /> : <FaRegEye />}
        </span>
      </span>

      {message ? (
        <div className="w-[400px]  animate-in rounded-lg bg-error p-2 text-center text-base text-error">
          <p className="text-center">{message}</p>
        </div>
      ) : null}
      <Button />
    </form>
  );
}
