import * as Yup from "yup";

/*  address sellerEthereumAddress;
        bytes32 shopPassword;
        uint256 shopId;
        string shopName;
        string iconURL;
        uint256[] userproductsId; dynamic array */

export const createShopSchema = Yup.object().shape({
  emailAddress: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i,
      "Invalid Email Address!"
    )
    .required("Email is required !"),

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
  shopIconURL: Yup.string().required("Please Choose an image "),
});
