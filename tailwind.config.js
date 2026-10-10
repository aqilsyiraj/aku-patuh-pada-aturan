/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: {
          soft: '#E0F2FE',
          card: '#F0F9FF',
        },
        mint: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
        },
        sunshine: {
          100: '#FEF9C3',
          300: '#FDE047',
          400: '#FACC15',
          500: '#EAB308',
        },
        tangerine: {
          100: '#FFEDD5',
          400: '#FB923C',
          500: '#F97316',
        },
        berry: {
          100: '#FCE7F3',
          400: '#F472B6',
          500: '#EC4899',
        }
      },
      fontFamily: {
        bubble: ['"Fredoka"', '"Nunito"', 'Comic Sans MS', 'sans-serif'],
        reading: ['"Quicksand"', '"Nunito"', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounceGentle 2s infinite ease-in-out',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 2.5s infinite',
        'wave-hand': 'waveHand 1.5s ease-in-out infinite',
        'walk-bob': 'walkBob 1s ease-in-out infinite',
      },
      keyframes: {
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.03)' },
        },
        waveHand: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(15deg)' },
          '75%': { transform: 'rotate(-10deg)' },
        },
        walkBob: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '25%': { transform: 'translateY(-4px) rotate(2deg)' },
          '75%': { transform: 'translateY(-4px) rotate(-2deg)' },
        }
      }
    },
  },
  plugins: [],
}
