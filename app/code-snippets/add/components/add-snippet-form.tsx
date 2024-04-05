"use client";
import { AUTH_BTN } from "@/app/auth/styles/authStyles";
import BtnLoader from "@/components/ui/btn-loader";
import { TrashIcon } from "@heroicons/react/24/outline";
import Editor from "@monaco-editor/react";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import LanguageSelector from "./language-selector";
import useUploadSnippet from "./hooks/useUploadSnippet";
import CodeEditor from "./code-editor";
import AddEditorBtn from "./add-editor";
import { values } from "./languages";
import { customDropDownStyle } from "@/app/styles/style";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
export default function Form() {
  const {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleCodeChange,
    theme,
    handleDelete,
    handleSubmit,
    handleAdd,
  } = useUploadSnippet();
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
      <Select>
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
      </Select>
      <span className="">
        {/* <Select
          placeholder="Add tags (e.g JavaScript, Python, React.Js)"
          isMulti
          name="tags"
          options={values}
          styles={customDropDownStyle}
        /> */}
      </span>

      <Button />
    </form>
  );
}
