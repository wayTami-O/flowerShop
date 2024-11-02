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
        '38':'2.375rem',
        '40':'2.5rem',
        '47':'2.938rem',
        '52':'3.25rem',
        '56':'3.5rem',
        '86':'5.375rem',
        '89':'5.563rem',
        '171':'10.688rem',
        '360':'22.5rem',
        '1556':'97.25rem'
      },
      colors: {
        'rose':'#C14E77',
        'kisses':'#411528',
        'claret':'#7E1037',
        'pink':'#F7B2CF',
        'zov':'#F8EAF1'
      },
      borderRadius: {
        '30':'1.875rem',
        '60':'3.75rem',
      },
      borderWidth: {
        '1':'0.063rem',
        '3':'0.188rem'
      },
      fontFamily: {
        mons: ["Montserrat Alternates", "sans-serif"]
      }
    },
  },
  plugins: [],
}

