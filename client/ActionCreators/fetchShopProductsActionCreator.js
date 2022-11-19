import { createEthereumContract } from "../utils/createEthContract";
export const fetchShopProductsAction = async (shopAddress) => {
  try {
    const transactionsContract = await createEthereumContract(window.ethereum);
    const shopProducts = await transactionsContract.getShopProducts(
      shopAddress
    );
    console.log("the shops are as follows :::::", { shopProducts });
    return shopProducts;
  } catch (error) {
    console.log(error);
  }
};
