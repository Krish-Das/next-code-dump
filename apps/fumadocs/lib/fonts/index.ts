import { Instrument_Serif, JetBrains_Mono } from "next/font/google"
import localFont from "next/font/local"

export const sfproText = localFont({
  // biome-ignore format: preserve array layout
  src: [
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Ultralight.otf", weight: "100", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Thin.otf", weight: "200", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Light.otf", weight: "300", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Regular.otf", weight: "400", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Medium.otf", weight: "500", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Semibold.otf", weight: "600", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Bold.otf", weight: "700", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Heavy.otf", weight: "800", style: "normal"},
    {path: "../../public/fonts/sf-pro-text/SF-Pro-Text-Black.otf", weight: "900", style: "normal"},
  ],
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica",
    "Arial",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "sans-serif",
  ],
  display: "swap",
  variable: "--font-sfpro-text",
})

export const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  display: "swap",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  fallback: [
    "Georgia",
    "Times New Roman",
    "Times",
    "serif",
    "Apple Color Emoji",
    "Segoe UI Emoji",
  ],
})

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  fallback: [
    "SFMono",
    "Menlo",
    "Monaco",
    "Consolas",
    "ui-monospace",
    "monospace",
  ],
})
