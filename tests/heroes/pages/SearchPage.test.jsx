import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SearchPage } from '../../../src/heroes/pages/SearchPage';

/* eslint-disable no-undef */
describe('tests in SearchPage.jsx', () => {
  test('must be displayed correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );

    expect(container).toMatchSnapshot();
  });

  test('superman must be shown and alert not found must have display on none', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=superman']}>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );

    const h3 = screen.getByRole('heading', { level: 3 });
    expect(h3.textContent).toBe('Superman');

    const img = screen.getByRole('img');
    expect(img.src).toContain('/img/dc-superman.jpg');

    const alertNotFound = screen.getByLabelText('alert-not-found');
    expect(alertNotFound.style.display).toBe('none');
  });

  test('must display the alert if it is a non-existent hero', () => {
    render(
      <MemoryRouter initialEntries={['/search?q=nonexistenthero']}>
        <SearchPage></SearchPage>
      </MemoryRouter>
    );

    const alertNotFound = screen.getByLabelText('alert-not-found');
    expect(alertNotFound.style.display).toBe('');
  });
});
