import axios from 'axios';

const apiUnsplash = axios.create({
    baseURL: 'https://api.unsplash.com/photos/'
})

apiUnsplash.interceptors.request.use( req => {
    req.headers['Authorization'] = 'Client-ID 9OXEc6H7UcK3wsD1UfnyNbNRnx5PAKY72h-elHlDhF0';
    return req;
})
