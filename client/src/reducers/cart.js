import { MY_CART ,CART_ACTION} from '../constants/actionTypes';

export default (state = {cart:null}, action) => {
  switch (action.type) {
    case MY_CART:
      return {...state,cart:action.payload,errors:null}
    case CART_ACTION:
      console.log("dd");
      console.log(action.payload);
      return {...state,cart:action.payload,errors:null}  
    default:
      return state;
  }
};

