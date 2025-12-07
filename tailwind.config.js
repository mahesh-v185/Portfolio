/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      colors: {
        academic: {
          bg: '#F3F4F6', // Darkened from FAFAFA to Gray-100 for better contrast with cards
          paper: '#FFFFFF',
          blue: '#2563EB', // Slightly more vivid blue (Blue-600) for better visibility
          violet: '#7C3AED', // Violet-600
          dark: '#111827', // Gray-900 for headings
          medium: '#374151', // Gray-700 for body text (much more readable than #555)
          light: '#E5E7EB', // Gray-200 for borders
        }
      },
      boxShadow: {
        'academic': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'academic-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      }
    }
  },
  plugins: [],
}

