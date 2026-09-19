/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["\"JetBrains Mono\"", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        primary: {
          DEFAULT: "#0ea5e9",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        // "Engineering Console" secondary accent — paired with primary
        // for gradients/glows, not a replacement for it.
        accent: {
          DEFAULT: "#8b5cf6",
          300: "#c4b5fd",
          400: "#a78bfa",
          500: "#8b5cf6",
          600: "#7c3aed",
        },
        // Graphite base for dark mode — warmer / more "engineered"
        // than a flat slate, used for surfaces and backgrounds.
        ink: {
          950: "#090d13",
          900: "#0b111a",
          800: "#111927",
          700: "#1a2333",
        },
      },
      boxShadow: {
        "glow-primary": "0 0 0 1px rgba(56,189,248,0.15), 0 8px 30px -10px rgba(56,189,248,0.35)",
        "glow-accent": "0 0 0 1px rgba(167,139,250,0.15), 0 8px 30px -10px rgba(167,139,250,0.35)",
      },
    },
  },
  plugins: [],
};