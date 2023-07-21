// src/ProductTable.js
import React from 'react';

const ProductTable = ({ products }) => {
  const calculateTotal = () => {
    return products.reduce((total, product) => total + product.price * product.quantity, 0);
  };

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price (₹)</th> {/* Displaying price in rupees */}
          <th>Amount (₹)</th> {/* Displaying amount in rupees */}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
            <td>₹{product.price}</td> {/* Displaying price in rupees */}
            <td>₹{product.price * product.quantity}</td> {/* Displaying amount in rupees */}
            <td>
              <button onClick={() => console.log('Add to Bag', product)}>Add to Bag</button>
            </td>
          </tr>
        ))}
        <tr className="total-row">
          <td colSpan="3">Total:</td>
          <td colSpan="2">₹{calculateTotal()}</td> {/* Displaying total in rupees */}
        </tr>
      </tbody>
    </table>
  );
};

export default ProductTable;
