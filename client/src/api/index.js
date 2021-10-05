import axios from 'axios';


const url = 'http://localhost:5000/angles';

export const fetchAngles = () => axios.get(url)
