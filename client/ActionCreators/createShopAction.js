import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";
export const createShopAction = async ({
  values,
  shopIconURL,
  setLoading,
  ethereum,
}) => {
  const { buyerEthAddress, shopPassword, shopName } = values;
  try {
    /*  returns (uint256 shopId, string memory message) */

    const transactionsContract = await createEthereumContract(ethereum);

    /* the word iterable means that the return value is not an array of data. */

    const transactionHash = await transactionsContract.callStatic.createShop(
      buyerEthAddress,
      shopName,
      shopPassword,
      shopIconURL
    );
    console.log("the transactionHash is :::::", transactionHash);
    const hexToDecimal = (hex) => parseInt(hex, 16);
    console.log(
      "The  id of the  shop is ::::::",
      hexToDecimal(transactionHash.shopId)
    );

    setLoading((prevIsLoading) => !prevIsLoading);
    toast.success("Registered Successfully ✔️");
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error("sth went missing , please Check your internet connection");
  }

  /* pass data to the redux toolkit */
};
