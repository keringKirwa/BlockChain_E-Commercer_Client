import React from "react";

import { Formik, Form, Field } from "formik";
import { BiLogInCircle } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { LoginSchema } from "./LoginSchema";

import styles from "./LoginPage.module.css";

export const LoginPage = () => {
  return (
    <div className="pt-5">
      <Formik
        initialValues={{
          emailAddress: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));

            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          errors,
          isValid,
          touched,
          dirty,
          handleChange,
          isSubmitting,
          handleSubmit,

          handleBlur,

          values,
        }) => (
          <div className="container-fluid d-flex flex-column align-items-center  ">
            <div className={`text-info container-fluid `}>
              <form
                onSubmit={handleSubmit}
                className={`${styles.formCSS} d-flex justify-content-center align-items-center flex-column `}
              >
                <span className={styles.loginText}>
                  Login
                  <BiLogInCircle className={styles.unlockIcon}></BiLogInCircle>
                </span>
                <input
                  autoComplete="off"
                  name="emailAddress"
                  type="email"
                  placeholder=" eg johndoe@gmail.com"
                  value={values.emailAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.emailAddress && errors.emailAddress
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.emailAddress && !errors.emailAddress
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger">
                  {errors.emailAddress &&
                    touched.emailAddress &&
                    errors.emailAddress}
                </p>

                <input
                  autoComplete="off"
                  name="password"
                  type="password"
                  placeholder="Password,eg john34@JD"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.password && errors.password
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.password && !errors.password
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger">
                  {errors.password && touched.password && errors.password}
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting || (dirty && !isValid)}
                  onClick={() => {
                    console.log("button clicked");
                  }}
                  className={
                    dirty && isValid
                      ? `${styles.submitButtonComponent} bg-dark text-primary`
                      : `${styles.submitButtonComponent}   `
                  }
                >
                  <p
                    className={`${styles.buttonLoginText} text-center center text-secondary`}
                  >
                    {" "}
                    LOGIN <FaTelegramPlane className="" />
                  </p>
                </button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
