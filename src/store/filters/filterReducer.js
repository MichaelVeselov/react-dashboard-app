import { ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER } from './filterActions';

export const filterReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_FILTER: {
      return !state.includes(payload) ? [...state, payload] : state;
    }

    case REMOVE_FILTER: {
      return state.filter((filter) => filter !== payload);
    }

    case CLEAR_FILTER: {
      return [];
    }

    default: {
      return state;
    }
  }
};
