import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Location from "./Location";
import DetailCarousel from "./DetailCarousel";
import "./ProductDetail.css";

function ProductDetail() {
  const [color, setColor] = useState("secondary");
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/product/${id}`
        );
        setProduct(res.data);
        //console.log(res.data.Favorite);
        // eslint-disable-next-line no-lone-blocks
        // console.log(product.Favorite.imgId);
        product.Favorite.imgId !== undefined
          ? setColor("danger")
          : setColor("secondary");
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, []);

  const postProduct = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/product/postid`,
        { idx: id }
      );
      setColor(res.data);
      console.log(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="productDetail">
      <div className="Container">
        <br />
        <hr />
        <div className="categoryBox">
          <i className="fa-solid fa-house"></i>
          <p className="home">홈</p>
          &nbsp;
          <i className="fa-solid fa-arrow-right"></i>
          &nbsp;
          <p className="categoryItem">
            {product.categoryId === 1
              ? "남성의류"
              : product.categoryID === 2
              ? "여성의류"
              : product.categoryID === 3
              ? "남성잡화"
              : "여성잡화"}
          </p>
        </div>
        <hr style={{ marginTop: "-5px", border: 0, height: "1px" }} />
        <div className="productContainer">
          <div className="carouselwidth">
            <DetailCarousel deliver={product} />
          </div>
          <div>
            <p className="pTitle">{product.title}</p>
            <p className="pPrice">{product.price}원</p>
            <hr />
            <ul>
              <li className="productState">
                상품상태
                <span className="state">중고</span>
              </li>
              <li className="productState">
                거래지역
                <i className="fa-solid fa-location-dot"></i>
                <span className="state">전국</span>
              </li>
            </ul>
            &nbsp;&nbsp;
            <Button
              onClick={() => {
                postProduct();
              }}
              variant={color}
            >
              찜하기
            </Button>{" "}
          </div>
        </div>
      </div>
      <Tabs defaultActiveKey="MyProduct" className="mb-5">
        <Tab eventKey="MyProduct" title={`상품 정보`}>
          <div className="productContent">
            <div>
              <div>{product.content}</div>
            </div>
            <span className="vertical-line3" />
            <div className="productmap">
              <Location deliver={product} />
            </div>
          </div>
        </Tab>
        <Tab eventKey="MyFavorite" title={`상품 문의`}>
          <span>상품 문의</span>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProductDetail;
