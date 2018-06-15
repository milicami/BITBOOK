import { requestsHeader } from './constants'


export const get = (url) => {
    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: requestsHeader,
        method: 'GET',
        mode: 'cors'
    }
    )
        .then(response => response.json())
}

