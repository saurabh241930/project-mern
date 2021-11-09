import { combineReducers } from 'redux';

import categories from './categories';
import auth from './auth';
import marbles  from './marbles';
import cart from './cart';
import errors from './errors';

export const reducers = combineReducers({ categories,auth,marbles,cart,errors });
