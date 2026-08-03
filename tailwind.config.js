/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071C33",
        cyan: "#00B9E8",
        light: "#F5F8FC",
        dark: "#172033",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(7, 28, 51, 0.1)",
      },
    },
  },
  plugins: [],
};
