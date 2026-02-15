/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#070d14',
          surface: '#0f1724',
          elevated: '#141f31',
          text: '#e6edf8',
          muted: '#9db0c8',
          accent: '#ff8a00',
          alt: '#00d2c8',
          line: '#243449',
        },
      },
      fontFamily: {
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 80px rgba(255, 138, 0, 0.2)',
        panel: '0 14px 34px rgba(2, 9, 23, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseline: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        pulseline: 'pulseline 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
