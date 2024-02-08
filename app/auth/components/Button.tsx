"use client";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  disabled?: boolean;
  loading?: boolean;
};

export default function Button({ label, disabled, loading }: ButtonProps) {
  return (
    <button
      className={clsx(
        "w-full rounded-lg bg-secondary p-3 text-center text-primary hover:bg-tertiary hover:text-secondary",
        { "cursor-not-allowed opacity-50": disabled || loading },
      )}
      disabled={disabled || loading}
    >
      {loading ? "Loading..." : label}
    </button>
  );
}
