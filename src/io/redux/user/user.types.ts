/* eslint-disable @typescript-eslint/no-explicit-any */
export type UserState = {
  user: any | null;
};

export const SET_USER = 'SET_USER';
export const SET_RESET_USER = 'SET_RESET_USER';

type setUser = {
  type: typeof SET_USER;
  payload: any | null;
};

type setResetUser = {
  type: typeof SET_RESET_USER;
  payload: any | null;
};

export type UserTypes = setUser | setResetUser;
