"use client";

import Link from "@/components/ui/Link";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  action: () => void;
  disabled: boolean;
  loading: boolean;
};

export default function Button({
  label,
  action,
  disabled,
  loading,
}: ButtonProps) {
  return (
    <button
      onClick={action}
      disabled={disabled}
      className={clsx(
        disabled ? "cursor-not-allowed opacity-50" : "",
        loading ? "cursor-progress" : "",
        "w-full rounded-lg bg-secondary p-3 text-center text-primary hover:bg-tertiary hover:text-secondary",
      )}
    >
      {label}
    </button>
  );
}
