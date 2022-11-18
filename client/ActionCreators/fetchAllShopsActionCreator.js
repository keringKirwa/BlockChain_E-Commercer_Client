import { createEthereumContract } from "../utils/createEthContract";
export const fetchAvailableShopsAction = async () => {
  try {
    const transactionsContract = await createEthereumContract(window.ethereum);
    const shopArray = await transactionsContract.getAvailableShops();
    return shopArray;
  } catch (error) {
    console.log(error);
  }
};
