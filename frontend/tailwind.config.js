module.exports = {
  content: [
    "index.html",
    "src/**/*.vue"
  ],
  theme: {
    fontFamily: {
      body: ["Inter", "Raleway", "sans-serif"],
      title: ["Inter", "sans-serif"],
      mono: ["SourceCodePro", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
