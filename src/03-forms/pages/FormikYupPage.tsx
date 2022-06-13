import { useFormik } from "formik";
import * as Yup from "yup";
import "../styles/styles.css";

export const FormikYupPage = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      lastName: Yup.string()
        .max(15, "Debe tener 15 caracteres o menos")
        .required("Requerido"),
      email: Yup.string()
        .required("Requerido")
        .email("Debe ser un email válido"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <h1>Formik Yup Tutorial</h1>

      <form onSubmit={formik.handleSubmit} noValidate>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          {...formik.getFieldProps("firstName")}
          className={`${
            formik.touched.firstName && formik.errors.firstName && "has-error"
          }`}
        ></input>
        {formik.touched.firstName && formik.errors.firstName && (
          <span>{formik.errors.firstName}</span>
        )}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          {...formik.getFieldProps("lastName")}
          className={`${
            formik.touched.lastName && formik.errors.lastName && "has-error"
          }`}
        ></input>
        {formik.touched.lastName && formik.errors.lastName && (
          <span>{formik.errors.lastName}</span>
        )}

        <label htmlFor="firstName">Email Address</label>
        <input
          type="email"
          {...formik.getFieldProps("email")}
          className={`${
            formik.touched.email && formik.errors.email && "has-error"
          }`}
        ></input>
        {formik.touched.email && formik.errors.email && (
          <span>{formik.errors.email}</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
