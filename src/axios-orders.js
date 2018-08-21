import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://...' //insert link to db
});

export default instance;

