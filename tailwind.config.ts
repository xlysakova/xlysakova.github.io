/** @type {import('tailwindcss').Config} */
export default {
  safelist: ['primary', 'secondary'],
  content: [],
  theme: {
    extend: {
      colors: {
        primary: '#C25874', // Your primary color
        secondary: '#00CAE9',
        'salmon-500': '#C25874'
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    }
  },
  plugins: [],
}