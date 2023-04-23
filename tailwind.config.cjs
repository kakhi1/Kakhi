/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        project1: "url(./assets/project1.png)",
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
        darkMode: "#171314",
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
        increase: {
          "0%": {
            width: "120px",
            height: "120px",
          },
          "100%": {
            width: "100%",
            height: "100%",
            border: "0px solid black ",
          },
        },
        NavInc: {
          "0%": {
            width: "50px",
            height: "50px",
          },
          "100%": {
            width: "120px",
            height: "150px",
          },
        },
        decrease: {
          "0%": {
            width: "100%",
            height: "100%",
            border: "0px solid black",
          },
          "100%": {
            width: "120px",
            height: "120px",
          },
        },

        opacity: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
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
          "0%": { transform: "translatex(0)" },
          "100%": {
            transform: "translatex(-22px)",
            backgroundColor: "#F5F5F5",
          },
        },
        slideRight: {
          "0%": { transform: "translatex(-22px)", backgroundColor: "#F5F5F5" },
          "100%": {
            transform: "translatex()",
          },
        },
        textdown: {
          "0%": { transform: "translateY(-300px)" },
          "100%": { transform: "translateY(0)" },
        },
        arowwRotate: {
          "0%": {
            transform: "translateY(-24px) translateX(-24px) rotate(0deg)",
          },
          "100%": {
            transform: "translateY(-24px) translateX(-24px) rotate(180deg)",
          },
        },
        arowwRotate2: {
          "0%": {
            transform: "translateY(-20px) translateX(-20px) rotate(180deg)",
          },
          "100%": {
            transform: " translateY(0) translateX(0) rotate(0deg)",
          },
        },
        NavRotate: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(90deg)",
          },
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
        increase: "increase 1s ease-in-out",
        NavInc: "NavInc 50ms ease-in-out",
        decrease: "decrease 1.2s ease-in-out",
        arowwRotate: "arowwRotate 1s ease-in-out ",
        arowwRotate2: "arowwRotate2 1s ease-in-out ",
        NavRotate: "NavRotate 1s ease-in-out",
        textdown: "textdown 1s ease-in-out",
        opacity: "opacity 5s ease-in-out ",
        slide1: "slide 5s ease-in-out infinite",
        slideLeft: "slideLeft 1s ease-in-out",
        slideRight: "slideRight 1s ease-in-out  ",
        scrollbarr: "scrollbarr 400ms ease-in-out",
        scrollbarrL: "scrollbarrL 400ms ease-in-out",
      },
    },
    plugins: [],
    modules: {},
  },
};
