import { API_URL } from "./settings";



export default function getSingleSite({ id }) {

    return fetch(`${API_URL}/sites/${id}`)
        .then(response => response.json())
        .then((response) => {
            return response
        })

};
