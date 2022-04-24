import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Tabs, Tab } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Location from "./Location";
import DetailCarousel from "./DetailCarousel";
import "../../css/ProductDetail.scss";

function ProductDetail() {
  //const [product, setProduct] = useState({ a: null });
  const [color, setColor] = useState("secondary");
  const [product, setProduct] = useState({});
  const [commonList, setCommonList] = useState();
  const [cName, setCName] = useState("");
  const { id } = useParams();
  const payUrl = `/pay/${id}`;
  let userId = "";
  let category = "";

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/product/detail/${id}`
        ); //비동기 처리
        //이거하는데 시간이 좀걸림...
        console.log(res.data);
        let commonInfo = res.data[0];
        let productInfo = res.data[1];
        console.log(productInfo);
        setProduct(productInfo);
        setCommonList(commonInfo);

        userId = res.data[1].Favorite.userId;
        category = res.data[1].Category.name;
        userId !== null ? setColor("danger") : setColor("secondary");
        category !== null ? setCName(category) : setCName("");
        // renderingValue(res.data); //이친구도 비동기처리
      } catch (e) {
        console.log(e);
      }
    };
    fetchProduct();
  }, []);

  const postProduct = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/product/detail/postid`,
        { idx: id }
      );
      setColor(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const postQna = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/product/detail/qna/id`,
        { idx: id }
      );
      setColor(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(commonList);
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
          <p className="categoryItem">{cName}</p>
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
            <div className="common">
              <ul className="commonkey">
                {commonList ? (
                  commonList.map((item, id) => {
                    return <li key={id}>{item.Column}</li>;
                  })
                ) : (
                  <></>
                )}
              </ul>
              <ul className="commonvalue">
                <li>{product.productStatus}</li>
                <li>{product.exchange}</li>
                <li>{product.address}</li>
                <li>{product.shippingincluded}</li>
              </ul>
            </div>
            <Button
              onClick={() => {
                postProduct();
              }}
              variant={color}
            >
              찜하기
            </Button>
            &nbsp;
            <Link to={payUrl}>
              <Button variant="primary">결제하기</Button>
            </Link>
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
          <div className="qnaform">
            <input
              type="text"
              placeholder="상품 문의 입력..."
              className="qnainput"
            ></input>
            &nbsp;&nbsp;
            <button className="qnabutton">등록</button>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
}

export default ProductDetail;
