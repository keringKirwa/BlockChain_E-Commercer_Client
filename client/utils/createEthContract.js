import { ethers } from "ethers";
import { contractABI, contractAddress } from "./constants";

export const createEthereumContract = async (ethereum) => {
  if (!window.ethereum) {
    return alert("please install metamask");
  }
  const provider =
    window.ethereum != null
      ? new ethers.providers.Web3Provider(window.ethereum)
      : ethers.providers.getDefaultProvider();

  const accounts = await provider.send("eth_requestAccounts", []);

  const signer = provider.getSigner();
  const transactionsContract = new ethers.Contract(
    contractAddress,
    contractABI,
    signer
  );

  return transactionsContract;
};
