const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-1': '88px',
        'heading-2': '40px',
      },
      colors: {
        // Color names from https://www.color-name.com/
        'eerie-black': '#191826',
        'skyblue': '#66E2DC',
        'outrageous-orange': '#FA7453',
        'rajah': '#FFB964',
        'snow': '#FCFAF9'
      },
      fontFamily: {
        ibm: ["IBM Plex Sans"]
      },

    },
  },
  plugins: [
    plugin(({ addBase, config }) => {
      addBase({
        'h1': {
        }
      })
    })
  ],
}
