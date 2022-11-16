import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";
export const registerBuyerAction = async (
  values,
  setLoading,
  ethereum,
  router
) => {
  const { buyerEthAddress, firstName, lastName, emailAddress, password } =
    values;

  try {
    const transactionsContract = await createEthereumContract();
    await transactionsContract.registerBuyer(
      buyerEthAddress,
      emailAddress,
      `${firstName} ${lastName}`,
      password
    );
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.success("Registered Successfully ✔️");
    router.push("/login");
  } catch (error) {
    console.log(error);
    toast.error("sth went missing , please Check your internet connection");
    setLoading((prevIsLoading) => !prevIsLoading);
  }

  /* pass data to the redux toolkit */
};
