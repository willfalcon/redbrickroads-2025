import type { Config } from "tailwindcss";

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      blue: '#cbf1f1',
      red: '#c72030',
      orange: '#ff914d',
      black: '#2c1a4f',
      white: 'white',
      purple: '#682df1',
      purple2: '#682d51',
      green: '#306B34',
      decoOrange: '#F3DFAE',
      decoYellow: '#EEF1D1',
      decoPink: '#EEDDD1',
      link: '#0060df',
      success: '#306B34',
      error: '#c72030',
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
      keyframes: {
        movingBg: {
          '0%': { backgroundPosition: '0 0'},
          // '50%': { 'transform': 'translateY(-50%) rotate(225deg) translateX(-66%)' },
          '100%': { backgroundPosition: '100% 100%'},
        },
      },
      animation: {
        movingBg: 'movingBg 1.5s linear infinite'
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
