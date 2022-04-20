import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

// eslint-disable-next-line react/prop-types
const DetailCarousel = ({ deliver }) => {
  // eslint-disable-next-line react/prop-types
  const { ProductImgs } = deliver;

  console.log(ProductImgs);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {/* {images.map((image) => (
            <img className="d-block w-100" src="banner1.jpg" alt="slide" */}
      {ProductImgs.map((index) => (
        <Carousel.Item key={index}>
          {
            <img
              src={ProductImgs[index].imgUrl}
              alt="thumbnail"
              height="250px"
              width="250px"
            />
          }
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default DetailCarousel;
