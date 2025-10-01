/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#0ea5e9", // sky-500 as primary
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
        // optional accent (teal)
        accent: { DEFAULT: "#14b8a6" },
      },
      container: {
        center: true,
        padding: "1rem",
        screens: { lg: "1024px", xl: "1152px", "2xl": "1280px" },
      },
    },
  },
  plugins: [],
};
