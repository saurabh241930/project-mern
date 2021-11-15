import { FETCH_MARBLES} from '../constants/actionTypes';
import * as api from '../api/index.js';

export const getMarblesByCategory = (categoryQuality) => async (dispatch) => {
  try {
    const { data } = await api.fetchMarblesByCategory(categoryQuality);
    dispatch({ type: FETCH_MARBLES, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};


export const getMarblesAnglewise = () => async (dispatch) => {
    try {
      const { data } = await api.fetchAllMarblesAnglewise();
      dispatch({ type: FETCH_MARBLES, payload: data.sort((a,b) => {return  (a._id - b._id)}) });
    } catch (error) {
      console.log(error.message);
    }
  };

