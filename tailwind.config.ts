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
        fontPrimary: '#1b1b1b',
        fontSecondary: '#8B9199',
      },
    },
  },
  plugins: [],
};
export default config;
