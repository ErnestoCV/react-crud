import { useState, useEffect } from 'react'
import getSites from '../services/getSites';


export default function useGetSites() {

    const [sites, setSites] = useState([]);
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        GetSites();
    }, []);

    const GetSites = async () => {
        setLoading(true)
        await getSites().then(response =>{
            setSites(response)
            setLoading(false)
        })
        
    };

    return { loading, sites }

}