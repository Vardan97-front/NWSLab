import {
    takeLatest, put, call,
} from 'redux-saga/effects';
import Api from "../../Api";
import {
    GET_CATEGORIES_FAIL,
    GET_CATEGORIES_REQUEST,
    GET_CATEGORIES_SUCCESS,
    GET_CATS_FAIL,
    GET_CATS_REQUEST,
    GET_CATS_SUCCESS,
} from '../actions/cats';

export default function* watcher() {
    yield takeLatest(GET_CATEGORIES_REQUEST, handleGetCategories);
    yield takeLatest(GET_CATS_REQUEST, handleGetCats);
}

function* handleGetCategories() {
    try {
        const { data } = yield call(Api.getCategories);

        yield put({
            type: GET_CATEGORIES_SUCCESS,
            payload: {
                data,
            },
        });
    } catch (e) {
        yield put({
            type: GET_CATEGORIES_FAIL,
            message: e.message,
            payload: {
                errors: {
                    current: e.message,
                },
            },
        });
    }
}

function* handleGetCats({payload}) {
    try {
        const {page, categories} = payload;

        const { data } = yield call(Api.getCats, page, categories);

        yield put({
            type: GET_CATS_SUCCESS,
            payload: {
                data,
            },
        });
    } catch (e) {
        yield put({
            type: GET_CATS_FAIL,
            message: e.message,
            payload: {
                errors: {
                    current: e.message,
                },
            },
        });
    }
}
