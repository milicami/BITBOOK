import { postEndpoint, requestsHeader } from './constants'

class APIService {

    get(url) {
        return fetch(url)
            .then(response => response.json())
    }
}

export const apiService = new APIService()