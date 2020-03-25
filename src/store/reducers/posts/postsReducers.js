import _ from 'lodash';
import {
    FETCH_POSTS,
    FETCH_POSTS_SUCCESSFUL,
    FETCH_POSTS_FAILED,
    DELETE_POSTS,
    DELETE_POSTS_SUCCESSFUL,
    DELETE_POSTS_FAILED,
    POST_DETAILS,
    POST_DETAILS_SUCCESSFUL,
    POST_DETAILS_FAILED,
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

const inProgressPosts = (state) => {
    return {
        ...state,
        status: POSTS_STATUS.INPROGRESS
    };
}

const errorPosts = (state, error) => {
    return {
        ...state,
        status: POSTS_STATUS.FETCHED,
        error,
    }
}

const successfulPosts = (state, payload) => {
    return {
        ...withoutError(state),
        status: POSTS_STATUS.FETCHED,
        posts: payload,
    }
};

const successfulPostDetails = (state, payload) => {
    return {
        ...withoutError(state),
        status: POSTS_STATUS.FETCHED,
        post: payload,
    };
}

export default function fetchPostsReducer(state = defaultState, action) {
    switch (action.type) {
        case DELETE_POSTS_SUCCESSFUL:
        case FETCH_POSTS_SUCCESSFUL:
            return successfulPosts(state, action.payload);

        case POST_DETAILS_SUCCESSFUL:
            return successfulPostDetails(state, action.payload);

        case DELETE_POSTS:
        case FETCH_POSTS:
        case POST_DETAILS:
            return inProgressPosts(state);

        case DELETE_POSTS_FAILED:
        case FETCH_POSTS_FAILED:
        case POST_DETAILS_FAILED:
            return errorPosts(state, action.payload);
        
        default:
            return state;
    }
}