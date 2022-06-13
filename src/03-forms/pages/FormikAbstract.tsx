import { Form, Formik } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstract</h1>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          jobType: "",
          terms: false,
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          lastName: Yup.string()
            .max(15, "Debe tener 15 caracteres o menos")
            .required("Requerido"),
          email: Yup.string()
            .required("Requerido")
            .email("Debe ser un email válido"),
          terms: Yup.boolean().isTrue(
            "Debe aceptar los terminos y condiciones"
          ),
          jobType: Yup.string()
            .required("Debe seleccionar un valor")
            .notOneOf(["it-junior"], "Esta opcion no es permitida"),
        })}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit} noValidate>
            <MyTextInput
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
            ></MyTextInput>
            <MyTextInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your las name"
            ></MyTextInput>
            <MyTextInput
              label="Email Address"
              name="email"
              placeholder="Enter your email"
              type="email"
            ></MyTextInput>

            <MySelect label="Job type" name="jobType">
              <option value="">Pick something</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-junior">IT Junior</option>
            </MySelect>

            <MyCheckbox label="Terms & Conditions" name="terms" />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
