export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESSFUL = 'FETCH_POSTS_SUCCESSFUL';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

export const fetchPosts = (payload = "") => ({
    type: FETCH_POSTS,
    payload,
});

export const fetchPostsSuccessful = (payload) => ({
    type: FETCH_POSTS_SUCCESSFUL,
    payload,
});

export const fetchPostsFailed = (error) => ({
    type: FETCH_POSTS_FAILED,
    payload: error,
});