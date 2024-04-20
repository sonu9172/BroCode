import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PlaceOrder = () => {
  const [data, setData] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePlaceOrder = () => {
    // Find the selected item in the data array
    const selectedItem = data.find(item => item.item_name === itemName);

    if (selectedItem) {
      const totalPrice = parseFloat(selectedItem.item_price) * parseInt(quantity, 10);
      // Place the order here (e.g., send an HTTP request to a server)
      console.log('Item:', selectedItem.item_name);
      console.log('Price per item:', selectedItem.item_price);
      console.log('Quantity:', quantity);
      console.log('Total Price:', totalPrice);
    } else {
      console.log('Item not found');
    }
  };

  return (
    <div>
      <h2>Place Order</h2>
      <div>
        <label>Item Name:</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </div>
      <div>
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default PlaceOrder;
