import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api/auth';

const axiosInstance = axios.create();
axiosInstance.defaults.baseURL = BASE_URL
axiosInstance.defaults.withCredentials = true
export default axiosInstance;