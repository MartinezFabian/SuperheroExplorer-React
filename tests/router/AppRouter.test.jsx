/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext';
import { AppRouter } from '../../src/router/AppRouter';

describe('tests in AppRouter.jsx', () => {
  test('must display login if not authenticated', () => {
    const authState = {
      logged: false,
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <AppRouter></AppRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Login')).toBeTruthy();
    expect(screen.getByText('Type the username...')).toBeTruthy();
  });

  test("must show '/marvel' if authenticated", () => {
    const authState = {
      logged: true,
      username: 'Fabian Martinez',
    };

    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/login']}>
          <AppRouter></AppRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThan(1);
  });
});
