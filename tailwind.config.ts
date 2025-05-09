import type { Config } from 'tailwindcss';
export default <Config>{
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5C8BFF',
        dark: '#15171C'
      }
    }
  },
  plugins: []
};