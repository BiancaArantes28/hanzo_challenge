import _ from 'lodash';
import {
    HELLO_WORLD,
    HELLO_WORLD_SUCCESSFUL,
    HELLO_WORLD_FAILED,
} from '../actions/helloWorldActions';

const withoutError = (state) => _.omit(state, 'error');

export const HELLOWORLD_STATUS = {
    'NOT_FETCHED': 'not fetched',
    'INPROGRESS': 'inprogress',
    'FETCHED': 'fetched',
};

const defaultState = {
    status: HELLOWORLD_STATUS.NOT_FETCHED,
    helloWorld: '',
};

const successfulHelloWorld = (state, payload) => {
    
    return {
        ...withoutError(state),
        status: HELLOWORLD_STATUS.FETCHED,
        helloWorld: payload,
    }
};

export default function helloWorld(state = defaultState, action) {
    switch(action.type) {
        case HELLO_WORLD:
            return { ...state, status: HELLOWORLD_STATUS.INPROGRESS };
        case HELLO_WORLD_SUCCESSFUL:
            return successfulHelloWorld(state, action.payload);
        case HELLO_WORLD_FAILED:
            return { ...state, error: action.payload, status: HELLOWORLD_STATUS.FETCHED };
        default:
            return state;
    }
}