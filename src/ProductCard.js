// src/ProductCard.js
import React from 'react';
import { Card, Button, Form } from 'react-bootstrap';

const ProductCard = ({ product, onQuantityChange }) => {
  const handleQuantityChange = (event) => {
    const quantity = parseInt(event.target.value);
    onQuantityChange(product.id, quantity);
  };

  return (
    <Card className="product-card">
      <Card.Img variant="top" src={product.image} alt={product.name} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>Price: ₹{product.price}</Card.Text> {/* Displaying price in rupees */}
        <Form.Group controlId={`quantity-${product.id}`}>
          <Form.Label>Quantity:</Form.Label>
          <Form.Control as="select" value={product.quantity} onChange={handleQuantityChange}>
            {[0, 1, 2, 3, 4, 5].map((quantity) => (
              <option key={quantity} value={quantity}>
                {quantity}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={() => console.log('Add to Bag', product)}>
          Add to Bag
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
