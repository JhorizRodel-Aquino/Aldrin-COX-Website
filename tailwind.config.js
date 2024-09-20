const { transform } = require('sucrase');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        moveIn: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%, 50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },

      animation: {
        moveIn: "moveIn 1s ease-in-out",
        fadeIn: "fadeIn 2s ease-in-out"
      },

      fontFamily: {
        poppins: "Poppins",
      },

      colors: {
        primary: "#BB141B",
        secondary: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
