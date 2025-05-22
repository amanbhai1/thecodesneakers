module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html" // This line was already correct
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f1f14a',
        dark: '#090909',
        'dark-secondary': '#0e0e0e',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
      transitionProperty: {
        'colors': 'color, background-color, border-color',
        'spacing': 'margin, padding',
        'transform': 'transform'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      }
    }
  }
}