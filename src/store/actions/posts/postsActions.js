export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POSTS_SUCCESSFUL = 'FETCH_POSTS_SUCCESSFUL';
export const FETCH_POSTS_FAILED = 'FETCH_POSTS_FAILED';

export const DELETE_POSTS = 'DELETE_POSTS';
export const DELETE_POSTS_SUCCESSFUL = 'DELETE_POSTS_SUCCESSFUL';
export const DELETE_POSTS_FAILED = 'DELETE_POSTS_FAILED';

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

export const deletePosts = (payload) => ({
    type: DELETE_POSTS,
    payload,
});

export const deletePostsSuccessful = (payload) => ({
    type: DELETE_POSTS_SUCCESSFUL,
    payload,
});

export const deletePostsFailed = (error) => ({
    type: DELETE_POSTS_FAILED,
    payload: error,
});