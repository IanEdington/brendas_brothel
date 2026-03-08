import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0E0205',
        'deep-burgundy': '#3D0A14',
        'crimson': '#8B1A2A',
        'gold': '#D4AF37',
        'pale-gold': '#F0D060',
        'rose': '#C47D8E',
        'cream': '#FFF8F0',
        'velvet': '#5C1020',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Nunito', 'sans-serif'],
        handwritten: ['Caveat', 'cursive'],
      },
      animation: {
        'gradient-flow': 'gradient-flow 15s ease infinite',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'gold-shimmer': 'gold-shimmer 3s ease-in-out infinite',
        'curtain-slow': 'curtain-slow 14s ease-in-out infinite',
        'curtain-fast': 'curtain-fast 9s ease-in-out infinite',
      },
      keyframes: {
        'gradient-flow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'fade-in': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'gold-shimmer': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'curtain-slow': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.7' },
          '25%': { transform: 'translate(50px, -30px) scale(1.1)', opacity: '0.6' },
          '50%': { transform: 'translate(-40px, 40px) scale(1.05)', opacity: '0.5' },
          '75%': { transform: 'translate(30px, 20px) scale(1.08)', opacity: '0.65' },
        },
        'curtain-fast': {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg) scale(1)', opacity: '0.4' },
          '20%': { transform: 'translate(-30px, 25px) rotate(5deg) scale(1.06)', opacity: '0.5' },
          '40%': { transform: 'translate(40px, -15px) rotate(-4deg) scale(0.96)', opacity: '0.35' },
          '60%': { transform: 'translate(-20px, -25px) rotate(7deg) scale(1.04)', opacity: '0.45' },
          '80%': { transform: 'translate(25px, 20px) rotate(-6deg) scale(0.99)', opacity: '0.38' },
        },
      },
    },
  },
  plugins: [],
}

export default config
