import { combineReducers } from 'redux';

import fetchPostsReducer from './posts/postsReducers'; 

export default combineReducers({
    posts: fetchPostsReducer,
});