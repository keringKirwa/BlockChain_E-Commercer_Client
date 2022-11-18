import useSWR from "swr";
import Image from "next/image";
import { useRouter } from "next/router";
import { fetchShopProductsAction } from "../../ActionCreators/fetchShopProductsActionCreator";
import { useEffect } from "react";
import { IndividualShop } from "../../Components/IndividualShop/IndividualShop";

const Shop = () => {
  const queryObject = useRouter().query;

  const fetch = async (requestIdentifier) => {
    const shopProducts = await fetchShopProductsAction(queryObject.address);
    console.log("The shop products are as follows ::", shopProducts);
    return shopProducts;
  };

  const { data, error } = useSWR(queryObject.address, fetch);

  return (
    <div>
      <IndividualShop data={data}></IndividualShop>
    </div>
  );
};

export default Shop;
