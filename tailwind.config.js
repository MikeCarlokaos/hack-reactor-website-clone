/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display: ["group-hover"],
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      cerulean: {
        DEFAULT: "#0090D9",
        50: "#92DAFF",
        100: "#7DD3FF",
        200: "#54C6FF",
        300: "#2CB8FF",
        400: "#03AAFF",
        500: "#0090D9",
        600: "#006BA1",
        700: "#004669",
        800: "#002031",
        900: "#000000",
      },
      white: "#ffff",
      transparent: "transparent",
    },
  },
  plugins: [],
};
