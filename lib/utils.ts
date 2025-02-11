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

export default function gamifyImages(images: TImage[]) {
  const shuffledImages = [...images, ...images]
  const cards: TGameCard[] = shuffledImages.map((image, idx) => ({
    id: `${image.id}_${idx}`,
    url: image.url,
    isFlipped: false,
    isMatched: false,
  }))

  return cards
}
