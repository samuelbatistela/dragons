import color from './color.token';

export type ButtonToken = {
  color: string;
  backgroundColor: string;
  borderColor: string;

  hoverColor: string;
  hoverBackgroundColor: string;
  hoverBorderColor: string;

  activeColor: string;
  activeBackgroundColor: string;
  activeBorderColor: string;
};

export const lightThemeButton: ButtonToken = {
  color: color.white,
  backgroundColor: color.primary,
  borderColor: color.primary,

  hoverColor: color.primary,
  hoverBackgroundColor: 'transparent',
  hoverBorderColor: color.white,

  activeColor: color.white,
  activeBackgroundColor: color.primary,
  activeBorderColor: color.primary,
};

export const darkThemeButton: ButtonToken = {
  color: color.black,
  backgroundColor: color.primary,
  borderColor: color.primary,

  hoverColor: color.primary,
  hoverBackgroundColor: 'transparent',
  hoverBorderColor: color.black,

  activeColor: color.black,
  activeBackgroundColor: color.primary,
  activeBorderColor: color.primary,
};
