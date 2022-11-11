import * as Yup from "yup";

export const addProductSchema = Yup.object().shape({
  productName: Yup.string("product Name must be a string")
    .min(5, "Product name too short")
    .max(10, "Product name too long")
    .required("Product Name is required"),

  productQuantity: Yup.number("quantity must be a number")
    .min(1, "At least one product must be available in the shop")
    .required("Product Quantity is required"),
  productImageURL: Yup.string().required("Please Choose an image "),
  productDescription: Yup.string()
    .min(20, "product description too short")
    .max(30, "product description too long!")
    .required("Please provide a description"),
});
