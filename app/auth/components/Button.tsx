"use client";
import clsx from "clsx";

type ButtonProps = {
  label: string;
  action?: () => void;
  disabled?: boolean;
  loading?: boolean;
};

export default function Button({ label }: ButtonProps) {
  return (
    <button className="w-full rounded-lg bg-secondary p-3 text-center text-primary hover:bg-tertiary hover:text-secondary">
      {label}
    </button>
  );
}
