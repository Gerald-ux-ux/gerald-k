"use client";
import { INPUT_STYLE } from "@/app/code-snippets/styles/inputStyle";
import React, { useState } from "react";
import { loginUser } from "../../actions/actions";
import { redirect } from "next/navigation";

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { AUTH_BTN } from "../../styles/authStyles";
import BtnLoader from "@/components/ui/btn-loader";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={AUTH_BTN}>
      {pending ? <BtnLoader/>  : "Login"}
    </button>
  );
}

function Form() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    // const res = await loginUser(formData);
    // if (res.success) {
    //   redirect("/code-snippets");
    // } else if (res?.success === false) {
    //   setMessage(
    //     res?.message || "An unexpected error occurred, please try again",
    //   );
    // } else {
    //   setMessage(res);
    // }
  };

  return (
    <form action={handleSubmit} className="flex  w-full flex-col  gap-4  ">
      <input
        type="text"
        name="email"
        className={INPUT_STYLE}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        className={INPUT_STYLE}
        placeholder="Password"
        required
      />
      {message ? (
        <div className="animate-in  truncate rounded-lg bg-error p-2 text-center text-base text-error">
          <p className="text-center">{message}</p>
        </div>
      ) : null}
      <Button />
    </form>
  );
}

export default Form;
