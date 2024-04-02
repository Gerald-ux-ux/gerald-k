"use client";
import { AUTH_BTN } from "@/app/auth/styles/authStyles";
import BtnLoader from "@/components/ui/btn-loader";
import { PlusIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useFormStatus } from "react-dom";
import clsx from "clsx";

const inputClass =
  "w-full rounded-md border border-primary bg-secondary p-2 focus:border-none";
const editorClass = "rounded-lg p-4";

function Button() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} className={clsx(AUTH_BTN, "mt-4")}>
      {pending ? <BtnLoader /> : "Post snippet 😀"}
    </button>
  );
}
export default function Form() {
  return (
    <form action="" className="flex w-full flex-col gap-4">
      <input type="text" placeholder="Title" className={inputClass} />
      <textarea
        rows={3}
        cols={5}
        placeholder="Description"
        className={inputClass}
      />
      <span className="border border-primary" />

      <span className=" w-full p-2">
        <input
          type="text"
          className="w-full rounded-md border-t border-primary bg-secondary p-2 focus:border-none"
          placeholder="Code heading"
        />

        <Editor
          className="rounded-lg"
          height="25vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="//Hello world!"
        />

        <div className="flex w-full items-center justify-between rounded-md border-t border-primary bg-secondary p-2 focus:border-none">
          <span className="">Select Language</span>
          <button className="flex ">
            <TrashIcon width={20} height={20} />
          </button>
        </div>
      </span>
      <button className="flex items-center gap-2  text-primary">
        Add another snippet
        <PlusIcon width={20} height={20} />
      </button>

      <input
        type="text"
        className={inputClass}
        placeholder="Add tags up to 3 max (e.g JavaScript, Python, React.Js)"
      />

      <Button />
    </form>
  );
}
