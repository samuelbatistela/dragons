import { UserState, UserTypes, SET_USER, SET_RESET_USER } from './user.types';

const initialState: UserState = {
  user: null,
};

const userReducer = (state = initialState, action: UserTypes) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_RESET_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
