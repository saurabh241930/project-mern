import { FETCH_MARBLES } from '../constants/actionTypes';

export default (marbles = [], action) => {
  switch (action.type) {
    case FETCH_MARBLES:
      return action.payload;
    default:
      return marbles;
  }
};

