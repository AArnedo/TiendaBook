/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'oscuro': '#0D190D',
      'blanco': '#ffffff',
      'negro': '#000000',
      'gris': '#3B3B3B',
      'gris-claro': '#EBEBEB',
      'verde-claro': '#274C27',
      'rojo': '#F80000',
      'rojo-oscuro': '#910101'
    },
    fontFamily: {
      pacifico: ['Pacifico', 'cursive;'],
      arimo: ['Arimo', 'sans-serif']
    },
    backgroundImage: {
      'ventas': "url('./src/assets/VentaHero.jpg')"
    }
  },
  plugins: [],
}