import axios from 'axios';

const api = axios.create({
  baseURL: 'https://myprojectnodereact.onrender.com/api',
});

export default api;
