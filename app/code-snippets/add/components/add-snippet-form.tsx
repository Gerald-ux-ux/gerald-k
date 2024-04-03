"use client";
import { AUTH_BTN } from "@/app/auth/styles/authStyles";
import BtnLoader from "@/components/ui/btn-loader";
import { TrashIcon } from "@heroicons/react/24/outline";
import Editor from "@monaco-editor/react";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import LanguageSelector from "./language-selector";
import AddEditor from "./add-editor";
import useUploadSnippet from "./hooks/useUploadSnippet";
import CodeEditor from "./code-editor";

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
    <form action={handleSubmit} className="flex w-full flex-col gap-4">
      <input name="title" type="text" placeholder="Title" className={inputClass} />
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
      <AddEditor handleAdd={handleAdd} />
      <input
        type="text"
        name="tags"
        className={inputClass}
        placeholder="Add tags up to 3 max (e.g JavaScript, Python, React.Js)"
      />
      <Button />
    </form>
  );
}
