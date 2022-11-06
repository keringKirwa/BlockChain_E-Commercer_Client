import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
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
});
