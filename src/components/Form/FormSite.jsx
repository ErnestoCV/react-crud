import React from "react"
import { useNavigate } from "react-router-dom"

import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"

import { postSite, putSite } from "../../services/siteServices"

export default function FormSite({ site }) {
  const navigate = useNavigate()
  const isAddMode = !site.id

  const initialValues = {
    id: site.id ?? 0,
    name: site.name ?? "",
    address: site.address ?? "",
  }

  const validateFields = Yup.object({
    name: Yup.string()
      .required("Requerid")
      .min(2, "Must be 2 characters or more"),
    address: Yup.string()
      .required("Requerid")
      .min(10, "Must be 10 characters or more"),
  })

  const handleSubmit = (values, { setFieldError }) => {
    return persist(values)
      .then(() => {
        navigate("/")
      })
      .catch(() => {
        setFieldError("name", "This username is not valid")
        setFieldError("address", "This address is not valid")
      })
  }

  const persist = (values) => {
    return isAddMode ? postSite(values) : putSite(values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateFields}
      enableReinitialize={true}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) => {
        return (
          <Form className="form">
            <label htmlFor="name" className={errors.name ? "error" : ""}>
              Name
            </label>
            <Field
              className={errors.name ? "error" : ""}
              id="name"
              name="name"
              placeholder="Put here the name"
            />
            <ErrorMessage className="form-error" name="name" component="p" />

            <label htmlFor="address" className={errors.address ? "error" : ""}>
              Address
            </label>
            <Field
              className={errors.address ? "error" : ""}
              id="address"
              name="address"
              placeholder="Put here the address"
              type="text"
            />
            <ErrorMessage className="form-error" name="address" component="p" />

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}
