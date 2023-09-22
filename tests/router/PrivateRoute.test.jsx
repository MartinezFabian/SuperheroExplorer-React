/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../../src/router/PrivateRoute';

describe('test in <PrivateRoute></PrivateRoute>', () => {
  test('if authenticated must show the children and localStorage must be called', () => {
    Storage.prototype.setItem = jest.fn();

    const authState = {
      logged: true,
      username: 'Fabian Martinez',
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <PrivateRoute>
            <h1>Private Route</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Private Route')).toBeTruthy();

    expect(localStorage.setItem).toHaveBeenCalledWith('lastPathVisited', '/marvel');
  });

  test('if not authenticated must navigate to "/login"', () => {
    const authState = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <h1>Marvel</h1>
                </PrivateRoute>
              }
            ></Route>

            <Route path="/login" element={<h1>Login</h1>}></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Login')).toBeTruthy();
  });
});
