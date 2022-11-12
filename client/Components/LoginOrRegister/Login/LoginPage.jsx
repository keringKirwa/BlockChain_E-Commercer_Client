import React, { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";

import { Formik, Form, Field } from "formik";
import { BiLogInCircle } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { LoginSchema } from "./LoginSchema";
import toast from "react-hot-toast";

import styles from "./LoginPage.module.css";
import { Spinner } from "../../Spinner/Spinner";
import { loginBuyerAction } from "../../../ActionCreators/LoginBuyerActionCreator.js";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <div className="pt-5">
      <Formik
        initialValues={{
          emailAddress: "",
          buyerEthAddress: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          /*   alert(JSON.stringify(values, null, 2)); */
          setLoading((prevIsLoading) => !prevIsLoading);

          loginBuyerAction({
            values,
            setLoading,
            ethereum: window.ethereum,
            router,
            resetForm,
            dispatch
          });

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
          <div className="container-fluid d-flex flex-column align-items-center  ">
            {loading && <Spinner loading={loading}></Spinner>}
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
                  name="buyerEthAddress"
                  type="string"
                  placeholder="Your 42byte Eth Address from Metamask Wallet"
                  value={values.buyerEthAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.buyerEthAddress && errors.buyerEthAddress
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.buyerEthAddress && !errors.buyerEthAddress
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger">
                  {errors.buyerEthAddress &&
                    touched.buyerEthAddress &&
                    errors.buyerEthAddress}
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
    </div>
  );
};
