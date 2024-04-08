"use client";
import AddEditorBtn from "@/app/code-snippets/add/components/add-editor";
import CodeEditor from "@/app/code-snippets/add/components/code-editor";
import useUploadSnippet from "@/app/code-snippets/add/components/hooks/useUploadSnippet";
import ErrorMessage from "./error-message";
import BtnLoader from "../ui/btn-loader";
import { useFormStatus } from "react-dom";
import { AUTH_BTN } from "@/app/auth/styles/authStyles";
import clsx from "clsx";

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
export default function EditDialogForm() {
  const {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleCodeChange,
    theme,
    handleDelete,
    handleSubmit,
    handleAdd,
    message,
  } = useUploadSnippet();
  return (
    <form action="" className="flex w-full flex-col gap-2 py-4">
      <input
        name="title"
        type="text"
        placeholder="Title"
        required
        className={inputClass}
      />
      <textarea
        rows={3}
        cols={5}
        name="description"
        required
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

      {message ? <ErrorMessage message={message} /> : null}

      <Button />
    </form>
  );
}
