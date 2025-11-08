import localFont from "next/font/local"

export const sfproText = localFont({
  // biome-ignore format: preserve array layout
  src: [
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Ultralight.otf", weight: "100", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Thin.otf", weight: "200", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Light.otf", weight: "300", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Regular.otf", weight: "400", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Medium.otf", weight: "500", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Semibold.otf", weight: "600", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Bold.otf", weight: "700", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Heavy.otf", weight: "800", style: "normal"},
    {path: "../../public/fonts/SFProText/SF-Pro-Text-Black.otf", weight: "900", style: "normal"},
  ],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-sfpro-text",
})
