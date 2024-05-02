
"use client"
import { useEffect, useState } from "react";
import { SlInfo } from "react-icons/sl";

type CustomMessageProps = {
  message?: string;
  duration?: number;
};

export default function ClientInfo({ message, duration }: CustomMessageProps) {
  const [showMessage, setShowMessage] = useState(true);

  const handleDismiss = () => {
    setShowMessage(false);
  };

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setShowMessage(false);
      }, duration);

      return () => clearTimeout(timeoutId);
    }, []);

  return (
    <div className="pointer-events-auto mb-6 flex  w-full max-w-md  rounded-lg bg-secondary shadow-lg ring-black ring-opacity-5 md:mb-12">
      <div className="w-0 flex-1 p-4">
        <div className="flex items-start">
          <div className="ml-3 flex w-full flex-1 items-center gap-2">
            <SlInfo className="text-primary" />
            <p className="text-sm font-bold text-primary">
              {message && message}
            </p>
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
  );
}
