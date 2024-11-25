import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(milliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

// eslint-disable-next-line no-unused-vars
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T & { cancel: () => void } {
  let timeout: ReturnType<typeof setTimeout> | null = null

  const debounced = (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }

  debounced.cancel = () => {
    if (timeout) {
      clearTimeout(timeout)
    }
  }

  return debounced as T & { cancel: () => void }
}

export function splitIntoWords(input: string): string[] {
  // Handle empty string case
  if (!input.trim()) {
    return []
  }

  // Split the string by spaces while preserving spaces
  const words: string[] = []
  let currentWord = ""

  for (let i = 0; i < input.length; i++) {
    currentWord += input[i]

    // If we find a space or we're at the end of the string
    if (input[i] === " " || i === input.length - 1) {
      words.push(currentWord)
      currentWord = ""
    }
  }

  return words
}
