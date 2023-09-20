import { types } from '../../../src/auth/types/types';

/* eslint-disable no-undef */
describe('tests in types.js', () => {
  test('must return these types', () => {
    expect(types).toEqual({
      login: '[Auth] Login',
      logout: '[Auth] Logout',
    });
  });
});
