/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,css}",],
  important: "#root",
  theme: {
    extend: {
      colors: {
        "background": "var(--background)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "main-text-color": "var(--main-text-color)",
        "secondary-text-color": "var(--secondary-text-color)",
        "secondary-blue-text-color": "var(--secondary-blue-text-color)",
        "semantic-background": "var(--semantic-background)",
        "nav-gradient": "var(--nav-background-gradient)",
        "nav-shadow": "var(--nav-shadow)",
        "nav-color": "var(--nav-color)"
      },
      fontFamily: {
        "BaLoo": "BaLoo"
      },
      padding: {
        "app-padding": "var(--app-padding)"
      }
    },
  },
  plugins: [],
}