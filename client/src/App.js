import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import MyPage from './components/MyPage';
import ProductForm from './components/ProductForm';
import ChangeProductForm from './components/ChangeProductForm';
import MemberDeleteForm from './components/MemberDeleteForm';

function App() {
  const base_url = process.env.REACT_APP_BASE_URL;

  return (

    <>
      <Header />
      <Routes>
        {/* <a href={`${base_url}/login`}>로그인하러가기</a>
        <br /> */}
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/shop" element={<MyPage/>}/>
        <Route path="/ProductForm" element={<ProductForm/>}/>
        <Route path="/ChangeProductForm" element={<ChangeProductForm/>}/>
        <Route path="/MemberDeleteForm" element={<MemberDeleteForm/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
