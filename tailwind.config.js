/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [ 
   	"./src/**/*.vue", 
  	"./index.html",],
  theme: {
    extend: {
     height: {
        header: '72px',
        main: 'calc(100vh - 72px)'
      },
      boxShadow: {
        'l-white': '-10px 0 10px white',
        'l-zinc': '-10px 0 10px #18181b'
      },
      colors: {
        main: '#f44c58',
        'hover-main': '#f32836',
        'success-100': '#F2F9EC',
        'success-200': '#E4F2DB',
        'success-300': '#7EC050',
        'warn-100': '#FCF6ED',
        'warn-200': '#F8ECDA',
        'warn-300': '#DCA550',
        'error-100': '#ED7456',
        'error-200': '#f3471c',
        'error-300': '#ffffff'
      },
      backdropBlur: {
        '4xl': '240px'
      },
      variants: {
        scrollbar: ['dark']
      }
    },
  },
  plugins: [],
}

