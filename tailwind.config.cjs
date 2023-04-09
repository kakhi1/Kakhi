/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        textFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        brown: "#AB3E1D",
        yellow: "#ECC73B",
      },
      keyframes: {
        wiggle: {
          "0%": {
            transform: "translateX(1400px) rotate(12deg)",
            border: "3px solid  black",
            borderRight: "0px solid black",
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            border: "3px solid black",
            borderRight: "0px solid black",
          },
        },
        rotateSnake: {
          "0% 100% ": {
            transform: "translateY(0px)",
          },
          "25%": {
            transform: "translateY(500px) ",
            
          },
          "50%": {
            transform: "translateY(300px) ",
          },
        
        },
        size: {
          "0% 100%": {
            width: "50px",
            height: '50px',
          },
          "50%": {
            width: '40px',
            height: '40px',
          }
        
        },

        slide: {
          "0%": { transform: "translateX(0)" },
          "50%": {
             transform: "translateX(80px)",

         },
          "100%": { 
            transform: "translateX(0px)",
          },
        },
        slideLeft: {
          "0%": { transform: "translateX(100px)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out",
        rotateSnake: "rotateSnake 20s ease-in-out infinite",
        slide: "slide 10s ease-in-out infinite ",
        slide1: "slide 5s ease-in-out infinite",
        slideLeft:"slideLeft 3s ease-in-out " },
    },
    plugins: [],
    modules: {},
  },
};
