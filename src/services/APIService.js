import { userEditProfileEndpoint, registerEndpoint } from '../shared/constants';


export const get = (url) => {

    return fetch(url, {
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: getHeaders(),
        method: 'GET',
        mode: 'cors'
    })
        .then(response => {
            return response.json()
        })
}

const getHeaders = () => {
    let requestsHeader = {
        'Content-Type': 'application/json',
        'Key': 'bitbookdev',
    }

    if (localStorage.getItem("sessionId")) {
        requestsHeader['SessionId'] = localStorage.getItem("sessionId");
    }

    return requestsHeader;
}

export const post = (url, newContent) => {

    const postData = {
        method: 'POST',
        body: JSON.stringify(newContent),
        headers: getHeaders(),
        mode: 'cors'
    }
    return fetch(url, postData)

}

export const put = (url, data) => {

    return fetch(url, {

        method: 'PUT',
        body: JSON.stringify(data),
        headers: getHeaders(),
    })

}

