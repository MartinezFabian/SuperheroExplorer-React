import { AuthReducer } from '../../../src/auth/context/AuthReducer';
import { types } from '../../../src/auth/types/types';

/* eslint-disable no-undef */
describe('tests in AuthReducer.js', () => {
  test('must set logged to true and set the username', () => {
    const initialState = {
      logged: false,
    };

    const action = {
      type: types.login,
      username: 'Fabian Martinez',
    };

    const state = AuthReducer(initialState, action);

    expect(state.logged).toBe(true);
    expect(state.username).toBe(action.username);
  });

  test('must set logged to false and delete username ', () => {
    const initialState = {
      logged: true,
      username: 'Fabian Martinez',
    };

    const action = {
      type: types.logout,
    };

    const newState = AuthReducer(initialState, action);

    expect(newState.logged).toBe(false);
    expect(newState.username).toBe(undefined);
  });
});
