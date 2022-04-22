import React from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import "../css/Transaction.scss";
import "../css/Main.scss";

export default function Transaction() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/product/pay`
        );
        setList(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  const commonList = list.map((list) => <li key={list.idx}>{list.Column}</li>);
  return (
    <>
      <hr />
      <Form className="main">
        <fieldset>
          <Form.Group className="mb-3">
            <Form.Label>배송지</Form.Label>
            <div className="addr">
              <Form.Control />
              <Button className="changeA">변경</Button>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Select>
              <option></option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>포인트</Form.Label>
            <div className="point">
              <Form.Control value="0" />
              <Button className="useP">전액사용</Button>
            </div>
          </Form.Group>
          <Form.Group>
            <Form.Label>결제금액</Form.Label>
            <div className="list">
              <ul>{commonList}</ul>
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
