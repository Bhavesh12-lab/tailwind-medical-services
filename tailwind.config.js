/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/index.html'],
  theme: {
    
    extend: {
      fontFamily:{
        'Merriweather': ['Merriweather', 'serif'], 
        'Poppins':['"Poppins"', 'sans-serif'],
      },
      colors:{
        'theme-color':'#88C250',
        'dark-green':'#006838',
        'text-color':'#888',
        'bg-tempary':'#f9f9f9',
        'bg-back':'#f9f9f9',
        'indigo-black':'#051441',
        'hover-bg': '#006838',
        'border-color': '#ececec38',
        'work-bg':'#081828',
        'placeholder-color':'#fff3'
      },
    },
  },
  plugins: [],
}


