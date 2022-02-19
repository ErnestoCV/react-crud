import {API_URL} from './settings'

export default function getSites() {

    return fetch(`${API_URL}/sites`)
    .then(response => response.json())
    .then(response => {
        return response
    })


}