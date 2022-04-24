import Header from "./components/Outlet/Header";
import Footer from "./components/Outlet/Footer";
import MainPage from "./components/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/Product/ProductDetail";
import Transaction from "./components/Payment/Transaction";
import { useSelector } from "react-redux";
import MyPage from "./components/Mypage/MyPage";
import ProductForm from "./components/Product/ProductForm";
import Error403 from "./components/ErrorPage/Error403";
import { useState, useEffect } from "react";

function App() {
  //불러올떄 이줄 추가 하시면돼요~!
  const getAuthInfo = useSelector((state) => state);
  console.log(getAuthInfo);
  //여기서 비동기 통신을 해서 인증 정보 확인하고 axios.get해서 불러오기

  return (
    <>
      <Header />
      <Routes>
        <Route path="/pay/:id" element={<Transaction />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/403Error" element={<Error403 />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/404Error" element={<Error404 />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/new-product" element={<ProductForm />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
