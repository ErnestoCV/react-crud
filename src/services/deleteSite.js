import { API_URL } from "./settings";

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
};
