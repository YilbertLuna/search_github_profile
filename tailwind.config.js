/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#b1d4e0',
        'secondary': '#145da0',
        'tertiary': '#56aeff'
      },
      screens:{
        s: '440px'
      },
      width: {
        '98': '34rem',
      }
    },
    fontFamily: {
      Title: ["Merriweather", "serif"],
      content: ["Heebo", "sans-serif"],
    },
  },
  plugins: [],
}
