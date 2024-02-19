"use client";

import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";

type AddSnippetsProps = {
  isAuth: { name: string; value: string } | undefined;
  message: string;
};

export default function AddSnippet({ message, isAuth }: AddSnippetsProps) {
  const handleUploadSnippetFrom = () => {
    if (isAuth) {
      router.push("/code-snippets/add");
    } else {
      router.push("/auth/login");
    }
  };

  const router = useRouter();

  return (
    <>
      <div>
        <button
          onClick={handleUploadSnippetFrom}
          data-tooltip-id="my-tooltip-1"
          className="rounded-lg bg-secondaryA p-1.5 text-sm text-primary hover:text-secondary md:p-2 md:text-base"
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
