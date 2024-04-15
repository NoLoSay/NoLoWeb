/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: { max: "767px" },

      md: { min: "768px", max: "1023px" },

      lg: { min: "1024px", max: "1800px" },
    },
    extend: {
      backgroundImage: theme => ({
        'map': "url('../public/images/map.png')",
        'miroir-d-eau-château-nantes_photo': "url('/images/artworkToTranslateSelectionScreen/miroir-d-eau-château-nantes_photo.png')",
      }),
      flex: {
        '2': '2 2 0%',
        '3': '3 3 0%',
        '4': '4 4 0%',
        '5': '5 5 0%',
        '6': '6 6 0%',
        '7': '7 7 0%',
        '8': '8 8 0%',
        '9': '9 9 0%',
        '10': '10 10 0%',
      },
      colors: {
        "base-white": "#fff",
        "gray-300": "#1e303a",
        "gray-100": "#9ab0bd",
        "yellow-300": "#fdc80f",
        "gray-50": "rgba(225, 231, 235, 1)",
        black: "#000",
        "base-black": "#142129",
        "gray-200": "#5b7482",
        "base-button": "rgba(253, 200, 15, 1)",
      },
      boxShadow: {
        cardShadow: "0 4px 9px 0 rgba(0, 0, 0, 0.25)",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        helvetica: "Helvetica",
        inherit: "inherit",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        "1.5lg": "10px",
        "2.5xl": "20px",
        "15xl": "60px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  variants: {
    extend: {
      margin: ["responsive"],
      padding: ["responsive"],
    },
  },
};
