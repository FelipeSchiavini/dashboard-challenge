/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("@tailwindcss/typography"),],
  daisyui: {
    themes: ["fantasy"],
  },
  variants: {
    accessibility: ['responsive', 'focus', 'hover', 'active']
  }
}

