import React, { useState } from "react";
import Papa from 'papaparse'; // Import Papaparse for CSV parsing
import Table3 from "./Itemview.jsx";

function Inventory() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [qty, setQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [inventory, setInventory] = useState([]);

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        // Update inventory based on parsed CSV data
        setInventory(result.data);
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      }
    });
  };

  const handlePriceChange = (e) => {
    const newPrice = parseFloat(e.target.value);
    if (!isNaN(newPrice)) {
      setPrice(newPrice);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity)) {
      setQty(newQuantity);
    }
  };

  const calculateTotal = () => {
    return price * qty;
  };

  const handleAddItem = () => {
    const sum = calculateTotal();
    const newUser = { name, qty, price, sum };
    setUsers([...users, newUser]);
    setTotal(total + sum);
    setName("");
    setQty(0);
    setPrice(0);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="container-fluid bg-2 text-center">
      <h1 align="center">Update the Stock</h1>
      <br />
      <div className="row">
        <div className="col-sm-8">
          <table className="table table-bordered">
            <h3 className="title2"> Add Products </h3>
            <br />
            <tr className="row-1">
              <th>Product Name</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Item Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Price"
                  value={price}
                  onChange={handlePriceChange}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Qty"
                  value={qty}
                  onChange={handleQuantityChange}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={calculateTotal()}
                  className="form-control"
                  placeholder="Enter Total"
                  id="total_cost"
                  name="total_cost"
                  disabled
                />
              </td>
              <td>
                <button
                  className="btn btn-success"
                  type="button"
                  onClick={handleAddItem}
                >
                  Add
                </button>
              </td>
            </tr>
          </table>
          <h3 align="left"> History </h3>
          <Table3 items={users} />
        </div>

        <div className="col-sm-4">
          <div className="form-group" align="left">
            <h3>Total</h3>

            <input
              type="text"
              className="form-control"
              placeholder="Enter Total"
              required
              disabled
              value={total}
            />
            <br />
            <button
              type="button"
              className="btn btn-success"
              onClick={refreshPage}
            >
              {" "}
              <span>Complete</span>{" "}
            </button>
          </div>
        </div>
      </div>

      {/* File upload component */}
      <div>
        <h3>Upload Inventory CSV</h3>
        <input type="file" onChange={handleFileUpload} accept=".csv" />
        {/* Display inventory data in a table */}
        <h3>Current Inventory</h3>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
