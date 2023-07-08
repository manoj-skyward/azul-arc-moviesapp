import axios from 'axios';

export const API_KEY = 'cec566a1';

const BASE_URL = 'https://api.themoviedb.org/3/';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/';
const api = axios.create({baseURL: BASE_URL});

export default api;
