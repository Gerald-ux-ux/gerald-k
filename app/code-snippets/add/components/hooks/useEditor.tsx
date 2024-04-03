"use client";

import { useState } from "react";
import { values } from "../languages";

export default function useEditor() {
  const [value, setValue] = useState<string>("");
  const [language, setLanguage] = useState<{label : string, value: string}>(values[0]);

  function onSelect(language: {label: string, value: string}) {
    setLanguage(language);
  }
  return {
    language,
    onSelect,
  };
}
