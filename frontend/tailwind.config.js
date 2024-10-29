/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enable dark mode
  content: [
    "./index.html", // Include the index.html file
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all files in the src folder
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Indigo (for primary actions)
        secondary: "#D97706", // Amber (for secondary actions)
        accent: "#FBBF24", // Yellow (for highlights)
        "light-background": "#FFFFFF", // White (for light mode background)
        "dark-background": "#111827", // Dark Slate (for dark mode background)
        "primary-text": "#111827", // Black text for light mode
        "secondary-text": "#6B7280", // Gray for secondary text in light mode
        success: "#16A34A", // Green (for success messages)
        error: "#B91C1C", // Red (for error messages)
      },
      screens: {
        "3xl": "1920px", // example for extra large screens
        "4xl": "2560px", // example for even larger screens if needed
      },
    },
  },
  plugins: [],
};
