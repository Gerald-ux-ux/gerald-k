"use client";

import { useState } from "react";
import { values } from "../languages";
import { useTheme } from "next-themes";
import { handleUpload } from "@/app/code-snippets/actions/action";

export default function useUploadSnippet() {
  const theme = useTheme();

  const [editor, setEditor] = useState([
    {
      heading: "",
      lang: values[0],
      codeEditor: "",
    },
  ]);

  const handleLanguageSelect = (
    index: number,
    language: { label: string; value: string },
  ) => {
    const newEditors = [...editor];
    newEditors[index].lang = language;
    setEditor(newEditors);
  };

  const handleHeadingChange = (index: number, newHeading: string) => {
    const newEditors = [...editor];
    newEditors[index].heading = newHeading;
    setEditor(newEditors);
  };
  const handleAdd = (e: any) => {
    console.log("run");
    e.preventDefault();
    setEditor([...editor, { heading: "", lang: values[0], codeEditor: "" }]);
  };

  const handleCodeChange = (index: number, newCode: string) => {
    const newEditors = [...editor];
    newEditors[index].codeEditor = newCode;
    setEditor(newEditors);
  };

  const handleDelete = (id: number, e: any) => {
    e.preventDefault();
    setEditor(editor.filter((_, i) => i !== id));
  };


  console.log("editor", editor)
  const handleSubmit = async (formData: FormData) => {
    const code = formData.set("code", JSON.stringify(editor));

    console.log("code", code);

    const res = await handleUpload(formData, editor);
    return res;
  };

  return {
    editor,
    handleLanguageSelect,
    handleHeadingChange,
    handleSubmit,
    handleAdd,
    theme,
    handleCodeChange,
    handleDelete,
  };
}
