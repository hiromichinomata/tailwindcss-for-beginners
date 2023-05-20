/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        cyan: '#9cdbff',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}

