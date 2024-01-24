import { twMerge } from "tailwind-merge";

export const isClient =
  typeof window !== "undefined" && typeof document !== "undefined";

export function noop() {}

// TODO: this should from @osn/common
export function capitalize(string = "") {
  return string.slice(0, 1).toUpperCase() + string.slice(1);
}

export function waitFor(ms = 0) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function cn(...input) {
  return twMerge(...input);
}
