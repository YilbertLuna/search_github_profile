/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './msrc/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,dx}',
  ],
  theme: {
    colors:{
      'primary': '#b1d4e0',
      'secondary': '#145da0',
      'tertiary': '#56aeff'
    }
  },
  plugins: [],
}
