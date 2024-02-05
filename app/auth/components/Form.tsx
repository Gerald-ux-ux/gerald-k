"use client";

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
    <div className="flex  w-full flex-col  gap-4  ">
      {inputs.map((input, i) => (
        <input
          value={values[input.name]}
          onChange={(e) => onChange(input.name, e.target.value)}
          className="appearance-none rounded-md border border-primary bg-secondary p-1.5 shadow-none focus:border-transparent  focus:outline-none focus:ring-1  focus:ring-current md:p-2"
          key={i}
          {...input}
        />
      ))}
    </div>
  );
}

export default Form;
