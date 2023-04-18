/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#128E74",

          "secondary": "#e866a9",

          "accent": "#21c434",

          "neutral": "#2F2839",

          "base-100": "#EBECEF",

          "info": "#53B0DF",

          "success": "#188661",

          "warning": "#EF871F",

          "error": "#E71837",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

