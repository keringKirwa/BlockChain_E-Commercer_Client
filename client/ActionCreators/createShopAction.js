import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";

/*  values,
            imageURI,
            setLoading,
            ethereum: window.ethereum,
            router, */
export const createShopAction = async ({
  values,
  imageURI,
  setLoading,
  ethereum,
  router,
}) => {
  const { buyerEthAddress, shopPassword, shopName } = values;
  try {
    alert(imageURI);

    const transactionsContract = await createEthereumContract(ethereum);

    const transactionHash = await transactionsContract.createShop(
      buyerEthAddress,
      shopName,
      shopPassword,
      imageURI
    );
    console.log("the transactionHash is :::::", transactionHash);
    const hexToDecimal = (hex) => parseInt(hex, 16);
    console.log(
      "The  id of the  shop is ::::::",
      hexToDecimal(transactionHash.shopId)
    );

    setLoading((prevIsLoading) => !prevIsLoading);
    toast.success("Shop Created Successfully ✔️");
    router.push("/shop/login-to-my-shop");
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error("sth went missing , please Check your internet connection");
  }
};
