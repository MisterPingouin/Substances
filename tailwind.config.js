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
            colorbrown: '#',
        },


    },
  },
  plugins: [],
});

