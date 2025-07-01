import { SET_THEME, ThemeState, ThemeTypes } from './theme.types';

const initialState: ThemeState = {
  theme: 'light',
};

const themeReducer = (state = initialState, action: ThemeTypes) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
