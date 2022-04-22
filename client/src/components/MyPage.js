import React, {useState} from 'react';
import {Tabs, Tab} from "react-bootstrap";
import Profile from './Profile';
import Product from "./Product";

export default function MyPage(){

    const[productNum, setPNum] = useState(10);
    const[favoriteNum, setFNum] = useState(5);
    const[commentNum, setCNum] = useState(3);


    return(
        <div style={{width:'80%', margin:'auto'}}>

           <Profile/>

            <Tabs defaultActiveKey="MyProduct" className="mb-5">
                <Tab eventKey="MyProduct" title={`나의 상품 목록 (${productNum})`} >
                    <Product url="mypage/product"/>
                </Tab>
                <Tab eventKey="MyFavorite" title={`찜 목록 (${favoriteNum})`}>
                   <Product url="mypage/favorite"/>
                </Tab>
                <Tab eventKey="MyReview" title={`거래 후기 (${commentNum})`} >
                    Comments
                </Tab>
            </Tabs>
        </div>
    )
}