import { Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

import { MySelect, MyTextInput } from "../components";
import formJson from "../data/custom-form.json";

const initialValues: { [x: string]: any } = {};
const requiredFields: { [x: string]: any } = {};
for (const input of formJson) {
  initialValues[input.name] = input.value;
  let schema = Yup.string();
  if (!input.validations) continue;
  for (const rule of input.validations) {
    if (rule.type === "required") {
      schema = schema.required("Este campo es requerido");
    }
    if (rule.type === "minLength") {
      schema = schema.min(
        (rule as any).value || 2,
        `Mínimo de ${(rule as any).value || 2} caracteres`
      );
    }
    if (rule.type === "maxLength") {
      schema = schema.max(
        (rule as any).value || 20,
        `Máximo de ${(rule as any).value || 20} caracteres`
      );
    }
    if (rule.type === "email") {
      schema = schema.email("Debe ser un email válido");
    }
  }
  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DinamicForm = () => {
  return (
    <div>
      <h1>DinamicForm</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        {(formik) => (
          <Form>
            {formJson.map(({ type, name, placeholder, label, options }) => {
              if (type === "input" || type === "password" || type === "email") {
                return (
                  <MyTextInput
                    key={name}
                    type={type as any}
                    name={name}
                    label={label}
                    placeholder={placeholder}
                  />
                );
              }
              if (type === "select") {
                return (
                  <MySelect key={name} label={label} name={name}>
                    <option value="">Select an option</option>
                    {options?.map((opt) => (
                      <option key={opt.id} value={opt.id}>
                        {opt.label}
                      </option>
                    ))}
                  </MySelect>
                );
              }
              throw new Error(`The type ${type} is not suported`);
            })}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
