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
      }
    },
  },
  plugins: [],
}