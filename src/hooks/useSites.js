import { useState, useEffect } from 'react'
import getSites from '../services/getSites';


export default function useSites() {

    const [sites, setSites] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)


    useEffect(() => {
        GetSites();
    }, []);

    const GetSites = async () => {
        setIsLoading(true)
        setIsError(false)
        await getSites().then(response => {
            setSites(response)
            setIsLoading(false)
        }).catch(() => {
            setIsLoading(false)
            setIsError(true)
        })

    };

    return { sites, isLoading, isError }

}