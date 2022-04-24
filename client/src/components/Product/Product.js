import React, { useState, useEffect, useCallback, useRef } from "react";
import Card from "react-bootstrap/Card";
import ProductItem from "./ProductItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "../../hooks/useFetch";

const Product = (props) => {
  const [page, setPage] = useState(1);
  const { loading, error, list } = useFetch(page, props.url);
  const loader = useRef(null);

  const handleObserver = useCallback((entries) => {
    const target = entries[0];
    console.log(target);
    if (target.isIntersecting) {
      setPage((prev) => prev + 1);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: "20px",
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div>
      <Row>
        {list.map((deliver) => (
          <Col sm={3} key={deliver.idx}>
            <Card
              style={{ width: "10rem", height: "15rem", marginBottom: "2rem" }}
            >
              <Card.Body>
                <Card.Title>
                  <ProductItem deliver={deliver} urlName = {props.url} />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <div ref={loader} />
    </div>
  );
};

export default Product;
