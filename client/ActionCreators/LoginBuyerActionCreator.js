import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";
export const loginBuyerAction = async (loginDetails) => {
  const { values, setLoading, ethereum, router, resetForm } = loginDetails;
  const { emailAddress, buyerEthAddress } = values;

  try {
    alert(emailAddress);
    const transactionsContract = await createEthereumContract(ethereum);
    const result = await transactionsContract.loginBuyer(
      buyerEthAddress,
      emailAddress
    );
    console.log("the return of the login are:::::", result);

    setLoading((prevIsLoading) => !prevIsLoading);
    resetForm();
    toast.success("Login successful,CONGRATULATIONS !");
    router.push("/home");
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error(
      "sth went missing , please Check your internet connection then Retry again"
    );
  }

  /* pass data to the redux toolkit */
};
