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
        scrollbar: 'var(--scrollbar)',
        scrollbarHover: 'var(--scrollbarHover)',
        hover: 'var(--hover)',
        hover2: 'var(--hover2)',
        input: 'var(--input)',
        border: "var(--border)",
        button: 'var(--button)',
        buttonHover: 'var(--buttonHover)',
        buttonHover2: 'var(--buttonHover2)',
        goldColor: 'var(--goldColor)',
        goldColorHover: 'var(--goldColorHover)',
        greenColor: 'var(--greenColor)',
        greenColorHover: 'var(--greenColorHover)',
        redColor: 'var(--redColor)',
        redColorHover: 'var(--redColorHover)',
        baseText: 'var(--baseText)',
        alternateText: 'var(--alternateText)',
        baseHoverText: 'var(--baseHoverText)',
        tooltip: 'var(--tooltip)',
        
      },
      fontFamily: {
        fontEnglishInter: 'var(--fontEnglishInter)',
        fontEnglishJost: 'var(--fontEnglishJost)',
        fontEnglishSystem: 'var(--fontEnglishSystem)',
        fontEnglishArial: 'var(--fontEnglishArial)',
      }
    },
  },
  plugins: [],
}

