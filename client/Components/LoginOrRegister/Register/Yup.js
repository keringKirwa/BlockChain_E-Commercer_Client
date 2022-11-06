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
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must have 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("password required"),
  confirmPassword: Yup.string()
    .required("passwordConfirmation required")
    .oneOf(
      [Yup.ref("password"), null],
      "Password and passwordConfirmation must match"
    ),
});
