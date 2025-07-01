import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';

const rootReducer = combineReducers({
  theme,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
