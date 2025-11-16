/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./public/**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        vdsred: "#D62828",
        vdsdark: "#0F1724"
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' }
        },
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards'
      }
    },
  },
  plugins: [],
}
