import plugin from "tailwindcss/plugin"

const fontPlugin = plugin(function ({ addUtilities, matchUtilities, theme }) {
  const fontStretch = {
    75: "75%",
    80: "80%",
    90: "90%",
    100: "100%",
    110: "110%",
    120: "120%",
    125: "125%",
  }

  const fontSlant = {
    5: "5deg",
    12: "12deg",
  }

  const stretchUtilities = Object.entries(fontStretch).reduce(
    (acc: Record<string, { "font-stretch": string }>, [key, value]) => {
      acc[`.font-stretch-${key}`] = { "font-stretch": value }
      return acc
    },
    {}
  )

  const slantUtilities = Object.entries(fontSlant).reduce(
    (acc: Record<string, { "font-style": string }>, [key, value]) => {
      acc[`.font-slant-${key}`] = { "font-style": `oblique ${value}` }
      return acc
    },
    {}
  )

  addUtilities({
    ...stretchUtilities,
    ...slantUtilities,
    ".font-feature-ss01": { "font-feature-settings": "'ss01' on" },
    ".font-feature-ss02": { "font-feature-settings": "'ss02' on" },
    ".font-feature-ss03": { "font-feature-settings": "'ss03' on" },
  })

  matchUtilities(
    {
      "font-stretch": (value) => ({
        "font-stretch": value,
      }),
    },
    {
      values: theme("fontStretch"),
      type: ["percentage"],
    }
  )

  matchUtilities(
    {
      "font-slant": (value) => ({
        "font-style": `oblique ${value}deg`,
      }),
    },
    {
      values: theme("fontSlant"),
      type: ["number"],
    }
  )
})

export default fontPlugin
