/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      'sm':'770px',
      'md':'1300px'
    },
    extend: {
      boxShadow: {
        custom: '0px 1px 1px 0px rgba(100, 116, 139, 0.05)',
        'custom-light': '0px 1px 3px 0px #1018281A', // Equivalent to #64748B0D
      },
    },
  },
  plugins: [],
};
