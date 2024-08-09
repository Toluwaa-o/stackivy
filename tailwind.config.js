/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F5F5F5",
        "my-orange": "#FF9702",
        "my-orange-50": "#FF970280",
        "blue-green": "#21838A",
        "almost-black": "#011517",
        "small-text": "#2E2E2E",
        "almost-white": "#D1FCFF",
        "dark-green": '#071F20'
      },
    },
  },
  plugins: [],
};
