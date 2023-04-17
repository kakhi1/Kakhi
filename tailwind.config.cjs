/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        project1: "url(./assets/project1.PNG)",
        project12: "url(./assets/project1-2.PNG)",
        project2: "url(./assets/project2.PNG)",
        project22: "url(./assets/project2-2.PNG)",
        project3: "url(./assets/project3.PNG)",
        project32: "url(./assets/project3-2.PNG)",
        project4: "url(./assets/project4.PNG)",
        project42: "url(./assets/project4-2.PNG)",
      },
      fontFamily: {
        textFont: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        red1: "#CD190A",
        yellow: "#EACF5E",
        blue: "#045D97",
        white1: "#F5F5F5",
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
            height: "50px",
          },
          "50%": {
            width: "40px",
            height: "40px",
          },
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
        scrollbarr: {
          "0% ": { transform: "0" },
          "100%": { transform: "translateX(30px)" },
        },
        scrollbarrL: {
          "0% ": { transform: "0" },
          "100%": { transform: "translateX(-30px)" },
        },
      },
      animation: {
        wiggle: "wiggle 2s ease-in-out",
        rotateSnake: "rotateSnake 20s ease-in-out infinite",
        slide: "slide 10s ease-in-out infinite ",
        slide1: "slide 5s ease-in-out infinite",
        slideLeft: "slideLeft 3s ease-in-out ",
        scrollbarr: "scrollbarr 400ms ease-in-out",
        scrollbarrL: "scrollbarrL 400ms ease-in-out",
      },
    },
    plugins: [],
    modules: {},
  },
};
