export const HELLO_WORLD = 'HELLO_WORLD';
export const HELLO_WORLD_SUCCESSFUL = 'HELLO_WORLD_SUCCESSFUL';
export const HELLO_WORLD_FAILED = 'HELLO_WORLD_FAILED';

export const fetchHelloWorld = () => ({
    type: HELLO_WORLD,
});

export const fetchHelloWorldSuccessful = (payload) => ({
    type: HELLO_WORLD_SUCCESSFUL,
    payload,
});

export const fetchhHelloWorldFailed = (error) => ({
    type: HELLO_WORLD_FAILED,
    payload: error,
});