import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { createShopSchema } from "./createShopSchema";

import styles from "./CreateShop.module.css";
import { Spinner } from "../../Spinner/Spinner";
import { uploadImageToCloudinary } from "../../../utils/uploadImagToCloudinary";
import { createShopAction } from "../../../ActionCreators/createShopAction";
import { useRouter } from "next/router";
import Link from "next/link";

export const CreateShop = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [shopImage, setShopImage] = useState("");

  return (
    <div className="pt-5">
      <Formik
        initialValues={{
          buyerEthAddress: "",
          shopName: "",
          shopPassword: "",
          shopProfileImage: "",
        }}
        validationSchema={createShopSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setLoading((prevIsLoading) => !prevIsLoading);
          const imageURI = await uploadImageToCloudinary(shopImage);
          await createShopAction({
            values,
            imageURI,
            setLoading,
            ethereum: window.ethereum,
            router,
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
            {loading && <Spinner loading={loading} styles={styles}></Spinner>}
            <div className={`text-info container-fluid `}>
              <form
                onSubmit={handleSubmit}
                className={`${styles.formCSS} d-flex justify-content-center align-items-center flex-column `}
              >
                <span className={styles.loginText}>Create Shop</span>
                <input
                  autoComplete="off"
                  name="buyerEthAddress"
                  type="string"
                  placeholder="Seller's 42byte Eth Address from Metamask Wallet"
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
                  name="shopProfileImage"
                  type="file"
                  required
                  placeholder="Choose Your Shop Profile Image"
                  value={values.shopIconURL}
                  onChange={(e) => setShopImage(e.target.files[0])}
                  onBlur={handleBlur}
                  className={
                    touched.shopProfileImage && errors.shopProfileImage
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.shopProfileImage && !errors.shopProfileImage
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger text-center">
                  {errors.shopProfileImage &&
                    touched.shopProfileImage &&
                    errors.shopProfileImage}
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
                <div className="pt-3">
                  Alredy created One ?{" "}
                  <Link href="/shop/login-to-my-shop">Login</Link>
                </div>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
