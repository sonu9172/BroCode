import React from 'react';
import './Table3.css';

function Table3({ items }) { // Accept 'items' prop
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td> {/* Access 'name' instead of 'item' */}
              <td>{item.qty}</td> {/* Access 'qty' instead of 'quantity' */}
              <td>${item.price.toFixed(2)}</td> {/* Access 'price' instead of 'price' */}
              <td>${item.sum.toFixed(2)}</td> {/* Access 'sum' instead of 'total' */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table3;
