import { useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
import { AuthContext } from './AuthContext';
import { types } from '../types/types';

const initialState = {
  logged: false,
};

const init = () => {
  const user = localStorage.getItem('username');

  return {
    logged: !!user,
    username: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState, init);

  const login = (username = 'anonymous') => {
    dispatch({
      type: types.login,
      username: username,
    });

    localStorage.setItem('username', username);
  };

  const logout = () => {
    dispatch({
      type: types.logout,
    });

    localStorage.removeItem('username');
  };

  return (
    <AuthContext.Provider value={{ authState, login: login, logout: logout }}>
      {children}
    </AuthContext.Provider>
  );
};
