import * as Yup from "yup";

export const createShopSchema = Yup.object().shape({
  buyerEthAddress: Yup.string()
    .required("Buyer's Ethereum address is required")
    .min(42, "Eth Address Not Valid")
    .max(42, "Eth Address Too Long "),

  shopName: Yup.string("Shop name must be a string alone")
    .min(5, "Shop Name Too Short")
    .max(10, "Shop Name Too Long")
    .required("Shop Name is Required !!"),

  shopPassword: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must have 8 Characters, One Uppercase, One Lowercase, One Number and One Special Character !"
    )
    .required("shop Password required"),
  shopProfileImage: Yup.string(),
});
