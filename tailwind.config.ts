import type { Config } from "tailwindcss"

import { fontPlugin } from "./lib/custom-tailwind-plugin"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "grey-1": "hsl(var(--grey-1))",
        "grey-2": "hsl(var(--grey-2))",
        "grey-3": "hsl(var(--grey-3))",
        "grn-1": "hsl(var(--grn-1))",
        "grn-2": "hsl(var(--grn-2))",
        "grn-neon": "hsl(var(--grn-neon))",
        "brand-green": "hsl(var(--brand-green))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      spacing: {
        dvh: "100dvh",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        mona: ["var(--font-mona)", "sans-serif"],
        gambarino: ["var(--font-gambarino)", "serif"],
        red: ["var(--font-red)", "serif"],
        redI: ["var(--font-redI)", "serif"],
        red10: ["var(--font-red10)", "serif"],
        red10I: ["var(--font-red10I)", "serif"],
        red20: ["var(--font-red20)", "serif"],
        red20I: ["var(--font-red20I)", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate"), fontPlugin],
}
export default config
