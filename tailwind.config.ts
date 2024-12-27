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
    },
  },
  plugins: [],
};
export default config;
