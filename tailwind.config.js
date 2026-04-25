/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bordo: '#7B1C3E',
        'bordo-light': '#f5eaee',
        'bordo-dark': '#5a1230',
        gold: '#C9A84C',
      },
    },
  },
  plugins: [],
};
