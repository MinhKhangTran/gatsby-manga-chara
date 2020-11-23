const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      rose: colors.rose,
      gray: colors.warmGray,
      fuchsia: colors.fuchsia,
      teal: colors.teal,
      purple: colors.purple,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
