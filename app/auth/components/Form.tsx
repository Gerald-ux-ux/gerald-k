"use client";

import { INPUT_STYLE } from "@/app/code-snippets/styles/inputStyle";
import { getRandomValues } from "crypto";
import React from "react";

type InputConfig = {
  placeholder: string;
  type: string;
  name: string;
  value: string;
};

type FormProps = {
  inputs: InputConfig[];
  values: { [key: string]: string };
  onChange: (name: string, value: string) => void;
};

function Form({ inputs, values, onChange }: FormProps) {
  return (
    <form className="flex  w-full flex-col  gap-4  ">
      {inputs.map((input, i) => (
        <input
          value={values[input.name]}
          onChange={(e) => onChange(input.name, e.target.value)}
          className={INPUT_STYLE}
          key={i}
          placeholder={input.placeholder}
          type={input.type}
          name={input.name}
        />
      ))}
    </form>
  );
}

export default Form;
