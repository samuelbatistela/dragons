import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';
import user from './user/user.reducer';
import dragons from './dragons/dragons.reducer';

const rootReducer = combineReducers({
  theme,
  user,
  dragons,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
