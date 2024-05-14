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
    fontFamily:{
      GelasioItalic: ['Gelasio-Italic', 'sans-serif'],
      GelasioBoldItalic: ['Gelasio-BoldItalic', 'sans-serif'],
      GelasioBold: ['Gelasio-Bold', 'sans-serif'],
      MulishBold: ['Mulish-Bold', 'serif'],
      MulishRegular: ['Mulish-Regular', 'serif'],
      MulishItalic: ['Mulish-Italic', 'serif'],
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
