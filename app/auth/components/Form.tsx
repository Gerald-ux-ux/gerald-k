"use client";

import React from "react";

type InputConfig = {
  placeholder: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type FormProps = {
  inputs: InputConfig[];
};
function Form({ inputs }: FormProps) {
  return (
    <div className="flex  w-full flex-col  gap-4  ">
      {inputs.map((input, i) => (
        <input
          className="appearance-none rounded-md border border-primary bg-secondary p-1.5 shadow-none focus:border-transparent  focus:outline-none focus:ring-1  focus:ring-current md:p-2"
          key={i}
          {...input}
        />
      ))}
    </div>
  );
}

export default Form;
