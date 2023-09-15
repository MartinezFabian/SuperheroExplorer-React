import { types } from '../types/types';

const initialState = {
  logged: false,
};

export const AuthReducer = (state = initialState, action = {}) => {
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
