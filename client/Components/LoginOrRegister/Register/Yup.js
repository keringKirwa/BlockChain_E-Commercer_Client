import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  buyerEthAddress: Yup.string()
    .required("Buyer's Ethereum address is required")
    .min(5, "Eth Address Not Valid")
    .max(5, "Eth Address Too Long "),
  firstName: Yup.string()
    .min(3, "firstName too Short!")
    .max(10, "firstName Too Long!")
    .required("FirstName is required !"),
  lastName: Yup.string()
    .min(3, "lastName too Short!")
    .max(10, "lastName Too Long!")
    .required("lastName is required !"),

  emailAddress: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i,
      "Invalid Email Address!"
    )
    .required("Email is required !"),

  password: Yup.string()
    .min(5, "password too short !")
    .max(10, "password too long !"),
  confirmPassword: Yup.string()
    .min(4, "confirm password required")
    .required("confirm Password Required"),
});
