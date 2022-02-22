import { API_URL } from "./settings";

export const deleteAccount = ({ idSite, idAccount }) => {
    return fetch(`${API_URL}/sites/${idSite}/accounts/${idAccount}`, {
        method: "DELETE",
    })
        .then((response) => {
            if (!response.ok) {
                return Promise.reject(response.status);
            }

            return true
        })
};


export const postAccount = ({ idSite, user, password }) => {

    return fetch(`${API_URL}/sites/${idSite}/accounts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user, password }),
    })
        .then(response => response.json())
        .then(response => {
            if (response.id === undefined) {
                return Promise.reject(response.apierror);
            }
            return true
        })


};
