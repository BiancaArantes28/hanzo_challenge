import _ from 'lodash';
import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESSFUL,
    FETCH_POSTS_FAILED,
} from '../../actions/posts/postsActions';

const withoutError = (state) => _.omit(state, 'error');

export const POSTS_STATUS = {
    'NOT_FETCHED': 'not fetched',
    'INPROGRESS': 'inprogress',
    'FETCHED': 'fetched',
};

const defaultState = {
    status: POSTS_STATUS.NOT_FETCHED,
    posts: [],
};

const successfulPosts = (state, payload) => {
    return {
        ...withoutError(state),
        status: POSTS_STATUS.FETCHED,
        posts: payload,
    }
};

export default function fetchPostsReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return { ...state, status: POSTS_STATUS.INPROGRESS };

        case FETCH_POSTS_SUCCESSFUL:
            return successfulPosts(state, action.payload);

        case FETCH_POSTS_FAILED:
            return { ...state, error: action.payload, status: POSTS_STATUS.FETCHED };

        default:
            return state;
    }
}