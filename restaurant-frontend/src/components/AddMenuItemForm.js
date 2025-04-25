import React, { useState } from "react";
import { addMenuItem } from "../services/api";

const AddMenuItemForm = ({ restaurantId, onMenuItemAdded }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addMenuItem({ restaurantId, name, price: parseFloat(price) });
      setName("");
      setPrice("");
      onMenuItemAdded();
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Item Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} required />
      <br/>
      <label>Price:</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} required />

      <label>Price:</label>
      <input value={price} onChange={(e) => setPrice(e.target.value)} required />
      
      <button type="submit">Add Menu Item</button>
    </form>
  );
};

export default AddMenuItemForm;
