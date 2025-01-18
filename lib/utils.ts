import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function reconstructURL(url: string[]) {
  const reconURL = url.map(url => decodeURIComponent(url))
  return reconURL.join("/")
}
