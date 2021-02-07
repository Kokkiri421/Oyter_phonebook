import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://test-task-api.labilab.dev/'
});

export default axiosInstance;
