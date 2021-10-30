import { combineReducers } from 'redux';

import categories from './categories';
import auth from './auth';

export const reducers = combineReducers({ categories,auth });
