import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
import { createEthereumContract } from "../utils/createEthContract";
import { signin } from "../store/reducers/authSlice";
export const loginBuyerAction = async (loginDetails) => {
  const { values, setLoading, ethereum, router, resetForm, dispatch } =
    loginDetails;
  const { emailAddress, password } = values;

  try {
    /* TODO: capture the ethereum address too  an populate it to the redux store . */
    const transactionsContract = await createEthereumContract(ethereum);
    const [loggedInUserEmail, loggedInUserName] =
      await transactionsContract.loginBuyer(emailAddress, password);
    const shopArray = await transactionsContract.getAvailableShops();
    console.log("the shops available After login are  as follows :::::", {
      shopArray,
    });

    dispatch(signin({ loggedInUserEmail, loggedInUserName }));

    setLoading((prevIsLoading) => !prevIsLoading);
    resetForm();
    toast.success("Login successful,CONGRATULATIONS !");
    router.push("/shops");
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error("Email or Eth Account Address Not Correct. ");
  }
};
