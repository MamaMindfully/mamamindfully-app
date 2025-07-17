/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}", // Optional if you structure with components
    "./pages/**/*.{js,ts,jsx,tsx}",       // Optional if using a pages folder
  ],
  theme: {
    extend: {
      colors: {
        // Mama Mindfully Custom Palette
        primary: '#F4AAB9', // Soft pink
        secondary: '#A8DADC', // Gentle teal
        accent: '#FFE066', // Soft yellow
        background: '#FFF8F0', // Clean, warm background
        text: '#333333', // Clean, readable dark text
        muted: '#9CA3AF', // Muted gray for subtle UI
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // Feminine, clean, modern
        serif: ['Merriweather', 'ui-serif', 'Georgia'], // For soft headings if needed
      },
      spacing: {
        // Add extra spacing for breathing room
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        // Extra softness
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(0, 0, 0, 0.05)', // Subtle shadow for depth
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For clean input styling
    require('@tailwindcss/typography'), // For beautiful text flow
  ],
}
