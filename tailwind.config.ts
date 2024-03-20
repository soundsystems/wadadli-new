/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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

      colors: {
        'wadadli': '#FD6F00',
      },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
    require("daisyui"),
  ],
    }
  }
};