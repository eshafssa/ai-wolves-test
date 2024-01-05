/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '765': '765px',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu','Roboto', 'sans-serif'],
      },
    }
  },
  plugins: [],
}

