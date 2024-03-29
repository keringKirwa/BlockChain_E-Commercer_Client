import React from "react";

export const MainForm = ({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  styles,
}) => {
  return (
    <>
      <input
        autoComplete="off"
        name="firstName"
        type="text"
        placeholder="First Name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          touched.firstName && errors.firstName
            ? `${styles.error} ${styles.inputElement} `
            : touched.firstName && !errors.firstName
            ? `${styles.success} ${styles.inputElement}`
            : `${styles.inputElement}`
        }
      />
      <p className="text-danger">
        {errors.firstName && touched.firstName && errors.firstName}
      </p>
      <input
        autoComplete="off"
        name="lastName"
        type="text"
        placeholder="Last Name"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          touched.lastName && errors.lastName
            ? `${styles.error} ${styles.inputElement} `
            : touched.lastName && !errors.lastName
            ? `${styles.success} ${styles.inputElement}`
            : `${styles.inputElement}`
        }
      />
      <p className="text-danger">
        {errors.lastName && touched.lastName && errors.lastName}
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
        {errors.emailAddress && touched.emailAddress && errors.emailAddress}
      </p>
      <input
        autoComplete="off"
        name="buyerEthAddress"
        type="string"
        placeholder="your 42byte Eth Address from Metamask Wallet"
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
      <input
        autoComplete="off"
        name="confirmPassword"
        type="password"
        placeholder="confirmPassword"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          touched.confirmPassword && errors.confirmPassword
            ? `${styles.error} ${styles.inputElement} `
            : touched.confirmPassword && !errors.confirmPassword
            ? `${styles.success} ${styles.inputElement}`
            : `${styles.inputElement}`
        }
      />
      <p className="text-danger">
        {errors.confirmPassword &&
          touched.confirmPassword &&
          errors.confirmPassword}
      </p>
    </>
  );
};
