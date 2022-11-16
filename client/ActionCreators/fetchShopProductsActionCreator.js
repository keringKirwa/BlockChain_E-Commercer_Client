import { createEthereumContract } from "../utils/createEthContract";
export const fetchShopProductsAction = async (shopAddress) => {
  try {
    alert("the fetch function was triggered ");
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
