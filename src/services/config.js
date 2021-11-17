import axios from "axios";

export const apiUrl = 'http://localhost:5000';
export const userUrl = '/users';

export const config = {
    baseURL: apiUrl,
}
export const axiosInstance = axios.create(config);
