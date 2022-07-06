const plugin = require("tailwindcss/plugin");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '320px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1920px',
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "Karla", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "colorPrimary": "#7380ec",
        "colorDanger": "#ff7782",
        "colorSuccess": "#41f1b6",
        "colorWarning": "#ffbb55",
        "colorWhite": "#fff",
        "colorInfoDark": "#7d8da1",
        "colorInfoLight": "#dce1eb",
        "colorDark": "#363949",
        "colorLight": "rgba(132, 139, 200, 0.18)",
        "colorPrimaryVariant": "#111e88",
        "colorDarkVariant": "#677483",
        "colorBackground": "#f6f6f9",
        "colorTransparent": "transparent",
        //dark variant colors
        "colorBackground_DM": "#181a1e",
        "colorWhite_DM": "#202528",
        "colorDark_DM": "#edeffd",
        "colorDarkVariant_DM": "#a3bdCC",
        "colorLight_DM": "rgba(0, 0, 0, 0.4)",
      },
      keyframes: ({ theme }) => ({
        showmenu: {
          'from': { left: '-100%' },
          'to': { left: '0%' },
        },
        hidemenu: {
          'from': { left: '0%' },
          'to': { left: '-100%' },
        },
        flashlight: {
          "0%": {
            background: theme("colors.colorInfoLight"),
            color: theme("colors.colorPrimary"),
          },
          "10%": {
            background: theme("colors.colorInfoLight /15%"),
            color: theme("colors.colorPrimary /55%"),
          },
          "100%": {
            background: theme("colors.colorInfoLight / 0%"),
          },
        }
      }),
      animation: {
        'showmenu': 'showmenu 400ms ease forwards',
        'hidemenu': 'hidemenu 400ms ease forwards',
        'flashlight': 'flashlight 2s ease-in-out 1',
      }
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(({ addUtilities }) => {

    })
  ],
}