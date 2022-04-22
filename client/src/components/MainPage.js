import React from "react";
import MainCarousel from "./MainCarousel";
import Product from "./Product";
import "../css/Main.scss";

const MainPage = () => {
  return (
    <div className="main">
      <MainCarousel />
      <br />
      <Product url="product"/>
    </div>
  );
};

export default MainPage;
