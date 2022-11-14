import * as Yup from "yup";

export const loginToShopSchema = Yup.object().shape({
  sellerEthAddress: Yup.string()
    .required("Ethereum address required !!")
    .min(42, "Eth Address Not Valid")
    .max(42, "Eth Address Too Long "),

  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must have 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character !"
    )
    .required("shop Password required"),
});
