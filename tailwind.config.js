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
        '23':'1.438rem',
        '24':'1.5rem',
        '26':'1.625rem',
        '32':'',
        '33':'2.063rem',
        '34':'2.125rem',
        '38':'2.375rem',
        '40':'2.5rem',
        '47':'2.938rem',
        '48':'3rem',
        '52':'3.25rem',
        '56':'3.5rem',
        '57':'3.563rem',
        '76':'4.75rem',
        '78':'4.875rem',
        '80':'5rem',
        '86':'5.375rem',
        '87':'5.438rem',
        '89':'5.563rem',
        '122':'7.625rem',
        '135':'8.438rem',
        '171':'10.688rem',
        '198':'12.375rem',
        '218':'13.625rem',
        '360':'22.5rem',
        '414':'25.875rem',
        '459':'28.688rem',
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
        'zov':'#F8EAF1'
      },
      borderRadius: {
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
        '32':'2rem',
        '64':'4rem'
      },
      lineHeight: {
        '72':'4.5rem'
      }
    },
  },
  plugins: [],
}

