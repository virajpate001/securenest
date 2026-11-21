/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: "#14213d", deep: "#0c1830", soft: "#263d60" },
        gold:  { DEFAULT: "#e5b85c", light: "#f4cc79", dark: "#c78e24" },
        ink:   "#17243c",
        muted: "#647084",
        line:  "#e7eaf0",
        cream: "#fbf8f1",
      },
      fontFamily: {
        sans:    ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-manrope)", "sans-serif"],
      },
      borderRadius: {
        card: "17px",
        pill: "40px",
      },
      boxShadow: {
        brand: "0 18px 45px rgba(17,32,57,.10)",
      },
      keyframes: {
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        float:     "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};