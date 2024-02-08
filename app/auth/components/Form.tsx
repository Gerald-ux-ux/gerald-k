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
  return (
    <form
      action={(formData) => {
        loginUser(formData);
      }}
      className="flex  w-full flex-col  gap-4  "
    >
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

      {/* <button className="w-full rounded-lg bg-secondary p-3 text-center text-primary hover:bg-tertiary hover:text-secondary">
        login
      </button> */}

      {/* {error ? (
        <div className="animate-in rounded-lg bg-error p-2 text-center text-base text-error">
          <p>{error}</p>
        </div>
      ) : null} */}
      {/* <Button label="Login" /> */}
    </form>
  );
}

export default Form;
