"use client";
import React, { useEffect } from "react";
import { Toaster, toast } from "react-hot-toast";
import { SlInfo } from "react-icons/sl";

type ToastProps = {
  message: string;
};

function Toast({ message }: ToastProps) {
  useEffect(() => {
    toast.custom((t) => (
      <div
        className={`${
          t.visible ? "animate-in" : "animate-in-reverse"
        } pointer-events-auto flex w-full max-w-md rounded-lg bg-secondary shadow-lg ring-black ring-opacity-5`}
      >
        <div className="w-0 flex-1 p-4">
          <div className="flex items-start">
            <div className="ml-3 flex w-full flex-1 items-center gap-2">
              <SlInfo className="text-primary" />
              <p className="text-md font-bold text-primary">{message}</p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-primary">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="flex w-full items-center justify-center rounded-none rounded-r-lg border border-secondary p-4 text-sm font-extrabold text-secondary hover:text-primary"
          >
            Dismiss
          </button>
        </div>
      </div>
    ));
  }, [message]);

  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{ duration: 3000 }}
    />
  );
}

export default Toast;
