/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ff7d1a",
        secondary: "#df6107",
        tertiary: "#1d2025",
        "dark-grayish-blue": "#68707d",
        "grayish-blue": "#b6bcc8",
        "light-grayish-blue": "#f7f8fd",
        "white": "#ffffff",
        "black": "#000000",
        "lightbox-bg": "bfbfbf"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      fontFamily: {
        'sans': ['Kumbh Sans', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
      },
      screens: {
        xs: "375px",
        xl: "1440px"
      },
    },
  },
  plugins: [],
};