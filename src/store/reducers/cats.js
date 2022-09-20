import {
    GET_CATEGORIES_SUCCESS, GET_CATS_REQUEST,
    GET_CATS_SUCCESS,
} from "../actions/cats";

const initialState = {
    categories: [],
    cats: [],
    selectedCategories: [],
    currentPage: 1,
    loadingCats: false,
};

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_CATEGORIES_SUCCESS: {
            const { data } = payload;

            return {
                ...state,
                categories: data,
            };
        }

        case GET_CATS_REQUEST: {
            const { page, categories } = payload;

            return {
                ...state,
                currentPage: page,
                selectedCategories: categories || [],
                loadingCats: true,
            }
        }

        case GET_CATS_SUCCESS: {
            let {data} = payload;
            const {currentPage} = state;
            const {cats} = state;

            if (currentPage > 1) {
                data = cats.concat(data)
            }

            return {
                ...state,
                cats: data,
                loadingCats: false,
            }
        }

        default: {
            return state;
        }
    }
}