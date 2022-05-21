module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#03045E",
          secondary: "#00B4D8",
          accent: "#90E0EF",
          neutral: "#374151",
          "base-100": "#CAF0F8",
        },
      },
    ],
  },
};
