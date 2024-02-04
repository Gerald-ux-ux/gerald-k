import { PAGE_HEADER } from "@/lib/uiConstants";
import React from "react";

function TagLine() {
  return (
    <div className="flex flex-col gap-2 ">
      <h1 className={PAGE_HEADER}>Code-Snippets</h1>
      <h3 className="tracking-tight text-secondary">
        Code faster with shared snippet library for developers
      </h3>
    </div>
  );
}

export default TagLine;
