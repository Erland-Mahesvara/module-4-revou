/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', "cursive"],
      },
      colors: {
        retro: {
          primary: "#ff6f61",
          secondary: "#6b5b95",
          accent: "#88b04b",
          background: "#2c3e50",
          text: "#f5f5f5",
        },
      },
      boxShadow: {
        pixel: "4px 4px 0px 0px rgba(0,0,0,0.75)",
      },
      borderWidth: {
        pixel: "4px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".crt-effect": {
          background:
            "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
          "background-size": "100% 2px, 3px 100%",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(18, 16, 16, 0.1)",
            "z-index": 2,
            "pointer-events": "none",
          },
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
