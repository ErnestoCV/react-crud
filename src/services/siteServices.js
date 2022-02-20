import { API_URL } from "./settings";

export const getSites = () => {

    return fetch(`${API_URL}/sites`)
        .then(response => response.json())
        .then(response => {
            return response
        })


}

export const getSingleSite = ({ id }) => {

    return fetch(`${API_URL}/sites/${id}`)
        .then(response => response.json())
        .then((response) => {
            return response
        })

}

export const postSite = ({ name, address }) => {

    return fetch(`${API_URL}/sites`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address }),
    })
        .then(response => response.json())
        .then(response => {
            if (response.id === undefined) {
                return Promise.reject(response.apierror);
            }
            return true
        })

}

export const putSite = ({ id, name, address }) => {

    return fetch(`${API_URL}/sites/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, address }),
    })
        .then(response => response.json())
        .then(response => {
            if (response.id === undefined) {
                return Promise.reject(response.apierror);
            }
            return true
        })

}

export const deleteSite = ({ id }) => {
    return fetch(`${API_URL}/sites/${id}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(response.status);
            }

            return true
        })
}