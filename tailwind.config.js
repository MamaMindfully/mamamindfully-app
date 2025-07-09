/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'muted-rose': '#D8A39D',
        'cream-bg':   '#FDF6F0',
      },
      fontFamily: {
        serif: ['"Merriweather"', 'serif'],
      },
    },
  },
  plugins: [],
}
