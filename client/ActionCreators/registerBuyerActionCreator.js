import toast from "react-hot-toast";
import { ethers } from "ethers";
import { contractABI, contractAddress } from "../utils/constants";
export const registerBuyerAction = async (values, setLoading, ethereum) => {
  const { buyerEthAddress, firstName, lastName, emailAddress, password } =
    values;

  const createEthereumContract = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    return transactionsContract;
  };

  try {
    const transactionsContract = await createEthereumContract();
    console.log("Transaction Contract is here +++=>>>", transactionsContract);
    const transactionHash = await transactionsContract.registerBuyer(
      buyerEthAddress,
      emailAddress,
      `${firstName} ${lastName}`,
      password
    );

    console.log(transactionHash);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.success("Registered Successfully ✔️");
  } catch (error) {
    console.log(error);
    toast.error("sth went missing , please Check your internet connection");
    setLoading((prevIsLoading) => !prevIsLoading);
  }

  /* pass data to the redux toolkit */
};
