import React from "react";
import { useSelector } from "react-redux";
import styles from "./IndividualShop.module.css";
import { AiFillLike, AiOutlinePlus } from "react-icons/ai";

import truncateEthAddress from "truncate-eth-address";
export const IndividualShop = ({ shopProducts, sellerAddress }) => {
  const { userName, userEmail } = useSelector((state) => state.user);
  const { shopIconURL, shopName, shopAddress } = useSelector(
    (state) => state.loggedInShop
  );
  console.log("This is the data from the database :: ", shopProducts);
  const hexToDecimal = (hex) => parseInt(hex, 16);

  return (
    <div className={`${styles.mainDiv} container-fluid `}>
      <div className={`${styles.shopDescDiv} row `}>
        <div
          className={`${styles.shopDescription}  col-sm-12 col-md-8 col-lg-8 col-xl-8`}
        >
          <p className={`${styles.shopName} text-center `}>
            {shopName} Online shopping{" "}
          </p>
          <div className={`${styles.likesAndFollowers} pt-3 `}>
            <div className={`${styles.likes} `}>
              <div className={`${styles.likesNumber} `}>3K</div>
              <div>Likes</div>
            </div>
            <div className={`${styles.followers} `}>
              <div className={`${styles.followersNumber} `}>1.2k</div>
              <div>Followers</div>
            </div>
          </div>
          <div className={`${styles.emailAndPhone} `}>
            <p className="gradientColor">📞+254-789-456-100</p>
            <p className="gradientColor">kkirwa230@gmail.com</p>
          </div>
          <div className={styles.buttons}>
            <button className={`${styles.button} text-center`}>
              <AiFillLike className={styles.upIcon}></AiFillLike> Like
            </button>
            <button className={`${styles.button} text-center `}>
              Follow <AiOutlinePlus></AiOutlinePlus>
            </button>
          </div>
        </div>

        <div
          className={`${styles.div} col-sm-12 col-md-4 col-lg-4 col-xl-4 d-none d-lg-block d-lg-block`}
        >
          <div className={`${styles.shopIconSection} bg-dark`}>
            {" "}
            <img
              src={shopIconURL}
              alt="shop Icon"
              className={`${styles.shopImage} image-responsive `}
            />
            <p className={styles.shopInImage}>{shopName}</p>
            <p>{truncateEthAddress(sellerAddress)}</p>
          </div>
        </div>
      </div>
      {/* ---------------------------------------PRODUCTS HERE -------------------------------------- */}

      <div className={`${styles.shopProducts} row  center mt-5`}>
        {shopProducts?.map((product, index) => (
          <div
            key={index}
            className={`${styles.handleMarginProblem} w-100 center col-sm-12 col-md-6 col-lg-4 col-xl-3  my-2`}
          >
            <div className={`${styles.insideHandleMargin} `}>
              <img src={product[5][0]} alt="productImage" />
              <div className={`${styles.productDescription} `}>
                <p>Name: {product[1]}</p>
                <p>
                  Quantity in Stock : <span>{hexToDecimal(product[2])} </span>
                </p>
                <p>description : {product[3]}.</p>
                <p>
                  price : $<span> {hexToDecimal(product[4])}</span>
                </p>
                <div>array of images .</div>
                {shopAddress == sellerAddress ? (
                  <div>
                    <button className={styles.actionButtons}>Edit</button>
                    <button
                      className={`${styles.actionButtons} ${styles.deleteButton}`}
                    >
                      Delete
                    </button>
                  </div>
                ) : (
                  <button className={styles.addToCartButton}>
                    add to cart{" "}
                  </button>
                )}
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};
