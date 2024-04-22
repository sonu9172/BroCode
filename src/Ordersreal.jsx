import React, { useState } from 'react';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import Papa from 'papaparse';
import axios from 'axios';
import './Orderreal.css';

const PlaceOrder = () => {
  const [data, setData] = useState([]);
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [totalPrice, setTotalPrice] = useState('');

  const fetchDataFromFirebase = async () => {
    try {
      const storageRef = ref(getStorage());
      const csvRef = ref(storageRef, 'uploads/stationary_sales_dataset_static.csv');
      const url = await getDownloadURL(csvRef);
      const csvData = await axios.get(url);

      Papa.parse(csvData.data, {
        header: true,
        complete: (result) => {
          const items = result.data.reduce((acc, curr) => {
            Object.keys(curr).forEach((key) => {
              if (key.endsWith('_Price')) {
                const itemName = key.split('_')[0];
                if (!acc[itemName]) {
                  acc[itemName] = {
                    item_name: itemName,
                    item_price: parseFloat(curr[key]),
                  };
                }
              }
            });
            return acc;
          }, {});

          console.log('Items:', items); // Log the items object

          setData(Object.values(items));
        },
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handlePlaceOrder = () => {
    const selectedItem = data.find((item) => item.item_name === itemName);

    if (selectedItem) {
      const calculatedTotalPrice = parseFloat(selectedItem.item_price) * parseInt(quantity, 10);
      setItemPrice(selectedItem.item_price);
      setTotalPrice(calculatedTotalPrice);
    } else {
      alert('Item not found');
    }
  };

  const confirmOrder = () => {
    if (window.confirm(`Are you sure you want to place an order for ${quantity} ${itemName}(s) at $${itemPrice} each, totaling $${totalPrice}?`)) {
      // Place order logic here
      console.log('Order placed successfully.');
    }
  };

  return (
    <div className="place-order-container">
      <h2>Place Order</h2>
      <div className="form-group">
        <label>Item Name:</label>
        <input type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Quantity:</label>
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </div>
      <div className="form-group">
        <button onClick={handlePlaceOrder}>Get Price</button>
      </div>
      {itemPrice && (
        <div className="form-group">
          <label>Price per Item:</label>
          <span>{`$${itemPrice}`}</span>
        </div>
      )}
      {totalPrice && (
        <div className="form-group">
          <label>Total Price:</label>
          <span>{`$${totalPrice}`}</span>
        </div>
      )}
      {totalPrice && (
        <div className="form-group">
          <button onClick={confirmOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default PlaceOrder;
