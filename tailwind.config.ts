import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1f8cff',
          red: '#f44336',
          ink: '#0b0f14',
          charcoal: '#121821',
          slate: '#8997a8',
          silver: '#c8d0db'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(31, 140, 255, 0.25), 0 10px 30px rgba(0,0,0,0.45)'
      },
      backgroundImage: {
        grain:
          'radial-gradient(circle at 20% 20%, rgba(31,140,255,0.08), transparent 35%), radial-gradient(circle at 80% 0%, rgba(244,67,54,0.08), transparent 30%)'
      }
    }
  },
  plugins: []
} satisfies Config
