/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#212529",
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: true,
    darkTheme: "night"
  }
}

