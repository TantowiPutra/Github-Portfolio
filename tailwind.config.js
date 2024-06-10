/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/**/*.{html,js,jsx,ts,tsx}",
    "./public/*.{html,js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px) scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px) scale(1)',
          },
        },

        'fade-in-top': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        'zoom-in': {
          '0%': {
            transform: 'scale(0.5)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          }
        }
      },
      animation: {
        'fade-down': 'fade-down 1s ease forwards',
        'fade-in-top': 'fade-in-top 1s ease forwards',
        'fade-in-top-2-sec': 'fade-in-top 1.5s ease 1s forwards',
        'zoom-in': 'zoom-in 1s ease-in-out forwards',
      },
    },
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