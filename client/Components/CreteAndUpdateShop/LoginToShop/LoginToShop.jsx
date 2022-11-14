import React, { useState } from "react";

import { Formik, Form, Field } from "formik";
import { BiLogInCircle } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import toast from "react-hot-toast";

import styles from "./LoginToShop.module.css";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { loginToShopSchema } from "./LoginToShopSchema";
import { Spinner } from "../../Spinner/Spinner";
import { loginToShopAction } from "../../../ActionCreators/LoginToShopActionCreator";

export const LoginToShop = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  return (
    <div className="pt-5">
      <Formik
        initialValues={{
          sellerEthAddress: "",
          password: "",
        }}
        validationSchema={loginToShopSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setLoading((prevIsLoading) => !prevIsLoading);

          loginToShopAction({
            values,
            setLoading,
            ethereum: window.ethereum,
            router,
            resetForm,
            dispatch,
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
                  Find Your Shop
                  <BiLogInCircle className={styles.unlockIcon}></BiLogInCircle>
                </span>
                <input
                  autoComplete="off"
                  name="sellerEthAddress"
                  type="string"
                  placeholder="Seller's 42byte Eth Address from Metamask Wallet"
                  value={values.sellerEthAddress}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.sellerEthAddress && errors.sellerEthAddress
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.sellerEthAddress && !errors.sellerEthAddress
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger">
                  {errors.sellerEthAddress &&
                    touched.sellerEthAddress &&
                    errors.sellerEthAddress}
                </p>
                <input
                  autoComplete="off"
                  name="password"
                  type="password"
                  placeholder="shopPassword,eg john34@JD"
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
                <p className="text-danger text-center">
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
