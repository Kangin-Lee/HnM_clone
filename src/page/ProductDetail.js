import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Dropdown,
  Button,
  ButtonGroup,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  let { id } = useParams();

  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/Kangin-Lee/HnM_clone/products/${id}`;
    let reponse = await fetch(url);
    let data = await reponse.json();
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <div>
      <Container className="detail-area">
        <Row>
          <Col lg={6} className="detail-img">
            <img width={400} src={product?.img} />
          </Col>
          <Col lg={6} className="detail-info">
            <div className="detail-title">{product?.title}</div>
            <div>￦{product?.price}</div>
            <div>{product?.choice == true ? "Conscious choice" : ""}</div>
            <div>
              <ButtonGroup aria-label="Basic example" className="size-choice">
                {product?.size.map((size) => (
                  <Button variant="secondary">{size}</Button>
                ))}
              </ButtonGroup>
            </div>
            <div>
              <Button
                variant="danger"
                style={{ border: "none" }}
                className="product-buy"
              >
                구매하기
              </Button>
              <Button variant="dark" style={{ border: "none" }}>
                장바구니 담기
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;
