/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1A1B1F',
        input: '#2A2B2F',
      },
    },
  },
  plugins: [],
};