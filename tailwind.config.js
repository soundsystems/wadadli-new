/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation: {
        tilt: 'tilt 10s infinite linear'
      },
      keyframes: {
        tilt: {
        "0%, 50%, 100%" : {
        transform: 'rotate(0deg)',
        },
        "25%": {
        transform: 'rotate(2deg)',
        },
        "75%" : {
        transform: 'rotate(-2deg)',
        },
        },
      },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
    }
  }
};