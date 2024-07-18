import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action'; // Adjust the path as necessary

const Description = () => {
  const [productData, setProductData] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:8000/products/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setLoading(false);
        setProductData(data);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addCart({ ...productData, qty: quantity }));
    navigate('/cart'); // Navigate to cart page after adding
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <Container fluid>
      <h1 className="text-center my-4">Product Description</h1>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="mb-3">
            <Row className="g-0">
              <Col md={5}>
                <Card.Img src={productData.image} className="img-fluid rounded-start" alt={productData.title} />
              </Col>
              <Col md={7}>
                <Card.Body>
                  <Card.Title>{productData.title}</Card.Title>
                  <Card.Text>{productData.description}</Card.Text>
                  <Card.Text>
                    <strong>Category:</strong> {productData.category}
                  </Card.Text>
                  <Card.Text>
                    <strong>Price:</strong> ${productData.price}
                  </Card.Text>
                  <div className="d-flex align-items-center mb-3">
                    <Button variant="secondary" onClick={decrementQuantity}>-</Button>
                    <span className="mx-3">{quantity}</span>
                    <Button variant="secondary" onClick={incrementQuantity}>+</Button>
                  </div>
                  <Button variant="primary" onClick={handleAddToCart}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Description;
