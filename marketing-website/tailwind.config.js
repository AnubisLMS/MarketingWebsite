/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    padding: {
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
      '2xl': '95px',
      '3xl': '190px',
    },
    screens: {
      xs: '482px',
      sm: '640px',
      md: '768px',
      mdlg: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      maxWidth: {
        max: '1200px',
      },
      width: {
        'max': '1200px',
      },
      fontSize: {
        'base-smaller': '12px',
        base: '14px',
        'base-larger': '16px',
      },
      colors: {
        primary: '#5685F5',
        black: '#0D1117',
        gray: '#89929b',
        'gray-2': '#c6cdd5',
        'gray-3': '#161B22',
        white: '#ECF2F8',
        red: '#FA7970',
        orange: '#FAA356',
        green: '#7CE38B',
        cyan: '#A2D2FB',
        blue: '#77BDFB',
        purple: '#CEA5FB',
      }
    }
  },
  plugins: [],
}
