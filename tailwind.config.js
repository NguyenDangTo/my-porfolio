/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        l_join: {
          "0%": {transform: "translateX(-80px)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
        r_join: {
          "0%": {transform: "translateX(80px)", opacity: 0},
          "100%": {transform: "translateX(0)", opacity: 1},
        },
        b_join: {
          "0%": {transform: "translateY(80px)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
        t_join: {
          "0%": {transform: "translateY(-80px)", opacity: 0},
          "100%": {transform: "translateY(0)", opacity: 1},
        },
      },
      animation: {
        l_join: "l_join 1.7s ease-in-out",
        r_join: "r_join 1.7s ease-in-out",
        b_join: "b_join 1.7s ease-in-out",
        t_join: "t_join 1.7s ease-in-out",
      },
    },
  },
  plugins: [],
};
