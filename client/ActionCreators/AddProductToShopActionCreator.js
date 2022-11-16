import toast from "react-hot-toast";
import { createEthContractWithAccounts } from "../utils/createEthContractWithAddress";
export const addProductToShopAction = async (toAddProductDetails) => {
  const { values, imageURI, setLoading, resetForm, ethereum, router } =
    toAddProductDetails;
  const { productName, productQuantity, productDescription } = values;
  const productPrice = 100;
  try {
    alert(`the imageURL at adding product is ::: ${imageURI}`);

    const tObject = await createEthContractWithAccounts(ethereum);
    console.log("The complex object is ", tObject);
    const transactionContract = tObject.transactionsContract;
    const account = tObject.account;
    const transactionHash = await transactionContract.addProductToShop(
      account,
      productName,
      productQuantity,
      productDescription,
      imageURI,
      productPrice
    );

    setLoading((prevIsLoading) => !prevIsLoading);
    toast.success("product Added Successfully ✔️");
    resetForm();
    router.push("/shops");
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error("sth went missing , please Check your internet connection");
  }
};
