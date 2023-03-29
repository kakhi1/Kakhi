/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        textFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#191919",
        textColor: "rgba(255,255,255,0.85)",
        designColor: "#00ff77",
        RoundBg:
          "linear-gradient(0deg, rgba(195,139,34,1) 12%, rgba(226,58,16,1) 100%)",
      },
    },
  },
  plugins: [],
  modules: {
    animation: ['responsive'],
  },
}
