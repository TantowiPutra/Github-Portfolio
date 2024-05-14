/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
    "./public/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    function({addUtilities}) {
      const newUtilities = {
        "scrollbar-thin" : {
          scrollbarWidth: "thin",
          scrollbarColor: "rgb(31 39 39) white"
        },
        "scrollbar-webkit" : {
          "&::-webkit-scrollbar" : {
            width: "8px",
            height: "8px"
          },
          "&::-webkit-scrollbar-track" : {
            background: "white"
          },
          "&::-webkit-scrollbar-thumb" : {
            backgroundColor: "rgb(31 41 55)",
            borderRadius: "20px",
            border: "1px solid white"
          }
        }
      }
      
      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
}