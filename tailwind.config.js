const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

const slate = {
  ...colors.slate,
  "850": "#141f38"
}

module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        "sans": ["Inter", ...defaultTheme.fontFamily.sans],
        "mono": ["Roboto Mono", ...defaultTheme.fontFamily.mono]
      },
      colors: {
        primary: {
          ...colors.sky
        },
        secondary: {
          ...slate
        },
        dim: {
          "50":   "rgba(0,0,0,0.05)",
          "100":  "rgba(0,0,0,0.10)",
          "200":  "rgba(0,0,0,0.20)",
          "300":  "rgba(0,0,0,0.30)",
          "400":  "rgba(0,0,0,0.40)",
          "500":  "rgba(0,0,0,0.50)",
          "600":  "rgba(0,0,0,0.60)",
          "700":  "rgba(0,0,0,0.70)",
          "800":  "rgba(0,0,0,0.80)",
          "900":  "rgba(0,0,0,0.90)",
        },
        lighter: {
          "50":   "rgba(255,255,255,0.05)",
          "100":  "rgba(255,255,255,0.10)",
          "200":  "rgba(255,255,255,0.20)",
          "300":  "rgba(255,255,255,0.30)",
          "400":  "rgba(255,255,255,0.40)",
          "500":  "rgba(255,255,255,0.50)",
          "600":  "rgba(255,255,255,0.60)",
          "700":  "rgba(255,255,255,0.70)",
          "800":  "rgba(255,255,255,0.80)",
          "900":  "rgba(255,255,255,0.90)",
        },
      },
      transitionProperty: {
        "backdrop": "backdrop-filter"
      },
      keyframes: {
        fadeIn: {
	        "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fade: "200ms fadeIn ease-in-out"
      }
    },
  },
  plugins: [],
}
