import React from "react";

function BetaTag() {
  return (
    <div className="flex items-center gap-1 mt-1 hover:bg-secondary text-sm text-link">
      <span className="bg-[#0070f3] h-3 w-3 rounded-full  border p-1" />
      Beta
    </div>
  );
}

export default BetaTag;
