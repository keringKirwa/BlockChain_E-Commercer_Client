import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { createShopSchema } from "./createShopSchema";
import toast from "react-hot-toast";

import styles from "./CreateShop.module.css";
import { Spinner } from "../../Spinner/Spinner";

export const CreateShop = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="pt-5">
      <Formik
        initialValues={{
          emailAddress: "",
          shopPassword: "",
          shopName: "",
          shopIconURL: "",
        }}
        validationSchema={createShopSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setLoading((prevIsLoading) => !prevIsLoading);
          setTimeout(() => {
            /* alert(JSON.stringify(values, null, 2)); */

            setSubmitting(false);

            setLoading((prevIsLoading) => !prevIsLoading);
            toast.success("Shop created successfully");
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
          <div className="container-fluid d-flex flex-column align-items-center  ">
            {loading && <Spinner loading={loading} styles={styles}></Spinner>}
            <div className={`text-info container-fluid `}>
              <form
                onSubmit={handleSubmit}
                className={`${styles.formCSS} d-flex justify-content-center align-items-center flex-column `}
              >
                <span className={styles.loginText}>Create Shop</span>
                <input
                  autoComplete="off"
                  name="shopName"
                  type="text"
                  placeholder="Shop Name,eg KKDEV~SHOP"
                  value={values.shopName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.shopName && errors.shopName
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.shopName && !errors.shopName
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger text-center">
                  {errors.shopName && touched.shopName && errors.shopName}
                </p>

                <input
                  autoComplete="off"
                  name="shopIconURL"
                  type="file"
                  placeholder="Choose Your Shop Image"
                  value={values.shopIconURL}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.shopIconURL && errors.shopIconURL
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.shopIconURL && !errors.shopIconURL
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger text-center">
                  {errors.shopIconURL &&
                    touched.shopIconURL &&
                    errors.shopIconURL}
                </p>
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
                  name="shopPassword"
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
                  {errors.shopPassword &&
                    touched.shopPassword &&
                    errors.shopPassword}
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
