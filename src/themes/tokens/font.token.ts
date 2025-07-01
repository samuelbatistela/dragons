export const fontFamily = "'Open Sans', sans-serif";

export const fontWeight = {
  regular: 400,
  semiBold: 600,
};

export const fontSize = {
  tiny: 10,
  verySmall: 11,
  small: 12,
  medium: 14,
  large: 18,
  big: 16,
  xbig: 22,
  xxbig: 26,
  xxxbig: 32,
  dashboardCardSmall: 44,
  dashboardCardBig: 48,
  h1: 28,
  h2: 24,
  h3: 20,
  h4: 14,
};

export type Font = {
  family: string;

  weight: typeof fontWeight;

  color: {
    primary: string;
    secondary: string;
  };

  size: typeof fontSize;
};
