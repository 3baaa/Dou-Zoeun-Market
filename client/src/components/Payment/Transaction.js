import React from "react";
import { Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "../../css/Transaction.scss";
import "../../css/Main.scss";
import PointModal from "./PointModal";
import DaumPost from "../Product/DaumPost.js";

export default function Transaction() {
  const { id } = useParams();
  const { email } = useParams();
  const [list, setList] = useState([]);
  const [user, setUser] = useState([]);
  const [prod, setProd] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [point, setPoint] = useState();
  const prodPrice = parseInt(prod.price) + 2500;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/product/pay/${id}/${email}`
        );
        console.log(response.data);
        setImgUrl(response.data[2].ProductImgs[0].imgUrl);
        setList(response.data[0]);
        setUser(response.data[1]);
        setProd(response.data[2]);
        setAddress(prod.address);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  const onChangeModalIsOpen = (e) => {
    setModalIsOpen(true);
  };
  const commonList = list.map((list) => <li key={list.idx}>{list.Column}</li>);
  return (
    <>
      <div className="main mainPay">
        <div className="userImg">
          <img src={imgUrl}></img>
        </div>
        <div className="user_prod payInfo">
          <h3>더조은 마켓을 이용해 거래합니다.</h3>
          <hr />
          <div className="user_prod payInfo2">
            <p>
              <h4>{user.nickName || "(닉네임없음)"}</h4>님의
            </p>

            <p>
              <h4>{prod.title}</h4> 상품입니다.
            </p>
            <p>
              가격은 <h4>{prod.price}</h4>원 입니다.
            </p>
          </div>
          <hr />
          <h3>상세설명</h3>
          <p>{prod.content}</p>
        </div>
      </div>
      <hr />
      <Form>
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label>배송지</Form.Label>
            <div className="addr">
              <Form.Control value={address} disabled />
              <Button className="changeA" onClick={onChangeModalIsOpen}>
                변경
              </Button>
              {modalIsOpen ? (
                <DaumPost
                  modalIsOpen={true}
                  setModalIsOpen={setModalIsOpen}
                  setAddress={setAddress}
                />
              ) : (
                ""
              )}
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control placeholder="상세주소입력." />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>포인트</Form.Label>
            <div className="point">
              <Form.Control
                placeholder={`가용포인트는 ${user.point} 입니다.`}
                value={point}
              />
              <Button className="useP" onClick={() => setModalShow(true)}>
                사용
              </Button>
              <PointModal
                show={modalShow}
                point={user.point}
                setPoint={setPoint}
                setModalShow={setModalShow}
                onHide={() => setModalShow(false)}
              />
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>결제금액</Form.Label>
            <div className="list">
              <div className="list01">
                <ul>{commonList}</ul>
              </div>
              <div className="list02">
                <ul>
                  <li>{prod.price}</li>
                  <li>{prod.shippingIncluded}(2500원추가)</li>
                  <li>{prodPrice}</li>
                  <li>{point || 0}</li>
                  <li>{prodPrice - point || prodPrice}</li>
                </ul>
              </div>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>결제수단</Form.Label>
          </Form.Group>
          <Button type="submit" className="button">
            카카오페이
          </Button>
          <Form.Group className="mb-3 agree">
            <Form.Check
              type="checkbox"
              label="개인정보 제 3자 제공동의와 결제대행 서비스 이용약관에 동의합니다."
            />
            <div>
              <a href="#">자세히 보기</a>
            </div>
            <div>
              “번개장터_인증폰”, “BGZT Lab 1”, “BGZT Lab 2”, “BGZT 컬렉션”
              상점의 판매상품을 제외한 모든 상품들에 대하여, 번개장터㈜는
              통신판매중개자로서 중고거래마켓 번개장터의 거래 당사자가 아니며,
              입점판매자가 등록한 상품정보 및 거래에 대해 책임을 지지 않습니다.
            </div>
          </Form.Group>
        </fieldset>
      </Form>
    </>
  );
}
