"use client";
import { AUTH_BTN } from "@/app/auth/styles/authStyles";
import BtnLoader from "@/components/ui/btn-loader";

import { useFormStatus } from "react-dom";
import clsx from "clsx";

import useUploadSnippet from "./hooks/useUploadSnippet";
import CodeEditor from "./code-editor";
import AddEditorBtn from "./add-editor";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
const inputClass =
  "w-full rounded-md border border-primary bg-secondary p-2 focus:border-none";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={clsx(AUTH_BTN, "mt-4")}>
      {pending ? <BtnLoader /> : "Post snippet 😀"}
    </button>
  );
}
export default function Form({user}: {user : any}) {
  const {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleCodeChange,
    theme,
    handleDelete,
    handleSubmit,
    handleAdd,
  } = useUploadSnippet({user});
  return (
    <form action={handleSubmit} className="flex w-full flex-col gap-4 py-4">
      <input
        name="title"
        type="text"
        placeholder="Title"
        className={inputClass}
      />
      <textarea
        rows={3}
        cols={5}
        name="description"
        placeholder="Description"
        className={inputClass}
      />
      <span className="border border-primary" />
      <CodeEditor
        editor={editor}
        handleLanguageSelect={handleLanguageSelect}
        handleHeadingChange={handleHeadingChange}
        handleCodeChange={handleCodeChange}
        theme={theme}
        handleDelete={handleDelete}
      />
      <AddEditorBtn handleAdd={handleAdd} />
      <input
        type="text"
        className={inputClass}
        placeholder="Add a tag (e.g JavaScript, Python, React.Js)"
        name="tags"
      />
      {/* <Select onOpenChange={(option: any) => handleSelect(option.value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Add a tag (e.g JavaScript, Python, React.Js)" />
        </SelectTrigger>
        <SelectContent className="border-none bg-secondary">
          <SelectGroup>
            {values.map((option) => (
              <SelectItem
                className="w-full rounded-md p-2 hover:bg-primary"
                key={option.label}
                value={option.value}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select> */}

      <Button />
    </form>
  );
}
