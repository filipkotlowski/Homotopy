import colors from "./colors.ts"
import templateColors from "./src/templates/bari/colors.ts";
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
        ...colors,
        ...templateColors
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
