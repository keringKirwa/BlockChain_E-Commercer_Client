import toast from "react-hot-toast";
import { loginShop } from "../store/reducers/loggedInShop";
import { createEthereumContract } from "../utils/createEthContract";
export const loginToShopAction = async (loginToShopDetails) => {
  const { values, setLoading, ethereum, router, resetForm, dispatch } =
    loginToShopDetails;
  const { sellerEthAddress, password } = values;
  const hexToDecimal = (hex) => parseInt(hex, 16);

  try {
    alert(JSON.stringify(values));

    const transactionsContract = await createEthereumContract(ethereum);
    const [shopName, iconUrl, sellerAccountAddress, shopIdentifier] =
      await transactionsContract.logIntoMyShop(sellerEthAddress, password);
    const shopId = hexToDecimal(shopIdentifier);
    dispatch(loginShop({ shopName, iconUrl, sellerAccountAddress, shopId }));
    setLoading((prevIsLoading) => !prevIsLoading);
    resetForm();
    toast.success("Login To Shop Successful, CONGRATULATIONS !");
    /*  router.push(`shop/${shopId}`); */
  } catch (error) {
    console.log(error);
    setLoading((prevIsLoading) => !prevIsLoading);
    toast.error(
      "Provide a password for the shop associated with the connected Account !! "
    );
  }
};
