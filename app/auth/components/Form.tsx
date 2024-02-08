"use client";

import { INPUT_STYLE } from "@/app/code-snippets/styles/inputStyle";
import React from "react";
import Button from "./Button";

type InputConfig = {
  placeholder: string;
  type: string;
  name: string;

};

type FormProps = {
  inputs: InputConfig[];
  loginUser: (formData: FormData) => Promise<void>;
};

function Form({ inputs, loginUser }: FormProps) {
  return (
    <form action={loginUser} className="flex  w-full flex-col  gap-4  ">
      {inputs.map((input, i) => (
        <input
          className={INPUT_STYLE}
          key={i}
          placeholder={input.placeholder}
          type={input.type}
          name={input.name}
        />
      ))}
      <Button label="Login" />
    </form>
  );
}

export default Form;
