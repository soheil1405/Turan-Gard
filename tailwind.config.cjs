/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        "myblue" : "#BFD7ED",
        "myorange" : "#FF8300",
        "mywhite" : "#FAFAFA",
        "myblack" : "#1D1D1D",
        "mylight" : "#EBF1F7",
        "mygray" : " #878383",
      },
      fontFamily: {
        'sans': ['"iranyekan"'],
      },
      backgroundImage : {
        'bestTrip' : "url('./public/assets/Vector.png')",
      }
    },
    
  },
  plugins: [],
}
