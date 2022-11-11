import { ethers } from "ethers";
import { contractABI, contractAddress } from "./constants";
export const createEthereumContract = async (ethereum) => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  if (!ethereum) {
    await provider.send("eth_requestAccounts", []);
  }

  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};
