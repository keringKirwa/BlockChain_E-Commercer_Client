import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";
export const loginToShopAction = async (loginToShopDetails) => {
  const { values, setLoading, ethereum, router, resetForm, dispatch } =
    loginToShopDetails;
  const { sellerEthAddress, password } = values;

  try {
    alert(JSON.stringify(values));

    const transactionsContract = await createEthereumContract(ethereum);
    const shopsAvailable = await transactionsContract.getAvailableShops();
    console.log(
      "the available shops are here :::+++++++++++++++++++++",
      shopsAvailable
    );
    const [shopName, iconUrl, sellerAccountAddress, shopId] =
      await transactionsContract.logIntoMyShop(sellerEthAddress, password);
    console.log("Login To Shop data :::::", {
      shopName,
      iconUrl,
      sellerAccountAddress,
    });

    /*  dispatch(loginToShop({ shopName, iconUrl, sellerAccountAddress, shopId })); */

    setLoading((prevIsLoading) => !prevIsLoading);
    resetForm();
    toast.success("Login To Shop Successful, CONGRATULATIONS !");
    router.push(`shop/${shopId}`);
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error(
      "Provide a password for the shop associated with the connected Account !! "
    );
  }
};
