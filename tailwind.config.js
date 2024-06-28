/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: ['./index.html',
    './src/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-3': {
          backdropFilter: 'blur(3px)',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    })
  ],
}

