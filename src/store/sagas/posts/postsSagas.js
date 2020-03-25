import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
    FETCH_POSTS,
    fetchPostsSuccessful,
    fetchPostsFailed,
    DELETE_POSTS,
    deletePostsSuccessful,
    deletePostsFailed,
    POST_DETAILS,
    postDetailsSuccessful,
    postDetailsFailed,
} from '../../actions/posts/postsActions';
import { getPosts } from '../../selectors/posts/postsSelectors';
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

export function* doDeletePosts(action) {
    try {
        let posts = yield select(getPosts);

        let result = posts.filter(p => p.id !== action.payload);

        yield put(deletePostsSuccessful(result));
    } catch (error) {
        yield put(deletePostsFailed(error));
    }
}

export function* doPostDetails(action) {
    try {
        const serviceBaseUrl = getAPIURL();
        const endpoint = `${serviceBaseUrl}/posts/${action.payload}`;
        
        const response = yield call(fetchGet, endpoint);

        yield put(postDetailsSuccessful(response));

    } catch(error) {
        yield put(postDetailsFailed(error));
    }
}

export default function* rootSaga() {
    return yield all([
        takeLatest(FETCH_POSTS, doFetchPosts),
        takeLatest(DELETE_POSTS, doDeletePosts),
        takeLatest(POST_DETAILS, doPostDetails)
    ])
}