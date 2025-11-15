import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addCommas(x: any) {
  if (x === undefined) return;
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function capsFirstLetter(x: any) {
  return x?.charAt(0)?.toUpperCase() + x?.slice(1);
}

export function removeDuplicates(arr: any[]): string[] {
  return Array.from(new Set(arr));
}
