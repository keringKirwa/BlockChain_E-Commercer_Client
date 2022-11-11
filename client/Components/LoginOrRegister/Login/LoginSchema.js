import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i,
      "Invalid Email Address!"
    )
    .required("Email is required !"),

  buyerEthAddress: Yup.string()
    .required("Ethereum address is required")
    .min(42, "Eth Address Not Valid")
    .max(42, "Eth Address Invalid "),
});
