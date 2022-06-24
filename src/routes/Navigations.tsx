import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";

import {
  FormikBasicPage,
  FormikAbstraction,
  FormikComponents,
  FormikYupPage,
  RegisterPage,
  RegisterFormikPage,
  DinamicForm,
} from "../03-forms/pages/";

import logo from "../logo.svg";

export const Navigations = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />{" "}
          <ul>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Basic Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Yup Page
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Formik Abstraction
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dinamic-form"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Dinamic Form
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register-formik-page"
                className={({ isActive }) => (isActive ? "nav-active" : "")}
              >
                Register Formik Page
              </NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="about" element={<h1>About Page</h1>} />
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPage />} />
          <Route path="dinamic-form" element={<DinamicForm />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstraction" element={<FormikAbstraction />} />
          <Route path="register" element={<RegisterPage />} />{" "}
          <Route
            path="/register-formik-page"
            element={<RegisterFormikPage />}
          />
          <Route path="/*" element={<Navigate to="formik-basic" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
