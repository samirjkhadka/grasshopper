/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DC143C", // Nepal red
        secondary: "#003893", // Nepal blue
        light: "#FFFFFF",
      },
      fontFamily: {
        sports: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
