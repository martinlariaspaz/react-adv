import { Form, Formik } from "formik";
import * as Yup from "yup";

import React from "react";
import { MyTextInput } from "../components";

import "../styles/styles.css";

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          password2: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string()
            .max(15, "Must be less than 15 letters")
            .min(2, "Must be more than 2 letters")
            .required("Is required"),
          email: Yup.string()
            .email("Must be a valid email")
            .required("Is required"),
          password: Yup.string()
            .min(6, "Must be more than 6 letters")
            .required("Is required"),
          password2: Yup.string()
            .min(6, "Must be more than 6 letters")
            .equals([Yup.ref("password")], "Passwords must be equals")
            .required("Is required"),
        })}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <MyTextInput name="name" label="Enter yur name"></MyTextInput>
            <MyTextInput
              name="email"
              label="Enter yur email"
              type="email"
            ></MyTextInput>
            <MyTextInput
              name="password"
              label="Enter your password"
              type="password"
            ></MyTextInput>
            <MyTextInput
              name="password2"
              label="Repeat your password"
              type="password"
            ></MyTextInput>
            <button type="submit">Submit</button>
            <button onClick={formik.handleReset}>Reset</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
