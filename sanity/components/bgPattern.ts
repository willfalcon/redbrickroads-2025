import { css } from 'styled-components';

const theme = {
  blue: '#cbf1f1',
  red: '#c72030',
  orange: '#ff914d',
  black: '#2c1a4f',
  white: 'white',
  purple: '#682df1',
  deco: {
    orange: '#F3DFAE',
    yellow: '#EEF1D1',
    pink: '#EEDDD1',
  },
  font: {
    family: '"Open Sans", sans-serif',
    heading: '"glacial_indifferencebold", sans-serif',
    headingRegular: '"glacial_indifferenceregular", sans-serif',
    headingItalic: '"glacial_indifferenceitalic", sans-serif',
    medium: 500,
    bold: 700,
  },
  sizes: {
    break: 768,
    large: 1024,
    content: 800,
  },
  grid: {
    enabled: true,
  },
};

const bgPattern = css`
  position: relative;
  background: ${theme.deco.orange};
  ::before,
  ::after {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    z-index: 0;
    border-style: solid;
  }
  ::before {
    left: 0;

    background: ${theme.deco.yellow};
    border-color: ${theme.deco.yellow};
    border-right-color: ${theme.deco.orange};
    /* border-top-color: red;
    border-right-color: blue;
    border-bottom-color: green;
    border-left-color: orange; */
    border-left-width: ${({ wrapperSize }) => wrapperSize.width * 0.15}px;
    border-bottom-width: 0;
    border-right-width: ${({ wrapperSize }) => wrapperSize.width * 0.27}px;
    border-right-width: ${({ wrapperSize, leftAngle = 63 }) =>
      wrapperSize.height / Math.tan(leftAngle * (Math.PI / 180))}px;
    border-top-width: ${({ wrapperSize }) => wrapperSize.height}px;
    ${({ reverse, wrapperSize, leftAngle }) =>
      reverse &&
      `
        border-color: ${theme.deco.pink};
        border-right-color: ${theme.deco.orange};
        border-left-width: ${wrapperSize.width * 0.15}px;
        border-right-width: ${
          wrapperSize.height / Math.tan(leftAngle * (Math.PI / 180))
        }px;
        border-top-width: ${wrapperSize.height}px;
    `}
  }
  ::after {
    right: 0;

    background: ${theme.deco.pink};

    border-color: ${theme.deco.pink};
    border-left-color: ${theme.deco.orange};
    border-right-width: ${({ wrapperSize }) => wrapperSize.width * 0.15}px;
    border-left-width: ${({ wrapperSize }) => wrapperSize.width * 0.1}px;
    border-left-width: ${({ wrapperSize, rightAngle = 79 }) =>
      wrapperSize.height / Math.tan(rightAngle * (Math.PI / 180))}px;
    border-top-width: ${({ wrapperSize }) => wrapperSize.height}px;
    ${({ reverse, wrapperSize, rightAngle }) =>
      reverse &&
      `
      background: ${theme.deco.yellow};
      border-color: ${theme.deco.yellow};
      border-left-color: ${theme.deco.orange};
      border-right-width: ${wrapperSize.width * 0.15}px;
      border-left-width: ${
        wrapperSize.height / Math.tan(rightAngle * (Math.PI / 180))
      }px;
      border-top-width: ${wrapperSize.height}px;
    `}
  }
`;

export default bgPattern;
