import React from "react";
import { Modal, Container, Col, Row, Button } from "react-bootstrap";
import "../css/Login.scss";

const Login = (props) => {
  const base_url = process.env.REACT_APP_BASE_URL;
  return (
    <>
      <Modal
        {...props}
        className="Modal"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton className="ModalHead"></Modal.Header>
        <Modal.Body className="show-grid ModalBody">
          <Container>
            <Row>
              <div className="logo">
                <img src="logo.png" />
              </div>
              <h5>
                더 조은 마켓으로 1:1 거래 시작하기 <br />
              </h5>
              <p>간편하게 가입하고 상품을 확인하세요</p>
            </Row>
            <hr />
            <Row>
              <Col>
                <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png" />
                <Button
                  className="kakao"
                  variant="warning"
                  onClick={() =>
                    window.open(
                      `${process.env.REACT_APP_BASE_URL}/auth/kakao`,
                      "_blank"
                    )
                  }
                >
                  카카오톡으로 로그인 하기
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <img src="https://mblogthumb-phinf.pstatic.net/20160423_91/blue7532_14613899969277NJkI_JPEG/naver.png?type=w800" />
                <Button className="naver" variant="success">
                  네이버로 로그인 하기
                </Button>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_BxIFDiqRSADS_dryOjRxIdflIGgt8vianZy7fPOHmGz8HsBUi-lggRTn5-raiCOnF0Q&usqp=CAU" />
                <Button className="google" variant="light">
                  구글로 로그인 하기
                </Button>
              </Col>
            </Row>
            <hr />
            <label>
              도움이 필요하면 이메일 또는 고객센터 1010-235 로 문의
              부탁드립니다.
              <br />
              고객센터 운영시간: 09~18시 (점심시간 12~13시, 주말/공휴일 제외)
            </label>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
