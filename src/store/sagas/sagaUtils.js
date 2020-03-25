export function fetchGet(endpoint) {
    const headersObject = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'},
    };

    return fetch(endpoint, headersObject)
            .then(response => response.json())
            .catch(error => error);
}