/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        l_join: {
          "0%": {transform: "translateX(-50px)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
        r_join: {
          "0%": {transform: "translateX(50px)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
      },
      animation: {
        l_join: "l_join 1.7s ease-in-out",
        r_join: "r_join 1.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
