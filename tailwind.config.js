/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '6':'0.375rem',
        '9':'0.563rem',
        '22':'1.375rem',
        '23':'1.438rem',
        '24':'1.5rem',
        '25':'1.563rem',
        '26':'1.625rem',
        '28':'1.75rem',
        '32':'2rem',
        '33':'2.063rem',
        '34':'2.125rem',
        '36':'2.25rem',
        '38':'2.375rem',
        '40':'2.5rem',
        '41':'2.563rem',
        '47':'2.938rem',
        '48':'3rem',
        '52':'3.25rem',
        '54':'3.375rem',
        '56':'3.5rem',
        '57':'3.563rem',
        '76':'4.75rem',
        '78':'4.875rem',
        '80':'5rem',
        '84':'5.25rem',
        '86':'5.375rem',
        '87':'5.438rem',
        '89':'5.563rem',
        '122':'7.625rem',
        '124':'7.75rem',
        '135':'8.438rem',
        '171':'10.688rem',
        '182':'11.375rem',
        '194':'12.125rems',
        '198':'12.375rem',
        '216':'13.5rem',
        '218':'13.625rem',
        '291':'18.188rem',
        '360':'22.5rem',
        '414':'25.875rem',
        '459':'28.688rem',
        '482':'30.125rem',
        '603':'37.688rem',
        '806':'50.375rem',
        '1434':'89.625rem',
        '1556':'97.25rem',
        '1728':'108rem'
      },
      colors: {
        'rose':'#C14E77',
        'kisses':'#411528',
        'claret':'#7E1037',
        'pink':'#F7B2CF',
        'zov':'#F8EAF1',
        'plum':'#710C21',
        'plum20':'#41152833',
        'ipkland':'#FFEEF5',

        // Цвета для градиента
        'a24c61': '#A24C61',
        '710c21': '#710C21',
      },
      borderRadius: {
        '15':'0.938rem',
        '20':'1.25rem',
        '30':'1.875rem',
        '60':'3.75rem',
      },
      borderWidth: {
        '1':'0.063rem',
        '3':'0.188rem'
      },
      fontFamily: {
        mons: ["Montserrat Alternates", "sans-serif"],
        uncage:['UNCAGE']
      },
      fontSize: {
        '16':'1rem',
        '20':'1.25rem',
        '24':'1.5rem',
        '32':'2rem',
        '36':'2.25rem',
        '44':'2.75rem',
        '64':'4rem'
      },
      lineHeight: {
        '72':'4.5rem'
      },
      boxShadow: {
        'category-shadow': '3px 5px 4px 0px #710C2133',
      },
      backdropBlur: {
        '4':'0.25rem'
      }
    },
  },
  plugins: [],
}

