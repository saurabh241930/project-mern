import {CART_ACTION} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const cartAction = (marbleId) => async (dispatch) => {
  try {
    const { data } = await api.cartAction(marbleId);
    // dispatch({ type: CART_ACTION, payload: data });
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

