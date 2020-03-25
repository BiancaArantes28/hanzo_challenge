
import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { 
    HELLO_WORLD,
    fetchHelloWorldSuccessful,
    fetchhHelloWorldFailed,
 } from '../actions/helloWorldActions';
 import { getAPIURL } from '../../config/getPATH';
import { fetchGet } from './sagaUtils';

 export function* doHelloWorld() {
     try {
        const serviceBaseUrl = getAPIURL();
        
        const payload = 'Hello world!';
        yield put(fetchHelloWorldSuccessful(payload));
     } catch(error) {
        yield put(fetchhHelloWorldFailed(error));
     }
 }

 export default function* rootSaga() {
     return yield all([
         takeLatest(HELLO_WORLD, doHelloWorld)
     ])
 }