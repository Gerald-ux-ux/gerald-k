"use client";
import { Editor } from "@monaco-editor/react";
import useUploadSnippet from "./hooks/useUploadSnippet";
import LanguageSelector from "./language-selector";
import { TrashIcon } from "@heroicons/react/20/solid";

type Props = {
  editor: any;
  handleLanguageSelect: any;
  handleHeadingChange: any;
  handleCodeChange: any;
  theme: any;
  handleDelete: any;
};
export default function CodeEditor({
  editor,
  handleLanguageSelect,
  handleHeadingChange,
  handleCodeChange,
  theme,
  handleDelete,
}: Props) {
  return (
    <div className="flex max-h-[800px]  flex-col gap-6 overflow-x-auto  p-2 ">
      {editor.map((edit: any, i: number) => (
        <div key={i} className="my-2">
          <input
            type="text"
            className="w-full rounded-md rounded-b-none border-b border-primary bg-secondary p-2 focus:border-none"
            value={edit.heading}
            onChange={(e) => handleHeadingChange(i, e.target.value)}
            placeholder="Code heading"
          />
          <Editor
            onChange={(newValue) =>
              newValue !== undefined && handleCodeChange(i, newValue)
            }
            value={edit.codeEditor}
            className="bg-secondary p-2"
            height="25vh"
            key={edit.lang.value}
            theme={theme.theme === "light" ? "vs-primary" : "vs-dark"}
            defaultLanguage={edit.lang.value}
            options={{
              minimap: {
                enabled: false,
              },
            }}
            defaultValue="/** Hello world! */"
          />
          <div className="flex w-full items-center justify-between rounded-md rounded-t-none border-t border-primary bg-secondary px-2 py-1 focus:border-none">
            <LanguageSelector
              onSelect={(language) => handleLanguageSelect(i, language)}
              language={edit.lang}
            />
            {i === 0 ? null : (
              <button onClick={(e) => handleDelete(i, e)} className="flex  ">
                <TrashIcon width={20} height={20} />
              </button>
            )}{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
