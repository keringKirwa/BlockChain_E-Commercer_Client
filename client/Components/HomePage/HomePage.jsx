import React, { useEffect } from "react";
import Link from "next/link";
import { RatedShop } from "./BestRatedShopBanner/RatedShop";
import Carousel from "react-bootstrap/Carousel";
import { useRouter } from "next/router";
import useSWR from "swr";

import { HiPlus } from "react-icons/hi";

import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { fetchAvailableShopsAction } from "../../ActionCreators/fetchAllShopsActionCreator";

export const HomePage = () => {
  const router = useRouter();

  const hexToDecimal = (hex) => parseInt(hex, 16);
  const { userName } = useSelector((state) => state.user);
  const { shopName } = useSelector((state) => state.loggedInShop);

  const fetch = async () => {
    return await fetchAvailableShopsAction();
  };

  const { data, error } = useSWR("all-shops-available", fetch, {
    refreshInterval: 2000,
  });
  return (
    <div className="container-fluid mt-3 mt-md-5 pt-md-3 mt-lg-3 mt-xl-3 pt-lg-0">
      <RatedShop />
      <div
        className={`${styles.lowlyRatedShopsContainer} row  center w-100 container-fluid m-1`}
      >
        {data?.map((item, index) => (
          <div
            className={`${styles.handleMarginProblem} w-100 center col-sm-12 col-md-6 col-lg-4 col-xl-3 `}
            key={index}
          >
            <div className={`${styles.shop} center `}>
              <div className={`${styles.shopDetails}`}>
                <div className={`${styles.shopImageContainer}`}>
                  {" "}
                  <img
                    className={`${styles.shopImage} image-responsive`}
                    src={item[4]}
                  ></img>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <p className={`${styles.shopName}`}>{item[3]}</p>
                  <p
                    className={`${styles.shopDescription} gradientColor text-center`}
                  >
                    BuyIt is a shop owned by John Doe.It is the best laptop
                    seller here in the whole of nairobi kenya .
                  </p>
                </div>
                {/* --------------------------------------carousel images ----------------------------------------------------------- */}
                <div
                  className={`center pt-1 mb-2 ${styles.imagesSlidingContainer} `}
                >
                  {" "}
                  <Carousel
                    controls={false}
                    indicators={false}
                    className="w-100"
                  >
                    {item[6]?.map((imageItem, imageIndex) => (
                      <Carousel.Item key={imageIndex}>
                        <img
                          className={`center pt-2 mb-2 ${styles.carouselImage}`}
                          src={imageItem}
                          alt="productImage"
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="center">
                  <button
                    className={`${styles.visitButton} mb-3`}
                    onClick={() => {
                      router.push(
                        `shop/${hexToDecimal(item[2].hex)}?address=${item[0]}`
                      );
                    }}
                  >
                    Visit This Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {userName && !shopName && (
        <Link href="/shop/create-shop" className={styles.link}>
          <div
            className={`center pt-2 mb-4 imagesSlidingContainer ${styles.FAB} `}
          >
            {" "}
            <HiPlus></HiPlus>
          </div>
        </Link>
      )}
    </div>
  );
};
