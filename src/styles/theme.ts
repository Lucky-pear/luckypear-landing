import baseStyled, { css, CSSProp, ThemedStyledInterface } from 'styled-components';

const sizes: { [key: string]: number; } = {
  mobile: 320,
  tablet: 768,
  desktop: 1024
};

type BackQuoteArgs = string[];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined,
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined,
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined,
}

const media: Media = {
  mobile: (...args: BackQuoteArgs) => undefined,
  tablet: (...args: BackQuoteArgs) => undefined,
  desktop: (...args: BackQuoteArgs) => undefined
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) => css`@media only screen and (min-width: ${sizes.desktop}px) {${args}}`;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) => css`@media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {${args}}`;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) => css`@media only screen and (max-width: ${sizes.tablet}px) {${args}}`;
      break;
    default:
      break;
  }
  return acc;
}, media);

const color = {
  primary: '#3bb2b8',
  secondary: '#38CFAC',
  
  darkGrey: "#2d2c2c",
  grey: "#C0C0C0",
  lightGrey: "#fafafa",

  alert: '#e02020',
  
  white: '#ffffff',
  transparent: 'transparent',
}

const shadow = {
  box: 'rgba(0, 0, 0, 0.08) 0px 1px 12px'
}

const font = {
  Roboto: 'Roboto',
  Axis: 'Axis',
  Quicksand: 'Quicksand'
}

const theme = {
  media,
  color,
  shadow,
  font
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;