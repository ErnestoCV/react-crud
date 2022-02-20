import React from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@mui/material"

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
      <div>
        <h1>List of Sites</h1>

        <Button
          href="/createSite"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          CREATE SITE
        </Button>

        <Button href="/createAccount" variant="contained" color="primary">
          CREATE ACCOUNT
        </Button>
      </div>
      <ListOfSites sites={sites} />
    </>
  )
}
