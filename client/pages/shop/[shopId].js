import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchShopProductsAction } from "../../ActionCreators/fetchShopProductsActionCreator";
import { IndividualShop } from "../../Components/IndividualShop/IndividualShop";

const Shop = () => {
  const queryObject = useRouter().query;

  const fetch = async (requestIdentifier) => {
    const shopProducts = await fetchShopProductsAction(queryObject.address);
    console.log("The shop products are as follows ::", shopProducts);
    return shopProducts;
  };

  const { data, error } = useSWR(queryObject.address, fetch);
  console.log("The data  is a as follows :::::", data);
  /* fetch the details  about the shop that has been clicked Also..this is because the data that we are displaying to the user
  is dynamic. */

  return (
    <div >
      <IndividualShop shopProducts={data} sellerAddress={queryObject.address}></IndividualShop>
    </div>
  );
};

export default Shop;
