import { MY_CART } from '../constants/actionTypes';

export default (cart = [], action) => {
  switch (action.type) {
    case MY_CART:
      return action.payload;
    default:
      return cart;
  }
};

