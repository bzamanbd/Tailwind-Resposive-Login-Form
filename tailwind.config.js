/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'left': '-5px 0 10px rgba(0, 0, 0, 0.1)',
        'right': '5px 0 10px rgba(0, 0, 0, 0.1)',
        'top': '0 -5px 10px rgba(0, 0, 0, 0.1)',
        'bottom': '0 5px 10px rgba(0, 0, 0, 0.1)',
        'right-bottom': '5px 5px 15px rgba(0, 0, 0, 0.2)',
        'all': '0 1px 15px rgba(0, 0, 0, 0.2), 0 1px 5px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}

