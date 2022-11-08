import React from "react";

const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleSlidesOnly"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgOQ_8Ei_YIfnOzGWLerhxdGB3KeDnPwdyrZ3r6N9Dw&s"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
