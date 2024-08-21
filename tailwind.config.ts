import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      blue: '#cbf1f1',
      red: '#c72030',
      orange: '#ff914d',
      black: '#2c1a4f',
      white: 'white',
      purple: '#682df1',
      purple2: '#682d51',
      decoOrange: '#F3DFAE',
      decoYellow: '#EEF1D1',
      decoPink: '#EEDDD1',
      link: '#0060df',
    },
    fontFamily: {
      sans: ['open-sans', 'sans-serif'],
      heading: ['glacial_indifferencebold', 'sans-serif'],
      headingRegular: ['glacial_indifferenceregular', 'sans-serif'],
      headingItalic: ['glacial_indifferenceitalic', 'sans-serif'],
      code: ['source-code-pro', 'monospace'],
    },
    extend: {
      width: {
        content: '800px',
      },
      backgroundImage: {
        'string-lights': "url('/elements-string-light.png')",
      },
    },
  },
  plugins: [],
};
export default config;
