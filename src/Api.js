import axios from 'axios';
import qs from 'qs'

const version = 'v1';

const api = axios.create({
    baseURL: `https://api.thecatapi.com/${version}`,
});

api.interceptors.request.use((config) => {
    config.headers.accept = 'application/json';
    return config;
}, Promise.reject);


class Api {
    static getCats(page, categoryIds = []) {
        return api.get('/images/search', {
            params: {
                limit: 10,
                page,
                category_ids: categoryIds
            },
            paramsSerializer: params => {
                return qs.stringify(params, {arrayFormat: 'comma'})
            },
        });
    }

    static getCategories() {
        return api.get('/categories');
    }
}

export default Api;