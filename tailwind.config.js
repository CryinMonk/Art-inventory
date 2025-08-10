/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'blue-600': '#1d4ed8',
        'blue-700': '#1e40af'
      }
    }
  },
  plugins: []
};