import { API_URL } from "./settings";

export const addSite = ({name, address}) => {
    
    return fetch(`${API_URL}/sites`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name, address}),
    })
    .then(response => response.json())
    .then(response => {
        if(response.id === undefined) throw new Error(JSON.stringify(response, null, 2))
        return true
    })

};



