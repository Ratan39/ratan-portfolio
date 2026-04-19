import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   "#FFFFFF",
          secondary: "#F3F5FA",
          tertiary:  "#EDF0F7",
          card:      "#FFFFFF",
        },
        accent: {
          blue:   "#2563EB",
          green:  "#16A34A",
          amber:  "#B45309",
          purple: "#7C3AED",
          teal:   "#0D9488",
          red:    "#DC2626",
        },
        border: {
          subtle:  "rgba(15,17,23,0.07)",
          default: "rgba(15,17,23,0.12)",
          strong:  "rgba(15,17,23,0.22)",
        },
        text: {
          primary:   "#0F1117",
          secondary: "rgba(15,17,23,0.7)",
          muted:     "rgba(15,17,23,0.5)",
          dim:       "rgba(15,17,23,0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-up":  "fadeUp 0.6s ease forwards",
        "fade-in":  "fadeIn 0.4s ease forwards",
        blink:      "blink 1s step-end infinite",
        "slide-in": "slideIn 0.3s ease forwards",
      },
      keyframes: {
        fadeUp:  { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn:  { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        blink:   { "0%, 100%": { opacity: "1" }, "50%": { opacity: "0" } },
        slideIn: { "0%": { opacity: "0", transform: "translateX(-10px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
      },
    },
  },
  plugins: [],
};
export default config;
