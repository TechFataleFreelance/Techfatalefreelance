/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "public/**/*.{html,js}",
  ],
  theme: {
    extend: {  
      fontFamily: {
        brownsugar: ["brownsugar", 'sans-serif'],
        montserrat: ['montserrat', "san-serif"]
      },
      colors:{
        'eastern-blue': {    
            '50': '#ebfffe',
            '100': '#cdfeff',
            '200': '#a1faff',
            '300': '#60f4ff',
            '400': '#18e4f8',
            '500': '#00c6de',
            '600': '#0097b2',
            '700': '#087d96',
            '800': '#10647a',
            '900': '#125467',
            '950': '#053747',
        }}
     
    },
  },
  
  plugins: [],
}

