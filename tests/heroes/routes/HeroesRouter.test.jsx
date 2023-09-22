import { MemoryRouter } from 'react-router-dom';
import { HeroesRouter } from '../../../src/heroes/routes/HeroesRouter';
import { render, screen } from '@testing-library/react';
import { AuthContext } from '../../../src/auth/context/AuthContext';

/* eslint-disable no-undef */
describe('test in HeroesRouter.jsx', () => {
  const authState = {
    logged: true,
    username: 'Fabian Martinez',
  };

  test("must display MarvelPage for path '/marvel'", () => {
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/marvel']}>
          <HeroesRouter></HeroesRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThan(1);
  });

  test("must display DcPage for path '/dc'", () => {
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/dc']}>
          <HeroesRouter></HeroesRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText('DC').length).toBeGreaterThan(1);
  });

  test("must display SearchPage for path '/search'", () => {
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/search']}>
          <HeroesRouter></HeroesRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Type the hero name')).toBeTruthy();
  });

  test("must display HeroPage for path '/hero/:id'", () => {
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/hero/dc-batman']}>
          <HeroesRouter></HeroesRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('Batman')).toBeTruthy();
  });

  test("must display NotFoundPage for path '/404'", () => {
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/404']}>
          <HeroesRouter></HeroesRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('404: This page could not be found.')).toBeTruthy();
  });

  test("must redirect to '/marvel' for path '/'", () => {
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/']}>
          <HeroesRouter></HeroesRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getAllByText('Marvel').length).toBeGreaterThan(1);
  });

  test("must redirect to '/404' for unknown path", () => {
    render(
      <AuthContext.Provider value={{ authState }}>
        <MemoryRouter initialEntries={['/unknown']}>
          <HeroesRouter></HeroesRouter>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(screen.getByText('404: This page could not be found.')).toBeTruthy();
  });
});
