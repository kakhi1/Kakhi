/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        textFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#B7B09Eff",
        textColor: "#0E0E0Eff",
        designColor: "#ECC73B",
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "translateX(1000px) rotate(12deg)",
            border: "3px solid  black",
            borderRight: "0px solid black",
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            border: "3px solid black",
            borderRight: "0px solid black",
          },
        },
        slide: {
          "0%": { transform: "translateX(-800px)  " },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out",
        slide: "slide 6s ease-in-out ",
      },
    },
    plugins: [require("tailwindcss-3d")],
    modules: {},
  },
};
