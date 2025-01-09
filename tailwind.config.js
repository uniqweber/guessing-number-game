/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        game: ["Rowdies", "serif"],
      },
      colors: {
        warning: "#ee9b00",
        error: "#ae2012",
        dark: "#0e213f",
        base: "#f7f2e8",
        accent: "#94d2bd",
      },
    },
  },
  plugins: [],
};
