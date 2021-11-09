import axios from 'axios';



const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
});


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchCategories = () => API.get('/categories');
export const fetchMarblesByCategory = (categoryQuality) => API.get(`/marbles/${categoryQuality}`)
export const fetchAllMarblesAnglewise = () => API.get('/marbles/all/anglwise')

export const cartAction = (marbleId) => API.get(`/cart/action/${marbleId}`)
export const myCart = () => API.get('/cart/mycart')

