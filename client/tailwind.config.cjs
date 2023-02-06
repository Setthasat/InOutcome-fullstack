/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      'sm':  '768px',
      'md':  '992px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1625px',
    },
  },
  plugins: [],
}
