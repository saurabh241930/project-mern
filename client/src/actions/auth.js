import { AUTH,LOGOUT,SET_USER } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {

    console.log(formData);
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
    console.log(formData);
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
    localStorage.clear()
    router.push('/');
  } catch (error) {
    console.log(error);
  }
}


export const setCurrentUser = (data) => async(dispatch) => {
  try {
    dispatch({ type: SET_USER, payload:data });
  } catch (error) {
    console.log(error);
  }
}