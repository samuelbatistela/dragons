import { ThemeType } from '@/themes/tokens/theme.token';

export type ThemeState = {
  theme: ThemeType;
};

export const SET_THEME = 'SET_THEME';

type setTheme = {
  type: typeof SET_THEME;
  payload: ThemeType;
};

export type ThemeTypes = setTheme;
