import plugin from "tailwindcss/plugin"

interface FontPluginOptions {
  stretch?: Record<string | number, string>
  slant?: Record<string | number, string>
  features?: Record<string, boolean>
}

const defaultOptions: FontPluginOptions = {
  stretch: {
    75: "75%",
    80: "80%",
    90: "90%",
    100: "100%",
    110: "110%",
    120: "120%",
    125: "125%",
  },
  slant: {
    5: "5deg",
    12: "12deg",
  },
  features: {
    ss01: true,
    ss02: false,
    ss03: true,
    liga: true,
  },
}

const fontPlugin = plugin.withOptions<FontPluginOptions>((options = {}) => {
  return function ({ addUtilities, matchUtilities, theme }) {
    const config = { ...defaultOptions, ...options }

    // Font stretch utilities
    const stretchUtilities = Object.entries(config.stretch || {}).reduce(
      (acc: Record<string, { "font-stretch": string }>, [key, value]) => {
        acc[`.font-stretch-${key}`] = { "font-stretch": value }
        return acc
      },
      {}
    )

    // Font slant utilities
    const slantUtilities = Object.entries(config.slant || {}).reduce(
      (acc: Record<string, { "font-style": string }>, [key, value]) => {
        acc[`.font-slant-${key}`] = { "font-style": `oblique ${value}` }
        return acc
      },
      {}
    )

    // OpenType feature utilities
    const featureUtilities = Object.entries(config.features || {}).reduce(
      (
        acc: Record<string, { "font-feature-settings": string }>,
        [feature, enabled]
      ) => {
        if (enabled) {
          acc[`.font-feature-${feature}`] = {
            "font-feature-settings": `'${feature}' on`,
          }
        }
        return acc
      },
      {}
    )

    addUtilities({
      ...stretchUtilities,
      ...slantUtilities,
      ...featureUtilities,
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
  }
})

export default fontPlugin
