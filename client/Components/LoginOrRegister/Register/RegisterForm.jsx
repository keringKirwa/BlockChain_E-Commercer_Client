import React, { useState } from "react";
import Link from "next/link";
import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { AiTwotoneUnlock } from "react-icons/ai";
import { MdPersonAddAlt1 } from "react-icons/md";

import styles from "./RegisterForm.module.css";
import { registerBuyerAction } from "../../../ActionCreators/registerBuyerActionCreator";

import { RegisterSchema } from "./Yup.js";
import { MainForm } from "./MainForm";

import { Spinner } from "../../Spinner/Spinner.jsx";
import { useRouter } from "next/router";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const router = useRouter();

  const [currentAccount, setCurrentAccount] = useState(false);

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

        registerBuyerAction(values, setLoading, window.ethereum, router);

        setSubmitting(false);
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
              <div className="pt-3">
                Have an account ? <Link href="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </Formik>
  );
};
