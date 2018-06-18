
import {requestsHeader} from '../shared/constants';


export const get = (url) => {

    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: requestsHeader,
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            return response.json()
        })
}


export const post = (url, newContent) => {

    const postData = {
        method: 'POST',
        body: JSON.stringify(newContent),
        headers: requestsHeader,

    }
    return fetch(url, postData)
     
}