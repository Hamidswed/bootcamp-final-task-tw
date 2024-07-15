/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#3F4264",
        "primary-color2": "#2A2D53",
        "orange-color": "#FF9900",
        "button-color": "#4A6DFF",
        "primary-dark": "#36385380",
        "primary-light": "#6A6C87",
      },
      fontFamily: {
        sans: ["Vazirmatn"],
      },
    },
  },
  plugins: [],
};
