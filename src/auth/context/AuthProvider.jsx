import { useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
import { AuthContext } from './AuthContext';
import { types } from '../types/types';

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  const login = (username = 'anonymous') => {
    dispatch({
      type: types.login,
      username: username,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login: login }}>{children}</AuthContext.Provider>
  );
};
