import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0b1220',
        pine: '#0f2a1c',
        ember: '#ff6b3d',
        snow: '#f5f7ff'
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 165, 90, 0.35)',
        frost: '0 8px 30px rgba(181, 199, 255, 0.35)'
      },
      backgroundImage: {
        'snow-texture': 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6) 0, transparent 40%), radial-gradient(circle at 80% 10%, rgba(255,255,255,0.6) 0, transparent 45%), radial-gradient(circle at 60% 80%, rgba(255,255,255,0.45) 0, transparent 35%)'
      }
    }
  },
  plugins: []
};

export default config;
