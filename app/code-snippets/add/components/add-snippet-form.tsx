"use client";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";

const inputClass =
  "w-full rounded-md border border-primary bg-secondary p-2 focus:border-none";
const editorClass = "rounded-lg p-4";

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
        <Editor
          className="rounded-lg"
          height="25vh"
          theme="vs-dark"
          defaultLanguage="javascript"
          defaultValue="//Hello world!"
        />

        {/* <span className="mt-12 w-full border-t border-primary bg-secondary">
          Select Language
        </span> */}
      </span>
    </form>
  );
}
