import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { postAccount } from "../../services/accountService"

const initialValues = { user: "", password: "", idSite: 1 }

const schema = yup
  .object({
    user: yup.string().required("User required"),
    password: yup.string().required("Password required"),
    idSite: yup.string().required("Site required"),
  })
  .required()

export const FormAccount = ({ sites }) => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    postAccount(data)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
        setError("user", { message: " Invalid user" })
      })
  }

  return (
    <>
      {sites.length === 0 ? (
        <h1>Nothing to show</h1>
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Site</label>
          <select {...register("idSite")}>
            {sites.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>

          <ErrorMessage
            errors={errors}
            name="idSite"
            render={({ message }) => <p>{message}</p>}
          />

          <label>User</label>
          <input {...register("user")} />

          <ErrorMessage
            errors={errors}
            name="user"
            render={({ message }) => <p>{message}</p>}
          />
          <label>Password</label>
          <input type="password" {...register("password")} />
          <ErrorMessage
            errors={errors}
            name="password"
            render={({ message }) => <p>{message}</p>}
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </>
  )
}
