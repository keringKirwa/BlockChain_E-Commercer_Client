import Image from "next/image";
import React from "react";
import { RatedShop } from "./BestRatedShopBanner/RatedShop";
const list = [1, 2, 3, 4, 5, 6];
const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s",
  ,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s",
  ,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s",
  ,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s",
  ,
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s",
];

import styles from "./HomePage.module.css";
export const HomePage = () => {
  return (
    <div className="container-fluid ">
      <RatedShop />
      <div
        className={`${styles.lowlyRatedShopsContainer} row center  container-fluid m-1`}
      >
        {list.map((item, key) => (
          /*  */
          <div
            className={`${styles.handleMarginProblem} center col-sm-12 col-md-6 col-lg-4 col-xl-3 `}
          >
            <div className={`${styles.shop} center `}>
              <div className={`${styles.shopDetails}`}>
                <div className={`${styles.shopImageContainer}`}>
                  {" "}
                  <img
                    className={`${styles.shopImage} image-responsive`}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s"
                  ></img>
                </div>
                <div className="d-flex flex-column align-items-center justify-content-center">
                  <p className={`${styles.shopName}`}>BuyIt Shop</p>
                  <p
                    className={`${styles.shopDescription} gradientColor text-center`}
                  >
                    BuyIt is a shop owned by Ian Market is the best laptop
                    seller here in the whole of nairobi kenya .
                  </p>
                </div>
                <div className={`${styles.carouselImagesContainer} center`}>
                  <div
                    className="carousel slide "
                    id="carouselExampleSlidesOnly"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner ">
                      {images.map((imageURL, index) => (
                        <div
                          key={index}
                          className={
                            index == 1
                              ? "carousel-item active"
                              : "carousel-item"
                          }
                          data-bs-interval="5000"
                        >
                          <img
                            className={`${styles.carouselOneImage} w-100`}
                            src={imageURL}
                            alt="First slide"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="center">
                  <button className={`${styles.visitButton} `}>
                    Visit This Shop
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
