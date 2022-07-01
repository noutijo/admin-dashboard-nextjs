module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
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
    screens: {
      'sm': '0px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1920px',
    },
    extend: {
      keyframes: {
        smmenu: {
          'from': { left: '-100%' },
          'to': { left: '0%' },
        }
      },
      animation: {
        'showmenu': 'smmenu 400ms ease forwards',
      }
    },
  },
  plugins: [],
}