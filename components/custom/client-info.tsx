"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SlInfo } from "react-icons/sl";
import clsx from 'clsx';

type CustomMessageProps = {
  message?: string;
  duration?: number;
};

export default function ClientInfo({ message, duration }: CustomMessageProps) {
  const [showMessage, setShowMessage] = useState(true);
  const theme = useTheme()

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
    <>
      {showMessage && (
        <div
          className={clsx(
            "pointer-events-auto flex w-full  bg-[#282219]  shadow-lg ring-black ring-opacity-5 md:mb-4",
          )}
        >
          <div className="flex w-full p-6">
            <div className="flex w-full items-start">
              <div className=" flex w-full  items-center gap-4">
                <SlInfo className="text-xl text-secondary" />
                <p className="text-sm  font-bold text-white">
                  {message && message}
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="flex w-44  border-l border-primary ">
            <button
              onClick={handleDismiss}
              className="flex w-full items-center justify-center border-l border-secondary  p-4 text-sm font-extrabold text-white hover:border-gray-200 hover:text-gray-200"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </>
  );
}
