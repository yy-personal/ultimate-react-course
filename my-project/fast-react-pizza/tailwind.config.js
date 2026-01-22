/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // Can specify screen name and size over here
    fontFamily: {
      sans: 'Roboto Mono, mono' //overwrite entire react font family
    },
    height: {
      screen: '100dvh'
    }
  },
  extend: {
    fontSize: { huge: ['80rem'] },
    colors: {
      pizza: "#123456" // add on to existing color palatte
    },
  },
  plugins: [],
}

