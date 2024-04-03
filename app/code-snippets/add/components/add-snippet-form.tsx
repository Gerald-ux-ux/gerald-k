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
import { useState } from "react";
import { values } from "./languages";
import AddEditor from "./add-editor";
import toast from "react-hot-toast";

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
  const theme = useTheme();
  const [language, setLanguage] = useState<{ label: string; value: string }>(
    values[0],
  );

  function onSelect(language: { label: string; value: string }) {
    setLanguage(language);
  }

  const [editor, setEditor] = useState([
    {
      heading: "",
      lang: "",
      codeEditor: "",
    },
  ]);

  const handleAdd = (e: any) => {
    e.preventDefault();
    toast.success("Added");
    setEditor([...editor, { heading: "", lang: "", codeEditor: "" }]);
  };

  const handleDelete = (id: number, e: any) => {
    e.preventDefault();
    setEditor(editor.filter((_, i) => i !== id));
  };

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

      <div className="flex max-h-[800px]  flex-col gap-6 overflow-x-auto  p-2 ">
        {editor.map((edit, i) => (
          <div key={i} className=" my-2 ">
            <input
              type="text"
              className="w-full rounded-md rounded-b-none border-b border-primary bg-secondary p-2 focus:border-none"
              value={edit.heading}
              placeholder="Code heading"
            />
            <Editor
              value={edit.codeEditor}
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

              {i === 0 ? null : (
                <button onClick={(e) => handleDelete(i, e)} className="flex  ">
                  <TrashIcon width={20} height={20} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      <AddEditor handleAdd={handleAdd} />
      <input
        type="text"
        className={inputClass}
        placeholder="Add tags up to 3 max (e.g JavaScript, Python, React.Js)"
      />

      <Button />
    </form>
  );
}
