const { transform } = require("sucrase");

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
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },

      filter: ["hover", "focus"],
      saturate: ["hover", "focus"],

      animation: {
        moveIn: "moveIn 1s ease-in-out",
        fadeIn: "fadeIn 2s ease-in-out",
        slide: "slide 20s infinite linear",
      },

      fontFamily: {
        poppins: "Poppins",
        nautigal: ['"The Nautigal"', "cursive"],
      },

      colors: {
        primary: "#BB141B",
        secondary: "#F0F0F0",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
