import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { FaTelegramPlane } from "react-icons/fa";
import { addProductSchema } from "./AddProductSchema";
import toast from "react-hot-toast";
import useSWR, { useSWRConfig } from "swr";

import styles from "./AddProductToShop.module.css";
import { Spinner } from "../Spinner/Spinner";
import { uploadImageToCloudinary } from "../../utils/uploadImagToCloudinary";
import { addProductToShopAction } from "../../ActionCreators/AddProductToShopActionCreator";
import { useRouter } from "next/router";

export const AddProductToShop = () => {
  const { mutate } = useSWRConfig();

  const [loading, setLoading] = useState(false);
  const [productImage, setProductImage] = useState("");
  const router = useRouter();
  return (
    <div className="pt-5">
      <Formik
        initialValues={{
          productName: "",
          productQuantity: 0,
          productImageURL: "",
          productDescription: "",
        }}
        validationSchema={addProductSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          alert("are you sure you want to add a new product?");
          setLoading((prevIsLoading) => !prevIsLoading);

          const imageURI = await uploadImageToCloudinary(productImage);
          await addProductToShopAction({
            values,
            imageURI,
            setLoading,
            resetForm,
            ethereum: window.ethereum,
            router,
            mutate
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
                <span className={styles.loginText}>
                  Add Product To Your Shop
                </span>
                <input
                  autoComplete="off"
                  name="productName"
                  type="text"
                  placeholder="Product Name, e.g, HP-LAPTOP"
                  value={values.productName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.productName && errors.productName
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.productName && !errors.productName
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger text-center">
                  {errors.productName &&
                    touched.productName &&
                    errors.productName}
                </p>

                <input
                  autoComplete="off"
                  name="productQuantity"
                  type="number"
                  placeholder="Choose Your Shop Image"
                  value={values.productQuantity}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.productQuantity && errors.productQuantity
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.productQuantity && !errors.productQuantity
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger text-center">
                  {errors.productQuantity &&
                    touched.productQuantity &&
                    errors.productQuantity}
                </p>
                <input
                  autoComplete="off"
                  name="productImageURL"
                  type="file"
                  required
                  placeholder="Choose image... "
                  onChange={(e) => setProductImage(e.target.files[0])}
                  className={
                    touched.productImageURL && errors.productImageURL
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.productImageURL && !errors.productImageURL
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <input
                  autoComplete="off"
                  name="productDescription"
                  type="text"
                  placeholder="product Description"
                  value={values.productDescription}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    touched.password && errors.password
                      ? `${styles.error} ${styles.inputElement} `
                      : touched.productDescription && !errors.productDescription
                      ? `${styles.success} ${styles.inputElement}`
                      : `${styles.inputElement}`
                  }
                />
                <p className="text-danger text-center">
                  {errors.productDescription &&
                    touched.productDescription &&
                    errors.productDescription}
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
                        Add Product <FaTelegramPlane className="" />
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
