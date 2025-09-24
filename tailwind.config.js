/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        facebook: [
          "FacebookSans",
          "Helvetica Neue",
          "Segoe UI",
          "Roboto",
          "Arial",
          "sans-serif",
        ],
        sans: [
          "Trebuchet MS",
          "Lucida Sans Unicode",
          "Lucida Grande",
          "Lucida Sans",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
