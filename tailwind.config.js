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
    extend: {},
  },
  plugins: [],
}

