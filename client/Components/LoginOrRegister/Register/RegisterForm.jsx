import React from "react";
import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneUnlock } from "react-icons/ai";
import { MdPersonAddAlt1 } from "react-icons/md";

import styles from "./RegisterForm.module.css";

import { RegisterSchema } from "./Yup.js";
import { MainForm } from "./MainForm";

export const RegisterForm = () => {
  const handleClick = () => {
    console.log("Button clicked ");
  };

  return (
    <Formik
      initialValues={{
        buyerEthAddress: "",
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={RegisterSchema}
      onSubmit={(values, { resetForm }) => {
        alert(JSON.stringify(values));
        console.log(values);
      }}
    >
      {({
        errors,
        isValid,
        touched,
        dirty,
        handleChange,

        handleBlur,

        values,
      }) => (
        <div className="container-fluid d-flex flex-column align-items-center  ">
          <div className={`${styles.stupidForm}  text-info container-fluid `}>
            <form
              noValidate
              className={`${styles.formCSS} d-flex justify-content-center align-items-center flex-column `}
            >
              <span className={styles.registerText}>
                Register
                <MdPersonAddAlt1
                  className={styles.unlockIcon}
                ></MdPersonAddAlt1>
              </span>
              <MainForm
                values={values}
                handleChange={handleChange}
                handleBlur={handleBlur}
                touched={touched}
                errors={errors}
                styles={styles}
              ></MainForm>
              <button
                type="submit"
                disabled={!(dirty && isValid) || dirty}
                className={
                  dirty && isValid
                    ? `${styles.submitButtonComponent} bg-dark text-info`
                    : `${styles.submitButtonComponent}   `
                }
              >
                <p className={styles.submitText}>
                  {" "}
                  SUBMIT <FaTelegramPlane className="" />
                </p>
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};
