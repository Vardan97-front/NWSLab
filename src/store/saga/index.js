import { all, fork } from 'redux-saga/effects';
import Cats from './cats';

export default function* watchers() {
    yield all([
        Cats,
    ].map(fork));
}