/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#BFA181',
        detail: '#444444',
        accent: '#F2E6D8',
        bg: '#F7F7F8',
      },
      fontFamily: {
        sans: ['Inter', 'Lato', 'Arial', 'sans-serif'],
        heading: ['Montserrat', 'Inter', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 