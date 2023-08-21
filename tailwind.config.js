/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: 'auto 1fr auto',
      },
      colors: {
        'logo-main': '#9b0404',
      },
      fontFamily: {
        main: ['Montserrat'],
      },
    },
  },
  plugins: [],
};
