import { AUTH,LOGOUT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: AUTH, data });
    console.log(JSON.parse(localStorage.getItem('profile')));
    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};


export const signout = (router) => async(dispatch) => {
  try {
    dispatch({ type: LOGOUT });
    router.push('/');
  } catch (error) {
    console.log(error);
  }
}