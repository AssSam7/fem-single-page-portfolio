/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      black: "#030303",
      "medium-brown": "#7A746E",
      "light-cream": "#FFF7F0",
      "galactic-blue": "#755CDE",
      "summer-yellow": "#F6A560",
      pink: "#F39E9E",
      "light-red": "#EB7565",
      cyan: "#61C4B7",
      "dark-purple": "#552049",
    },
    fontFamily: {
      sans: ["Plus Jakarta Sans", "sans-serif"],
    },
    fontSize: {
      sm: ["18px", "28px"],
      base: ["32px", "40px"],
      lg: ["40px", "51px"],
      xl: ["56px", "70px"],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};
