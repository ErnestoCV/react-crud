import { API_URL } from "./settings";

export const postSite = ({name, address}) => {
    
    return fetch(`${API_URL}/sites`, {
      method: "POST",
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



