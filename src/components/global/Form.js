import React from "react";
import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { overlayActions } from "../../store/ovarlay";
import { BaseUrl, PostUrl } from "./Urls";
import { employeeActions } from "../../store/employee";
import { formActions } from "../../store/form";

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
  const dispatch = useDispatch();
  const signUpForm = useSelector((state) => state.ovarlay.signUpFormIsVisible);
  const formInfo = useSelector((state) => state.form);

  const formSubmitHandler = (values) => {
    const data = { ...values, division: "dhaka", district: "dhaka" };

    if (formInfo.status === "adding") {
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

          // push the data in existing user list
          if (responseData.user_type === "admin")
            dispatch(employeeActions.addAdminLast(responseData));
          else dispatch(employeeActions.addEmployeeLast(responseData));

          // modal hidden
          dispatch(overlayActions.backdropHidden());
          dispatch(overlayActions.signUpFormHiddenHandler());
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else if (formInfo.status === "Update") {
      async function fetchData() {
        try {
          const response = await fetch(`${BaseUrl}/${formInfo.data.id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }

          const responseData = await response.json();

          // immediately update the ui without calling the api
          dispatch(formActions.addHandler(responseData));

          // the corresponding employee or admin from the employee store(in the tab) also need to update.

          // modal hidden
          dispatch(overlayActions.backdropHidden());
          dispatch(overlayActions.signUpFormHiddenHandler());
        } catch (error) {
          console.error("Error:", error);
        }
      }
      fetchData();
    }
  };

  let initialValues;
  if (formInfo.status === "adding")
    // This is for Adding new user
    initialValues = {
      first_name: "",
      last_name: "",
      user_type: "",
    };
  else if (formInfo.status === "Update") {
    // This is for Updating User
    initialValues = {
      first_name: formInfo.data.first_name,
      last_name: formInfo.data.last_name,
      user_type: formInfo.data.user_type,
    };
  }
  return (
    <>
      {signUpForm && (
        <div className="create-user-modal fixed top-50 left-50 z-2 cursor-pointer ">
          <span
            className="absolute top-3 right-3"
            // close ovarlay handler
            onClick={() => {
              dispatch(overlayActions.backdropHidden());
              dispatch(overlayActions.signUpFormHiddenHandler());
            }}
          >
            <AiOutlineClose size={20} />
          </span>
          <h2 className="text-center heading-secondary">
            {formInfo && formInfo.status === "adding"
              ? "Add User"
              : "Update User"}
          </h2>
          <Formik
            initialValues={initialValues}
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
