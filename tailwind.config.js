/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '660px',
        '2xl': '2000px',
      },
      fontSize: {
        '10xl': ['9rem', '1'],
        '11xl': ['12rem', '1'],
        'xxs': '0.675rem'
      },
      colors: {
        dark: '#18191E',
        white: '#D3D5D4'
      },
      fontFamily: {
        cera: 'Cera CY Bold',
        merriwether: 'Merriweather, serif'
      }
    },
  },
  plugins: [],
}

