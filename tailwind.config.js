/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '300px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    borderColor: {
      'gray-200': 'rgba(0, 0, 0, 0.075)',
      'gray-300': 'rgba(0, 0, 0, 0.105)',
      'gray-400': 'rgba(0, 0, 0, 0.12)',
      'primary-color': 'rgb(129,215,66)',

    },
    colors: {
      'primary-green': 'rgb(129,215,66)',
      'heading-black': '#242424',
      'heading-gray': '#777',
      'nav-color': '#333',
      'warning': '#E0B252',
      'title-primary': '#fff',
      'title-secondary': '#ffffffcc',
      'white': '#FFF',
      "black": "#000",

    },

  },
  plugins: [],
}

