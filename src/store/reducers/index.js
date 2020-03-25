import { combineReducers } from 'redux';

import helloWorld from './helloWorldReducer';
import fetchPostsReducer from './posts/postsReducers'; 

export default combineReducers({
    helloWorld,
    posts: fetchPostsReducer,
});