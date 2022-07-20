/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        header: ["0px 2px 24px rgba(0, 0, 0, 0.06)"],
        card: ["0px 4px 10px rgba(0, 0, 0, 0.1)"],
        contact: ["0px 4px 24px rgba(0, 0, 0, 0.12)"],
      },
      gridTemplateColumns: {
        main: ["15rem 1fr"],
      },
      flexBasis: {
        search: ["400px"],
      },
    },
  },
  plugins: [],
};
