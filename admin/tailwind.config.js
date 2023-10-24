/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "Arial", "Noto Sans", "sans-serif"],
      },
      backgroundColor:{
        main:'rgb(240, 242, 245)'
      },
      backgroundImage:{
        'login':"url('./src/assets/bg2.jpg')",
      }
    },
  },
  plugins: [

  ],
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{js,ts,jsx,tsx}"
  ]
}

