import { API_URL } from "./settings";

export const putSite = ({id, name, address}) => {
    
    return fetch(`${API_URL}/sites/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, address}),
    })
    .then(response => response.json())
    .then(response => {
        if(response.id === undefined) {
          return Promise.reject(response.apierror);
        }
        return true
    })

};