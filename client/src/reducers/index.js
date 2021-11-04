import { combineReducers } from 'redux';

import categories from './categories';
import auth from './auth';
import marbles  from './marbles';

export const reducers = combineReducers({ categories,auth,marbles });
