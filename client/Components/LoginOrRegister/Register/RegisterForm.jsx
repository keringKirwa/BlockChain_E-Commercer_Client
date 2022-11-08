import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneUnlock } from "react-icons/ai";
import { MdPersonAddAlt1 } from "react-icons/md";

import styles from "./RegisterForm.module.css";

import { RegisterSchema } from "./Yup.js";
import { MainForm } from "./MainForm";
import toast from "react-hot-toast";
import { Spinner } from "../../Spinner/Spinner.jsx";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
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
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setLoading((prevIsLoading) => !prevIsLoading);
        setTimeout(() => {
          /* alert(JSON.stringify(values, null, 2)); */

          setSubmitting(false);

          setLoading((prevIsLoading) => !prevIsLoading);
          toast.success("Registered Successfully ✔️");
        }, 4000);
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
        <div className="container-fluid d-flex flex-column align-items-center mt-4 pt-4 ">
          {loading && <Spinner loading={loading} register={true}></Spinner>}

          <div className={`${styles.stupidForm}  text-info container-fluid `}>
            <form
              noValidate
              onSubmit={handleSubmit}
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
                disabled={isSubmitting || (dirty && !isValid)}
                onClick={() => {
                  console.log("button clicked");
                }}
                className={
                  dirty && isValid
                    ? `${styles.submitButtonComponent} bg-dark text-info`
                    : `${styles.submitButtonComponent}   `
                }
              >
                <p className={styles.submitText}>
                  {" "}
                  {loading ? (
                    <>Submitting....</>
                  ) : (
                    <>
                      SUBMIT <FaTelegramPlane className="" />
                    </>
                  )}
                </p>
              </button>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};
