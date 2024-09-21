/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        nautigal: ['"The Nautigal"', "cursive"],
      },

      backdropBlur: {
        5: "3px",
      },
      
      colors: {
        primary: "#BB141B",
        secondary: "#F0F0F0",
      },
    },
  },
  plugins: [],
};
