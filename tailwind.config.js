/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/preline/preline.js'],
  theme: {
    fontFamily: {
      sans: ["Roboto", "Kantumruy Pro", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [require('preline/plugin')],
}

