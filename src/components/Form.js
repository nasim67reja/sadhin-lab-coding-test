import React, { useState } from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { overlayActions } from "../store/ovarlay";
import { PostUrl } from "./Urls";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className="form-group">
        <label className="form-label" htmlFor={props.id || props.name}>
          {label}
        </label>
        <input className="form-input" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </div>
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={props.id || props.name}>
        {label}
      </label>
      <select {...field} {...props} className="form-input" />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  const distpatch = useDispatch();
  const signUpForm = useSelector((state) => state.ovarlay.signUpFormIsVisible);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const formSubmitHandler = (values) => {
    const data = { ...values, division: "dhaka", district: "dhaka" };

    setLoading(true);
    setError(null);

    // post request using fetch api (then)
    fetch(PostUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        console.log("Response data:", responseData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("An error occurred while submitting the request.");
        setLoading(false);
      });
    if (!loading) {
      distpatch(overlayActions.backdropHidden());
      distpatch(overlayActions.signUpFormHiddenHandler());
    }
  };

  return (
    <>
      {signUpForm && (
        <div className="create-user-modal fixed top-50 left-50 z-2 cursor-pointer ">
          <span
            className="absolute top-3 right-3"
            // close ovarlay handler
            onClick={() => {
              distpatch(overlayActions.backdropHidden());
              distpatch(overlayActions.signUpFormHiddenHandler());
            }}
          >
            <AiOutlineClose size={20} />
          </span>
          <h2 className="text-center heading-secondary">Add User</h2>
          <Formik
            initialValues={{
              first_name: "",
              last_name: "",
              user_type: "",
            }}
            validationSchema={Yup.object({
              first_name: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              last_name: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),

              user_type: Yup.string()
                .oneOf(["admin", "employee"], "Invalid User Type")
                .required("Required"),
            })}
            onSubmit={(values, { isSubmitting, setSubmitting }) => {
              formSubmitHandler(values);
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              // }, 400);
              setSubmitting(false);
            }}
          >
            <Form className="form">
              <MyTextInput
                label="First Name"
                name="first_name"
                type="text"
                placeholder="Nasim"
              />

              <MyTextInput
                label="Last Name"
                name="last_name"
                type="text"
                placeholder="Reja"
              />

              <MySelect label="User Type" name="user_type">
                <option value="">Select</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
              </MySelect>

              <button className="submit-button" type="submit">
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
};
export default SignupForm;
