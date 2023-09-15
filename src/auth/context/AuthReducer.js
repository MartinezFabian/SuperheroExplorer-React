import { types } from '../types/types';

export const AuthReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case types.login: {
      return {
        ...state,
        logged: true,
        username: action.username,
      };
    }
    case types.logout: {
      return {
        logged: false,
      };
    }
    default: {
      throw new Error('Unknown action: ' + action.type);
    }
  }
};
