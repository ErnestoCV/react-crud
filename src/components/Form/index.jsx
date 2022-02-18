import React from "react";
import { useNavigate } from "react-router-dom";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import "./styles.css";
import { addSite } from "../../services/addSite";

export default function UserCreate() {
  const navigate = useNavigate();

  /* const handleSubmit = (event) => {
    event.preventDefault();

    const siteToInsert = {
      name: name,
      address: address,
    };

    addSite(siteToInsert).then(response =>{
      const {id} = response
      if(id !== undefined){
        navigate('/')
      }else{
        const {apierror} = response
        alert(JSON.stringify({apierror}, null, 2))
      }
    })

    

  }; */

  const initialValues = {
    name: "",
    address: "",
  };

  const validateFields = Yup.object({
    name: Yup.string()
      .required("Requerid")
      .min(2, "Must be 2 characters or more"),
    address: Yup.string()
      .required("Requerid")
      .min(10, "Must be 10 characters or more"),
  });

  const handleSubmit = (values, { setFieldError }) => {
    return addSite(values)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        setFieldError("name", "This username is not valid");
        setFieldError("address", "This address is not valid");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validateFields}
      onSubmit={handleSubmit}
    >
      {({ errors, isSubmitting }) => (
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
      )}
    </Formik>
  );
}
