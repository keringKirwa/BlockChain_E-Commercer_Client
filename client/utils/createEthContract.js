import { ethers } from "ethers";
import { contractABI, contractAddress } from "./constants";

export const createEthereumContract = async (ethereum) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  if (!ethereum) {
    return alert("please install metamask");
  }
  const accounts = await provider.send("eth_requestAccounts", []);
  console.log(accounts);

  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};
