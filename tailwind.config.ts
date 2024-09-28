import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6064',
        secondary: '#F1E5DD',
        tertiary: '#EBF7F5',
        fontPrimary: '#1b1b1b',
        fontSecondary: '#8B9199',
      },
      boxShadow: {
        custom: '0 15px 40px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
