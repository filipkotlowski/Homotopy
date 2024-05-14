import colors from "./colors.ts"
import templateColors from "./src/templates/bari/colors.ts";
import templateShadows from "./src/templates/bari/shadows.ts";
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    colors: {
        ...colors,
        ...templateColors
    },
    extend: {
      dropShadow: {
         ...templateShadows
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}
