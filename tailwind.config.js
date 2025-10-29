/* @type {import('tailwindcss').Config} 

export default{
  darkMode: "class",
  theme: {
    extend: {},

  },
  plugins: [],
};*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    plugins: [
        require("tailwindcss-animate")
    ],
};
