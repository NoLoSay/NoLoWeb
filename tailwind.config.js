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
      }),
      flex: {
        "1": "1 1 0%",
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
        goldenrod: "#c99400",
        black: "#000",
        darkslategray: "#1e303a",
        lightgoldenrodyellow: "#dfffcc",
        lightyellow:"#FEEAAE",
        limegreen: "#42b100",
        gray: "#0b0b0b",
        gainsboro: "#e6e6e6",
        "base-black": "#142129",
        "basic-dark-000000": "#000",
        "gray-200": "#5b7482",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "dm-sans": "'DM Sans'",
        inherit: "inherit",
        "sf-pro-text": "'SF Pro Text'",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "4xl-6": "23.6px",
        "9xs-9": "3.9px",
        "10xs-8": "2.8px",
        "5xs-9": "7.9px",
        "8xs-7": "4.7px",
        "18xl-7": "37.7px",
        "81xl": "100px",
        "41xl": "60px",
        "8xs": "5px",
      },
    },
    fontSize: {
      "2xs": "11px",
      mini: "15px",
      "4xs": "9px",
      "3xl": "22px",
      "6xl": "25px",
      "4xs-6": "8.6px",
      "xs-8": "11.8px",
      "3xs-4": "9.4px",
      "lg-1": "18.1px",
      "31xl": "50px",
      "41xl": "60px",
      "5xl": "24px",
      lg: "18px",
      xs: "12px",
      base: "16px",
      sm: "14px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
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
