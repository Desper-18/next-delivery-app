/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      "title": "#303030",
      "captions": "#A7AED2",
      "body": "#73798C",
      "green": "#46C578",
      "paleGreen": "#74D69A",
      "red": "#FF3D3D",
      "gray": "#F4F5FA",
      "lightGray": "#F0F0F0",
      "white": "#fff",
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    }
  },
  plugins: [],
}
