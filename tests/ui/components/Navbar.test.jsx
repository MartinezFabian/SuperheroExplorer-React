/* eslint-disable no-undef */
import { fireEvent, render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';
import { MemoryRouter, useNavigate } from 'react-router-dom';
import { Navbar } from '../../../src/ui/components/Navbar';

// crea una función ficticia que simularemos como una función useNavigate de react-router-dom
const mockUseNavigate = jest.fn();

// Mockeamos el módulo 'react-router-dom' por completo, todas las funciones y componentes que este módulo exporta
jest.mock('react-router-dom', () => {
  // Devolvemos un objeto que incluye todas las funciones y componentes del módulo 'react-router-dom'
  return {
    ...jest.requireActual('react-router-dom'), // Mantenemos todas las funciones del módulo 'react-router-dom'
    useNavigate: () => mockUseNavigate, //reemplazamos 'useNavigate' por nuestra función simulada.
  };
});

describe('tests in Navbar.jsx', () => {
  const contextValue = {
    authState: {
      logged: true,
      username: 'Fabian Martinez',
    },

    logout: jest.fn(),
  };

  // limpiar los mocks antes de cada prueba
  beforeEach(() => jest.clearAllMocks());

  test('must display the username', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar></Navbar>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Fabian Martinez')).toBeTruthy();
  });

  test('Logout button must call logout() and navigate to login', () => {
    render(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter>
          <Navbar></Navbar>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    const btnLogout = screen.getByRole('button');
    fireEvent.click(btnLogout);

    expect(contextValue.logout).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith('/login', { replace: true });
  });
});
