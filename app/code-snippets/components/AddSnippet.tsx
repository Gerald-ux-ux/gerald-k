"use client";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

type AddSnippetsProps = {
  isAuth: boolean;
  message?: string;
};

export default function AddSnippet({ message, isAuth }: AddSnippetsProps) {
  const router = useRouter();
  const handleUploadSnippetFrom = () => {
    if (isAuth === false) {
      router.push("/auth/login?message=Login to add a snippet");
    } else {
      router.push("/code-snippets/add");
    }
  };
  return (
    <>
      <div className="w-44">
        <button
          onClick={handleUploadSnippetFrom}
          data-tooltip-id="my-tooltip-1"
          className="rounded-lg bg-secondaryA p-1.5 w-full text-sm text-primary hover:text-secondary md:p-2 md:text-base"
        >
          Add a snippet
        </button>

        <ReactTooltip
          id="my-tooltip-1"
          place="top"
          content={message}
          style={{ borderRadius: "8px" }}
        />
      </div>
    </>
  );
}
