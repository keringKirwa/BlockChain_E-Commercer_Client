import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";
import { signin } from "../store/reducers/authSlice";
export const loginBuyerAction = async (loginDetails) => {
  const { values, setLoading, ethereum, router, resetForm, dispatch } =
    loginDetails;
  const { emailAddress, buyerEthAddress } = values;

  try {
    alert(emailAddress);
    const transactionsContract = await createEthereumContract(ethereum);
    const [userPassword, loggedInUserEmail, loggedInUserName] =
      await transactionsContract.loginBuyer(buyerEthAddress, emailAddress);

    dispatch(signin({ loggedInUserEmail, loggedInUserName }));

    setLoading((prevIsLoading) => !prevIsLoading);
    resetForm();
    toast.success("Login successful,CONGRATULATIONS !");
    router.push("/home");
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error("Email or Eth Account Address Not Correct. ");
  }
};
