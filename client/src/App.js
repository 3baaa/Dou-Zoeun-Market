import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/MainPage";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Transaction from "./components/Transaction";
import { useSelector } from "react-redux";
import MyPage from "./components/MyPage";
import ProductForm from "./components/ProductForm";
import ChangeProductForm from './components/ChangeProductForm';


function App() {
  const getsomething = useSelector((state) => state);
  console.log(getsomething);
  const base_url = process.env.REACT_APP_BASE_URL;
  return (
    <>
      <Header />

      <Routes>
        <Route path="/pay" element={<Transaction />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<ProductDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/new-product" element={<ProductForm />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
