import { useContext } from 'react';
import { AuthContext } from '../auth/context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { authState } = useContext(AuthContext);

  const { pathname, search } = useLocation();

  const lastPathVisited = pathname + search;

  localStorage.setItem('lastPathVisited', lastPathVisited);

  return authState.logged ? children : <Navigate to="/login"></Navigate>;
};
