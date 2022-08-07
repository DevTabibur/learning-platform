/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ffae01",
          secondary: "#042954",
          accent: "#051f3e",
          neutral: "#7a8a9e",
          "base-100": "#FFFFFF",
          info: "#2ad7c5",
          success: "#28a745",
          warning: "#FBBD23",
          error: "#ff3131",
        },
      },
    ],
  },
  //...
  plugins: [require("daisyui")],
};
