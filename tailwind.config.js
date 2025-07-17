/**
 * Mama Mindfully - Tailwind CSS Configuration
 * Author: Alexandria Pace
 * Purpose: Custom theme for minimalist, elegant styling
 */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "muted-rose": "#D8A39D",
        "cream-bg": "#FDF6F0",
        brand: "#C86B4A",
        "brand-dark": "#7A5D3B",
        "brand-light": "#FFF9F7",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "Times", "serif"],
      },
    },
  },
  darkMode: "class", // Enables dark mode support via 'class' strategy
  plugins: [],
};
