import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**',
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          100: '#EBE5ED',
          700: '#C6B3CF',
        },
        indigo: {
          100: '#DEDFEF',
          700: '#ADAFD0',
        },
        green: {
          100: '#D1D7CE',
          700: '#A8B0A4',
        },
        sky: {
          100: '#E2EAEE',
          700: '#B6C1C6',
        },
      },
      keyframes: {
        open: {
          '0%': {
            opacity: '1',
            transform: 'translateX(100%)',
          },
        },
        close: {
          to: {
            opacity: '0',
            transform: 'translateX(100%)',
          },
        },
      },
      animation: {
        'drawer-open': 'open 0.3s ease-in-out',
        'drawer-close': 'close 0.3s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
