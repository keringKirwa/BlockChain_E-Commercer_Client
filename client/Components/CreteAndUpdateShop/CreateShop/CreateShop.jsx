import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { createShopSchema } from "./createShopSchema";
import toast from "react-hot-toast";

import styles from "./CreateShop.module.css";
import { Spinner } from "../../Spinner/Spinner";
import { uploadImageToCloudinary } from "../../../utils/uploadImagToCloudinary";
import { createShopAction } from "../../../ActionCreators/createShopAction";

export const CreateShop = () => {
  const [loading, setLoading] = useState(false);
  const [shopIconURL, setShopIconURL] = useState("");
  const [shopImage, setShopImage] = useState("");

  /*  address sellerEthAccountAddress,
        string calldata shopName,
        string memory shopPassword,
        string memory iconURL */
  return (
    <div className="pt-5">
      <Formik
        initialValues={{
          buyerEthAddress: "",
          shopPassword: "",
          shopName: "",
          shopProfileImage: "",
        }}
        validationSchema={createShopSchema}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          setLoading((prevIsLoading) => !prevIsLoading);
          uploadImageToCloudinary(shopImage, setShopIconURL);
          createShopAction({
            values,
            shopIconURL,
            setLoading,
            ethereum: window.ethereum,
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
              </form>
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
