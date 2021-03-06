import { useState, useEffect } from 'react'
import { getSingleSite } from '../services/siteServices'

export default function useSingleSite({ id }) {

    const [site, setSite] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {

        if (id !== undefined) {
            (async function () {
                setIsLoading(true)
                setIsError(false)
                await getSingleSite({ id })
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
