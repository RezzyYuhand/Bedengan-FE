/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#080808',
        'accent': '#2EB143',
        'secondary-gray': '#636363',
        'inactive-gray': '#A7ABB6',
        'hover-green': '#1E762C',
      },
    },
  },
  plugins: [],
}

