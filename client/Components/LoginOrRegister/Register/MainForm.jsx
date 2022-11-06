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
    <div>
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
            : `${styles.success} ${styles.inputElement}`
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
            : `${styles.success} ${styles.inputElement}`
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
            : `${styles.success} ${styles.inputElement}`
        }
      />
      <p className="text-danger">
        {errors.emailAddress && touched.emailAddress && errors.emailAddress}
      </p>
      <input
        autoComplete="off"
        name="buyerEthAddress"
        type="string"
        placeholder="your 32byte Eth Address"
        value={values.buyerEthAddress}
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          touched.buyerEthAddress && errors.buyerEthAddress
            ? `${styles.error} ${styles.inputElement} `
            : `${styles.success} ${styles.inputElement}`
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
            : `${styles.success} ${styles.inputElement}`
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
            : `${styles.success} ${styles.inputElement}`
        }
      />
      <p className="text-danger">
        {errors.confirmPassword &&
          touched.confirmPassword &&
          errors.confirmPassword}
      </p>
    </div>
  );
};
