/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // Forces Tailwind to load these color classes
    { pattern: /(bg|text|border)-(indigo|emerald|rose|sky|violet)-(50|100|200|300|400|500|600|700|900)/ }
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
