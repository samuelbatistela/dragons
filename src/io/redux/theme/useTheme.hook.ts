import { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppState } from '../root.reducer';
import { SET_THEME, ThemeState, ThemeTypes } from './theme.types';

const useTheme = () => {
  const { theme } = useSelector<AppState, ThemeState>(({ theme }) => theme);

  const dispatch = useDispatch<Dispatch<ThemeTypes>>();

  const toggleTheme = () =>
    dispatch({
      type: SET_THEME,
      payload: theme === 'dark' ? 'light' : 'dark',
    });

  return {
    theme,
    toggleTheme,
  };
};

export default useTheme;
