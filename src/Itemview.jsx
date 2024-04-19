import React from 'react';
import './Table3.css'; // Import CSS file for styling

function Table3() {
  const items = [
    { item: 'Apple', quantity: 5, price: 1.5 },
    { item: 'Banana', quantity: 3, price: 0.75 },
    { item: 'Orange', quantity: 4, price: 1.0 },
    { item: 'Grapes', quantity: 2, price: 2.0 },
  ];

  return (
    <div className="table-container"> {/* Container for the table */}
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table3;
