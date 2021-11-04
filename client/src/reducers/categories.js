import { FETCH_ALL } from '../constants/actionTypes';

export default (categories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    default:
      return categories;
  }
};

