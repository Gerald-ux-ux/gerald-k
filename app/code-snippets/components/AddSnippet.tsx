"use client";

import { Tooltip as ReactTooltip } from "react-tooltip";

export default function AddSnippet({ message }: { message: string }) {
  return (
    <div>
      <button
        data-tooltip-id="my-tooltip-1"
        className="rounded-lg bg-secondaryA p-2 text-sm text-primary hover:text-secondary md:text-base"
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
  );
}
