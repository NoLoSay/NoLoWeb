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
      colors: {
        "base-white": "#fff",
        "gray-300": "#1e303a",
        "gray-100": "#9ab0bd",
        "yellow-300": "#fdc80f",
        black: "#000",
        "base-black": "#142129",
        "basic-dark-000000": "#000",
        "gray-200": "#5b7482",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
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
      "6xl": "25px",
      "4xs-6": "8.6px",
      "xs-8": "11.8px",
      "3xs-4": "9.4px",
      "lg-1": "18.1px",
      "31xl": "50px",
      "41xl": "60px",
      "5xl": "24px",
      inherit: "inherit",
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
