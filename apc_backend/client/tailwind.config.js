/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern, premium, dark-mode first color palette
        brand: {
          dark: '#0B0F19',
          card: '#161D30',
          border: '#24304F',
          accent: '#3B82F6',
          violet: '#8B5CF6',
          teal: '#0D9488',
        }
      }
    },
  },
  plugins: [],
}
