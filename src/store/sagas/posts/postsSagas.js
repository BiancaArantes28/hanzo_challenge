import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import {
    FETCH_POSTS,
    fetchPostsSuccessful,
    fetchPostsFailed,
} from '../../actions/posts/postsActions';
import { getAPIURL } from '../../../config/getPATH';
import { fetchGet } from '../sagaUtils';

export function* doFetchPosts(action) {
    try {
        const serviceBaseUrl = getAPIURL();
        const endpoint = `${serviceBaseUrl}/posts/${action.payload}`;

        const response = yield call(fetchGet, endpoint);

        yield put(fetchPostsSuccessful(response));

    } catch(error) {
        yield put(fetchPostsFailed(error));
    }
}

export default function* rootSaga() {
    return yield all([
        takeLatest(FETCH_POSTS, doFetchPosts)
    ])
}