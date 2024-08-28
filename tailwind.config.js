/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
   theme: {
    extend: {
      fontFamily: {
        rounded: ['Rubik', 'sans-serif'], 
      },
      inset: {
        'line-bottom': '-10px',
      },
      width: {
        '350p': '350%',
      },
      borderWidth: {
        'line': '2px',
      },
      borderColor: {
        'line-gray': 'gray',
      },
      transitionProperty: {
        'none': 'none',
      },
      zIndex: {
        'line': '0',
      },
     
      keyframes: {
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOutAndSlideIn: {
          '0%': { width: '350%', borderColor: 'transparent' },
          '50%': { width: '0', borderColor: 'transparent' },
          '100%': { width: '350%', borderColor: 'gray' },
        },
        slideRightEnter: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideRightLeave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideDownEnter: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideDownLeave: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      
      },
      animation: {
        fadeInDown: 'fadeInDown 5s ease forwards',
        fadeOutAndSlideIn: 'fadeOutAndSlideIn 1s ease forwards',
        'slide-right-enter': 'slideRightEnter 1s ease forwards',
        'slide-right-leave': 'slideRightLeave 1s ease forwards',
        'slide-down-enter': 'slideDownEnter 1s ease forwards',
        'slide-down-leave': 'slideDownLeave 1s ease forwards',
      },
      
      
    },
    variants: {
      animation: ['responsive', 'motion-safe', 'motion-reduce'],
    },
    plugins: [],
  
  }

 

