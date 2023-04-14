import { ADD_POSITIONS } from './positionActions';

export const positionReducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_POSITIONS: {
      return payload;
    }

    default: {
      return state;
    }
  }
};
