export const GET_CATEGORIES_REQUEST = 'GET_CATEGORIES_REQUEST';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAIL = 'GET_CATEGORIES_FAIL';

export function getCategories() {
    return {
        type: GET_CATEGORIES_REQUEST,
    };
}

export const GET_CATS_REQUEST = 'GET_CATS_REQUEST';
export const GET_CATS_SUCCESS = 'GET_CATS_SUCCESS';
export const GET_CATS_FAIL = 'GET_CATS_FAIL';

export function getCats(page, categories) {
    return {
        type: GET_CATS_REQUEST,
        payload: {
            page,
            categories,
        }
    }
}