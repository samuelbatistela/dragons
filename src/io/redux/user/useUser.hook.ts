/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../root.reducer';
import { UserState, UserTypes, SET_USER, SET_RESET_USER } from './user.types';

const useUser = () => {
  const { user } = useSelector<AppState, UserState>(({ user }) => user);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch<Dispatch<UserTypes>>();

  const authenticateUser = useCallback(
    async (user: any) => {
      setIsLoading(true);

      if (user.user !== 'admin' || user.password !== '123456') {
        setIsLoading(false);
        return false;
      }

      dispatch({
        type: SET_USER,
        payload: user,
      });

      setIsLoading(false);

      return true;
    },
    [dispatch],
  );

  const unauthenticate = useCallback(() => {
    dispatch({
      type: SET_RESET_USER,
      payload: null,
    });

    localStorage.removeItem('token');
  }, [dispatch]);

  const isAuthenticated = () => {
    return user;
  };

  return {
    user,
    isLoading,
    authenticateUser,
    isAuthenticated,
    unauthenticate,
  };
};

export default useUser;
