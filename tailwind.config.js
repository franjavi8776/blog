/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1c1b1c",
        secondary: "#ff9cc9",
        neutral: "#ffffff",
      },
      fontFamily: {
        title: ["VeryPopular", "sans-serif"],
        body: ["SafiraMarch", "sans-serif"],
      },
    },
  },
  plugins: [],
};
