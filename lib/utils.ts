import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function formatSingleView(idViews: number) {
  if (idViews === 1) {
    return idViews + " view"
  } else if (idViews > 1) {
    return idViews + " views";
  } else {
    return "No views";
  }
}

export function parseServerActionResp<T>(response: T) {
  return JSON.parse(JSON.stringify(response));
}
