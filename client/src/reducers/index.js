import { combineReducers } from 'redux';

import angles from './angles';
import auth from './auth';

export const reducers = combineReducers({ angles,auth });
