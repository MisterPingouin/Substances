/** @type {import('tailwindcss').Config} */
module.exports = {
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
        '1/2': '50%',
        '3/4': '75%',
       },

    extend: {
        colors: {
            coloryellow: '#fabd43',
            colorbrown: '#',
        },


    },
  },
  plugins: [],
}

