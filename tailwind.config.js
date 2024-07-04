/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'rainbow-bg': {
          '0%, 100%': {'background-color': 'red'},
          '16%': {'background-color': 'orange'},
          '33%': {'background-color': 'yellow'},
          '50%': {'background-color': 'green'},
          '66%': {'background-color': 'blue'},
          '84%': {'background-color': 'purple'},
        },
        'rainbow-text': {
          '0%, 100%': {'color': 'red','border-color': 'red'},
          '16%': {'color': 'orange','border-color': 'orange'},
          '33%': {'color': 'yellow','border-color': 'yellow'},
          '50%': {'color': 'green','border-color': 'green'},
          '66%': {'color': 'blue','border-color': 'blue'},
          '84%': {'color': 'purple','border-color': 'purple'},
        }
      },
      animation: {
        'rainbow-bg': 'rainbow-bg 2s linear infinite',
        'rainbow-text': 'rainbow-text 2s linear -1s infinite',
        'rainbow-text-nodelay': 'rainbow-text 2s linear infinite',
      }
    },
  },
  plugins: [],
}