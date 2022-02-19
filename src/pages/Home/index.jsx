import React from "react"
import { useNavigate } from "react-router-dom"

import useSites from "../../hooks/useSites"
import Spinner from "../../components/Spinner"
import ListOfSites from "../../components/ListOfSites"

export default function Home() {
  const { sites, isLoading, isError } = useSites()
  const navigate = useNavigate()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    navigate("/404")
  }

  return (
    <>
      <ListOfSites sites={sites} />
    </>
  )
}
