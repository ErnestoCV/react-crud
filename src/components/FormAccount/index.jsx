import { useForm } from "react-hook-form"
import { ErrorMessage } from "@hookform/error-message"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const initialValues = { user: "", password: "", id: 1 }

const schema = yup
  .object({
    user: yup.string().required("User required"),
    password: yup.string().required("Password required"),
    id: yup.string().required("Site required"),
  })
  .required()

export const FormAccount = ({ sites }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: initialValues,
    resolver: yupResolver(schema),
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
      {sites.length === 0 ? (
        <h1>Nothing to show</h1>
      ) : (
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <label>Site</label>
          <select {...register("id")}>
            {sites.map((site) => (
              <option key={site.id} value={site.id}>
                {site.name}
              </option>
            ))}
          </select>

          {errors.id && <p>{errors.id.message}</p>}

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
