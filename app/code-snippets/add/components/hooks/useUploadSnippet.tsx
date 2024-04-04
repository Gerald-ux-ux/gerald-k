"use client";

import { useState } from "react";
import { values } from "../languages";
import { useTheme } from "next-themes";
import { postSnippet } from "@/app/code-snippets/actions/action";

export default function useUploadSnippet() {
  const theme = useTheme();

  // Code editor state
  const [editor, setEditor] = useState([
    {
      heading: "",
      lang: values[0],
      code: "",
    },
  ]);
  const user_id = "535434";

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
    e.preventDefault();
    setEditor([...editor, { heading: "", lang: values[0], code: "" }]);
  };

  const handleCodeChange = (index: number, newCode: string) => {
    const newEditors = [...editor];
    newEditors[index].code = newCode;
    setEditor(newEditors);
  };

  const handleDelete = (id: number, e: any) => {
    e.preventDefault();
    setEditor(editor.filter((_, i) => i !== id));
  };

  const handleSubmit = async (formData: FormData) => {
    const res = await postSnippet(formData, editor, user_id);
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
