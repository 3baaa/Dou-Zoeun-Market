import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Tabs, Tab } from "react-bootstrap";
import Profile from "./Profile";
import Product from "../Product/Product";
import axios from "axios";

export default function MyPage() {
  const [productNum, setPNum] = useState(0);
  const [favoriteNum, setFNum] = useState(0);
  const [commentNum, setCNum] = useState(0);
  let pNum = ""; let fNum = "";

  useEffect(()=>{
    number();
  },[]);

  async function number() {
    const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/mypage/num`);
    pNum = res.data[0]; setPNum(pNum);
    fNum = res.data[1]; setFNum(fNum);
    console.log(res.data);
  }
  const getAuthInfo = useSelector((state) => state);
  const auth = async () => {
    window.location.href = `${process.env.REACT_APP_BASE_URL}/isAuth`;
  };

  if (getAuthInfo.isTrue) {
    return (
      <div style={{ width: "80%", margin: "auto" }}>
        <Profile />

        <Tabs defaultActiveKey="MyProduct" className="mb-5">
          <Tab eventKey="MyProduct" title={`나의 상품 목록 (${productNum})`}>
            <Product url="mypage/product" />
          </Tab>
          <Tab eventKey="MyFavorite" title={`찜 목록 (${favoriteNum})`}>
            {/*<Product url="mypage/favorite"/>*/}
          </Tab>
          <Tab eventKey="MyReview" title={`거래 후기 (${commentNum})`}>
            Comments
          </Tab>
        </Tabs>
      </div>
    );
  } else {
    auth();
  }
}
