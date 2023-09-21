/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { PublicRoute } from '../../src/router/PublicRoute';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('test in <PublicRoute></PublicRoute>', () => {
  test('if authenticated must navigate to "/"', () => {
    const authState = {
      logged: true,
      username: 'Fabian Martinez',
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/login']}>
          <Routes>
            <Route
              path="login"
              element={
                <PublicRoute>
                  <h1>Public Route</h1>
                </PublicRoute>
              }
            ></Route>
            <Route path="/" element={<h1>Marvel</h1>}></Route>
          </Routes>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Marvel')).toBeTruthy();
  });

  test('if not authenticated must show the children', () => {
    const authState = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <PublicRoute>
          <h1>Public Route</h1>
        </PublicRoute>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Public Route')).toBeTruthy();
  });
});
