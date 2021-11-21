import { AUTH,LOGOUT,SET_CURR_USER } from '../constants/actionTypes';
import jwt from 'jsonwebtoken'
import * as api from '../api/index.js';

export const signin = (formData, router) => async (dispatch) => {
  try {

    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });

    router.push('/');

    const localUser = JSON.parse(localStorage.getItem('profile'));

    console.log(data);
    console.log(localUser);

    // try {
    //   const decoded = jwt.verify(localUser.token,'test')
    //   console.log(decoded);
    //   dispatch({ type: SET_CURR_USER, payload:data });
    // } catch (error) {
    //   console.log(error);
    // }


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


export const isUserAuthenticated = () => async(dispatch) => {
  try {
    
    const localUser = JSON.parse(localStorage.getItem('profile'));

    try {
      const decoded = jwt.verify(localUser.token,'test')
      dispatch({ type: SET_CURR_USER, payload:localUser });
    } catch (error) {
      dispatch({ type: LOGOUT });
      localStorage.clear()
      console.log(error);
    }

  } catch (error) {
    console.log(error);
  }
}