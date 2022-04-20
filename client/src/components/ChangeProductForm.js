import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './ProductForm.css';

function ProductForm(){
  return(
    <Form>
      <Form.Group className="mb-3" controlId="form1">
        <Form.Label>상품이미지</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form2">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목" />
        <Form.Text className="text-muted">
          한글자 이상 40글자 이내로 작성해주세요
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form3">
        <Form.Label>카테고리</Form.Label><br/>
        <div className='category'>카테고리 div1</div>
        <div className='category'>카테고리 div2</div>
        <div className='category'>카테고리 div3</div>
      </Form.Group>
      <Form.Group className="mb-3" controlId="form4">
        <Form.Label>거래지역</Form.Label><br/>
        <Button variant="primary" type="#">
          우리집
        </Button>&nbsp;
        <Button variant="primary" type="#">
          직접입력
        </Button><br/>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="form5">
        <Form.Label>상태</Form.Label>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="중고상품"
            name="group1"
            type={type}
            id={`form5-1`}
          />
          <Form.Check
            inline
            label="새상품"
            name="group1"
            type={type}
            id={`form5-2`}
          />
        </div>
     ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="form6">
        <Form.Label>교환</Form.Label>
        {['radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="교환불가"
            name="group2"
            type={type}
            id={`form6-1`}
          />
          <Form.Check
            inline
            label="교환가능"
            name="group2"
            type={type}
            id={`form6-2`}
          />
        </div>
     ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="form7">
        <Form.Label>가격</Form.Label>
        <Form.Control type="text" placeholder="숫자만 입력해주세요." />
        {['checkbox'].map((type) => (
          <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`form7`}
            label={`배송비 포함`}
          />
          </div>
        ))}
      </Form.Group>
      <Form.Group className="mb-3" controlId="form8">
        <Form.Label>설명</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="상품 설명을 입력해주세요.(10글자 이상)">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Form.Group>
      <Button variant="primary" type="submit">
        등록
      </Button>
    </Form>
  )
}

export default ProductForm