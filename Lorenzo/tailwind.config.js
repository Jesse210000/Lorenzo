/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bronze: {
          500: '#cd7f32',
          600: '#b7692a',
        },
        silver: {
          500: '#c0c0c0',
          600: '#a9a9a9',
        },
        gold: {
          500: '#ffd700',
          600: '#e6c200',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'fade-up': 'fade-up 1s ease-out',
        'slide-in-left': 'slide-in-left 1s ease-out',
        'slide-in-right': 'slide-in-right 1s ease-out',
      },
    },
  },
  plugins: [],
}
