/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
      "./assets/**/*.js",
      "./templates/**/*.html.twig",
  ],
  theme: {
    fontFamily: {
        'titlefont': ['PT Sans'],
        'subtitlefont': ['PT Mono'],
    },

    maxWidth: {
        '1/4': '25%',
        '2/3': '40%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '95%',
       },

    extend: {
        colors: {
            coloryellow: '#fabd43',
            colorbrown: '#342A2C',
        },
        
    screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }
      
            'md': '768px',
            // => @media (min-width: 768px) { ... }
      
            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }
      
            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
          }

    },
  },
  plugins: [],
});

