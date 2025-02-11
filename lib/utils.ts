import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { TGameCard, TImage } from "./types"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function wait(milliseconds: number) {
  return new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

export default function gamifyImages(images: TImage[]) {
  const shuffledImages = shuffleArray([...images, ...images])
  const cards: TGameCard[] = shuffledImages.map((image, idx) => ({
    id: `${image.id}_${idx}`,
    url: image.url,
    isFlipped: false,
    isMatched: false,
  }))

  return cards
}
