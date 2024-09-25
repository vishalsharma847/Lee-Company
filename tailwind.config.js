const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,php}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: "'Playfair Display', serif",
        Lato: "'Lato', sans-serif",
        brico:"'Bricolage Grotesque',sans-serif",
        caveat:"'Caveat',sans-serif"
      },
      colors: {
        'prim':'#FFEFA0',
        'sec':'#FFD57E',
        'ter':'#FCA652',
        'poly':'#AC4B1C',
        'foot':'#201c1c',
        'tfoot':'#ffb473',
        'bodyprim': 'rgb(243 209 44)',
        'bodysec': '#ff7600',
        'head':"#f3af2c",
        'menutop':"#ffb700",
        'menuback':'#f9a215'
      }
  },
  plugins: [],
}
}
