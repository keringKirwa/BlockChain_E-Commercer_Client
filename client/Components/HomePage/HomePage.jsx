import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RatedShop } from "./BestRatedShopBanner/RatedShop";
import Carousel from "react-bootstrap/Carousel";

import { HiPlus } from "react-icons/hi";
const list = [1, 2, 3, 4, 5, 6];

import styles from "./HomePage.module.css";
import { useSelector } from "react-redux";
import { fetchAvailableShopsAction } from "../../ActionCreators/fetchAllShopsActionCreator";

const reviews = [
  {
    id: 1,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s",
    content: "fake review",
    author: "john doe",
  },
  {
    id: 2,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIYAyQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADMQAAIBAwMCBQEGBgMAAAAAAAABAgMEERIhMUFRBRMiYXFSMkKBgpGhNGKSscHRFBUz/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBQf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzq1qdJZnJL2A6AgzvnnFOCS7yZxle1HzVhH4RKLQFT/AMyedq6/GJ2he1OqhNfyvAosAR6V3Tm8SzCXaRIKAAAAAAAAAAAAAAAAAAAAAAAQb+40Ly4PfruBreX6ppxp7vuQoRuLh6oQk8/el/slWVp5klWqr0/dj39yyXwSCsp+Fye9arj2id4+GW651y+ZE0CCH/1tr9D/AKmc6nhdJ/8AnUnD90WAKKerZ3NJZjirFdFyLW9nSnoqJ4+mXQtyNeWsbiOV6ZriRB3pzU4pxaaNyptKs6FVwqfDXYtU8rK4GDIAKAAAAAAAAAAAAAAAANKs9FNy7FbRpu4uPX9lbv3Jl88UsdzFhDTScvqZBJSxjCRkAoAAAAAAAAheIUU4+dHZrZ/BvY1NVPTJ7r+xIqRU4Si+qwQLJ6auPbDILEAFAAAAAAAAAAAAAAAAEO+b9CS2wztafw8DS9SVNTbSSe7ZmzmnS09idEgGNS7oyUAAAAAAAxkDJXUf4n87J8pKMXJ8IhWvqrbZ2Wd0QTwAUAAAAAAAAAAAAAAAAc68IzpSUkmufxIFNVYVpVfNeh01Hy9KxF9XnnsWFaOum49yvU8Pt0Jo6qW/JKoz1x35RCb3x+hmnU0yTXKAsAawkpRTXU2KAAAw3hZzgi1Kmv46G1zNfYz8kWVTVNJdSDNeM61CdONWVPVxOPMX3JNo86svLwiO3jY7Wi1SlJcLYKlgAqAAAAAAAAAAAAAAAABV30PJrZ+7U4fZlocbqhG4oypy68PswKrzo4w3jPHsPM64xjkra9OVG5Xn5c6b9K6L39/k6uvmOtfmRmtRcWNys6W9nwWB5aFdxrJRTbfCXU9PDVojq5xuXE1sc6tRU4OTOhVeNV/J0Zzhp/qNRyrXGZPL5MRnpXq2fUroV1J6pPbO3uzpKoqkXTb+0vqx+5GonqTm0oc52LWjBU6aiuhXeC0nKjGvUk5Z+w2sZXctS4yAAoAAAAAAAAAAAAAAAAAACD4pYK9oNLCqxXol/gobbwu/c8Ok4rh6mkj1hjCJFqHYeH07OG3qnjeT6fBNAKgaVKcKsXGpFSi+j3RuAPPXvglWEtdo/MXSDaWk4WfhV1WrKFzTlTpczeefZHqDGCRaxGKjFRikklskbAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
    content: "fake review",
    author: "jane doe",
  },
  {
    id: 3,
    image:
      "data:image/jpeg;base64,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",
    content: "fake review",
    author: "dane doe",
  },
  {
    id: 4,
    image: "https://www.saruk.co.ke/images/29511665404435.jpg",
    content: "fake review",
    author: "dane doe",
  },
  {
    id: 5,
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIYAyQMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADMQAAIBAwMCBQEGBgMAAAAAAAABAgMEERIhMUFRBRMiYXFSMkKBgpGhNGKSscHRFBUz/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/8QAFxEBAQEBAAAAAAAAAAAAAAAAABEBQf/aAAwDAQACEQMRAD8A+4gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzq1qdJZnJL2A6AgzvnnFOCS7yZxle1HzVhH4RKLQFT/AMyedq6/GJ2he1OqhNfyvAosAR6V3Tm8SzCXaRIKAAAAAAAAAAAAAAAAAAAAAAAQb+40Ly4PfruBreX6ppxp7vuQoRuLh6oQk8/el/slWVp5klWqr0/dj39yyXwSCsp+Fye9arj2id4+GW651y+ZE0CCH/1tr9D/AKmc6nhdJ/8AnUnD90WAKKerZ3NJZjirFdFyLW9nSnoqJ4+mXQtyNeWsbiOV6ZriRB3pzU4pxaaNyptKs6FVwqfDXYtU8rK4GDIAKAAAAAAAAAAAAAAAANKs9FNy7FbRpu4uPX9lbv3Jl88UsdzFhDTScvqZBJSxjCRkAoAAAAAAAAheIUU4+dHZrZ/BvY1NVPTJ7r+xIqRU4Si+qwQLJ6auPbDILEAFAAAAAAAAAAAAAAAAEO+b9CS2wztafw8DS9SVNTbSSe7ZmzmnS09idEgGNS7oyUAAAAAAAxkDJXUf4n87J8pKMXJ8IhWvqrbZ2Wd0QTwAUAAAAAAAAAAAAAAAAc68IzpSUkmufxIFNVYVpVfNeh01Hy9KxF9XnnsWFaOum49yvU8Pt0Jo6qW/JKoz1x35RCb3x+hmnU0yTXKAsAawkpRTXU2KAAAw3hZzgi1Kmv46G1zNfYz8kWVTVNJdSDNeM61CdONWVPVxOPMX3JNo86svLwiO3jY7Wi1SlJcLYKlgAqAAAAAAAAAAAAAAAABV30PJrZ+7U4fZlocbqhG4oypy68PswKrzo4w3jPHsPM64xjkra9OVG5Xn5c6b9K6L39/k6uvmOtfmRmtRcWNys6W9nwWB5aFdxrJRTbfCXU9PDVojq5xuXE1sc6tRU4OTOhVeNV/J0Zzhp/qNRyrXGZPL5MRnpXq2fUroV1J6pPbO3uzpKoqkXTb+0vqx+5GonqTm0oc52LWjBU6aiuhXeC0nKjGvUk5Z+w2sZXctS4yAAoAAAAAAAAAAAAAAAAAACD4pYK9oNLCqxXol/gobbwu/c8Ok4rh6mkj1hjCJFqHYeH07OG3qnjeT6fBNAKgaVKcKsXGpFSi+j3RuAPPXvglWEtdo/MXSDaWk4WfhV1WrKFzTlTpczeefZHqDGCRaxGKjFRikklskbAFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/Z",
    content: "fake review",
    author: "jane doe",
  },
  {
    id: 6,
    image:
      "data:image/jpeg;base64,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",
    content: "fake review",
    author: "dane doe",
  },
];
const HomePage = ({ shopsArray }) => {
  console.log(shopsArray);
  const { userName, userEmail } = useSelector((state) => state.user);
  const { shopName } = useSelector((state) => state.loggedInShop);
  return (
    <div className="container-fluid mt-3">
      <RatedShop />
      <div
        className={`${styles.lowlyRatedShopsContainer} row  center w-100 container-fluid m-1`}
      >
        {list.map((item, index) => (
          <div
            className={`${styles.handleMarginProblem} w-100 center col-sm-12 col-md-6 col-lg-4 col-xl-3 `}
            key={index}
          >
            <div className={`${styles.shop} center`}>
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
                    {reviews.map((review) => (
                      <Carousel.Item key={review.id}>
                        <img
                          className={`center pt-2 mb-2 ${styles.carouselImage}`}
                          src={review.image}
                          alt={review.author}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                <div className="center">
                  <button className={`${styles.visitButton} mb-3`}>
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

export async function getStaticProps() {
  const shopsArray = await fetchAvailableShopsAction();
  console.log("the getServside props function was called");

  return {
    props: {
      shopsArray,
    },
  };
}
export default HomePage;
