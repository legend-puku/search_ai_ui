/** @type {import('tailwindcss').Config} */
const twConfig = {
  darkMode: "class",
  content: [
    "./src/components/**/*.{html,jsx,tsx}",
    "./index.html",
    "./src/*.{html,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif", "Roboto"],
      },
      colors: {
        // "dark-primary": "#40414f",
        "dark-primary": "#984F4F"
      },
    },
  },
  plugins: [],
};

export default twConfig;
