"use client";

import { useRouter } from "next/navigation";
import { Tooltip as ReactTooltip } from "react-tooltip";

// Need a way of knowing whether the user is logged in or not
// If logged in show the modal
// if not logged in redirect to the auth log the user in then show the modal again

export default function AddSnippet({ message }: { message: string }) {
  const handleUploadSnippetFrom = () => {};

  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push("/auth/login");
        }}
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
  );
}
