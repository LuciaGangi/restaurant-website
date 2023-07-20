/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      display: ['group-hover'],
      colors: {
        primaryColor: "#e4b95b",
        headingColor: "#20202f",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
}

