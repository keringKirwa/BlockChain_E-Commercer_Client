import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";
export const loginBuyer = async ({
  values,
  setLoading,
  ethereum,
  router,
  resetForm,
}) => {
  const { emailAddress, buyerEthAddress } = values;
  try {
    alert(emailAddress);
    const transactionsContract = await createEthereumContract(ethereum);
    const [password, emailAddress, customerName] =
      await transactionsContract.loginBuyer(buyerEthAddress, emailAddress);
    console.log("the return of the login are:::::", emailAddress, customerName);

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
