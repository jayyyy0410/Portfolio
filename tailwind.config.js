/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fdfbf7",
        pencil: "#2d2d2d",
        erased: "#e5e0d8",
        accent: "#ff4d4d",
        bluepen: "#2d5da1",
        postit: "#fff9c4",
      },
      fontFamily: {
        heading: ["var(--font-kalam)", "cursive"],
        body: ["var(--font-patrick)", "cursive"],
      },
      boxShadow: {
        hard: "4px 4px 0px 0px #2d2d2d",
        hardLg: "8px 8px 0px 0px #2d2d2d",
        hardSm: "2px 2px 0px 0px #2d2d2d",
        subtle: "3px 3px 0px 0px rgba(45, 45, 45, 0.1)",
      },
      borderRadius: {
        wobbly: "255px 15px 225px 15px / 15px 225px 15px 255px",
        wobblyMd: "200px 25px 180px 20px / 20px 180px 25px 200px",
      },
    },
  },
  plugins: [],
};