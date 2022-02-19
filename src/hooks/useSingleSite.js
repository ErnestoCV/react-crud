import { useState, useEffect } from 'react'
import getSingleSite from '../services/getSingleSite'

export default function useSingleSite({ id }) {

    const [site, setSite] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {

        if(id !== undefined){
            (function () {
                getSingleSite({ id })
                    .then(site => {
                        setSite(site)
                        setIsLoading(false)
                        setIsError(false)
                    }).catch(() => {
                        setIsLoading(false)
                        setIsError(true)
                    })
            }())
    
        }
        
    }, [id])

    return { site, isLoading, isError }

};
