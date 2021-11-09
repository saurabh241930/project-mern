import { AUTH_ERROR, CART_ERROR } from '../constants/actionTypes';

export default (errors = [], action) => {
  switch (action.type) {
    case AUTH_ERROR:
      return action.payload;
    default:
      return errors;
  }
};

