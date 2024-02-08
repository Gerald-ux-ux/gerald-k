"use client";
import { INPUT_STYLE } from "@/app/code-snippets/styles/inputStyle";
import React, { useState } from "react";
import { loginUser } from "../actions/actions";

// @ts-ignore
import { experimental_useFormStatus as useFormStatus } from "react-dom";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="w-full rounded-lg bg-secondary p-3 text-center text-primary hover:bg-tertiary hover:text-secondary"
    >
      {pending ? "Loading..." : "Login"}
    </button>
  );
}

function Form() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (formData: FormData) => {
    const res = await loginUser(formData);
    console.log("res is", res);
    if (res?.success === false) {
      setMessage(
        res?.message || "An unexpected error occurred, please try again",
      );
    } else {
      setMessage(res);
    }
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

      <Button />

      {message ? (
        <div className="animate-in truncate rounded-lg bg-error p-2 text-center text-base text-error">
          <p className="w-1">{message}</p>
        </div>
      ) : null}
    </form>
  );
}

export default Form;
