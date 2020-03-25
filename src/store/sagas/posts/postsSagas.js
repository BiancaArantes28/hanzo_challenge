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
        const title = action.payload;
        let endpoint;

        if (title.length) {
            endpoint = `${serviceBaseUrl}/posts?title=${title}`;
        } else {
            endpoint = `${serviceBaseUrl}/posts`;
        }
        

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