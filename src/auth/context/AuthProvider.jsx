import { useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
import { AuthContext } from './AuthContext';

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(AuthReducer, initialState);

  return <AuthContext.Provider value={{ authState, dispatch }}>{children}</AuthContext.Provider>;
};
