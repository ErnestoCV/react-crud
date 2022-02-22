import React from "react"
import { useParams, useNavigate } from "react-router-dom"

import useSingleSite from "../../hooks/useSingleSite"
import Spinner from "../../components/Spinner"
import ListOfAccounts from "../../components/ListOfAccounts"

export default function ListOfAccountsPage() {
  const { id } = useParams()
  const { site, isLoading, isError } = useSingleSite({ id })
  const navigate = useNavigate()

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    navigate("/404")
  }

  return (
    <>
      <h1>List of Accounts</h1>

      {<ListOfAccounts site={site} idSite={id} />}
    </>
  )
}
