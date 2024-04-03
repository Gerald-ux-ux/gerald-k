"use client";
import { AUTH_BTN } from "@/app/auth/styles/authStyles";
import BtnLoader from "@/components/ui/btn-loader";
import { PlusIcon } from "@heroicons/react/20/solid";
import { TrashIcon } from "@heroicons/react/24/outline";
import Editor from "@monaco-editor/react";
import { useFormStatus } from "react-dom";
import clsx from "clsx";
import { useTheme } from "next-themes";
import LanguageSelector from "./language-selector";
import useEditor from "./hooks/useEditor";
import { useEffect, useState } from "react";
import { values } from "./languages";

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
  const theme = useTheme();
  const [language, setLanguage] = useState<{ label: string; value: string }>(
    values[0],
  );

  function onSelect(language: { label: string; value: string }) {
    setLanguage(language);
  }


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
          className="w-full rounded-md rounded-b-none border-b border-primary bg-secondary p-2 focus:border-none"
          placeholder="Code heading"
        />

        <Editor
          className="bg-secondary p-2 "
          height="25vh"
          key={language.value}
          theme={theme.theme === "light" ? "vs-primary" : "vs-dark"}
          defaultLanguage={language.value}
          options={{
            minimap: {
              enabled: false,
            },
          }}
          defaultValue="/** Hello world! */"
        />

        <div className="flex w-full items-center justify-between rounded-md rounded-t-none border-t border-primary bg-secondary px-2 py-1  focus:border-none">
          <LanguageSelector onSelect={onSelect} language={language} />
          <button className="flex  ">
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
