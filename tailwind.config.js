/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cave': "url('./backgroundbattle.jpeg')",
      })
    },
  },
  plugins: [],
}

