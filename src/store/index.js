import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';


import reducers from './reducers';
import helloWorldsaga from './sagas/helloWorldSaga';
import postsSaga from './sagas/posts/postsSagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(...middlewares)
));

sagaMiddleware.run(helloWorldsaga);
sagaMiddleware.run(postsSaga);

export default store;