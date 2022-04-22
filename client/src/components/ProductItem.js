import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  .thumbnail {
    img {
      width: 8rem;
      height: 8rem;
      margin: 0;
      margin-bottom: 1rem;
    }
  }
  .title {
    font-size: 16px;
  }
  .price_origin {
    color: gray;
    font-size: 13px;
  }
  .hot {
    width: 28px;
  }
`;

// eslint-disable-next-line react/prop-types
const ProductItem = ({ deliver }) => {
  // eslint-disable-next-line react/prop-types
  const { idx, ProductImgs, title, price } = deliver;
  console.log(deliver);
  return (
    <Container>
      <span>
        <div className="thumbnail">
          <Link to={`/${idx}`}>
            <img src={ProductImgs[0].imgUrl} alt="thumbnail" />
          </Link>
        </div>
        <span className="title">{title}</span>
        <img
          className="hot"
          src="https://static.wixstatic.com/media/a44461_00e151045404454199cdedcad7c72541~mv2.gif"
        />
        <br />
        <span className="price_origin">{price}원</span>
      </span>
    </Container>
  );
};

export default ProductItem;
