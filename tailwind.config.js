/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ["Lora", "serif"],
      },
      colors: {
        vintage: {
          paper: "#F7E6D0",
          cream: "#FFF6E9",
          sepia: "#704214",
          coffee: "#3E2723",
          rust: "#8B4513",
          gold: "#B8860B",
          sage: "#687864",
          shadow: "#2C1810",
        },
      },
      backgroundImage: {
        "vintage-texture":
          "url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
