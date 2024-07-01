/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Archivo', 'sans-serif'],
        'serif': ['Lora', 'serif'],
      },
      colors: {
        'primary': '#0A0A0A',
        'secondary': '#0D8746',
        'tertiary': '#FDFDFD'
      },
    },
  },
  plugins: [],
}