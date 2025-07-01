import { combineReducers } from 'redux';

import theme from './theme/theme.reducer';
import user from './user/user.reducer';

const rootReducer = combineReducers({
  theme,
  user,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
