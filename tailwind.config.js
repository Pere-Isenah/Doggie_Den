/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
     oswald:["Oswald", "sans-serif"],
    },
    extend: {
      colors:{
        "primary-brown": "#a6774b",
        "primary-black": "#402E32",
        "primary-green": "#495e4f",
        "primary-dark-brown": "#653E15",
        "secondary-dark-brown":"#774e26",
        "secondary-light-brown":"#f3cf7a",
      }
    },
  },
  plugins: [],
}