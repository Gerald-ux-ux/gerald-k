"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SlInfo } from "react-icons/sl";

function CustomMessage() {
  const [showMessage, setShowMessage] = useState(true);

  const params = useSearchParams();
  const text = params.get("message");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [text]);

  const handleDismiss = () => {
    setShowMessage(false);
  };

  if (!text) return;

  return (
    <>
      {showMessage && (
        <div className="pointer-events-auto mb-6 flex  w-full max-w-md  rounded-lg bg-secondary shadow-lg ring-black ring-opacity-5 md:mb-12">
          <div className="w-0 flex-1 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex w-full flex-1 items-center gap-2">
                <SlInfo className="text-primary" />
                <p className="text-sm font-bold text-primary">{text && text}</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-primary">
            <button
              onClick={handleDismiss}
              className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-secondary p-4 text-sm font-extrabold text-secondary hover:text-primary"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomMessage;
