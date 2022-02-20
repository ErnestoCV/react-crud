import { useNavigate } from "react-router-dom"

import useSites from "../../hooks/useSites"
import { FormAccount } from "../../components/FormAccount"
import Spinner from "../../components/Spinner"

export default function FormAccountPage() {
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
      <FormAccount sites={sites} />
    </>
  )
}
