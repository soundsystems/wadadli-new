/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      spacing: {
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
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
    require('@tailwindcss/forms'),
  ],
    }
  }
};

// background: rgb(251,181,63);
// background: radial-gradient(circle, rgba(251,181,63,1,0), rgba(253,111,0,1, 1));