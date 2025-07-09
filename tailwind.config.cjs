/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#F4AAB9',
        secondary: '#A8DADC',
        accent: '#FFE066',
        background: '#FFF8F0',
        text: '#333333',
        muted: '#9CA3AF',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
