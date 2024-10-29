/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        hover: 'var(--hover)',
        hover2: 'var(--hover2)',
        input: 'var(--input)',
        border: "var(--border)",
        button: 'var(--button)',
        buttonHover: 'var(--buttonHover)',
        goldColor: 'var(--goldColor)',
        goldColorHover: 'var(--goldColorHover)',
        greenColor: 'var(--greenColor)',
        greenColorHover: 'var(--greenColorHover)',
        redColor: 'var(--redColor)',
        redColorHover: 'var(--redColorHover)',
        baseText: 'var(--baseText)',

      }
    },
  },
  plugins: [],
}

