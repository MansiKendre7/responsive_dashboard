
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import NavBar from './NavBar';
import ProductCard from './ProductCard';
import ProductTable from './ProductTable';
import './App.css';


const Dashboard = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Ball Pen', price: 10, quantity: 0, image: '/images/ballpen.jpg' },
    { id: 2, name: 'Gel Pen', price: 20, quantity: 0, image: '/images/gelPen.jpg' },
    { id: 3, name: 'Ink Pen', price: 30, quantity: 0, image: '/images/inkPen.jpg' },
    { id: 4, name: 'Set of Pens', price: 50, quantity: 0, image: '/images/setOfPens.jpg' },
  ]);

  // Function to update quantity for a product
  const handleQuantityChange = (productId, quantity) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, quantity } : product
      )
    );
  };

  return (
    <div className="app">
      <NavBar />
      <Container>
        <div className="products-container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuantityChange={handleQuantityChange} // Pass the onQuantityChange function to ProductCard
            />
          ))}
        </div>
        <ProductTable products={products} />
      </Container>
    </div>
  );
};

export default Dashboard;

